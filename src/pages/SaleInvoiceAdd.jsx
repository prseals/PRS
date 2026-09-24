import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

function SaleInvoiceAdd() {
    const [invoice, setInvoice] = useState({
        invoiceDate: new Date().toISOString().split("T")[0],

        customer: {
            customerId: "",
            customerName: "",
            gstin: "",
            state: ""
        },

        items: [
            {
                itemId: "",
                itemName: "",
                hsnCode: "",
                quantity: 1,
                unit: "PCS",
                rate: 0,
                discount: 0,
                gstRate: 18
            }
        ],

        notes: ""
    });

    // -----------------------------
    // Customer Change
    // -----------------------------

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;

        setInvoice((prev) => ({
            ...prev,
            customer: {
                ...prev.customer,
                [name]: value
            }
        }));
    };

    // -----------------------------
    // Invoice Change
    // -----------------------------

    const handleInvoiceChange = (e) => {
        const { name, value } = e.target;

        setInvoice((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // -----------------------------
    // Item Change
    // -----------------------------

    const handleItemChange = (index, e) => {
        const { name, value } = e.target;

        const updatedItems = [...invoice.items];

        updatedItems[index] = {
            ...updatedItems[index],
            [name]: value
        };

        setInvoice((prev) => ({
            ...prev,
            items: updatedItems
        }));
    };

    // -----------------------------
    // Add Item
    // -----------------------------

    const addItem = () => {
        setInvoice((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                {
                    itemId: "",
                    itemName: "",
                    hsnCode: "",
                    quantity: 1,
                    unit: "PCS",
                    rate: 0,
                    discount: 0,
                    gstRate: 18
                }
            ]
        }));
    };

    // -----------------------------
    // Remove Item
    // -----------------------------

    const removeItem = (index) => {
        if (invoice.items.length === 1) {
            return;
        }

        setInvoice((prev) => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
    };

    // -----------------------------
    // Calculate Item
    // -----------------------------

    const calculateItem = (item) => {
        const quantity = Number(item.quantity) || 0;
        const rate = Number(item.rate) || 0;
        const discount = Number(item.discount) || 0;

        const grossAmount = quantity * rate;

        const discountAmount =
            (grossAmount * discount) / 100;

        const taxableAmount =
            grossAmount - discountAmount;

        const gstAmount =
            (taxableAmount * Number(item.gstRate)) / 100;

        const totalAmount =
            taxableAmount + gstAmount;

        return {
            grossAmount,
            discountAmount,
            taxableAmount,
            gstAmount,
            totalAmount
        };
    };

    // -----------------------------
    // Calculate Invoice Totals
    // -----------------------------

    const getTotals = () => {
        let subtotal = 0;
        let totalDiscount = 0;
        let taxableAmount = 0;
        let totalGST = 0;

        invoice.items.forEach((item) => {
            const calculated = calculateItem(item);

            subtotal += calculated.grossAmount;
            totalDiscount += calculated.discountAmount;
            taxableAmount += calculated.taxableAmount;
            totalGST += calculated.gstAmount;
        });

        const isSameState =
            invoice.customer.state === "Maharashtra";

        let cgst = 0;
        let sgst = 0;
        let igst = 0;

        if (isSameState) {
            cgst = totalGST / 2;
            sgst = totalGST / 2;
        } else {
            igst = totalGST;
        }

        const grandTotal =
            taxableAmount +
            cgst +
            sgst +
            igst;

        return {
            subtotal,
            totalDiscount,
            taxableAmount,
            cgst,
            sgst,
            igst,
            totalGST,
            grandTotal
        };
    };

    const totals = getTotals();

    // -----------------------------
    // Submit
    // -----------------------------

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalInvoice = {
            ...invoice,
            items: invoice.items.map((item) => ({
                ...item,
                quantity: Number(item.quantity),
                rate: Number(item.rate),
                discount: Number(item.discount),
                gstRate: Number(item.gstRate),
                ...calculateItem(item)
            })),

            ...totals
        };

        console.log("Final Invoice:", finalInvoice);

        alert("Sales invoice created successfully!");
    };

    return (
        <>
            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    {/* Sidebar */}
                    <Aside />


                    {/* Main Content */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                        <div className="container-fluid">

                            {/* ========================= */}
                            {/* Header */}
                            {/* ========================= */}

                            <PageHeader
                                heading={"Add Sales Invoice"}
                                para={"It used to create new sales invoice"}
                                url={"/SalesInvoices"}
                            />

                            <form onSubmit={handleSubmit}>

                                {/* ========================= */}
                                {/* Invoice Information */}
                                {/* ========================= */}

                                <div className="card shadow-sm border-0 mb-4">

                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">
                                            Invoice Information
                                        </h5>
                                    </div>

                                    <div className="card-body">

                                        <div className="row g-3">

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    Invoice Number
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value="INV-2026-0006"
                                                    readOnly
                                                />

                                            </div>

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    Invoice Date
                                                </label>

                                                <input
                                                    type="date"
                                                    name="invoiceDate"
                                                    className="form-control"
                                                    value={invoice.invoiceDate}
                                                    onChange={handleInvoiceChange}
                                                    required
                                                />

                                            </div>

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    Warehouse
                                                </label>

                                                <select className="form-select">

                                                    <option value="">
                                                        Select Warehouse
                                                    </option>

                                                    <option>
                                                        Main Warehouse
                                                    </option>

                                                    <option>
                                                        Finished Goods Warehouse
                                                    </option>

                                                    <option>
                                                        Raw Material Warehouse
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* ========================= */}
                                {/* Customer Information */}
                                {/* ========================= */}

                                <div className="card shadow-sm border-0 mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">
                                            Customer Information
                                        </h5>

                                    </div>

                                    <div className="card-body">

                                        <div className="row g-3">

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    Customer
                                                </label>

                                                <select
                                                    name="customerId"
                                                    className="form-select"
                                                    value={invoice.customer.customerId}
                                                    onChange={handleCustomerChange}
                                                    required
                                                >

                                                    <option value="">
                                                        Select Customer
                                                    </option>

                                                    <option value="CUS-001">
                                                        Shree Industries
                                                    </option>

                                                    <option value="CUS-002">
                                                        Global Rubber Pvt Ltd
                                                    </option>

                                                    <option value="CUS-003">
                                                        Metro Auto Components
                                                    </option>

                                                    <option value="CUS-004">
                                                        Prime Engineering Works
                                                    </option>

                                                </select>

                                            </div>

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    Customer Name
                                                </label>

                                                <input
                                                    type="text"
                                                    name="customerName"
                                                    className="form-control"
                                                    value={invoice.customer.customerName}
                                                    onChange={handleCustomerChange}
                                                    placeholder="Customer name"
                                                />

                                            </div>

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    GSTIN
                                                </label>

                                                <input
                                                    type="text"
                                                    name="gstin"
                                                    className="form-control"
                                                    value={invoice.customer.gstin}
                                                    onChange={handleCustomerChange}
                                                    placeholder="GSTIN"
                                                />

                                            </div>

                                            <div className="col-md-4">

                                                <label className="form-label">
                                                    State
                                                </label>

                                                <select
                                                    name="state"
                                                    className="form-select"
                                                    value={invoice.customer.state}
                                                    onChange={handleCustomerChange}
                                                >

                                                    <option value="">
                                                        Select State
                                                    </option>

                                                    <option value="Maharashtra">
                                                        Maharashtra
                                                    </option>

                                                    <option value="Gujarat">
                                                        Gujarat
                                                    </option>

                                                    <option value="Karnataka">
                                                        Karnataka
                                                    </option>

                                                    <option value="Delhi">
                                                        Delhi
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* ========================= */}
                                {/* Items */}
                                {/* ========================= */}

                                <div className="card shadow-sm border-0 mb-4">

                                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

                                        <h5 className="mb-0">
                                            Invoice Items
                                        </h5>

                                        <button
                                            type="button"
                                            className="btn btn-sm btn-info tex-white"
                                            onClick={addItem}
                                        >
                                            + Add Item
                                        </button>

                                    </div>

                                    <div className="card-body p-0">

                                        <div className="table-responsive">

                                            <table className="table table-bordered align-middle mb-0">

                                                <thead className="table-light">

                                                    <tr>
                                                        <th>#</th>
                                                        <th>Item</th>
                                                        <th>HSN</th>
                                                        <th>Qty</th>
                                                        <th>Unit</th>
                                                        <th>Rate</th>
                                                        <th>Discount %</th>
                                                        <th>GST %</th>
                                                        <th>Taxable</th>
                                                        <th>GST</th>
                                                        <th>Total</th>
                                                        <th></th>
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {invoice.items.map((item, index) => {

                                                        const calculated =
                                                            calculateItem(item);

                                                        return (

                                                            <tr key={index}>

                                                                <td>
                                                                    {index + 1}
                                                                </td>

                                                                <td style={{ minWidth: "200px" }}>

                                                                    <input
                                                                        type="text"
                                                                        name="itemName"
                                                                        className="form-control"
                                                                        value={item.itemName}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                        placeholder="Item name"
                                                                        required
                                                                    />

                                                                </td>

                                                                <td style={{ minWidth: "100px" }}>

                                                                    <input
                                                                        type="text"
                                                                        name="hsnCode"
                                                                        className="form-control"
                                                                        value={item.hsnCode}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                        placeholder="HSN"
                                                                    />

                                                                </td>

                                                                <td style={{ minWidth: "90px" }}>

                                                                    <input
                                                                        type="number"
                                                                        name="quantity"
                                                                        className="form-control"
                                                                        min="1"
                                                                        value={item.quantity}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                    />

                                                                </td>

                                                                <td style={{ minWidth: "100px" }}>

                                                                    <select
                                                                        name="unit"
                                                                        className="form-select"
                                                                        value={item.unit}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                    >

                                                                        <option>PCS</option>
                                                                        <option>KG</option>
                                                                        <option>MTR</option>
                                                                        <option>LTR</option>

                                                                    </select>

                                                                </td>

                                                                <td style={{ minWidth: "110px" }}>

                                                                    <input
                                                                        type="number"
                                                                        name="rate"
                                                                        className="form-control"
                                                                        min="0"
                                                                        value={item.rate}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                    />

                                                                </td>

                                                                <td style={{ minWidth: "110px" }}>

                                                                    <input
                                                                        type="number"
                                                                        name="discount"
                                                                        className="form-control"
                                                                        min="0"
                                                                        max="100"
                                                                        value={item.discount}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                    />

                                                                </td>

                                                                <td style={{ minWidth: "90px" }}>

                                                                    <select
                                                                        name="gstRate"
                                                                        className="form-select"
                                                                        value={item.gstRate}
                                                                        onChange={(e) =>
                                                                            handleItemChange(index, e)
                                                                        }
                                                                    >

                                                                        <option value="0">
                                                                            0%
                                                                        </option>

                                                                        <option value="5">
                                                                            5%
                                                                        </option>

                                                                        <option value="12">
                                                                            12%
                                                                        </option>

                                                                        <option value="18">
                                                                            18%
                                                                        </option>

                                                                        <option value="28">
                                                                            28%
                                                                        </option>

                                                                    </select>

                                                                </td>

                                                                <td>
                                                                    ₹
                                                                    {calculated.taxableAmount.toLocaleString(
                                                                        "en-IN"
                                                                    )}
                                                                </td>

                                                                <td>
                                                                    ₹
                                                                    {calculated.gstAmount.toLocaleString(
                                                                        "en-IN"
                                                                    )}
                                                                </td>

                                                                <td>
                                                                    <strong>
                                                                        ₹
                                                                        {calculated.totalAmount.toLocaleString(
                                                                            "en-IN"
                                                                        )}
                                                                    </strong>
                                                                </td>

                                                                <td>

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-sm btn-outline-danger"
                                                                        onClick={() =>
                                                                            removeItem(index)
                                                                        }
                                                                    >
                                                                        ×
                                                                    </button>

                                                                </td>

                                                            </tr>

                                                        );
                                                    })}

                                                </tbody>

                                            </table>

                                        </div>

                                    </div>

                                </div>

                                {/* ========================= */}
                                {/* Bottom Section */}
                                {/* ========================= */}

                                <div className="row g-4 mb-4">

                                    {/* Notes */}

                                    <div className="col-md-7">

                                        <div className="card shadow-sm border-0">

                                            <div className="card-header bg-primary text-white">

                                                <h5 className="mb-0">
                                                    Additional Information
                                                </h5>

                                            </div>

                                            <div className="card-body">

                                                <label className="form-label">
                                                    Notes
                                                </label>

                                                <textarea
                                                    name="notes"
                                                    className="form-control"
                                                    rows="5"
                                                    value={invoice.notes}
                                                    onChange={handleInvoiceChange}
                                                    placeholder="Enter notes..."
                                                />

                                            </div>

                                        </div>

                                    </div>

                                    {/* Totals */}

                                    <div className="col-md-5">

                                        <div className="card shadow-sm border-0">

                                            <div className="card-header bg-primary text-white">

                                                <h5 className="mb-0">
                                                    Invoice Summary
                                                </h5>

                                            </div>

                                            <div className="card-body p-0">

                                                <table className="table table-bordered mb-0">

                                                    <tbody>

                                                        <tr>

                                                            <td>
                                                                Subtotal
                                                            </td>

                                                            <td className="text-end">
                                                                ₹
                                                                {totals.subtotal.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                        </tr>


                                                        <tr>

                                                            <td>
                                                                Discount
                                                            </td>

                                                            <td className="text-end">
                                                                ₹
                                                                {totals.totalDiscount.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                        </tr>


                                                        <tr>

                                                            <td>
                                                                Taxable Amount
                                                            </td>

                                                            <td className="text-end">
                                                                ₹
                                                                {totals.taxableAmount.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                        </tr>

                                                        <tr>

                                                            <td>
                                                                CGST
                                                            </td>

                                                            <td className="text-end">
                                                                ₹
                                                                {totals.cgst.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                        </tr>


                                                        <tr>

                                                            <td>
                                                                SGST
                                                            </td>

                                                            <td className="text-end">
                                                                ₹
                                                                {totals.sgst.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                        </tr>



                                                        <tr>

                                                            <td>
                                                                IGST
                                                            </td>

                                                            <td className="text-end">
                                                                ₹
                                                                {totals.igst.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}
                                                            </td>

                                                        </tr>


                                                        <tr className="table-light">

                                                            <th>
                                                                Grand Total
                                                            </th>

                                                            <th className="text-end">

                                                                ₹
                                                                {totals.grandTotal.toLocaleString(
                                                                    "en-IN",
                                                                    {
                                                                        minimumFractionDigits: 2,
                                                                    }
                                                                )}

                                                            </th>

                                                        </tr>

                                                    </tbody>

                                                </table>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* ========================= */}
                                {/* Submit Buttons */}
                                {/* ========================= */}

                                <div className="card shadow-sm mb-4">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">

                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                            >
                                                <i class="bi bi-x-circle me-2"></i>
                                                Cancel
                                            </button>

                                            {/* <button
                                        type="button"
                                        className="btn btn-outline-primary"
                                    >
                                        Save as Draft
                                    </button> */}

                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                <i class="bi bi-plus-circle me-2"></i>
                                                Create Invoice
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default SaleInvoiceAdd;