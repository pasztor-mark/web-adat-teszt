import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { CreateUserDto } from '../src/users/dto/create-user.dto';
import { CreateVehicleDto } from '../src/vehicles/dto/create-vehicle.dto';
import { CreatePurchaseDto } from '../src/purchases/dto/create-purchase.dto';
import { env } from 'process';
const prisma = new PrismaClient();
const seedAmount = +env.SEED_AMOUNT || 10;
async function main() {
  
  const users = [];
  for (let i = 0; i < seedAmount; i++) {
    const createUserDto: CreateUserDto = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
    };

    const user = await prisma.user.create({
      data: createUserDto,
    });

    users.push(user);
  }

  

  for (let i = 0; i < seedAmount; i++) {
    const seller = users[faker.number.int({ min: 0, max: users.length - 1 })];
    const buyer = faker.datatype.boolean() ? users[faker.number.int({ min: 0, max: users.length - 1 })] : null;

    const createVehicleDto: CreateVehicleDto = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: faker.date.past({ years: 20 }).getFullYear(),
      startingPrice: parseFloat(faker.commerce.price()),
      auctionEndDate: faker.date.future(),
      vin: faker.vehicle.vin(),
      horsepower: faker.number.int({ min: 100, max: 1000 }),
      fuelConsumption: faker.number.float({ min: 5, max: 20, fractionDigits: 1 }),
      sellerId: seller.id,
      buyerId: buyer ? buyer.id : null,
    };

    const vehicle = await prisma.vehicle.create({
      data: createVehicleDto,
    });

    if (buyer) {
      const createPurchaseDto: CreatePurchaseDto = {
        buyerId: buyer.id,
        vehicleId: vehicle.id,
        purchasePrice: parseFloat(faker.commerce.price()),
        purchaseDate: faker.date.recent(),
      };

      await prisma.purchase.create({
        data: createPurchaseDto,
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });