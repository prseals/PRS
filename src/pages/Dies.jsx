import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'

function Dies() {
    const dies = [
        {
            id: 1,
            dieCode: "DIE-001",
            dieName: "O-Ring Standard Die",
            dieType: "Compression Mould",
            productCode: "RUB-ORG-001",
            productName: "Rubber O-Ring",
            cavityCount: 16,
            material: "Tool Steel",
            dimensions: {
            length: 250,
            width: 250,
            height: 80,
            unit: "mm"
            },
            machineType: "Hydraulic Compression Moulding Machine",
            machineId: "MCH-001",
            manufacturer: "Precision Tooling Works",
            manufacturingDate: "2023-05-15",
            purchaseCost: 85000,
            installationDate: "2023-06-01",
            lastMaintenanceDate: "2026-07-10",
            nextMaintenanceDate: "2026-10-10",
            totalProductionCycles: 18500,
            maximumCycles: 50000,
            condition: "Good",
            status: "Active",
            location: "Tool Room - Rack A1",
            remarks: "Used for standard automotive O-rings"
        },

        {
            id: 2,
            dieCode: "DIE-002",
            dieName: "Rubber Gasket 100mm Die",
            dieType: "Compression Mould",
            productCode: "RUB-GSK-002",
            productName: "Rubber Gasket",
            cavityCount: 8,
            material: "Hardened Steel",
            dimensions: {
            length: 300,
            width: 300,
            height: 100,
            unit: "mm"
            },
            machineType: "Hydraulic Compression Moulding Machine",
            machineId: "MCH-002",
            manufacturer: "Maharashtra Dies & Tools",
            manufacturingDate: "2022-11-20",
            purchaseCost: 120000,
            installationDate: "2022-12-05",
            lastMaintenanceDate: "2026-06-20",
            nextMaintenanceDate: "2026-09-20",
            totalProductionCycles: 24300,
            maximumCycles: 60000,
            condition: "Good",
            status: "Active",
            location: "Tool Room - Rack A2",
            remarks: "Used for industrial sealing gaskets"
        },

        {
            id: 3,
            dieCode: "DIE-003",
            dieName: "Rubber Sheet Die",
            dieType: "Flat Mould",
            productCode: "RUB-SHT-003",
            productName: "Rubber Sheet",
            cavityCount: 1,
            material: "Mild Steel",
            dimensions: {
            length: 600,
            width: 600,
            height: 120,
            unit: "mm"
            },
            machineType: "Hydraulic Press",
            machineId: "MCH-003",
            manufacturer: "Western Tooling Solutions",
            manufacturingDate: "2021-08-12",
            purchaseCost: 150000,
            installationDate: "2021-09-01",
            lastMaintenanceDate: "2026-05-15",
            nextMaintenanceDate: "2026-11-15",
            totalProductionCycles: 32000,
            maximumCycles: 75000,
            condition: "Good",
            status: "Active",
            location: "Tool Room - Rack B1",
            remarks: "Large flat mould for rubber sheet production"
        },

        {
            id: 4,
            dieCode: "DIE-004",
            dieName: "Rubber Bush Die",
            dieType: "Compression Mould",
            productCode: "RUB-BSH-010",
            productName: "Rubber Bush",
            cavityCount: 12,
            material: "Tool Steel",
            dimensions: {
            length: 280,
            width: 280,
            height: 100,
            unit: "mm"
            },
            machineType: "Compression Moulding Machine",
            machineId: "MCH-004",
            manufacturer: "Pune Precision Dies",
            manufacturingDate: "2024-01-18",
            purchaseCost: 95000,
            installationDate: "2024-02-01",
            lastMaintenanceDate: "2026-08-05",
            nextMaintenanceDate: "2026-11-05",
            totalProductionCycles: 11200,
            maximumCycles: 50000,
            condition: "Excellent",
            status: "Active",
            location: "Tool Room - Rack B2",
            remarks: "Automotive suspension bush production"
        },

        {
            id: 5,
            dieCode: "DIE-005",
            dieName: "Rubber Plug Die",
            dieType: "Compression Mould",
            productCode: "RUB-PLG-011",
            productName: "Rubber Plug",
            cavityCount: 24,
            material: "Hardened Steel",
            dimensions: {
            length: 220,
            width: 220,
            height: 80,
            unit: "mm"
            },
            machineType: "Compression Moulding Machine",
            machineId: "MCH-001",
            manufacturer: "Industrial Dies India",
            manufacturingDate: "2023-09-10",
            purchaseCost: 72000,
            installationDate: "2023-10-01",
            lastMaintenanceDate: "2026-07-25",
            nextMaintenanceDate: "2026-10-25",
            totalProductionCycles: 19800,
            maximumCycles: 55000,
            condition: "Good",
            status: "Active",
            location: "Tool Room - Rack C1",
            remarks: "Multi-cavity plug production die"
        },

        {
            id: 6,
            dieCode: "DIE-006",
            dieName: "Rubber Mount Die",
            dieType: "Transfer Mould",
            productCode: "RUB-MNT-007",
            productName: "Rubber Mount",
            cavityCount: 6,
            material: "Tool Steel",
            dimensions: {
            length: 350,
            width: 300,
            height: 150,
            unit: "mm"
            },
            machineType: "Transfer Moulding Machine",
            machineId: "MCH-005",
            manufacturer: "Precision Tooling Works",
            manufacturingDate: "2022-04-25",
            purchaseCost: 175000,
            installationDate: "2022-05-15",
            lastMaintenanceDate: "2026-04-18",
            nextMaintenanceDate: "2026-10-18",
            totalProductionCycles: 28700,
            maximumCycles: 60000,
            condition: "Good",
            status: "Active",
            location: "Tool Room - Rack C2",
            remarks: "Used for automotive rubber mounting components"
        },

        {
            id: 7,
            dieCode: "DIE-007",
            dieName: "Rubber Diaphragm Die",
            dieType: "Compression Mould",
            productCode: "RUB-DPH-008",
            productName: "Rubber Diaphragm",
            cavityCount: 4,
            material: "Stainless Tool Steel",
            dimensions: {
            length: 400,
            width: 400,
            height: 120,
            unit: "mm"
            },
            machineType: "Hydraulic Compression Moulding Machine",
            machineId: "MCH-002",
            manufacturer: "Maharashtra Dies & Tools",
            manufacturingDate: "2024-03-12",
            purchaseCost: 135000,
            installationDate: "2024-04-01",
            lastMaintenanceDate: "2026-08-12",
            nextMaintenanceDate: "2026-11-12",
            totalProductionCycles: 8900,
            maximumCycles: 45000,
            condition: "Excellent",
            status: "Active",
            location: "Tool Room - Rack D1",
            remarks: "Precision diaphragm mould"
        },

        {
            id: 8,
            dieCode: "DIE-008",
            dieName: "Rubber Wheel Die",
            dieType: "Compression Mould",
            productCode: "RUB-WHL-012",
            productName: "Rubber Wheel",
            cavityCount: 2,
            material: "Hardened Tool Steel",
            dimensions: {
            length: 500,
            width: 500,
            height: 180,
            unit: "mm"
            },
            machineType: "Hydraulic Compression Moulding Machine",
            machineId: "MCH-006",
            manufacturer: "Western Tooling Solutions",
            manufacturingDate: "2020-10-15",
            purchaseCost: 225000,
            installationDate: "2020-11-01",
            lastMaintenanceDate: "2026-03-10",
            nextMaintenanceDate: "2026-09-10",
            totalProductionCycles: 42500,
            maximumCycles: 50000,
            condition: "Needs Maintenance",
            status: "Maintenance",
            location: "Tool Room - Rack D2",
            remarks: "Scheduled for refurbishment"
        },

        {
            id: 9,
            dieCode: "DIE-009",
            dieName: "Rubber Bellows Die",
            dieType: "Transfer Mould",
            productCode: "RUB-BEL-014",
            productName: "Rubber Bellows",
            cavityCount: 4,
            material: "Tool Steel",
            dimensions: {
            length: 450,
            width: 350,
            height: 200,
            unit: "mm"
            },
            machineType: "Transfer Moulding Machine",
            machineId: "MCH-005",
            manufacturer: "Pune Precision Dies",
            manufacturingDate: "2023-02-08",
            purchaseCost: 185000,
            installationDate: "2023-03-01",
            lastMaintenanceDate: "2026-06-10",
            nextMaintenanceDate: "2026-09-10",
            totalProductionCycles: 21600,
            maximumCycles: 60000,
            condition: "Good",
            status: "Active",
            location: "Tool Room - Rack E1",
            remarks: "Used for flexible bellows components"
        },
        
        {
            id: 10,
            dieCode: "DIE-010",
            dieName: "Rubber Seal Strip Die",
            dieType: "Extrusion Die",
            productCode: "RUB-SSL-015",
            productName: "Rubber Seal Strip",
            cavityCount: 1,
            material: "Hardened Tool Steel",
            dimensions: {
            length: 180,
            width: 80,
            height: 80,
            unit: "mm"
            },
            machineType: "Rubber Extrusion Machine",
            machineId: "MCH-007",
            manufacturer: "Extrusion Tooling India",
            manufacturingDate: "2024-06-20",
            purchaseCost: 68000,
            installationDate: "2024-07-01",
            lastMaintenanceDate: "2026-07-01",
            nextMaintenanceDate: "2026-10-01",
            totalProductionCycles: 15600,
            maximumCycles: 40000,
            condition: "Excellent",
            status: "Active",
            location: "Tool Room - Rack E2",
            remarks: "Extrusion profile die for sealing strips"
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
                            <h2 className='display-6 mb-3'>Dies</h2>

                            <p>
                                <Link to='/Dashboard' className='text-decoration-none'>Home</Link> / <span className='text-secondary'>Dies</span>
                            </p>
                        </div>

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-end mb-3'>
                                    <button className='btn btn-primary'>Add Die</button>
                                </div>

                                <table className='table table-responsive table-bordered table-striped table-hover'>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>#</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Product Code</th>
                                            <th>Cavity</th>
                                            <th>Condition</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dies.map(die => (
                                                <tr key={die.id}>
                                                    <td className='text-center fw-bold'>{die.id}</td>
                                                    <td>{die.dieCode}</td>
                                                    <td>{die.dieName}</td>
                                                    <td>{die.dieType}</td>
                                                    <td>{die.productCode}</td>
                                                    <td>{die.cavityCount}</td>
                                                    <td className='text-center'>
                                                        {
                                                            die.condition === "Needs Maintenance" && (
                                                                <span className='badge text-bg-danger'>{die.condition}</span>
                                                            )
                                                        }

                                                        {
                                                            die.condition === "Good" && (
                                                                <span className='badge text-bg-warning'>{die.condition}</span>
                                                            )
                                                        }

                                                        {
                                                            die.condition === "Excellent" && (
                                                                <span className='badge text-bg-success'>{die.condition}</span>
                                                            )
                                                        }
                                                        
                                                    </td>
                                                    <td className='text-center'>
                                                        {
                                                            die.status === "Active" && (
                                                                <span className='badge text-bg-success'>{die.status}</span>
                                                            )
                                                        }

                                                        {
                                                            die.status === "Maintenance" && (
                                                                <span className='badge text-bg-danger'>{die.status}</span>
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

export default Dies