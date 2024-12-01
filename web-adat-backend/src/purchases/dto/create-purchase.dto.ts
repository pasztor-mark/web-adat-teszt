import { IsDate, IsDefined, IsInt, IsOptional, IsPositive,  } from "class-validator";

export class CreatePurchaseDto {
  @IsDefined()
  @IsInt()
  @IsPositive()
  buyerId: number;

  @IsDefined()
  @IsInt()
  @IsPositive()
  vehicleId: number;

  @IsDefined()
  @IsInt()
  @IsPositive()
  purchasePrice: number;

  @IsOptional()
  @IsDate()
  purchaseDate?: Date;
}
