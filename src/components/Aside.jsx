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
                    <Link to="/Businessprofile" className="nav-link text-dark">
                        Business Profile
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Products" className="nav-link text-dark">
                        Products
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Vendors" className="nav-link text-dark">
                        Vendors
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Customers" className="nav-link text-dark">
                        Customers
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Employees" className="nav-link text-dark">
                        Employees
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Machines" className="nav-link text-dark">
                        Machines
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Dies" className="nav-link text-dark">
                        Dies
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Enquiries" className="nav-link text-dark">
                        Mail Enquiries
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Inventories" className="nav-link text-dark">
                        Inventories
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Sellinvoices" className="nav-link text-dark">
                        Sell Invoices
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Purchaseinvoices" className="nav-link text-dark">
                        Purchase Invoices
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Orders" className="nav-link text-dark">
                        Orders
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <a href="#" className="nav-link text-dark">
                        Reports
                    </a>
                </li>

                <li className="nav-item mb-2">
                    <Link to="/Profiles" className="nav-link text-dark">
                        Profiles
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Aside;