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


module.exports = router;