import { ApiProperty } from '@nestjs/swagger'
import { Activity } from '@prisma/client'

export class ActivityEntity implements Activity {
  @ApiProperty()
  id: number

  @ApiProperty()
  accountId: number

  @ApiProperty()
  description: string

  @ApiProperty()
  amount: number

  @ApiProperty()
  type: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  categoryId: number;
}
