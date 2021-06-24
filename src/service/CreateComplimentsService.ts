import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

interface IComplimentsReuest {
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentsReuest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
  }
}

export { CreateComplimentService }