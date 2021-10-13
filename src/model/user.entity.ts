import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import BaseModel from './base';
@Entity()
export default class User extends BaseModel {
  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ApiProperty()
  @Column({ default: true })
  is_active: boolean;
}
