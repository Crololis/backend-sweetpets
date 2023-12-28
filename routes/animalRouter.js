import express from "express";
import {
    getAnimal,
    getAnimalbyId,
    saveAnimal
} from "../controllers/animalController.js"
import {
    getProd,
    getProdbyId,
    saveProd
} from "../controllers/prodController.js"


const router =  express.Router()
//GET
router.get('/animais', getAnimal);
router.get('/animais/:id', getAnimalbyId);
router.get('/prod', getProd)
router.get('/prod/:id', getProdbyId)
//POST
router.post('/animais', saveAnimal);
router.post('/prod', saveProd)

export default router