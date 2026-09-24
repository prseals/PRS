import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Link, useNavigate } from "react-router-dom";
import dies from "../data/dies";
import PageHeader from "../components/PageHeader";

function DieAdd() {

    const navigate = useNavigate();

    const [die, setDie] = useState({
        dieCode: "",
        dieName: "",
        dieType: "",
        productCode: "",
        productName: "",
        cavityCount: "",
        material: "",

        dimensions: {
            length: "",
            width: "",
            height: "",
            unit: "mm"
        },

        machineType: "",
        machineId: "",
        manufacturer: "",
        manufacturingDate: "",
        purchaseCost: "",
        installationDate: "",
        lastMaintenanceDate: "",
        nextMaintenanceDate: "",

        totalProductionCycles: "",
        maximumCycles: "",

        condition: "Excellent",
        status: "Active",

        location: "",
        remarks: ""
    });


    // --------------------------------
    // Basic Information Handler
    // --------------------------------

    function handleChange(e) {

        const { name, value } = e.target;

        setDie({
            ...die,
            [name]: value
        });
    }


    // --------------------------------
    // Dimensions Handler
    // --------------------------------

    function handleDimensionsChange(e) {

        const { name, value } = e.target;

        setDie({
            ...die,

            dimensions: {
                ...die.dimensions,
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
            dies.length > 0
                ? Math.max(...dies.map(die => die.id)) + 1
                : 1;


        const newDie = {

            id: newId,

            ...die,

            cavityCount: Number(die.cavityCount),

            dimensions: {
                ...die.dimensions,

                length: Number(die.dimensions.length),
                width: Number(die.dimensions.width),
                height: Number(die.dimensions.height)
            },

            purchaseCost: Number(die.purchaseCost),

            totalProductionCycles:
                Number(die.totalProductionCycles),

            maximumCycles:
                Number(die.maximumCycles)
        };


        // Current demo approach
        dies.push(newDie);


        console.log("New Die:", newDie);
        console.log("All Dies:", dies);


        alert("Die added successfully!");

        navigate("/Dies");
    }


    // --------------------------------
    // Reset
    // --------------------------------

    function handleReset() {

        setDie({

            dieCode: "",
            dieName: "",
            dieType: "",
            productCode: "",
            productName: "",
            cavityCount: "",
            material: "",

            dimensions: {
                length: "",
                width: "",
                height: "",
                unit: "mm"
            },

            machineType: "",
            machineId: "",
            manufacturer: "",
            manufacturingDate: "",
            purchaseCost: "",
            installationDate: "",
            lastMaintenanceDate: "",
            nextMaintenanceDate: "",

            totalProductionCycles: "",
            maximumCycles: "",

            condition: "Excellent",
            status: "Active",

            location: "",
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
                            heading={"Add Die"}
                            para={"Add a new machine to the system"}
                            url={"/Dies"}
                        />


                        <form onSubmit={handleSubmit}>


                            {/* ================================================= */}
                            {/* BASIC INFORMATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-box-seam me-2"></i>

                                        Basic Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Die Code */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Die Code
                                            </label>

                                            <input
                                                type="text"
                                                name="dieCode"
                                                className="form-control"
                                                value={die.dieCode}
                                                onChange={handleChange}
                                                placeholder="DIE-011"
                                                required
                                            />

                                        </div>


                                        {/* Die Name */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Die Name
                                            </label>

                                            <input
                                                type="text"
                                                name="dieName"
                                                className="form-control"
                                                value={die.dieName}
                                                onChange={handleChange}
                                                placeholder="Rubber Seal Strip Die"
                                                required
                                            />

                                        </div>


                                        {/* Die Type */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Die Type
                                            </label>

                                            <select
                                                name="dieType"
                                                className="form-select"
                                                value={die.dieType}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Die Type
                                                </option>

                                                <option value="Extrusion Die">
                                                    Extrusion Die
                                                </option>

                                                <option value="Compression Die">
                                                    Compression Die
                                                </option>

                                                <option value="Injection Die">
                                                    Injection Die
                                                </option>

                                                <option value="Cutting Die">
                                                    Cutting Die
                                                </option>

                                                <option value="Molding Die">
                                                    Molding Die
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* Product Code */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Product Code
                                            </label>

                                            <input
                                                type="text"
                                                name="productCode"
                                                className="form-control"
                                                value={die.productCode}
                                                onChange={handleChange}
                                                placeholder="RUB-SSL-015"
                                            />

                                        </div>


                                        {/* Product Name */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Product Name
                                            </label>

                                            <input
                                                type="text"
                                                name="productName"
                                                className="form-control"
                                                value={die.productName}
                                                onChange={handleChange}
                                                placeholder="Rubber Seal Strip"
                                            />

                                        </div>


                                        {/* Cavity Count */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Cavity Count
                                            </label>

                                            <input
                                                type="number"
                                                name="cavityCount"
                                                className="form-control"
                                                value={die.cavityCount}
                                                onChange={handleChange}
                                                min="1"
                                                placeholder="1"
                                            />

                                        </div>


                                        {/* Material */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Material
                                            </label>

                                            <select
                                                name="material"
                                                className="form-select"
                                                value={die.material}
                                                onChange={handleChange}
                                            >

                                                <option value="">
                                                    Select Material
                                                </option>

                                                <option value="Hardened Tool Steel">
                                                    Hardened Tool Steel
                                                </option>

                                                <option value="Tool Steel">
                                                    Tool Steel
                                                </option>

                                                <option value="Stainless Steel">
                                                    Stainless Steel
                                                </option>

                                                <option value="Alloy Steel">
                                                    Alloy Steel
                                                </option>

                                                <option value="Carbide">
                                                    Carbide
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* DIMENSIONS */}
                            {/* ================================================= */}

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

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Length
                                            </label>

                                            <div className="input-group">

                                                <input
                                                    type="number"
                                                    name="length"
                                                    className="form-control"
                                                    value={die.dimensions.length}
                                                    onChange={handleDimensionsChange}
                                                    placeholder="180"
                                                />

                                                <span className="input-group-text">
                                                    mm
                                                </span>

                                            </div>

                                        </div>


                                        {/* Width */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Width
                                            </label>

                                            <div className="input-group">

                                                <input
                                                    type="number"
                                                    name="width"
                                                    className="form-control"
                                                    value={die.dimensions.width}
                                                    onChange={handleDimensionsChange}
                                                    placeholder="80"
                                                />

                                                <span className="input-group-text">
                                                    mm
                                                </span>

                                            </div>

                                        </div>


                                        {/* Height */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Height
                                            </label>

                                            <div className="input-group">

                                                <input
                                                    type="number"
                                                    name="height"
                                                    className="form-control"
                                                    value={die.dimensions.height}
                                                    onChange={handleDimensionsChange}
                                                    placeholder="80"
                                                />

                                                <span className="input-group-text">
                                                    mm
                                                </span>

                                            </div>

                                        </div>


                                        {/* Unit */}

                                        <div className="col-md-3">

                                            <label className="form-label">
                                                Unit
                                            </label>

                                            <select
                                                name="unit"
                                                className="form-select"
                                                value={die.dimensions.unit}
                                                onChange={handleDimensionsChange}
                                            >

                                                <option value="mm">
                                                    Millimeter (mm)
                                                </option>

                                                <option value="cm">
                                                    Centimeter (cm)
                                                </option>

                                                <option value="inch">
                                                    Inch
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* MACHINE INFORMATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-gear me-2"></i>

                                        Machine Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Machine Type */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Machine Type
                                            </label>

                                            <input
                                                type="text"
                                                name="machineType"
                                                className="form-control"
                                                value={die.machineType}
                                                onChange={handleChange}
                                                placeholder="Rubber Extrusion Machine"
                                            />

                                        </div>


                                        {/* Machine ID */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Machine ID
                                            </label>

                                            <input
                                                type="text"
                                                name="machineId"
                                                className="form-control"
                                                value={die.machineId}
                                                onChange={handleChange}
                                                placeholder="MCH-007"
                                            />

                                        </div>


                                        {/* Manufacturer */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Manufacturer
                                            </label>

                                            <input
                                                type="text"
                                                name="manufacturer"
                                                className="form-control"
                                                value={die.manufacturer}
                                                onChange={handleChange}
                                                placeholder="Manufacturer"
                                            />

                                        </div>


                                        {/* Manufacturing Date */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Manufacturing Date
                                            </label>

                                            <input
                                                type="date"
                                                name="manufacturingDate"
                                                className="form-control"
                                                value={die.manufacturingDate}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* PURCHASE & INSTALLATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-calendar-check me-2"></i>

                                        Purchase & Installation

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Purchase Cost */}

                                        <div className="col-md-4">

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
                                                    value={die.purchaseCost}
                                                    onChange={handleChange}
                                                    placeholder="68000"
                                                />

                                            </div>

                                        </div>


                                        {/* Installation Date */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Installation Date
                                            </label>

                                            <input
                                                type="date"
                                                name="installationDate"
                                                className="form-control"
                                                value={die.installationDate}
                                                onChange={handleChange}
                                            />

                                        </div>


                                        {/* Last Maintenance */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Last Maintenance Date
                                            </label>

                                            <input
                                                type="date"
                                                name="lastMaintenanceDate"
                                                className="form-control"
                                                value={die.lastMaintenanceDate}
                                                onChange={handleChange}
                                            />

                                        </div>


                                        {/* Next Maintenance */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Next Maintenance Date
                                            </label>

                                            <input
                                                type="date"
                                                name="nextMaintenanceDate"
                                                className="form-control"
                                                value={die.nextMaintenanceDate}
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* PRODUCTION INFORMATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-bar-chart-line me-2"></i>

                                        Production Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Total Production Cycles */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Total Production Cycles
                                            </label>

                                            <input
                                                type="number"
                                                name="totalProductionCycles"
                                                className="form-control"
                                                value={die.totalProductionCycles}
                                                onChange={handleChange}
                                                min="0"
                                                placeholder="15600"
                                            />

                                        </div>


                                        {/* Maximum Cycles */}

                                        <div className="col-md-6">

                                            <label className="form-label">
                                                Maximum Cycles
                                            </label>

                                            <input
                                                type="number"
                                                name="maximumCycles"
                                                className="form-control"
                                                value={die.maximumCycles}
                                                onChange={handleChange}
                                                min="0"
                                                placeholder="40000"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* STATUS & LOCATION */}
                            {/* ================================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-info-circle me-2"></i>

                                        Status & Location

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row g-3">


                                        {/* Condition */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Condition
                                            </label>

                                            <select
                                                name="condition"
                                                className="form-select"
                                                value={die.condition}
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


                                        {/* Status */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Status
                                            </label>

                                            <select
                                                name="status"
                                                className="form-select"
                                                value={die.status}
                                                onChange={handleChange}
                                            >

                                                <option value="Active">
                                                    Active
                                                </option>

                                                <option value="Inactive">
                                                    Inactive
                                                </option>

                                                <option value="Under Maintenance">
                                                    Under Maintenance
                                                </option>

                                                <option value="Damaged">
                                                    Damaged
                                                </option>

                                                <option value="Retired">
                                                    Retired
                                                </option>

                                            </select>

                                        </div>


                                        {/* Location */}

                                        <div className="col-md-4">

                                            <label className="form-label">
                                                Location
                                            </label>

                                            <input
                                                type="text"
                                                name="location"
                                                className="form-control"
                                                value={die.location}
                                                onChange={handleChange}
                                                placeholder="Tool Room - Rack E2"
                                            />

                                        </div>


                                        {/* Remarks */}

                                        <div className="col-12">

                                            <label className="form-label">
                                                Remarks
                                            </label>

                                            <textarea
                                                name="remarks"
                                                className="form-control"
                                                rows="3"
                                                value={die.remarks}
                                                onChange={handleChange}
                                                placeholder="Enter die remarks"
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
                                            to="/Dies"
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

                                                <i className="bi bi-plus-circle me-2"></i>

                                                Add Die

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

export default DieAdd;