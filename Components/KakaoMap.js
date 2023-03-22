import React, {useEffect} from "react";

const KakaoMap = () => {
    // 지도 부분
    useEffect(() => {
        let script = document.createElement('script');

        script.async = true;
        script.type = "text/javascript"
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=26f1f97d839c095fb14ccf8a23480368&libraries=services&autoload=false";

        document.head.appendChild(script);

        const onLoadKakaoMap = () => {
            kakao.maps.load(() => {
                let mapContainer = document.getElementById('map'), // 지도를 표시할 div
                    mapOption = {
                        center: new kakao.maps.LatLng(37.48587156795423, 126.89736789924702), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
                let map = new kakao.maps.Map(mapContainer, mapOption);

                function relayout() {
                    setTimeout( function() { map.relayout(); }, 0 );
                }
                relayout()
            });
        };
        script.addEventListener('load', onLoadKakaoMap);
    }, []);
    return (
        <div id="map" style={{height: "100%", width: "100%", border: "1px solid pink"}}></div>
    )
}

export default KakaoMap;