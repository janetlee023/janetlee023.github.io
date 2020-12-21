// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <section id="contactForm" className="contactFormArea">
            <div>
                <form
                    className = "col-sm-12 col-md-6 col-lg-4"
                    onSubmit={this.submitForm}
                    action="https://formspree.io/f/xyybbkdb"
                    method="POST"
                >
                    {/* <!-- add your custom form HTML here --> */}
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <label>Message:</label>
                    <input type="text" name="message" />
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>
            </div>
        </section>

    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
export default ContactForm;
