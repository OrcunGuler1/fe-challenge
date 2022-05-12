import { ActivityCreateSchema } from '@magiclick/utils/validators/activity.validator'
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  Param,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { Prisma } from '@prisma/client'
import { YupValidationPipe } from '../../pipes/yup-validation.pipe'
import { ActivityCreateInput } from './activity.dto'
import { ActivityEntity } from './activity.model'
import { ActivityService } from './activity.service'

@ApiTags('Activity')
@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  @UsePipes(new YupValidationPipe(ActivityCreateSchema))
  @ApiCreatedResponse({ type: ActivityEntity })
  async create(@Body() data: ActivityCreateInput): Promise<ActivityEntity> {
    return this.activityService.create(data)
  }

  @Get()
  @ApiOkResponse({ type: ActivityEntity, isArray: true })
  async list(
    @Query() where: Prisma.ActivityWhereInput,
  ): Promise<ActivityEntity[]> {
    return this.activityService.list(where)
  }
  @Get(':id')
  @ApiOkResponse({ type: ActivityEntity, isArray: true })
  async detail(
    @Param() params: { id: number },
  ): Promise<ActivityEntity[]> {
    return this.activityService.detail(Number(params.id))
  }
}
