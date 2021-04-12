import { Router } from 'express';

import { CreateRentalController } from '@modules/rental/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rental/useCases/devolutionRental/DevolutionRentalController';
import { ListRentalsByUserController } from '@modules/rental/useCases/listRentalsByUser/ListRentalsByUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalsRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalsRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalController.handle,
);

rentalsRoutes.get(
  '/user',
  ensureAuthenticated,
  listRentalsByUserController.handle,
);

export { rentalsRoutes };
