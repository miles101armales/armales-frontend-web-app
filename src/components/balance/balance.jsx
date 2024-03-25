import React from 'react';
import balanceSticker from '../../img/balance_sticker.png';
import './balance.css'

const Balance = () => {
	const counter = 0.1524;

	return (
		<div className={'balance'}>
			<h4 className='balance__title'>AVCOIN balance</h4>
			<h1 className='balance__counter'>{counter}</h1>
			<img className='balance__img' src={balanceSticker} alt='Balance'/>
			<button className='swop__button'>ОБМЕНЯТЬ</button>
			<button className='swop__button'>ЗАРАБОТАТЬ</button>
		</div>
	);
};

export default Balance;