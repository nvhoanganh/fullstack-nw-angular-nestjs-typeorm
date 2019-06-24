import { ApiModelProperty } from '@nestjs/swagger';
import { HealthCheck, TicketTypeValues } from './interfaces';
import { TicketType, Ticket } from '@fullstack/domain';
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
