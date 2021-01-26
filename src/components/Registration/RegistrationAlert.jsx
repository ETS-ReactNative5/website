import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';
import GA from 'util/GoogleAnalytics';

export default class RegistrationAlert extends Component {

    static get propTypes() {
        return {
            className: PropTypes.string,
        }
    }

    static get defaultProps() {
        return {
            className: '',
        };
    }

    render() {
        const classNames = classnames('RegistrationAlert', this.props.className);

        return (
            <div className={classNames}>
              <h3>
                General Registration is open until <b>February 28th! </b> 
                Sign up today to ensure your spot!
              </h3>
              <div className="buttons">
                <div className="button">
                  <Button variant="outline-light" href={`https://forms.gle/oNH7tx4kufoKSAoa9`} size="lg" onClick={this._trackStudentRegistrationFormClick}>
                    Student Registration Form
                  </Button>
                </div>
                <div className="button">
                  <Button variant="outline-light" href={`https://forms.gle/p3CxXh2dZjMJWd7V9`} size="lg" onClick={this._trackTeacherRegistrationFormClick}>
                    Teacher Registration Form
                  </Button>
                </div>
              </div>
            </div>
        );
    }

    _trackStudentRegistrationFormClick() {
      GA.trackEvent({
          category: 'RegistrationAlert',
          action: 'Click',
          label: 'Student Registration Form'
      });
    }

    _trackTeacherRegistrationFormClick() {
      GA.trackEvent({
          category: 'RegistrationAlert',
          action: 'Click',
          label: 'Teacher Registration Form'
      });
  }

}
