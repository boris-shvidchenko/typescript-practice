import { createContext, useReducer } from 'react';

// Initial State Type
type ItemType = {
    name: string, 
    img: string, 
    key: string, 
    price: number
  }
  
type initialStateType = {
    items: ItemType[],
}

// Initial State
const initialState: initialStateType = {
    items: [],
}

// Action type
type actionType = {
    type: string,
    payload?: ItemType[] | any,
}

// Context
const StoreContext = createContext<{
    state: initialStateType, 
    dispatch: React.Dispatch<any>
}>({
    state: initialState, 
    dispatch: () => null
});

function reducer(state: initialStateType, action: actionType) {
    switch (action.type) {
        case 'UPDATE_ITEMS':
            return {...state, items: [...state.items, action.payload]};
            // return {...state, count: state.count + 1}; This works, meaning the above return has an issues with how I am adding new data
        default:
            return state;
    }
}

function Provider({ children }: any) {
    // Reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

// Exports
export { StoreContext, Provider };