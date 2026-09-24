import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import MainPageHeader from '../components/MainPageHeader';
import salesInvoices from "../data/salesInvoices";
import { Link } from 'react-router-dom';

function SellInvoices() {
    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>

                        <MainPageHeader
                            pageName={"Sale Invoices"}
                            para={"It shows list of sales invoices of an organization."}
                        />

                        <div className='card bg-light shadow-sm p-3'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to="/SalesInvoices/Add" className='btn btn-primary'>Add Sale Invoice</Link>
                                </div>

                                <div className="table-responsive">

                                    <table className="table table-responsive table-bordered table-striped table-hover">

                                        <thead className="table-light">
                                            <tr>
                                                <th>#</th>
                                                <th>Invoice No.</th>
                                                <th>Date</th>
                                                <th>Customer</th>
                                                <th>Items</th>
                                                <th>Taxable Amount</th>
                                                <th>GST</th>
                                                <th>Total</th>
                                                <th>Payment</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {salesInvoices.map((invoice, index) => {

                                                const totalItems = invoice.items.reduce(
                                                    (total, item) => total + item.quantity,
                                                    0
                                                );

                                                const totalGST =
                                                    invoice.cgst +
                                                    invoice.sgst +
                                                    invoice.igst;

                                                return (
                                                    <tr key={invoice.invoiceId}>

                                                        {/* # */}
                                                        <td className='fw-semibold'>
                                                            {index + 1}
                                                        </td>

                                                        {/* Invoice */}
                                                        <td>
                                                            <strong>
                                                                {invoice.invoiceId}
                                                            </strong>
                                                        </td>

                                                        {/* Date */}
                                                        <td>
                                                            {new Date(
                                                                invoice.invoiceDate
                                                            ).toLocaleDateString("en-IN")}
                                                        </td>

                                                        {/* Customer */}
                                                        <td>
                                                            <div>
                                                                <strong>
                                                                    {invoice.customer.customerName}
                                                                </strong>

                                                                <br />

                                                                <small className="text-muted">
                                                                    {invoice.customer.gstin}
                                                                </small>
                                                            </div>
                                                        </td>

                                                        {/* Items */}
                                                        <td>
                                                            {totalItems}
                                                        </td>

                                                        {/* Taxable Amount */}
                                                        <td>
                                                            ₹
                                                            {invoice.taxableAmount.toLocaleString(
                                                                "en-IN"
                                                            )}
                                                        </td>

                                                        {/* GST */}
                                                        <td>
                                                            ₹
                                                            {totalGST.toLocaleString(
                                                                "en-IN"
                                                            )}
                                                        </td>

                                                        {/* Grand Total */}
                                                        <td>
                                                            <strong>
                                                                ₹
                                                                {invoice.grandTotal.toLocaleString(
                                                                    "en-IN"
                                                                )}
                                                            </strong>
                                                        </td>

                                                        {/* Payment Status */}
                                                        <td>

                                                            <span
                                                                className={`badge ${invoice.paymentStatus === "Paid"
                                                                        ? "bg-success"
                                                                        : invoice.paymentStatus === "Pending"
                                                                            ? "bg-warning text-dark"
                                                                            : "bg-info text-dark"
                                                                    }`}
                                                            >
                                                                {invoice.paymentStatus}
                                                            </span>

                                                        </td>

                                                        {/* Invoice Status */}
                                                        <td>

                                                            <span className="badge bg-success">
                                                                {invoice.status}
                                                            </span>

                                                        </td>

                                                        {/* Actions */}
                                                        <td>

                                                            <div className="dropdown">

                                                                <button
                                                                    className="btn btn-sm btn-light"
                                                                    data-bs-toggle="dropdown"
                                                                >
                                                                    ⋮
                                                                </button>

                                                                <ul className="dropdown-menu">

                                                                    <li>
                                                                        <button className="dropdown-item">
                                                                            View
                                                                        </button>
                                                                    </li>

                                                                    <li>
                                                                        <Link className="dropdown-item" to={`/SalesInvoices//Edit/${invoice.invoiceId}`}>
                                                                            Edit
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <button className="dropdown-item">
                                                                            Print
                                                                        </button>
                                                                    </li>

                                                                    <li>
                                                                        <hr className="dropdown-divider" />
                                                                    </li>

                                                                    <li>
                                                                        <button className="dropdown-item text-danger">
                                                                            Delete
                                                                        </button>
                                                                    </li>

                                                                </ul>

                                                            </div>

                                                        </td>

                                                    </tr>
                                                );
                                            })}

                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default SellInvoices;