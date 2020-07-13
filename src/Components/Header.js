import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            {/*<li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>Hi there! I'm an {city}-based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <strong><h3><i>Portfolio in progress... Check back soon!</i></h3></strong>

          {/*   <strong><h3><i>"I know that you're afraid... You're afraid of change. I don't know the future. I didn't come here
             to tell you how this is going to end. I came here to tell you how it is going to begin. 
             I am going to hang up this phone and then I am going to show these people what you don't
              want them to see. I'm going to show them a world without rules or control -
               without borders or boundaries - A world where ANYTHING is possible. Where we go from there is a
               choice I leave to you." - Neo, The Matrix</i></h3></strong> */}
            <ul className="social"> 
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
