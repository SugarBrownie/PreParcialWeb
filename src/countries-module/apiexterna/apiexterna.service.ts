import { Injectable } from '@nestjs/common';
import { DTOPaisExterno } from './paisexterno.dto';
import axios from 'axios';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';



@Injectable()
export class ApiexternaService {

    private BASE_URL = 'https://restcountries.com/v3.1/alpha';
    async getCountryByCode(code: string): Promise<DTOPaisExterno> {
        const { data } = await axios.get(`${this.BASE_URL}/${code}`);
        const api = data[0];
    
        const dto = plainToInstance(DTOPaisExterno, {
          code: code.toUpperCase(),
          name: api?.name?.common,
          region: api?.region,
          subregion: api?.subregion,
          capital: Array.isArray(api?.capital) ? api.capital[0] : api?.capital,
          population: api?.population,
          flagUrl: api?.flags?.png ?? api?.flags?.svg,
        });    
        await validateOrReject(dto);
        return dto;
      }

}