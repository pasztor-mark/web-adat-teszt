import { type ChartConfig } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, ReferenceLine, XAxis,  } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
const chartConfig = {
  average: {
    label: "Átlag elérési idő (ms)",
    color: "#0046E5",
  },
} satisfies ChartConfig;
export default function EndpointAverages({ data }: { data: any }) {
  const chartData = data.map((item: any) => ({
    endpoint: item.name,
    average: item.atlag,
    count: item.count
  }));
  const atlag = chartData.reduce((acc: any, item: any) => acc + item.average, 0) / chartData.length;
  
  const szoras = Math.sqrt(chartData.reduce((acc: any, item: any) => acc + Math.pow(item.average - atlag, 2), 0) / chartData.length);
  return (
    <ChartContainer config={chartConfig} className="min-h-72 max-w-[80vw]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="endpoint" tickLine={false} />
        <ChartTooltip
          content={
            <ChartTooltipContent className="text-white" color="#0046E5" />
          }
        />
        <ReferenceLine y={atlag} stroke="#0ffcaa" strokeWidth={4} label="Teljes átlag lekérdezési idő" />
        <ReferenceLine y={atlag - szoras} stroke="#aa00ff" strokeWidth={4} label="Szórás alsó értéke" />
        <ReferenceLine y={atlag + szoras} stroke="#ff00aa" strokeWidth={4} label="Szórás felső értéke" />
        <Bar dataKey="average" fill={chartConfig.average.color} />
      </BarChart>
    </ChartContainer>
  );
}
