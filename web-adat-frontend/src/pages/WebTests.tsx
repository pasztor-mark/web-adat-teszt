import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function WebTests() {
  const [result, setResult] = useState("Response");
  async function fetchData(
    method: "GET" | "POST" | "PATCH" | "DELETE",
    url: string,
    data?: any
  ) {
    const response = await fetch(`http://localhost:3000/${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const formatted = await response.json();
      setResult(
        response.ok
          ? JSON.stringify(formatted, null, 2)
          : JSON.stringify(formatted, null, 2)
      );
    } catch (e) {
      setResult(await response.statusText);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <section className="flex-1 bg-neutral-800 p-3 rounded-3xl ">
        <article>
          <h1 className="text-2xl text-center">Frontend tesztek</h1>
          <hr />
          <p className="text-lg text-center">
            Mivel a frontend tesztelésre nincs külön programmatikus megoldás,
            ezért a felhasználói tesztelés a frontend részén csak szövegesen
            lett dokumentálva.
          </p>
        </article>
        <article>
          <p>A frontend UI és UX elemei, amelyek tesztelésre kerültek:</p>
          <ul className="flex flex-col gap-2">
            <li>Menüpontok működése</li>
            <li>Adatok megjelenítése</li>
            <li>Szemantikus tagek</li>
            <li>Reszponzív felépítés</li>
            <li>Modern felület design</li>
            <li>Egységes stíluselemek</li>
            <li>Clean code</li>
          </ul>
        </article>
      </section>
      <section className="flex-1 bg-neutral-800 p-3 rounded-3xl ">
        <article>
          <h1 className="text-2xl text-center">Backend tesztek</h1>
          <hr />
          <p className="text-lg text-center">
            A backend tesztek Jest-tel lettek megoldva.
          </p>
          <p>
            A tesztek futtatásához nyisson terminált a backend mappában és
            futtassa le a
          </p>
          <code>$ npm run test</code>
          <p>parancsot.</p>
        </article>
        <article>
          <p>A backend tesztek a következőket tesztelik:</p>
          <ul className="flex flex-col gap-2">
            <li>Adatbázis kapcsolat</li>
            <li>Adatbázis lekérdezések</li>
            <li>API végpontok működése</li>
            <li>CRUD műveletek</li>
            <li>Adatbázis seedelés</li>
          </ul>
          <h6 className="text-lg text-center">Végpont-tesztek</h6>
          <div className="flex flex-row flex-wrap justify-between">
            <div className="grid grid-cols-2 gap-3 p-3 bg-neutral-700 rounded-3xl m-2">
              <p className="col-span-2 text-center text-2xl font-bold">USER</p>
              <button id="get" onClick={() => fetchData("GET", "users")}>
                GET
              </button>
              <button
                id="post"
                onClick={() =>
                  fetchData("POST", "users", {
                    name: "Teszt János",
                    email: "teszt@janos.com",
                  })
                }
              >
                POST
              </button>
              <button
                id="patch"
                onClick={() =>
                  fetchData("PATCH", "users/1", { name: "FRISSÍTETT NÉV" })
                }
              >
                PATCH
              </button>
              <button
                id="delete"
                onClick={() => fetchData("DELETE", "users/2")}
              >
                DELETE
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 p-3 bg-neutral-700 rounded-3xl m-2">
              <p className="col-span-2 text-center text-2xl font-bold">
                VEHICLES
              </p>
              <button id="get" onClick={() => fetchData("GET", "vehicles")}>
                GET
              </button>
              <button
                id="post"
                onClick={() =>
                  fetchData("POST", "vehicles", {
                    make: "Lexus",
                    model: "LC500",
                    year: 2020,
                    startingPrice: 150000,
                    auctionEndDate: new Date(),
                    vin: "1HGCM82633A123456",
                    horsepower: 132,
                    fuelConsumption: 30,
                    sellerId: 1,
                  })
                }
              >
                POST
              </button>
              <button
                id="patch"
                onClick={() =>
                  fetchData("PATCH", "vehicles/1", {
                    make: "Ferrari",
                    model: "250 GTO",
                  })
                }
              >
                PATCH
              </button>
              <button
                id="delete"
                onClick={() => fetchData("DELETE", "vehicles/2")}
              >
                DELETE
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 p-3 bg-neutral-700 rounded-3xl m-2">
              <p className="col-span-2 text-center text-2xl font-bold">
                PURCHASES
              </p>
              <button id="get" onClick={() => fetchData("GET", "purchases")}>
                GET
              </button>
              <button
                id="post"
                onClick={() =>
                  fetchData("POST", "purchases", {
                    buyerId: 99,
                    vehicleId: 3,
                    purchasePrice: 200000,
                    purchaseDate: new Date(),
                  })
                }
              >
                POST
              </button>
              <button
                id="patch"
                onClick={() =>
                  fetchData("PATCH", "purchases/1", {
                    purchasePrice: 250000,
                  })
                }
              >
                PATCH
              </button>
              <button
                id="delete"
                onClick={() => fetchData("DELETE", "purchases/2")}
              >
                DELETE
              </button>
            </div>
          </div>
          <p>*Megjegyzés: minden PATCH végpont az 1-es ID-t frissíti, míg a DELETE a 2-es ID-t törli. A PerformanceMetrics végpontok teszteléséért váltson az <a href="/charts" className="font-bold underline">Adatbázis Teljesítménytesztek</a> oldalra.</p>
          <p>Válasz:</p>
        </article>
        <ScrollArea className="w-full max-h-[40vh] h-[40vh]">
          <code>{result}</code>
        </ScrollArea>
      </section>
    </div>
  );
}
