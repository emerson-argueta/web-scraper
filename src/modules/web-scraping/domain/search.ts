import { SearchResult } from "./searchResult"
import { Url } from "./url"

export interface SearchProps {
    encodedURL: Url
    result?: SearchResult
}
export class Search {
    props: SearchProps

    private constructor(props: SearchProps) {
        this.props = props
    }

    public static create(props: SearchProps): Search {
        return new Search(props)
    }

}
