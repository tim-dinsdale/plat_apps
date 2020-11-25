import * as React from 'react';
import * as Styles from './Hello.module.scss';

interface HelloProps {    
}

export const Hello: React.FC<HelloProps> = (props) => {
    return (
        <div className={Styles['hello']}> 
            <h1>Hi, OpenFin!</h1>
            <img src='https://avatars1.githubusercontent.com/u/1569661?s=200&v=4'/>
        </div>
    )
}