import { CarsRepositoryInMemory } from '@modules/car/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Name Test',
      description: 'Description Test',
      daily_rate: 50,
      license_plate: 'ABC-1234',
      fine_amount: 100,
      brand: 'Brand Test',
      category_id: '1a1a1a1a',
    });
  });

  it('should not be able to create a new car with license plate existing', () => {
    expect(async () => {
      const car = {
        name: 'Name Test',
        description: 'Description Test',
        daily_rate: 50,
        license_plate: 'ABC-1234',
        fine_amount: 100,
        brand: 'Brand Test',
        category_id: '1a1a1a1a',
      };
      await createCarUseCase.execute({
        name: car.name,
        description: car.description,
        daily_rate: car.daily_rate,
        license_plate: car.license_plate,
        fine_amount: car.fine_amount,
        brand: car.brand,
        category_id: car.category_id,
      });
      await createCarUseCase.execute({
        name: car.name,
        description: car.description,
        daily_rate: car.daily_rate,
        license_plate: car.license_plate,
        fine_amount: car.fine_amount,
        brand: car.brand,
        category_id: car.category_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Description Test',
      daily_rate: 50,
      license_plate: 'ABC-1234',
      fine_amount: 100,
      brand: 'Brand Test',
      category_id: '1a1a1a1a',
    });

    console.log(car);

    expect(car.available).toBe(true);
  });
});
