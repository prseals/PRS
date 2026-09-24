import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import products from "../data/products";
import MainPageHeader from '../components/MainPageHeader';

function Products() {
    const handleDelete = () => {
        alert("Product deleted successfully!")
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader pageName={"Products"} para={"List of all products manufactured or purchased."} />

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <Link to='/Products/Add' className='btn btn-primary shadow'>Add Product</Link>
                                </div>

                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th className='text-center'>#</th>
                                                <th>Code</th>
                                                <th>Name</th>
                                                <th>Unit</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products.map((product) => (
                                                    <tr key={product.id}>
                                                        <td className='text-center fw-bold'>{product.id}</td>
                                                        <td>{product.productCode}</td>
                                                        <td>{product.name}</td>
                                                        <td>{product.unit}</td>
                                                        <td>{product.price.toFixed(2)}</td>
                                                        <td className='text-center'>
                                                            {
                                                                product.status === "In Stock" && (
                                                                    <span className='badge text-bg-success shadow-sm'>{product.status}</span>
                                                                )
                                                            }

                                                            {
                                                                product.status === "Low Stock" && (
                                                                    <span className='badge text-bg-warning shadow-sm'>{product.status}</span>
                                                                )
                                                            }
                                                        </td>
                                                        <td className='text-center'>
                                                            <div class="btn-group btn-group-sm shadow-sm">
                                                                <Link to={`/products/${product.id}`} class="btn btn-outline-primary">
                                                                    <i class="bi bi-eye" aria-hidden="true"> </i>
                                                                </Link>
                                                                <Link to={`/Products/Edit/${product.id}`} class="btn btn-outline-secondary">
                                                                    <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                                </Link>
                                                                <button type="button" class="btn btn-outline-danger" onClick={handleDelete}>
                                                                    <i class="bi bi-trash" aria-hidden="true"> </i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
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

export default Products;