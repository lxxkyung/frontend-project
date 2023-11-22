import { useEffect } from "react";
import KakaoLogin from "react-kakao-login";

//react-kakao-login 이용한 카카오 로그인
const KakaoLoginButton = ({REST_API_KEY}) =>{

    const responseKaKao = (response) =>{
        console.log(response)
    }

    useEffect (() => {
        // Kakao JavaScript SDK 초기화
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(REST_API_KEY);
          }
    }, [])

    return (
     <div>
        <KakaoLogin
            token={String(REST_API_KEY)}
            onSuccess={responseKaKao}
            onFail={(err) => console.log("로그인 실패", err)}
            onLogout={() => console.log("로그아웃")}
        />

     </div>   
    )
}

export default KakaoLoginButton;