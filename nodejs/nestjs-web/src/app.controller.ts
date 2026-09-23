import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): object {
    return {
      service: 'nestjs-web',
      status: 'online',
      timestamp: new Date().toISOString()
    };
  }

  @Get('health')
  getHealth(): object {
    return {
      status: 'ok',
      framework: 'nestjs',
      uptime: process.uptime()
    };
  }
}
