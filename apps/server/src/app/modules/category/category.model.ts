import { ApiProperty } from '@nestjs/swagger'
import { Category } from '@prisma/client'

export class CategoryEntity implements Category {
  @ApiProperty()
  id: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  type: string
}
