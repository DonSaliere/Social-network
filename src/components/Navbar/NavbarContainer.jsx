import Navbar from './Navbar';
import { connect } from 'react-redux';


let mapsStateToProps = (state) => {
    return {
        friendNav: state.sideBar
    }
}

let mapsDispatchToProps = ( ) => {
    return {
        
    }
}

const NavbarContainer = connect(mapsStateToProps, mapsDispatchToProps)(Navbar);

export default NavbarContainer;