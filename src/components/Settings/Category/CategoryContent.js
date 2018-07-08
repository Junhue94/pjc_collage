import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Header, Form } from 'semantic-ui-react';

import Aux from '../../../utils/Auxiliary/Auxiliary';
import SemanticFormField from '../../../utils/Form/SemanticFormField';
import { required } from '../../../utils/Form/validation';

/**
 * Category Content Component
 */
class CategoryContent extends Component {
    componentWillMount() {
        const { categoryContent } = this.props;
        // Document form object and set initial values
        this.props.initialize({
            id: categoryContent._id,
            name: categoryContent.name,
        });
    }
    
    render() {
        const { handleSubmit, handlePatchCategory } = this.props;
        
        return (
            <Aux>
                <Header as="h4" icon="edit" content="Edit Category" />
                <Form onSubmit={handleSubmit(handlePatchCategory)}>
                    <Form.Group>
                        <Field
                            name="name"
                            component={SemanticFormField}
                            as={Form.Input}
                            type="text"
                            validate={required}
                        />
                        <Form.Button
                            content="Save Changes"
                            color="green"
                            width={3}
                        />
                    </Form.Group>
                </Form>
            </Aux>
        );
    }
}

export default reduxForm({
    form: 'editCategoryForm',
})(CategoryContent);
