import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function UserLogin() {
    const initialValues={
        email:'',
        password:'',
    }
    const validationSchema= Yup.object({
        email:Yup.string().required("Please enter email"),
        password:Yup.string().required("Please enter password"),
    })
    const formik= useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log("values",values);
        },
    })

  return (
    <div className='container mt-4'>
        <div className='card'>
            <h2 className='ml-4 headinglogin'>Login</h2>
            <div className='card-body'>
                <div className='row'>
                <div className='col-sm-6'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className='form-control' name="email" {...formik.getFieldProps("email")}  placeholder='Please enter your email id'/>
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className='form-control' name="password" {...formik.getFieldProps("password")}  placeholder='Please enter your password'/>
                            {formik.touched.password && formik.errors.password ? (
                                <div className='error'>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>    
                </div>
                <div className='col-sm-6'>
                    <img src='../login.png' alt='image' className='imagelogin'/>
                </div>
                </div>
               
              
            </div>
        </div>

    </div>
  )
}

export default UserLogin