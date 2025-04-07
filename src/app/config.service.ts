import { Injectable } from '@angular/core';
import configJson from '../../public/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config: Config = configJson;
  constructor() {
  }

  public labelChecker(label: string): string {
    if (label == 'PLACEHOLDER') {
      return this.config.name;
    } else if (label == 'PLACEHOLDER_URL') {
      return this.config.domain;
    }
    return label;
  }
}

type Config = {
  name: string,
  short: string,
  domain: string
}