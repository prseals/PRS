import React from "react";
import { Link, useParams } from "react-router-dom";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import customers from "../data/customers";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";


function CustomerDetails() {

    const { id } = useParams();

    const customer = customers.find(
        customer => customer.id === Number(id)
    );

    // const customer = {};


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
                            heading="Customer Details"
                            para="It shows detailed info about customer."
                            url="/Customers"
                        />


                        {/* ========================================= */}
                        {/* CUSTOMER NOT FOUND */}
                        {/* ========================================= */}

                        {!("id" in customer) ? (

                            <ItemNotFound
                                name="Customer"
                                url="/Customers"
                            />

                        ) : (

                            <>

                                {/* ========================================= */}
                                {/* CUSTOMER OVERVIEW */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <h5 className="mb-0">

                                                <i className="bi bi-person-vcard me-2"></i>

                                                Customer Overview

                                            </h5>


                                            <span className="badge bg-light text-dark">

                                                ID: {customer.id}

                                            </span>

                                        </div>

                                    </div>


                                    <div className="card-body">

                                        <div className="row">

                                            {/* Customer Name */}

                                            <div className="col-md-8">

                                                <h3 className="fw-bold mb-3">

                                                    {customer.companyName}

                                                </h3>


                                                <p className="text-muted mb-0">

                                                    Customer Code:{" "}

                                                    <strong>
                                                        {customer.customerCode}
                                                    </strong>

                                                </p>

                                            </div>


                                            {/* Status */}

                                            <div className="col-md-4 text-md-end mt-3 mt-md-0">

                                                <span className="text-muted d-block mb-2">

                                                    Status

                                                </span>


                                                {customer.status === "Active" && (

                                                    <span className="badge text-bg-success fs-6">

                                                        <i className="bi bi-check-circle me-1"></i>

                                                        {customer.status}

                                                    </span>

                                                )}


                                                {customer.status === "Inactive" && (

                                                    <span className="badge text-bg-danger fs-6">

                                                        <i className="bi bi-x-circle me-1"></i>

                                                        {customer.status}

                                                    </span>

                                                )}

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* BASIC INFORMATION */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-info-circle me-2"></i>

                                            Basic Information

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Customer Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Customer Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.customerCode}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Contact Person */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Contact Person
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.contactPerson}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Category */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Category
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.category}

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

                                                        {customer.email}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Phone */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Contact No.
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.phone}

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

                                                        {customer.panNumber}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* GST Number */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        GST Number
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.gstNumber}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Payment Terms */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Payment Terms
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.paymentTerms}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Credit Limit */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Credit Limit
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        ₹{customer.creditLimit}

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


                                            {/* Account Holder Name */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Account Holder Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.bankDetails.accountHolderName}

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

                                                        {customer.bankDetails.bankName}

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

                                                        {customer.bankDetails.accountNumber}

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

                                                        {customer.bankDetails.accountType}

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

                                                        {customer.bankDetails.branchName}

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

                                                        {customer.bankDetails.ifscCode}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* MICR Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        MICR Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {customer.bankDetails.micrCode}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* BILLING ADDRESS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-receipt me-2"></i>

                                            Billing Address

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

                                                        {customer.billingAddress.street}

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

                                                        {customer.billingAddress.city}

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

                                                        {customer.billingAddress.state}

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

                                                        {customer.billingAddress.country}

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

                                                        {customer.billingAddress.pincode}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* SHIPPING ADDRESS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-truck me-2"></i>

                                            Shipping Address

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

                                                        {customer.shippingAddress.street}

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

                                                        {customer.shippingAddress.city}

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

                                                        {customer.shippingAddress.state}

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

                                                        {customer.shippingAddress.country}

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

                                                        {customer.shippingAddress.pincode}

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
                                                to="/Customers"
                                                className="btn btn-secondary"
                                            >

                                                <i className="bi bi-arrow-left me-2"></i>

                                                Back to Customers

                                            </Link>


                                            <Link
                                                to={`/Customers/Edit/${customer.id}`}
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-pencil me-2"></i>

                                                Edit Customer

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


export default CustomerDetails;