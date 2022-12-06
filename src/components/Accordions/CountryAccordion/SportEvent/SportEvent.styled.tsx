import { Typography } from '@mui/material';
import styled from 'styled-components';

export const SportEvent = styled(props => (
  <Typography variant="subtitle1" component="span" {...props} />
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  opacity: 0.8;
`;
