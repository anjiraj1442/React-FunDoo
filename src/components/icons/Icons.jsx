import React from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './Icons.scss'
import { Typography } from '@mui/material';
import { Popover } from '@mui/material';



function Icons() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const colrs = ["#f28b82", '#fbbc04', '#fff475', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8','#ccff90', '#a7ffeb',  '#e6c9a8']
  return <div className='icons'>
    <icons1><AddAlertOutlinedIcon htmlColor="grey" /></icons1>
    <icons2><PersonAddAlt1OutlinedIcon htmlColor="grey"/></icons2>
    <icons3><ColorLensOutlinedIcon htmlColor="grey" onClick={handleOpen} variant="contained" aria-describedby={id}/></icons3>
    <Popover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
  >

    <Typography sx={{ p: 1 }}>
      <div className='icon-popover'>
        {
          colrs.map((colorcode) => {
            return <div className='icon-pop' style={{ backgroundColor: colorcode }}></div>
          }
          )}
      </div>
    </Typography>
  </Popover>
    
    
    <icons4><PhotoOutlinedIcon htmlColor="grey"/></icons4>
    <icons5><ArchiveOutlinedIcon htmlColor="grey"/></icons5>
    <icons6><MoreVertOutlinedIcon htmlColor="grey"/></icons6>

  </div>;
}

export default Icons;