import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
	type: 'primary' | 'secondary';
	size: 'small' | 'medium' | 'large';
	children: React.ReactNode;
}

function Button({ type, size, children }: ButtonProps) {

	let buttonSize = ''

	switch (size) {
		case 'small':
			buttonSize = style.small
			break;
		case 'medium':
			buttonSize = style.medium
			break;
		case 'large':
			buttonSize = style.large
			break;
	}

	return (
		<button
			className={`
				${style.button}
				${buttonSize}
				${type == 'primary' ? style.primary : style.secondary}
		`}>{children}
		</button>
	);
}

export default Button