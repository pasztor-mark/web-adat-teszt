import { ScrollArea } from "../ui/scroll-area";
import { TableCell, TableRow } from "../ui/table";
import { FetchStatus } from "@/types";
import { User } from "@/types";
export default function UserFetchAdat({usersStatus, Users}: {usersStatus: FetchStatus, Users: User[]}) {

   return (
    <ScrollArea className="bg-neutral-800 p-3 rounded-3xl max-w-[90vw] h-[80vh]">
    {Object.keys(usersStatus).map((key: string) => {
      return (
        <TableRow key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>
            {usersStatus[key as keyof FetchStatus]?.toString()}
          </TableCell>
        </TableRow>
      );
    })}
    {Users.map((user: User) => {
      return (
        <div key={user.id} className="flex my-2 flex-row justify-between">
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      );
    })}
  </ScrollArea>
    )
}
