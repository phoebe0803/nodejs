// entity/photo.ts
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel()
export class Notes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })

  @Column('text')
  msg: string;

  @Column()
  finish_status: number;

  @Column({ type: 'date' }) // Not recommended
  time: string;



}
