import React,{ Fragment } from 'react';

const Friend = ({nom, age, children}) => {
    return (
        <Fragment>
        <h2>Friend : {nom.toUpperCase()} : {age}</h2>
        { children ? <p>{children}</p> : <Fragment /> }
        </Fragment>
    )
}

export default Friend