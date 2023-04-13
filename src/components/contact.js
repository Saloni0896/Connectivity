import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {
    const initialValues={
        name:'',
        email:'',
        message:'',
    }
    const validationSchema= Yup.object({
        name:Yup.string().required("Please enter name"),
        email:Yup.string().required("Please enter email"),
        message:Yup.string().required("Please enter message"),
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
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="email" className='form-control' name="name" {...formik.getFieldProps("name")}  placeholder='Please enter your email id'/>
                                {formik.touched.name && formik.errors.name ? (
                                    <div className='error'>{formik.errors.name}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" className='form-control' name="email" {...formik.getFieldProps("email")}  placeholder='Please enter your email id'/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='error'>{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label>Message:</label>
                                <input type="text" className='form-control' name="message" {...formik.getFieldProps("message")}  placeholder='Please enter your password'/>
                                {formik.touched.message && formik.errors.message ? (
                                    <div className='error'>{formik.errors.message}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </form>    
                    </div>
                    <div className='col-sm-6'>
                    <img src='../contact2.png' alt='image' className='imagelogin'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact