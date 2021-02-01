import { ISearchRepo } from "../../searchRepo";
import { Url } from "../../../domain/url";
import { SearchResult, SearchResultProps } from "../../../domain/searchResult";
import { puppeteerPage } from "../../../../../shared/infrastructure/browser";

export class SearchRepo implements ISearchRepo {
    constructor() {
    }
    async executeSearch(url: Url): Promise<SearchResult> {
        const page = await puppeteerPage()

        const response = await page.goto(url.props.EncodedURL || "")


        const status = response?.status()
        const body = await response?.buffer()

        const resultProps: SearchResultProps = { httpStatus: status || 400, htmlBody: body }
        const result = SearchResult.create(resultProps)

        await page.close()

        return result

    }
}