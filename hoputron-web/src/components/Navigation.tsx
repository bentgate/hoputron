'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hoputron
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            href="/"
            color={pathname === '/' ? 'primary' : 'inherit'}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/hops"
            color={pathname === '/hops' ? 'primary' : 'inherit'}
          >
            Hops
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}; 