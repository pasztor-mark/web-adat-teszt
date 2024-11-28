import { type ChartConfig } from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
const chartConfig = {
  average: {
    label: "Átlag elérési idő (ms)",
    color: "#0046E5",
  },
} satisfies ChartConfig;
export default function TableEntries({ data }: { data: any }) {
  const chartData = data.map((item: any) => ({
    endpoint: item.name,
    average: item.atlag,
    count: item.count
  }));
  console.log(chartData)

  return (
    <ChartContainer config={chartConfig} className="min-h-72">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="endpoint" tickLine={false} />
        <ChartTooltip
          content={
            <ChartTooltipContent className="text-white" color="#0046E5" />
          }
        />
        <Bar dataKey="count" fill={chartConfig.average.color} />
      </BarChart>
    </ChartContainer>
  );
}
