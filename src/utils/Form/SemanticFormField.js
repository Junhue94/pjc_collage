import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import styles from './SemanticFormField.css';

/**
 * Semantic UI Form Field
 * @see https://gist.github.com/mairh/233f6b4ffdbaaed8ec75bb0bef087e8f
 */
const SemanticFormField = ({
    input, type, label, placeholder, meta: { touched, error, warning }, as: As = Input, ...props
}) => (
    <Form.Field>
        <As
            {...props}
            {...input}
            value={input.value}
            type={type}
            label={label}
            placeholder={placeholder}
        />
        {touched && error && <span className={styles.Error}><i>{error}</i></span>}
        {touched && warning && <span className={styles.Warning}><i>{warning}</i></span>}
    </Form.Field>
);

export default SemanticFormField;
