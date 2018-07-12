import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Form } from 'semantic-ui-react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import SemanticFormField from '../../utils/Form/SemanticFormField';
import { required, email } from '../../utils/Form/validation';

class PersonalDetailsForm extends Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            name: null,
            class: null,
            email: null,
        });
    }

    render() {
        const { handleSubmit, createPersonalDetails } = this.props;

        return (
            <Aux>
                <Form onSubmit={handleSubmit(createPersonalDetails)}>
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

const clearForm = (result, dispatch) => {
    dispatch(reset('personalDetailsForm'));
};

export default reduxForm({
    form: 'personalDetailsForm',
    onSubmitSuccess: clearForm,
})(PersonalDetailsForm);
