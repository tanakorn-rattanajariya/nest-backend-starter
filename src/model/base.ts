import { EntitySchema } from 'typeorm';
import { Generated, PrimaryColumn } from 'typeorm';
export default class BaseModel extends EntitySchema {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;
}
