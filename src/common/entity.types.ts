import { LoginEntity } from 'src/modules/logins/entities/login.entity';

export interface IUser {
  RelLogin: LoginEntity;
  userNick: string;
}
