import { FilterTextStyled, FilterCheckboxStyled, FilterLabelStyled } from './Filter.styled';

export default function Filter(props) {
  const { children, value, setValue, option, ...rest } = props;
  return (
    <FilterLabelStyled>
      <FilterTextStyled>{children}</FilterTextStyled>
      <FilterCheckboxStyled
        {...rest}
        type="checkbox"
        checked={value && value.includes(option)}
        onChange={(event) => {
          const checked = event.currentTarget.checked;
          const res = [...value];
          if (checked) {
            res.push(option);
            setValue(res);
          } else {
            setValue(res.filter((item) => item !== option));
          }
        }}
      />
    </FilterLabelStyled>
  );
}
