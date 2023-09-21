import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RbacModule } from './modules/rbac/rbac.module';

@Module({
  imports: [RbacModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
