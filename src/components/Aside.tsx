import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Aside: NextPage = () => {
  return <Index>Aside</Index>;
};

export default Aside;

const Index = styled.div`
  width: 100px;
  @media ${({ theme }) => theme.mobile} {
  }
`;
