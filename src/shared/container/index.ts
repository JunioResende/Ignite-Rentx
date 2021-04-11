import { container } from 'tsyringe';

import '@shared/container/providers';

import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { CarsImagesRepository } from '@modules/car/infra/typeorm/repositories/CarsImagesRepository';
import { CarsRepository } from '@modules/car/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/car/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/car/infra/typeorm/repositories/SpecificationsRepository';
import { ICarsImagesRepository } from '@modules/car/repositories/ICarsImagesRepository';
import { ICarsRepository } from '@modules/car/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/car/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/car/repositories/ISpecificationsRepository';
import { RentalsRepository } from '@modules/rental/infra/typeorm/repositories/RentalsRepository';
import { IRentalsRepository } from '@modules/rental/repositories/IRentalsRepository';

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

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository,
);
