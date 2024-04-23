'use client'
import { useState, useEffect} from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from  'react-chartjs-2';
ChartJS.register( 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export default function BarChart() {
    const [barData, setBarData] = useState({
        datasets: [],
    })

    const [barOptions, setBarOptions] = useState({});
    useEffect(() => {
        
        
    }, [])

    setBarData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
        datasets: [
            {
                labels:  'Sales $',
                data: ['1200', '300, 4000, 109, 2300, 2987, 5673],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)',
            },
        ]
    })

    setBarOptions({
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: false
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })


    return (
        <BarChart />
    )
}