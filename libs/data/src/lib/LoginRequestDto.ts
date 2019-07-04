import { ApiModelProperty } from '@nestjs/swagger';
export class LoginRequestDto {
  @ApiModelProperty()
  readonly username: string;
  @ApiModelProperty()
  readonly password: string;
}
