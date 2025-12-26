import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const FollowersChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    // destroy previous chart if re-rendered
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const verticalLinePlugin = {
      id: "verticalLine",
      afterDraw(chart) {
        if (chart.tooltip?._active?.length) {
          const ctx = chart.ctx;
          const x = chart.tooltip._active[0].element.x;
          const topY = chart.chartArea.top;
          const bottomY = chart.chartArea.bottom;

          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([4, 4]);
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#6EC1FF";
          ctx.stroke();
          ctx.restore();
        }
      }
    };

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["25.02", "26.02", "27.02", "28.02"],
        datasets: [
          {
            data: [140, 110, 160, 120],
            borderColor: "#FF3B3B",
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointBackgroundColor: "#FF3B3B"
          },
          {
            data: [120, 95, 110, 90],
            borderColor: "#6E39CB",
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointBackgroundColor: "#6E39CB"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.raw}k`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false }
          },
          y: {
            ticks: {
              callback: value => `${value}k`
            },
            grid: {
              color: "#eaeaea"
            }
          }
        }
      },
      plugins: [verticalLinePlugin]
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ height: "250px", width: "100%" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FollowersChart;
