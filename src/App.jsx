import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Databaze from './components/Databaze';
import Excel from './components/Excel';
import Grafika from './components/Grafika';
import Home from './components/Home';
import PowerPoint from './components/PowerPoint';
import Python from './components/Python';
import Scratch from './components/Scratch';
import Web from './components/Web';
import Word from './components/Word';
import Logo from './img/logo.jpg';

function App() {
	const [dark, setDark] = useState(false);

	function toggleNav() {
		const nav = document.getElementById('nav');
		nav.classList.toggle('!max-h-[30rem]');
		document.getElementsByClassName('nav-active')[0]?.classList.remove('nav-active');
	}

	function toggleDropdown(id) {
		const el = document.getElementsByClassName('nav-active')[0];
		if (el && el?.id !== id) el.classList.remove('nav-active');
		document.getElementById(id).classList.toggle('nav-active');
	}

	useEffect(() => {
		document.querySelector(':root').style.setProperty('--text', dark ? '#f7f3f3' : '#242424');
		document.querySelector(':root').style.setProperty('--bg', dark ? '#333944' : '#f7f3f3');
		document.querySelector(':root').style.setProperty('color-scheme', dark ? 'dark' : 'light');
		document.querySelector(':root').style.setProperty('--link', dark ? '#289eff' : 'blue');
		document.querySelector(':root').style.setProperty('--link-visited', dark ? '#a06dff' : 'rgb(141, 56, 252)');
		document.querySelector(':root').style.setProperty('--hover', dark ? '#424952' : '#e7e7e7');
		document.querySelector(':root').style.setProperty('--secondary', dark ? '#aaa' : '#7c7c7c');
		document.querySelector(':root').style.setProperty('--border-opacity', dark ? '0.5' : '0.2');
	}, [dark]);

	useEffect(() => {
		nav.classList.remove('!max-h-[30rem]');
		document.getElementsByClassName('nav-active')[0]?.classList.remove('nav-active');
	}, [useLocation()]);

	return (
		<div className='relative flex flex-col items-center min-h-screen container'>
			<header className='w-full'>
				<img src={Logo} alt='Logo' className='bg-black w-full' />
			</header>
			<nav className='relative flex flex-col justify-center md:items-start mb-10 w-full font-semibold'>
				<div className='relative z-0 md:absolute flex justify-between md:justify-end w-full'>
					<button onClick={toggleNav} className='border-gray-300 md:hidden my-2 ml-4 px-3 p-1 border rounded w-min outline-none'>
						<i className='text-2xl fa-bars fa-solid'></i>
					</button>
					<div onClick={(e) => setDark(!dark)} className='flex items-center mr-4 cursor-pointer'>
						<div className='relative flex items-center border-[--text] border rounded-full h-5 aspect-[4/2]'>
							<div className={'border-[--text] absolute left-[.12rem] border rounded-full h-[80%] aspect-square transition-transform ' + (dark && 'translate-x-[1.260rem]')} />
						</div>
						<i className={'pl-4 pr-0 fa-regular ' + (dark ? 'fa-moon' : 'fa-sun')}></i>
					</div>
				</div>

				<div id='nav' className='z-10 flex max-md:flex-col justify-between ml-4 max-md:max-h-0 md:hover:text-gray-400 transition-[max-height] duration-500 max-md:overflow-hidden ease-in-out'>
					<Link to='/'>Úvod</Link>
					<div onClick={(e) => toggleDropdown('nav-office')} className='hover:text-gray-800 cursor-default dropdown'>
						<p>
							Office <i className='ml-1 fa-caret-down fa-solid'></i>
						</p>
						<div id='nav-office' className='dropdown-menu'>
							<Link to='/word'>Word</Link>
							<Link to='/excel'>Excel</Link>
							<Link to='/powerpoint'>PowerPoint</Link>
						</div>
					</div>
					<Link to='/databaze'>Datábaze</Link>
					<div onClick={(e) => toggleDropdown('nav-programovani')} className='hover:text-gray-800 cursor-default dropdown'>
						<p>
							Programování <i className='ml-1 fa-caret-down fa-solid'></i>
						</p>
						<div id='nav-programovani' className='dropdown-menu'>
							<Link to='/python'>Python</Link>
							<Link to='/scratch'>Scratch</Link>
						</div>
					</div>
					<Link to='/grafika'>Grafika</Link>
					<Link to='/web'>Webové technologie</Link>
				</div>
			</nav>
			<main className='w-full max-w-[90vw]' onClick={(e) => document.getElementById('nav').classList.remove('!max-h-[30rem]')}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/word' element={<Word />} />
					<Route path='/excel' element={<Excel />} />
					<Route path='/powerpoint' element={<PowerPoint />} />
					<Route path='/databaze' element={<Databaze />} />
					<Route path='/python' element={<Python />} />
					<Route path='/scratch' element={<Scratch />} />
					<Route path='/grafika' element={<Grafika />} />
					<Route path='/web' element={<Web />} />
				</Routes>
			</main>
			<footer className='flex justify-center my-2 mt-8 py-2 rounded w-full font-semibold'>&copy; Ing. Radka Studnická 2022</footer>
		</div>
	);
}

export default App;
