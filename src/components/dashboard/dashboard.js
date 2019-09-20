import React from 'react'
import Search from './search';
import DashboardPanel from './dashboardPanel';

export default function Dashboard() {
      
    return (
        <div className="container c-block">
            <Search />
            <DashboardPanel />
        </div>
    )
}
