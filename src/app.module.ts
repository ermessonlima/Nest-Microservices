import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyFirstController } from './controllers/my-first/my-first.controller';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, MyFirstController],
  providers: [AppService],
})
export class AppModule {}
