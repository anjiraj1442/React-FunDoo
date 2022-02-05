import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import "../dashboard/Dashboard.scss";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import keep from "../../images/keep.png";
import Takenote from "../../components/takenote/Takenote";
import Displaynote from "../../components/displaynote/Displaynote";
import SearchIcon from "@mui/icons-material/Search";
import Notes from "../notes/Notes";
import { useNavigate } from "react-router-dom";

import Popover from "@mui/material/Popover";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Archive from "../Archive/Archive";
import Deleted from "../Deleted/Deleted";
import NoteService from "../../servises/NoteService";
const noteService = new NoteService();

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "white",

  boxShadow: "0px",
  border: "1px solid lightgray",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
   const navigate = useNavigate();
  const [email, setemail] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
       navigate("/login");
    }
  }, []);

  const getuseremail = (mailid) => {
    setemail(mailid);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const opens = Boolean(anchorEl);
  const id1 = opens ? "simple-popover" : undefined;
  let iconlist = [
    {
      icons: <LightbulbOutlinedIcon />,
      icnText: "Notes",
    },
    {
      icons: <NotificationsOutlinedIcon />,
      icnText: "Reminder",
    },

    {
      icons: <EditOutlinedIcon />,
      icnText: "Edit Labels",
    },

    {
      icons: <ArchiveOutlinedIcon />,
      icnText: "Archive",
    },

    {
      icons: <DeleteOutlinedIcon />,
      icnText: "Bin",
    },
  ];

  // const signout = () => {
  //   localStorage.clear();
  //   // navigate("/signin");
  // };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeroutes = (icnText) => {
    switch (icnText) {
      case "Archive":
         navigate("/archive");
        break;
      case "Notes":
        navigate("/");

        break;
      case "Bin":
         navigate("/trash");
        break;
      default:
         navigate("/");
        break;
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className="headbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <div className="keepword">
            <img src={keep} alt="this is keep"></img>

            <Typography variant="h6" noWrap component="div">
              Keep
            </Typography>
          </div>
          <div className="search-bar">
            <div className="logosearch">
              <SearchIcon />
            </div>
            <input
              className="input-search"
              type="text"
              placeholder="Search"
            ></input>
          </div>
          <div className="nav-right-icon">
            <RefreshOutlinedIcon />
            <ViewStreamOutlinedIcon />
            <SettingsOutlinedIcon />
            <AppsOutlinedIcon />
            <AccountCircleOutlinedIcon
              onClick={handleOpen}
              variant="contained"
              aria-describedby={id1}
            />
            <Popover
              id={id1}
              open={opens}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
              <div className="accountdetails">
                  <div className="detail">
                    <div className="imagedetails"></div>

                    <h4>Anji raj Ardula</h4>
                    <div>anjirajardula@gmail.com</div>
                    <div className="manageaccount">Manage your account</div>
                  </div>
                  <div className="addaccount">
                    <div className="logo">
                      <PersonAddAltOutlinedIcon />
                      Add another account
                    </div>
                  </div>
                </div>
              </Typography>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List>
          {iconlist.map((text, index) => (
            <ListItem
              button
              key={text.icnText}
              onClick={() => changeroutes(text.icnText)}
            >
              <ListItemIcon>{text.icons}</ListItemIcon>
              <ListItemText primary={text.icnText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography className="content-note" component="span">
          <Routes>
            <Route exact path="/" element={<Notes />} />
            <Route exact path="/archive" element={<Archive />} />
            <Route exact path="/trash" element={<Deleted />} />
          </Routes>
          
        </Typography>
      </Box>
    </Box>
  );
}
