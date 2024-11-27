import { User } from '../../users/entities/user.entity';
//import { Purchase } from './purchase.entity';

export class Vehicle {
  id: number;
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
  buyer?: User;
  //purchase?: Purchase;
}
