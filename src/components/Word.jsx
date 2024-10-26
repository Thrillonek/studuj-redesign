export default function Home() {
	return (
		<>
			<h2 className='mb-10 font-bold text-5xl text-center'>Word</h2>

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<a href='word_stahuj/soubory.php'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</a>
				<a href='word/typografie.pdf'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Typografická pravidla
				</a>
				<br />
				<a href='https://prirucka.ujc.cas.cz/' target='_blank'>
					<i className='fa-arrow-right mr-2 text-[--text] fa-solid' />
					Internetová jazyková příručka
				</a>
				<a href='https://www.citace.com/' target='_blank'>
					<i className='fa-arrow-right mr-2 text-[--text] fa-solid' />
					citace.com
				</a>
			</div>
			<h5 className='mb-4 font-bold text-3xl'>Přehled učiva </h5>
			<ol className='ml-2 font-semibold text-lg'>
				<li>Formátování textu, odstavce</li>
				<li>Tabulátory</li>
				<li>Odrážky a číslování, víceúrovňové seznamy</li>
				<li>Text ve sloupcích</li>
				<li>Grafické objekty</li>
				<li>Editor rovnic</li>
				<li>Záhlaví, zápatí, vodoznak</li>
				<li>Tabulka</li>
				<li>Styly</li>
				<li>Šablona</li>
				<li>Hromadná korespondence</li>
				<li>Práce s dlouhými dokumenty – oddíly, obsah, hypertextové odkazy, poznámka pod čarou, iniciála</li>
			</ol>
		</>
	);
}
