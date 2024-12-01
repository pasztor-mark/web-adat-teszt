export default function Manual() {
  return (
    <section>
      <h1 className="text-center text-3xl">Használati útmutató</h1>
      <hr className="my-6" />
      <div className="grid  gap-4 grid-cols-1 lg:grid-cols-4">
        <article className="bg-neutral-800 rounded-3xl w-full p-3 flex-1">
          <h3 className="text-xl text-center font-semibold">Frontend</h3>
          <hr className="my-2" />

          <div className="flex flex-col gap-1">
            <p className="italic">Frontend mappa megnyitása terminálban</p>
            <code>$ cd web-adat-frontend</code>
            <p className="italic">Csomagok telepítése</p>
            <code>$ npm install</code>
            <p className="italic">Szerver futtatása</p>
            <code>$ npm run dev</code>
          </div>
        </article>
        <article className="bg-neutral-800 rounded-3xl w-full p-3 flex-1">
          <h3 className="text-xl text-center font-semibold">
            Adatbázis/Backend
          </h3>
          <hr className="my-2" />

          <div className="flex flex-col gap-1">
            <p className="italic">Backend mappa megnyitása terminálban</p>
            <code>$ cd web-adat-backend</code>
            <p className="italic">Csomagok telepítése</p>
            <code>$ npm install</code>
            <mark>XAMPP/MYSQL indítása és új adatbázis létrehozása</mark>
            <mark>
              .env fájl konfiguráció: .env.example-ből az example kitörlése, DB
              link átítása{" "}
            </mark>
            <p className="italic">Adatbázis létrehozása és feltöltése:</p>
            <code>$ npx prisma db push</code>
            <code>$ npx prisma db seed</code>
            <p className="italic">Backend indítása</p>
            <code>$ npm run start:debug</code>
            <p>Tesztelés esetén:</p>
            <code>$ npm run test --coverage</code>
          </div>
        </article>
        <article className="bg-neutral-800 rounded-3xl w-full p-3 flex-1">
          <h3 className="text-xl text-center font-semibold">
            Felhasználói Tesztelés
          </h3>
          <hr className="my-2" />
          <h4 className="text-xl text-center">Adatbázis</h4>
          <hr className="my-4" />
          <div className="flex flex-col gap-1 gap-y-3 ">
            <p>ThunderClient/Flashpost/Postman használatával</p>
            <p>Végpontok lekérdezése (lásd: végpontok)</p>
            <p>
              <a href="/charts" className="font-semibold underline">
                Adatbázis-tesztelés
              </a>{" "}
              oldal megnyitása
            </p>
            <p>Lekérdezési adatok megfigyelése</p>
          </div>
          <h4 className="text-xl text-center">Frontend</h4>
          <hr className="my-4" />
          <div className="flex flex-col gap-1 gap-y-3 ">
            <p>Felhasználói élmény és UI design alapján tesztelés</p>
            <p>Reszponzivitás-tesztelés</p>
            <p>Több eszközön és böngészőben való tesztelés</p>
          </div>
          <h4 className="text-xl text-center">Backend</h4>
          <hr className="my-4" />
          <div className="flex flex-col gap-1 gap-y-3 ">
            <code>$ npm run test --coverage</code>
          </div>
        </article>
        <article className="bg-neutral-800 rounded-3xl w-full p-3 flex-1">
          <h3 className="text-xl text-center font-semibold">Végpontok</h3>
          <hr className="my-2" />
          <h4 className="text-xl text-center">Tesztelhető backend végpontok</h4>
          <div className="flex flex-col gap-1">
            <i className="text-center">
              Ezeken a végpontokon elvégezhető minden CRUD folyamat.
            </i>
            <h5 className="font-semibold text-lg">Users</h5>
            <code>/users | GET/POST/</code>
            <code>/users/:id GET/PATCH/REMOVE</code>
            <h5 className="font-semibold text-lg">Vehicles</h5>
            <code>/vehicles | GET/POST/</code>
            <code>/vehicles/:id GET/PATCH/REMOVE</code>
            <h5 className="font-semibold text-lg">Purchases</h5>
            <code>/purchases | GET/POST/</code>
            <code>/purchases/:id GET/PATCH/REMOVE</code>
            <i className="text-center">
              Ezen a végpontokon csak GET és POST kérések végezhetők el. Ezt
              csak adatbázis-tesztelés céljából használja az oldal, a
              felhasználói felületen ez NEM jelenne meg
            </i>
            <h5 className="font-semibold text-lg">PerformanceMetrics</h5>
            <code>
              /performancemetrics/measure <br /> paraméterek: name: string, t0:
              number, t1: number, description: string,
            </code>
            <code>/purchases/averages GET</code>
            <code>/purchases/average/:name GET</code>
          </div>
        </article>
      </div>
    </section>
  );
}
