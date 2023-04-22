import { createStyles } from '@mui/material';

export const styles: Record<string, any> = createStyles({
    button: {
      minHeight: 50,
      minWidth: 100,
      fontSize: 16,
      margin: 1
    },
    buttonSearch: {
        minHeight: 40,
        minWidth: 100,
        fontSize: 14,
    },
    main: {
			marginTop: 10,
			display: 'flex',
			gap: 10,
			flexDirection: 'column',
			alignItems: 'center',
			with: '100%'
		},
    box: { 
      display: 'flex',
			gap: 10,
			flexDirection: 'column',
			alignItems: 'center',
			width: 500,
			minHeight: 450
		},
});
