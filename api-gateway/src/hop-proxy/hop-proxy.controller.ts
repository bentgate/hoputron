import { All, Controller, Get, HttpException, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('hops')
export class HopProxyController {
  private BASE_URL = process.env.HOP_SERVICE_URL;

  constructor(private readonly httpService: HttpService) { }

  @All('*') // Capture all HTTP methods on /hops*
  async proxyRequest(@Req() req: Request, @Res() res: Response) {
    try {

      // Construct the target URL by replacing "/hops" with "" in the path
      const hopServiceUrl = `${this.BASE_URL}${req.url}`;
      console.log({ req: req.url, base: this.BASE_URL, hopServiceUrl })

      // Make the request to the hop service
      const { data, status, headers } = await firstValueFrom(
        this.httpService.request({
          method: req.method,
          url: hopServiceUrl,
          data: req.body,
          headers: { ...req.headers, host: undefined },
        })
      );


      console.log({ status, data })

      res.status(status).send(data);
    } catch (error) {
      console.log({ error: error.response.status, errorResponse: error.response.data.message })
      console.error(`Error proxying request: ${error.message}`);
      if (error.response) {
        const { status, data } = error.response;
        console.log({ errorStatus: status, errorResponse: data });
        return res.status(status).send(data);
      } else {
        // Handle unexpected error structure
        return res.status(500).send('Internal Server Error');
      }
    }
  }
}
