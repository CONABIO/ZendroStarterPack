import { useReducer } from 'react';
import { enUS as en, es, de } from 'date-fns/locale';
import { Overwrite } from 'utility-types';
import { InputBaseComponentProps } from '@mui/material';
import { MobileDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextInput, { TextInputProps } from '@/components/text-input';

type DateTimeFieldProps = Overwrite<
  TextInputProps,
  {
    onChange?: (value: Date | null) => void;
    value: Date | null;
  }
>;

const localeMap = { en, es, de };

export default function DateTimePicker({
  onChange,
  value,
  ...props
}: DateTimeFieldProps): React.ReactElement {
  const handleOnChange = (date: Date | null): void => {
    if (onChange) onChange(date);
  };

  const [showAdornment, toggleAdornment] = useReducer((state) => !state, true);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap['es']}>
      <MobileDatePicker 
        clearable
        mask="____-__-__"
        inputFormat="yyyy-MM-dd" //https://date-fns.org/v2.19.0/docs/format
        onChange={handleOnChange}
        disabled={props.disabled}
        onClose={toggleAdornment}
        onOpen={toggleAdornment}
        readOnly={props.readOnly || !onChange}
        renderInput={(textFieldProps) => {
          const inputProps = textFieldProps.inputProps as Omit<
            InputBaseComponentProps,
            'color'
          >;
          return (
            <TextInput
              {...inputProps}
              {...props}
              //endAdornment={showAdornment ? props.endAdornment : undefined}
              fullWidth
            />
          );
        }}
        value={value}
      />
    </LocalizationProvider>
  );
}
