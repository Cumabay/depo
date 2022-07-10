import { DataSource } from 'typeorm';

const myDataSource = new DataSource({
  type: 'sqlite',
  database: 'mydb.sql',
  entities: ['src/entity/*.js'],
  logging: true,
  synchronize: true,
});
