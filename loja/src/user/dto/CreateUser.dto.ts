import { MinLength, IsEmail, IsNotEmpty } from 'class-validator';
import { EmailIsUnique } from '../validation/unique-mail.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  name: string;

  @IsEmail(undefined, { message: 'O email informado é inválido.' })
  @EmailIsUnique({ message: 'Este email já foi cadastrado.' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  password: string;
}
