
import { ScrollArea } from "../ui/scroll-area";
import { TableCell, TableRow } from "../ui/table";
import { FetchStatus } from "@/types";
import { Vehicle } from "@/types";
export default function VehicleFetchAdat({vehiclesStatus, Vehicles}: {vehiclesStatus: FetchStatus, Vehicles: Vehicle[]}) {

   return (
    <ScrollArea className="bg-neutral-800 p-3 max-w-[90vw] rounded-3xl h-[80vh]">
    {Object.keys(vehiclesStatus).map((key: string) => {
      return (
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>
            {vehiclesStatus[key as keyof FetchStatus]?.toString()}
          </TableCell>
        </TableRow>
      );
    })}
    {Vehicles.map((veh: Vehicle) => {
      return (
        <div key={veh.id} className="flex w-full my-2 flex-row justify-between">
        <p>{veh.make}</p>
        <p>{veh.model}</p>
        <p>{veh.year}</p>
        <p>{veh.startingPrice}</p>
        <p>{veh.auctionEndDate.toString().split('T')[0]}</p>
        <p>{veh.vin}</p>
        <p>{veh.horsepower}</p>
        <p>{veh.fuelConsumption}</p>
        <p>{veh.sellerId}</p>
        <p>{veh.buyerId}</p>
        </div>
      );
    })}
  </ScrollArea>
    )
}
