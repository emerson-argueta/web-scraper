import { SearchResult } from "../domain/searchResult";
import { Url } from "../domain/url";

export interface ISearchRepo {
    executeSearch(url: Url): Promise<SearchResult>;
}