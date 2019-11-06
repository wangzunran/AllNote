import React,{Component} from 'react'
export default class RenderDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTitle: true,
            goods:[
                { title: 'js零基础阶段',price: 19 },
                { title: 'vue基础',price: 29.8 },
                { title: 'react零基础进阶单页面项目实战',price: 29.8 },
            ]
        };
        setTimeout(() => {
            this.setState({
                showTitle:false
            })
        },3000)
    }
    render(){
        //条件渲染第二种写法
        //let result = this.state.showTitle ? <h2>{this.props.title}</h2> : null ;

        //条件渲染的第三种写法
        let result;
        if(this.state.showTitle){
            result = <h2>{this.props.title}</h2>
        }else{
            result = null;
        }
        return(
            <div>
                <div>
                    <h1>数据条件渲染和数据循环渲染展示</h1>
                    <p>
                        {/*条件渲染的第一种写法*/}
                        {/*{this.state.showTitle ? <h2>{this.props.title}</h2> : null }*/}
                        {/*条件渲染的第二种写法*/}
                        {/*{result}*/}
                    </p>
                    <p>
                        {/*数据循环渲染*/}
                        <ul>
                            {this.state.goods.map(good => {//good这个只是一个形参 写什么都可以 关键是传入的是goods
                                return (
                                    <li key={good.title}>
                                        <span>课程名称：{good.title}</span>
                                        <span>价格：{good.price}元</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </p>
                </div>
                <div>
                    <p>实战必备之条件渲染与数据循环</p>
                    <p>
                        {/*//1.条件渲染写法，一般使用三目表达式*/}
                        {/*//三目表达式写法*/}
                        {/*{this.state.showTitle ? <h1>{this.props.title}</h1> : null}*/}
                        {/*//优化上面三目表达式写法，先在render函数里面定义一个变量装载结果*/}
                        {/*let result = this.state.showTitle ? <h1>this.props.title</h1> : null;*/}
                        {/*{result}*/}

                        {/*//直接使用if else写*/}
                        {/*let result;*/}
                        {/*if(this.state.showTitle){*/}
                        {/*result = (*/}
                        {/*<h1>this.props.title</h1>*/}
                        {/*)*/}
                        {/*}else{*/}
                        {/*result = null*/}
                        {/*}*/}
                        {/*{result}*/}
                    </p>
                    <p>
                        {/*2.数据循环渲染写法*/}
                        {/*class App extends React.Component{*/}
                        {/*constructor(props){*/}
                        {/*super(props);*/}
                        {/*this.state = {*/}
                        {/*goods:[*/}
                        {/*{ title: 'js零基础阶段',price: 19 },*/}
                        {/*{ title: 'vue基础',price: 29.8 },*/}
                        {/*{ title: 'react零基础进阶单页面项目实战',price: 29.8 },*/}
                        {/*]*/}
                        {/*}*/}
                        {/*}*/}
                        {/*render(){*/}
                        {/*return(*/}
                        {/*<div>*/}
                        {/*<ul>*/}
                        {/*{this.state.goods.map(goods => {*/}
                        {/*return (*/}
                        {/*<li key={goods.title}>*/}
                        {/*<span>{goods.title}</span>*/}
                        {/*<span>{goods.price}元</span>*/}
                        {/*</li>*/}
                        {/*)*/}
                        {/*})}*/}
                        {/*</ul>*/}
                        {/*</div>*/}
                        {/*)*/}
                        {/*}*/}
                        {/*}*/}
                    </p>
                </div>
            </div>
        )
    }
}