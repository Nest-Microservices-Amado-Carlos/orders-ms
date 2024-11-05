import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList } from 'src/orders/enum/order.enum';
import { OrderStatus } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
