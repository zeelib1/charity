
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';




function Navbar() {
return (
 
 <nav className="nav-flex-container">
    <Link className="flex-item" to="/">Home </Link>
    <Link className="flex-item"  to="/about">About Us </Link>
    <Link className="flex-item"  to="/blog">Blog </Link>
    <Link className="flex-item"  to="/login">Become a friend</Link>
 </nav>
    
    );
  }

  export default Navbar;
  
// import React from 'react';
// import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Intro from './Intro';

// class FixedNavbarExample extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           collapse: false,
//       };
//       this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//         collapse: !this.state.collapse,
//       });
//   }

//   render() {
//     const bgPink = {backgroundColor: '#4e6549'}
//     const container = {height: 1300}
//     return(
//       <div>
//         <Router>
//           <header>
//             <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
//               <MDBNavbarBrand href="/">
//                   <strong>Navbar</strong>
//               </MDBNavbarBrand>
//               <MDBNavbarToggler onClick={ this.onClick } />
//               <MDBCollapse isOpen = { this.state.collapse } navbar>
//                 <MDBNavbarNav left>
//                   <MDBNavItem active>
//                       <MDBNavLink to="#">Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="#">Features</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="#">Pricing</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#">Options</MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//                 <MDBNavbarNav right>
//                   <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//               </MDBCollapse>
//             </MDBNavbar>
//           </header>
//         </Router>
       
//         <Intro/>
//       </div>
//     );
//   }
// }

// export default FixedNavbarExample;