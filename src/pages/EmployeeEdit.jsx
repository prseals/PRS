import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Link, useNavigate, useParams } from "react-router-dom";
import employees from "../data/employees";
import PageHeader from "../components/PageHeader";

function EmployeeEdit() {
    const navigate = useNavigate();

    const { id } = useParams();

    const employeeToEdit = employees.find(employee => employee.id === Number(id));

    const [employee, setEmployee] = useState(employeeToEdit);

    function handleChange(e) {
        const { name, value } = e.target;

        setProduct({
            ...employee,
            [name]: value,
        });
    }

    // Personal Information
    function handlePersonalChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            personalInfo: {
                ...employee.personalInfo,
                [name]: value
            }
        });
    }

    // Employment Information
    function handleEmploymentChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            employment: {
                ...employee.employment,
                [name]: value
            }
        });
    }

    // Salary Information
    function handleSalaryChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            salary: {
                ...employee.salary,
                [name]: value
            }
        });
    }

    // Bank Details
    function handleBankChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            bankDetails: {
                ...employee.bankDetails,
                [name]: value
            }
        });
    }

    // Identification
    function handleIdentificationChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            identification: {
                ...employee.identification,
                [name]: value
            }
        });
    }

    // Emergency Contact
    function handleEmergencyChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            emergencyContact: {
                ...employee.emergencyContact,
                [name]: value
            }
        });
    }

    // Address
    function handleAddressChange(e) {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            address: {
                ...employee.address,
                [name]: value
            }
        });
    }

    // Main Status
    function handleStatusChange(e) {
        setEmployee({
            ...employee,
            status: e.target.value
        });
    }

    // Submit
    function handleEditEmployee(e) {
        e.preventDefault();

        console.log("Employee Update:", employee);

        // employees.push(employee);

        alert("Employee Updated successfully!");

        navigate("/Employees");
    }

    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">

                    {/* Sidebar */}
                    <Aside />

                    {/* Main Content */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">

                        <PageHeader 
                            heading={"Update Employee"}
                            para={"This update the product's details"}
                            url={"/Employees"}
                        />


                        <form onSubmit={handleEditEmployee}>

                            {/* ================================= */}
                            {/* BASIC INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-person me-2"></i>
                                        Basic Information
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* Employee Code */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Employee Code
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={employee.employeeCode}
                                                onChange={(e) =>
                                                    setEmployee({
                                                        ...employee,
                                                        employeeCode: e.target.value
                                                    })
                                                }
                                                placeholder="EMP-011"
                                                required
                                            />

                                        </div>

                                        {/* Employee Status */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Status
                                            </label>

                                            <select
                                                className="form-select"
                                                value={employee.status}
                                                onChange={handleStatusChange}
                                                required
                                            >
                                                <option value="Active">
                                                    Active
                                                </option>

                                                <option value="Inactive">
                                                    Inactive
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* PERSONAL INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-person-vcard me-2"></i>
                                        Personal Information
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* First Name */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                First Name
                                            </label>

                                            <input
                                                type="text"
                                                name="firstName"
                                                className="form-control"
                                                value={employee.personalInfo.firstName}
                                                onChange={handlePersonalChange}
                                                placeholder="Shahbaz"
                                                required
                                            />

                                        </div>

                                        {/* Last Name */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Last Name
                                            </label>

                                            <input
                                                type="text"
                                                name="lastName"
                                                className="form-control"
                                                value={employee.personalInfo.lastName}
                                                onChange={handlePersonalChange}
                                                placeholder="Patel"
                                                required
                                            />

                                        </div>

                                        {/* Gender */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Gender
                                            </label>

                                            <select
                                                name="gender"
                                                className="form-select"
                                                value={employee.personalInfo.gender}
                                                onChange={handlePersonalChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Gender
                                                </option>

                                                <option value="Male">
                                                    Male
                                                </option>

                                                <option value="Female">
                                                    Female
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>

                                        {/* DOB */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Date of Birth
                                            </label>

                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                className="form-control"
                                                value={employee.personalInfo.dateOfBirth}
                                                onChange={handlePersonalChange}
                                                required
                                            />

                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Phone
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                value={employee.personalInfo.phone}
                                                onChange={handlePersonalChange}
                                                placeholder="+91 90000 00000"
                                                required
                                            />

                                        </div>

                                        {/* Email */}
                                        <div className="col-md-12 mb-3">

                                            <label className="form-label">
                                                Email
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={employee.personalInfo.email}
                                                onChange={handlePersonalChange}
                                                placeholder="employee@example.com"
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* EMPLOYMENT INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-briefcase me-2"></i>
                                        Employment Information
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* Designation */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Designation
                                            </label>

                                            <input
                                                type="text"
                                                name="designation"
                                                className="form-control"
                                                value={employee.employment.designation}
                                                onChange={handleEmploymentChange}
                                                placeholder="Warehouse Manager"
                                                required
                                            />

                                        </div>

                                        {/* Department */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Department
                                            </label>

                                            <select
                                                name="department"
                                                className="form-select"
                                                value={employee.employment.department}
                                                onChange={handleEmploymentChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Department
                                                </option>

                                                <option value="HR">
                                                    HR
                                                </option>

                                                <option value="Finance">
                                                    Finance
                                                </option>

                                                <option value="Sales">
                                                    Sales
                                                </option>

                                                <option value="Purchase">
                                                    Purchase
                                                </option>

                                                <option value="Production">
                                                    Production
                                                </option>

                                                <option value="Warehouse">
                                                    Warehouse
                                                </option>

                                                <option value="IT">
                                                    IT
                                                </option>

                                                <option value="Administration">
                                                    Administration
                                                </option>

                                            </select>

                                        </div>

                                        {/* Employment Type */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Employment Type
                                            </label>

                                            <select
                                                name="employmentType"
                                                className="form-select"
                                                value={employee.employment.employmentType}
                                                onChange={handleEmploymentChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Type
                                                </option>

                                                <option value="Full Time">
                                                    Full Time
                                                </option>

                                                <option value="Part Time">
                                                    Part Time
                                                </option>

                                                <option value="Contract">
                                                    Contract
                                                </option>

                                                <option value="Intern">
                                                    Intern
                                                </option>

                                            </select>

                                        </div>

                                        {/* Joining Date */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Joining Date
                                            </label>

                                            <input
                                                type="date"
                                                name="joiningDate"
                                                className="form-control"
                                                value={employee.employment.joiningDate}
                                                onChange={handleEmploymentChange}
                                                required
                                            />

                                        </div>

                                        {/* Work Location */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Work Location
                                            </label>

                                            <select
                                                name="workLocation"
                                                className="form-select"
                                                value={employee.employment.workLocation}
                                                onChange={handleEmploymentChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Location
                                                </option>

                                                <option value="Factory">
                                                    Factory
                                                </option>

                                                <option value="Office">
                                                    Office
                                                </option>

                                                <option value="Warehouse">
                                                    Warehouse
                                                </option>

                                                <option value="Remote">
                                                    Remote
                                                </option>

                                            </select>

                                        </div>

                                        {/* Reporting Manager */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Reporting Manager
                                            </label>

                                            <input
                                                type="text"
                                                name="reportingManager"
                                                className="form-control"
                                                value={employee.employment.reportingManager}
                                                onChange={handleEmploymentChange}
                                                placeholder="EMP-001"
                                            />

                                        </div>

                                        {/* Employment Status */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Employment Status
                                            </label>

                                            <select
                                                name="status"
                                                className="form-select"
                                                value={employee.employment.status}
                                                onChange={handleEmploymentChange}
                                            >
                                                <option value="Active">
                                                    Active
                                                </option>

                                                <option value="Inactive">
                                                    Inactive
                                                </option>

                                                <option value="On Leave">
                                                    On Leave
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* SALARY INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-cash-stack me-2"></i>
                                        Salary Information
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* Basic Salary */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Basic Salary
                                            </label>

                                            <input
                                                type="number"
                                                name="basicSalary"
                                                className="form-control"
                                                value={employee.salary.basicSalary}
                                                onChange={handleSalaryChange}
                                                placeholder="48000"
                                                min={0}
                                                required
                                            />

                                        </div>

                                        {/* Allowances */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Allowances
                                            </label>

                                            <input
                                                type="number"
                                                name="allowances"
                                                className="form-control"
                                                value={employee.salary.allowances}
                                                onChange={handleSalaryChange}
                                                placeholder="11000"
                                                min={0}
                                            />

                                        </div>

                                        {/* Deductions */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Deductions
                                            </label>

                                            <input
                                                type="number"
                                                name="deductions"
                                                className="form-control"
                                                value={employee.salary.deductions}
                                                onChange={handleSalaryChange}
                                                placeholder="3000"
                                                min={0}
                                            />

                                        </div>

                                        {/* Net Salary */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Net Salary
                                            </label>

                                            <input
                                                type="number"
                                                name="netSalary"
                                                className="form-control"
                                                value={employee.salary.netSalary}
                                                onChange={handleSalaryChange}
                                                placeholder="56000"
                                                required
                                            />

                                        </div>

                                        {/* Pay Frequency */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Pay Frequency
                                            </label>

                                            <select
                                                name="payFrequency"
                                                className="form-select"
                                                value={employee.salary.payFrequency}
                                                onChange={handleSalaryChange}
                                            >
                                                <option value="Monthly">
                                                    Monthly
                                                </option>

                                                <option value="Weekly">
                                                    Weekly
                                                </option>

                                                <option value="Bi-Weekly">
                                                    Bi-Weekly
                                                </option>

                                                <option value="Yearly">
                                                    Yearly
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* BANK DETAILS */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-bank me-2"></i>
                                        Bank Details
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* Account Holder */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Account Holder Name
                                            </label>

                                            <input
                                                type="text"
                                                name="accountHolderName"
                                                className="form-control"
                                                value={employee.bankDetails.accountHolderName}
                                                onChange={handleBankChange}
                                                placeholder="Shahbaz Talhab Patel"
                                                required
                                            />

                                        </div>

                                        {/* Bank */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Bank Name
                                            </label>

                                            <input
                                                type="text"
                                                name="bankName"
                                                className="form-control"
                                                value={employee.bankDetails.bankName}
                                                onChange={handleBankChange}
                                                placeholder="Bank of Maharashtra"
                                                required
                                            />

                                        </div>

                                        {/* Branch */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Branch Name
                                            </label>

                                            <input
                                                type="text"
                                                name="branchName"
                                                className="form-control"
                                                value={employee.bankDetails.branchName}
                                                onChange={handleBankChange}
                                                placeholder="Kurundwad"
                                                required
                                            />

                                        </div>

                                        {/* Account Number */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Account Number
                                            </label>

                                            <input
                                                type="text"
                                                name="accountNumber"
                                                className="form-control"
                                                value={employee.bankDetails.accountNumber}
                                                onChange={handleBankChange}
                                                placeholder="000000000003"
                                                required
                                            />

                                        </div>

                                        {/* Account Type */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Account Type
                                            </label>

                                            <select
                                                name="accountType"
                                                className="form-select"
                                                value={employee.bankDetails.accountType}
                                                onChange={handleBankChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Account Type
                                                </option>

                                                <option value="Salary">
                                                    Salary
                                                </option>

                                                <option value="Savings">
                                                    Savings
                                                </option>

                                                <option value="Current">
                                                    Current
                                                </option>

                                            </select>

                                        </div>

                                        {/* IFSC */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                IFSC Code
                                            </label>

                                            <input
                                                type="text"
                                                name="ifscCode"
                                                className="form-control"
                                                value={employee.bankDetails.ifscCode}
                                                onChange={handleBankChange}
                                                placeholder="MAHB0001010"
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* IDENTIFICATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-card-text me-2"></i>
                                        Identification
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* PAN */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                PAN Number
                                            </label>

                                            <input
                                                type="text"
                                                name="panNumber"
                                                className="form-control"
                                                value={employee.identification.panNumber}
                                                onChange={handleIdentificationChange}
                                                placeholder="AAAAA0000A"
                                                required
                                            />

                                        </div>

                                        {/* Employee ID */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Employee ID
                                            </label>

                                            <input
                                                type="text"
                                                name="employeeId"
                                                className="form-control"
                                                value={employee.identification.employeeId}
                                                onChange={handleIdentificationChange}
                                                placeholder="EMPID0010"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* EMERGENCY CONTACT */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-telephone-plus me-2"></i>
                                        Emergency Contact
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* Name */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={employee.emergencyContact.name}
                                                onChange={handleEmergencyChange}
                                                placeholder="Mateen Shaikh"
                                                required
                                            />

                                        </div>

                                        {/* Relationship */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Relationship
                                            </label>

                                            <select
                                                name="relationship"
                                                className="form-select"
                                                value={employee.emergencyContact.relationship}
                                                onChange={handleEmergencyChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Relationship
                                                </option>

                                                <option value="Spouse">
                                                    Spouse
                                                </option>

                                                <option value="Father">
                                                    Father
                                                </option>

                                                <option value="Mother">
                                                    Mother
                                                </option>

                                                <option value="Brother">
                                                    Brother
                                                </option>

                                                <option value="Sister">
                                                    Sister
                                                </option>

                                                <option value="Friend">
                                                    Friend
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Phone
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                value={employee.emergencyContact.phone}
                                                onChange={handleEmergencyChange}
                                                placeholder="9876543210"
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* ADDRESS */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">
                                        <i className="bi bi-geo-alt me-2"></i>
                                        Address
                                    </h5>
                                </div>

                                <div className="card-body">

                                    <div className="row">

                                        {/* Street */}
                                        <div className="col-md-12 mb-3">

                                            <label className="form-label">
                                                Street / Address
                                            </label>

                                            <input
                                                type="text"
                                                name="street"
                                                className="form-control"
                                                value={employee.address.street}
                                                onChange={handleAddressChange}
                                                placeholder="CIDCO"
                                                required
                                            />

                                        </div>

                                        {/* City */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                City
                                            </label>

                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                value={employee.address.city}
                                                onChange={handleAddressChange}
                                                placeholder="Nashik"
                                                required
                                            />

                                        </div>

                                        {/* State */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                State
                                            </label>

                                            <select
                                                name="state"
                                                className="form-select"
                                                value={employee.address.state}
                                                onChange={handleAddressChange}
                                                required
                                            >
                                                <option value="">
                                                    Select State
                                                </option>

                                                <option value="Andhra Pradesh">
                                                    Andhra Pradesh
                                                </option>

                                                <option value="Arunachal Pradesh">
                                                    Arunachal Pradesh
                                                </option>

                                                <option value="Assam">
                                                    Assam
                                                </option>

                                                <option value="Bihar">
                                                    Bihar
                                                </option>

                                                <option value="Chhattisgarh">
                                                    Chhattisgarh
                                                </option>

                                                <option value="Goa">
                                                    Goa
                                                </option>

                                                <option value="Gujarat">
                                                    Gujarat
                                                </option>

                                                <option value="Haryana">
                                                    Haryana
                                                </option>

                                                <option value="Himachal Pradesh">
                                                    Himachal Pradesh
                                                </option>

                                                <option value="Jharkhand">
                                                    Jharkhand
                                                </option>

                                                <option value="Karnataka">
                                                    Karnataka
                                                </option>

                                                <option value="Kerala">
                                                    Kerala
                                                </option>

                                                <option value="Madhya Pradesh">
                                                    Madhya Pradesh
                                                </option>

                                                <option value="Maharashtra">
                                                    Maharashtra
                                                </option>

                                                <option value="Manipur">
                                                    Manipur
                                                </option>

                                                <option value="Meghalaya">
                                                    Meghalaya
                                                </option>

                                                <option value="Mizoram">
                                                    Mizoram
                                                </option>

                                                <option value="Nagaland">
                                                    Nagaland
                                                </option>

                                                <option value="Odisha">
                                                    Odisha
                                                </option>

                                                <option value="Punjab">
                                                    Punjab
                                                </option>

                                                <option value="Rajasthan">
                                                    Rajasthan
                                                </option>

                                                <option value="Sikkim">
                                                    Sikkim
                                                </option>

                                                <option value="Tamil Nadu">
                                                    Tamil Nadu
                                                </option>

                                                <option value="Telangana">
                                                    Telangana
                                                </option>

                                                <option value="Tripura">
                                                    Tripura
                                                </option>

                                                <option value="Uttar Pradesh">
                                                    Uttar Pradesh
                                                </option>

                                                <option value="Uttarakhand">
                                                    Uttarakhand
                                                </option>

                                                <option value="West Bengal">
                                                    West Bengal
                                                </option>

                                            </select>

                                        </div>

                                        {/* Pincode */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Pincode
                                            </label>

                                            <input
                                                type="text"
                                                name="pincode"
                                                className="form-control"
                                                value={employee.address.pincode}
                                                onChange={handleAddressChange}
                                                placeholder="422009"
                                                required
                                            />

                                        </div>

                                        {/* Country */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Country
                                            </label>

                                            <input
                                                type="text"
                                                name="country"
                                                className="form-control"
                                                value={employee.address.country}
                                                onChange={handleAddressChange}
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* BUTTONS */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-body">

                                    <div className="d-flex justify-content-between">

                                        <Link
                                            to="/Employees"
                                            className="btn btn-secondary"
                                        >
                                            <i className="bi bi-x-circle me-2"></i>
                                            Cancel
                                        </Link>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            <i className="bi bi-pencil me-2"></i>
                                            Update Employee
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </form>

                    </main>

                </div>
            </div>
        </>
    );
}

export default EmployeeEdit;