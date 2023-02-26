import { Grid, Button } from "@mui/material"

interface PropsButton {
    children: React.ReactNode;
    onClick: () => void;
    type?: 'submit' | 'button';
    disabled?: boolean
}

export const ButtonComponent = (props: PropsButton) => {

    const { onClick, type, children, disabled } = props;

    return (
        <Button
            variant='contained'
            fullWidth
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}

ButtonComponent.defaultProps = {
    type: 'submit',
    disabled: false,
}
