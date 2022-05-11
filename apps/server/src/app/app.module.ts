import { Module } from '@nestjs/common'
import { AccountModule } from './modules/account/account.module'
import { ActivityModule } from './modules/activity/activity.module'
import { CategoryModule } from './modules/category/category.module'
@Module({
  imports: [AccountModule, ActivityModule, CategoryModule],
})
export class AppModule {}
