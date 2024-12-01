import AdatbazisLeiras from "@/components/home/leirasok/AdatbazisLeiras";
import FrontendLeiras from "@/components/home/leirasok/FrontendLeiras";
import Hasznalat from "@/components/home/leirasok/Hasznalat";

export default function Home() {
  return (
    <div className="p-5 w-full h-full flex gap-5 flex-row mx-auto justify-center flex-wrap">
      <div className="flex flex-col h-full gap-5">
        <FrontendLeiras />
        <AdatbazisLeiras />
      </div>
      <Hasznalat />
    </div>
  );
}
