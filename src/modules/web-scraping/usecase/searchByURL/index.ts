import { searchRepo } from "../../repository";
import { SearchByURL } from "./searchByURL";
import { SearchByURLController } from "./searchByURLController";

const searchByURL = new SearchByURL(searchRepo);
const searchByURLController = new SearchByURLController(searchByURL);

export {
    searchByURL,
    searchByURLController
}