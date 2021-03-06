import React, { Component } from 'react';
import FormGroup from '../common/FormGroup';
import { FormControl } from 'react-bootstrap';

class Static extends Component {
    render() {
        let { value, name, displayName, help, error, touched, fieldLayout } = this.props;
        let formGroupProps = { error, touched, displayName, name, help, fieldLayout };

        return (
            <FormGroup {...formGroupProps}>
                <FormControl.Static>
                    { value }
                </FormControl.Static>
            </FormGroup>
        )
    }
}

export default Static;