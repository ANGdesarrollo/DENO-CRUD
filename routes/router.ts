import { Router } from "npm:express";
import { create, deleteOne, getAll, update } from "../controllers/controller.ts";

export const router: Router = Router();

router.get("/", getAll);
router.post('/create', create);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteOne);
