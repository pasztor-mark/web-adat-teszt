export default function Home() {
  return (
    <div className="p-5 w-full h-full flex gap-5 flex-row mx-auto justify-center flex-wrap">
      <div className="flex flex-col h-full gap-5">
        <section className="bg-neutral-800 rounded-3xl w-full p-3">
          <h1 className="text-center text-2xl">Web projekt leírása</h1>
          <hr className="my-2" />
          <ul className="p-4 flex flex-col gap-2">
            <li className="flex flex-row justify-between">
              <p>Teszteredmények szemléltetése:</p>{" "}
              <p className="font-semibold">
                Recharts alapú diagramokkal szemléltetett backend és adatbázis
                teljesítménytesztek
              </p>
            </li>
            <li className="flex flex-row items-center justify-between">
              <p>Tesztelési módok</p>{" "}
              <p className="font-semibold">
                Frontend: felhasználói tesztelés
                <br />
                Backend: jest & middleware tesztek
                <br />
                Adatbázis: backend teljesítménytesztek
              </p>
            </li>
            <li className="flex flex-row items-center justify-between">
              <p>Felhasznált technológiák</p>
              <p className="font-semibold">
                Frontend: React, Vite, Shadcn/ui, Recharts
                <br />
                Backend: Nestjs, Express
                <br />
                Adatbázis: Prisma, MySQL
              </p>
            </li>

            <li className="flex flex-row items-center justify-between">
              <p>Részletes dokumentáció</p>
              <p className="font-semibold">majd egyszer</p>
            </li>
          </ul>
        </section>
        <section className="bg-neutral-800 rounded-3xl w-full p-3">
          <h1 className="text-center text-2xl">Adatbázis projekt leírása</h1>
          <hr className="my-2" />
          <ul className="p-4 flex flex-col gap-2">
            <li className="flex flex-row justify-between">
              <p>Teszteredmények szemléltetése:</p>{" "}
              <p className="font-semibold">
                Az adatbázis teljesítménye a webes felületen lett ábrázolva.
              </p>
            </li>
            <li className="flex flex-row items-center justify-between">
              <p>Tesztelési módok</p>{" "}
              <p className="font-semibold">
                Lekérdezés-teljesítmények ellenőrzése
                <br />
                Validációs tesztek
                <br />
                Backend és adatbázis közötti tesztek
              </p>
            </li>
            <li className="flex flex-row items-center justify-between">
              <p>Felhasznált technológiák</p>
              <p className="font-semibold">Prisma ORM, MySQL</p>
            </li>

            <li className="flex flex-row items-center justify-between">
              <p>Részletes dokumentáció</p>
              <p className="font-semibold">majd egyszer</p>
            </li>
          </ul>
        </section>
      </div>
      <div className="flex flex-col w-5/12 h-full gap-5">
        <section className="bg-neutral-800 rounded-3xl p-3">
          <h1 className="text-center text-2xl">Rövid használati útmutató</h1>
          <hr className="my-2" />
          <article className="flex flex-col p-3 gap-2">
            <div>
                <h6 className="text-xl">Kód indítása</h6>
            </div>
          </article>
        </section>

      </div>
    </div>
  );
}
