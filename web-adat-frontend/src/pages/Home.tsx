export default function Home() {
  return (
    <div className="p-5 w-full h-full flex flex-row flex-wrap ">
      <div className="flex flex-col w-full h-full">
        <section className="bg-neutral-800 rounded-3xl w-7/12 p-3">
          <h1 className="text-center text-2xl">Projektek leírása</h1>
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
                <p className="font-semibold">Frontend: React, Vite, Shadcn/ui, Recharts<br/>Backend: Nestjs, Express<br/>Adatbázis: Prisma, MySQL</p>
            </li>
            
            <li className="flex flex-row items-center justify-between">
                <p>Részletes dokumentáció</p>
                <p className="font-semibold">majd egyszer</p>
            </li>
            
          </ul>
        </section>
      </div>
    </div>
  );
}
