import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from './create-login.dto';

export class UpdateLoginDto extends PartialType(RegisterDto) {}
