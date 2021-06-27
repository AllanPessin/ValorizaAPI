import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserSendCompliment {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const compliments = await complimentsRepository.findOne({
      where: {
        user_sender: user_id
      }
    })

    return compliments
  }
}

export { ListUserSendCompliment }