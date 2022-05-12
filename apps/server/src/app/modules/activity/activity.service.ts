import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { defaultTo } from 'rambdax'
import { PrismaService } from '../../globals/prisma.service'
import { ActivityCreateInput } from './activity.dto'
import { ActivityEntity } from './activity.model'

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  async create(
    createActivityInput: ActivityCreateInput,
  ): Promise<ActivityEntity | null> {
    return this.prisma.activity.create({
      data: {
        ...createActivityInput,
      },
    })
  }

  async list(where: Prisma.ActivityWhereInput): Promise<ActivityEntity[]> {
    return this.prisma.activity.findMany({
      where: { accountId: defaultTo(undefined, Number(where.accountId)) },
      orderBy: { createdAt: 'desc' },
    })
  }

  async detail(accountId: number): Promise<ActivityEntity[]> {
    return this.prisma.activity.findMany({
      where: { accountId: accountId },
      orderBy: { createdAt: 'desc' },
    })
  }
}
