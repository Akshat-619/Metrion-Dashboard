import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ActiveUserChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); // store chart instance

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    const bgPlugin = {
      id: "customBg",
      beforeDraw(chart) {
        const { ctx, chartArea } = chart;
        if (!chartArea) return;

        ctx.save();
        ctx.fillStyle = "#9b5cff";
        ctx.fillRect(
          chartArea.left,
          chartArea.top,
          chartArea.width,
          chartArea.height
        );
        ctx.restore();
      }
    };

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Base",
            data: [200, 180, 210, 195, 140, 175, 160],
            backgroundColor: "#ffffff",
            borderRadius: 8,
            barThickness: 6,
            stack: "stack1"
          },
          {
            label: "Top",
            data: [80, 40, 60, 50, 30, 45, 35],
            backgroundColor: "#5b2bc4",
            borderRadius: 8,
            barThickness: 6,
            stack: "stack1"
          },
          {
            type: "line",
            data: [280, 220, 270, 245, 170, 220, 195],
            borderColor: "transparent",
            pointBackgroundColor: "#ffffff",
            pointRadius: 4,
            pointHoverRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: "#ffffff" }
          },
          y: {
            stacked: true,
            min: 0,
            max: 300,
            ticks: { stepSize: 100, color: "#ffffff" },
            grid: {
              color: "rgba(255,255,255,0.5)",
              borderDash: [6, 6]
            }
          }
        }
      },
      plugins: [bgPlugin]
    });

    // 🔥 cleanup (VERY IMPORTANT)
    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return (
    
      <canvas  ref={canvasRef}
      width={400}
      height={200}
      id="activeUserChart" />
    
  );
};

export default ActiveUserChart;
