export interface SearchResultProps {
    httpStatus: number
    htmlBody?: Buffer
}
export class SearchResult {
    props: SearchResultProps

    private constructor(props: SearchResultProps) {
        this.props = props
    }

    public static create(props: SearchResultProps): SearchResult {
        return new SearchResult(props)
    }
}