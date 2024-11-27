export class CreateVehicleDto {
  make: string;
  model: string;
  year: number;
  startingPrice: number;
  auctionEndDate: Date;
  vin: string;
  horsepower: number;
  fuelConsumption: number;
  sellerId: number;
  buyerId?: number;
}
