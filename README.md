# Web és Adatbázis-tesztelés
## Tartalomjegyzék
- [Felhasznált technológiák](#felhasznált-technológiák)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Adatbázis](#adatbázis)
- [Tesztelési szempontok](#tesztelési-szempontok)
  - [Web](#web)
  - [Adatbázis](#adatbázis-1)
- [Használat](#használat)


### Felhasznált technológiák
#### Frontend
A projekt webes részének a frontendjét React-tal építettem fel, amelynek keretrendszert biztosított a Vite (`$ npm create vite@latest`) emellett a Shadcn/ui felhasználói interfész elemkönyvtárat használtam egyes vizuális komponensek implementálására. Az oldal Tailwinddel lett formázva. A frontend felépítése közben nagy hangsúlyt fektettem a modern külsőre, megközelíthetőségre, reszponzív megjelenésre minden eszközön. A projekt minden részében igyekeztem a clean code alapokat alkalmazni, és egy átolvasható kódot készíteni. A projekt közben használtam a Visual Studio Code-ba kiegészítőként beépített Github Copilot-ot, de nem "helyettem kódolt".

#### Backend
A frontend és az adatbázis közötti elem a backend, amely ebben a projektben nagy szerepet játszott. Mivel mindkét projektet egyszerre készítettem el, így fontos volt, hogy mindkét feladat előírásainak megfeleljen a web és az adatbázis egyaránt, és hogy ez sikerüljön, a backendet biztonságosra, olvashatóra és bővíthetőre kellett felépíteni, amelyhez a Nest.js Express keretrendszert használtam, szintén TypeScript nyelven, és az adatbázissal való kommunikáció megkönnyítésére a Prisma object-relational-mapping keretrendszert alkalmaztam. Az adatok helyességét is ellenőriztem class-validator segítségével.

#### Adatbázis
Az adatbázis a projekt 50%-a ezért biztosítanom kellett, hogy a webes alkalmazás valós adatokkal tudjon dolgozni. Az adatbázist a Prisma kezeli, modellekkel és tud seedelni, azaz feltölteni az adatbázist valósnak kinéző adatokkal, amelyeket a faker.js csomag tett lehetővé.

### Tesztelési szempontok
#### Web
Fontos volt a web frontendjén a megközelíthetőség, az egyszerű felépítés és megfelelő felhasználói élmény. A kódban a szemantikus tagek használatára figyeltem és a stíluselemek egységére is külön figyelmet fordítottam. A backend részén fontos volt az olvasható és tiszta kód, és mindenek felett a backend modulok működése, amelyet Jest-tel ellenőriztem. 21 teszteset van az egységtesztelési fájlokban, amely lefedi a szolgáltatásokat, modulokat, irányítókat és middleware-eket egyaránt.

#### Adatbázis
Az adatbázis-tesztelés részben a lekérdezések sebességére, hatékonyságára és átlagos adataira fókuszáltam, amelyet egy Recharts alapú diagrammon jelenítettem meg a webes felületen (pl. excel helyett). A diagram feltünteti a lekérdezések csoportos átlagát, az összesített átlagot, a végpontok lekérdezési teljesítményét, állapotát, és szórásukat.

### Használat
- Repo klónozása (git clone)
- Adatbázis inicializálása (XAMPP/MySQL/auction adatbázis (.env szerint))
- Backend
  - .env.example => .env
  - `$ npm install`
  - `$ npx prisma db push`
  - `$ npx prisma db seed`
  - `$ npm run start:debug`
- Frontend
  - `$ npm install`
  - `$ npm run dev`
- Tesztelés
  - backend/`$ npm run test`
  - Thunder Client endpoint tesztelések
  - frontend/Adatbázis Teljesítmény tesztek
- A repo feltelepítését követően megtalál a Használati útmutató oldalon egy részletesebb leírást.
