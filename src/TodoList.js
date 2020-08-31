import React from 'react'
import {connect} from 'react-redux'
import {dispatchToProps,stateToProps} from './store/dispatchToProps'
const TodoList=(props)=>{
    let {inputValue,handleChange,handleClick,list,deleteItem}=props;
    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {list.map((item,index)=><li key={index} onClick={()=>deleteItem(index)}>{item}</li>)}
            </ul>
        </div>
    );
}
// 映射state ，相当于翻译
export default connect(stateToProps,dispatchToProps)(TodoList);