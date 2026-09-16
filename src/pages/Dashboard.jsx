import React from "react";
import logo from "../assets/logo_transparent.png";

function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* Admin Dashboard */}

            <img 
                className="brand-mark"
                src={logo}
                alt="logo"
            />
            ADMIN <span className="brand-highlight">PANEL</span>
          </a>

          <div className="text-white">
            <span className="me-3">Welcome, Admin</span>

            <button className="btn btn-outline-danger">Logout</button>
          </div>          
        </div>
      </nav>

      {/* Main Layout */}
      <div className="container-fluid">
        <div className="row">

          {/* Sidebar */}
          <aside className="col-md-3 col-lg-2 bg-secondary text-white min-vh-100 p-3">
            {/* <h5 className="mb-4">Menu</h5> */}

            <ul className="nav flex-column">

              <li className="nav-item mb-2">
                <a href="#" className="nav-link active">
                  Dashboard
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Products
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Vendors
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Customers
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Employees
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Dies
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Inventory
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Machines
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Sell Invoices
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Purchase Invoices
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Mails
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Orders
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Reports
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  Profile
                </a>
              </li>

            </ul>
          </aside>

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