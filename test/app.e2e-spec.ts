import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CatDTO } from '../src/cat/cat.dto';
import { Connection } from 'typeorm';

describe('AppController (e2e)', () => {
  let app;
  let module: TestingModule;
  let connection: Connection;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    connection = module.get(Connection)
    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    module.close();
  })

  afterEach(async () => {
    await connection.synchronize(true)
  })

  it('/cat (POST)', () => {
    let catDTO = new CatDTO()
    catDTO.name = "Ulla";
    catDTO.color = "Blue"
    return request(app.getHttpServer())
      .post('/cat')
      .send(catDTO)
      .expect(201)
      .expect({
        name: "Ulla",
        color: "Black",
        id: 1
      });
  });
});
