import {} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Logo from './img/logo.jpg';

function App() {
	return (
		<div className='relative min-h-screen'>
			<header>
				<img src={Logo} alt='Logo' className='bg-black w-full' />
			</header>
			<nav className='flex justify-center bg-gray-200'>
				<div className='flex justify-between hover:text-gray-400'>
					<a className='hover:text-gray-800' href='/'>
						Úvod
					</a>
					<div className='hover:text-gray-800 cursor-default dropdown'>
						<span>
							Office <i className='ml-1 fa-caret-down fa-solid'></i>
						</span>
						<div className='dropdown-menu'>
							<a href=''>Word</a>
							<a href=''>Excel</a>
							<a href=''>PowerPoint</a>
						</div>
					</div>
					<a className='hover:text-gray-800' href='/'>
						Datábaze
					</a>
					<div className='hover:text-gray-800 cursor-default dropdown'>
						<span>
							Programování <i className='ml-1 fa-caret-down fa-solid'></i>
						</span>
						<div className='dropdown-menu'>
							<a href=''>Python</a>
							<a href=''>Scratch</a>
						</div>
					</div>
					<a className='hover:text-gray-800' href='/'>
						Grafika
					</a>
					<a className='hover:text-gray-800' href='/'>
						Webové technologie
					</a>
				</div>
			</nav>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</main>
			<footer className='flex justify-center bg-gray-200 my-2 py-2 w-full'>Ing. Radka Studnická 2022</footer>
		</div>
	);
}

export default App;