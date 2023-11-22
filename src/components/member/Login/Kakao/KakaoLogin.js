import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import KakaoLoginButton from './KakaoLoginButton';

//REST API 방식 이용한 카카오 로그인
const KakaoLogin = () =>{
    
    // 카카오 로그인 함수를 실행 시키면 아래에 설정해 놓은 KAKAO_AUTH_URL 주소로 이동.
    // 이동 된 창에서 kakao 계정 로그인을 시도할 수 있으며 로그인 버튼 클릭 시 Redirect URI로 이동하면서 빈 화면과 함께 인가코드가 발급됨.
    // 인가코드는 파라미터 값에 들어가 있음 !
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`

    const onClickEvent = () =>{
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <>
        <StKakaoLogin onClick={onClickEvent}>kakao 로그인</StKakaoLogin>
        <KakaoLoginButton REST_API_KEY={REST_API_KEY}/>
        </>
    )
}

export default KakaoLogin;

const StKakaoLogin = styled.button`
    width: 200px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #000;
    margin-top: 20px;
    
`