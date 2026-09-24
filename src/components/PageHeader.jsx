import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeader({ heading, para, url}) {
  return (
    <div className='d-flex justify-content-between align-items-center px-2 mb-4'>
      <div>
        <h2 className='fw-bold mb-1'>{heading}</h2>

        <p className='text-muted mb-0'>{para}</p>
      </div>

      <Link
        to={url}
        className="btn btn-secondary shadow-sm"
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back
      </Link>
    </div>
  )
}
