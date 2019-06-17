export interface Ticket {
  id?: number;
  title: string;
  type: TicketType;
}

export enum TicketType {
  Silver = 'Silver',
  Gold = 'Gold',
  Platnium = 'Platnium'
}

import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty({ enum: ['Silver', 'Gold', 'Platnium'] })
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
