import * as React from "react";
import styled from 'styled-components';

// Использованный подход в данном компоненте, на мой взгляд, позволяет обойти все XPath запросы и регулярные выражения.
// Единственный тест, который проходит при запуске проекта - "item was found 2".
// Но в данном выражении берется код всей страницы и по нему ищется регулярное выражение /м.*о.*с.*к.*в.*а/i.
// Данное регулярное выражение находится из-за строка из других компонентов, не из-за SmokeText.tsx, а другие компоненты по заданию менять не нужно.

export default ({children}) => {

	const MaskedString = styled.span`
		&:after {
			content: "${children}";
			display: block;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	`;

	return <MaskedString />
};
