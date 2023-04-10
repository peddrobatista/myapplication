import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Garagem</Link>
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
                        <Link to="Components1">Componentes1</Link>
                    </li>
                    <li>
                        <Link to="Useref">Useref</Link>
                    </li>
                    <li>
                        <Link to="Caixa">Caixa</Link>
                    </li>
                    <li>
                        <Link to="CorTema">Cor do Tema</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout;