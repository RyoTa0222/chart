import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';
import { TextInput } from 'react-desktop/macOs';


export class Push_data extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
              {quarter: 1, earnings: 10},
              {quarter: 2, earnings: 40},
              {quarter: 3, earnings: 20},
              {quarter: 4, earnings: 50}
            ]
          };
        this.pushData=this.pushData.bind(this);
    }


    pushData(){
        this.props.pushData(this.refs.newData.value);
        this.refs.newData.value='';
        
    }
    


    render(){
    return(
        <div className="input_container">
            <div className="textarea">
            <TextInput ref="newData"
                       defaultValue=""
                       width="100"
                       type="number"
            />
            </div>
            
            <Button color="blue" 
                    onClick={this.pushData}
                    marginLeft={20}>
            追加
            </Button>
        </div>
    )
}
}