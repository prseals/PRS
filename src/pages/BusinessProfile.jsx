import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Aside from '../components/Aside'
import authorized_sign from "../assets/authorized_sign.jpeg"
import logo from "../assets/logo_transparent.png"
import { Link } from 'react-router-dom'
import MainPageHeader from '../components/MainPageHeader'

function BusinessProfile() {
    const [isDisabled, setIsDisabled] = useState(true);

    const [businessProfile, setBusinessProfile] = useState({
        name: "P R Seals Manufacturar",
        gstNo: "27AARPP0611K1ZH",
        contactNo: "9552290234",
        email: "prseals@gmail.com",
        factoryAddress: "Walhbhat X Road, Yamunabai Chawl, S. T. Yadav Marg, Near Jawahar Nagar, Goregaon(E), Mumbai",
        officeAddress: "Near Grampanchayat Road, Aurwad, Tal-Shirol, Dist-kolhapur",
        factoryPinCode: "400063",
        officePinCode: "416104",
        stateWithCode: "27-Maharashtra",
        signatureUrl: "",
        logoUrl: "",
        bankName: "Kotak Mahindra Bank Limited",
        bankBranch: "Aurwad",
        accountNumber: "7446791424",
        accountName: "TALHAB ISAK PATEL",
        ifscCode: "KKBK0001928",
        micrCode: "416485503",
    });

    const handlechange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);

        setBusinessProfile({
            ...businessProfile,
            [name]: value
        });

        // console.log(businessProfile);
    }

    return (
        <div>
            <Navbar />

            <div className='container-fluid'>
                <div className='row'>
                    <Aside />

                    <main className='col-md-9 col-lg-10 p-4'>
                        <MainPageHeader
                            pageName={"Business Profile"}
                            para={"Business Profile contains important data about organization."}
                        />

                        <div className='card p-3 bg-light shadow-sm'>
                            <div className='card-body'>
                                {
                                    isDisabled && (
                                        <div className='d-flex justify-content-end mb-2 me-2'>
                                            <button
                                                className='btn btn-primary shadow-sm'
                                                onClick={() => setIsDisabled(false)}
                                            >
                                                Edit Business Profile
                                            </button>
                                        </div>
                                    )
                                }


                                <div className='container my-3'>
                                    <div className='row mb-4'>
                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>Organization Name</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='name'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.name}
                                                onChange={handlechange}
                                            />
                                        </div>

                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>GST Number</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='gstNo'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.gstNo}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-md-8 col-lg-8'>
                                            <label className='form-label'>Factory Address</label>

                                            <textarea
                                                className='form-control shadow-sm'
                                                name='factoryAddress'
                                                disabled={isDisabled}
                                                onChange={handlechange}
                                            >
                                                {businessProfile.factoryAddress}
                                            </textarea>
                                        </div>

                                        <div className='col-md-4 col-lg-4'>
                                            <label className='form-label'>Factory Pin Code</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='factoryPinCode'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.factoryPinCode}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-md-8 col-lg-8'>
                                            <label className='form-label'>Office Address</label>

                                            <textarea
                                                className='form-control shadow-sm'
                                                name='officeAddress'
                                                disabled={isDisabled}
                                                onChange={handlechange}
                                            >
                                                {businessProfile.officeAddress}
                                            </textarea>
                                        </div>

                                        <div className='col-md-4 col-lg-4'>
                                            <label className='form-label'>Office Pin Code</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='officePinCode'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.officePinCode}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-md-12 col-lg-4'>
                                            <label className='form-label'>State Name (With Code)</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='stateWithCode'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.stateWithCode}
                                                onChange={handlechange}
                                            />
                                        </div>
                                        
                                         <div className='col-md-12 col-lg-4'>
                                            <label className='form-label'>Phone Number</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='contactNo'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.contactNo}
                                                onChange={handlechange}
                                            />
                                        </div>

                                        <div className='col-md-12 col-lg-4'>
                                            <label className='form-label'>Email Id</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='email'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.email}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>Bank Name</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='bankName'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.bankName}
                                                onChange={handlechange}
                                            />
                                        </div>

                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>Branch Name</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='bankBranch'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.bankBranch}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>Account Number</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='accountNumber'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.accountNumber}
                                                onChange={handlechange}
                                            />
                                        </div>

                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>Account Name</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='accountName'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.accountName}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row mb-4'>
                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>IFSC Code</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='ifscCode'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.ifscCode}
                                                onChange={handlechange}
                                            />
                                        </div>

                                        <div className='col-md-12 col-lg-6'>
                                            <label className='form-label'>MICR Code</label>

                                            <input
                                                className='form-control shadow-sm'
                                                name='micrCode'
                                                type="text"
                                                disabled={isDisabled}
                                                value={businessProfile.micrCode}
                                                onChange={handlechange}
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-12 col-lg-6'>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <label className='form-label'>Company's Logo</label>
                                                </div>

                                                <div className='offset-sm-2 col-sm-8'>
                                                    <img
                                                        alt="Company Logo"
                                                        src={logo}
                                                        className='img-thumbnail mt-2 shadow-sm'
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-12 col-lg-6'>
                                            <div className='col-sm-12'>
                                                <label className='form-label'>Signature Image</label>
                                            </div>

                                            <div className='offset-sm-2 col-sm-8'>
                                                <img
                                                    alt="Company Logo"
                                                    src={authorized_sign}
                                                    className='img-thumbnail mt-2 shadow-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        !isDisabled && (
                                            <div className='d-flex justify-content-end align-items-center mt-5 me-2'>
                                                <div className=''>
                                                    <button
                                                        className='btn btn-success shadow-sm'
                                                        onClick={() => setIsDisabled(true)}
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default BusinessProfile;