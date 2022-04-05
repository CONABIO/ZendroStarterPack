import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';
import { Overwrite } from 'utility-types';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import {
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  OutlinedInput,
} from '@mui/material';

interface SelectItem {
    id: string;
    text: string;
  }
  
  interface SelectFieldProps {
    className?: string;
    id?: string;
    label?: ReactNode
    onChange?: (itemId: string) => void;
    selected: string | null;
  }

export default function SelectField(props: SelectFieldProps): ReactElement {
  const classes = useStyles();

    
  const handleOnChange = (event: SelectChangeEvent<string>): void => {
    if (props.onChange) props.onChange(event.target.value);
  };

  const items = [
    {id: 1, value: "inactivo",text: "Inactivo"},
    {id: 2, value: "activo",text: "Activo"},
    {id: 3, value: "robo",text: "Robo"},
    {id: 4, value: "descompostura",text: "Descompostura"}
  ]

  return (
    <FormControl className={clsx(classes.formControl, props.className ?? '')}>
      <InputLabel variant="outlined" id={`${props.id}-label`}>
        {props.label}
      </InputLabel>
      <Select
        className={classes.select}
        id={props.id}
        label={props.label}
        labelId={`${props.id}-label`}
        value={props.selected ? props.selected : ''}
        onChange={handleOnChange}
        input={<OutlinedInput label={props.label} />}
        data-cy={`${props.id}`}
        MenuProps={{
          className: classes.menu,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
      >
        {items.map((item) => [
          <MenuItem
            className={classes.menuItem}
            key={item.value}
            value={item.value}
            disableRipple
            data-cy={`${props.id}-${item.id}`}
          >
            {item.text}
          </MenuItem>,
        ])}
      </Select>
    </FormControl>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    formControl: {
      minWidth: theme.spacing(60),
    },
    select: {
      '& .MuiOutlinedInput-input': {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(3, 9, 3, 5),
        '& .MuiSvgIcon-root': {
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(4),
        },
      },
    },
    menu: {
      '& .MuiPaper-root': {
        marginTop: theme.spacing(1),
      },
      '& .MuiList-root': {
        maxHeight: theme.spacing(124),
        minWidth: theme.spacing(60),
      },
    },
    helperText: {
      width: '100%',
      marginTop: theme.spacing(1),
      padding: theme.spacing(0, 4, 0, 4),
    },
    menuItem: {
      ...theme.typography.body1,
      '& .MuiSvgIcon-root': {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(4),
      },
    },
  })
);
