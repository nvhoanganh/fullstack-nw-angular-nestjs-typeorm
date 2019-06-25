import { ApiModelProperty } from '@nestjs/swagger';
import { TicketType, Ticket } from '@fullstack/domain';
export class CreateTicketDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty({ enum: [0, 1, 2] })
  readonly type: TicketType;
}

export class LoginRequestDto {
  @ApiModelProperty()
  readonly username: string;

  @ApiModelProperty()
  readonly password: string;
}

export class JwtTokenDto {
  @ApiModelProperty()
  readonly token: string;
}

export class UserDto {
  @ApiModelProperty()
  readonly id: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly firstName: string;

  @ApiModelProperty()
  readonly lastName: string;
}

export class TicketDto implements Ticket {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly title: string;
  @ApiModelProperty({ enum: [0, 1, 2] })
  readonly type: TicketType;
}

export class HealthCheckDto {
  @ApiModelProperty()
  readonly status: string;
}
