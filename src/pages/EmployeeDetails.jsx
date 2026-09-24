import React from "react";
import { Link, useParams } from "react-router-dom";

import employees from "../data/employees";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";


function EmployeeDetails() {

    const { id } = useParams();

    const employee = employees.find(
        employee => employee.id === Number(id)
    );

    // const employee = {};


    return (

        <div>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <Aside />

                    <main className="col-md-9 col-lg-10 p-4">

                        {/* ========================================= */}
                        {/* PAGE HEADER */}
                        {/* ========================================= */}

                        <PageHeader
                            heading="Employee Details"
                            para="It shows detailed info of employee."
                            url="/Employees"
                        />


                        {/* ========================================= */}
                        {/* EMPLOYEE NOT FOUND */}
                        {/* ========================================= */}

                        {!employee ? (

                            <ItemNotFound
                                name="Employee"
                                url="/Employees"
                            />

                        ) : (

                            <>

                                {/* ========================================= */}
                                {/* PERSONAL INFORMATION */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">
                                    <div className="card-header bg-primary text-white">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="">
                                                <i className="bi bi-info-circle me-2"></i>
                                                Employee Overview
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h3 className="fw-bold mb-3">
                                                    {employee.personalInfo.firstName} {employee.personalInfo.lastName}
                                                </h3>

                                                <p className="tex-muted mb-0">
                                                    Employee Code: {" "}
                                                    {employee.employeeCode}
                                                </p>
                                            </div>
                                            <div className="col-md-4 text-md-end mt-3 mt-md-0">
                                                <span className="text-muted d-block mb-2">
                                                    Status    
                                                </span> 

                                                {
                                                    employee.employment.status === "Active" && (
                                                        <span className='badge text-bg-success shadow-sm fs-6'>
                                                            <i className="bi bi-check-circle me-1"></i>
                                                            {employee.employment.status}
                                                        </span>
                                                    )
                                                }
                                                
                                                {
                                                    employee.employment.status === "Invactive" && (
                                                        <span className='badge text-bg-danger shadow-sm fs-6'>
                                                            <i className="bi bi-x-circle me-1"></i>
                                                            {employee.employment.status}
                                                        </span>
                                                    )
                                                }                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <h5 className="mb-0">

                                                <i className="bi bi-person-vcard me-2"></i>

                                                Personal Information

                                            </h5>


                                            <span className="badge bg-light text-dark">

                                                ID: {employee.id}

                                            </span>

                                        </div>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Employee Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Employee Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employeeCode}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Employee ID */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Employee ID
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.identification.employeeId}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Full Name */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Full Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.personalInfo.firstName}{" "}
                                                        {employee.personalInfo.lastName}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* PAN Number */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        PAN Number
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.identification.panNumber}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Gender */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Gender
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.personalInfo.gender}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Date of Birth */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Date of Birth
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.personalInfo.dateOfBirth}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Email */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Email
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.personalInfo.email}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Contact Number */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Contact No.
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.personalInfo.phone}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Status */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Status
                                                    </small>

                                                    <div className="mt-1">

                                                        <span className="badge text-bg-success">
                                                            {employee.status}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* EMPLOYMENT DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-briefcase me-2"></i>

                                            Employment Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Designation */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Designation
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employment.designation}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Department */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Department
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employment.department}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Employment Type */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Employment Type
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employment.employmentType}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Joining Date */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Joining Date
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employment.joiningDate}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Reporting Manager */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Reporting Manager
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employment.reportingManager}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Work Location */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Work Location
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.employment.workLocation}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Employment Status */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Employment Status
                                                    </small>

                                                    <div className="mt-1">

                                                        <span className="badge text-bg-success">
                                                            {employee.employment.status}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* SALARY DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-currency-rupee me-2"></i>

                                            Salary Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Basic Salary */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Basic Salary
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        ₹{employee.salary.basicSalary}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Allowance */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Allowance
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        ₹{employee.salary.allowances}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Deduction */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Deduction
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        ₹{employee.salary.deductions}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Net Salary */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Net Salary
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        ₹{employee.salary.netSalary}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Pay Frequency */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Pay Frequency
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.salary.payFrequency}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* BANK DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-bank me-2"></i>

                                            Bank Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Account Holder */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Account Holder Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.bankDetails.accountHolderName}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Bank Name */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Bank Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.bankDetails.bankName}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Account Number */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Account Number
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.bankDetails.accountNumber}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Account Type */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Account Type
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.bankDetails.accountType}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Branch Name */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Branch Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.bankDetails.branchName}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* IFSC Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        IFSC Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.bankDetails.ifscCode}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* ADDRESS DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-geo-alt me-2"></i>

                                            Address Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Street */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Street
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.address.street}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* City */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        City
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.address.city}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* State */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        State
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.address.state}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Country */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Country
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.address.country}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Pin Code */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Pin Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.address.pincode}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* EMERGENCY CONTACT */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-telephone me-2"></i>

                                            Emergency Contact

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Name */}

                                            <div className="col-md-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.emergencyContact.name}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Phone */}

                                            <div className="col-md-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Phone
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.emergencyContact.phone}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Relationship */}

                                            <div className="col-md-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Relationship
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {employee.emergencyContact.relationship}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* ACTION BUTTONS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between gap-2">

                                            <Link
                                                to="/Employees"
                                                className="btn btn-secondary"
                                            >

                                                <i className="bi bi-arrow-left me-2"></i>

                                                Back to Employees

                                            </Link>


                                            <Link
                                                to={`/Employees/Edit/${employee.id}`}
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-pencil me-2"></i>

                                                Edit Employee

                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </>

                        )}

                    </main>

                </div>

            </div>

        </div>
    );
}


export default EmployeeDetails;