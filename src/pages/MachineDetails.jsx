import React from "react";
import { Link, useParams } from "react-router-dom";

import machines from "../data/machines";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";


function MachineDetails() {

    const { id } = useParams();

    const machine = machines.find(
        machine => machine.id === Number(id)
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
                            heading="Machine Details"
                            para="It shows detailed info of machine."
                            url="/Machines"
                        />


                        {/* ========================================= */}
                        {/* MACHINE NOT FOUND */}
                        {/* ========================================= */}

                        {!machine ? (

                            <ItemNotFound
                                name="Machine"
                                url="/Machines"
                            />

                        ) : (

                            <>

                                {/* ========================================= */}
                                {/* MACHINE OVERVIEW */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <h5 className="mb-0">

                                                <i className="bi bi-gear-wide-connected me-2"></i>

                                                Machine Overview

                                            </h5>


                                            <span className="badge bg-light text-dark">

                                                ID: {machine.id}

                                            </span>

                                        </div>

                                    </div>


                                    <div className="card-body">

                                        <div className="row">


                                            {/* Machine Name */}

                                            <div className="col-md-8">

                                                <h3 className="fw-bold mb-3">

                                                    {machine.machineName}

                                                </h3>


                                                <p className="text-muted mb-0">

                                                    Machine Code:{" "}

                                                    <strong>
                                                        {machine.machineCode}
                                                    </strong>

                                                </p>

                                            </div>


                                            {/* Status */}

                                            <div className="col-md-4 text-md-end mt-3 mt-md-0">

                                                <span className="text-muted d-block mb-2">

                                                    Status

                                                </span>


                                                {machine.status === "Running" && (

                                                    <span className="badge text-bg-success fs-6">

                                                        <i className="bi bi-check-circle me-1"></i>

                                                        {machine.status}

                                                    </span>

                                                )}


                                                {machine.status === "Maintenance" && (

                                                    <span className="badge text-bg-danger fs-6">

                                                        <i className="bi bi-tools me-1"></i>

                                                        {machine.status}

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


                                            {/* Machine Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Machine Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.machineCode}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Machine Type */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Machine Type
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.machineType}
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
                                                        {machine.manufacturer}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Model Number */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Model Number
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.modelNumber}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Serial Number */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Serial Number
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.serialNumber}
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


                                                        {machine.condition === "Excellent" && (

                                                            <span className="badge text-bg-success">

                                                                {machine.condition}

                                                            </span>

                                                        )}


                                                        {machine.condition === "Good" && (

                                                            <span className="badge text-bg-warning">

                                                                {machine.condition}

                                                            </span>

                                                        )}


                                                        {machine.condition === "Needs Maintenance" && (

                                                            <span className="badge text-bg-danger">

                                                                {machine.condition}

                                                            </span>

                                                        )}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Remarks */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Remarks
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.remarks}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* MACHINE SPECIFICATIONS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-sliders me-2"></i>

                                            Machine Specifications

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Capacity */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Capacity
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        {machine.specifications.capacity}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Heating Type */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Heating Type
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        {machine.specifications.heatingType}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Hydraulic Pressure */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Hydraulic Pressure
                                                    </small>

                                                    <h5 className="mb-0 mt-1">

                                                        {machine.specifications.hydraulicPressure}{" "}

                                                        {machine.specifications.pressureUnit}

                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Power Consumption */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Power Consumption
                                                    </small>

                                                    <h5 className="mb-0 mt-1">

                                                        {machine.specifications.powerConsumption}{" "}

                                                        {machine.specifications.powerUnit}

                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Maximum Temperature */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Maximum Temperature
                                                    </small>

                                                    <h5 className="mb-0 mt-1">

                                                        {machine.specifications.maximumTemperature}{" "}

                                                        {machine.specifications.temperatureUnit}

                                                    </h5>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* INSTALLATION DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-calendar-check me-2"></i>

                                            Installation Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Purchase Date */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Purchase Date
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.installation.purchaseDate}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Purchase Cost */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Purchase Cost
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        ₹{machine.installation.purchaseCost.toLocaleString()}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Warranty Expiry */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Warranty Expiry
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.installation.warrantyExpiryDate}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Installation Date */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Installation Date
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.installation.installationDate}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* LOCATION */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-geo-alt me-2"></i>

                                            Location

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Plant */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Plant
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.location.plant}
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
                                                        {machine.location.department}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Section */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Section
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.location.section}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* OPERATION DETAILS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-gear me-2"></i>

                                            Operation Details

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Operator Required */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Operator Required
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {machine.operation.operatorRequired
                                                            ? "Yes"
                                                            : "No"
                                                        }

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Current Operator */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Current Operator
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {machine.operation.currentOperator || "Not Assigned"}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Shift */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Shift
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.operation.shift}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Production Capacity */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Production Capacity
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {machine.operation.productionCapacity}
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

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Last Maintenance
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {machine.maintenance.lastMaintenanceDate}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Next Maintenance */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Next Maintenance
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {machine.maintenance.nextMaintenanceDate}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Maintenance Frequency */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Maintenance Frequency
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        {machine.maintenance.maintenanceFrequency}

                                                    </div>

                                                </div>

                                            </div>


                                            {/* Last Maintenance Cost */}

                                            <div className="col-md-6 col-lg-3">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Last Maintenance Cost
                                                    </small>

                                                    <div className="fw-semibold mt-1">

                                                        ₹{machine.maintenance.lastMaintenanceCost.toLocaleString()}

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


                                            {/* Back */}

                                            <Link
                                                to="/Machines"
                                                className="btn btn-secondary"
                                            >

                                                <i className="bi bi-arrow-left me-2"></i>

                                                Back to Machines

                                            </Link>


                                            {/* Edit */}

                                            <Link
                                                to={`/Machines/Edit/${machine.id}`}
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-pencil me-2"></i>

                                                Edit Machine

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


export default MachineDetails;