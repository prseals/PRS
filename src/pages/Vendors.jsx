import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import vendors from '../data/vendors'
import MainPageHeader from '../components/MainPageHeader'

function Vendors() {
    const handleDelete = () => {
        alert("Vendor deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Vendors"}
                            para={"This is list of vendors to purchase products."}
                        />

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to="/Vendors/Add" className='btn btn-primary shadow-sm'>Add Vendor</Link>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-responsive table-bordered table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>Contact Person</th>
                                                <th>GST Number</th>
                                                <th>City</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                vendors.map(vendor => (
                                                    <tr key={vendor.id}>
                                                        <td className='text-center fw-bold'>{vendor.id}</td>
                                                        <td>{vendor.vendorCode}</td>
                                                        <td>{vendor.companyName}</td>
                                                        <td>{vendor.contactPerson}</td>
                                                        <td>{vendor.gstNumber}</td>
                                                        <td>{vendor.address.city}</td>
                                                        <td className='text-center'><span className='badge text-bg-success shadow-sm'>{vendor.status}</span></td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/Vendors/${vendor.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                <Link to={`/Vendors/Edit/${vendor.id}`} class="btn btn-outline-secondary">
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

export default Vendors;