import React from 'react';

//高阶组件(高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件)。
export const HandleInputChange = (ComposeComponent) => class extends ComposeComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        startDate: "",
        endDate: "",
        chartType: "1",
        comment: ""
      }
    };
    this.handleChange =  this.handleChange.bind(this);
  }
  // 3
  componentDidMount() {
    //console.log('componentDidMount from HandleInputChange.js');
  }
  // 3

  /**
   * input输入框设置value
   * @param e
   */
  handleChange(e) {
    let inputs = {...this.state.inputs};
    inputs[e.target.name] = e.target.value;
    this.setState({
      inputs
    });
  }


  render() {
    return (
      <ComposeComponent {...this.props} {...this.state} handleChange={this.handleChange} />
    );
  }
}
export default HandleInputChange;
