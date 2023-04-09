import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface IZipCode {
  zipCode: string | null;
  street: string | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
}

@Injectable()
export class ZipCodeService {
  async fetchZipCode(zipCode: string): Promise<IZipCode> {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );
    const newData = {
      zipCode: data.cep,
      street: data.logradouro,
      complement: data.complemento,
      state: data.uf,
      city: data.localidade,
      neighborhood: data.bairro,
    };

    return newData;
  }
}
