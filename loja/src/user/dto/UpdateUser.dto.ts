import { MinLength, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailIsUnique } from '../validation/unique-mail.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'O email informado é inválido.' })
  @EmailIsUnique({ message: 'Este email já foi cadastrado.' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  @IsOptional()
  password: string;
}
