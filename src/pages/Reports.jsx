import React from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import { Link } from 'react-router-dom'
import MainPageHeader from '../components/MainPageHeader'
import UnderConstruction from '../components/UnderConstruction'

function Reports() {
    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Reports"}
                            para={"It shows reports to show different statistics."}
                        />

                        <UnderConstruction name="Reports" />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Reports