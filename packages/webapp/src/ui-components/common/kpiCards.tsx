// components/KpiCard.tsx
import { Card, CardContent } from "../ui/card";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

interface KpiCardProps {
  title: string;
  count?: number;
  value?: string;
  /** Optional subtext rendered below the value in smaller type (e.g. "completed") */
  valueSubtext?: string;
  desc?: string;
  color?: string;
  data?: number[];
  showIcon?: boolean;
  icon?: React.ReactNode;
  iconBg?: string;
}

export function KpiCard({
  title,
  count,
  value,
  valueSubtext,
  desc,
  icon,
  iconBg,
  color = "#2563eb", // default blue
  data = [7, 9, 8, 12, 14, 13, 16, 21],
  showIcon = false,
}: KpiCardProps) {
  const options: ApexOptions = {
    chart: { sparkline: { enabled: true }, toolbar: { show: false } },
    stroke: { curve: "smooth", width: 3 },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.05 },
    },
    colors: [color],
    tooltip: { enabled: false },
  };

  return (
    <Card className="shadow-none rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-semibold text-black">{title}</p>
            <p className="text-2xl font-bold">
              {value || count}
              {valueSubtext != null && valueSubtext !== "" && (
                <span className="text-xs font-normal text-muted-foreground ml-1.5 align-middle">
                  {valueSubtext}
                </span>
              )}
            </p>
            {desc && (
              <span className="text-xs text-muted-foreground mt-1 block">
                {desc}
              </span>
            )}
          </div>
          {showIcon ? (
            <div
              className={`${iconBg} h-14 w-14 flex items-center justify-center rounded-lg`}
            >
              {icon}
            </div>
          ) : (
            <div className="w-14">
              <ReactApexChart
                options={options}
                series={[{ name: "trend", data }]}
                type="area"
                height={64}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
