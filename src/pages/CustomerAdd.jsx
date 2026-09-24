import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Link, useNavigate } from "react-router-dom";
import customers from "../data/customers";
import PageHeader from "../components/PageHeader";

function CustomerAdd() {

    const navigate = useNavigate();

    const [customer, setCustomer] = useState({

        customerCode: "",
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",

        customerType: "",
        industry: "",

        gstNumber: "",
        panNumber: "",

        paymentTerms: "",
        creditLimit: "",

        bankDetails: {
            accountHolderName: "",
            bankName: "",
            branchName: "",
            accountNumber: "",
            accountType: "",
            ifscCode: "",
            micrCode: ""
        },

        billingAddress: {
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: "India"
        },

        shippingAddress: {
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: "India"
        },

        status: "Active"
    });


    // =================================
    // BASIC INFORMATION
    // =================================

    function handleChange(e) {

        const { name, value } = e.target;

        setCustomer({
            ...customer,
            [name]: value
        });
    }


    // =================================
    // BANK DETAILS
    // =================================

    function handleBankChange(e) {

        const { name, value } = e.target;

        setCustomer({
            ...customer,

            bankDetails: {
                ...customer.bankDetails,
                [name]: value
            }
        });
    }


    // =================================
    // BILLING ADDRESS
    // =================================

    function handleBillingAddressChange(e) {

        const { name, value } = e.target;

        setCustomer({
            ...customer,

            billingAddress: {
                ...customer.billingAddress,
                [name]: value
            }
        });
    }


    // =================================
    // SHIPPING ADDRESS
    // =================================

    function handleShippingAddressChange(e) {

        const { name, value } = e.target;

        setCustomer({
            ...customer,

            shippingAddress: {
                ...customer.shippingAddress,
                [name]: value
            }
        });
    }


    // =================================
    // SUBMIT
    // =================================

    function handleSubmit(e) {

        e.preventDefault();

        const newId =
            customers.length > 0
                ? Math.max(...customers.map(customer => customer.id)) + 1
                : 1;


        const newCustomer = {

            id: newId,

            ...customer,

            creditLimit: Number(customer.creditLimit)
        };


        customers.push(newCustomer);


        console.log("New Customer:", newCustomer);
        console.log("All Customers:", customers);


        alert("Customer added successfully!");


        navigate("/Customers");
    }


    // =================================
    // RESET
    // =================================

    function handleReset() {

        setCustomer({

            customerCode: "",
            companyName: "",
            contactPerson: "",
            email: "",
            phone: "",

            customerType: "",
            industry: "",

            gstNumber: "",
            panNumber: "",

            paymentTerms: "",
            creditLimit: "",

            bankDetails: {
                accountHolderName: "",
                bankName: "",
                branchName: "",
                accountNumber: "",
                accountType: "",
                ifscCode: "",
                micrCode: ""
            },

            billingAddress: {
                street: "",
                city: "",
                state: "",
                pincode: "",
                country: "India"
            },

            shippingAddress: {
                street: "",
                city: "",
                state: "",
                pincode: "",
                country: "India"
            },

            status: "Active"
        });
    }


    return (
        <>
            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    {/* ================================= */}
                    {/* SIDEBAR */}
                    {/* ================================= */}

                    <Aside />


                    {/* ================================= */}
                    {/* MAIN CONTENT */}
                    {/* ================================= */}

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">


                        {/* ================================= */}
                        {/* PAGE HEADER */}
                        {/* ================================= */}

                        <PageHeader
                            heading={"Add Customer"}
                            para={"Add a new customer to your organization"}
                            url={"/Customers"}
                        />


                        <form onSubmit={handleSubmit}>


                            {/* ================================= */}
                            {/* BASIC INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-person-vcard me-2"></i>

                                        Basic Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* Customer Code */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Customer Code
                                            </label>

                                            <input
                                                type="text"
                                                name="customerCode"
                                                className="form-control"
                                                value={customer.customerCode}
                                                onChange={handleChange}
                                                placeholder="CUS-002"
                                                required
                                            />

                                        </div>


                                        {/* Company Name */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Company Name
                                            </label>

                                            <input
                                                type="text"
                                                name="companyName"
                                                className="form-control"
                                                value={customer.companyName}
                                                onChange={handleChange}
                                                placeholder="ABC Automotive Pvt. Ltd."
                                                required
                                            />

                                        </div>


                                        {/* Contact Person */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Contact Person
                                            </label>

                                            <input
                                                type="text"
                                                name="contactPerson"
                                                className="form-control"
                                                value={customer.contactPerson}
                                                onChange={handleChange}
                                                placeholder="Rahul Mehta"
                                                required
                                            />

                                        </div>


                                        {/* Phone */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Phone
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-control"
                                                value={customer.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 20001"
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
                                                value={customer.email}
                                                onChange={handleChange}
                                                placeholder="customer@example.com"
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* BUSINESS INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-briefcase me-2"></i>

                                        Business Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* Customer Type */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Customer Type
                                            </label>

                                            <select
                                                name="customerType"
                                                className="form-select"
                                                value={customer.customerType}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Customer Type
                                                </option>

                                                <option value="Manufacturer">
                                                    Manufacturer
                                                </option>

                                                <option value="Distributor">
                                                    Distributor
                                                </option>

                                                <option value="Dealer">
                                                    Dealer
                                                </option>

                                                <option value="Wholesaler">
                                                    Wholesaler
                                                </option>

                                                <option value="Retailer">
                                                    Retailer
                                                </option>

                                                <option value="OEM">
                                                    OEM
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* Industry */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Industry
                                            </label>

                                            <select
                                                name="industry"
                                                className="form-select"
                                                value={customer.industry}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Industry
                                                </option>

                                                <option value="Automotive">
                                                    Automotive
                                                </option>

                                                <option value="Manufacturing">
                                                    Manufacturing
                                                </option>

                                                <option value="Construction">
                                                    Construction
                                                </option>

                                                <option value="Pharmaceutical">
                                                    Pharmaceutical
                                                </option>

                                                <option value="Electronics">
                                                    Electronics
                                                </option>

                                                <option value="Chemical">
                                                    Chemical
                                                </option>

                                                <option value="Food">
                                                    Food
                                                </option>

                                                <option value="Textile">
                                                    Textile
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* Status */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Status
                                            </label>

                                            <select
                                                name="status"
                                                className="form-select"
                                                value={customer.status}
                                                onChange={handleChange}
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
                            {/* TAX & PAYMENT */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-receipt me-2"></i>

                                        Tax & Payment Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* GST */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                GST Number
                                            </label>

                                            <input
                                                type="text"
                                                name="gstNumber"
                                                className="form-control"
                                                value={customer.gstNumber}
                                                onChange={handleChange}
                                                placeholder="27AAAAA1111A1Z5"
                                            />

                                        </div>


                                        {/* PAN */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                PAN Number
                                            </label>

                                            <input
                                                type="text"
                                                name="panNumber"
                                                className="form-control"
                                                value={customer.panNumber}
                                                onChange={handleChange}
                                                placeholder="AAAAA1111A"
                                            />

                                        </div>


                                        {/* Payment Terms */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Payment Terms
                                            </label>

                                            <select
                                                name="paymentTerms"
                                                className="form-select"
                                                value={customer.paymentTerms}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Payment Terms
                                                </option>

                                                <option value="Advance">
                                                    Advance
                                                </option>

                                                <option value="15 Days">
                                                    15 Days
                                                </option>

                                                <option value="30 Days">
                                                    30 Days
                                                </option>

                                                <option value="45 Days">
                                                    45 Days
                                                </option>

                                                <option value="60 Days">
                                                    60 Days
                                                </option>

                                            </select>

                                        </div>


                                        {/* Credit Limit */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Credit Limit
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    name="creditLimit"
                                                    className="form-control"
                                                    value={customer.creditLimit}
                                                    onChange={handleChange}
                                                    placeholder="1500000"
                                                    min="0"
                                                />

                                            </div>

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
                                                value={customer.bankDetails.accountHolderName}
                                                onChange={handleBankChange}
                                                placeholder="Apex Automotive Components Pvt. Ltd."
                                                required
                                            />

                                        </div>


                                        {/* Bank Name */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Bank Name
                                            </label>

                                            <input
                                                type="text"
                                                name="bankName"
                                                className="form-control"
                                                value={customer.bankDetails.bankName}
                                                onChange={handleBankChange}
                                                placeholder="HDFC Bank"

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
                                                value={customer.bankDetails.branchName}
                                                onChange={handleBankChange}
                                                placeholder="HDFC Bank"
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
                                                value={customer.bankDetails.accountNumber}
                                                onChange={handleBankChange}
                                                placeholder="000000001001"
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
                                                value={customer.bankDetails.accountType}
                                                onChange={handleBankChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Account Type
                                                </option>

                                                <option value="Current">
                                                    Current
                                                </option>

                                                <option value="Savings">
                                                    Savings
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
                                                value={customer.bankDetails.ifscCode}
                                                onChange={handleBankChange}
                                                placeholder="HDFC0001001"
                                                required
                                            />

                                        </div>


                                        {/* MICR */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                MICR Code
                                            </label>

                                            <input
                                                type="text"
                                                name="micrCode"
                                                className="form-control"
                                                value={customer.bankDetails.micrCode}
                                                onChange={handleBankChange}
                                                placeholder="000001001"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* BILLING ADDRESS */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-receipt-cutoff me-2"></i>

                                        Billing Address

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
                                                value={customer.billingAddress.street}
                                                onChange={handleBillingAddressChange}
                                                placeholder="MIDC Industrial Area"
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
                                                value={customer.billingAddress.city}
                                                onChange={handleBillingAddressChange}
                                                placeholder="Pune"
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
                                                value={customer.billingAddress.state}
                                                onChange={handleBillingAddressChange}
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
                                                value={customer.billingAddress.pincode}
                                                onChange={handleBillingAddressChange}
                                                placeholder="411019"
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
                                                value={customer.billingAddress.country}
                                                onChange={handleBillingAddressChange}
                                                required
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* SHIPPING ADDRESS */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-truck me-2"></i>

                                        Shipping Address

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
                                                value={customer.shippingAddress.street}
                                                onChange={handleShippingAddressChange}
                                                placeholder="Automotive Industrial Zone"
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
                                                value={customer.shippingAddress.city}
                                                onChange={handleShippingAddressChange}
                                                placeholder="Pune"
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
                                                value={customer.shippingAddress.state}
                                                onChange={handleShippingAddressChange}
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
                                                value={customer.shippingAddress.pincode}
                                                onChange={handleShippingAddressChange}
                                                placeholder="411026"
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
                                                value={customer.shippingAddress.country}
                                                onChange={handleShippingAddressChange}
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
                                            to="/Customers"
                                            className="btn btn-secondary"
                                        >

                                            <i className="bi bi-x-circle me-2"></i>

                                            Cancel

                                        </Link>


                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-warning me-2"
                                                onClick={handleReset}
                                            >

                                                <i className="bi bi-arrow-counterclockwise me-2"></i>

                                                Reset

                                            </button>


                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-person-plus me-2"></i>

                                                Add Customer

                                            </button>
                                        </div>


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

export default CustomerAdd;