import { Injectable } from '@nestjs/common';
import { EntitySchema, Repository, ObjectLiteral } from 'typeorm';

export default class BaseService<T extends EntitySchema> {
  private repository: Repository<T>;
  constructor(reposition: Repository<T>) {
    this.repository = reposition;
  }
  public list(): Promise<T[]> {
    return this.repository.find();
  }

  public get(id: string): Promise<T> {
    return this.repository.findOne(id);
  }
  public create(data: T): Promise<T> {
    const newData = data as ObjectLiteral & EntitySchema;
    return this.repository.save(newData);
  }
  public update(data: T, id: string): Promise<T> {
    const newData = { ...data, id } as ObjectLiteral & EntitySchema;
    return this.repository.save(newData);
  }
  public remove(id: string): Promise<void> {
    this.repository.delete(id);
    return;
  }
}
