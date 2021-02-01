import express from "express";
import { searchByURLController } from "../../../usecase/searchByURL";

const searchRouter = express.Router();


searchRouter.post('/', (req, res) => searchByURLController.execute(req, res))

export {
    searchRouter
}