import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const InteractionChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    // destroy previous chart on re-render
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["25.02", "26.02", "27.02", "28.02", "29.02"],
        datasets: [
          {
            data: [20, 180, 90, 30, 150],
            borderColor: "#ff4d4f",
            borderWidth: 2,
            tension: 0.45,
            pointRadius: 0,
            borderDash: [6, 6],
          },
          {
            data: [10, 140, 70, 120, 40],
            borderColor: "#597ef7",
            borderWidth: 2,
            tension: 0.45,
            pointRadius: 0,
            borderDash: [6, 6],
          },
          {
            data: [15, 90, 50, 140, 30],
            borderColor: "#9254de",
            borderWidth: 2,
            tension: 0.45,
            pointRadius: 0,
            borderDash: [6, 6],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            intersect: false,
            mode: "index",
            callbacks: {
              label: (ctx) => ` ${ctx.parsed.y}`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#89868D",
            },
          },
          y: {
            min: 0,
            max: 250,
            ticks: {
              stepSize: 50,
              color: "#89868D",
            },
            grid: {
              borderDash: [4, 4],
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ height: "200px" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default InteractionChart;
