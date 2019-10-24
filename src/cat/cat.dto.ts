import {Length} from 'class-validator'

export class CatDTO {
    @Length(1, 255)
    name: string;

    @Length(1, 64)
    color: string;
}