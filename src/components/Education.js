import React, { Component } from "react";
import EducationModal from "./EducationMocal";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var schools = this.props.resumeEducation.map(function (schools) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={schools.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(schools)}>
                <div>
                  <span className="project-date">{schools.startDate + ' - ' + schools.endDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {schools.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{color: "#1f1f1f"}}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto" style={{display: "flex", justifyContent: "space-evenly"}}>{schools}</div>
          </div>
          <EducationModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Education;
