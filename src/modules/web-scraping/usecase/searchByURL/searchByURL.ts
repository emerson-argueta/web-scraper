import { Search, SearchProps } from "../../domain/search"
import { SearchResult } from "../../domain/searchResult"
import { Url, UrlProps } from "../../domain/url"
import { ISearchRepo } from "../../repository/searchRepo"
import { SearchByURLDTO } from "./searchByURLDTO"

export class SearchByURL {
    private searchRepo: ISearchRepo

    constructor(searchRepo: ISearchRepo) {
        this.searchRepo = searchRepo
    }

    public async execute(dto: SearchByURLDTO): Promise<Search> {
        let result: SearchResult

        const urlProps: UrlProps = {
            baseURL: dto.baseURL,
            queryParams: dto.queryParams,
        }

        const encodedURL = Url.create(urlProps)
        try {
            result = await this.searchRepo.executeSearch(encodedURL)
        } catch (error) {
            return error
        }

        let searchProps: SearchProps = {
            encodedURL: encodedURL,
            result: result
        }

        return Search.create(searchProps)
    }
}