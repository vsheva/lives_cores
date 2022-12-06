import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button as MuiButton, ButtonProps, Popover as MuiPopover } from '@mui/material';
import styled, { css } from 'styled-components';
import theme from '@theme';

export const Picker = styled(Box)`
  display: flex;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.palette.support.main}`};
  border-radius: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;
`;

const Button = styled(props => <MuiButton color="inherit" {...props} />)`
  border-radius: 0;
  padding: 0;
  height: 100%;
  opacity: 0.7;
`;

export const ArrowButton = styled(Button)<{ disabled: boolean }>`
  visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  padding: ${({ theme }) => theme.spacing(0, 0.7)};
`;

export const PickerButton = styled(Button)`
  gap: ${({ theme }) => theme.spacing(1)};
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing(0, 1)};
  height: 100%;
`;

const arrowButtonStyles = css`
  opacity: 0.5;
`;

export const LeftArrowIcon = styled(KeyboardArrowLeft)`
  ${arrowButtonStyles}
`;

export const RightArrowIcon = styled(KeyboardArrowRight)`
  ${arrowButtonStyles}
`;

export const Popover = styled(props => (
  <MuiPopover
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    PaperProps={{
      sx: {
        padding: theme.spacing(1.5, 1),
        minWidth: 160,
      },
    }}
    {...props}
  />
))``;

export const WeekDays = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.2)};
`;

type WeekDayButtonProps = { active?: boolean };

export const WeekDayButton = styled(({ active, ...props }: ButtonProps & WeekDayButtonProps) => (
  <MuiButton
    color={active ? 'primary' : 'inherit'}
    variant={active ? 'contained' : 'text'}
    {...props}
  />
))<WeekDayButtonProps>`
  flex: ${({ theme }) => theme.spacing(1)};
  padding: 4px 24px;
  font-weight: ${props => (props.active ? 600 : 400)};
`;
