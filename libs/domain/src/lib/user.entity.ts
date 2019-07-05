import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

export enum UserRole {
  User,
  Admin
}

@Entity()
export class User extends BaseEntity {
  @ApiModelProperty()
  @Column({ unique: true})
  email: string;

  @ApiModelProperty()
  @Column()
  firstName: string;

  @ApiModelProperty()
  @Column()
  lastName: string;

  @Column()
  hashedPassword: string;

  @ApiModelProperty()
  @Column('enum', { enum: UserRole })
  userRole: string;
}
