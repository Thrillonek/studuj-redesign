import { useEffect, useState } from 'react';

export default function Home() {
	const [download, setDownload] = useState(false);

	useEffect(() => {
		document.onclick = handleClick;
	}, []);

	function handleClick(e) {
		let clientX = e.clientX || e.touches[0].clientX;
		let clientY = e.clientY || e.touches[0].clientY;
		const rect = document.getElementsByClassName('download')[0].getBoundingClientRect();
		if (!e.target.classList.contains('download-link') && !(clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom)) {
			setDownload(false);
		}
	}

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Word</h2>

			<div className={'top-1/2 left-1/2 z-10 duration-300 fixed border-2 border-gray-400 bg-[--bg] p-6 rounded -translate-x-1/2 transition-transform download -translate-y-1/2 ' + (!download && 'translate-y-[100%]')}>
				<i onClick={(e) => setDownload(false)} className='top-2 right-4 absolute text-xl cursor-pointer fa-solid fa-xmark'></i>
				<h2 className='mb-4 font-bold text-2xl'>Soubory</h2>
				<div className='flex flex-col flex-wrap max-h-[70vh]'>
					{files['word'].map((file) => {
						return (
							<a className='mr-8 w-min' href={'/odkazy/word/' + file}>
								{file}
							</a>
						);
					})}
				</div>
			</div>

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[#00F] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
				<a href='odkazy/typografie.pdf'>
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
		</div>
	);
}
