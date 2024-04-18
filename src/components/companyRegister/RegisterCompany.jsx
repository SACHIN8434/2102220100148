import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import {registercompany} from "../../services/operations/auth"

const RegisterCompany = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(
        {
            companyName: "",
            ownerName: "",
            rollNo: "",
            ownerEmail: "",
            accessCode: "",

        }
    )
    const { companyName,ownerName,rollNo,ownerEmail} = formData


    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(formData.companyName,formData.ownerName,formData.rollNo,formData.ownerEmail,formData.accessCode)
        dispatch(registercompany(formData.companyName,formData.ownerName,formData.rollNo,formData.ownerEmail,"dKAMsn"))
    }

    return (
        <form className="mt-6 flex w-full flex-col gap-y-4" onSubmit={handleOnSubmit}>
            <label className="w-full">
                <p>companyName<sup>*</sup></p>
                <input
                    required
                    type="text"
                    name="companyName"
                    value={companyName}
                    onChange={handleOnChange}
                    placeholder="Enter company Name"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full">
                <p>ownerName<sup>*</sup></p>
                <input
                    required
                    type="text"
                    name="ownerName"
                    value={ownerName}
                    onChange={handleOnChange}
                    placeholder="Enter ownerName"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full">
                <p>rollNo<sup>*</sup></p>
                <input
                    required
                    type="text"
                    name="rollNo"
                    value={rollNo}
                    onChange={handleOnChange}
                    placeholder="Enter roll Name"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full">
                <p>ownerEmail<sup>*</sup></p>
                <input
                    required
                    type="text"
                    name="ownerEmail"
                    value={ownerEmail}
                    onChange={handleOnChange}
                    placeholder="Enter ownerEmail "
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
            </label>
           

            <button
                type="submit"
                className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
            >
                Register
            </button>
        </form>
    )
}

export default RegisterCompany