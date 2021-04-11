import request from 'supertest';

import { app } from '@shared/infra/http/app';

describe('Create Category Controller', () => {
  it('test', async () => {
    await request(app).get('/car/available').expect(201);
  });
});
