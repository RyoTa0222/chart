import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';
import { TextInput } from 'react-desktop/macOs';

export class Input_data extends Component {
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
    }


    changeData(i, value){
        this.setState({
            quarter: Number(i+1), 
            earnings: this.refs.onData.value
        });
        console.log(Number(value[i]));
        this.refs.onData.value='';
        
    }

render(){
    return(
        <ul className="input_list">
            {this.state.data.map((data, i) => {
                return <li key={i} className="change_list">
                    <div className="textarea">
                        <span>{i+1} : </span>
                        <TextInput ref="onData"
                                   defaultValue=""
                                   width="100"
                                   type="number"
                        />
                    </div>
                        <Button color="blue" 
                                onClick={
                                  //  () => console.log(Number(this.refs.onData.value))
                                   (event) => this.changeData(event, i)
                                }
                                marginLeft={20}>
                        変更
                        </Button>
                    
                    </li>
            })}
        </ul>
    )
}
}