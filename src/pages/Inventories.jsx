import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import MainPageHeader from '../components/MainPageHeader';

function Inventories() {
    const handleDelete = () => {
        alert("Inventory deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Inventories"}
                            para={"It shows list of inventories of an organization."}
                        />

                        <div className='card p-3'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-2'>
                                    <button className='btn btn-primary'>Add Inventory</button>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-responsive table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Name</th>
                                                <th>Code</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Oring</td>
                                                <td>OR-001</td>
                                                <td>45.00</td>
                                                <td className='text-center'>
                                                    <div class="btn-group btn-group-sm">
                                                        <button type="button" class="btn btn-outline-secondary">
                                                            <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger">
                                                            <i class="bi bi-trash" aria-hidden="true"> </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Oring</td>
                                                <td>OR-001</td>
                                                <td>45.00</td>
                                                <td className='text-center'>
                                                    <div class="btn-group btn-group-sm">
                                                        <button type="button" class="btn btn-outline-secondary">
                                                            <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>
                                                            <i class="bi bi-trash" aria-hidden="true"> </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Oring</td>
                                                <td>OR-001</td>
                                                <td>45.00</td>
                                                <td className='text-center'>
                                                    <div class="btn-group btn-group-sm">
                                                        <button type="button" class="btn btn-outline-secondary">
                                                            <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger">
                                                            <i class="bi bi-trash" aria-hidden="true"> </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Oring</td>
                                                <td>OR-001</td>
                                                <td>45.00</td>
                                                <td className='text-center'>
                                                    <div class="btn-group btn-group-sm">
                                                        <button type="button" class="btn btn-outline-secondary">
                                                            <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger">
                                                            <i class="bi bi-trash" aria-hidden="true"> </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Oring</td>
                                                <td>OR-001</td>
                                                <td>45.00</td>
                                                <td className='text-center'>
                                                    <div class="btn-group btn-group-sm">
                                                        <button type="button" class="btn btn-outline-secondary">
                                                            <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger">
                                                            <i class="bi bi-trash" aria-hidden="true"> </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Oring</td>
                                                <td>OR-001</td>
                                                <td>45.00</td>
                                                <td className='text-center'>
                                                    <div class="btn-group btn-group-sm">
                                                        <button type="button" class="btn btn-outline-secondary">
                                                            <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                        </button>
                                                        <button type="button" class="btn btn-outline-danger">
                                                            <i class="bi bi-trash" aria-hidden="true"> </i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
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

export default Inventories;