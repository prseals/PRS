import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import enquiries from '../data/enquiries'
import MainPageHeader from '../components/MainPageHeader'

function Enquiries() {
    const handleDelete = () => {
        alert("Enquiry deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Mail Enquiries"}
                            para={"It shows list of mail enquiries received."}
                        />

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped table-hover'>
                                        <thead>
                                            {/* id, name, company, email, phoneNo, requirement, status */}
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Name</th>
                                                <th>Company</th>
                                                <th>Email</th>
                                                <th>Phone No.</th>
                                                {/* <th>Requirement</th> */}
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                enquiries.map(enquiry => (
                                                    <tr key={enquiry.id}>
                                                        <td className='text-center fw-bold'>{enquiry.id}</td>
                                                        <td>{enquiry.name}</td>
                                                        <td>{enquiry.company}</td>
                                                        <td>{enquiry.email}</td>
                                                        <td>{enquiry.phoneNo}</td>
                                                        {/* <td>{enquiry.requirement}</td> */}
                                                        <td className='text-center'>
                                                            {
                                                                enquiry.status === "Lost" && (
                                                                    <span className='badge text-bg-danger shadow-sm'>{enquiry.status}</span>
                                                                )
                                                            }

                                                            {
                                                                enquiry.status === "New" && (
                                                                    <span className='badge text-bg-primary shadow-sm'>{enquiry.status}</span>
                                                                )
                                                            }

                                                            {
                                                                enquiry.status === "Contacted" && (
                                                                    <span className='badge text-bg-secondary shadow-sm'>{enquiry.status}</span>
                                                                )
                                                            }

                                                            {
                                                                enquiry.status === "Negotiation" && (
                                                                    <span className='badge text-bg-warning shadow-sm'>{enquiry.status}</span>
                                                                )
                                                            }


                                                            {
                                                                enquiry.status === "Quotation Sent" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{enquiry.status}</span>
                                                                )
                                                            }

                                                            {
                                                                enquiry.status === "Converted" && (
                                                                    <span className='badge text-bg-info shadow-sm'>{enquiry.status}</span>
                                                                )
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/Enquiries/${enquiry.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                {/* <button type="button" class="btn btn-outline-secondary">
                                                                <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                            </button> */}
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

export default Enquiries;