import Nav from "./Nav";
import MyinfoCommon from "./MyinfoCommon";

const Layout = ({children}) => {
    return (
        <div>
            <div className="container">
                <Nav />
                <div style={{borderBottom: "1px solid #331904"}}></div>
                <MyinfoCommon />
                <main>{children}</main>
            </div>
            <footer>copyright &copy; 2023. 팀명. All Rights Reserved.</footer>
        </div>
    );
}

export default Layout;