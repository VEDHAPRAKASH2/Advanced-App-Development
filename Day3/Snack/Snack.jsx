import React from 'react';
import { Alert , Snackbar } from '@mui/material';
const Snack = (props) => {
    
    return (
        <Snackbar anchorOrigin={{ vertical:'bottom' , horizontal:'center' }} open={props.open} onClose={props.handleClose} key={'bottom-center'} autoHideDuration={2000}>
            <Alert severity={props.severity} variant="filled" sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    );
};

export default Snack;