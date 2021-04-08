import { CarsRepositoryInMemory } from '@modules/car/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description car',
      daily_rate: 50,
      license_plate: 'ABC-1234',
      fine_amount: 25,
      brand: 'Brand Car',
      category_id: '1a1a1a1a1a',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by the name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description car',
      daily_rate: 50,
      license_plate: 'ABC-1234',
      fine_amount: 25,
      brand: 'Brand Car test',
      category_id: '1a1a1a1a1a',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car1',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by the brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description car',
      daily_rate: 50,
      license_plate: 'ABC-1234',
      fine_amount: 25,
      brand: 'Brand Car test',
      category_id: '1a1a1a1a1a',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Brand Car test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by the category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description car',
      daily_rate: 50,
      license_plate: 'ABC-1234',
      fine_amount: 25,
      brand: 'Brand Car test',
      category_id: '1a1a1a1a1a',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '1a1a1a1a1a',
    });

    expect(cars).toEqual([car]);
  });
});
