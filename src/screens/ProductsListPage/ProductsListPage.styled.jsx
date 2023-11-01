import styled from 'styled-components';
import { RiUserSettingsLine } from 'react-icons/ri';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminIcon = styled(RiUserSettingsLine)`
  font-size: 2.7em;
  color: #e29d34d4;

  @media screen and (max-width: 670px) {
    max-width: 35px;
  }
`;
