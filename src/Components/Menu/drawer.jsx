// import React from "react";
// import clsx from "clsx";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     drawer: {
//       // backgroundColor: "#101010",
//     },
//     list: {
//       width: "30vw",
//       height: "100%",
//       backgroundColor: "#101010",
//       [theme.breakpoints.down("xs")]: {
//         width: "50vw",
//       },
//     },
//     drawer_link: {
//       textDecoration: "none",
//       color: "white",
//     },
//     fullList: {
//       width: "auto",
//       border: "1px",
//     },
//     button: {
//       display: "none",
//       [theme.breakpoints.down(800)]: {
//         display: "inline-block",
//       },
//     },
//   })
// );

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === "top" || anchor === "bottom",
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         <ListItem>
//           <ListItemIcon>
//             <CloseIcon
//               onClick={toggleDrawer(anchor, false)}
//               style={{ cursor: "pointer", color: "white" }}
//             />
//           </ListItemIcon>
//         </ListItem>
//         {["Home", "About", "Service", "Portfolio", "Contact"].map(
//           (text, index) => (
//             <a href={`#${text}`} className={classes.drawer_link}>
//               <ListItem button key={text}>
//                 <ListItemText primary={text} />
//               </ListItem>
//             </a>
//           )
//         )}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {["left"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button
//             onClick={toggleDrawer(anchor, true)}
//             style={{ color: "white" }}
//             className={classes.button}
//           >
//             <MenuIcon />
//           </Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             className={classes.drawer}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
