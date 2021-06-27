import { Request, Response } from "express";
import { ListUserSendCompliment } from "../service/ListUserSendCompliments";

class ListUserSenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listUserSendCsomplimentsService = new ListUserSendCompliment()
    const compliments = await listUserSendCsomplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export { ListUserSenderController }