import {
  IsDate,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsDefined()
  @IsString()
  @MinLength(2)
  @MaxLength(40)
  make: string;

  @IsDefined()
  @IsString()
  @MinLength(1)
  @MaxLength(40)
  model: string;

  @IsDefined()
  @IsDate()
  year: number;

  @IsDefined()
  @IsNumber()
  @Min(0)
  startingPrice: number;

  @IsDefined()
  @IsDate()
  auctionEndDate: Date;

  @IsDefined()
  @IsString()
  vin: string;
  
  @IsDefined()
  @IsNumber()
  @Min(0)
  @Max(3000)
  horsepower: number;

  @IsDefined()
  @IsNumber()
  @Min(0)
  @Max(100)
  fuelConsumption: number;

  @IsDefined()
  sellerId: number;
  @IsOptional()
  buyerId?: number;
}
