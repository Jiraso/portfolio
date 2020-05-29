import React from 'react';

import Hero from '../components/Hero'
import Content from '../components/Content'


function AboutPage(props){
    return(
        <div>
        <Hero title={props.title}></Hero>
        <Content>
            <p>Hello there, my name is James Ian Ragasa Solima and I am a full stack developer with experience in HTML5, CSS3,    
            React.js, C#, ASP.NET, ADO.NET, Restless API's, TSQL, MSSQL  
            </p>
            <p>My goals and dreams are simple: continue to grow as a developer while contributing towards meaningful projects</p>
            <p></p>
            <p>When I am not building with or learning code, you can find me
                 <a href="https://www.twitch.tv/jiraso" alt="twitch.tv/jiraso"> gaming</a>, 
                 <a href="https://www.instagram.com/jiraso.gg/" alt="instagram"> traveling</a>, 
                 cooking 
                 or 
                 drawing</p>
        </Content>
    </div>
    )
}
export default AboutPage