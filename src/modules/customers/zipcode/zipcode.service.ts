import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ZipCodeService {
  async fetchZipCode(zipCode: string): Promise<any> {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );
    return response.data;
  }
}
