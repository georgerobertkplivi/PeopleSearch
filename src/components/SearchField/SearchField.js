import {
  SearchFieldContainerStyled,
  SearchFieldInputStyled,
  SearchFieldIconStyled,
} from './SearchField.styled';
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

/**
 * 
 * @param {string} props.value: value of the search field
 * @param {string} props.setValue: callback to set the value
 */
export default function SearchField(props) {
  const { value, setValue, ...rest } = props;
  return (
    <SearchFieldContainerStyled>
      <SearchFieldIconStyled>
        <IconSearch width="20" height="20" />
      </SearchFieldIconStyled>
      <SearchFieldInputStyled
        {...rest}
        type="text"
        role="searchbox"
        value={value}
        onChange={(event) => setValue?.(event.target.value)}
      />
    </SearchFieldContainerStyled>
  );
}
