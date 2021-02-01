import express from "express";
import { searchRouter } from "../../../../modules/web-scraping/infrastructure/http/routes/search";


const v1Router = express.Router();

v1Router.use('/search', searchRouter);


export { v1Router }