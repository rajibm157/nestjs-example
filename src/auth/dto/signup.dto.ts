import { IsDate, IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsDate()
  dob: Date;

  @IsString()
  password: string;
}
