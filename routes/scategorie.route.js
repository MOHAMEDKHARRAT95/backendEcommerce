var express = require('express');
var router = express.Router();
// Créer une instance de scategorie.
const SCategorie = require('../models/scategorie');

8
// afficher la liste des scategories.
router.get('/', async (req, res)=> {

try{
    const scat=await SCategorie.find()
    return res.status(200).json(scat)
}
catch(error){
    res.status(404).json({message:error.message});
}
});
// créer un nouvelle scatégorie
router.post('/', async (req, res) => {

const newscategorie = new SCategorie(req.body)

try{
await newscategorie.save()
res.status(200).json(newscategorie)
}
catch(error){
    res.status(404).json({message:error.message}); 
}

});
// chercher une scatégorie
router.get('/:scategorieId',async(req, res)=>{

    try {
        const scat = await SCategorie.findById(req.params.scategorieId);
        
        res.status(200).json(scat);
        
        } catch (error) {
        res.status(404).json({ message: error.message });
        }

});
// modifier une scatégorie
router.put('/:scategorieId', async (req, res)=> {
    try {
        const scat1 = await SCategorie.findByIdAndUpdate(
        req.params.scategorieId,
        { $set: req.body },
        { new: true }
        );
        res.status(200).json(scat1);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });
        
// Supprimer une scatégorie

router.delete('/:scategorieId', async (req, res)=> {
    try {
         await SCategorie.findByIdAndDelete(req.params.scategorieId);
    res.json({ message: "scategorie deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
     
    });


module.exports = router;