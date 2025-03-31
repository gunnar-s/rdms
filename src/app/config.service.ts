import { Injectable } from '@angular/core';
import configJson from '../../public/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config: Config = configJson;
  constructor() {
  }
}

type Config = {
  name: string,
  short: string,
  domain: string
}