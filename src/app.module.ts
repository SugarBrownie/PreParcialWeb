import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 
import { CountriesModuleModule } from './countries-module/countries-module.module';
import { TravelPlansModuleModule } from './travel-plans-module/travel-plans-module.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:password@localhost:27017'
    ),
    CountriesModuleModule,
    TravelPlansModuleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
