import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateTravelPlanDto {
  @IsString()
  @IsNotEmpty()
  countryCode: string; 

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
