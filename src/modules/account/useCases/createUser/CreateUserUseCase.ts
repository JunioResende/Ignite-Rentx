import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { hash } from 'bcryptjs';

import { AppError } from '@shared/errors/AppError';

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already Exists!');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
