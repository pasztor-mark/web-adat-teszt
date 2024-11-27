import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';

export class User {
  id: number;
  email: string;
  name?: string;
  vehicles?: Vehicle[];
  purchases?: Purchase[];
}
