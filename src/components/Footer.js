import React, { Component } from 'react'

export default class Footer extends Component {
 
  render() {
    const footerStyle = {
      height: '200px',
      backgroundColor: '#333',
      color: '#fff'
      }
    return (
      <div>
        <footer style={footerStyle}>
          <div className="container text-center p-5">
          <h2>This is your footer</h2>
          </div>
        
        </footer>
      </div>
      

    )
  }
}
