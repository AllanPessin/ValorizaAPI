import { Request, Response } from "express";
import { ListUserReceiverCompliment } from "../service/ListUserReceiveCompliments";

class ListUserReceiverController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listUserReceiveComplimentsService = new ListUserReceiverCompliment()
    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export { ListUserReceiverController };