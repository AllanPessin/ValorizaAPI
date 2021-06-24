import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Comploments";

@EntityRepository(Compliment)
class ComplimentsRepository extends Repository<Compliment> {

}

export { ComplimentsRepository }