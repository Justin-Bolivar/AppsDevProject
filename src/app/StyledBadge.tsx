import React from 'react'
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

export default function StyledBadge() {
    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 0,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 10px',
        },
      }));
  return StyledBadge
}
