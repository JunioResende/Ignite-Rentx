import { container } from 'tsyringe';

import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { CategoriesRepository } from '@modules/car/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/car/infra/typeorm/repositories/SpecificationsRepository';
import { ICategoriesRepository } from '@modules/car/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/car/repositories/ISpecificationsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
