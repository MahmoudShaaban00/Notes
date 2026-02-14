import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { NotesModule } from './modules/notes/notes.module';

@Module({
  imports: [AuthModule,NotesModule,MongooseModule.forRoot('mongodb://localhost/nest_notes2'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

