import React, {useState} from 'react'
import {useFormik} from 'formik'

const EmpForm = () => {
    // const [inputData, setinputData] = useState()
    const formik = useFormik({
        initialvalue: {
            name: "",
            phone: "",
            profession: "",
            salary: "",
            email: "",
            psw: "",
            cpsw: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        },
    });
    return (
        <>  <h1>Employee Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    
                    <input type="text"
                        id='name'
                        name='name'
                        // onChange={formik.handleChange}
                        // value={formik.values.name}
                        placeholder='Enter Employee Name'
                        autocomplete="off" /><br /><br />
                    
                    
                    <input type="number"
                        id='phone'
                        name='phone'
                        // onChange={formik.handleChange}
                        // value={formik.values.phone}
                        placeholder='Enter Phone Number'
                        autocomplete="off" /><br /><br />
                    
                    
                    <input type="text"
                        id='profession'
                        name='profession'
                        // onChange={formik.handleChange}
                        // value={formik.values.profession}
                        placeholder='Enter Proffesion'
                        autocomplete="off" /><br /><br />
                    
                    
                    <input type="number"
                        id='salary'
                        name='salary'
                        // onChange={formik.handleChange}
                        // value={formik.values.salary}
                        placeholder='Enter Salary'
                        autocomplete="off" /><br /><br />
                    
                    
                    <input type="email"
                        id='email'
                        name='email'
                        // onChange={formik.handleChange}
                        // value={formik.values.email}
                        placeholder='Enter Email'
                        autocomplete="off" /><br /><br />  
                    
                    
                    <input type="password"
                        id='psw'
                        name='psw'
                        // onChange={formik.handleChange}
                        // value={formik.values.psw}
                        placeholder='Enter Password'
                        autocomplete="off" /><br /><br />  
                    
                    
                    <input type="password"
                        id='cpsw'
                        name='cpsw'
                        // onChange={formik.handleChange}
                        // value={formik.values.cpsw}
                        placeholder='Enter Confirm Password'
                        autocomplete="off" /><br /><br />  
                    
                    <button className='signin' type='submit'>Submit</button>&nbsp;&nbsp;
                    <button className='cancel' type='reset'>Cancel</button>
                </div>
            </form>
        </>
    )
}

export default EmpForm

