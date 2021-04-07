import { CategoriesRepositoryInMemory } from '@modules/car/repositories/in-memory/CategoriesRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Name Test',
      description: 'Description Test',
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const createCategory = await categoriesRepositoryInMemory.findByName(
      category.name,
    );

    expect(createCategory).toHaveProperty('id');
  });

  it('should not be able to create a new category with name existing', () => {
    expect(async () => {
      const category = {
        name: 'Name Test 2',
        description: 'Description Test',
      };
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
