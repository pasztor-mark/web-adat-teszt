import EndpointAverages from "@/components/charts/EndpointAverages";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EndpointAverage, Purchase, User, Vehicle } from "@/types";
import { useState, useEffect } from "react";
interface FetchStatus {
  mounted?: boolean;
  method: "GET" | "POST" | "PUT" | "DELETE" | undefined;
  started?: boolean;
  finished?: boolean;
  fetchCompletionTime: number | undefined;
  fetchError?: boolean;
}
export default function DatabaseCharts() {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>({
    mounted: false,
    method: undefined,
    started: false,
    finished: false,
    fetchCompletionTime: undefined,
    fetchError: false,
  });
  const [usersStatus, setUsersStatus] = useState<FetchStatus>({
    mounted: false,
    method: undefined,
    started: false,
    finished: false,
    fetchCompletionTime: undefined,
    fetchError: false,
  });
  const [vehiclesStatus, setVehiclesStatus] = useState<FetchStatus>({
    mounted: false,
    method: undefined,
    started: false,
    finished: false,
    fetchCompletionTime: undefined,
    fetchError: false,
  });
  const [purchasesStatus, setPurchasesStatus] = useState<FetchStatus>({
    mounted: false,
    method: undefined,
    started: false,
    finished: false,
    fetchCompletionTime: undefined,
    fetchError: false,
  });
  const [EndpointAveragesData, setEndpointAveragesData] = useState<EndpointAverage[]>([]);
  const [Users, setUsers] = useState<User[]>([]);
  const [Vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [Purchases, setPurchases] = useState<Purchase[]>([]);
  useEffect(() => {
    setFetchStatus({
      ...fetchStatus,
      mounted: true,
      method: "GET",
    });
    setUsersStatus({
      ...usersStatus,
      mounted: true,
      method: "GET",
    });
    setVehiclesStatus({
      ...vehiclesStatus,
      mounted: true,
      method: "GET",
    });
    async function getMetrics() {
      try {
        const start = performance.now();
        setFetchStatus({
          ...fetchStatus,
          mounted: true,
          method: "GET",
          started: true,
        });
        const data = await fetch(
          "http://localhost:3000/performancemetrics/averages",
          {
            method: "GET",
          }
        );
        await data.json().then((response) => {
          setEndpointAveragesData(response);
          setFetchStatus({
            ...fetchStatus,
            mounted: true,
            method: "GET",
            started: true,
            finished: true,
            fetchCompletionTime: performance.now() - start,
          });
        });
      } catch (error) {
        setFetchStatus({
          ...fetchStatus,
          mounted: true,
          method: "GET",
          started: true,
          finished: true,
          fetchError: true,
          fetchCompletionTime: undefined,
        });
      }
    }
    getMetrics();
    async function getUsers() {
      try {
        const start = performance.now();
        setUsersStatus({
          ...usersStatus,
          mounted: true,
          method: "GET",
          started: true,
        });
        const data = await fetch("http://localhost:3000/users", {
          method: "GET",
        });
        await data.json().then((response) => {
          setUsers(response);
          setUsersStatus({
            ...usersStatus,
            mounted: true,
            method: "GET",
            started: true,
            finished: true,
            fetchCompletionTime: performance.now() - start,
          });
        });
      } catch (error) {
        setUsersStatus({
          ...usersStatus,
          mounted: true,
          method: "GET",
          started: true,
          finished: true,
          fetchError: true,
          fetchCompletionTime: undefined,
        });
      }
    }
    getUsers();
    async function getVehicles() {
      try {
        const start = performance.now();
        setVehiclesStatus({
          ...vehiclesStatus,
          mounted: true,
          method: "GET",
          started: true,
        });
        const data = await fetch("http://localhost:3000/vehicles", {
          method: "GET",
        });
        await data.json().then((response) => {
          setVehicles(response);
          setVehiclesStatus({
            ...vehiclesStatus,
            mounted: true,
            method: "GET",
            started: true,
            finished: true,
            fetchCompletionTime: performance.now() - start,
          });
        });
      } catch (error) {
        setVehiclesStatus({
          ...vehiclesStatus,
          mounted: true,
          method: "GET",
          started: true,
          finished: true,
          fetchError: true,
          fetchCompletionTime: undefined,
        });
      }
    }
    getVehicles();
    async function getPurchases() {
      try {
        const start = performance.now();
        setPurchasesStatus({
          ...purchasesStatus,
          mounted: true,
          method: "GET",
          started: true,
        });
        const data = await fetch("http://localhost:3000/purchases", {
          method: "GET",
        });
        await data.json().then((response) => {
          setPurchases(response);
          setPurchasesStatus({
            ...purchasesStatus,
            mounted: true,
            method: "GET",
            started: true,
            finished: true,
            fetchCompletionTime: performance.now() - start,
          });
        });
      } catch (error) {
        setPurchasesStatus({
          ...purchasesStatus,
          mounted: true,
          method: "GET",
          started: true,
          finished: true,
          fetchError: true,
          fetchCompletionTime: undefined,
        });
      }
    }
    getPurchases();
    
  }, []);

  return (
    <div className="flex-col flex items-start gap-4">
      <div className="flex flex-col justify-center w-full">
        <h1 className="text-2xl font-semibold">Adatbázis-tesztek</h1>
        <hr />
        <p>Az adatok useEffect() hook segítségével kerülnek lekérdezésre.</p>
        <Table className=" bg-neutral-800 mb-3 p-2 rounded-3xl">
          <TableHeader>
            <TableRow>
              <TableHead>Adat</TableHead>
              <TableHead>Állapot</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(fetchStatus).map((key: string) => {
              return (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>
                    {fetchStatus[key as keyof FetchStatus]?.toString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="flex flex-row flex-wrap">
          <div className="bg-neutral-800 p-3 w-full rounded-3xl">
            <h4 className="text-center font-bold">
              Átlagos elérési idő végpontok szerint
            </h4>
            <EndpointAverages data={EndpointAveragesData} />
          </div>
        </div>
      </div>
    <div className="flex-row flex justify-between mx-auto items-center gap-4">
      <div className="flex flex-1 flex-col justify-center ">
        <h5 className="text-2xl font-semibold text-center">Users tábla elemei</h5>
        <hr className="mb-2" />
        <ScrollArea className="bg-neutral-800 p-3 rounded-3xl h-[80vh]">
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
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h5 className="text-2xl font-semibold my-2 text-center">Vehicles tábla elemei</h5>
        <hr className="mb-2" />
        <ScrollArea className="bg-neutral-800 p-3 rounded-3xl h-[80vh]">
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
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h5 className="text-2xl font-semibold text-center">Purchases tábla elemei</h5>
        <hr className="mb-2" />
        <ScrollArea className="bg-neutral-800 p-3 rounded-3xl h-[80vh]">
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
      </div>
      </div>
    </div>
  );
}
