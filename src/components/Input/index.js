import React, { useEffect, useRef } from 'react';

import { string, any, objectOf } from 'prop-types';
import { useField } from '@unform/core';

export default function Input({ component, name, placeholder, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const Component = component || <input />;

  return (
    <Component
      ref={inputRef}
      defaultValue={defaultValue}
      placeholder={error || placeholder}
      error={error || false}
      {...rest}
    />
  );
}

Input.defaultProps = {
  placeholder: '',
  component: null,
};

Input.propTypes = {
  name: string.isRequired,
  component: objectOf(any),
  placeholder: string,
};
