import { ApiModelProperty } from '@nestjs/swagger';
import { TicketType, Ticket } from '@fullstack/domain';
export class CreateTicketDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty({ enum: [0,1,2] })
  readonly type: TicketType;
}

export class TicketDto implements Ticket {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()

  readonly title: string;
  @ApiModelProperty({ enum: [0,1,2] })
  readonly type: TicketType;
}

export class HealthCheckDto {
  @ApiModelProperty()
  readonly status: string;
}
