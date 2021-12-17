import React, {useState} from "react";
import Supabase from "../api/Supabase";
import ImpactCarbone from "../api/ImpactCarbone";
import { Bar } from 'react-chartjs-2';



export const Dashboard = () => {

    const [totalStudent, setTotalStudent] = useState(null);

    const [chartBarVelo, setChartBarVelo] = useState(null);
    const [chartBarBus, setChartBarBus] = useState(null);
    const [chartBarMetro, setChartBarMetro] = useState(null);
    const [chartBarScooter, setChartBarScooter] = useState(null);
    const [chartBarRer, setChartBarRer] = useState(null);
    const [chartBarTer, setChartBarTer] = useState(null);



    const data = {
        labels: ['Vélo ou marche', 'Bus (thermique)', 'Métro', 'Scooter et moto légère', 'RER ou Transilien', 'TER'],
        datasets: [
            {
                type: 'bar',
                label: 'Mode transport trajet école',
                data: [chartBarVelo, chartBarBus, chartBarMetro, chartBarScooter, chartBarRer, chartBarTer],
                backgroundColor: '#f97b53',
                hoverOffset: 4
            },
            {
                type: 'line',
                label: 'CO2 émis',
                data: [47, 52, 67, 58, 9, 50],

                pointBorderWidth: 10,
                tension: 0.1,
            },
        ]
    }

    const options = {
        scales : {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    return (
        <div className="container py-6">
            <ImpactCarbone />
            <Supabase
                totalStudent={totalStudent}
                setTotalStudent={setTotalStudent}
                setChartBarVelo={setChartBarVelo}
                setChartBarBus={setChartBarBus}
                setChartBarMetro={setChartBarMetro}
                setChartBarScooter={setChartBarScooter}
                setChartBarRer={setChartBarRer}
                setChartBarTer={setChartBarTer}
            />

            <h1 className="title is-1 has-text-centered mb-6 has-text-white">DC Campus Paris - Empreinte Carbone </h1>
            <div className="columns">
                <div className="column">
                    <div className="box mt-6">
                        <span className="tag is-link is-pulled-right">Total Etudiants : {totalStudent}</span>
                        <Bar data={data} options={options}/>
                    </div>
                </div>
            </div>
        </div>
    )
}