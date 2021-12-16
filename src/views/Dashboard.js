import React from "react";
import {BarChart} from "../components/BarChart";
import TableData from "../components/TableData";

export const Dashboard = () => {
    return  (
        <div>
            <h1>Dashboard Empreinte Carbone </h1>
            <BarChart />
            <TableData />
        </div>
    )
}