import { CreateCategoryController } from '@modules/car/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '@modules/car/useCases/listCategories/ListCategoriesController';
import { Router } from 'express';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle,
);

categoriesRoutes.get('/', listCategoriesController.handle);

export { categoriesRoutes };
