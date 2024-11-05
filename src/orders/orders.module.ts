import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { NastModule } from 'src/tranports/nast.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    NastModule,
    // ClientsModule.register([
    //   {
    //     name: PRODUCT_SERVICE,
    //     transport: Transport.TCP,
    //     options: {
    //       // host: envs.productMicroserviceHost,
    //       // port: envs.productMicroservicePort,
    //     },
    //   },
    // ]),
  ],
})
export class OrdersModule {}
