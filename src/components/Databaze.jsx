import { useEffect, useState } from 'react';
import Download from './Download';

export default function Excel() {
	const [download, setDownload] = useState(false);

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Databáze</h2>

			<Download name={'databaze'} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[--link] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
			</div>

			<h3 className='mb-4 font-bold text-3xl'>Databázové systémy:</h3>
			<ul className='ml-2 font-semibold text-lg'>
				<li>Access (Microsoft 365)</li>
				<li>
					<a href='https://dev.mysql.com/downloads/installer/'>MySQL</a> (program pro administraci MySQL Workbench)
				</li>
			</ul>

			<h3 className='mt-6 mb-4 font-bold text-3xl'>Přehled učiva </h3>

			<ol class='ml-2 font-semibold text-lg'>
				<li>Základní objekty databáze - tabulka, dotaz, formulář, sestava</li>
				<li>Relace - 1:1, 1:N, M:N </li>
				<li>Primární klíč, datové typy, vlastnosti pole</li>
				<li>Návrh databáze - normalizace dat</li>
				<li>Základy SQL - CREATE, UPDATE, INSERT, DELETE</li>
			</ol>
		</div>
	);
}
