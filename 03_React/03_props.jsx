import React,{Component} from 'react';

//class型的组件
// export default class PropsChild extends Component{
//     //函数型组件使用
//     render(){
//         return (
//             <div>
//                 <p>子组件</p>
//                 <p>这是子组件调用父组件的值{this.props.title}</p>
//             </div>
//         );
//     }
// }

//函数型组件
// export default function PropsChild(props){
//     return(
//         <div>
//             {props.title}
//         </div>
//     )
// }
//接收参数的结构写法
export default function PropsChild({title}){
    return(
        <div>
            {title}
        </div>
    )
}
