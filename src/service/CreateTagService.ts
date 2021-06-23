import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"

class CreateTagService {
  async execute(name: string) {
    const tagRepository = getCustomRepository(TagsRepository)
    
    if(!name) {
      throw new Error("Incorrect name")
    }

    const tagAlreadyExists = await tagRepository.findOne({name})

    if(tagAlreadyExists) {
      throw new Error("tag already exists")
    }

    const tag = tagRepository.create({
      name
    })

    await tagRepository.save(tag)
    return tag
  }
}

export { CreateTagService }