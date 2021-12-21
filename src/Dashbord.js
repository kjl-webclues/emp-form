import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { deleteEmp, editEmp, searchFilter } from './actions/action'

const Dashbord = () => {

    const list = useSelector(state => state.empReducer.list)
    const searchInput = useSelector(state => state.empReducer.searchInput)
    const dispatch = useDispatch()



    return (        
        <>  
            <div>
                <header>
                    <h1> welcome to dashbord</h1>            
                    <NavLink to="/"><button className='home'>Home</button></NavLink>
                    <div>
                        <input className='search'  type="text" placeholder='Search Employee...' value={searchInput} onChange={(e) => dispatch(searchFilter(e.target.value))}/>
                    </div>
                </header>
        </div>    
            <table>
                   
                {/* <thead>                    
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Proffession</th>
                        <th scope='col'>Salary</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Confirm Password</th>
                        <th scope='col'>Action</th>
                    </tr>       
                </thead> */}
               <tbody>  
            {
                list.map((elem, index) => {
                    return (
                        <div className='eachItem' key={index}> 
                        <tr>
                            <td>{elem.name}</td>
                            <td>{elem.phone}</td>
                            <td>{elem.profession}</td>
                            <td>{elem.salary}</td>
                            <td>{elem.email}</td>
                            <td>{elem.password}</td>
                            <td>{elem.confirmpassword}</td>                        
                            <td><button className='editbtn' onClick={() => dispatch(editEmp(index))}>Edit</button></td>
                            <td><button className='delbtn' onClick={() => dispatch(deleteEmp(index))}>Delete</button></td></tr>    
                        </div>                        
                    )
                })
            }
                    </tbody>
            </table>    
        </>
    )
}
export default Dashbord
