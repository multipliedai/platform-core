// GanttChart.tsx
import React, { useEffect, useRef } from "react";
import Gantt from "frappe-gantt";

// Define task type for Frappe Gantt
export interface GanttTask {
  id: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies?: string;
  custom_class?: string;
}

interface GanttChartProps {
  tasks: GanttTask[];
  onClick?: (task: GanttTask) => void;
}

const GanttChart: React.FC<GanttChartProps> = ({ tasks, onClick }) => {
  const ganttRef = useRef<HTMLDivElement | null>(null);
  const ganttInstance = useRef<any>(null);

  useEffect(() => {
    if (ganttRef.current) {
      // Clear previous instance
      ganttRef.current.innerHTML = "";

      ganttInstance.current = new Gantt(ganttRef.current, tasks, {
        on_click: (task: any) => {
          if (onClick) onClick(task as GanttTask);
        },
        on_date_change: (task: any, start: Date, end: Date) => {
          console.log("Date change:", task, start, end);
        },
        on_progress_change: (task: any, progress: number) => {
          console.log("Progress change:", task, progress);
        },
        on_view_change: (mode: any) => {
          console.log("View mode:", mode);
        },
        view_mode: "Day",
        language: "en",
      });
    }
  }, [tasks, onClick]);

  return <div ref={ganttRef} className="h-full w-full" />;
};

export default GanttChart;
