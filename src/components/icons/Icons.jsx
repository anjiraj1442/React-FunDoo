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
import NoteService from "../../servises/NoteService";
 const Notes = new NoteService()


function Icons(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleOpen1 = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchor(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchor);
  const id = open ? 'simple-popover' : undefined;
  const id1 = open1 ? 'simple-popover' : "";
  const colrs = ["#f28b82", '#fbbc04', '#fff475', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8','#ccff90', '#a7ffeb',  '#e6c9a8']
  const addColor = (data)=>{
    if(props.mode==="tokenote"){
     props.modone(data)

    }
    else if (props.mode=="display"){
      let dataa={
        "_id":props.notes._id,
        "color":data,
      }
      Notes.updatenotes(dataa).then((result)=>{
          props.modone()
      }).catch((err)=>{
        console.log(err);
      })

    }
  }
  const addarchieve=()=>{
    if(props.mode==="takenote"){
      props.archieveChange()
      }
      else if(props.mode==="display"){
        props.archieveChange()
      }
  }
  const addisdelete=()=>{
    if(props.mode==="display"){
      props.isdeleteChange()
      }
  }
  
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
            return <div className='icon-pop' style={{ backgroundColor: colorcode }} onClick={()=>addColor(colorcode)}></div>
          }
          )}
      </div>
    </Typography>
  </Popover>
    
    
    <icons4><PhotoOutlinedIcon htmlColor="grey"/></icons4>
    <icons5><ArchiveOutlinedIcon htmlColor="grey"onClick={()=>addarchieve()}/></icons5>
    <icons6 className='moreoption'><MoreVertOutlinedIcon htmlColor="grey" onClick={handleOpen1} variant="contained" aria-describedby={id1}/></icons6>
    <Popover
        id={id1}
        open={open1}
        anchorEl={anchor}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >

        <Typography sx={{ p: 1 }}>
          <div className='iconpopover' onClick={addisdelete}>
          
            Delete Note
          </div>
        </Typography>
      </Popover>
  </div>;
}

export default Icons;