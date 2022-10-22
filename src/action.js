export const add =(value,image)=> async dispatch=>
{
    dispatch(
        {
            type:"add",
            payload:{value,
                image}
        }
    )
}

export const remove =(value)=> async dispatch=>
{
    dispatch(
        {
            type:"remove",
            payload:value
        }
    )
}