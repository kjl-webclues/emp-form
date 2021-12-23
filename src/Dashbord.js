import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { deleteEmp, searchFilter } from './actions/action'

const Dashbord = () => {

    const list = useSelector(state => state.empReducer.list)
    const searchInput = useSelector(state => state.empReducer.searchInput)    
    const dispatch = useDispatch()

    return (        
        <>  
            <div>                
                    <h1> welcome to dashbord</h1>            
                    <NavLink to="/"><button className='home'>Home</button></NavLink>
                    <div>
                        <input className='search'  type="search" placeholder='Search Employee...' value={searchInput} onChange={(e) => dispatch(searchFilter(e.target.value))}/>
                    </div>                
            </div>                                                 
                
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
                           <td><NavLink to={`/?id=${elem.id}`}><button className='editbtn'>Edit</button></NavLink></td>
                           <td><button className='delbtn' onClick={() => dispatch(deleteEmp(index))}>Delete</button></td>
                        </tr>
                        </div>                        
                    )
                })
            }                                    
        </>
    )
}
export default Dashbord
