import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"

interface IAuthenticate {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticate) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({email})

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    const token = jwt.sign({
      email: user.email
    }, process.env.SECRET, {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }
}

export { AuthenticateUserService }
