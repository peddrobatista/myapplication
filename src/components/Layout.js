import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Garage</Link>
                    </li>
                    <li>
                        <Link to="/header">Header</Link>
                    </li>
                    <li>
                        <Link to="/myform">MyForm</Link>
                    </li>
                    <li>
                        <Link to="car">Car</Link>
                    </li>
                    <li>
                        <Link to="car3">Car3</Link>
                    </li>
                    <li>
                        <Link to="timer">Timer</Link>
                    </li>
                    <li>
                        <Link to="Components">Components</Link>
                    </li>
                    <li>
                        <Link to="Useref">Useref</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout;