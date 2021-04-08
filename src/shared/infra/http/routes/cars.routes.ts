import { Router } from 'express';

import { CreateCarController } from '@modules/car/useCases/createCar/CreateCarController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);

export { carsRoutes };
