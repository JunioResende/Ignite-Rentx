import { Category } from '@modules/car/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '@modules/car/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
