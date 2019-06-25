import { Module } from '@nestjs/common';

// orm
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketModule } from './ticket/ticket.module';
import { HealthCheckModule } from './healthz/healthz.module';
import { getMetadataArgsStorage } from 'typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'fullstack',
      password: 'fullstack',
      database: 'fullstack',
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true
    }),
    UserModule,
    HealthCheckModule,
    TicketModule,
    AuthModule
  ]
})
export class AppModule {}
