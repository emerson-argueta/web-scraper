import { Url, UrlProps } from "../../../domain/url"
import { SearchRepo } from "./searchRepo"

test("should execute search successfully", async () => {
    const baseURL = "https://www.google.com/search"

    const queryKey = "q"
    const queryValue = "850008366079"
    const toBeMatchedKey = "tbm"
    const toBeMatchedValue = "shop"


    const queryParams: Map<string, string> = new Map<string, string>([[queryKey, queryValue], [toBeMatchedKey, toBeMatchedValue]])

    const urlProps: UrlProps = {
        baseURL: baseURL,
        queryParams: queryParams
    }
    const url = Url.create(urlProps)
    const searchRepo = new SearchRepo()
    const result = await searchRepo.executeSearch(url)

    expect(result.props.httpStatus).toBe(200)
}, 10000)