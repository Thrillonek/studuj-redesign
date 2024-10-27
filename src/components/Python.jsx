import { useEffect, useState } from 'react';
import Download from './Download';

export default function Python() {
	const [download, setDownload] = useState(false);

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Python</h2>

			<Download files={files['python']} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[--link] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
				<br />
				<a href='https://www.w3schools.com/python/default.asp' class='text-decoration-none'>
					w3schools.com
				</a>
				<a href='https://naucse.python.cz/' class='text-decoration-none'>
					naucse.python.cz
				</a>
			</div>

			<ul className='font-semibold text-lg'>
				<li>
					Instalace Pythonu -{' '}
					<a href='https://www.python.org/downloads/' class='text-decoration-none'>
						python.org
					</a>
				</li>
				<li>
					Instalace editoru -{' '}
					<a href='https://code.visualstudio.com/' class='text-decoration-none'>
						Visual Studio Code,
					</a>
					<a href='https://atom.io/' class='text-decoration-none'>
						Atom
					</a>
				</li>
			</ul>

			<h3 className='mt-6 mb-4 font-bold text-3xl'>Odkazy</h3>
			<ul className='font-semibold text-lg'>
				<li>
					Dokumentace -{' '}
					<a href='https://docs.python.org/3/' class='text-decoration-none'>
						docs.python.org
					</a>
				</li>
				<li>
					Vizualizér kódu pro programy Python... -{' '}
					<a href='http://www.pythontutor.com/' class='text-decoration-none'>
						pythontutor.com
					</a>
				</li>
				<li>
					Online aplikace pro testování a tvorbu regulárních výrazu -{' '}
					<a href='https://regex101.com/' class='text-decoration-none'>
						regex101.com
					</a>
				</li>
			</ul>
		</div>
	);
}
