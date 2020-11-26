import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {Hello} from './components/Hello/Hello';
import * as fdc3 from 'openfin-fdc3';

fdc3.getSystemChannels().then((chs)=>{
    chs[0].join().then(()=>{
        fdc3.broadcast({
            "type" : "fdc3.instrument",
            "name" : "Apple",
            "id" : 
            {  
                "ticker" : "aapl",
                "ISIN" : "US0378331005",
                "CUSIP" : "037833100",
                "FIGI" : "BBG000B9XRY4",
            }
        });
    })
})


ReactDOM.render(<Hello/>, document.getElementById('app'));
