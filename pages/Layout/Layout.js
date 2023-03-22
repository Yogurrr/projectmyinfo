import Nav from "./Nav";
import MyinfoCommon from "./MyinfoCommon";
import React from "react";

const Layout = ({children}) => {
    return (
        <html lang="ko">
        <head>
            <script type="text/javascript" src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=26f1f97d839c095fb14ccf8a23480368&libraries=services&autoload=false"></script>
            <title>연습</title>
        </head>
        <>
            <div className="container">
                <Nav />
                <div style={{borderBottom: "1px solid #331904"}}></div>
                <MyinfoCommon />
                <main>{children}</main>
            </div>
            <footer>copyright &copy; 2023. 팀명. All Rights Reserved.</footer>
        </>
        </html>
    );
}

export default Layout;