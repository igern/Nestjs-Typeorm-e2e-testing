import { Injectable, ConflictException, BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";
import { Repository } from "typeorm";
import { CatDTO } from "./cat.dto";

@Injectable()
export class CatService {
    constructor(@InjectRepository(Cat) private readonly catRepository: Repository<Cat>) {}
    
    async createCat(catDTO: CatDTO) {
        //check if cat exists
        let numOfCats = await this.catRepository.count({where: {name: catDTO.name}})
        if(numOfCats > 0) { // return exception
            throw new ConflictException();
        } else { // insert cat
            let cat = new Cat();
            cat.name = catDTO.name;
            cat.color = catDTO.color;
            let savedCat = await this.catRepository.save(cat)
            return savedCat;
        }
        
    }
    
    async findCat(name: string) {
        return await this.catRepository.findOneOrFail({where: {name: name}}).catch(() => {
            throw new BadRequestException();
        })
    }
}