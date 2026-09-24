import React from "react";
import { Link, useParams } from "react-router-dom";

import enquiries from "../data/enquiries";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";

function EnquiryDetails() {

    const { id } = useParams();

    const enquiry = enquiries.find(
        item => item.id === Number(id)
    );

    return (
        <div>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <Aside />

                    <main className="col-md-9 col-lg-10 p-4">

                        {/* Page Header */}
                        <PageHeader
                            heading={"Enquiry Details"}
                            para={"It shows detailed info of enquiry"}
                            url={"/Enquiries"}
                        />


                        {/* Enquiry Not Found */}
                        {!enquiry ? (

                            <ItemNotFound
                                name="Enquiry"
                                url="/Enquiries"
                            />

                        ) : (

                            <>

                                {/* ============================= */}
                                {/* Enquiry Overview */}
                                {/* ============================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">
                                            <i className="bi bi-info-circle me-2"></i>
                                            Enquiry Overview
                                        </h5>

                                    </div>

                                    <div className="card-body">

                                        <div className="row g-3">

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Enquiry ID
                                                    </small>

                                                    <h6 className="mb-0">
                                                        {enquiry.id}
                                                    </h6>

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Status
                                                    </small>

                                                    <div className="mt-1">

                                                        {enquiry.status === "Lost" && (
                                                            <span className="badge text-bg-danger">
                                                                {enquiry.status}
                                                            </span>
                                                        )}

                                                        {enquiry.status === "New" && (
                                                            <span className="badge text-bg-primary">
                                                                {enquiry.status}
                                                            </span>
                                                        )}

                                                        {enquiry.status === "Contacted" && (
                                                            <span className="badge text-bg-secondary">
                                                                {enquiry.status}
                                                            </span>
                                                        )}

                                                        {enquiry.status === "Negotiation" && (
                                                            <span className="badge text-bg-warning">
                                                                {enquiry.status}
                                                            </span>
                                                        )}

                                                        {enquiry.status === "Quotation Sent" && (
                                                            <span className="badge text-bg-success">
                                                                {enquiry.status}
                                                            </span>
                                                        )}

                                                        {enquiry.status === "Converted" && (
                                                            <span className="badge text-bg-info">
                                                                {enquiry.status}
                                                            </span>
                                                        )}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ============================= */}
                                {/* Customer Information */}
                                {/* ============================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">
                                            <i className="bi bi-person me-2"></i>
                                            Customer Information
                                        </h5>

                                    </div>

                                    <div className="card-body">

                                        <div className="row g-3">

                                            <div className="col-md-6">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Customer Name
                                                    </small>

                                                    <p className="mb-0 fw-semibold">
                                                        {enquiry.name}
                                                    </p>

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Company
                                                    </small>

                                                    <p className="mb-0 fw-semibold">
                                                        {enquiry.company}
                                                    </p>

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Email
                                                    </small>

                                                    <p className="mb-0">
                                                        {enquiry.email}
                                                    </p>

                                                </div>

                                            </div>


                                            <div className="col-md-6">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Contact Number
                                                    </small>

                                                    <p className="mb-0">
                                                        {enquiry.phoneNo}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ============================= */}
                                {/* Customer Requirement */}
                                {/* ============================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">
                                            <i className="bi bi-chat-left-text me-2"></i>
                                            Customer Requirement
                                        </h5>

                                    </div>

                                    <div className="card-body">

                                        <div className="border rounded p-3">

                                            <small className="text-muted">
                                                Requirement
                                            </small>

                                            <p className="mb-0 mt-1">
                                                {enquiry.requirement}
                                            </p>

                                        </div>

                                    </div>

                                </div>


                                {/* ============================= */}
                                {/* Action Buttons */}
                                {/* ============================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between">

                                            <Link
                                                to="/Enquiries"
                                                className="btn btn-secondary"
                                            >
                                                <i className="bi bi-arrow-left me-2"></i>
                                                Back to Enquiries
                                            </Link>


                                            <Link
                                                to={`/Enquiries/Edit/${enquiry.id}`}
                                                className="btn btn-primary"
                                            >
                                                <i className="bi bi-pencil me-2"></i>
                                                Edit Enquiry
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

export default EnquiryDetails;