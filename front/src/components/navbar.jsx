import React from "react";
import { Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

function Nav() {
    return (
        <div>
            <Navbar className="navbar navbar-dark bg-dark mb-4">
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavItem >
                    <NavLink href="/components/">
                        Link 1
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/components/">
                        Link 2 
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/components/">
                        Link 3
                    </NavLink>
                </NavItem>
            </Navbar>
        </div>
    );
}
export default Nav;