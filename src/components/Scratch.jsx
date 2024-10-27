import { useEffect, useState } from 'react';
import Download from './Download';

export default function Scratch() {
	const [download, setDownload] = useState(false);

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Scratch</h2>

			<Download files={files['scratch']} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[#00F] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
			</div>
			<h5 className='mb-4 font-bold text-3xl'>Odkazy</h5>

			<div class='ml-2 font-semibold text-lg'>
				<p>
					Webové stránky Scratch{' '}
					<a href='https://scratch.mit.edu/' target='_blank' class='text-decoration-none'>
						(scratch.mit.edu)
					</a>{' '}
				</p>
				<p>
					Lekce a cvičení{' '}
					<a href='http://scratch.chaputo.cz/lekce/' target='_blank' class='text-decoration-none'>
						(scratch.chaputo.cz)
					</a>{' '}
				</p>
				<p>
					Výuka programování v prostředí Scratch{' '}
					<a href='https://theses.cz/id/b5f11x/DP_Krejsa_Scratch.pdf' target='_blank' class='text-decoration-none'>
						(diplomová prace)
					</a>
				</p>
			</div>

			<div className='flex justify-between mt-4'>
				<div className='w-1/2'>
					<h4 className='mb-2 font-bold text-2xl'>Dinosaurus</h4>
					<p className='ml-2 text-lg'>
						Cílem hry je dostat dinosaura do domku. Může se pohybovat pouze po žebříku a plošině. Na začátku hry má pět životů. Pokud narazí na balón, přichází o život.
						<br />
						Pohyb dinosaura je zajištěn pomocí kláves:
						<br />
						kurzorová klávesa doprava a doleva - pohyb doprava a doleva
						<br />
						mezerník - skok nahoru
						<br />
						mezerník + kurzorová klávesa doprava a doleva - skok doprava a doleva
					</p>
				</div>

				<iframe allowtransparency='true' width='485' height='402' src='//scratch.mit.edu/projects/embed/240159034/?autostart=false' frameborder='0' allowfullscreen></iframe>
			</div>
			<div className='flex justify-between mt-4'>
				<div className='w-1/2'>
					<h4 className='mb-2 font-bold text-2xl'>Bludiště</h4>
					<p className='ml-2 text-lg'>Pohyb šipky je zajištěn pomocí kurzorových kláves doprava, doleva, nahoru a dolů. Pokud šipka narazí na lva, jde zpátky na začátek. Až se šipka dotkne banánů, změní se scéna, zvuky</p>
				</div>

				<iframe src='https://scratch.mit.edu/projects/408374931/embed' allowtransparency='true' width='485' height='402' frameborder='0' scrolling='no' allowfullscreen></iframe>
			</div>
		</div>
	);
}
