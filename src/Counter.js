import React, { Component } from 'react';

class Counter extends Component {
    state={
        input:0,
        result:0,
        status:'',
        color:'-internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59))',
    }
    
    addCount= ()=>{/* + */
        this.setState({
            status:'+',
            color:'#eee',
        });
    }
    subtractCount= ()=>{/* - */
        this.setState({
            status:'-',
            color:'#eee',
        });
    }
    multiplyCount= ()=>{/* 乘以 */
        this.setState({
            status:'*',
            color:'#eee',
        });
    }
    divideCount= ()=>{/* 除以 */
        this.setState({
            status:'/',
            color:'#eee',
        });
    }
    initCount= ()=>{/* 歸零 */
        this.setState({
            input: 0,
            result: 0,
            status:'',
        });
    }
    
    inputNumber=(num)=>{
        if(this.state.status==="+"){
            this.setState({
                input: num,
                result: this.state.result+num,
            });
        }
        if(this.state.status==="-"){
            this.setState({
                input: num,
                result: this.state.result-num,
            });
        }
        if(this.state.status==="*"){
            this.setState({
                input: num,
                result: this.state.result*num,
            });
        }
        if(this.state.status==="/"){
            this.setState({
                input: num,
                result: this.state.result/num,
            });
        }
        if(this.state.status===""){
            this.setState({
                color:'#F00',
            });
            alert('請選擇-加減乘除');
        }
        
    }
    
    
    render() {
        return(
            <div className="counter">
                <div className="show_box">
                    <h1>{this.state.result}</h1>
                    <h2 className="do-what">{this.state.status}</h2>
                </div>
                <div className="input_area">
                    <div className="left_area">
                        <button onClick={this.addCount} className="left_button" style={{backgroundColor:this.state.color}}><p>+</p></button>
                        <button onClick={this.subtractCount} className="left_button" style={{backgroundColor:this.state.color}}><p>-</p></button>
                        <button onClick={this.multiplyCount} className="left_button" style={{backgroundColor:this.state.color}}><p>*</p></button>
                        <button onClick={this.divideCount} className="left_button" style={{backgroundColor:this.state.color}}><p>/</p></button>
                    </div>
                    <div className="right_area">
                        <button onClick={() => this.inputNumber(7)} className="right_button"><p>7</p></button>
                        <button onClick={() => this.inputNumber(8)} className="right_button"><p>8</p></button>
                        <button onClick={() => this.inputNumber(9)} className="right_button"><p>9</p></button>
                        <button onClick={() => this.inputNumber(4)} className="right_button"><p>4</p></button>
                        <button onClick={() => this.inputNumber(5)} className="right_button"><p>5</p></button>
                        <button onClick={() => this.inputNumber(6)} className="right_button"><p>6</p></button>
                        <button onClick={() => this.inputNumber(1)} className="right_button"><p>1</p></button>
                        <button onClick={() => this.inputNumber(2)} className="right_button"><p>2</p></button>
                        <button onClick={() => this.inputNumber(3)} className="right_button"><p>3</p></button>
                        <button onClick={() => this.inputNumber(0)} className="right_button"><p>0</p></button>
                        <button onClick={this.initCount}><p>C</p></button>
                    </div>
                </div>
                <div className="footer">React.js 計算機</div>
            </div>
        );
    }
}

export default Counter;