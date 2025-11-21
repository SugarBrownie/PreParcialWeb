import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class DTOPaisExterno {
    @IsString()
    code: string;
  
    @IsString()
    name: string;
  
    @IsString()
    @IsOptional()
    region?: string;
  
    @IsString()
    @IsOptional()
    subregion?: string;
  
    @IsString()
    @IsOptional()
    capital?: string;
  
    @IsNumber()
    @IsOptional()
    population?: number;
  
    @IsString()
    @IsOptional()
    flagUrl?: string;
  }
