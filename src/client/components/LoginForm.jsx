import React, { PropTypes } from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const LoginForm = ({ className, onSubmit, onChange }) => (
  <Card className={className}>
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">CSH Demo: Login</h2>
      <small>
        This login will expire in 20 minutes.
      </small>
      <div>
        <TextField
          floatingLabelText="Username"
          type="text"
          name="username"
          id="login-user"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          id="login-pass"
          onChange={onChange}
        />
      </div>
      <div>
        <RaisedButton
          type="submit"
          label="Login"
          className="raised-button cta-primary"
          id="login-submit"
          primary
        />
      </div>
    </form>
  </Card>
);

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;
