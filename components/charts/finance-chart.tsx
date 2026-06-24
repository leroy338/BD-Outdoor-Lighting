"use client";

import { useTheme } from "@/lib/theme-context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface FinanceChartProps {
  type?: "line" | "bar" | "pie" | "doughnut";
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string | string[];
      fill?: boolean;
    }[];
  };
  title?: string;
  height?: number;
  showLegend?: boolean;
}

export function FinanceChart({
  type = "line",
  data,
  title,
  height = 300,
  showLegend = true,
}: FinanceChartProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Default demo data if none provided
  const defaultData = {
    line: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Revenue",
          data: [65000, 72000, 68000, 85000, 92000, 88000, 95000, 103000, 98000, 110000, 115000, 125000],
          backgroundColor: isDark
            ? "rgba(96, 165, 250, 0.2)"
            : "rgba(59, 130, 246, 0.2)",
          borderColor: isDark ? "rgb(96, 165, 250)" : "rgb(59, 130, 246)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Expenses",
          data: [45000, 48000, 46000, 52000, 55000, 53000, 58000, 61000, 59000, 65000, 68000, 70000],
          backgroundColor: isDark
            ? "rgba(168, 85, 247, 0.2)"
            : "rgba(147, 51, 234, 0.2)",
          borderColor: isDark ? "rgb(168, 85, 247)" : "rgb(147, 51, 234)",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    bar: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [205000, 265000, 296000, 350000],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(96, 165, 250, 0.8)",
            "rgba(147, 51, 234, 0.8)",
            "rgba(168, 85, 247, 0.8)",
          ],
          borderColor: [
            "rgb(59, 130, 246)",
            "rgb(96, 165, 250)",
            "rgb(147, 51, 234)",
            "rgb(168, 85, 247)",
          ],
          borderWidth: 2,
        },
      ],
    },
    pie: {
      labels: ["Product Sales", "Services", "Subscriptions", "Other"],
      datasets: [
        {
          label: "Revenue Distribution",
          data: [450000, 280000, 180000, 90000],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(96, 165, 250, 0.8)",
            "rgba(147, 51, 234, 0.8)",
            "rgba(168, 85, 247, 0.8)",
          ],
          borderColor: [
            "rgb(59, 130, 246)",
            "rgb(96, 165, 250)",
            "rgb(147, 51, 234)",
            "rgb(168, 85, 247)",
          ],
          borderWidth: 2,
        },
      ],
    },
    doughnut: {
      labels: ["Operating", "Marketing", "R&D", "Admin"],
      datasets: [
        {
          label: "Expense Breakdown",
          data: [400000, 150000, 100000, 80000],
          backgroundColor: [
            "rgba(59, 130, 246, 0.8)",
            "rgba(96, 165, 250, 0.8)",
            "rgba(147, 51, 234, 0.8)",
            "rgba(168, 85, 247, 0.8)",
          ],
          borderColor: [
            "rgb(59, 130, 246)",
            "rgb(96, 165, 250)",
            "rgb(147, 51, 234)",
            "rgb(168, 85, 247)",
          ],
          borderWidth: 2,
        },
      ],
    },
  };

  const chartData = data || defaultData[type];

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: "top" as const,
        labels: {
          color: isDark ? "rgb(229, 231, 235)" : "rgb(31, 41, 55)",
          font: {
            size: 12,
          },
          padding: 12,
        },
      },
      title: {
        display: !!title,
        text: title,
        color: isDark ? "rgb(243, 244, 246)" : "rgb(17, 24, 39)",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: isDark ? "rgba(31, 41, 55, 0.95)" : "rgba(255, 255, 255, 0.95)",
        titleColor: isDark ? "rgb(243, 244, 246)" : "rgb(17, 24, 39)",
        bodyColor: isDark ? "rgb(229, 231, 235)" : "rgb(55, 65, 81)",
        borderColor: isDark ? "rgb(75, 85, 99)" : "rgb(229, 231, 235)",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales:
      type === "line" || type === "bar"
        ? {
            x: {
              grid: {
                display: false,
                color: isDark ? "rgba(75, 85, 99, 0.3)" : "rgba(229, 231, 235, 0.8)",
              },
              ticks: {
                color: isDark ? "rgb(156, 163, 175)" : "rgb(107, 114, 128)",
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: isDark ? "rgba(75, 85, 99, 0.3)" : "rgba(229, 231, 235, 0.8)",
              },
              ticks: {
                color: isDark ? "rgb(156, 163, 175)" : "rgb(107, 114, 128)",
                callback: function (value: any) {
                  return new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  }).format(value);
                },
              },
            },
          }
        : undefined,
  };

  return (
    <div
      className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm"
      style={{ height: `${height}px` }}
    >
      {type === "line" && <Line data={chartData} options={options} />}
      {type === "bar" && <Bar data={chartData} options={options} />}
      {type === "pie" && <Pie data={chartData} options={options} />}
      {type === "doughnut" && <Doughnut data={chartData} options={options} />}
    </div>
  );
}
