import React, { Component, Fragment } from "react";


export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    comment: "",
    formErrors: []
  };

  handleInputOnChange(event) {
    this.setState((state) => ({ [event.target.name]: event.target.value }));
  }

  validateForm() {
    const {name, email, comment} = this.state;
    const errorMessages = [];

    if (name === "") {
      errorMessages.push("Name cannot be null");
    } 

    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      errorMessages.push("Not a valid email");
    }
    if (comment === "") {
      errorMessages.push("Comment cannot be null");
    }

      this.setState((state) => ({ formErrors: errorMessages }));

    

  }

  getFormErrorsDisplay() {
    return this.state.formErrors.map(formError => <p>{formError}</p>)
  }

  render() {
    const {name, email, comment, formErrors} = this.state;
    return (
      <Fragment>
        <div className="contact_page">
          <div>
          {this.getFormErrorsDisplay()}
          </div>
          <form action="/action_page.php" onsubmit="return validateForm()">
            <label className="fnamee" for="fname">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => this.handleInputOnChange(e)}
            />

            <label className="emaill" for="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="Your Email Address"
              onChange={(e) => this.handleInputOnChange(e)}
            />

            <label className="commentt" for="comment">
              Comments
            </label>
            <input
              type="text"
              id="comment"
              name="comment"
              value={comment}
              placeholder="Additional Comments"
              onChange={(e) => this.handleInputOnChange(e)}
            />
            <input type="button" value="Submit" onClick={() => this.validateForm()} />
          </form>
        </div>
      </Fragment>
    );
  }
}
