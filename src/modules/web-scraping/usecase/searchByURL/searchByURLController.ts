import express, { query } from "express";
import { BaseController } from "../../../../shared/infrastructure/http/BaseController";
import { SearchByURL } from "./searchByURL";
import { SearchByURLDTO } from "./searchByURLDTO";

export class SearchByURLController extends BaseController {
    private useCase: SearchByURL;

    constructor(useCase: SearchByURL) {
        super();
        this.useCase = useCase;
    }

    async executeImpl(req: express.Request, res: express.Response): Promise<any> {
        if (!req.body.baseURL) {
            this.badRequest(res)
        }
        const baseURL = req.body.baseURL;
        const queryParams: Map<string, string> = new Map(Object.entries(req.body.queryParams || {}));

        const dto: SearchByURLDTO = {
            baseURL: baseURL,
            queryParams: queryParams
        }

        try {
            const search = await this.useCase.execute(dto);
            const status = search.props.result?.props.httpStatus
            const htmlBody = search.props.result?.props.htmlBody
            if (status && status == 200 && htmlBody) {
                res.set('Content-Type', 'text/html')
                return res.send(htmlBody)
            }

            return this.fail(res, new Error(status + "" || "no status"));

        } catch (err) {
            return this.fail(res, err)
        }
    }
}