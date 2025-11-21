import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { Country, CountryDocument } from '../country.schema';
import { ApiexternaService } from '../apiexterna/apiexterna.service';



@Injectable()
export class CountryServiceService {
    constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>, private apiExterna: ApiexternaService) {}

    async findByAlpha3(code: string) {
        const country = await this.countryModel
          .findOne({ code })
          .lean()
          .exec();
    
          if (country) {
            return {
              source: 'cache',
              country,
            };
          }
          const paisExterno = await this.apiExterna.getCountryByCode(code);

          const guardarPaisNoesta = await this.countryModel.create(paisExterno);

          return {
            source: 'api',
            country: guardarPaisNoesta.toObject(),
          };
}

    async findAll() {
        return this.countryModel.find().lean().exec();
      }

    
}
