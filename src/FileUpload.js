import React, { Component } from 'react';

class FileUpload extends Component{
  constructor(){
    super();
    this.state = {
      uploadValue: 0
    };
  }



  render(){
    return(
      <div>
        <br/>
        <progress value={this.props.uploadValue} max="100"></progress>
        <br/>
        <input type="file" onChange={this.props.onUpload} />
        <br/>
        <img width="320" src={this.state.picture} />
      </div>
    );
  }

}

export default FileUpload;
