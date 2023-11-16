var express = require('express');
var router = express.Router();
// Créer une instance de articles.
const Articles = require('../models/article');

8
    // afficher la liste des articles.
    router.get('/', async (req, res, )=> {
    try {
    const articles = await Articles.find().populate("scategorieID").exec();
    res.status(200).json(articles);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });


// créer un nouvelle catégorie
router.post('/', async (req, res) => {

const nouvarticle = new Article(req.body)
try {
const response =await nouvarticle.save();
const articles = await
Article.findById(response._id).populate("scategorieID").exec();
res.status(200).json(articles);
} catch (error) {
res.status(404).json({ message: error.message });
}

});
// chercher une catégorie
router.get('/:ArticlesId',async(req, res)=>{

    try {
        const art = await Articles.findById(req.params.ArticlesId);
        
        res.status(200).json(art);
        
        } catch (error) {
        res.status(404).json({ message: error.message });
        }

});


module.exports = router;