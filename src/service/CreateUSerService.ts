import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string
  email: string
  password: string
  admin?: boolean
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository =  getCustomRepository(UserRepository) 

    const userExists = await userRepository.findOne({email})

    if(userExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    })

    await userRepository.save(user)
    return user
  }
}

export { CreateUserService }