import { TextField } from '@mui/material';

interface InterfaceFromGroup {
    value: string;
    label: string;
    placeholder?: string;
    type?: string;
    onChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    errors?: string | undefined;
}

export const FieldComponent = (props: InterfaceFromGroup) => {

    const { value, label, placeholder, type, onChange, errors } = props;

    return (
        <TextField
            label={label}
            name={label}
            type={type}
            value={value}
            placeholder={placeholder}
            fullWidth
            onChange={(e) => {
                console.log('e', e.target.value);
                console.log('label', label);
                onChange(label, e.target.value)
            }}
            error={!!errors}
            helperText={errors}
        />
    )
}

FieldComponent.defaultProps = {
    type: 'text',
    placeholder: '',
}