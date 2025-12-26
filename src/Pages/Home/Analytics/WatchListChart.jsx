import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const WatchListChart = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // ===============================
  // SAFE DATA (yellow ALWAYS below green)
  // ===============================
  const buildData = (labels, greenValues) => {
    const yellowValues = greenValues.map(v => {
      const gap = Math.max(40, v * 0.25); // dynamic gap
      return Math.round(v - gap);
    });

    return { labels, greenValues, yellowValues };
  };

  const dataMap = {
    day: buildData(
      ["May 5","May 6","May 7","May 8","May 9","May 10"],
      [220,190,210,340,420,360]
    ),
    week: buildData(
      ["Week 1","Week 2","Week 3","Week 4"],
      [1200,1500,1100,1400]
    ),
    month: buildData(
      ["Jan","Feb","Mar","Apr","May","Jun"],
      [3200,2800,3500,3000,4200,3800]
    )
  };

  // ===============================
  // VALUE PILL PLUGIN (both lines)
  // ===============================
  const valuePillPlugin = {
    id: "valuePill",
    afterDatasetsDraw(chart) {
      const tooltip = chart.tooltip;
      if (!tooltip || tooltip.opacity === 0) return;

      const { ctx } = chart;

      tooltip.dataPoints.forEach((point, index) => {
        const { x, y } = point.element;
        const value = point.parsed.y;

        const bgColor =
          point.datasetIndex === 0 ? "#22c55e" : "#f59e0b";

        ctx.save();
        ctx.font = "12px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const paddingX = 10;
        const boxHeight = 22;
        const textWidth = ctx.measureText(value).width;
        const boxWidth = textWidth + paddingX * 2;

        const boxX = x - boxWidth / 2;
        const boxY = y - 38 - index * 26;

        ctx.fillStyle = bgColor;
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 10);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.fillText(value, x, boxY + boxHeight / 2);
        ctx.restore();
      });
    }
  };

  // ===============================
  // INIT CHART
  // ===============================
  useEffect(() => {
    if (!canvasRef.current) return;

    const dayData = dataMap.day;

    chartRef.current = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: dayData.labels,
        datasets: [
          {
            label: "Green",
            data: dayData.greenValues,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.15)",
            fill: true,
            tension: 0.45,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6
          },
          {
            label: "Yellow",
            data: dayData.yellowValues,
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245,158,11,0.15)",
            fill: true,
            tension: 0.2,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6
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
            enabled: true,
            backgroundColor: "transparent",
            caretSize: 0,
            padding: 0,
            displayColors: false,
            callbacks: {
              title: () => "",
              label: () => ""
            }
          }
        },

        scales: {
          x: { grid: { display: false } },
          y: {
            grid: { color: "#eee" },
            ticks: {
              callback: v => (v >= 1000 ? v / 1000 + "k" : v)
            }
          }
        }
      },
      plugins: [valuePillPlugin]
    });

    return () => chartRef.current.destroy();
  }, []);

  // ===============================
  // TAB SWITCH
  // ===============================
  useEffect(() => {
    const tabs = document.querySelectorAll("[data-chart]");

    const onClick = e => {
      const type = e.currentTarget.dataset.chart;
      const d = dataMap[type];
      if (!chartRef.current || !d) return;

      tabs.forEach(t => t.classList.remove("active"));
      e.currentTarget.classList.add("active");

      chartRef.current.data.labels = d.labels;
      chartRef.current.data.datasets[0].data = d.greenValues;
      chartRef.current.data.datasets[1].data = d.yellowValues;
      chartRef.current.update();
    };

    tabs.forEach(t => t.addEventListener("click", onClick));
    return () => tabs.forEach(t => t.removeEventListener("click", onClick));
  }, []);

  return <canvas ref={canvasRef} />;
};

export default WatchListChart;
