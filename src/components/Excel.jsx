import { useEffect, useState } from 'react';
import Download from './Download';

export default function Excel() {
	const [download, setDownload] = useState(false);

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Excel</h2>

			<Download name={'excel'} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[--link] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
			</div>
			<h5 className='mb-4 font-bold text-3xl'>Přehled učiva </h5>

			<ol class='ml-2 font-semibold text-lg'>
				<li>Formátování buňky, tabulky</li>
				<li>Relativní, absolutní adresa buňky</li>
				<li>Funkce a vzorce</li>
				<li>Ověřování vstupních dat</li>
				<li>Grafy - graf s vedlejší (druhou) osou Y, formátování objektů v grafu</li>
				<li>Práce s databází – vyhledávání, seřazení dat, automatický a rozšířený filtr, načítání externích dat</li>
				<li>Podmíněné formátování</li>
				<li>Kontingenční tabulky, grafy</li>
				<li>Vkládání obrázků, rovnic a dalších objektů</li>
				<li>Formulář</li>
			</ol>
		</div>
	);
}
