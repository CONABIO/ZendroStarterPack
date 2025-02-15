import { ReactElement, ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';

export interface TextBoxInputProps extends OutlinedInputProps {
  helperText?: {
    component?: React.ElementType;
    node: ReactNode;
  };
}

export default function TextBoxInput({
  error,
  helperText,
  label,
  ...props
}: TextBoxInputProps): ReactElement {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} error={error}>
      <InputLabel variant="outlined">{label}</InputLabel>
      <OutlinedInput {...props} label={label} fullWidth multiline 
          rows={8}/>
      {helperText && (
        <FormHelperText
          component={helperText.component ?? 'p'}
          className={classes.helperText}
        >
          {helperText.node}
        </FormHelperText>
      )}
    </FormControl>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    helperText: {
      width: '100%',
      marginTop: theme.spacing(1),
      padding: theme.spacing(0, 4, 0, 4),
    },
  })
);
