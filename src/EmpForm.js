import React, {useEffect} from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addEmp, editEmp, updateEmp } from '../src/actions/action'
import queryString from 'query-string'
import {useHistory} from 'react-router-dom'



const EmpForm = () => {
    const { id } = queryString.parse(window.location.search);    
    console.log("id", id);

    const history = useHistory()
    
    const selectEditId = useSelector(state => state.empReducer.selectEditId)

    const stateForm = useSelector(state => state.empReducer.stateForm)

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
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
        onSubmit: (values) => {
            if (id) {
                dispatch(updateEmp(id, values))
                history.push('/dashbord')
            } else {
            dispatch(addEmp(values))
                formik.handleReset()
                history.push('/dashbord')
             console.log("values", values)
            }
        }

    });

    useEffect(() => {
        if (id) {
            dispatch(editEmp(id))
        }        
    }, [])

    useEffect(() => {
        if (id && stateForm) {
            formik.setValues(stateForm)
        }
    }, [stateForm])    

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
                    /><br />
                    
                    <input type="number" 
                        name="phone"
                        placeholder='Enter phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    /><br />
                    
                    <input type="text" 
                        name='profession'
                        placeholder='Enter Profession'
                        onChange={formik.handleChange}
                        value={formik.values.profession}
                    /><br />
                    
                    <input type="number" 
                        name='salary'
                        placeholder='Enter salary'
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                    /><br />
                    
                    <input type="text" 
                        name='email'
                        placeholder='Enter Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    /><br />
                    
                    <input type="password" 
                        name='password'
                        placeholder='enter password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    /><br />
                    
                    <input type="password" 
                        name='confirmpassword'
                        placeholder='enter confirm password'
                        onChange={formik.handleChange}
                        value={formik.values.confirmpassword}
                    /><br/>

                    {!selectEditId ? (
                        <button className='signin' type='submit'>Submit</button>) :

                            (<button className='signin' type='update'>Update</button>)}
                    
                    <button onClick={formik.handleReset} className='cancel' type='reset'>Cancel</button>
                </form>
                <NavLink to="/dashbord"><button className='dsb'>Dashbord</button></NavLink>                
            </div>
        </>
    )
}

export default EmpForm
