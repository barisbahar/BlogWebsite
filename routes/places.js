const { Router } = require("express")
const router = Router();
router.get("/", async (req, res) => {
    res.render('index', {
        title: "Places List",
    })
});

router.get("/addplace",async(req,res)=>{
    res.render('addplaces',{
        title:"Add Places"
    })
})


module.exports = router;