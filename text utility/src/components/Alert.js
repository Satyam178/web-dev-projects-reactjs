
import React from 'react'

function Alert(props) {

  return (
    
    //props.alert && is working because all JSX is converted to JS calls
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`}>
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert"></button> */}
<strong>{props.alert.type}</strong>  {props.alert.msg}
</div>
    
  )
}

export default Alert;