import * as React from "react";
import styled from 'styled-components';

export default ({children}) => {
	// const leftPart = children.slice(0, children.length / 2);
	// const rightPart = children.slice(children.length / 2, children.length);
	// const maskedString = leftPart + "&#8203;" + rightPart;
	// return <span dangerouslySetInnerHTML={{__html: maskedString}} />

	const UnicornAfter = styled.span`
		&:after {
			content: "${children}";
			display: block;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	`;

	return <UnicornAfter />
};
