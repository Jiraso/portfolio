import React from 'react';

import Hero from '../components/hero/Hero';

function HomePage(props){
    return(
        <React.Fragment>
        <Hero
            title={props.title}
            subTitle={props.subTitle}
            text={props.text}/>
        </React.Fragment>
    )
}

export default HomePage