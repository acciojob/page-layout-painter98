import React from 'react';

function PageLayout(props){
    console.log(props.footer)
    return (
        <>
            <h1>{props.header}</h1>
            <p>{props.children}</p>
            <p>{props.icon} {props.footer}</p>
        </>
    )
}
export default PageLayout;