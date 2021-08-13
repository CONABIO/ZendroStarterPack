import { ReactElement } from 'react';
import { Overwrite } from 'utility-types';
import TextBoxInput, { TextBoxInputProps } from '@/components/textbox-input';

type ObjectFieldProps = Overwrite<
  TextBoxInputProps,
  {
    onChange?: (value: string | null) => void;
    value: string | null;
  }
>;

export default function ObjectField({
  onChange,
  value,
  ...props
}: ObjectFieldProps): ReactElement {
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  if(typeof value == "object")
    value = JSON.stringify(value,null,2);
  return <TextBoxInput {...props} onChange={handleOnChange} value={value ?? ''} />;
}
