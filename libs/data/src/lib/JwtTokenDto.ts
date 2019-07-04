import { ApiModelProperty } from '@nestjs/swagger';
export class JwtTokenDto {
  @ApiModelProperty()
  readonly token: string;
}
