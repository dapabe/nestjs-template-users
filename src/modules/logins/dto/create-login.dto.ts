import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RESTRICTIONS } from 'src/common/constants/RESTRICTIONS';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(RESTRICTIONS.USER.MAX_NICK_LENGTH)
  userNick: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  password: string;
}
