import {} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
	return (
		<div className='relative max-w-[1160px] min-h-screen container'>
			<header>
				<img src={Logo} alt='Logo' className='bg-black w-full' />
			</header>
			<nav className='flex justify-center shadow-md mb-10 font-semibold'>
				<div className='flex justify-between hover:text-gray-400'>
					<Link to='/'>Úvod</Link>
					<div className='hover:text-gray-800 cursor-default dropdown'>
						<span>
							Office <i className='ml-1 fa-caret-down fa-solid'></i>
						</span>
						<div className='dropdown-menu'>
							<Link to='/word'>Word</Link>
							<Link to='/excel'>Excel</Link>
							<Link to='/powerpoint'>PowerPoint</Link>
						</div>
					</div>
					<Link to='/databaze'>Datábaze</Link>
					<div className='hover:text-gray-800 cursor-default dropdown'>
						<span>
							Programování <i className='ml-1 fa-caret-down fa-solid'></i>
						</span>
						<div className='dropdown-menu'>
							<Link to='/python'>Python</Link>
							<Link to='/scratch'>Scratch</Link>
						</div>
					</div>
					<Link to='/grafika'>Grafika</Link>
					<Link to='/web'>Webové technologie</Link>
				</div>
			</nav>
			<main>
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
			<footer className='flex justify-center shadow-[0_3px_10px_0px_rgb(0,0,0,0.2)] my-2 mt-8 py-2 rounded w-full font-semibold'>&copy; Ing. Radka Studnická 2024</footer>
		</div>
	);
}

export default App;
