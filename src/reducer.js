export const initialState =  {
        basket : [],
        user:null
}
export const getTotalbasket = (basket)=>{
    return basket?.reduce((amount,item)=> item.price+amount,  0 )
}


const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET" :
        return{
            ...state,
            basket:[...state.basket,action.item]
            
        }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id===action.id
            );
            let newbasket = [...state.basket];
            if(index>=0)
            {
                newbasket.splice(index,1)
            }
            else{
                console.warn(`cant remove this ${action.id} item `)
            }
            return  {
                ...state,basket:newbasket
            }
        case "SET_USER" :
            return {...state,
                user: action.user}
                 

        default:
            return state;
    }
}
export default reducer