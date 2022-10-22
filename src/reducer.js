
const initial=[]

export default function reducer(state=initial,action)
{ 
const {type,payload}=action;
switch(type)
{
    case  "add":
    return [...state,payload]
    case "remove":
                return state.filter(product=>product.value!==payload.value)
    default:
        return state;
}
}