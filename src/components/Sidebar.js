
import React, { useState } from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Collapse,
  Divider,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  Folder as FolderIcon,
  SpatialTrackingOutlined as SpatialTrackingOutlined,
  DesignServicesOutlined as DesignServicesOutlined,
  WebhookOutlined as WebhookOutlined,
  Diversity3Outlined as Diversity3Outlined,
  AutoGraphOutlined as AutoGraphOutlined,
  Add as AddIcon,
  Dashboard as DashboardIcon,
  CloseFullscreenOutlined as CloseFullscreenOutlined,
  HelpOutlined,
  GroupAddOutlined
} from '@mui/icons-material';

const SidebarItem = ({ label, IconComponent, items, depthStep = 10, depth = 0 }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <ListItem
        button
        onClick={items ? handleClick : null}
        sx={{
          pl: `${depth > 0 ? depth * depthStep : 2}px`,
          '& .MuiListItemIcon-root': {
            minWidth: '36px',
            justifyContent: 'center',
          },
        }}
      >
        {IconComponent && (
          <ListItemIcon>
            <IconComponent />
          </ListItemIcon>
        )}
        <ListItemText 
          primary={label} 
          primaryTypographyProps={{ fontWeight: '600' , fontSize: "14px"  ,color:"#4D4D4D"}} 
        />
        {items ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
      {items && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((subItem, index) => (
              <SidebarItem
                key={`${subItem.label}_${index}`}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
const Sidebar = () => {
  
  return (
       <Card sx={{
      maxWidth: '100%', height: '100vh' ,
      display: 'flex', flexDirection: 'column',
      overflow: 'auto' 
    }}>
      
   <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
  <img src={'/images/logoname.jpg'} alt="Logo" style={{ width: 40, height: 40, marginRight: '8px', borderRadius: '10%' }} />
  <Box sx={{ display: 'flex', flexDirection: 'column',}}>
    <Typography variant="subtitle1" color="textSecondary" sx={{  fontWeight:"700",fontSize:"14px" }}>INC</Typography>
    <Typography variant="h6" sx={{  fontWeight:"700",fontSize:"18px"  }}>InnovateHub</Typography>
  </Box>
</Box>
<Divider />

      <List component="nav">
        <SidebarItem label="Design Team" IconComponent={DesignServicesOutlined} />
        <SidebarItem label="Marketing Team" IconComponent={SpatialTrackingOutlined} />
        <SidebarItem label="Development Team" IconComponent={WebhookOutlined} />
       
        <ListItem button sx={{ '& .MuiListItemIcon-root': { minWidth: '36px', justifyContent: 'center' },  pl: 1,  color:"grey"}}>
          <ListItemIcon>
            <AddIcon />
         
          </ListItemIcon>
          <ListItemText   primaryTypographyProps={{ fontWeight: '600', fontSize: "14px" ,color:"grey"}} primary="Create a team" />
        </ListItem>
      </List>
      <Divider />
      <List
        subheader={
          <ListSubheader component="div">
            FOLDERS
          </ListSubheader>
        }
      >
        <SidebarItem
          label="Products"
          IconComponent={FolderIcon}
          items={[
            { label: 'Roadmap', IconComponent: CloseFullscreenOutlined},
            { label: 'Feedback', IconComponent: DashboardIcon },
            { label: 'Performance', IconComponent: AutoGraphOutlined },
            { label: 'Team', IconComponent: Diversity3Outlined},
            
          ]}
        />
         <SidebarItem
          label="Sales"
          IconComponent={FolderIcon}
          items={[
            { label: 'Roadmap', IconComponent: CloseFullscreenOutlined},
            { label: 'Feedback', IconComponent: DashboardIcon },
            { label: 'Performance', IconComponent: AutoGraphOutlined },
            { label: 'Team', IconComponent: Diversity3Outlined},
            
          ]}
        />
         <SidebarItem
          label="Design"
          IconComponent={FolderIcon}
          items={[
            { label: 'Roadmap', IconComponent: CloseFullscreenOutlined},
            { label: 'Feedback', IconComponent: DashboardIcon },
            { label: 'Performance', IconComponent: AutoGraphOutlined },
            { label: 'Team', IconComponent: Diversity3Outlined},
          
          ]}
        />
      </List>
      <List
  sx={{
    marginTop: 'auto', 
    pb: 2, 
  }}
>
  <ListItem button sx={{ 
    '& .MuiListItemIcon-root': { 
      minWidth: '36px', 
      justifyContent: 'center' 
    },
    pl: 1, 
  }}>
    <ListItemIcon>
      <GroupAddOutlined />
    </ListItemIcon>
    <ListItemText 
      primary="Invite Team" 
      primaryTypographyProps={{ fontWeight: '600', fontSize: "14px" ,color:"#4D4D4D"}} 
    />
  </ListItem>
  <ListItem button sx={{ 
    '& .MuiListItemIcon-root': { 
      minWidth: '36px', 
      justifyContent: 'center' 
    },
    pl: 1, 
  }}>
    <ListItemIcon>
      <HelpOutlined />
    </ListItemIcon>
    <ListItemText 
      primary="Help" 
      primaryTypographyProps={{ fontWeight: '600', fontSize: "14px" ,color:"#4D4D4D"}} 
    />
  </ListItem>
</List>

    </Card>
  );
};

export default Sidebar;
