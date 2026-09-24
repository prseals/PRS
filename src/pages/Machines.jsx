import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import machines from '../data/machines'
import MainPageHeader from '../components/MainPageHeader'
import MachineEdit from './MachineEdit'

function Machines() {
    const handleDelete = () => {
        alert("Machine deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Machines"}
                            para={"It shows a list of machines available in different locations."}
                        />


                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to="/Machines/Add" className='btn btn-primary shadow-sm'>Add Machine</Link>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-responsive table-bordered table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Manufacturer</th>
                                                <th>Location</th>
                                                <th>Status</th>
                                                <th>Condition</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                machines.map(machine => (
                                                    <tr key={machine.id}>
                                                        <td className='text-center fw-bold'>{machine.id}</td>
                                                        <td>{machine.machineCode}</td>
                                                        <td>{machine.machineName}</td>
                                                        <td>{machine.machineType}</td>
                                                        <td>{machine.manufacturer}</td>
                                                        <td>{machine.location.plant}</td>
                                                        <td className='text-center'>
                                                            {
                                                                machine.status === "Running" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{machine.status}</span>
                                                                )
                                                            }

                                                            {
                                                                machine.status === "Maintenance" && (
                                                                    <span className='badge text-bg-danger shadow-sm'>{machine.status}</span>
                                                                )
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            {
                                                                machine.condition === "Needs Maintenance" && (
                                                                    <span className='badge text-bg-danger shadow-sm'>{machine.condition}</span>
                                                                )
                                                            }

                                                            {
                                                                machine.condition === "Good" && (
                                                                    <span className='badge text-bg-warning shadow-sm'>{machine.condition}</span>
                                                                )
                                                            }

                                                            {
                                                                machine.condition === "Excellent" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{machine.condition}</span>
                                                                )
                                                            }

                                                        </td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/Machines/${machine.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                <Link to={`/Machines/Edit/${machine.id}`} class="btn btn-outline-secondary">
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

export default Machines;