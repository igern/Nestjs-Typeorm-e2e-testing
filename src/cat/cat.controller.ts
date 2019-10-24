import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CatDTO } from "./cat.dto";

@Controller('cat')
export class CatController {
    constructor(private readonly CatService: CatService) {}

    @Post()
    async createCat(@Body() catDTO : CatDTO) {
        return await this.CatService.createCat(catDTO)
    }

    @Get(':name')
    async findCat(@Param() params) {
        return await this.CatService.findCat(params.name);
    }
}