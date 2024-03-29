import React, { Component } from 'react'
import ReactPlayer from 'react-player'

 
export default class VideoPlayer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       play: true
    }
  }


  render () {
    return (
      <div className="VideoPlayer">
        <ReactPlayer url={this.props.link} playing={this.state.play} controls={true} muted width='100%' height='100%'/>
      </div>
    )
  }
}