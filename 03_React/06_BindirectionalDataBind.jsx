import React,{Component} from 'react'
export default class BindirectionalData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //在state里面定义一个变量绑定input的value属性
            inputVal: '我是input的初始值'
        }
    }
    //绑定input的OnChange事件
    inputValChange = (e) =>{
        this.setState=({
            inputVal: e.target.value,
        })
    };
    render(){
        return(
            <div>
                <p>实现react对于input的双向数据绑定</p>
                <input
                    type="text"
                    value={this.state.inputVal}
                    onChange={e=>this.inputValChange(e)}
                />
                {this.state.inputVal}
            </div>
        )
    }

}