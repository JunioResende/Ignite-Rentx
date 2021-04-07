import { CategoriesRepositoryInMemory } from '@modules/car/repositories/in-memory/CategoriesRepositoryInMemory';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let listCategoriesUseCase: ListCategoriesUseCase;

describe('List Categories', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    listCategoriesUseCase = new ListCategoriesUseCase(
      categoriesRepositoryInMemory,
    );
  });

  it('should be able to list all categories', async () => {
    await categoriesRepositoryInMemory.create({
      name: 'Category Test',
      description: 'description Test',
    });

    await listCategoriesUseCase.execute();

    // console.log(categories);
  });
});
