import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const LoadingSpinner = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
};


export default LoadingSpinner;