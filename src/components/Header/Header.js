import SideNavBar from "../SideNavBar/SideNavBar";

import styles from './Styles';
import './Styles.css';

function Header(props) {

    const { openNav, handleOpenNav } = props;

    return (
        <header style={styles.header}>
            <div>
                <SideNavBar 
                    openNav={openNav}
                    handleOpenNav={handleOpenNav}/>
            </div>
        </header>
    )
}

export default Header;