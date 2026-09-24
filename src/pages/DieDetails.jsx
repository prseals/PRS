import React from "react";
import { Link, useParams } from "react-router-dom";

import dies from "../data/dies";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";


function DieDetails() {

    const { id } = useParams();

    const die = dies.find(
        die => die.id === Number(id)
    );


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
                            heading="Die Details"
                            para="It shows detailed info about die."
                            url="/Dies"
                        />


                        {/* ========================================= */}
                        {/* DIE NOT FOUND */}
                        {/* ========================================= */}

                        {!die ? (

                            <ItemNotFound
                                name="Die"
                                url="/Dies"
                            />

                        ) : (

                            <>

                                {/* ========================================= */}
                                {/* DIE OVERVIEW */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <h5 className="mb-0">

                                                <i className="bi bi-box-seam me-2"></i>

                                                Die Overview

                                            </h5>


                                            <span className="badge bg-light text-dark">

                                                ID: {die.id}

                                            </span>

                                        </div>

                                    </div>


                                    <div className="card-body">

                                        <div className="row">


                                            {/* Die Name */}

                                            <div className="col-md-8">

                                                <h3 className="fw-bold mb-3">

                                                    {die.dieName}

                                                </h3>


                                                <p className="text-muted mb-0">

                                                    Die Code:{" "}

                                                    <strong>
                                                        {die.dieCode}
                                                    </strong>

                                                </p>

                                            </div>


                                            {/* Status */}

                                            <div className="col-md-4 text-md-end mt-3 mt-md-0">

                                                <span className="text-muted d-block mb-2">

                                                    Status

                                                </span>


                                                {die.status === "Active" && (

                                                    <span className="badge text-bg-success fs-6">

                                                        <i className="bi bi-check-circle me-1"></i>

                                                        {die.status}

                                                    </span>

                                                )}


                                                {die.status === "Maintenance" && (

                                                    <span className="badge text-bg-danger fs-6">

                                                        <i className="bi bi-tools me-1"></i>

                                                        {die.status}

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


                                            {/* Die Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Die Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.dieCode}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Die Type */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Die Type
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.dieType}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Product Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Product Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.productCode}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Product Name */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Product Name
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.productName}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Cavity Count */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Cavity Count
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.cavityCount}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Material */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Material
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.material}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Manufacturer */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Manufacturer
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.manufacturer}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Condition */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Condition
                                                    </small>

                                                    <div className="fw-semibold mt-1">


                                                        {die.condition === "Needs Maintenance" && (

                                                            <span className="badge text-bg-danger">

                                                                {die.condition}

                                                            </span>

                                                        )}


                                                        {die.condition === "Good" && (

                                                            <span className="badge text-bg-warning">

                                                                {die.condition}

                                                            </span>

                                                        )}


                                                        {die.condition === "Excellent" && (

                                                            <span className="badge text-bg-success">

                                                                {die.condition}

                                                            </span>

                                                        )}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Location */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Location
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.location}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* DIMENSIONS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-rulers me-2"></i>

                                            Dimensions

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Length */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Length
                                                    </small>

                                                    <h5 className="mb-0 mt-1">

                                                        {die.dimensions.length}{" "}

                                                        {die.dimensions.unit}

                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Width */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Width
                                                    </small>

                                                    <h5 className="mb-0 mt-1">

                                                        {die.dimensions.width}{" "}

                                                        {die.dimensions.unit}

                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Height */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Height
                                                    </small>

                                                    <h5 className="mb-0 mt-1">

                                                        {die.dimensions.height}{" "}

                                                        {die.dimensions.unit}

                                                    </h5>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* MACHINE DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-gear me-2"></i>

                                            Machine Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Machine Type */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Machine Type
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.machineType}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Machine ID */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Machine ID
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.machineId}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* PURCHASE & INSTALLATION */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Purchase & Installation

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Manufacturing Date */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Manufacturing Date
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.manufacturingDate}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Purchase Cost */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Purchase Cost
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        ₹{die.purchaseCost.toLocaleString()}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Installation Date */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Installation Date
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.installationDate}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* MAINTENANCE DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-wrench-adjustable-circle me-2"></i>

                                            Maintenance Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Last Maintenance */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Last Maintenance
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.lastMaintenanceDate}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Next Maintenance */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Next Maintenance
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {die.nextMaintenanceDate}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* PRODUCTION INFORMATION */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-bar-chart me-2"></i>

                                            Production Information

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Total Production Cycles */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Total Production Cycles
                                                    </small>

                                                    <h4 className="mb-0 mt-1">

                                                        {die.totalProductionCycles.toLocaleString()}

                                                    </h4>

                                                </div>

                                            </div>


                                            {/* Maximum Cycles */}

                                            <div className="col-md-6">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Maximum Cycles
                                                    </small>

                                                    <h4 className="mb-0 mt-1">

                                                        {die.maximumCycles.toLocaleString()}

                                                    </h4>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* REMARKS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-chat-left-text me-2"></i>

                                            Remarks

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="border rounded p-3">

                                            {die.remarks}

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* ACTION BUTTONS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between gap-2">


                                            {/* Back */}

                                            <Link
                                                to="/Dies"
                                                className="btn btn-secondary"
                                            >

                                                <i className="bi bi-arrow-left me-2"></i>

                                                Back to Dies

                                            </Link>


                                            {/* Edit */}

                                            <Link
                                                to={`/Dies/Edit/${die.id}`}
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-pencil me-2"></i>

                                                Edit Die

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


export default DieDetails;