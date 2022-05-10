const { Router } = require("express");
const PlaceController = require("../controllers/placescontroller");
const placecontroller=new PlaceController();
const Place = require("../model/Place");
const router = Router();
router.get("/",  async(req, res) => {
    const places=await placecontroller.getAll();
    res.render('index', {
        title: "Places List",
        places
    })
});

router.get("/addplace",(req,res)=>{
    res.render('addplaces',{
        title:"Add Places"
    })
})
router.post("/addplace",async(req,res)=>{
    const place=new Place({
        title:req.body.placeName,
        image:req.body.placeImage,
        description:req.body.placeDesc,
    });
    await placecontroller.create(place);
    res.redirect('/')
})
router.get("/editplace/:id",async(req,res)=>{
    const placedata=await placecontroller.getById(req.params.id);
    const place= {
        title:placedata.title,
        image:placedata.image,
        description:placedata.description,
        _id:req.params.id,
    }; 
    res.render('editplaces',{
        title:"Edit Places",
        place
    })
})

router.post("/editplace",async(req,res)=>{
    const place=new Place({
        title:req.body.placeName,
        image:req.body.placeImage,
        description:req.body.placeDesc,
    });
    await placecontroller.update(req.body._id,place);
    res.redirect('/')
})

router.get("/delete/:id",async(req,res)=>{
 await placecontroller.delete(req.params.id)
 res.redirect('/')
})

router.get("/placeinfo/:id",async(req,res)=>{
    const placedata=await placecontroller.getById(req.params.id);
    const place= {
        title:placedata.title,
        image:placedata.image,
        description:placedata.description,
        _id:req.params.id,
    }; 
    res.render('placeinformation',{
        title:"Place Information",
        place
    })
})
module.exports = router;