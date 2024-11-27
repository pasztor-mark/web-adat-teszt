import { User } from '../../users/entities/user.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';

export class Purchase {
  id: number;
  buyerId: number;
  vehicleId: number;
  purchasePrice: number;
  purchaseDate: Date;
  buyer: User;
  vehicle: Vehicle;
}
