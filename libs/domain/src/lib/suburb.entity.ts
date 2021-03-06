import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Point } from 'geojson';
import { BaseEntity } from './base.entity';
import { Country } from './country.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity()
export class Suburb extends BaseEntity {
  @ApiModelProperty()
  @Column({ length: 500 })
  name: string;

  @ApiModelProperty()
  @Column({ length: 5 })
  postcode: string;

  @ApiModelProperty()
  @Column('point', { nullable: true })
  location?: string;

  @ApiModelProperty({ type: Country })
  @ManyToOne(type => Country, user => user.suburbs)
  country: Country;
}
