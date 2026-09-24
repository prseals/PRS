import React from "react";
import { Link, useParams } from "react-router-dom";

import products from "../data/products";

import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ItemNotFound from "../components/ItemNotFound";


function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        product => product.id === Number(id)
    );

    // const product = {};


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
                            heading="Product Details"
                            para="It shows detailed info of product."
                            url="/Products"
                        />


                        {/* ========================================= */}
                        {/* PRODUCT NOT FOUND */}
                        {/* ========================================= */}

                        {!("id" in product) ? (

                            <ItemNotFound 
                                name="Product"
                                url="/Products"
                            />

                        ) : (

                            <>
                                {/* ========================================= */}
                                {/* PRODUCT OVERVIEW */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <h5 className="mb-0">

                                                <i className="bi bi-box-seam me-2"></i>

                                                Product Overview

                                            </h5>


                                            <span className="badge bg-light text-dark">

                                                ID: {product.id}

                                            </span>

                                        </div>

                                    </div>


                                    <div className="card-body">

                                        <div className="row">


                                            {/* Product Name */}

                                            <div className="col-md-8">

                                                <h3 className="fw-bold mb-3">

                                                    {product.name}

                                                </h3>


                                                <p className="text-muted mb-0">

                                                    Product Code:{" "}

                                                    <strong>
                                                        {product.productCode}
                                                    </strong>

                                                </p>

                                            </div>


                                            {/* Status */}

                                            <div className="col-md-4 text-md-end mt-3 mt-md-0">

                                                <span className="text-muted d-block mb-2">
                                                    Status
                                                </span>


                                                {product.status === "In Stock" && (

                                                    <span className="badge text-bg-success fs-6">
                                                        <i className="bi bi-check-circle me-1"></i>
                                                        {product.status}
                                                    </span>

                                                )}


                                                {product.status === "Low Stock" && (

                                                    <span className="badge text-bg-warning fs-6">
                                                        <i className="bi bi-exclamation-triangle me-1"></i>
                                                        {product.status}
                                                    </span>

                                                )}


                                                {product.status === "Out of Stock" && (

                                                    <span className="badge text-bg-danger fs-6">
                                                        <i className="bi bi-x-circle me-1"></i>
                                                        {product.status}
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


                                            {/* Product Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Product Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {product.productCode}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* HSN Code */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        HSN Code
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {product.hsnCode}
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
                                                        {product.category}
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
                                                        {product.name}
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
                                                        {product.material}
                                                    </div>

                                                </div>

                                            </div>


                                            {/* Color */}

                                            <div className="col-md-6 col-lg-4">

                                                <div className="border rounded p-3 h-100">

                                                    <small className="text-muted">
                                                        Color
                                                    </small>

                                                    <div className="fw-semibold mt-1">
                                                        {product.color}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* PRODUCT SPECIFICATIONS */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-sliders me-2"></i>

                                            Product Specifications

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Hardness */}

                                            <div className="col-md-4">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Hardness
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        {product.hardness}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Size */}

                                            <div className="col-md-4">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Size
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        {product.size}
                                                    </h5>

                                                </div>

                                            </div>


                                            {/* Unit */}

                                            <div className="col-md-4">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Unit
                                                    </small>

                                                    <h5 className="mb-0 mt-1">
                                                        {product.unit}
                                                    </h5>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* ========================================= */}
                                {/* PRICE & INVENTORY */}
                                {/* ========================================= */}

                                <div className="card shadow-sm mb-4">

                                    <div className="card-header bg-primary text-white">

                                        <h5 className="mb-0">

                                            <i className="bi bi-boxes me-2"></i>

                                            Price & Inventory

                                        </h5>

                                    </div>


                                    <div className="card-body">

                                        <div className="row g-3">


                                            {/* Price */}

                                            <div className="col-md-3">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Price
                                                    </small>

                                                    <h4 className="mb-0 mt-1">
                                                        ₹{product.price}
                                                    </h4>

                                                </div>

                                            </div>

                                            <div className="col-md-3">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        GST Rate
                                                    </small>

                                                    <h4 className="mb-0 mt-1">
                                                        {product.gstRate}
                                                    </h4>

                                                </div>

                                            </div>


                                            {/* Current Stock */}

                                            <div className="col-md-3">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Current Stock
                                                    </small>

                                                    <h4 className="mb-0 mt-1">
                                                        {product.stock}
                                                    </h4>

                                                </div>

                                            </div>


                                            {/* Minimum Stock */}

                                            <div className="col-md-3">

                                                <div className="border rounded p-3">

                                                    <small className="text-muted">
                                                        Minimum Stock
                                                    </small>

                                                    <h4 className="mb-0 mt-1">
                                                        {product.minStock}
                                                    </h4>

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
                                                to="/Products"
                                                className="btn btn-secondary"
                                            >

                                                <i className="bi bi-arrow-left me-2"></i>

                                                Back to Products

                                            </Link>


                                            <Link
                                                to={`/Products/Edit/${product.id}`}
                                                className="btn btn-primary"
                                            >

                                                <i className="bi bi-pencil me-2"></i>

                                                Edit Product

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


export default ProductDetails;