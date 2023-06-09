import {useState} from 'react';

interface useFormProps {
  initialValues: object;
  validate: Function;
  onSubmit: Function;
  validateOnChange: boolean;
}

function useForm(props: useFormProps) {
  const [values, setValues] = useState(props.initialValues);
  const [errors, setErrors] = useState({});

  const handleValidate = (): void => {
    const error = props.validate(values);
    for (const [key, value] of Object.entries(error)) {
      setErrors({[key]: value});
    }
  };

  const handleChange = (event: any): void => {
    const id = event.target.id;
    const value = event.target.value;

    setValues(pre => {
      return Object.assign(pre, {
        [id]: value,
      });
    });

    if (props.validateOnChange) {
      handleValidate();
    }
  };

  const handleReset = (): void => {
    setValues(props.initialValues);
  };

  const handleSubmit = (): void => {
    props.onSubmit(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleReset,
    handleSubmit,
  };
}

useForm.defaultProps = {
  initialValues: {},
  validate: () => ({}),
  onSubmit: (values: object) => console.log('values', values),
  validateOnChange: true,
};

export default useForm;
