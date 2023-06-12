import React from 'react';

function PageLayout({header,children,footer}){
    return (
        <>
            <h1>{header}</h1>
            <p>{children}</p>
            <p>{footer}</p>
        </>
    )
}
export default PageLayout;