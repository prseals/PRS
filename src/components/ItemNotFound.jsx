import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemNotFound({ name, url }) {
    return (
        <div className='card'>
            <div className='card-header bg-danger text-white'>
                <h5 className='mb-0'>
                    <i className='bi bi-exclamation-circle me-2'></i>
                    {name} not found!
                </h5>
            </div>

            <div className='card-body text-center py-5'>
                <i
                    className='bi bi-x-circle text-danger'
                    style={{ fontSize: "60px" }}
                ></i>

                <h4 className='text-danger mt-3'> {name} not found! </h4>

                <p className='text-muted'>The {name.toLowerCase()} you are looking for does not exist.</p>

                <Link to={url} className='btn btn-primary'>
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to {name}s
                </Link>
            </div>
        </div>
    )
}
