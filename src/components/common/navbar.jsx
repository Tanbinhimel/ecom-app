import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import Badge from "@material-ui/core/Badge";

const NavBar = ({ cartLength }) => {
  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container className="mx-2">
        <Link className="navbar-brand" to="/">
          Ecom-app
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              <ShoppingCartRoundedIcon />
              <Badge
                badgeContent={cartLength !== 0 ? cartLength : null}
                color="primary"
              />
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function SimpleBadge() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Badge badgeContent={4} color="primary">
//         <MailIcon />
//       </Badge>
//       <Badge badgeContent={4} color="secondary">
//         <MailIcon />
//       </Badge>
//       <Badge badgeContent={4} color="error">
//         <MailIcon />
//       </Badge>
//     </div>
//   );
// }
