import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link, useLocation } from 'react-router-dom';

function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const options = [
    { label: 'Docs', path: '/docs', icon: <RateReviewIcon /> },
    { label: 'Get All Reviews', path: '/get-all-reviews', icon: <RateReviewIcon /> },
    { label: 'Get Review by ID', path: '/get-review-by-id', icon: <RateReviewIcon /> },
    { label: 'Post A Review', path: '/post-a-review', icon: <RateReviewIcon /> },
    { label: 'Update Review by ID', path: '/update-review-by-id', icon: <RateReviewIcon /> },
    { label: 'Delete Review by ID', path: '/delete-review-by-id', icon: <RateReviewIcon /> },
    { label: 'Sort the Data', path: '/sort-the-data', icon: <SortIcon /> },
    { label: 'Filter by Rating', path: '/filter-by-rating', icon: <FilterListIcon /> },
    { label: 'Pagination Reviews', path: '/pagination-reviews', icon: <FilterListIcon /> }
  ];

  const DrawerList = () => (
    <Box sx={{ width: 280, padding: '30px 20px' }} role="presentation" onClick={toggleDrawer(false)}>
      <h2 style={{ color: '#435b88', marginBottom: '25px' }}>API Navigation</h2>
      <List>
        {options.map((option) => {
          const isActive = location.pathname === option.path;
          return (
            <ListItem key={option.label} disablePadding>
              <ListItemButton
                component={Link}
                to={option.path}
                sx={{
                  marginBottom: '12px',
                  backgroundColor: isActive ? '#435b88' : '#f5f5f5',
                  color: isActive ? 'white' : '#333',
                  borderRadius: '12px',
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: isActive ? '#435b88' : '#e0e0e0',
                  }
                }}
              >
                <ListItemIcon sx={{ color: isActive ? 'white' : '#435b88' }}>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div style={{
      backgroundColor: '#435b88',
      position: 'sticky',
      top: '0px',
      zIndex: 50, // ✅ Added z-index
      height: '100px',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    }}>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          backgroundColor: '#f5f5f5',
          color: '#435b88',
          fontWeight: 'bold',
          borderRadius: '25px',
          padding: '10px 22px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          }
        }}
      >
        Explore API Docs
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList()}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
