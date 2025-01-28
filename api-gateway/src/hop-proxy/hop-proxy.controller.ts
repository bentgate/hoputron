import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { SERVICES } from 'src/constants/paths';

@Controller('hops')
export class HopProxyController {
  private BASE_URL = SERVICES.HOP_SERVICE;

  constructor(private readonly httpService: HttpService) { }

  @Get()
  async getHops() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.BASE_URL}/hops`),
    );
    return response.data;
  }
}
