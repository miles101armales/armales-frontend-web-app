import React from 'react';
import Button from '../button/button';
import { useTelegram } from '../../hooks/useTelegram';
import './header.css';

const Header = () => {
	const {onClose} = useTelegram();
	
	return (
		<div className={'header'}>
			<Button className='header__button' onClick={onClose}>НОВИЧОК</Button>
		</div>
	);
};

export default Header;