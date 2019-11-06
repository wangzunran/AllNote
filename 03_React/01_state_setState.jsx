import React,{Component} from 'react';
export default class StateDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            msg1:'这是state里面的msg',
            count:0
        }
    }
    //这里的写法跟上面写在构造函数constructor里面的this.state是一样的效果
    // state={
    //     msg1:'这是state里面的msg1'
    // };

    //生命周期
    componentDidMount(){
        // this.setState({
        //     count:this.state.count + 1
        // },() => {
        //     console.log(this.state.count,'这里是后面输出的 因为setState是异步的')//打印出来是1
        // });
        // console.log(this.state.count,'这里是先输出的')//打印出来还是0 因为setState是异步 页面上已经是1了

        //如果修改的state是依赖上一次更新的state，那么可以这样写
        // this.setState((prevState,prevProps) => {
        //     return {
        //         count:prevState.count + 1
        //     }
        // })
        //上面代码的简略写法
        this.setState((prevState,prevProps) => (
            {
                count: prevState.count + 1
            }
        ),()=>{
            console.log(this.state.count)
        });
        console.log(this.state.count)
    }

    render(){
        const msg='大家好，这种方式渲染不可以更改数据'
        return (
            <div>
                <div>
                    <p>state变量渲染和setState修改数据</p>
                    {msg}
                    <p>{this.state.msg1}</p>
                    <p>{this.state.count}</p>
                </div>

                <div>
                    <p>注意事项</p>
                    <p>setState是异步的，底层设计同一个生命周期函数会批量操作更新state</p>
                    <p>setState第二个参数是一个可选参数，传入一个回调函数可以获取到最新的state</p>
                    <p>当修改的state依赖上一次修改的state的值时，可使用一下这种方法修改</p>
                    {/*this.setState((prevState,prevProps) => ({*/}
                    {/*//prevState:上一次修改的状态state*/}
                    {/*//prevProps:上一次修改的属性props*/}
                    {/*count: prevState.count + 1*/}
                    {/*}),() =>{*/}
                    {/*//这里可以获取到最新的state*/}
                    {/*console.log(this.state.count);*/}
                    {/*})*/}
                </div>
            </div>
        );
    }
}