import { ApiModelProperty } from '@nestjs/swagger';
export class HealthCheckDto {
  @ApiModelProperty()
  readonly status: string;
}
