import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import customers from '../data/customers'
import MainPageHeader from '../components/MainPageHeader'

function Customers() {
    const handleDelete = () => {
        alert("Customer deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Customers"}
                            para={"It shows list of customers of organization."}
                        />

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to="/Customers/Add" className='btn btn-primary shadow-sm'>Add Customer</Link>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-responsive table-bordered table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>GST Number</th>
                                                <th>Contact Person</th>
                                                <th>Phone</th>
                                                <th>City</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                customers.map(customer => (
                                                    <tr key={customer.id}>
                                                        <td className='text-center fw-bold'>{customer.id}</td>
                                                        <td>{customer.customerCode}</td>
                                                        <td>{customer.companyName}</td>
                                                        <td>{customer.gstNumber}</td>
                                                        <td>{customer.contactPerson}</td>
                                                        <td>{customer.phone}</td>
                                                        <td>{customer.billingAddress.city}</td>
                                                        <td className='text-center'><span className='badge text-bg-success shadow-sm'>{customer.status}</span></td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/Customers/${customer.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                <Link to={`/Customers/Edit/${customer.id}`} class="btn btn-outline-secondary">
                                                                    <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                                </Link>
                                                                <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>
                                                                    <i class="bi bi-trash" aria-hidden="true"> </i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Customers;