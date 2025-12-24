import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesFunnelChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
        datasets: [
          {
            label: "Sales",
            data: [40,40,63,41,58,55,80,43,46,65,62,45,60,45,60],
            borderColor: "rgb(109, 40, 217)",
            backgroundColor: "transparent",
            borderWidth: 3,
            tension: 0,
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
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              font: { size: 11 },
              color: "#999",
              
            },
            grid: {
              color: "#e5e5e5",
              drawBorder: true,
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
              color: "#999",
              gap: 20
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

export default SalesFunnelChart;
