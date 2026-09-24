import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Link, useNavigate } from "react-router-dom";
import vendors from "../data/vendors";
import PageHeader from "../components/PageHeader";

function VendorAdd() {

    const navigate = useNavigate();

    const [vendor, setVendor] = useState({

        vendorCode: "",
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",

        category: "",
        materials: [],

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

        address: {
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

        setVendor({
            ...vendor,
            [name]: value
        });
    }


    // =================================
    // MATERIALS
    // =================================

    function handleMaterialsChange(e) {

        const options = Array.from(
            e.target.selectedOptions,
            option => option.value
        );

        setVendor({
            ...vendor,
            materials: options
        });
    }


    // =================================
    // BANK DETAILS
    // =================================

    function handleBankChange(e) {

        const { name, value } = e.target;

        setVendor({
            ...vendor,

            bankDetails: {
                ...vendor.bankDetails,
                [name]: value
            }
        });
    }


    // =================================
    // ADDRESS
    // =================================

    function handleAddressChange(e) {

        const { name, value } = e.target;

        setVendor({
            ...vendor,

            address: {
                ...vendor.address,
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
            vendors.length > 0
                ? Math.max(...vendors.map(vendor => vendor.id)) + 1
                : 1;


        const newVendor = {

            id: newId,

            ...vendor,

            creditLimit: Number(vendor.creditLimit)
        };


        vendors.push(newVendor);


        console.log("New Vendor:", newVendor);
        console.log("All Vendors:", vendors);


        alert("Vendor added successfully!");


        navigate("/Vendors");
    }


    // =================================
    // RESET
    // =================================

    function handleReset() {

        setVendor({

            vendorCode: "",
            companyName: "",
            contactPerson: "",
            email: "",
            phone: "",

            category: "",
            materials: [],

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

            address: {

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

                    {/* Sidebar */}
                    <Aside />


                    {/* Main Content */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">


                        {/* ================================= */}
                        {/* PAGE HEADER */}
                        {/* ================================= */}

                        <PageHeader
                            heading={"Add Vendor"}
                            para={"Add a new vendor to your organization"}
                            url={"/Vendors"}
                        />

                        <form onSubmit={handleSubmit}>


                            {/* ================================= */}
                            {/* BASIC INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-building me-2"></i>

                                        Basic Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* Vendor Code */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Vendor Code
                                            </label>

                                            <input
                                                type="text"
                                                name="vendorCode"
                                                className="form-control"
                                                value={vendor.vendorCode}
                                                onChange={handleChange}
                                                placeholder="VEN-002"
                                                required
                                            />

                                        </div>


                                        {/* Company */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Company Name
                                            </label>

                                            <input
                                                type="text"
                                                name="companyName"
                                                className="form-control"
                                                value={vendor.companyName}
                                                onChange={handleChange}
                                                placeholder="ABC Rubber Pvt. Ltd."
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
                                                value={vendor.contactPerson}
                                                onChange={handleChange}
                                                placeholder="Rajesh Patil"
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
                                                value={vendor.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 10001"
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
                                                value={vendor.email}
                                                onChange={handleChange}
                                                placeholder="vendor@example.com"
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


                                        {/* Category */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Category
                                            </label>

                                            <select
                                                name="category"
                                                className="form-select"
                                                value={vendor.category}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Category
                                                </option>

                                                <option value="Raw Material">
                                                    Raw Material
                                                </option>

                                                <option value="Finished Goods">
                                                    Finished Goods
                                                </option>

                                                <option value="Packaging">
                                                    Packaging
                                                </option>

                                                <option value="Services">
                                                    Services
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
                                                value={vendor.status}
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


                                        {/* Materials */}
                                        <div className="col-md-12 mb-3">

                                            <label className="form-label">
                                                Materials Supplied
                                            </label>

                                            <select
                                                multiple
                                                className="form-select"
                                                value={vendor.materials}
                                                onChange={handleMaterialsChange}
                                                size="6"
                                            >

                                                <option value="Natural Rubber">
                                                    Natural Rubber
                                                </option>

                                                <option value="Synthetic Rubber">
                                                    Synthetic Rubber
                                                </option>

                                                <option value="EPDM Rubber">
                                                    EPDM Rubber
                                                </option>

                                                <option value="Nitrile Rubber">
                                                    Nitrile Rubber
                                                </option>

                                                <option value="Silicone Rubber">
                                                    Silicone Rubber
                                                </option>

                                                <option value="Neoprene Rubber">
                                                    Neoprene Rubber
                                                </option>

                                                <option value="Carbon Black">
                                                    Carbon Black
                                                </option>

                                                <option value="Chemicals">
                                                    Chemicals
                                                </option>

                                            </select>

                                            <div className="form-text">
                                                Hold Ctrl / Cmd to select multiple materials.
                                            </div>

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
                                                value={vendor.gstNumber}
                                                onChange={handleChange}
                                                placeholder="27AAAAA0000A1Z5"
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
                                                value={vendor.panNumber}
                                                onChange={handleChange}
                                                placeholder="AAAAA0000A"
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
                                                value={vendor.paymentTerms}
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
                                                    value={vendor.creditLimit}
                                                    onChange={handleChange}
                                                    placeholder="500000"
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
                                                value={vendor.bankDetails.accountHolderName}
                                                onChange={handleBankChange}
                                                placeholder="Shree Rubber Chemicals Pvt. Ltd."
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
                                                value={vendor.bankDetails.bankName}
                                                onChange={handleBankChange}
                                                placeholder="State Bank of India"
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
                                                value={vendor.bankDetails.branchName}
                                                onChange={handleBankChange}
                                                placeholder="Goregaon"
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
                                                value={vendor.bankDetails.accountNumber}
                                                onChange={handleBankChange}
                                                placeholder="000000000001"
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
                                                value={vendor.bankDetails.accountType}
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
                                                value={vendor.bankDetails.ifscCode}
                                                onChange={handleBankChange}
                                                placeholder="SBIN0000001"
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
                                                value={vendor.bankDetails.micrCode}
                                                onChange={handleBankChange}
                                                placeholder="000000001"
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
                                                value={vendor.address.street}
                                                onChange={handleAddressChange}
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
                                                value={vendor.address.city}
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
                                                value={vendor.address.state}
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
                                                value={vendor.address.pincode}
                                                onChange={handleAddressChange}
                                                placeholder="422007"
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
                                                value={vendor.address.country}
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

                                    <div className="d-flex justify-content-between gap-2">

                                        <Link
                                            to="/Vendors"
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

                                                <i className="bi bi-building-add me-2"></i>

                                                Add Vendor

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

export default VendorAdd;
























// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Aside from "../components/Aside";
// import { Link, useNavigate } from "react-router-dom";
// import vendors from "../data/vendors";

// function VendorAdd() {

//     const navigate = useNavigate();

//     const [vendor, setVendor] = useState({

//         vendorCode: "",
//         companyName: "",
//         contactPerson: "",
//         email: "",
//         phone: "",

//         category: "",
//         materials: [],

//         gstNumber: "",
//         panNumber: "",

//         paymentTerms: "",
//         creditLimit: "",

//         bankDetails: {
//             accountHolderName: "",
//             bankName: "",
//             branchName: "",
//             accountNumber: "",
//             accountType: "",
//             ifscCode: "",
//             micrCode: ""
//         },

//         address: {
//             street: "",
//             city: "",
//             state: "",
//             pincode: "",
//             country: "India"
//         },

//         status: "Active"
//     });


//     // --------------------------------
//     // Normal input fields
//     // --------------------------------

//     function handleChange(e) {

//         const { name, value } = e.target;

//         setVendor({
//             ...vendor,
//             [name]: value
//         });
//     }


//     // --------------------------------
//     // Bank Details
//     // --------------------------------

//     function handleBankChange(e) {

//         const { name, value } = e.target;

//         setVendor({

//             ...vendor,

//             bankDetails: {
//                 ...vendor.bankDetails,
//                 [name]: value
//             }

//         });
//     }


//     // --------------------------------
//     // Address
//     // --------------------------------

//     function handleAddressChange(e) {

//         const { name, value } = e.target;

//         setVendor({

//             ...vendor,

//             address: {
//                 ...vendor.address,
//                 [name]: value
//             }

//         });
//     }


//     // --------------------------------
//     // Materials
//     // --------------------------------

//     function handleMaterialsChange(e) {

//         const options = Array.from(
//             e.target.selectedOptions,
//             option => option.value
//         );

//         setVendor({

//             ...vendor,

//             materials: options

//         });
//     }


//     // --------------------------------
//     // Submit
//     // --------------------------------

//     function handleSubmit(e) {

//         e.preventDefault();


//         // Generate automatic ID

//         const newId =
//             vendors.length > 0
//                 ? Math.max(...vendors.map(vendor => vendor.id)) + 1
//                 : 1;


//         // Create new vendor object

//         const newVendor = {

//             id: newId,

//             ...vendor,

//             creditLimit: Number(vendor.creditLimit)

//         };


//         // Add vendor to vendors array

//         vendors.push(newVendor);


//         console.log("New Vendor:", newVendor);

//         console.log("All Vendors:", vendors);


//         alert("Vendor added successfully!");


//         navigate("/Vendors");
//     }


//     return (

//         <div>

//             <Navbar />


//             <div className="container-fluid">

//                 <div className="row">


//                     {/* Sidebar */}

//                     <Aside />


//                     {/* Main Content */}

//                     <main className="col-md-9 col-lg-10 p-4">


//                         {/* Page Header */}

//                         <div className="d-flex justify-content-between align-items-center px-3">

//                             <h2 className="display-6 mb-3">
//                                 Add Vendor
//                             </h2>


//                             <p>

//                                 <Link
//                                     to="/Dashboard"
//                                     className="text-decoration-none"
//                                 >
//                                     Home
//                                 </Link>

//                                 {" / "}

//                                 <Link
//                                     to="/Vendors"
//                                     className="text-decoration-none"
//                                 >
//                                     Vendors
//                                 </Link>

//                                 {" / "}

//                                 <span className="text-secondary">
//                                     Add Vendor
//                                 </span>

//                             </p>

//                         </div>



//                         <div className="card p-3 shadow-sm bg-light">

//                             <div className="card-body">


//                                 <form onSubmit={handleSubmit}>


//                                     {/* ================================================= */}
//                                     {/* BASIC INFORMATION */}
//                                     {/* ================================================= */}

//                                     <h5 className="mb-3 border-bottom pb-2">
//                                         Basic Information
//                                     </h5>


//                                     <div className="row">


//                                         {/* Vendor Code */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Vendor Code
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="vendorCode"
//                                                 value={vendor.vendorCode}
//                                                 onChange={handleChange}
//                                                 placeholder="Example: VEN-001"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Company Name */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Company Name
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="companyName"
//                                                 value={vendor.companyName}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter company name"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Contact Person */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Contact Person
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="contactPerson"
//                                                 value={vendor.contactPerson}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter contact person"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Email */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Email
//                                             </label>

//                                             <input
//                                                 type="email"
//                                                 className="form-control"
//                                                 name="email"
//                                                 value={vendor.email}
//                                                 onChange={handleChange}
//                                                 placeholder="example@company.com"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Phone */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Phone
//                                             </label>

//                                             <input
//                                                 type="tel"
//                                                 className="form-control"
//                                                 name="phone"
//                                                 value={vendor.phone}
//                                                 onChange={handleChange}
//                                                 placeholder="+91 98765 00000"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Category */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Category
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="category"
//                                                 value={vendor.category}
//                                                 onChange={handleChange}
//                                                 required
//                                             >

//                                                 <option value="">
//                                                     Select Category
//                                                 </option>

//                                                 <option value="Raw Material">
//                                                     Raw Material
//                                                 </option>

//                                                 <option value="Finished Goods">
//                                                     Finished Goods
//                                                 </option>

//                                                 <option value="Packaging Material">
//                                                     Packaging Material
//                                                 </option>

//                                                 <option value="Services">
//                                                     Services
//                                                 </option>

//                                                 <option value="Other">
//                                                     Other
//                                                 </option>

//                                             </select>

//                                         </div>



//                                         {/* Materials */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Materials
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 multiple
//                                                 value={vendor.materials}
//                                                 onChange={handleMaterialsChange}
//                                                 required
//                                             >

//                                                 <option value="Natural Rubber">
//                                                     Natural Rubber
//                                                 </option>

//                                                 <option value="Synthetic Rubber">
//                                                     Synthetic Rubber
//                                                 </option>

//                                                 <option value="EPDM Rubber">
//                                                     EPDM Rubber
//                                                 </option>

//                                                 <option value="Nitrile Rubber">
//                                                     Nitrile Rubber
//                                                 </option>

//                                                 <option value="Silicone Rubber">
//                                                     Silicone Rubber
//                                                 </option>

//                                                 <option value="Neoprene Rubber">
//                                                     Neoprene Rubber
//                                                 </option>

//                                                 <option value="Carbon Black">
//                                                     Carbon Black
//                                                 </option>

//                                                 <option value="Chemicals">
//                                                     Chemicals
//                                                 </option>

//                                             </select>

//                                             <small className="text-muted">
//                                                 Hold Ctrl and select multiple materials
//                                             </small>

//                                         </div>

//                                     </div>



//                                     {/* ================================================= */}
//                                     {/* TAX & PAYMENT INFORMATION */}
//                                     {/* ================================================= */}

//                                     <h5 className="mt-4 mb-3 border-bottom pb-2">
//                                         Tax & Payment Information
//                                     </h5>


//                                     <div className="row">


//                                         {/* GST Number */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 GST Number
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="gstNumber"
//                                                 value={vendor.gstNumber}
//                                                 onChange={handleChange}
//                                                 placeholder="Example: 27AAAAA0000A1Z5"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* PAN Number */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 PAN Number
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="panNumber"
//                                                 value={vendor.panNumber}
//                                                 onChange={handleChange}
//                                                 placeholder="Example: AAAAA0000A"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Payment Terms */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Payment Terms
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="paymentTerms"
//                                                 value={vendor.paymentTerms}
//                                                 onChange={handleChange}
//                                                 required
//                                             >

//                                                 <option value="">
//                                                     Select Payment Terms
//                                                 </option>

//                                                 <option value="Immediate">
//                                                     Immediate
//                                                 </option>

//                                                 <option value="15 Days">
//                                                     15 Days
//                                                 </option>

//                                                 <option value="30 Days">
//                                                     30 Days
//                                                 </option>

//                                                 <option value="45 Days">
//                                                     45 Days
//                                                 </option>

//                                                 <option value="60 Days">
//                                                     60 Days
//                                                 </option>

//                                                 <option value="90 Days">
//                                                     90 Days
//                                                 </option>

//                                             </select>

//                                         </div>



//                                         {/* Credit Limit */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Credit Limit
//                                             </label>

//                                             <div className="input-group">

//                                                 <span className="input-group-text">
//                                                     ₹
//                                                 </span>

//                                                 <input
//                                                     type="number"
//                                                     className="form-control"
//                                                     name="creditLimit"
//                                                     value={vendor.creditLimit}
//                                                     onChange={handleChange}
//                                                     placeholder="Enter credit limit"
//                                                     min="0"
//                                                     required
//                                                 />

//                                             </div>

//                                         </div>

//                                     </div>



//                                     {/* ================================================= */}
//                                     {/* BANK DETAILS */}
//                                     {/* ================================================= */}

//                                     <h5 className="mt-4 mb-3 border-bottom pb-2">
//                                         Bank Details
//                                     </h5>


//                                     <div className="row">


//                                         {/* Account Holder */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Account Holder Name
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="accountHolderName"
//                                                 value={
//                                                     vendor.bankDetails.accountHolderName
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 placeholder="Enter account holder name"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Bank Name */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Bank Name
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="bankName"
//                                                 value={
//                                                     vendor.bankDetails.bankName
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 placeholder="Enter bank name"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Branch Name */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Branch Name
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="branchName"
//                                                 value={
//                                                     vendor.bankDetails.branchName
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 placeholder="Enter branch name"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Account Number */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Account Number
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="accountNumber"
//                                                 value={
//                                                     vendor.bankDetails.accountNumber
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 placeholder="Enter account number"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Account Type */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Account Type
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="accountType"
//                                                 value={
//                                                     vendor.bankDetails.accountType
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 required
//                                             >

//                                                 <option value="">
//                                                     Select Account Type
//                                                 </option>

//                                                 <option value="Current">
//                                                     Current
//                                                 </option>

//                                                 <option value="Savings">
//                                                     Savings
//                                                 </option>

//                                             </select>

//                                         </div>



//                                         {/* IFSC Code */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 IFSC Code
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="ifscCode"
//                                                 value={
//                                                     vendor.bankDetails.ifscCode
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 placeholder="Example: SBIN0000001"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* MICR Code */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 MICR Code
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="micrCode"
//                                                 value={
//                                                     vendor.bankDetails.micrCode
//                                                 }
//                                                 onChange={handleBankChange}
//                                                 placeholder="Enter MICR code"
//                                             />

//                                         </div>

//                                     </div>



//                                     {/* ================================================= */}
//                                     {/* ADDRESS */}
//                                     {/* ================================================= */}

//                                     <h5 className="mt-4 mb-3 border-bottom pb-2">
//                                         Address
//                                     </h5>


//                                     <div className="row">


//                                         {/* Street */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Street
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="street"
//                                                 value={
//                                                     vendor.address.street
//                                                 }
//                                                 onChange={handleAddressChange}
//                                                 placeholder="Enter street / industrial area"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* City */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 City
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="city"
//                                                 value={
//                                                     vendor.address.city
//                                                 }
//                                                 onChange={handleAddressChange}
//                                                 placeholder="Enter city"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* State */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 State
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="state"
//                                                 value={vendor.address.state}
//                                                 onChange={handleAddressChange}
//                                                 required
//                                             >

//                                                 <option value="">
//                                                     Select State
//                                                 </option>

//                                                 <option value="Andhra Pradesh">
//                                                     Andhra Pradesh
//                                                 </option>

//                                                 <option value="Arunachal Pradesh">
//                                                     Arunachal Pradesh
//                                                 </option>

//                                                 <option value="Assam">
//                                                     Assam
//                                                 </option>

//                                                 <option value="Bihar">
//                                                     Bihar
//                                                 </option>

//                                                 <option value="Chhattisgarh">
//                                                     Chhattisgarh
//                                                 </option>

//                                                 <option value="Goa">
//                                                     Goa
//                                                 </option>

//                                                 <option value="Gujarat">
//                                                     Gujarat
//                                                 </option>

//                                                 <option value="Haryana">
//                                                     Haryana
//                                                 </option>

//                                                 <option value="Himachal Pradesh">
//                                                     Himachal Pradesh
//                                                 </option>

//                                                 <option value="Jharkhand">
//                                                     Jharkhand
//                                                 </option>

//                                                 <option value="Karnataka">
//                                                     Karnataka
//                                                 </option>

//                                                 <option value="Kerala">
//                                                     Kerala
//                                                 </option>

//                                                 <option value="Madhya Pradesh">
//                                                     Madhya Pradesh
//                                                 </option>

//                                                 <option value="Maharashtra">
//                                                     Maharashtra
//                                                 </option>

//                                                 <option value="Manipur">
//                                                     Manipur
//                                                 </option>

//                                                 <option value="Meghalaya">
//                                                     Meghalaya
//                                                 </option>

//                                                 <option value="Mizoram">
//                                                     Mizoram
//                                                 </option>

//                                                 <option value="Nagaland">
//                                                     Nagaland
//                                                 </option>

//                                                 <option value="Odisha">
//                                                     Odisha
//                                                 </option>

//                                                 <option value="Punjab">
//                                                     Punjab
//                                                 </option>

//                                                 <option value="Rajasthan">
//                                                     Rajasthan
//                                                 </option>

//                                                 <option value="Sikkim">
//                                                     Sikkim
//                                                 </option>
//                                                 <option value="Tamil Nadu">
//                                                     Tamil Nadu
//                                                 </option>
//                                                 <option value="Telangana">
//                                                     Telangana
//                                                 </option>
//                                                 <option value="Tripura">
//                                                     Tripura
//                                                 </option>
//                                                 <option value="Uttar Pradesh">
//                                                     Uttar Pradesh
//                                                 </option>
//                                                 <option value="Uttarakhand">
//                                                     Uttarakhand
//                                                 </option>
//                                                 <option value="West Bengal">
//                                                     West Bengal
//                                                 </option>
//                                             </select>
//                                         </div>

//                                         {/* Pincode */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Pincode
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="pincode"
//                                                 value={
//                                                     vendor.address.pincode
//                                                 }
//                                                 onChange={handleAddressChange}
//                                                 placeholder="Enter pincode"
//                                                 required
//                                             />

//                                         </div>



//                                         {/* Country */}

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Country
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="country"
//                                                 value={
//                                                     vendor.address.country
//                                                 }
//                                                 onChange={handleAddressChange}
//                                                 placeholder="Enter country"
//                                                 required
//                                             />

//                                         </div>

//                                     </div>



//                                     {/* ================================================= */}
//                                     {/* STATUS */}
//                                     {/* ================================================= */}

//                                     <h5 className="mt-4 mb-3 border-bottom pb-2">
//                                         Vendor Status
//                                     </h5>


//                                     <div className="row">

//                                         <div className="col-md-6 mb-3">

//                                             <label className="form-label">
//                                                 Status
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="status"
//                                                 value={vendor.status}
//                                                 onChange={handleChange}
//                                                 required
//                                             >

//                                                 <option value="Active">
//                                                     Active
//                                                 </option>

//                                                 <option value="Inactive">
//                                                     Inactive
//                                                 </option>

//                                             </select>

//                                         </div>

//                                     </div>



//                                     {/* ================================================= */}
//                                     {/* BUTTONS */}
//                                     {/* ================================================= */}

//                                     <div className="d-flex gap-2 mt-4 justify-content-end">

//                                         <Link
//                                             to="/Vendors"
//                                             className="btn btn-secondary"
//                                         >
//                                             Cancel
//                                         </Link>


//                                         <button
//                                             type="reset"
//                                             className="btn btn-warning"
//                                             onClick={() =>
//                                                 setVendor({
//                                                     vendorCode: "",
//                                                     companyName: "",
//                                                     contactPerson: "",
//                                                     email: "",
//                                                     phone: "",

//                                                     category: "",
//                                                     materials: [],

//                                                     gstNumber: "",
//                                                     panNumber: "",

//                                                     paymentTerms: "",
//                                                     creditLimit: "",

//                                                     bankDetails: {
//                                                         accountHolderName: "",
//                                                         bankName: "",
//                                                         branchName: "",
//                                                         accountNumber: "",
//                                                         accountType: "",
//                                                         ifscCode: "",
//                                                         micrCode: ""
//                                                     },

//                                                     address: {
//                                                         street: "",
//                                                         city: "",
//                                                         state: "",
//                                                         pincode: "",
//                                                         country: "India"
//                                                     },

//                                                     status: "Active"
//                                                 })
//                                             }
//                                         >
//                                             Reset
//                                         </button>


//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary"
//                                         >
//                                             Add Vendor
//                                         </button>

//                                     </div>

//                                 </form>

//                             </div>

//                         </div>

//                     </main>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default VendorAdd;