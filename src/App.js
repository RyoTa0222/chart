import React, { Component } from 'react';
// import {Button} from 'react-desktop/windows';
import './App.css';
import {Input_data} from './input_data.js';
import {Push_data} from './push_data.js';
import {Delete_data} from './delete_data.js';
import { VictoryBar, VictoryChart,VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

//親コンポーネント
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      data: [
        {quarter: 1, earnings: 10},
        {quarter: 2, earnings: 40},
        {quarter: 3, earnings: 20},
        {quarter: 4, earnings: 50}
      ]
    };
    this.changeData=this.changeData.bind(this);
    this.pushData=this.pushData.bind(this);
    this.deleteData=this.deleteData.bind(this);
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.state.data
      });
    }, 5000);
  }
  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  //既存データの変更
  changeData(i, value){
    const change_data = this.state.data.slice();
    change_data[i] = {
      quarter: i, earnings: value
    };
    this.setState(
        {data: change_data}
    )
    this.refs.onData.value='';
}

//データの追加
pushData(value){
  //追加
  this.state.data.push({
    quarter: this.state.data.length+1, earnings: Number(value)
  });
  //更新
  this.setState({
    data : this.state.data
});
}

//データの削除
deleteData(value){
   // 削除
   this.state.data.splice(Number(value)-1, 1);
   // 保存
   this.setState({
     data : this.state.data
   });
   console.log(this.state.data);
}

  render() {
    return (
      <div className="content">
        <h1 className="title">CHART</h1>
      
      <div className="flex_content">
            <div>
            <VictoryChart
            domainPadding={40}
            theme={VictoryTheme.material} 
            >
            <VictoryAxis
            tickValues={this.state.data.length}
            tickFormat={this.state.data.length}
            />
            <VictoryAxis
            dependentAxis
            />
            
            <VictoryStack
            colorScale={"warm"}>
            <VictoryBar
            data={this.state.data}
            x="quarter"
            y="earnings"
            labels={(d) => d.earnings}
            animate={{
              onExit: {
                duration: 1000,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE"
                })
              }
            }}
            />
            </VictoryStack>
            </VictoryChart>
            </div>

            <div>
            <p>既存のデータの変更には、以下に数字を入力してください。</p>
              <Input_data changeData={this.changeData}/>
              <p>データの追加には、以下に数字を入力してください。</p>
              <Push_data pushData={this.pushData}/>
              <p>削除したいデータの横軸の値を入力してください。</p>
              <Delete_data deleteData={this.deleteData}/>
            </div>
      </div>
  
      </div>
    );
  }
}

export default App;
