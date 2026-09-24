import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPageHeader({pageName, para}) {
  return (
    <div className='d-flex justify-content-between align-items-center px-2 mb-4'>
        <div>
            <h2 className='fw-bold mb-1'>{pageName}</h2>

            <p className='text-muted mb-0'>{para}</p>
        </div>

        <p className='mb-0'>
            <Link to='/Dashboard' className='text-decoration-none'>Dasbhoard</Link> / <span className='text-secondary'>{pageName}</span>
        </p>
    </div>
  )
}
