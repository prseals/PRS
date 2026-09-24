import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import dies from '../data/dies'
import MainPageHeader from '../components/MainPageHeader'

function Dies() {
    const handleDelete = () => {
        alert("Die deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Dies"}
                            para={"It shows list of dies to mould products."}
                        />

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to="/Dies/Add" className='btn btn-primary shadow-sm'>Add Die</Link>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-responsive table-bordered table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Product Code</th>
                                                <th>Cavity</th>
                                                <th>Condition</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                dies.map(die => (
                                                    <tr key={die.id}>
                                                        <td className='text-center fw-bold'>{die.id}</td>
                                                        <td>{die.dieCode}</td>
                                                        <td>{die.dieName}</td>
                                                        <td>{die.dieType}</td>
                                                        <td>{die.productCode}</td>
                                                        <td>{die.cavityCount}</td>
                                                        <td className='text-center'>
                                                            {
                                                                die.condition === "Needs Maintenance" && (
                                                                    <span className='badge text-bg-danger shadow-sm'>{die.condition}</span>
                                                                )
                                                            }

                                                            {
                                                                die.condition === "Good" && (
                                                                    <span className='badge text-bg-warning shadow-sm'>{die.condition}</span>
                                                                )
                                                            }

                                                            {
                                                                die.condition === "Excellent" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{die.condition}</span>
                                                                )
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            {
                                                                die.status === "Active" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{die.status}</span>
                                                                )
                                                            }

                                                            {
                                                                die.status === "Maintenance" && (
                                                                    <span className='badge text-bg-danger shadow-sm'>{die.status}</span>
                                                                )
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/Dies/${die.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                <Link to={`/Dies/Edit/${die.id}`} class="btn btn-outline-secondary">
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

export default Dies