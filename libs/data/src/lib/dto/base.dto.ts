import { ApiModelProperty } from '@nestjs/swagger';
export class BaseEntityDto {
  @ApiModelProperty()
  id: number;

  @ApiModelProperty()
  dataCreated: Date;

  @ApiModelProperty()
  dateUpdate?: Date;
}
