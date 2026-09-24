import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import PageHeader from "../components/PageHeader";
import { useNavigate, useParams } from "react-router-dom";

// Temporary mock data
const salesInvoices = [
    {
        invoiceId: "INV-2026-0001",
        invoiceDate: "2026-09-01",

        customer: {
            customerId: "CUS-001",
            customerName: "Shree Industries",
            gstin: "27ABCDE1234F1Z5",
            state: "Maharashtra",
        },

        warehouse: "Main Warehouse",

        items: [
            {
                itemId: "FG-001",
                itemName: "Industrial Rubber Sheet",
                hsnCode: "4008",
                quantity: 100,
                unit: "KG",
                rate: 280,
                discount: 5,
                gstRate: 18,
            },
            {
                itemId: "FG-002",
                itemName: "Rubber Gasket",
                hsnCode: "4016",
                quantity: 200,
                unit: "PCS",
                rate: 45,
                discount: 0,
                gstRate: 18,
            },
        ],

        notes: "Material supplied as per purchase order.",
    },
];


// Customer Master
const customers = [
    {
        customerId: "CUS-001",
        customerName: "Shree Industries",
        gstin: "27ABCDE1234F1Z5",
        state: "Maharashtra",
    },
    {
        customerId: "CUS-002",
        customerName: "Global Rubber Pvt Ltd",
        gstin: "24AABCG1234K1Z2",
        state: "Gujarat",
    },
    {
        customerId: "CUS-003",
        customerName: "Metro Auto Components",
        gstin: "27AAACM5678P1Z8",
        state: "Maharashtra",
    },
];


// Inventory Master
const inventoryItems = [
    {
        itemId: "FG-001",
        itemName: "Industrial Rubber Sheet",
        hsnCode: "4008",
        unit: "KG",
        sellingPrice: 280,
        gstRate: 18,
    },
    {
        itemId: "FG-002",
        itemName: "Rubber Gasket",
        hsnCode: "4016",
        unit: "PCS",
        sellingPrice: 45,
        gstRate: 18,
    },
    {
        itemId: "FG-003",
        itemName: "Rubber O-Ring",
        hsnCode: "4016",
        unit: "PCS",
        sellingPrice: 12,
        gstRate: 18,
    },
];


function SaleInvoiceEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find invoice
    const existingInvoice = salesInvoices.find(
        (invoice) => invoice.invoiceId === id
    );

    // If invoice doesn't exist
    if (!existingInvoice) {
        return (
            <>
                <Navbar />

                <div className="container-fluid">
                    <div className="row">
                        <Aside />

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                            <div className="alert alert-danger">
                                Invoice not found.
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    }


    const [invoice, setInvoice] = useState(existingInvoice);


    // --------------------------------
    // Customer Change
    // --------------------------------

    const handleCustomerChange = (e) => {
        const customerId = e.target.value;

        const selectedCustomer = customers.find(
            (customer) => customer.customerId === customerId
        );

        setInvoice((prev) => ({
            ...prev,

            customer: selectedCustomer || {
                customerId: "",
                customerName: "",
                gstin: "",
                state: "",
            },
        }));
    };


    // --------------------------------
    // Invoice Field Change
    // --------------------------------

    const handleInvoiceChange = (e) => {
        const { name, value } = e.target;

        setInvoice((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // --------------------------------
    // Item Change
    // --------------------------------

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...invoice.items];

        updatedItems[index] = {
            ...updatedItems[index],
            [field]: value,
        };

        setInvoice((prev) => ({
            ...prev,
            items: updatedItems,
        }));
    };


    // --------------------------------
    // Select Inventory Item
    // --------------------------------

    const handleItemSelect = (index, itemId) => {
        const selectedItem = inventoryItems.find(
            (item) => item.itemId === itemId
        );

        if (!selectedItem) {
            return;
        }

        const updatedItems = [...invoice.items];

        updatedItems[index] = {
            ...updatedItems[index],

            itemId: selectedItem.itemId,
            itemName: selectedItem.itemName,
            hsnCode: selectedItem.hsnCode,
            unit: selectedItem.unit,
            rate: selectedItem.sellingPrice,
            gstRate: selectedItem.gstRate,
        };

        setInvoice((prev) => ({
            ...prev,
            items: updatedItems,
        }));
    };


    // --------------------------------
    // Add Item
    // --------------------------------

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
                    gstRate: 18,
                },
            ],
        }));
    };


    // --------------------------------
    // Remove Item
    // --------------------------------

    const removeItem = (index) => {
        if (invoice.items.length === 1) {
            return;
        }

        const updatedItems = invoice.items.filter(
            (_, itemIndex) => itemIndex !== index
        );

        setInvoice((prev) => ({
            ...prev,
            items: updatedItems,
        }));
    };


    // --------------------------------
    // Calculate Item
    // --------------------------------

    const calculateItem = (item) => {
        const quantity = Number(item.quantity) || 0;
        const rate = Number(item.rate) || 0;
        const discount = Number(item.discount) || 0;
        const gstRate = Number(item.gstRate) || 0;

        const grossAmount = quantity * rate;

        const discountAmount =
            grossAmount * (discount / 100);

        const taxableAmount =
            grossAmount - discountAmount;

        const gstAmount =
            taxableAmount * (gstRate / 100);

        const totalAmount =
            taxableAmount + gstAmount;

        return {
            grossAmount,
            discountAmount,
            taxableAmount,
            gstAmount,
            totalAmount,
        };
    };


    // --------------------------------
    // Calculate Invoice Totals
    // --------------------------------

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


        // Company state
        const companyState = "Maharashtra";

        const customerState = invoice.customer.state;

        const isSameState =
            customerState === companyState;


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
            grandTotal,
        };
    };


    const totals = getTotals();


    // --------------------------------
    // Submit / Update Invoice
    // --------------------------------

    const handleSubmit = (e) => {
        e.preventDefault();


        const finalInvoice = {
            ...invoice,

            items: invoice.items.map((item) => {
                const calculated = calculateItem(item);

                return {
                    ...item,

                    quantity: Number(item.quantity),
                    rate: Number(item.rate),
                    discount: Number(item.discount),
                    gstRate: Number(item.gstRate),

                    grossAmount: calculated.grossAmount,
                    discountAmount: calculated.discountAmount,
                    taxableAmount: calculated.taxableAmount,
                    gstAmount: calculated.gstAmount,
                    totalAmount: calculated.totalAmount,
                };
            }),

            subtotal: totals.subtotal,
            discount: totals.totalDiscount,
            taxableAmount: totals.taxableAmount,

            cgst: totals.cgst,
            sgst: totals.sgst,
            igst: totals.igst,

            grandTotal: totals.grandTotal,

            updatedAt: new Date().toISOString(),
        };


        console.log("Updated Invoice:", finalInvoice);

        alert("Invoice updated successfully!");

        navigate("/SalesInvoices");
    };


    return (
        <>
            <Navbar />

            <div className="container-fluid">
                <div className="row">

                    <Aside />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">

                        <div className="container-fluid p-4">

                            {/* Page Header */}

                            <PageHeader
                                heading="Update Sales Invoice"
                                para="Update existing sales invoice"
                                url="/SalesInvoices"
                            />


                            <form onSubmit={handleSubmit}>

                                {/* ============================== */}
                                {/* Invoice Information */}
                                {/* ============================== */}

                                <div className="card mb-4">

                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">
                                            Invoice Information
                                        </h5>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">

                                            {/* Invoice Number */}

                                            <div className="col-md-4 mb-3">

                                                <label className="form-label">
                                                    Invoice Number
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={invoice.invoiceId}
                                                    readOnly
                                                />

                                            </div>


                                            {/* Invoice Date */}

                                            <div className="col-md-4 mb-3">

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


                                            {/* Warehouse */}

                                            <div className="col-md-4 mb-3">

                                                <label className="form-label">
                                                    Warehouse
                                                </label>

                                                <select
                                                    name="warehouse"
                                                    className="form-select"
                                                    value={invoice.warehouse}
                                                    onChange={handleInvoiceChange}
                                                >

                                                    <option value="Main Warehouse">
                                                        Main Warehouse
                                                    </option>

                                                    <option value="Finished Goods Warehouse">
                                                        Finished Goods Warehouse
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ============================== */}
                                {/* Customer Information */}
                                {/* ============================== */}

                                <div className="card mb-4">

                                    <div className="card-header bg-primary text-white">
                                        <h5 className="mb-0">
                                            Customer Information
                                        </h5>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">

                                            {/* Customer */}

                                            <div className="col-md-6 mb-3">

                                                <label className="form-label">
                                                    Customer
                                                </label>

                                                <select
                                                    className="form-select"
                                                    value={invoice.customer.customerId}
                                                    onChange={handleCustomerChange}
                                                    required
                                                >

                                                    <option value="">
                                                        Select Customer
                                                    </option>

                                                    {customers.map((customer) => (

                                                        <option
                                                            key={customer.customerId}
                                                            value={customer.customerId}
                                                        >
                                                            {customer.customerName}
                                                        </option>

                                                    ))}

                                                </select>

                                            </div>


                                            {/* Customer Name */}

                                            <div className="col-md-6 mb-3">

                                                <label className="form-label">
                                                    Customer Name
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={invoice.customer.customerName}
                                                    readOnly
                                                />

                                            </div>


                                            {/* GSTIN */}

                                            <div className="col-md-6 mb-3">

                                                <label className="form-label">
                                                    GSTIN
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={invoice.customer.gstin}
                                                    readOnly
                                                />

                                            </div>


                                            {/* State */}

                                            <div className="col-md-6 mb-3">

                                                <label className="form-label">
                                                    State
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={invoice.customer.state}
                                                    readOnly
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ============================== */}
                                {/* Invoice Items */}
                                {/* ============================== */}

                                <div className="card mb-4">

                                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

                                        <h5 className="mb-0">
                                            Invoice Items
                                        </h5>

                                        <button
                                            type="button"
                                            className="btn btn-info btn-sm"
                                            onClick={addItem}
                                        >
                                            + Add Item
                                        </button>

                                    </div>


                                    <div className="card-body">

                                        <div className="table-responsive">

                                            <table className="table table-bordered align-middle">

                                                <thead>

                                                    <tr>

                                                        <th style={{ minWidth: "180px" }}>
                                                            Item
                                                        </th>

                                                        <th>HSN</th>

                                                        <th>Qty</th>

                                                        <th>Unit</th>

                                                        <th>Rate</th>

                                                        <th>Discount %</th>

                                                        <th>GST %</th>

                                                        <th>Taxable</th>

                                                        <th>GST</th>

                                                        <th>Total</th>

                                                        <th>Action</th>

                                                    </tr>

                                                </thead>


                                                <tbody>

                                                    {invoice.items.map((item, index) => {

                                                        const calculated =
                                                            calculateItem(item);

                                                        return (

                                                            <tr key={index}>

                                                                {/* Item */}

                                                                <td>

                                                                    <select
                                                                        className="form-select"
                                                                        value={item.itemId}
                                                                        onChange={(e) =>
                                                                            handleItemSelect(
                                                                                index,
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                        required
                                                                    >

                                                                        <option value="">
                                                                            Select Item
                                                                        </option>

                                                                        {inventoryItems.map(
                                                                            (inventoryItem) => (

                                                                                <option
                                                                                    key={
                                                                                        inventoryItem.itemId
                                                                                    }
                                                                                    value={
                                                                                        inventoryItem.itemId
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        inventoryItem.itemName
                                                                                    }
                                                                                </option>

                                                                            )
                                                                        )}

                                                                    </select>

                                                                </td>


                                                                {/* HSN */}

                                                                <td>

                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={item.hsnCode}
                                                                        readOnly
                                                                    />

                                                                </td>


                                                                {/* Quantity */}

                                                                <td>

                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        min="1"
                                                                        value={item.quantity}
                                                                        onChange={(e) =>
                                                                            handleItemChange(
                                                                                index,
                                                                                "quantity",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                        required
                                                                    />

                                                                </td>


                                                                {/* Unit */}

                                                                <td>

                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={item.unit}
                                                                        readOnly
                                                                    />

                                                                </td>


                                                                {/* Rate */}

                                                                <td>

                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        min="0"
                                                                        value={item.rate}
                                                                        onChange={(e) =>
                                                                            handleItemChange(
                                                                                index,
                                                                                "rate",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />

                                                                </td>


                                                                {/* Discount */}

                                                                <td>

                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        min="0"
                                                                        max="100"
                                                                        value={item.discount}
                                                                        onChange={(e) =>
                                                                            handleItemChange(
                                                                                index,
                                                                                "discount",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />

                                                                </td>


                                                                {/* GST */}

                                                                <td>

                                                                    <select
                                                                        className="form-select"
                                                                        value={item.gstRate}
                                                                        onChange={(e) =>
                                                                            handleItemChange(
                                                                                index,
                                                                                "gstRate",
                                                                                e.target.value
                                                                            )
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


                                                                {/* Taxable */}

                                                                <td>

                                                                    ₹
                                                                    {calculated.taxableAmount.toLocaleString(
                                                                        "en-IN",
                                                                        {
                                                                            minimumFractionDigits: 2,
                                                                        }
                                                                    )}

                                                                </td>


                                                                {/* GST */}

                                                                <td>

                                                                    ₹
                                                                    {calculated.gstAmount.toLocaleString(
                                                                        "en-IN",
                                                                        {
                                                                            minimumFractionDigits: 2,
                                                                        }
                                                                    )}

                                                                </td>


                                                                {/* Total */}

                                                                <td>

                                                                    ₹
                                                                    {calculated.totalAmount.toLocaleString(
                                                                        "en-IN",
                                                                        {
                                                                            minimumFractionDigits: 2,
                                                                        }
                                                                    )}

                                                                </td>


                                                                {/* Delete */}

                                                                <td>

                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-danger btn-sm"
                                                                        onClick={() =>
                                                                            removeItem(index)
                                                                        }
                                                                        disabled={
                                                                            invoice.items.length === 1
                                                                        }
                                                                    >
                                                                        Delete
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





                                {/* ============================== */}
                                {/* Invoice Summary */}
                                {/* ============================== */}

                                <div className="row g-4">

                                    {/* Notes */}

                                    <div className="col-md-7">
                                        {/* ============================== */}
                                        {/* Notes */}
                                        {/* ============================== */}

                                        <div className="card mb-4">

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
                                                    rows="3"
                                                    value={invoice.notes}
                                                    onChange={handleInvoiceChange}
                                                />

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card mb-4">

                                            <div className="card-header bg-primary text-white">

                                                <h5 className="mb-0">
                                                    Invoice Summary
                                                </h5>

                                            </div>


                                            <div className="card-body p-0">

                                                <div className="d-flex justify-content-between">

                                                    <table className="table">

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


                                                            {totals.cgst > 0 && (

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

                                                            )}


                                                            {totals.sgst > 0 && (

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

                                                            )}


                                                            {totals.igst > 0 && (

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

                                                            )}


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
                                </div>


                                {/* ============================== */}
                                {/* Buttons */}
                                {/* ============================== */}

                                <div className="card shadow-sm mb-4">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">

                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() =>
                                                    navigate("/SalesInvoices")
                                                }
                                            >
                                                <i class="bi bi-x-circle me-2"></i>
                                                Cancel
                                            </button>


                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                <i className="bi bi-pencil me-2"></i>
                                                Update Invoice
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

export default SaleInvoiceEdit;