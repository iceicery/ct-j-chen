import React from "react";
import "./Form.css";

export default class Form extends React.Component {
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
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xrgoowqb"
                method="POST"
                className="form"
            >
                <label>Name:</label>
                <input type="name" name="name" className="form__input" />
                <label>Email:</label>
                <input type="email" name="email" className="form__input" />
                <label>Message:</label>
                <textarea type="text" name="message" className="form__message">
                </textarea>
                {status === "SUCCESS" ? <p>Thanks, I've got your message. <br />
If you didn't hear from me in two days, please email me directly to chien-ting dot chen at nasa dot gov. </p> : <button className="form__submit">Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
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