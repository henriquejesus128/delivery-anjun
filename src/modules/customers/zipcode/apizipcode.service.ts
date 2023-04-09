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
export class zipCodeService {
  async fetchZipCode(zipCode: string): Promise<ZipCode> {
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
    console.log(data);
    return data;
  }
}
