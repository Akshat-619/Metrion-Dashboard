import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesCharts = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500],
        datasets: [
          {
            label: "Sales",
            data: [0, 18, 20, 33, 25, 37, 22, 24, 17, 18, 25, 10, 0],
            borderColor: "rgb(109, 40, 217)",
            backgroundColor: "transparent",
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            mode: "index",
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 10,
            max: 40,
            ticks: {
              stepSize: 5,
              font: { size: 11 },
              color: "#999",
              callback: (value) => `${value} to ${value + 5}`
            },
            grid: {
              color: "#e5e5e5",
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
              font: { size: 11 },
              color: "#999"
            },
            border: { display: false }
          }
        },
        interaction: {
          intersect: false,
          mode: "index"
        }
      }
    });

    // 🔥 cleanup (important)
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

export default SalesCharts;
