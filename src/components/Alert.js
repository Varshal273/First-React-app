import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  } 
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-3 p-2 px-3`} style={{position:'fixed',bottom:'0px',right:0,zIndex:10}} role="alert">
        <samp>{capitalize(props.alert.type)}</samp> : {props.alert.msg}
    </div>
  )
}

export default Alert