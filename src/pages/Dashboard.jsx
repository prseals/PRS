import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

function Dashboard() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Main Layout */}
            <div className="container-fluid">
                <div className="row">

                    {/* Sidebar */}
                    <Aside />

                    {/* Main Content */}
                    <main className="col-md-9 col-lg-10 p-4">

                        <h2 className="mb-4">Dashboard</h2>

                        {/* Cards */}
                        <div className="row g-4">

                            {/* Card 1 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm bg-warning">
                                    <div className="card-body">
                                        <h6 className="text-muted">Total Users</h6>
                                        <h2>1,250</h2>
                                        <p className="text-success mb-0">
                                            +12% this month
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm bg-info">
                                    <div className="card-body">
                                        <h6 className="text-muted">Total Orders</h6>
                                        <h2>850</h2>
                                        <p className="text-success mb-0">
                                            +8% this month
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm bg-primary">
                                    <div className="card-body">
                                        <h6 className="text-muted">Revenue</h6>
                                        <h2>₹75,000</h2>
                                        <p className="text-success mb-0">
                                            +15% this month
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card shadow-sm bg-success">
                                    <div className="card-body">
                                        <h6 className="text-muted">Products</h6>
                                        <h2>320</h2>
                                        <p className="text-danger mb-0">
                                            -3% this month
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;