import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginEntity } from './entities/login.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class LoginsService {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly loginRepo: Repository<LoginEntity>,
    private readonly userService: UsersService,
  ) {}
  async create({ password, ...body }: RegisterDto) {
    try {
      await this.findExisting(body.email, body.userName);
      const newPass = await hash(password, 10);
      const loginEntity = await this.loginRepo.save({
        ...body,
        password: newPass,
      });
      await this.userService.create({
        RelLogin: loginEntity,
        userNick: body.userName,
      });
    } catch (error) {
      throw error;
    }
  }

  private async findExisting(email: string, userName: string) {
    try {
      const exists = await this.loginRepo.findOne({
        where: [{ email }, { userName }],
      });
      if (exists) throw new ConflictException('Ya existen uno de tus datos');
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }
}
