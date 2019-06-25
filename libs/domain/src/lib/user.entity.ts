import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  User = 0,
  Admin = 1
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  hashedPassword: string;

  @Column('enum', { enum: UserRole })
  userRole: number;
}
