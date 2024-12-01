
import { ScrollArea } from "../ui/scroll-area";
import { TableCell, TableRow } from "../ui/table";
import { FetchStatus } from "@/types";
import { Purchase } from "@/types";
export default function PurchaseFetchAdat({purchasesStatus, Purchases}: {purchasesStatus: FetchStatus, Purchases: Purchase[]}) {

   return (
    <ScrollArea className="bg-neutral-800 p-3 rounded-3xl max-w-[90vw] h-[80vh]">
    {Object.keys(purchasesStatus).map((key: string) => {
      return (
        <TableRow key={key}>    
          <TableCell>{key}</TableCell>
          <TableCell>
            {purchasesStatus[key as keyof FetchStatus]?.toString()}
          </TableCell>
        </TableRow>
      );
    })}
  {Purchases.map((purchase: Purchase) => (
    <div key={purchase.id} className="flex w-full my-2 flex-1 flex-row justify-between">
      <p>{purchase.id}</p>
      <p>{purchase.buyer?.id}</p>
      <p>{purchase.vehicle?.id}</p>
      <p>{purchase.purchasePrice}</p>
      <p>{purchase.purchaseDate?.toString().split('T')[0]}</p>
    </div>
  ))}
  </ScrollArea>
    )
}
