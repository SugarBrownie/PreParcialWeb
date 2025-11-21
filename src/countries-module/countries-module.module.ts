import { Module } from '@nestjs/common';
import { Country, CountrySchema } from './country.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryServiceService } from './country-service/country-service.service';
import { CountriesControllerController } from './countries-controller/countries-controller.controller';
import { ApiexternaService } from './apiexterna/apiexterna.service';

@Module({

    imports: [

        MongooseModule.forFeature([{name: Country.name, schema: CountrySchema}]),

    ],

    controllers: [CountriesControllerController],
    providers: [CountryServiceService, ApiexternaService],
    exports: [CountryServiceService]

})
export class CountriesModuleModule {}
