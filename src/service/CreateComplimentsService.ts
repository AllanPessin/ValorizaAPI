import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { UserRepository } from "../repositories/UserRepository"

interface IComplimentsReuest {
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentsReuest) {
    
    const [complimentsRepository, userRepository] = await Promise.all([
      getCustomRepository(ComplimentsRepository),
      getCustomRepository(UserRepository)
    ])
    
    if(user_sender === user_receiver) {
      throw new Error("Incorrect user receiver")
    }
    const userReceiver = await userRepository.findOne(user_receiver)

    if(!userReceiver) {
      throw new Error("User receiver does not exists")
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}

export { CreateComplimentService }