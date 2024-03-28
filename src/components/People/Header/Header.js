import Button, { ButtonIconStyled } from 'components/Button';
import Text from 'components/Text';
import { ReactComponent as IconUser } from 'theme/icons/user.svg';
import {
  PeopleHeaderStyled,
  PeopleHeaderCountStyled,
  PeopleHeaderPrimaryStyled,
} from './Header.styled';

export function PeopleHeader(props) {
  const { employeeCount, onClick } = props;
  return (
    <PeopleHeaderStyled>
      <div>
        <PeopleHeaderPrimaryStyled>
          <Text as="h1" size="h2">
            People
          </Text>
          {employeeCount !== null && (
            <PeopleHeaderCountStyled>
              {employeeCount} {employeeCount > 1 ? 'members' : 'member'}
            </PeopleHeaderCountStyled>
          )}
        </PeopleHeaderPrimaryStyled>
      </div>
      <div>
        <Button onClick={onClick} id="create-person">
          <ButtonIconStyled aria-hidden>
            <IconUser />
          </ButtonIconStyled>
          Add member
        </Button>
      </div>
    </PeopleHeaderStyled>
  );
}
