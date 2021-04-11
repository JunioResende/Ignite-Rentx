import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Category Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = v4();
    const password = await hash('admin', 8);

    await connection.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", driver_license, created_at )
        values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'XXXXXX', 'now()')
      `,
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new category', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@rentx.com.br',
      password: 'admin',
    });

    const { token } = responseToken.body.token;

    await request(app)
      .post('/categories')
      .send({
        name: 'Categories Supertest',
        description: 'Categories Supertest description',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });
  });

  it('should not be able to create a new category with name exists', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'admin@rentx.com.br',
      password: 'admin',
    });

    const { token } = responseToken.body.token;

    await request(app)
      .post('/categories')
      .send({
        name: 'Categories Supertest',
        description: 'Categories Supertest description',
      })
      .set({
        Authorization: `Bearer ${token}`,
      });
  });
});
