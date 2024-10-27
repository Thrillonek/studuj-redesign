import { useEffect, useState } from 'react';
import Download from './Download';

export default function Grafika() {
	const [download, setDownload] = useState(false);

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Grafika</h2>

			<Download files={files['excel']} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[#00F] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
			</div>
			<h5 className='mb-4 font-bold text-3xl'>Odkazy</h5>

			<p class='ml-2 font-semibold text-lg'>
				Obrázky, videa, hudba, zvuky ke stažení zdarma -{' '}
				<a href='https://pixabay.com/' title='pixabay.com' target='_blank' class='text-decoration-none'>
					Pixabay
				</a>
				,{' '}
				<a href='https://www.youtube.com/c/audiolibrary-channel' title='audiolibrary' target='_blank' class='text-decoration-none'>
					Audio Library
				</a>
				,{' '}
				<a href='https://www.pexels.com/cs-cz/' title='pexels' target='_blank' class='text-decoration-none'>
					Pexels
				</a>
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>Gimp </h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://www.gimp.org/' class='text-decoration-none'>
					Gimp.org
				</a>{' '}
				<br />
				Uživatelská příručka -{' '}
				<a href='https://docs.gimp.org/2.2/cs/index.html' class='text-decoration-none'>
					{' '}
					Gimp 1,
				</a>
				<a href='http://www.skola-auto.cz/wp-content/uploads/2017/10/gimp-manual-1.pdf' class='text-decoration-none'>
					Gimp 2
				</a>{' '}
				<br />
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>Inkscape </h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://inkscape.org/cs/' class='text-decoration-none'>
					Inkscape.org
				</a>
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>3D grafika </h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://www.tinkercad.com/dashboard' class='text-decoration-none'>
					tinkercad.com
				</a>
				,
				<a href='https://www.thingiverse.com/' class='text-decoration-none'>
					thingiverse.com
				</a>
				,
				<a href='https://www.prusa3d.cz/' class='text-decoration-none'>
					prusa3d.cz
				</a>
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>Video</h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://www.blackmagicdesign.com/products/davinciresolve/' class='text-decoration-none'>
					DaVinci Resolve
				</a>
			</p>
		</div>
	);
}
