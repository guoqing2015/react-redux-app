//import { Link } from 'react-router-dom';
import { Link, CacheLink, Control } from 'react-keeper';
import styled from 'styled-components';

const Wrapper = styled(Link)`
    margin: 0.75rem 0 0 0;
    width: 100%;
    display: block;
    position: relative;
    background: #fff;
    z-index: 8;
	  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.08);
`;

export default Wrapper;
