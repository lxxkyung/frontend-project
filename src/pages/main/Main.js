import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

//메인 페이지
const Main = () => {
    return (
        <MainWrap>
            <h1>Main</h1>
          
        </MainWrap>
    );
};

export default Main;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
