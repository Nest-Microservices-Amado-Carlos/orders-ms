import { IsNumber, IsPositive, Min } from 'class-validator';

export class OrderItemDto {
  @IsNumber()
  @IsPositive()
  @Min(1)
  productId: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  quantity: number;

  @IsNumber()
  @IsPositive()
  price: number;
}
