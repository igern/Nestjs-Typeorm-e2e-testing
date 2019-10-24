import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from 'typeorm'

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255, unique: true})
    name: string;

    @Column({length: 64})
    color: string;

    @BeforeInsert()
    private paint() {
        this.color = 'Black'
    }
}