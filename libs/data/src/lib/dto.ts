import { ApiModelProperty } from '@nestjs/swagger';
import { Ticket, TicketType, HealthCheck, TicketTypeValues } from './interfaces';
export class CreateTicketDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty({ enum: TicketTypeValues })
  readonly type: TicketType;
}

export class TicketDto implements Ticket {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()

  readonly title: string;
  @ApiModelProperty({ enum: TicketTypeValues })
  readonly type: TicketType;
}

export class HealthCheckDto implements HealthCheck {
  @ApiModelProperty()
  readonly status: string;
}
