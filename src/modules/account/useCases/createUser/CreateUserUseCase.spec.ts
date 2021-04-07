import { UsersRepositoryInMemory } from '@modules/account/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user = {
      name: 'Name Test',
      email: 'teste@testmail.com',
      password: '123456',
      driver_license: '01010101',
    };

    await createUserUseCase.execute({
      name: user.name,
      email: user.email,
      password: user.password,
      driver_license: user.driver_license,
    });

    const userCreate = await usersRepositoryInMemory.findByEmail(user.email);

    // console.log(userCreate);

    expect(userCreate).toHaveProperty('id');
  });

  it('should not be able to create a new user with email existing', () => {
    expect(async () => {
      const user = {
        name: 'Name Test',
        email: 'teste@testmail.com',
        password: '123456',
        driver_license: '01010101',
      };
      await createUserUseCase.execute({
        name: user.name,
        email: user.email,
        password: user.password,
        driver_license: user.driver_license,
      });
      await createUserUseCase.execute({
        name: user.name,
        email: user.email,
        password: user.password,
        driver_license: user.driver_license,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
