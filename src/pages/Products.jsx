import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'

export default function Products() {
    const products = [
        {
            id: 1,
            productCode: "RUB-ORG-001",
            hsnCode: "40169320",
            name: "Rubber O-Ring",
            category: "Seals",
            material: "Nitrile Rubber (NBR)",
            hardness: "70 Shore A",
            size: "50 mm",
            color: "Black",
            unit: "Piece",
            price: 12.5,
            stock: 5000,
            minStock: 1000,
            status: "In Stock"
        },

        {
            id: 2,
            productCode: "RUB-GSK-002",
            hsnCode: "40169340",
            name: "Rubber Gasket",
            category: "Gaskets",
            material: "EPDM Rubber",
            hardness: "60 Shore A",
            size: "100 mm",
            color: "Black",
            unit: "Piece",
            price: 45,
            stock: 2500,
            minStock: 500,
            status: "In Stock"
        },

        {
            id: 3,
            productCode: "RUB-SHT-003",
            hsnCode: "40169990",
            name: "Rubber Sheet",
            category: "Sheets",
            material: "Natural Rubber",
            hardness: "50 Shore A",
            size: "2m x 1m",
            color: "Black",
            unit: "Sheet",
            price: 850,
            stock: 120,
            minStock: 50,
            status: "In Stock"
        },

        {
            id: 4,
            productCode: "RUB-TUB-004",
            hsnCode: "40091100",
            name: "Silicone Rubber Tube",
            category: "Tubes",
            material: "Silicone Rubber",
            hardness: "60 Shore A",
            size: "10 mm",
            color: "White",
            unit: "Meter",
            price: 95,
            stock: 850,
            minStock: 200,
            status: "In Stock"
        },

        {
            id: 5,
            productCode: "RUB-VBL-005",
            hsnCode: "40103900",
            name: "Rubber V-Belt",
            category: "Belts",
            material: "Neoprene Rubber",
            hardness: "75 Shore A",
            size: "A-42",
            color: "Black",
            unit: "Piece",
            price: 280,
            stock: 350,
            minStock: 100,
            status: "In Stock"
        },

        {
            id: 6,
            productCode: "RUB-CVB-006",
            hsnCode: "40101290",
            name: "Rubber Conveyor Belt",
            category: "Conveyor Belts",
            material: "SBR Rubber",
            hardness: "65 Shore A",
            size: "1000 mm x 10 mm",
            color: "Black",
            unit: "Meter",
            price: 1250,
            stock: 85,
            minStock: 30,
            status: "In Stock"
        },

        {
            id: 7,
            productCode: "RUB-MNT-007",
            hsnCode: "40169990",
            name: "Rubber Mount",
            category: "Mounts",
            material: "Natural Rubber",
            hardness: "60 Shore A",
            size: "75 mm",
            color: "Black",
            unit: "Piece",
            price: 150,
            stock: 750,
            minStock: 150,
            status: "In Stock"
        },

        {
            id: 8,
            productCode: "RUB-DPH-008",
            hsnCode: "40169390",
            name: "Rubber Diaphragm",
            category: "Diaphragms",
            material: "EPDM Rubber",
            hardness: "70 Shore A",
            size: "120 mm",
            color: "Black",
            unit: "Piece",
            price: 185,
            stock: 420,
            minStock: 100,
            status: "In Stock"
        },

        {
            id: 9,
            productCode: "RUB-HOS-009",
            hsnCode: "40092100",
            name: "Rubber Hose",
            category: "Hoses",
            material: "Nitrile Rubber (NBR)",
            hardness: "70 Shore A",
            size: "25 mm",
            color: "Black",
            unit: "Meter",
            price: 320,
            stock: 180,
            minStock: 200,
            status: "Low Stock"
        },

        {
            id: 10,
            productCode: "RUB-BSH-010",
            hsnCode: "40169960",
            name: "Rubber Bush",
            category: "Bushes",
            material: "Polyurethane Rubber",
            hardness: "80 Shore A",
            size: "40 mm",
            color: "Black",
            unit: "Piece",
            price: 85,
            stock: 1500,
            minStock: 300,
            status: "In Stock"
        },

        {
            id: 11,
            productCode: "RUB-PLG-011",
            hsnCode: "40169360",
            name: "Rubber Plug",
            category: "Plugs",
            material: "Silicone Rubber",
            hardness: "50 Shore A",
            size: "20 mm",
            color: "Red",
            unit: "Piece",
            price: 18,
            stock: 3000,
            minStock: 500,
            status: "In Stock"
        },

        {
            id: 12,
            productCode: "RUB-WHL-012",
            hsnCode: "40169990",
            name: "Rubber Wheel",
            category: "Wheels",
            material: "Polyurethane Rubber",
            hardness: "90 Shore A",
            size: "100 mm",
            color: "Blue",
            unit: "Piece",
            price: 450,
            stock: 95,
            minStock: 100,
            status: "Low Stock"
        },

        {
            id: 13,
            productCode: "RUB-CRD-013",
            hsnCode: "40169990",
            name: "Rubber Cord",
            category: "Cords",
            material: "Silicone Rubber",
            hardness: "60 Shore A",
            size: "5 mm",
            color: "Black",
            unit: "Meter",
            price: 35,
            stock: 2500,
            minStock: 500,
            status: "In Stock"
        },

        {
            id: 14,
            productCode: "RUB-BEL-014",
            hsnCode: "40169990",
            name: "Rubber Bellows",
            category: "Bellows",
            material: "EPDM Rubber",
            hardness: "65 Shore A",
            size: "150 mm",
            color: "Black",
            unit: "Piece",
            price: 375,
            stock: 280,
            minStock: 75,
            status: "In Stock"
        },

        {
            id: 15,
            productCode: "RUB-SSL-015",
            hsnCode: "40169330",
            name: "Rubber Seal Strip",
            category: "Seals",
            material: "EPDM Rubber",
            hardness: "55 Shore A",
            size: "20 mm x 10 mm",
            color: "Black",
            unit: "Meter",
            price: 65,
            stock: 900,
            minStock: 200,
            status: "In Stock"
        }
    ];

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <div className='d-flex justify-content-between align-items-center px-3'>
                            <h2 className='display-6 mb-3'>Products</h2>

                            <p>
                                <Link to='/Dashboard' className='text-decoration-none'>Home</Link> / <span className='text-secondary'>Products</span>
                            </p>
                        </div>

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <button className='btn btn-primary'>Add Product</button>
                                </div>

                                <table className='table table-responsive table-bordered table-striped table-hover'>
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
                                                               <span className='badge text-bg-success'>{product.status}</span>
                                                            )
                                                        }

                                                        {
                                                            product.status === "Low Stock" && (
                                                               <span className='badge text-bg-warning'>{product.status}</span>
                                                            )
                                                        }
                                                    </td>
                                                    <td className='text-center'>
                                                        <div class="btn-group btn-group-sm">
                                                            <button type="button" class="btn btn-outline-primary">
                                                                <i class="bi bi-eye" aria-hidden="true"> </i>
                                                            </button>
                                                            <button type="button" class="btn btn-outline-secondary">
                                                                <i class="bi bi-pencil" aria-hidden="true"> </i>
                                                            </button>
                                                            <button type="button" class="btn btn-outline-danger">
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
                    </main>
                </div>
            </div>
        </div>
    )
}
