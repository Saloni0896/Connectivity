import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function UserRegister() {
    const initialValues={
        name:'',
        email:'',
        password:'',
        phone:'',
    }
    const validationSchema= Yup.object({
        name:Yup.string().required("Please enter name"),
        email:Yup.string().required("Please enter email"),
        password:Yup.string().required("Please enter password"),
        phone: Yup.string().required("Please enter phone"),
    })
    const formik= useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log("values",values);
        },
    })
  return (
    <div className='container'>
        <div className='card'>
        <h2 className='ml-4 headingregister'>Register</h2>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='form-group'>
                                <label className='form-lable'>Name</label>
                                <input type="text" name="name" className='form-control' {...formik.getFieldProps("name")} placeholder='Please enter your name'/>
                                {formik.touched.name && formik.errors.name ? (
                                    <div className='error'>{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div className='form-group'>
                                <label className='form-lable'>Email</label>
                                <input type="email" name="email" className='form-control' {...formik.getFieldProps("email")} placeholder='Please enter your email'/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='error'>{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className='form-group'>
                                <label className='form-lable'>Password</label>
                                <input type="password" name="password" className='form-control' {...formik.getFieldProps("password")} placeholder='Please enter your password'/>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className='error'>{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className='form-group'>
                                <label className='form-lable'>Phone</label>
                                <input type="number" name="phone" className='form-control' {...formik.getFieldProps("phone")} placeholder='Please enter your phone number'/>
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className='error'>{formik.errors.phone}</div>
                                ) : null}
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-primary'>Register</button>
                            </div>
                        </form>      
                    </div>
                    <div className='col-sm-6'>
                    <img src='../register.jpg' alt='image' className='imagelogin'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserRegister