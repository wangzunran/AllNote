import React,{Component} from 'react'
export default class eventDemo extends Component{
    render(){
        return(
            <div>

                <div>
                    <p>一般使用的事件绑定的写法有三种</p>
                    {/*1.第一种 利用bing绑定，这种比较少用*/}
                    {/*//在constructor里面利用bing绑定继承this，解决方法的this指向问题*/}
                    {/*constructor(props){*/}
                    {/*super(props);*/}
                    {/*this.showTitleFun = this.showTitleFun.bind(this)*/}
                    {/*}*/}
                    {/*showTitleFun(){*/}
                    {/*//执行某些操作*/}
                    {/*this.setState({})*/}
                    {/*}*/}
                    {/*//在DOM元素上直接使用*/}
                    {/*<button onClick = {this.showTitleFun}>不显示title</button>*/}

                    {/*2.第二种箭头函数写法(比较常用)*/}
                    {/*showTitleFun = () => {*/}
                    {/*//执行某些操作*/}
                    {/*this.setState({});*/}
                    {/*}*/}
                    {/*//在DOM元素上直接使用*/}
                    {/*<button onClick={ this.showTitleFun }>不显示title</button>*/}

                    {/*3.第三种直接使用箭头函数返回一个函数*/}
                    {/*showTitle(){*/}
                    {/*//执行某些操作*/}
                    {/*this.setState({});*/}
                    {/*};*/}
                    {/*<button onClick={ () => this.showTitle() }>不显示title</button>*/}
                </div>
            </div>
        )
    }
}