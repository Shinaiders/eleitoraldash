import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

const HOST = process.env.REDIS_HOST
const PORT = process.env.REDIS_PORT
console.log(HOST,':',PORT)

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super({
      host: String(HOST),
      port: Number(PORT),
    });

    super.on('error', (err) => {
      console.log('Error on Redis');
      console.log(err);
      process.exit(1);
    });

    super.on('connect', () => {
      console.log('Redis connected!');
    });
  }
}
