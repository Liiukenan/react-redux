export const dispatchToProps=(dispatch)=>{
    return {
        handleChange(e){
            const action={
                type:'changeInput',
                value:e.target.value
            }
            dispatch(action);

        },
        handleClick(){
            const action={
                type:'addItem'
            }
            dispatch(action);
        },
        deleteItem(index){
            const action={
                type:'deleteItem',
                index
            }
            dispatch(action);
        }
    }
}
export const stateToProps = (state) => {
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}