import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link, useNavigate, useParams } from 'react-router-dom'
import products from "../data/products"
import PageHeader from '../components/PageHeader'

function ProductEdit() {
    const navigate = useNavigate();

    const { id } = useParams();

    const productToEdit = products.find(product => product.id === Number(id));

    const [product, setProduct] = useState(productToEdit);

    function handleChange(e) {
        const { name, value } = e.target;

        setProduct({
            ...product,
            [name]: value,
        });
    }

    function handleEditProduct(e) {
        e.preventDefault();

        console.log("Product Update:", product);

        // products.push(product);

        alert("Product Updated successfully!");

        navigate("/Products");
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>

                        <PageHeader
                            heading={"Update Product"}
                            para={"This update the product's details"}
                            url={"/Products"}
                        />

                        <form onSubmit={handleEditProduct}>
                            <div className='card shadow-sm mb-4'>
                                <div className='card-header bg-primary text-white'>
                                    <h5 className='mb-0'>
                                        <i className="bi bi-box-seam me-2"></i>
                                        Basic Information
                                    </h5>
                                </div>

                                <div className='card-body'>
                                    <div className="row">
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

                            <div className='card shadow-sm mb-4'>
                                <div className='card-header bg-primary text-white'>
                                    <h5 className='mb-0'>
                                        <i className="bi bi-gear me-2"></i>
                                        Product Specification
                                    </h5>
                                </div>
                                <div className='card-body'>
                                    <div className="row">
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

                            <div className='card shadow-sm mb-4'>
                                <div className='card-header bg-primary text-white'>
                                    <h5 className='mb-0'>
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

                            <div className="card shadow-sm mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <Link
                                            to="/Products"
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
                                            Update Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit;