const defaultState = {
    users: []
}
export function usersReducer (state = defaultState , action) {
    let copy = JSON.parse(JSON.stringify(state.users))
    if (action.type == 'Add') {
        copy.push(action.payload);
        return {...state, users: copy}
    } else if (action.type == 'del') {
        copy = copy.filter(el => {
            return el.id != action.payload
        })  
    } else {
        return state;
    }

    
}