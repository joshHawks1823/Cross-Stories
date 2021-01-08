import React, { Component } from 'react'

export default class Hero extends Component {
  render() {

    const imgSize = {
      width: '280px'
      }
    return (
      <div>
        <div className="jumbotron hero">
          <div className="container">
          <h1 className="display-4 text-center">Name Here</h1>
         <hr/>
           <div className="row">
             <div className="paragraph  col-md-4">
           <h3 className="text-center">Text here:</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit ullam incidunt alias? Error, autem exercitationem? Molestiae ab dicta blanditiis fuga iusto ullam debitis.</p>
            </div>
           <div className="left-side col-md-4">
           <img style={imgSize} className="img-fluid" src="https://www.gemstonepub.com/content/images/thumbs/0001110_the-overstreet-comic-book-price-guide-48-glflash-hc_450.jpeg" alt=""/>
           <img src="" alt=""/>
         </div>
         <div className="right-side col-md-4">
      <form action="" className="">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" placeholder="Name Please" id="name"/>
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" placeholder="Email Please" id="email"/>
      </div>
      <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
        </form>
        </div>
      </div>
         </div>

      </div>
      </div>
    )
  }

}
