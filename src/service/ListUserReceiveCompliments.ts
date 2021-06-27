import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"

class ListUserReceiverCompliment {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository)
    const compliments = await complimentsRepository.findOne({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    })

    return compliments
  }
}

export { ListUserReceiverCompliment }

/**
 * 54:14
 */