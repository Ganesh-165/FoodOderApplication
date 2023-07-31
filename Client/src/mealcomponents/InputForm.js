import React from "react";

const InputForm = React.forwardRef((props,ref)=>{
    return(
        <div className=' flex items-center mb-2'>
            <lable htmlFor={props.input.id} className='font-bold'>{props.lable}</lable>
            <input {...props.input} ref={ref} className="w-12 rounded bg-teal-100 pl-2 ml-1"/>
        </div>
    )
});
export default InputForm;