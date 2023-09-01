import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup'
import { MyTextInput, MyCheckbox, MySelect, MyPhoneNumber } from '../components/Form';

function Signup() {
    const formik = useFormik({
        initialValues:{
            firstName:'', 
            lastName:'', 
            email:'',
            phoneNumber:'',
            acceptedTerms:false,
            jobType: '',
            picked:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phoneNumber: Yup.string().required('Required'),
            acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string().oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job type').required('Required'),
        }),
        onSubmit: (values, {setSubmiting})=>{
            setTimeout(()=>{
                alert(JSON.stringify(values, null, 2));
                setSubmiting(false)
            },400);
        }
    })


  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='flex'>
            <MyTextInput
                label="First Name"
                name='firstName' 
                type='text' 
                placeholder='Jane'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={formik.errors.firstName}
            />

            <MyTextInput
                label = 'Last Name'
                name = 'lastName'
                type= "text"
                placeholder="Doe"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.errors.lastName}
            />
        </div>

        <div className='flex'>
            <MyTextInput
                label="Email Address"
                name = "email"
                type = "email"
                placeholder = "jane@Doe.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
            />

            <MyPhoneNumber
                label="Phone Number"
                name = "phoneNumber"
                type = "phoneNumber"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                error={formik.errors.phoneNumber}
                placeholder="Enter phone number"
            />

        </div>

        <MySelect 
            label="Job Type" 
            name="jobType"
            onChange={formik.handleChange}
            e={formik.values.jobType}
            error={formik.errors.jobType}
        >
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
        </MySelect>

        <MyCheckbox 
            name="acceptedTerms"
            onChange={formik.handleChange}
            e={formik.values.acceptedTerms}
            error={formik.errors.acceptedTerms}
        >
            I accept the terms and conditions
        </MyCheckbox>

        <button type='submit' className='border border-red-950 ml-5 p-3  rounded-lg mt-3 bg-blue-300 text-white'>Submit</button> <br />
    </form>

  )
}

export default Signup