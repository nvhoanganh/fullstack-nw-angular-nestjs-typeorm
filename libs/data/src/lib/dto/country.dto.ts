import { SuburbDto } from './suburb.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseEntityDto } from './base.dto';

export class CountryDto extends BaseEntityDto {
  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  isoCode: string;

  @ApiModelProperty()
  location?: string;
}
