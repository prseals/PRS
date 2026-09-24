import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";
import PageHeader from "../components/PageHeader";

function ProductAdd() {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        productCode: "",
        hsnCode: "",
        name: "",
        category: "",
        material: "",
        hardness: "",
        size: "",
        color: "",
        unit: "",
        price: "",
        gstRate: "18",
        stock: "",
        minStock: "",
        status: "In Stock"
    });


    // Handle all normal fields
    function handleChange(e) {

        const { name, value } = e.target;

        setProduct({
            ...product,
            [name]: value
        });
    }


    // Submit
    function handleSubmit(e) {

        e.preventDefault();

        const newId =
            products.length > 0
                ? Math.max(...products.map(product => product.id)) + 1
                : 1;


        const newProduct = {
            id: newId,
            ...product,

            price: Number(product.price),
            stock: Number(product.stock),
            minStock: Number(product.minStock)
        };


        products.push(newProduct);

        console.log("New Product:", newProduct);
        console.log("All Products:", products);

        alert("Product added successfully!");

        navigate("/Products");
    }


    // Reset
    function handleReset() {

        setProduct({
            productCode: "",
            hsnCode: "",
            name: "",
            category: "",
            material: "",
            hardness: "",
            size: "",
            color: "",
            unit: "",
            price: "",
            stock: "",
            minStock: "",
            status: "In Stock"
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
                            heading={"Add Product"}
                            para={"Add a new product to your inventory"}
                            url={"/Products"}
                        />

                        <form onSubmit={handleSubmit}>


                            {/* ================================= */}
                            {/* BASIC INFORMATION */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-box-seam me-2"></i>

                                        Basic Information

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* Product Code */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Product Code
                                            </label>

                                            <input
                                                type="text"
                                                name="productCode"
                                                className="form-control"
                                                value={product.productCode}
                                                onChange={handleChange}
                                                placeholder="RUB-SSL-016"
                                                required
                                            />

                                        </div>


                                        {/* HSN Code */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                HSN Code
                                            </label>

                                            <input
                                                type="text"
                                                name="hsnCode"
                                                className="form-control"
                                                value={product.hsnCode}
                                                onChange={handleChange}
                                                placeholder="40169330"
                                                required
                                            />

                                        </div>


                                        {/* Product Name */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Product Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={product.name}
                                                onChange={handleChange}
                                                placeholder="Rubber Seal Strip"
                                                required
                                            />

                                        </div>


                                        {/* Category */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Category
                                            </label>

                                            <select
                                                name="category"
                                                className="form-select"
                                                value={product.category}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Category
                                                </option>

                                                <option value="Seals">
                                                    Seals
                                                </option>

                                                <option value="Rubber">
                                                    Rubber
                                                </option>

                                                <option value="Gaskets">
                                                    Gaskets
                                                </option>

                                                <option value="O-Rings">
                                                    O-Rings
                                                </option>

                                                <option value="Hoses">
                                                    Hoses
                                                </option>
                                                <option value="Sheets">
                                                    Sheets
                                                </option>

                                                <option value="Tubes">
                                                    Tubes
                                                </option>

                                                <option value="Belts">
                                                    Belts
                                                </option>

                                                <option value="Conveyor Belts">
                                                    Conveyor Belts
                                                </option>

                                                <option value="Mounts">
                                                    Mounts
                                                </option>

                                                <option value="Diaphragms">
                                                    Diaphragms
                                                </option>

                                                <option value="Bushes">
                                                    Bushes
                                                </option>

                                                <option value="Plugs">
                                                    Plugs
                                                </option>

                                                <option value="Rubber Cord">
                                                    Rubber Cord
                                                </option>

                                                <option value="Bellow">
                                                    Bellow
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>
                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* PRODUCT SPECIFICATIONS */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-gear me-2"></i>

                                        Product Specifications

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* Material */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Material
                                            </label>

                                            <select
                                                name="material"
                                                className="form-select"
                                                value={product.material}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Material
                                                </option>

                                                <option value="EPDM Rubber">
                                                    EPDM Rubber
                                                </option>

                                                <option value="Natural Rubber">
                                                    Natural Rubber
                                                </option>

                                                <option value="Synthetic Rubber">
                                                    Synthetic Rubber
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

                                            </select>

                                        </div>


                                        {/* Hardness */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Hardness
                                            </label>

                                            <input
                                                type="text"
                                                name="hardness"
                                                className="form-control"
                                                value={product.hardness}
                                                onChange={handleChange}
                                                placeholder="55 Shore A"
                                            />

                                        </div>


                                        {/* Size */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Size
                                            </label>

                                            <input
                                                type="text"
                                                name="size"
                                                className="form-control"
                                                value={product.size}
                                                onChange={handleChange}
                                                placeholder="20 mm x 10 mm"
                                                required
                                            />

                                        </div>


                                        {/* Color */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Color
                                            </label>

                                            <select
                                                name="color"
                                                className="form-select"
                                                value={product.color}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Color
                                                </option>

                                                <option value="Black">
                                                    Black
                                                </option>

                                                <option value="White">
                                                    White
                                                </option>

                                                <option value="Red">
                                                    Red
                                                </option>

                                                <option value="Blue">
                                                    Blue
                                                </option>

                                                <option value="Green">
                                                    Green
                                                </option>

                                                <option value="Brown">
                                                    Brown
                                                </option>

                                                <option value="Other">
                                                    Other
                                                </option>

                                            </select>

                                        </div>


                                        {/* Unit */}
                                        <div className="col-md-6 mb-3">

                                            <label className="form-label">
                                                Unit
                                            </label>

                                            <select
                                                name="unit"
                                                className="form-select"
                                                value={product.unit}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Unit
                                                </option>

                                                <option value="Piece">
                                                    Piece
                                                </option>

                                                <option value="Meter">
                                                    Meter
                                                </option>

                                                <option value="Kg">
                                                    Kg
                                                </option>

                                                <option value="Set">
                                                    Set
                                                </option>

                                                <option value="Box">
                                                    Box
                                                </option>

                                            </select>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* ================================= */}
                            {/* PRICE & INVENTORY */}
                            {/* ================================= */}

                            <div className="card shadow-sm mb-4">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        <i className="bi bi-boxes me-2"></i>

                                        Price & Inventory

                                    </h5>

                                </div>


                                <div className="card-body">

                                    <div className="row">


                                        {/* Price */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Price
                                            </label>

                                            <div className="input-group">

                                                <span className="input-group-text">
                                                    ₹
                                                </span>

                                                <input
                                                    type="number"
                                                    name="price"
                                                    className="form-control"
                                                    value={product.price}
                                                    onChange={handleChange}
                                                    placeholder="65"
                                                    min="0"
                                                    required
                                                />

                                            </div>

                                        </div>

                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                GST Rate
                                            </label>

                                            <select
                                                name="gstRate"
                                                className="form-select"
                                                value={product.gstRate}
                                                onChange={handleChange}
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

                                        </div>


                                        {/* Stock */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Current Stock
                                            </label>

                                            <input
                                                type="number"
                                                name="stock"
                                                className="form-control"
                                                value={product.stock}
                                                onChange={handleChange}
                                                placeholder="900"
                                                min="0"
                                                required
                                            />

                                        </div>


                                        {/* Minimum Stock */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Minimum Stock
                                            </label>

                                            <input
                                                type="number"
                                                name="minStock"
                                                className="form-control"
                                                value={product.minStock}
                                                onChange={handleChange}
                                                placeholder="200"
                                                min="0"
                                                required
                                            />

                                        </div>


                                        {/* Status */}
                                        <div className="col-md-4 mb-3">

                                            <label className="form-label">
                                                Status
                                            </label>

                                            <select
                                                name="status"
                                                className="form-select"
                                                value={product.status}
                                                onChange={handleChange}
                                            >

                                                <option value="In Stock">
                                                    In Stock
                                                </option>

                                                <option value="Low Stock">
                                                    Low Stock
                                                </option>

                                                <option value="Out of Stock">
                                                    Out of Stock
                                                </option>

                                            </select>

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
                                            to="/Products"
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
                                                Add Product
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

export default ProductAdd;



























// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Aside from '../components/Aside'
// import { Link, useNavigate } from 'react-router-dom'
// import products from "../data/products";

// function ProductAdd() {
//     const navigate = useNavigate();

//     const [product, setProduct] = useState({
//         id: 16,
//         productCode: "",        // RUB-ORG-016
//         hsnCode: "",            // 40169320
//         name: "",               // Rubber O-Ring
//         category: "",           // O-Ring
//         material: "",           // Nitrile Rubber (NBR)
//         hardness: "",           // 70 Shore A
//         size: "",               // 50 mm
//         color: "",              // Black
//         unit: "",               // Piece
//         price: 0,               // 18.5
//         stock: 0,               // 9000
//         minStock: 0,            // 2000
//         status: "",             // In Stock
//     });

//     function handleChange(e) {
//         const { name, value } = e.target;

//         setProduct({
//             ...product,
//             [name]: value,
//         });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         console.log("Product Added:", product);

//         // products.push(product);

//         alert("Product added successfully!");

//         navigate("/Products");
//     }

//     return (
//         <div>
//             <Navbar />

//             <div className='container-fluid'>
//                 <div className='row'>
//                     <Aside />

//                     <main className='col-md-9 col-lg-10 p-4'>
//                         <div className='d-flex justify-content-between align-items-center px-3'>
//                             <h2 className='display-6 mb-3'>Add Product</h2>

//                             <p>
//                                 <Link to='/Dashboard' className='text-decoration-none'>Home</Link> / <Link to='/Products' className='text-decoration-none'>Products</Link> / <span className='text-secondary'>Add Product</span>
//                             </p>
//                         </div>

//                         <div className='card p-3 shadow-sm bg-light'>
//                             <div className='card-body'>
//                                 {/* <div className='d-flex justify-content-end mb-3'>
//                                     <Link to="/Products" className='btn btn-secondary'>Cancel</Link>
//                                 </div> */}

//                                 <form onSubmit={handleSubmit}>
//                                     <div className="row">
//                                         {/* Product Code */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Product Code
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="productCode"
//                                                 value={product.productCode}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter product code"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* HSN Code */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 HSN Code
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="hsnCode"
//                                                 value={product.hsnCode}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter HSN code"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* Product Name */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Product Name
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="name"
//                                                 value={product.name}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter product name"
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
//                                                 value={product.category}
//                                                 onChange={handleChange}
//                                                 required
//                                             >
//                                                 <option value="">Select Category</option>
//                                                 <option value="Seals">Seals</option>
//                                                 <option value="Gaskets">Gaskets</option>
//                                                 <option value="O-Rings">O-Rings</option>
//                                                 <option value="Rubber Sheets">
//                                                     Rubber Sheets
//                                                 </option>
//                                                 <option value="Rubber Profiles">
//                                                     Rubber Profiles
//                                                 </option>
//                                             </select>
//                                         </div>

//                                         {/* Material */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Material
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="material"
//                                                 value={product.material}
//                                                 onChange={handleChange}
//                                                 required
//                                             >
//                                                 <option value="">Select Material</option>
//                                                 <option value="EPDM Rubber">EPDM Rubber</option>
//                                                 <option value="Nitrile Rubber">Nitrile Rubber</option>
//                                                 <option value="Silicone Rubber">
//                                                     Silicone Rubber
//                                                 </option>
//                                                 <option value="Neoprene Rubber">
//                                                     Neoprene Rubber
//                                                 </option>
//                                                 <option value="Natural Rubber">
//                                                     Natural Rubber
//                                                 </option>
//                                             </select>
//                                         </div>

//                                         {/* Hardness */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Hardness
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="hardness"
//                                                 value={product.hardness}
//                                                 onChange={handleChange}
//                                                 placeholder="Example: 55 Shore A"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* Size */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Size
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="size"
//                                                 value={product.size}
//                                                 onChange={handleChange}
//                                                 placeholder="Example: 20 mm x 10 mm"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* Color */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Color
//                                             </label>

//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 name="color"
//                                                 value={product.color}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter color"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* Unit */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Unit
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="unit"
//                                                 value={product.unit}
//                                                 onChange={handleChange}
//                                                 required
//                                             >
//                                                 <option value="">Select Unit</option>
//                                                 <option value="Meter">Meter</option>
//                                                 <option value="Piece">Piece</option>
//                                                 <option value="Kg">Kg</option>
//                                                 <option value="Set">Set</option>
//                                                 <option value="Roll">Roll</option>
//                                             </select>
//                                         </div>

//                                         {/* Price */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Price
//                                             </label>

//                                             <div className="input-group">
//                                                 <span className="input-group-text">₹</span>

//                                                 <input
//                                                     type="number"
//                                                     className="form-control"
//                                                     name="price"
//                                                     value={product.price}
//                                                     onChange={handleChange}
//                                                     placeholder="Enter price"
//                                                     min="0"
//                                                     required
//                                                 />
//                                             </div>
//                                         </div>

//                                         {/* Stock */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Stock
//                                             </label>

//                                             <input
//                                                 type="number"
//                                                 className="form-control"
//                                                 name="stock"
//                                                 value={product.stock}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter stock quantity"
//                                                 min="0"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* Minimum Stock */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Minimum Stock
//                                             </label>

//                                             <input
//                                                 type="number"
//                                                 className="form-control"
//                                                 name="minStock"
//                                                 value={product.minStock}
//                                                 onChange={handleChange}
//                                                 placeholder="Enter minimum stock"
//                                                 min="0"
//                                                 required
//                                             />
//                                         </div>

//                                         {/* Status */}
//                                         <div className="col-md-6 mb-3">
//                                             <label className="form-label">
//                                                 Status
//                                             </label>

//                                             <select
//                                                 className="form-select"
//                                                 name="status"
//                                                 value={product.status}
//                                                 onChange={handleChange}
//                                                 required
//                                             >
//                                                 <option value="In Stock">In Stock</option>
//                                                 <option value="Low Stock">Low Stock</option>
//                                                 <option value="Out of Stock">
//                                                     Out of Stock
//                                                 </option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     {/* Buttons */}
//                                     <div className="d-flex gap-2 mt-3 justify-content-end">
//                                         <Link
//                                             to="/Products"
//                                             className="btn btn-secondary"
//                                         >
//                                             Cancel
//                                         </Link>
//                                         <button
//                                             type="reset"
//                                             className="btn btn-warning"
//                                         >
//                                             Reset
//                                         </button>
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary"
//                                         >
//                                             Add Product
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductAdd;
