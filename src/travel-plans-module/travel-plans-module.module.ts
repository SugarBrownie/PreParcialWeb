import { Module } from '@nestjs/common';
import { TravelPlan, TravelPlanSchema } from './TravelPlan.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelPlansServiceService } from './travel-plans-service/travel-plans-service.service';
import { TravelPlansControllerController } from './travel-plans-controller/travel-plans-controller.controller';
import { CountryServiceService } from 'src/countries-module/country-service/country-service.service';
import { CountriesModuleModule } from 'src/countries-module/countries-module.module';

@Module({

imports: [
    MongooseModule.forFeature([{name: TravelPlan.name, schema: TravelPlanSchema}]),
    CountriesModuleModule

  ],
  controllers: [TravelPlansControllerController],
  providers: [TravelPlansServiceService]

})
export class TravelPlansModuleModule {}
