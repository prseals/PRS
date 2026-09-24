import React from 'react'
import { Link } from 'react-router-dom'

export default function UnderConstruction({ name }) {
    return (
        <div className='card'>
            <div className='card-header bg-danger text-white'>
                <h5 className='mb-0'>
                    <i className='bi bi-exclamation-circle me-2'></i>
                    Page Under Construction!
                </h5>
            </div>

            <div className='card-body text-center py-5'>
                <i
                    className='bi bi-tools text-danger'
                    style={{ fontSize: "60px" }}
                ></i>

                <h4 className='text-danger mt-3'> {name} page under construction </h4>

                <p className='text-muted'>The {name.toLowerCase()} page is under construction.</p>

                <Link to="/Dashboard" className='btn btn-primary'>
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Dashboard
                </Link>
            </div>
        </div>
    )
}
