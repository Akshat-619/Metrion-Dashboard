import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BestTimeChart = ({ type }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    const data =
      type === "week"
        ? {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            values: [60, 45, 70, 55]
          }
        : {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            values: [25, 5, 22, 8, 21, 12, 15]
          };

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            barThickness: 18,
            backgroundColor: "rgba(109, 40, 217, 0.85)",

            borderRadius: {
              topLeft: 8,
              topRight: 8
            },

            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,

        // 🔥 SMOOTH ANIMATION
        animations: {
          y: {
            duration: 700,
            easing: "easeOutQuart"
          },
          height: {
            duration: 700,
            easing: "easeOutQuart"
          }
        },

        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },

        scales: {
          y: {
            ticks: { display: false },
            grid: { display: false },
            border: { display: false }
          },
          x: {
            grid: { display: false },
            ticks: { color: "#888" }
          }
        }
      }
    });
  }, [type]); // ✅ smooth update on tab change

  return <canvas ref={canvasRef} />;
};

export default BestTimeChart;
