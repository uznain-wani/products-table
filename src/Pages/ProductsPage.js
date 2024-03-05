import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import EnhancedTable from '../components/ProductsTable';
import Sidebar from '../components/Sidebar';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Drawer } from '@mui/material';

function ProductsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const theme = useTheme();
  const matches =  useMediaQuery('(max-width:1198px)');

 

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      {/* Drawer for small screens */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }} 
      >
        <Sidebar />
      </Drawer>

      <Grid container spacing={1}>
        {/* Permanent sidebar for large screens */}
        {!matches && (
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        )}

        <Grid item xs={matches ? 12 : 10}>
          <Paper elevation={3} sx={{ minHeight: '80vh' }}>
            <EnhancedTable toggleSidebar={toggleSidebar} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductsPage;
