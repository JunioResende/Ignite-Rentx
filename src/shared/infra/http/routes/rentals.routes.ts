import { Router } from 'express';

import { CreateRentalController } from '@modules/rental/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rental/useCases/devolutionRental/DevolutionRentalController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalsRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalsRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalController.handle,
);

export { rentalsRoutes };
