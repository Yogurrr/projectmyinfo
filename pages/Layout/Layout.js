import Nav from "./Nav";
import MainCommon from "./MainCommon";
import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({children}) => {
    return (
        <html lang="ko">
        <head>
            <meta charSet="UTF-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="stylesheet" href="/css/index.css" />
            <link rel="stylesheet" href="/css/Nav.css" />
            <link rel="stylesheet" href="/css/MainCommon.css" />
            <link rel="stylesheet" href="/css/likes.css" />
            <link rel="stylesheet" href="/css/myinfo.css" />
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
            <title>Temfo,</title>
        </head>
        <body>
        <div className="container">
            <Nav />
            <div style={{borderBottom: "1px solid #331904"}}></div>
            <MainCommon />
            <main className="container">{children}</main>
            <footer>copyright &copy; 2023. 팀명. All Rights Reserved.</footer>
        </div>
        </body>
        </html>
    );
}

export default Layout;