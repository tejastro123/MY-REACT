import React from 'react'

function Alert(props) {
    const Capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div tyle={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong> <strong>: {props.alert.msg}</strong>
        </div>}
        </div>
    )
}

export default Alert