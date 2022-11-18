import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header />

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>My Appointment</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;
