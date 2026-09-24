import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Link, useNavigate, useParams } from "react-router-dom";
import machines from "../data/machines";
import PageHeader from "../components/PageHeader";

function MachineEdit() {

    const navigate = useNavigate();

    const { id } = useParams();

    const machineToEdit = machines.find(machine => machine.id === Number(id));

    const [machine, setMachine] = useState(machineToEdit);

    function handleChange(e) {
        const { name, value } = e.target;

        setMachine({
            ...machine,
            [name]: value,
        });
    }


    // --------------------------------
    // Basic Information Handler
    // --------------------------------

    function handleChange(e) {

        const { name, value } = e.target;

        setMachine({
            ...machine,
            [name]: value
        });
    }


    // --------------------------------
    // Specifications Handler
    // --------------------------------

    function handleSpecificationsChange(e) {

        const { name, value } = e.target;

        setMachine({
            ...machine,

            specifications: {
                ...machine.specifications,
                [name]: value
            }
        });
    }


    // --------------------------------
    // Installation Handler
    // --------------------------------

    function handleInstallationChange(e) {

        const { name, value } = e.target;

        setMachine({
            ...machine,

            installation: {
                ...machine.installation,
                [name]: value
            }
        });
    }


    // --------------------------------
    // Location Handler
    // --------------------------------

    function handleLocationChange(e) {

        const { name, value } = e.target;

        setMachine({
            ...machine,

            location: {
                ...machine.location,
                [name]: value
            }
        });
    }


    // --------------------------------
    // Operation Handler
    // --------------------------------

    function handleOperationChange(e) {

        const { name, value } = e.target;

        setMachine({
            ...machine,

            operation: {
                ...machine.operation,
                [name]: value
            }
        });
    }


    // --------------------------------
    // Operator Required Handler
    // --------------------------------

    function handleOperatorRequiredChange(e) {

        setMachine({
            ...machine,

            operation: {
                ...machine.operation,
                operatorRequired: e.target.checked
            }
        });
    }


    // --------------------------------
    // Maintenance Handler
    // --------------------------------

    function handleMaintenanceChange(e) {

        const { name, value } = e.target;

        setMachine({
            ...machine,

            maintenance: {
                ...machine.maintenance,
                [name]: value
            }
        });
    }


    // --------------------------------
    // Submit
    // --------------------------------

    function handleSubmit(e) {

        e.preventDefault();

        const newId =
            machines.length > 0
                ? Math.max(...machines.map(machine => machine.id)) + 1
                : 1;


        const newMachine = {
            id: newId,

            ...machine,

            specifications: {
                ...machine.specifications,

                maximumTemperature:
                    Number(machine.specifications.maximumTemperature),

                curingPressure:
                    Number(machine.specifications.curingPressure),

                powerConsumption:
                    Number(machine.specifications.powerConsumption)
            },

            installation: {
                ...machine.installation,

                purchaseCost:
                    Number(machine.installation.purchaseCost)
            },

            maintenance: {
                ...machine.maintenance,

                lastMaintenanceCost:
                    Number(machine.maintenance.lastMaintenanceCost)
            }
        };


        // Current demo approach
        machines.push(newMachine);


        console.log("New Machine:", newMachine);
        console.log("All Machines:", machines);


        alert("Machine added successfully!");

        navigate("/Machines");
    }


    // --------------------------------
    // Reset
    // --------------------------------

    function handleReset() {

        setMachine({
            machineCode: "",
            machineName: "",
            machineType: "",
            manufacturer: "",
            modelNumber: "",
            serialNumber: "",

            specifications: {
                capacity: "",
                heatingType: "",
                maximumTemperature: "",
                temperatureUnit: "°C",
                curingPressure: "",
                pressureUnit: "Ton",
                powerConsumption: "",
                powerUnit: "kW"
            },

            installation: {
                purchaseDate: "",
                installationDate: "",
                purchaseCost: "",
                warrantyExpiryDate: ""
            },

            location: {
                plant: "",
                department: "",
                section: ""
            },

            operation: {
                operatorRequired: false,
                currentOperator: "",
                shift: "",
                productionCapacity: ""
            },

            maintenance: {
                lastMaintenanceDate: "",
                nextMaintenanceDate: "",
                maintenanceFrequency: "",
                lastMaintenanceCost: ""
            },

            status: "Running",
            condition: "Good",
            remarks: ""
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

                        {/* -------------------------------- */}
                        {/* Page Header */}
                        {/* -------------------------------- */}

                        <PageHeader
                            heading={"Update Machine"}
                            para={"This update the machine's details"}
                            url={"/Machines"}
                        />

                        <form onSubmit={handleSubmit}>


                            {/* ================================================= */}
                            {/* BASIC INFORMATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">
                                        <i className="bi bi-cpu me-2"></i>
                                        Basic Information
                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Machine Code */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Machine Code
                                            </label>

                                            <input
                                                type="text"
                                                name="machineCode"
                                                className="form-control"
                                                value={machine.machineCode}
                                                onChange={handleChange}
                                                placeholder="MCH-012"
                                                required
                                            />

                                        </div>


                                        {/* Machine Name */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Machine Name
                                            </label>

                                            <input
                                                type="text"
                                                name="machineName"
                                                className="form-control"
                                                value={machine.machineName}
                                                onChange={handleChange}
                                                placeholder="Rubber Vulcanizing Machine"
                                                required
                                            />

                                        </div>


                                        {/* Machine Type */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Machine Type
                                            </label>

                                            <select
                                                name="machineType"
                                                className="form-select"
                                                value={machine.machineType}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Machine Type
                                                </option>

                                                <option value="Vulcanizing Machine">
                                                    Vulcanizing Machine
                                                </option>

                                                <option value="Mixing Machine">
                                                    Mixing Machine
                                                </option>

                                                <option value="Extrusion Machine">
                                                    Extrusion Machine
                                                </option>

                                                <option value="Compression Machine">
                                                    Compression Machine
                                                </option>

                                                <option value="Injection Molding Machine">
                                                    Injection Molding Machine
                                                </option>

                                                <option value="Cutting Machine">
                                                    Cutting Machine
                                                </option>

                                                <option value="Grinding Machine">
                                                    Grinding Machine
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* Manufacturer */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Manufacturer
                                            </label>

                                            <input
                                                type="text"
                                                name="manufacturer"
                                                className="form-control"
                                                value={machine.manufacturer}
                                                onChange={handleChange}
                                                placeholder="Manufacturer name"
                                                required
                                            />

                                        </div>


                                        {/* Model Number */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Model Number
                                            </label>

                                            <input
                                                type="text"
                                                name="modelNumber"
                                                className="form-control"
                                                value={machine.modelNumber}
                                                onChange={handleChange}
                                                placeholder="VT-300"
                                            />

                                        </div>


                                        {/* Serial Number */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Serial Number
                                            </label>

                                            <input
                                                type="text"
                                                name="serialNumber"
                                                className="form-control"
                                                value={machine.serialNumber}
                                                onChange={handleChange}
                                                placeholder="VT300-2021-012"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* SPECIFICATIONS */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">
                                        <i className="bi bi-sliders me-2"></i>
                                        Specifications
                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Capacity */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Capacity
                                            </label>

                                            <input
                                                type="text"
                                                name="capacity"
                                                className="form-control"
                                                value={machine.specifications.capacity}
                                                onChange={handleSpecificationsChange}
                                                placeholder="300 Ton"
                                            />

                                        </div>


                                        {/* Heating Type */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Heating Type
                                            </label>

                                            <select
                                                name="heatingType"
                                                className="form-select"
                                                value={machine.specifications.heatingType}
                                                onChange={handleSpecificationsChange}
                                            >

                                                <option value="">
                                                    Select Heating Type
                                                </option>

                                                <option value="Electric">
                                                    Electric
                                                </option>

                                                <option value="Steam">
                                                    Steam
                                                </option>

                                                <option value="Oil">
                                                    Oil
                                                </option>

                                                <option value="Gas">
                                                    Gas
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* Maximum Temperature */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Maximum Temperature
                                            </label>

                                            <div className="input-group">

                                                <input
                                                    type="number"
                                                    name="maximumTemperature"
                                                    className="form-control"
                                                    value={machine.specifications.maximumTemperature}
                                                    onChange={handleSpecificationsChange}
                                                    placeholder="200"
                                                />

                                                <span className="input-group-text">
                                                    °C
                                                </span>

                                            </div>

                                        </div>


                                        {/* Temperature Unit */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Temperature Unit
                                            </label>

                                            <select
                                                name="temperatureUnit"
                                                className="form-select"
                                                value={machine.specifications.temperatureUnit}
                                                onChange={handleSpecificationsChange}
                                            >

                                                <option value="°C">
                                                    °C
                                                </option>

                                                <option value="°F">
                                                    °F
                                                </option>

                                            </select>

                                        </div>


                                        {/* Curing Pressure */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Curing Pressure
                                            </label>

                                            <input
                                                type="number"
                                                name="curingPressure"
                                                className="form-control"
                                                value={machine.specifications.curingPressure}
                                                onChange={handleSpecificationsChange}
                                                placeholder="300"
                                            />

                                        </div>


                                        {/* Pressure Unit */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Pressure Unit
                                            </label>

                                            <select
                                                name="pressureUnit"
                                                className="form-select"
                                                value={machine.specifications.pressureUnit}
                                                onChange={handleSpecificationsChange}
                                            >

                                                <option value="Ton">
                                                    Ton
                                                </option>

                                                <option value="Bar">
                                                    Bar
                                                </option>

                                                <option value="PSI">
                                                    PSI
                                                </option>

                                                <option value="MPa">
                                                    MPa
                                                </option>

                                            </select>

                                        </div>


                                        {/* Power Consumption */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Power Consumption
                                            </label>

                                            <input
                                                type="number"
                                                name="powerConsumption"
                                                className="form-control"
                                                value={machine.specifications.powerConsumption}
                                                onChange={handleSpecificationsChange}
                                                placeholder="42"
                                            />

                                        </div>


                                        {/* Power Unit */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Power Unit
                                            </label>

                                            <select
                                                name="powerUnit"
                                                className="form-select"
                                                value={machine.specifications.powerUnit}
                                                onChange={handleSpecificationsChange}
                                            >

                                                <option value="kW">
                                                    kW
                                                </option>

                                                <option value="HP">
                                                    HP
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* INSTALLATION & PURCHASE */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">
                                        <i className="bi bi-calendar-check me-2"></i>
                                        Installation & Purchase
                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Purchase Date */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Purchase Date
                                            </label>

                                            <input
                                                type="date"
                                                name="purchaseDate"
                                                className="form-control"
                                                value={machine.installation.purchaseDate}
                                                onChange={handleInstallationChange}
                                            />

                                        </div>


                                        {/* Installation Date */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Installation Date
                                            </label>

                                            <input
                                                type="date"
                                                name="installationDate"
                                                className="form-control"
                                                value={machine.installation.installationDate}
                                                onChange={handleInstallationChange}
                                            />

                                        </div>


                                        {/* Purchase Cost */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Purchase Cost
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    name="purchaseCost"
                                                    className="form-control"
                                                    value={machine.installation.purchaseCost}
                                                    onChange={handleInstallationChange}
                                                    placeholder="2400000"
                                                />

                                            </div>

                                        </div>


                                        {/* Warranty Expiry */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Warranty Expiry Date
                                            </label>

                                            <input
                                                type="date"
                                                name="warrantyExpiryDate"
                                                className="form-control"
                                                value={machine.installation.warrantyExpiryDate}
                                                onChange={handleInstallationChange}
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* LOCATION */}
                            {/* ================================================= */}

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

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Plant
                                            </label>

                                            <select
                                                name="plant"
                                                className="form-select"
                                                value={machine.location.plant}
                                                onChange={handleLocationChange}
                                            >

                                                <option value="">
                                                    Select Plant
                                                </option>

                                                <option value="Main Manufacturing Plant">
                                                    Main Manufacturing Plant
                                                </option>

                                                <option value="Secondary Manufacturing Plant">
                                                    Secondary Manufacturing Plant
                                                </option>

                                                <option value="Warehouse">
                                                    Warehouse
                                                </option>

                                            </select>

                                        </div>


                                        {/* Department */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Department
                                            </label>

                                            <select
                                                name="department"
                                                className="form-select"
                                                value={machine.location.department}
                                                onChange={handleLocationChange}
                                            >

                                                <option value="">
                                                    Select Department
                                                </option>

                                                <option value="Production">
                                                    Production
                                                </option>

                                                <option value="Maintenance">
                                                    Maintenance
                                                </option>

                                                <option value="Quality">
                                                    Quality
                                                </option>

                                                <option value="Warehouse">
                                                    Warehouse
                                                </option>

                                                <option value="Engineering">
                                                    Engineering
                                                </option>

                                            </select>

                                        </div>


                                        {/* Section */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Section
                                            </label>

                                            <input
                                                type="text"
                                                name="section"
                                                className="form-control"
                                                value={machine.location.section}
                                                onChange={handleLocationChange}
                                                placeholder="Vulcanizing"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* OPERATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">
                                        <i className="bi bi-gear-wide-connected me-2"></i>
                                        Operation
                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Operator Required */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Operator Required
                                            </label>

                                            <div className="form-check form-switch mt-2">

                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    name="operatorRequired"
                                                    checked={
                                                        machine.operation.operatorRequired
                                                    }
                                                    onChange={
                                                        handleOperatorRequiredChange
                                                    }
                                                />

                                                <label className="form-check-label">
                                                    {machine.operation.operatorRequired
                                                        ? "Yes"
                                                        : "No"}
                                                </label>

                                            </div>

                                        </div>


                                        {/* Current Operator */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Current Operator
                                            </label>

                                            <input
                                                type="text"
                                                name="currentOperator"
                                                className="form-control"
                                                value={
                                                    machine.operation.currentOperator
                                                }
                                                onChange={handleOperationChange}
                                                placeholder="Employee Code / Name"
                                                disabled={
                                                    !machine.operation.operatorRequired
                                                }
                                            />

                                        </div>


                                        {/* Shift */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Shift
                                            </label>

                                            <select
                                                name="shift"
                                                className="form-select"
                                                value={machine.operation.shift}
                                                onChange={handleOperationChange}
                                            >

                                                <option value="">
                                                    Select Shift
                                                </option>

                                                <option value="Morning">
                                                    Morning
                                                </option>

                                                <option value="Afternoon">
                                                    Afternoon
                                                </option>

                                                <option value="Night">
                                                    Night
                                                </option>

                                                <option value="General">
                                                    General
                                                </option>

                                            </select>

                                        </div>


                                        {/* Production Capacity */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Production Capacity
                                            </label>

                                            <input
                                                type="text"
                                                name="productionCapacity"
                                                className="form-control"
                                                value={
                                                    machine.operation.productionCapacity
                                                }
                                                onChange={handleOperationChange}
                                                placeholder="100 cycles/day"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* MAINTENANCE */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">
                                        <i className="bi bi-tools me-2"></i>
                                        Maintenance
                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Last Maintenance */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Last Maintenance Date
                                            </label>

                                            <input
                                                type="date"
                                                name="lastMaintenanceDate"
                                                className="form-control"
                                                value={
                                                    machine.maintenance
                                                        .lastMaintenanceDate
                                                }
                                                onChange={handleMaintenanceChange}
                                            />

                                        </div>


                                        {/* Next Maintenance */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Next Maintenance Date
                                            </label>

                                            <input
                                                type="date"
                                                name="nextMaintenanceDate"
                                                className="form-control"
                                                value={
                                                    machine.maintenance
                                                        .nextMaintenanceDate
                                                }
                                                onChange={handleMaintenanceChange}
                                            />

                                        </div>


                                        {/* Frequency */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Maintenance Frequency
                                            </label>

                                            <select
                                                name="maintenanceFrequency"
                                                className="form-select"
                                                value={
                                                    machine.maintenance
                                                        .maintenanceFrequency
                                                }
                                                onChange={handleMaintenanceChange}
                                            >

                                                <option value="">
                                                    Select Frequency
                                                </option>

                                                <option value="Every Month">
                                                    Every Month
                                                </option>

                                                <option value="Every 3 Months">
                                                    Every 3 Months
                                                </option>

                                                <option value="Every 6 Months">
                                                    Every 6 Months
                                                </option>

                                                <option value="Every Year">
                                                    Every Year
                                                </option>

                                                <option value="As Required">
                                                    As Required
                                                </option>

                                            </select>

                                        </div>


                                        {/* Maintenance Cost */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Last Maintenance Cost
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    name="lastMaintenanceCost"
                                                    className="form-control"
                                                    value={
                                                        machine.maintenance
                                                            .lastMaintenanceCost
                                                    }
                                                    onChange={handleMaintenanceChange}
                                                    placeholder="33000"
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* STATUS & REMARKS */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Status & Remarks
                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Status */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Status
                                            </label>

                                            <select
                                                name="status"
                                                className="form-select"
                                                value={machine.status}
                                                onChange={handleChange}
                                            >

                                                <option value="Running">
                                                    Running
                                                </option>

                                                <option value="Stopped">
                                                    Stopped
                                                </option>

                                                <option value="Under Maintenance">
                                                    Under Maintenance
                                                </option>

                                                <option value="Idle">
                                                    Idle
                                                </option>

                                                <option value="Breakdown">
                                                    Breakdown
                                                </option>

                                                <option value="Decommissioned">
                                                    Decommissioned
                                                </option>

                                            </select>

                                        </div>


                                        {/* Condition */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Condition
                                            </label>

                                            <select
                                                name="condition"
                                                className="form-select"
                                                value={machine.condition}
                                                onChange={handleChange}
                                            >

                                                <option value="Excellent">
                                                    Excellent
                                                </option>

                                                <option value="Good">
                                                    Good
                                                </option>

                                                <option value="Fair">
                                                    Fair
                                                </option>

                                                <option value="Poor">
                                                    Poor
                                                </option>

                                                <option value="Critical">
                                                    Critical
                                                </option>

                                            </select>

                                        </div>


                                        {/* Remarks */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Remarks
                                            </label>

                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="3"
                                                value={machine.remarks}
                                                onChange={handleChange}
                                                placeholder="Enter machine remarks"
                                            ></textarea>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* BUTTONS */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-body">
                                    <div className="d-flex justify-content-between">

                                        <Link
                                            to="/Machines"
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
                                            Update Machine
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

export default MachineEdit;