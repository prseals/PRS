import React from 'react'
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <aside className="col-md-3 col-lg-2 bg-secondary text-white min-vh-100 p-3">
            {/* <h5 className="mb-4">Menu</h5> */}

            <ul className="nav flex-column">

                <li className="nav-item mb-2">
                    <Link to="/Dashboard" className="nav-link active">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Products" className="nav-link text-dark">
                        Products
                    </Link>
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
    )
}

export default Aside;