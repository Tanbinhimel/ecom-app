import React from "react";
// import Badge from "@material-ui/core/Badge";

const Cart = ({ cart }) => {
  return (
    <div>
      <div className="display-4">
        Cart <h1 className="badge badge-primary display-4">{cart.length}</h1>
      </div>

      {cart.map((product) => (
        <div className="row">
          <div className="col">
            <p className="">{product.productName}</p>
          </div>
          <div className="col">
            <p className="">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Badge from '@material-ui/core/Badge';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ShowZeroBadge() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>

//       <Badge color="secondary" badgeContent={0} showZero>
//         <MailIcon />
//       </Badge>
//     </div>
//   );
// }
