import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

//styles cmponents
import { Nav, NavMenu, NavMenuItem } from "../styles/components/Navbar";

function Navbar({ showNav, handleShowNav }) {
  const { isAuthenticate, logout } = useAuth();

  return (
    <Nav className={`navbar${showNav ? " active-nav" : ""}`}>
      <NavMenu>
        {isAuthenticate ? (
          <>
            <NavMenuItem>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/tasks"
                onClick={() => handleShowNav(false)}
              >
                Tasks
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/add-task"
                onClick={() => handleShowNav(false)}
              >
                Add Task
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink
                className="link"
                to="/"
                onClick={() => {
                  handleShowNav(false);
                  logout();
                }}
              >
                Logout
              </NavLink>
            </NavMenuItem>
          </>
        ) : (
          <>
            <NavMenuItem>
              <NavLink
                className="link"
                to="/login"
                onClick={() => handleShowNav(false)}
              >
                Login
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink
                className="link"
                to="/register"
                onClick={() => handleShowNav(false)}
              >
                Register
              </NavLink>
            </NavMenuItem>
          </>
        )}
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
