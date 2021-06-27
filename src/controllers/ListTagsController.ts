import { Request, Response } from "express";
import { ListTagsServices } from "../service/ListTagsServices";

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagsServices()

    const tags = await listTagService.execute()

    return response.json(tags)
  }
}

export { ListTagsController }