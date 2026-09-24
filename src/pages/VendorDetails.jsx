import React from "react";
import { Link, useParams } from "react-router-dom";

import vendors from "../data/vendors";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";


function VendorDetails() {

    const { id } = useParams();

    const vendor = vendors.find(
        vendor => vendor.id === Number(id)
    );

    // const vendor = {};


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
                            heading="Vendor Details"
                            para="It shows detailed info of vendor."
                            url="/Vendors"
                        />


                        {/* ========================================= */}
                        {/* VENDOR NOT FOUND */}
                        {/* ========================================= */}

                        {!("id" in vendor) ? (

                            <ItemNotFound
                                name="Vendor"
                                url="/Vendors"
                            />

                        ) : (

                            <>

                                {/* ========================================= */}
                                {/* VENDOR OVERVIEW */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <h5 className="mb-0">

                                                <i className="bi bi-building me-2"></i>

                                                Vendor Overview

                                            </h5>


                                            <span className="badge bg-light text-dark">

                                                ID: {vendor.id}

                                            </span>

                                        </div>

                                    </div>


                                    <div className="card-body">

                                        <div className="row">

                                            {/* Vendor Name */}

                                            <div className="col-md-8">

                                                <h3 className="fw-bold mb-3">

                                                    {vendor.companyName}

                                                </h3>


                                                <p className="text-muted mb-0">

                                                    Vendor Code:{" "}

                                                    <strong>
                                                        {vendor.vendorCode}
                                                    </strong>

                                                </p>

                                            </div>


                                            {/* Status */}

                                            <div className="col-md-4 text-md-end mt-3 mt-md-0">

                                                <span className="text-muted d-block mb-2">

                                                    Status

                                                </span>


                                                {vendor.status === "Active" && (

                                                    <span className="badge text-bg-success fs-6">

                                                        <i className="bi bi-check-circle me-1"></i>

                                                        {vendor.status}

                                                    </span>

                                                )}


                                                {vendor.status === "Inactive" && (

                                                    <span className="badge text-bg-danger fs-6">

                                                        <i className="bi bi-x-circle me-1"></i>

                                                        {vendor.status}

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


                                            {/* Vendor Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Vendor Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {vendor.vendorCode}

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

                                                        {vendor.contactPerson}

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

                                                        {vendor.category}

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

                                                        {vendor.email}

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

                                                        {vendor.phone}

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

                                                        {vendor.panNumber}

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

                                                        {vendor.gstNumber}

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

                                                        {vendor.paymentTerms}

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

                                                        ₹{vendor.creditLimit}

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

                                                        {vendor.bankDetails.accountHolderName}

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

                                                        {vendor.bankDetails.bankName}

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

                                                        {vendor.bankDetails.accountNumber}

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

                                                        {vendor.bankDetails.accountType}

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

                                                        {vendor.bankDetails.branchName}

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

                                                        {vendor.bankDetails.ifscCode}

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

                                                        {vendor.bankDetails.micrCode}

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

                                                        {vendor.address.street}

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

                                                        {vendor.address.city}

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

                                                        {vendor.address.state}

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

                                                        {vendor.address.country}

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

                                                        {vendor.address.pincode}

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
                                                to="/Vendors"
                                                className="btn btn-secondary"
                                            >

                                                <i className="bi bi-arrow-left me-2"></i>

                                                Back to Vendors

                                            </Link>


                                            <Link
                                                to={`/Vendors/Edit/${vendor.id}`}
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-pencil me-2"></i>

                                                Edit Vendor

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


export default VendorDetails;