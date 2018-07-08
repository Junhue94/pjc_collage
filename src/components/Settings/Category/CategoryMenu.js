import React, { Component } from 'react';
import { Card, Menu, Icon, Form, Button, Modal } from 'semantic-ui-react';
import { Field, reduxForm, reset } from 'redux-form';

import SemanticFormField from '../../../utils/Form/SemanticFormField';
import { required } from '../../../utils/Form/validation';
import styles from './CategoryMenu.css';

/**
 * Category Menu Component
 */
class CategoryMenu extends Component {
    componentWillMount() {
        // Document form object and set initial values
        this.props.initialize({
            name: null,
        });
    }
    
    onGetCategory = (e, { id }) => {
        this.props.handleGetCategory(id);
    };
    
    renderMenuItem() {
        return this.props.categoryList.map(category => (
            <Menu.Item
                key={category._id}
                id={category._id}
                onClick={this.onGetCategory}
            >{category.name}
                <Modal
                    trigger={<Icon name="delete" color="red" className={styles.DeleteIcon} />}
                    size="small"
                >
                    <Modal.Header>Confirm delete category, {category.name}?</Modal.Header>
                    <Modal.Actions>
                        <Button color="green">Yes</Button>
                        <Button color="red">No</Button>
                    </Modal.Actions>
                </Modal>
            </Menu.Item>
        ));
    }
    
    render() {
        const { handleCreateCategory, handleSubmit } = this.props;
    
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Categories</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Menu
                        vertical
                        fluid
                    >{this.renderMenuItem()}
                    </Menu>
                    <Form onSubmit={handleSubmit(handleCreateCategory)}>
                        <Form.Group>
                            <Field
                                name="name"
                                component={SemanticFormField}
                                as={Form.Input}
                                type="text"
                                placeholder="Add New Category"
                                validate={required}
                            />
                            <Form.Button
                                color="blue"
                            >Add
                            </Form.Button>
                        </Form.Group>
                    </Form>
                </Card.Content>
            </Card>
        );
    }
}

const clearForm = (result, dispatch) => {
    dispatch(reset('newCategoryForm'));
};

export default reduxForm({
    form: 'newCategoryForm',
    onSubmitSuccess: clearForm,
})(CategoryMenu);
