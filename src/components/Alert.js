import React from 'react'

function Alert(props) {
    const textConvert = (word) => {
        let char = word.charAt(0).toUpperCase();
        let finalWord = char + word.substring(1);
        return finalWord;

    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{textConvert(props.alert.type)}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;
