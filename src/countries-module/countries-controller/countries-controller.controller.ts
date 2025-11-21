import { Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CountryServiceService } from '../country-service/country-service.service';


@Controller('countries')
export class CountriesControllerController {
    constructor(private countryService: CountryServiceService) {}


    @Get()
    findAll() {
        return this.countryService.findAll();
    }

    @Get(':code')
    findByCode(@Param('code') code: string) {
      return this.countryService.findByAlpha3(code);
    }
}
