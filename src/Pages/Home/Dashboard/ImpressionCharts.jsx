import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ImpressionCharts = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu"],
        datasets: [
          {
            data: [25, 5, 22, 8],
            borderWidth: 1,
            borderSkipped: false,
            barThickness: 18,
            backgroundColor: [
              "rgba(167, 139, 250, 0.7)",
              "rgba(167, 139, 250, 0.7)",
              "rgba(109, 40, 217, 1)",
              "rgba(167, 139, 250, 0.7)"
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 30,
            ticks: {
              stepSize: 10,
              font: { size: 11 },
              color: "#aaa"
            },
            grid: {
              display: false,
              drawBorder: false
            },
            border: { display: false }
          },
          x: {
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              font: { size: 12 },
              color: "#888"
            },
            border: {
              display: true,
              color: "#6E39CB",
              width: 1
            }
          }
        },
        layout: {
          padding: 0
        }
      }
    });

    // 🔥 cleanup
    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ImpressionCharts;
