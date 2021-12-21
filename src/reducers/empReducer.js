import { ADD_EMP, DELETE_EMP, EDIT_EMP, SEARCH_FILTER } from "../actions/type";

const initialState = {
    list: [],
    tempList: [],
    searchInput: "",
}

const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMP:
            // const { id, data } = action.payload;
            console.log("list", state.list);
            return {
                list: [...state.list, action.payload.data],
                tempList: [...state.tempList, action.payload.data]
            };
        
        case DELETE_EMP:
            const newList = state.list.filter((elem, i) => i !== action.index)
            const tempList = state.tempList.filter((elem, i) => i !== action.index)
            return {
                ...state,
                list: newList,
                tempList: tempList
            }
        
        case EDIT_EMP:
            return {
                ...state,
                
            }
        
        // case "EDIT_EMP":        
        //     return {
        //         ...state.list
                
        //     }
        
        // case "UPDATE_EMP":
        //     return {
        //         ...state,
        //         list : state.list.map((elem, i) => i === action.id ? {...i, data : action.data, editing: false} : i )
        //     }
        
        case SEARCH_FILTER:
            console.log("action.data", action.data);
            return {
                ...state,
                searchInput: action.data,
                list : state.tempList.filter((elem) => elem.name.startsWith(state.searchInput) || elem.salary.toString().startsWith(state.searchInput))
            }
        default: 
            return {
                ...state
            }
    }
    
}

export default empReducer