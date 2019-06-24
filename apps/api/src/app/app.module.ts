import { Module } from '@nestjs/common';

// orm
import { TypeOrmModule } from '@nestjs/typeorm';

//jwt
import { JwtModule } from '@nestjs/jwt';
import { TicketModule } from './ticket/ticket.module';
import { HealthCheckModule } from './healthz/healthz.module';
import { getMetadataArgsStorage } from 'typeorm';
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
    TicketModule,
    HealthCheckModule,
    JwtModule.register({
      secretOrPrivateKey: 'key12345'
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
