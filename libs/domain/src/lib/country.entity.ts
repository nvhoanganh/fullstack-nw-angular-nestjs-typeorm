import { Column, Entity, OneToMany } from 'typeorm';
import { Suburb } from './suburb.entity';
import { BaseEntity } from './base.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Country extends BaseEntity {
  @ApiModelProperty()
  @Column({ length: 500 })
  name: string;

  @ApiModelProperty()
  @Column({ length: 2 })
  isoCode: string;

  @ApiModelProperty()
  @Column('point', { nullable: true })
  location?: string;

  @ApiModelProperty({ type: Suburb, isArray: true })
  @OneToMany(type => Suburb, suburb => suburb.country)
  suburbs: Suburb[];
}
