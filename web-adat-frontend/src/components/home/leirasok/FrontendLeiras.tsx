
export default function FrontendLeiras() {

   return (
    <section className="bg-neutral-800 rounded-3xl w-full p-3">
    <h1 className="text-center text-2xl">Web projekt leírása</h1>
    <hr className="my-2" />
    <ul className="p-4 flex flex-col gap-2">
      <li className="flex flex-row justify-between gap-4">
        <p>Teszteredmények szemléltetése:</p>{" "}
        <p className="font-semibold">
          Recharts diagramokkal szemléltetett adatbázis
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

    </ul>
  </section>
    )
}
