import React, { Component } from "react";
import { Modal } from "react-bootstrap";
// import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "../scss/light-slider.scss";
// import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class EducationModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      // const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      const courses = this.props.data.courses;

      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        // if (this.props.data.images) {
        //   var img = images.map((elem, i) => {
        //     return <div key={i} data-src={elem} />;
        //   });
        // }
      }
      if (this.props.data.courses) {
        var courseInfo = courses.map((course, i) => {
          return (
            <div>
              <p4>
                <b>
                {course.courseName}
                </b>
              </p4>
              <br />
              {course.desc}
            </div>
          )
        });
      }
    }



    
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto">
            <h2>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h2>
            <p className="modal-description">{description}</p>
            {courseInfo}
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto" style = {{paddingTop: 20}}>{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default EducationModal;
