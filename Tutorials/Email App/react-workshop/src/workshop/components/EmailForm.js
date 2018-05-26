import React, {Component} from 'react';

import './EmailForm.css';

export default class EmailForm extends Component {
  state = {
    from: "",
    message: ""
  }

  _updateFormFieldState = (name, e) => {
    this.setState({[name]: e.target.value});
  }

  _handleFromChanged = (e) => {
    this._updateFormFieldState("from", e);
  }

  _handleMessageChanged = (e) => {
    this._updateFormFieldState("message", e);
  }

  render() {
    let {from, message} = this.state;

    return (
      <form className="email-form">
        <fieldset>
          <label htmlFor="from">From:</label>
          <input
            type="email"
            id="from"
            value={from}
            placeholder="jill@me.com"
            onChange={this._handleFromChanged}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            placeholder="[Insert message here]"
            onChange={this._handleMessageChanged}
          />
        </fieldset>
      </form>
    );
  }
}
