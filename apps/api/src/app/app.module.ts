import {
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckModule } from './healthz/healthz.module';
import { getMetadataArgsStorage } from 'typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';
import { SuburbModule } from './suburb/suburb.module';
import { UserService } from './user/user.service';
import { CoreModule } from './core/core.module';
import { UserRole, User } from '@fullstack/domain';
import { environment } from '../environments/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: environment.db.host,
      port: environment.db.port,
      username: environment.db.username,
      password: environment.db.password,
      database: environment.db.database,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      synchronize: true
    }),
    CoreModule,
    UserModule,
    CountryModule,
    SuburbModule,
    HealthCheckModule,
    AuthModule
  ]
})
export class AppModule
  implements OnApplicationBootstrap, OnApplicationShutdown {

  constructor(private usrService: UserService) {}

  async onApplicationBootstrap() {
    console.log(`application started`);

    const adminUser = await this.usrService.findOneByEmail('admin');
    if (!adminUser) {
      console.log(
        `admin user not created, this is a new database, need to seed it`
      );
      await this.SeedData();
    }
  }

  async onApplicationShutdown(signal?: any) {
    console.log(`Application shutdown...`, signal);
  }

  private async SeedData() {
    await this.usrService.addOne(<User>{
      email: 'admin',
      firstName: 'admin',
      lastName: '',
      hashedPassword: 'admin',
      userRole: UserRole.Admin
    });
  }
}
