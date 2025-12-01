'use client';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface NavigationCardProps {
  href: string;
  label: string;
  title: string;
  icon: React.ReactElement;
}

export function NavigationCard({ href, label, title, icon }: NavigationCardProps) {
  const styledIcon = React.cloneElement(icon, {
    sx: {
      fontSize: 48,
      mb: 1,
      color: 'primary.main',
      ...(icon.props.sx || {}),
    },
  });

  return (
    <Card sx={{ width: 240 }}>
      <CardActionArea component={Link} href={href}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          {styledIcon}
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
