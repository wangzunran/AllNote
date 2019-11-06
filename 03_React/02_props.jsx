import React,{Component} from 'react';
import PropsChild from './03_props'
export default class PropsFather extends Component{

    render(){
        return (
            <div>
               <div>
                  <p>父组件</p>
                   <PropsChild title="这是父组件里面的title"></PropsChild>
               </div>
            </div>
        );
    }
}