export class CreatePurchaseDto {
  buyerId: number;
  vehicleId: number;
  purchasePrice: number;
  purchaseDate?: Date;
}
