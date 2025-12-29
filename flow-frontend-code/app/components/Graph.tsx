'use client';
import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './Helper/weather';


const chartSetting = {
    yAxis: [
        {
            width: 100,
        },
    ],
    height: 300,
};


export default function Graph() {
    return (
        <>
            <div>
                Graph Component

                <BarChart
                    dataset={dataset}
                    xAxis={[{ dataKey: 'day', groupPadding: 0.3 }]}
                    series={[
                        { dataKey: 'deposit', label: 'Deposit', valueFormatter, color: '#1976d2', barGap: 0.2 },
                        { dataKey: 'withdraw', label: 'Withdraw', valueFormatter, color: '#020202ff' },
                        // { dataKey: 'newYork', label: 'New York', valueFormatter, color: '#388e3c' },
                        // { dataKey: 'seoul', label: 'Seoul', valueFormatter, color: '#fbc02d' },
                    ]}
                    {...chartSetting}
                />
            </div>
        </>
    )
}