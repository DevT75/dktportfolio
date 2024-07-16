import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Custom plugin for formatted ticks
const formattedTicksPlugin = {
    id: 'formattedTicks',
    afterDraw: (chart) => {
        const { ctx, scales: { r } } = chart;
        const centerX = r.xCenter;
        const centerY = r.yCenter;

        ctx.save();
        ctx.font = '8px Pokefont';

        const tickValues = [0, 50, 100, 150];
        const tickLabels = ['Low', 'Medium', 'High', 'Best'];
        const colors = ['transparent', 'transparent', 'transparent', 'transparent'];
        const rotationAngle = 26 * Math.PI / 180;

        tickValues.forEach((value, index) => {
            const angle = Math.PI * 1.68; // Position at top
            const radius = r.getDistanceFromCenterForValue(value);

            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            ctx.beginPath();
            ctx.arc(x, y, 15, 0, 2 * Math.PI);
            ctx.fillStyle = colors[index];
            ctx.fill();

            // Draw rotated text
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.translate(x, y + value / 50 + (value > 50 ? 9 : 0) + (value > 100 ? 0 : 0));
            ctx.rotate(rotationAngle);
            ctx.fillText(tickLabels[index], 0, 0);
            ctx.rotate(-rotationAngle);
            ctx.translate(-x, -y);
        });

        ctx.restore();
    }
};

// Custom plugin for additional text labels
// const textPlugin = {
//     id: 'textPlugin',
//     afterDraw: (chart) => {
//         const ctx = chart.ctx;
//         const scale = chart.scales.r;

//         ctx.save();
//         ctx.font = '12px Arial';
//         ctx.fillStyle = 'black';
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';

//         const texts = ['Best', 'Decent', 'Decent', 'Best', 'Best', 'Best'];
//         const angles = [0, 60, 120, 180, 240, 300];
//         const radius = scale.drawingArea + 20;

//         angles.forEach((angle, index) => {
//             const angleRad = angle * Math.PI / 180;
//             const x = scale.xCenter + Math.cos(angleRad) * radius;
//             const y = scale.yCenter + Math.sin(angleRad) * radius;

//             ctx.fillText(texts[index], x, y);
//         });

//         ctx.restore();
//     }
// };

// Register custom plugins
ChartJS.register(formattedTicksPlugin);

export const RadarChart = () => {
    const data = {
        labels: ['HP', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk'],
        datasets: [
            {
                data: [150, 100, 100, 150, 150, 150],
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                borderColor: 'rgb(0, 128, 0)',
                borderWidth: 2,
                pointBackgroundColor: 'rgb(0, 128, 0)',
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 150,
                ticks: {
                    stepSize: 50,
                    display: false, // Hide default ticks
                    font: {
                        size: 8,
                        weight: 'bold'
                    }
                },
                pointLabels: {
                    font: {
                        size: 10,
                        weight: 'bold',
                        family: 'Pokefont'
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return <Radar data={data} options={options} />;
};