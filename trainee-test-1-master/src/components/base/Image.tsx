import * as React from 'react';
import styled from 'styled-components';

const ImageBlock = styled.div`
	background: url(${props => props.src});
	width: ${props => props.width}px;
	height: ${props => props.height}px;
`;

export default (props) => {
	return (
		<ImageBlock {...props}/>
	);
};
