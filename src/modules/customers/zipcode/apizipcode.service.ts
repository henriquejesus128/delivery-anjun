import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface ZipCode {
  cep: string | null;
  logradouro: string | null;
  complemento: string | null;
  bairro: string | null;
  localidade: string | null;
  uf: string | null;
  ibge: string | null;
  gia: string | null;
  ddd: string | null;
  siafi: string | null;
}

@Injectable()
export class ApiZipCodeService {
  async fetchZipCode(zipCode: string): Promise<ZipCode> {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );
    return response.data;
  }
}
