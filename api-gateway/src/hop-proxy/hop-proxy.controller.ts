import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('hops')
export class HopProxyController {
  constructor(private readonly httpService: HttpService) { }

  @Get()
  async getHops() {
    const response = await firstValueFrom(
      this.httpService.get('http://localhost:4000/hops'),
    );
    return response.data;
  }
}
