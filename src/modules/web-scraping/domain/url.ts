import { URL } from "url"

export interface UrlProps {
    baseURL: string,
    queryParams?: Map<string, string>,
    EncodedURL?: string
}
export class Url {
    props: UrlProps

    private constructor(props: UrlProps) {
        this.props = props
    }

    public static create(props: UrlProps): Url {

        const encodedURL = Url.buildURL(props.baseURL, props.queryParams)
        props.EncodedURL = encodedURL

        return new Url(props)

    }
    private static buildURL(baseURL: string, queryParams?: Map<string, string>): string {
        const url = new URL(baseURL)
        if (queryParams) {
            queryParams.forEach((value, key) => {
                url.searchParams.append(key, value);
            })
        }


        return url.href
    }

}