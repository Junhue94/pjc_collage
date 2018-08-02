import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { Form, Segment } from 'semantic-ui-react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import SemanticFormField from '../../utils/Form/SemanticFormField';
import { required } from '../../utils/Form/validation';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.props.initialize({
            username: null,
            password: null,
        });
    }

    render() {
        const { handleSubmit, createLogin } = this.props;

        return (
            <Aux>
                <Form onSubmit={handleSubmit(createLogin)}>
                    <Segment>
                        <Field
                            fluid
                            name="username"
                            type="text"
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            component={SemanticFormField}
                            as={Form.Input}
                            autoComplete="off"
                            validate={required}
                        />
                        <Field
                            fluid
                            name="password"
                            type="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            component={SemanticFormField}
                            as={Form.Input}
                            autoComplete="off"
                            validate={required}
                        />
                        <Form.Button
                            color="red"
                            fluid
                            size="large"
                        >Log In
                        </Form.Button>
                    </Segment>
                </Form>
            </Aux>
        );
    }
}

const clearForm = (result, dispatch) => {
    dispatch(reset('loginForm'));
};

export default reduxForm({
    form: 'loginForm',
    onSubmitSuccess: clearForm,
})(LoginForm);
