import { useEffect, useState } from 'react';
import Download from './Download';

export default function Grafika() {
	const [download, setDownload] = useState(false);

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Webové technologie</h2>

			<Download files={files['web']} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[#00F] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
				<br />
				<a href='https://www.w3schools.com/html/default.asp' class='text-decoration-none'>
					w3schools.com
				</a>
				<a href='http://www.jakpsatweb.cz' target='_blank' title='tvorba webových stránek' class='text-decoration-none'>
					www.jakpsatweb.cz
				</a>
				<p>
					Validace
					<a href='http://validator.w3.org/#validate_by_uri' target='_blank' title='validace HTML' class='text-decoration-none'>
						{' '}
						HTML
					</a>
					,
					<a href='http://jigsaw.w3.org/css-validator/' target='_blank' title=' CSS' class='text-decoration-none'>
						{' '}
						CSS
					</a>
				</p>
			</div>

			<h5 className='mb-4 font-bold text-3xl'>Značky HTML </h5>
			<ol className='ml-2 font-semibold text-lg'>
				<li>kostra webové stránky – html, head, body</li>
				<li>nadpisy – h1 až h6</li>
				<li>odstavec – p</li>
				<li>zalomení textu – br</li>
				<li>oddělovací čára – hr</li>
				<li>formátování textu – i, b, u</li>
				<li>seznam – ul, ol, li</li>
				<li>obrázek – img</li>
				<li>tabulka – table, tr, td, th</li>
				<li>odkaz – a</li>
				<li>div, span</li>
			</ol>

			<h5 className='mt-6 mb-4 font-bold text-3xl'>Kaskádové styly – CSS</h5>
			<ol className='ml-2 font-semibold text-lg'>
				<li>úprava textu – font-family, font-style, font-size</li>
				<li>úprava odstavce – text-align</li>
				<li>barva textu – color</li>
				<li>barva pozadí – background</li>
				<li>pozice objektu – position, left, right, top, bottom</li>
			</ol>
		</div>
	);
}
