import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';
import { TextInput } from 'react-desktop/macOs';


export class Delete_data extends Component {
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
        this.deleteData=this.deleteData.bind(this);
    }


    deleteData(){
        this.props.deleteData(this.refs.deleteChart.value);
        this.refs.deleteChart.value='';
    }
    


    render(){
    return(
        <div className="input_container">
            <div className="textarea">
            <TextInput ref="deleteChart"
                       defaultValue=""
                       width="100"
                       type="number"
            />
            </div>
            
            <Button color="blue" 
                    onClick={this.deleteData}
                    marginLeft={20}>
            削除
            </Button>
        </div>
    )
}
}