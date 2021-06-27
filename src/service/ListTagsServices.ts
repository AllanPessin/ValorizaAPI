import { getCustomRepository } from "typeorm"
import { TagsRepository } from "../repositories/TagsRepository"
import { classToPlain } from "class-transformer"

class ListTagsServices {
  async execute() {
    const tagRespository = getCustomRepository(TagsRepository)

    const tags = await tagRespository.find()

    return classToPlain(tags)
  }
}

export { ListTagsServices }
