import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { purpleTheme } from './';

interface AppThemeProps {
    children: any
}

export const AppTheme = ({ children }: AppThemeProps) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            {children}
        </ThemeProvider>
    )
}