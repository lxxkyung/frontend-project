import { useEffect } from 'react';
import KakaoLogin from 'react-kakao-login';
import { Cookies } from 'react-cookie';

//react-kakao-login 이용한 카카오 로그인
const KakaoLoginButton = () => {
    const KAKAO_TOKEN_KEY = process.env.REACT_APP_KAKAO_API_KEY;
    const cookies = new Cookies();

    const responseKaKao = (res) => {
        const result = res?.response;
        console.log(result);

        if (result.access_token) {
            cookies.set('kako_access_token', result.access_token);
        }
    };

    return (
        <div>
            <KakaoLogin
                token={KAKAO_TOKEN_KEY}
                onSuccess={responseKaKao}
                onFail={(err) => console.log('로그인 실패', err)}
                onLogout={() => console.log('로그아웃')}
            />
        </div>
    );
};

export default KakaoLoginButton;
