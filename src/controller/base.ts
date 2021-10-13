import {
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import BaseService from 'service/base';
import { EntitySchema } from 'typeorm';
export default class BaseController<T extends EntitySchema> {
  private service: BaseService<T>;
  constructor(service: BaseService<T>) {
    this.service = service;
  }
  @Post()
  async create(@Body() data: T): Promise<T> {
    return await this.service.create(data);
  }
  @ApiParam({ name: 'id' })
  @Put(':id')
  async update(@Body() data: T, @Param() params): Promise<T> {
    return await this.service.update(data, params.id);
  }
  @ApiParam({ name: 'id' })
  @Delete(':id')
  async delete(@Param() params): Promise<void> {
    return await this.service.remove(params.id);
  }

  @Get()
  async findAll(): Promise<Array<T>> {
    return await this.service.list();
  }

  @ApiParam({ name: 'id' })
  @Get(':id')
  async get(@Param() params): Promise<T> {
    return await this.service.get(params.id);
  }
}
