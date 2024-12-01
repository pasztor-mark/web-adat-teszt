
export default function Hasznalat() {

   return (
    <div className="flex flex-col h-full gap-5">
    <section className="bg-neutral-800 rounded-3xl p-3">
      <h1 className="text-center text-2xl">Rövid használati útmutató</h1>
      <hr className="my-2" />
      <article className="flex flex-col p-3 gap-2">
        <div>
          <h6 className="text-xl">Repo klónozása:</h6>
          <div className="flex flex-col gap-1">

          <a className="text-white font-bold underline" href="https://github.com/pasztor-mark/web-adat-teszt/">Github repo linkje</a>
          <code>
            $ git clone [repo-link]
          </code>
          <code>
            $ cd web-adat-teszt
          </code>
          </div>
          <h6 className="text-xl">Kód indítása</h6>
          <ul className="flex flex-col gap-3">
            
            <li>Adatbázis és Backend: (terminálba)</li>
            <div className="flex flex-col gap-1">
              <code>$ cd web-adat-backend</code>
              <code>$ npm install</code>
              <code>XAMPP/MYSQL indítása és új adatbázis létrehozása</code>
              <code>.env fájl konfiguráció: .env.example-ből az example kitörlése, DB link átítása </code>
              <code>$ npx prisma db push</code>
              <code>$ npx prisma db seed</code>
              <code>$ npm run start:debug</code>
              <p>Tesztelés esetén:</p>
              <code>$ npm run test --coverage</code> <p>// Tesztelési report kérése esetén</p>
            </div>

            <li>Frontend: (terminálba)</li>
            <div className="flex flex-col gap-1">
              <code>$ cd web-adat-frontend</code>
              <code>$ npm install</code>
              <code>$ npm run dev</code>
            </div>
          </ul>
          
        </div>
      </article>
    </section>
  </div>
    )
}
