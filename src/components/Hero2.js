import React, { Component } from 'react'

export default class Hero2 extends Component {
  render() {
    const imgSize = {
      width: '900px'
      }
    const imgSize2 = {
      width: '900px',
      marginTop: '2.5rem'
      }
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
              <img className="img-fluid" style={imgSize} src="https://ncte.org/wp-content/uploads/2018/08/Graphic-Novel-Collage.png" alt=""/>
          
              <img className="img-fluid" style={imgSize2} src="https://hdwallpaperext.com/blog/wp-content/uploads/2019/03/a1-1-850x478.jpg" alt=""/>
              <button type="button" className="btn btn-primary btn-lg my-5">Large button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
