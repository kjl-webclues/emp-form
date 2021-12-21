import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { addEmp } from '../src/actions/action'
import { NavLink } from 'react-router-dom'


const EmpForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: new Date().getTime().toString(),
            name: "",
            phone: "",
            profession: "",
            salary: "",
            email: "",                                    
            password: "",
            confirmpassword: "",
        },
        // onSubmit: (values) => {
        //     alert(JSON.stringify(values, null, 2));
        //     console.log("values", values)
        // }
        onSubmit: (values) => dispatch(addEmp(values), formik.handleReset(),console.log("values", values)) 

    })
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <h1>Employee form</h1>
                    <input type="text"
                        name="name"
                        placeholder='Enter Employee Name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <input type="number" 
                        name="phone"
                        placeholder='Enter phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    <input type="text" 
                        name='profession'
                        placeholder='Enter Profession'
                        onChange={formik.handleChange}
                        value={formik.values.profession}
                    />
                    <input type="number" 
                        name='salary'
                        placeholder='Enter salary'
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    />
                    <input type="text" 
                        name='email'
                        placeholder='Enter Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <input type="password" 
                        name='password'
                        placeholder='enter password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <input type="password" 
                        name='confirmpassword'
                        placeholder='enter confirm password'
                        onChange={formik.handleChange}
                        value={formik.values.confirmpassword}
                    />

                    <button className='signin' type='submit'>Submit</button>&nbsp;&nbsp;
                    <button className='cancel' type='reset'>Cancel</button>
                </form>
                <NavLink to="/dashbord"><button className='dsb'>Dashbord</button></NavLink>
            </div>
        </>
    )
}

export default EmpForm
