import { CountryDto } from './country.dto';
import { BaseEntityDto } from './base.dto';
import { ApiModelProperty } from '@nestjs/swagger';
export class SuburbDto extends BaseEntityDto {
  @ApiModelProperty()
  name: string;

  @ApiModelProperty()
  postcode: string;

  @ApiModelProperty()
  location?: string;

  @ApiModelProperty()
  country: CountryDto;
}
