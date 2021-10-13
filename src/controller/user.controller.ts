import { Controller } from '@nestjs/common';
import { User } from 'model/index';
import { UserService } from 'service/index';
import BaseController from './base';
@Controller('users')
export class UserController extends BaseController<User> {
  constructor(private svc: UserService) {
    super(svc);
  }
}
