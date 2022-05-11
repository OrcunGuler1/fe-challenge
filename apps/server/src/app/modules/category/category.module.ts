import { CategoryController } from './category.controller'
import { Module } from '@nestjs/common'
import { PrismaService } from '../../globals/prisma.service'
import { CategoryService } from './category.service'

@Module({
  controllers: [CategoryController],
  providers: [PrismaService, CategoryService],
})
export class CategoryModule {}
