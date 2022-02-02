import styled from 'styled-components';
import { theme } from 'styles/theme';

export const DevitLineWrapper = styled.div`
  border-left: 1px solid ${theme.gray};
  border-right: 1px solid ${theme.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.75em;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  padding: 0em 1em;
  height: 53px;
`;

export const H1 = styled.h1`
  font-size: 1.35rem;
`;