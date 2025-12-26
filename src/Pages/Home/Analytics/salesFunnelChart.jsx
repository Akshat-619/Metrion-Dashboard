import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesFunnelChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    // 🌈 Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(109, 40, 217, 0.25)");
    gradient.addColorStop(1, "rgba(109, 40, 217, 0.02)");

    // ✨ Shadow plugin
    const shadowPlugin = {
      id: "shadowLine",
      beforeDatasetsDraw(chart) {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowColor = "rgba(109, 40, 217, 0.35)";
        ctx.shadowBlur = 14;
        ctx.shadowOffsetY = 6;
      },
      afterDatasetsDraw(chart) {
        chart.ctx.restore();
      }
    };

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
        datasets: [
          {
            data: [40, 40, 63, 41, 55, 53, 80.234, 45, 50, 68, 64, 48, 61, 50, 58, 69],
            borderColor: "#6D28D9",
            backgroundColor: gradient,
            fill: true,
            borderWidth: 2.5,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#6D28D9",
            pointHoverBorderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,

        interaction: {
          intersect: false,
          mode: "index"
        },

        plugins: {
          legend: { display: false },

          // 🎯 TOOLTIP – EXACT LIKE YOUR IMAGE
          tooltip: {
            backgroundColor: "#6D28D9",
            titleColor: "#fff",
            bodyColor: "#fff",
            padding: 8,
            displayColors: false,
            callbacks: {
              title: () => "", // ❌ remove X value (16, 17)
              label: (ctx) => {
                const value = Math.round(ctx.parsed.y * 1000);
                return value.toLocaleString(); 
              }
            }
          }
        },

        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              color: "#999",
              font: { size: 11 },
              callback: (value) => `${value}k` // ✅ 40k, 60k
            },
            grid: {
              color: "#e5e5e5",
              borderDash: [4, 4]
            },
            border: { display: false }
          },
          x: {
            grid: { display: false },
            ticks: {
              color: "#999",
              font: { size: 11 }
            },
            border: { display: false }
          }
        }
      },
      plugins: [shadowPlugin]
    });

    return () => chartRef.current.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default SalesFunnelChart;
