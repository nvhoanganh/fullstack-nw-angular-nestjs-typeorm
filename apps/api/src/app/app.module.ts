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
