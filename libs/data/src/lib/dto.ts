import { ApiModelProperty } from '@nestjs/swagger';
import { Ticket, TicketType, HealthCheck } from './interfaces';

export class CreateTicketDto {
  @ApiModelProperty()
  readonly title: string;

  // @ApiModelProperty({ enum: ['Silver', 'Gold', 'Platnium'] })
  readonly type: TicketType;
}

export class TicketDto implements Ticket {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly title: string;
  @ApiModelProperty({ enum: ['Silver', 'Gold', 'Platnium'] })
  readonly type: TicketType;
}

export class HealthCheckDto implements HealthCheck {
  @ApiModelProperty()
  readonly status: string;
}
