import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'semantic-ui-react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import SemanticFormField from '../../utils/Form/SemanticFormField';
import { required, email } from '../../utils/Form/validation';

class PersonalDetailsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Aux>
                <Form>
                    <Field
                        name="name"
                        label="Name"
                        component={SemanticFormField}
                        as={Form.Input}
                        type="text"
                        validate={required}
                    />
                    <Field
                        name="class"
                        label="Class"
                        component={SemanticFormField}
                        as={Form.Input}
                        type="text"
                        validate={required}
                    />
                    <Field
                        name="email"
                        label="Email"
                        component={SemanticFormField}
                        as={Form.Input}
                        type="text"
                        validate={email}
                    />
                    <Form.Button
                        color="green"
                    >Submit
                    </Form.Button>
                </Form>
            </Aux>
        );
    }
}

export default reduxForm({
    form: 'personalDetailsForm',
})(PersonalDetailsForm);
