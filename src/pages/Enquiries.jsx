import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'

function Enquiries() {
    const enquiries = [
        {
            id: 1,
            name: "Rahul Mehta",
            company: "Apex Automotive Components Pvt. Ltd.",
            email: "rahul.mehta@apexauto.example",
            phoneNo: "9876501001",
            requirement: "Rubber O-Rings for automotive engine components",
            status: "New"
        },
        {
            id: 2,
            name: "Vikram Shah",
            company: "Maharashtra Engineering Works",
            email: "vikram.shah@mew.example",
            phoneNo: "9876501002",
            requirement: "Industrial rubber gaskets in bulk quantity",
            status: "Contacted"
        },
        {
            id: 3,
            name: "Anil Kumar",
            company: "Shakti Pumps & Motors Ltd.",
            email: "anil.kumar@shaktipumps.example",
            phoneNo: "9876501003",
            requirement: "Rubber seals and diaphragms for pumps",
            status: "Quotation Sent"
        },
        {
            id: 4,
            name: "Sanjay Verma",
            company: "Western Industrial Equipment",
            email: "sanjay.verma@wie.example",
            phoneNo: "9876501004",
            requirement: "Rubber conveyor belts for material handling equipment",
            status: "Negotiation"
        },
        {
            id: 5,
            name: "Priya Nair",
            company: "Precision Auto Parts India",
            email: "priya.nair@precisionauto.example",
            phoneNo: "9876501005",
            requirement: "Automotive rubber bushes and mounts",
            status: "New"
        },
        {
            id: 6,
            name: "Arjun Malhotra",
            company: "National Conveyor Systems",
            email: "arjun.malhotra@ncs.example",
            phoneNo: "9876501006",
            requirement: "Heavy-duty rubber conveyor belts",
            status: "Contacted"
        },
        {
            id: 7,
            name: "Deepak Joshi",
            company: "South India Machinery Pvt. Ltd.",
            email: "deepak.joshi@sim.example",
            phoneNo: "9876501007",
            requirement: "Custom rubber seals for heavy machinery",
            status: "Quotation Sent"
        },
        {
            id: 8,
            name: "Rakesh Patel",
            company: "Gujarat Chemical Industries",
            email: "rakesh.patel@gci.example",
            phoneNo: "9876501008",
            requirement: "Chemical-resistant rubber sheets",
            status: "Negotiation"
        },
        {
            id: 9,
            name: "Amit Deshmukh",
            company: "Reliable Rubber Distributors",
            email: "amit.deshmukh@rrd.example",
            phoneNo: "9876501009",
            requirement: "Rubber O-Rings, plugs and seal strips for distribution",
            status: "Converted"
        },
        {
            id: 10,
            name: "Karan Singh",
            company: "Eastern Engineering Corporation",
            email: "karan.singh@eec.example",
            phoneNo: "9876501010",
            requirement: "Custom rubber components for industrial machinery",
            status: "New"
        },
        {
            id: 11,
            name: "Manish Yadav",
            company: "Bharat Agricultural Equipment",
            email: "manish.yadav@bae.example",
            phoneNo: "9876501011",
            requirement: "Rubber bushes and vibration mounts for agricultural equipment",
            status: "Contacted"
        },
        {
            id: 12,
            name: "Sneha Kulkarni",
            company: "Global Industrial Products Ltd.",
            email: "sneha.kulkarni@gip.example",
            phoneNo: "9876501012",
            requirement: "Industrial rubber hoses and flexible tubes",
            status: "Quotation Sent"
        },
        {
            id: 13,
            name: "Nitin Pawar",
            company: "Metro Mechanical Solutions",
            email: "nitin.pawar@mms.example",
            phoneNo: "9876501013",
            requirement: "Silicone rubber tubes for industrial applications",
            status: "Negotiation"
        },
        {
            id: 14,
            name: "Pooja Sharma",
            company: "Prime Industrial Supplies",
            email: "pooja.sharma@primeindustrial.example",
            phoneNo: "9876501014",
            requirement: "Rubber sheets and custom-cut rubber gaskets",
            status: "Lost"
        },
        {
            id: 15,
            name: "Rohit Agarwal",
            company: "Advanced Manufacturing Solutions",
            email: "rohit.agarwal@ams.example",
            phoneNo: "9876501015",
            requirement: "Custom molded rubber components with high-temperature resistance",
            status: "New"
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
                            <h2 className='display-6 mb-3'>Mail Enquiries</h2>

                            <p>
                                <Link to='/Dashboard' className='text-decoration-none'>Home</Link> / <span className='text-secondary'>Mail Enquiries</span>
                            </p>
                        </div>

                        <div className='card p-3 shadow-sm bg-light'>
                            <div className='card-body'>
                                {/* <div className='d-flex justify-content-end mb-3'>
                                    <button className='btn btn-primary'>Add Die</button>
                                </div> */}

                                <table className='table table-responsive table-bordered table-striped table-hover'>
                                    <thead>
                                        {/* id, name, company, email, phoneNo, requirement, status */}
                                        <tr>
                                            <th className='text-center'>#</th>
                                            <th>Name</th>
                                            <th>Company</th>
                                            <th>Email</th>
                                            <th>Phone No.</th>
                                            {/* <th>Requirement</th> */}
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            enquiries.map(enquiry => (
                                                <tr key={enquiry.id}>
                                                    <td className='text-center fw-bold'>{enquiry.id}</td>
                                                    <td>{enquiry.name}</td>
                                                    <td>{enquiry.company}</td>
                                                    <td>{enquiry.email}</td>
                                                    <td>{enquiry.phoneNo}</td>
                                                    {/* <td>{enquiry.requirement}</td> */}
                                                    <td className='text-center'>
                                                        {
                                                            enquiry.status === "Lost" && (
                                                                <span className='badge text-bg-danger'>{enquiry.status}</span>
                                                            )
                                                        }   

                                                        {
                                                            enquiry.status === "New" && (
                                                                <span className='badge text-bg-primary'>{enquiry.status}</span>
                                                            )
                                                        }

                                                        {
                                                            enquiry.status === "Contacted" && (
                                                                <span className='badge text-bg-secondary'>{enquiry.status}</span>
                                                            )
                                                        }

                                                        {
                                                            enquiry.status === "Negotiation" && (
                                                                <span className='badge text-bg-warning'>{enquiry.status}</span>
                                                            )
                                                        }

                                                        
                                                        {
                                                            enquiry.status === "Quotation Sent" && (
                                                                <span className='badge text-bg-success'>{enquiry.status}</span>
                                                            )
                                                        }

                                                         {
                                                            enquiry.status === "Converted" && (
                                                                <span className='badge text-bg-info'>{enquiry.status}</span>
                                                            )
                                                        }
                                                        
                                                        {/* {enquiry.status} */}
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

export default Enquiries;