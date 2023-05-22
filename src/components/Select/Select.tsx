import React from 'react';
import { angleDown } from '../../assets';
import { Container, SelectCustom } from './styles';

interface Option {
  id: string | number;
  name: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: Option[];
  disabled?: boolean;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  disabled,
  onChange,
}) => {
  return (
    <Container>
      <SelectCustom
        name={name}
        id={name}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="" selected disabled>
          {label}
        </option>

        {options?.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </SelectCustom>

      <img src={angleDown} alt="angle down" />
    </Container>
  );
};

export default Select;
