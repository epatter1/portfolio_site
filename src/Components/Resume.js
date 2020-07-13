import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var industriesmessage = this.props.data.industriesmessage;

      var education = this.props.data.education.map(function (education) {
        return (
          <React.Fragment>
            <div key={education.school}>
              <h3>{education.school}</h3>
              <p className="info">
                {education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em>
              </p>
              <p>{education.description}</p>

              {education.videoUrl ? <div class="iframe-container"><iframe src={education.videoUrl} allowfullscreen>
              </iframe></div> : "  "}<br />
              
              <a
              href="https://elishapatterson.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Learn More!</button>
            </a>

            </div>
           
          </React.Fragment>
        );
      });

     var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p className="newline">{work.description}</p>
            {/*{work.videoUrl ? <div class="iframe-container"><iframe src={work.videoUrl} allowfullscreen>
     </iframe></div> : "  "} */}
            {work.videoUrl ? <div class="iframe-container"><iframe src={work.videoUrl} allowfullscreen>
            </iframe></div> : "  "}
              <p>{"    "}</p>
        </div>
      })
      var industries = this.props.data.industries.map(function(industries){
        var projectImage = 'images/tech/'+industries.image;
          return <div key={industries.name} className="columns feature-item">
                    <img className='industry' alt={industries.name} src={projectImage} />
                    <h5>{industries.name}</h5>
                    <p>{industries.description}</p>
                 </div>
        })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Desired Industries</span>
            </h1>
          </div>

          <div>
           <div className="nine columns main-col"><p className="lead center">{industriesmessage}</p></div>
				   <ul className="bgrid-quarters s-bgrid-thirds cf">
					  {industries}
					 </ul>
			  </div>
        </div>
      </section>
    );
  }
}

export default Resume;
