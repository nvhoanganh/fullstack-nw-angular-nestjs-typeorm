import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckModule } from './healthz/healthz.module';
import { getMetadataArgsStorage } from 'typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';
import { SuburbModule } from './suburb/suburb.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'fullstack',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true
    }),
    UserModule,
    CountryModule,
    SuburbModule,
    HealthCheckModule,
    AuthModule
  ]
})
export class AppModule {}
