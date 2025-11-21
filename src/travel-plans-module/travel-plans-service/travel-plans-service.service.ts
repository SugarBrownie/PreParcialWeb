import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TravelPlan, TravelPlanDocument } from '../TravelPlan.schema';
import { CreateTravelPlanDto } from '../TravelPlan.dto';
import { CountryServiceService } from 'src/countries-module/country-service/country-service.service';


@Injectable()
export class TravelPlansServiceService {
    constructor(@InjectModel(TravelPlan.name) private travelPlanModel: Model<TravelPlanDocument>, private countryService: CountryServiceService,) {}

    async create(dto: CreateTravelPlanDto) {
        const result = await this.countryService.findByAlpha3(dto.countryCode);
        const country = result.country;

        const travelPlan = await this.travelPlanModel.create({
            countryCode: country.code,       
            title: dto.title,
            startDate: dto.startDate,
            endDate: dto.endDate,
            notes: dto.notes,
          });

          return travelPlan;
    }

    async findAll() {
        return this.travelPlanModel.find().lean().exec();
      }

    async findOne(id: string) {
        const plan = await this.travelPlanModel.findById(id).lean().exec();
    
        return plan;
      }

}
