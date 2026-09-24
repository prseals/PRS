import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import employees from '../data/employees'
import MainPageHeader from '../components/MainPageHeader'

function Employees() {
    const handleDelete = () => {
        alert("Employee deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Employees"}
                            para={"It shows list of employees of organization."}
                        />

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to="/Employees/Add" className='btn btn-primary shadow-sm'>Add Employee</Link>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-responsive table-bordered table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>Gender</th>
                                                <th>Phone</th>
                                                <th>Department</th>
                                                <th>Emp. Type</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                employees.map(employee => (
                                                    <tr key={employee.id}>
                                                        <td className='text-center fw-bold'>{employee.id}</td>
                                                        <td>{employee.employeeCode}</td>
                                                        <td>{employee.personalInfo.firstName} {employee.personalInfo.lastName}</td>
                                                        <td>{employee.personalInfo.gender}</td>
                                                        <td>{employee.personalInfo.phone}</td>
                                                        <td>{employee.employment.department}</td>
                                                        <td>{employee.employment.employmentType}</td>
                                                        <td className='text-center'>
                                                            {
                                                                employee.employment.status === "Active" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{employee.employment.status}</span>
                                                                )
                                                            }

                                                            {
                                                                employee.employment.status === "Invactive" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{employee.employment.status}</span>
                                                                )
                                                            }

                                                        </td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/Employees/${employee.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                <Link to={`/Employees/Edit/${employee.id}`} class="btn btn-outline-secondary">
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

export default Employees;