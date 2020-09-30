// js， components写法
import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Button } from 'antd';

class AboutApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'test',
    };
  }

  componentDidMount() {
    console.log(this.props.location.params && this.props.location.params.id)
    console.log('123')
  }

  onClick = () => {
    console.log('234')
    this.props.history.push({
      pathname: '/test',
      params: {
        id: '234'
      }
    });
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <p>this is about page</p>
        <Link to="/test">goto {text}</Link>
        <Button onClick={this.onClick}>Click</Button>
      </div>
    )
  }
}
export default AboutApp