import { Post, Get, Param, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TravelPlansServiceService } from '../travel-plans-service/travel-plans-service.service';
import { CreateTravelPlanDto } from '../TravelPlan.dto';

@Controller('travel-plans')
export class TravelPlansControllerController {

    constructor(private readonly travelPlansService: TravelPlansServiceService) {}

    @Post()
  create(@Body() dto: CreateTravelPlanDto) {
    return this.travelPlansService.create(dto);
  }

    @Get()
  findAll() {
    return this.travelPlansService.findAll();
  }

    @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelPlansService.findOne(id);
  }

}
