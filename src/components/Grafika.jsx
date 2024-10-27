import { useEffect, useState } from 'react';
import Download from './Download';

export default function Grafika() {
	const [download, setDownload] = useState(false);

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>Grafika</h2>

			<Download files={files['grafika']} state={download} setState={setDownload} />

			<div className='sources'>
				<h3 className='mb-3 font-bold text-2xl'>Zdroje</h3>
				<span onClick={(e) => setDownload(true)} className='text-[--link] hover:underline cursor-pointer download-link'>
					<i className='mr-2 text-[--text] fa-download fa-solid' />
					Soubory ke stažení
				</span>
				<br />
				<h6 className='font-bold'>Obrázky, videa a audio zdarma:</h6>
				<a href='https://pixabay.com/' title='pixabay.com' target='_blank' className='ml-1'>
					Pixabay
				</a>
				<a href='https://www.youtube.com/c/audiolibrary-channel' title='audiolibrary' target='_blank' className='ml-1'>
					Audio Library
				</a>
				<a href='https://www.pexels.com/cs-cz/' title='pexels' target='_blank' className='ml-1'>
					Pexels
				</a>
			</div>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>Gimp</h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://www.gimp.org/' className=''>
					Gimp.org
				</a>{' '}
				<br />
				Uživatelská příručka -{' '}
				<a href='https://docs.gimp.org/2.2/cs/index.html' className=''>
					{' '}
					Gimp 1,
				</a>
				<a href='http://www.skola-auto.cz/wp-content/uploads/2017/10/gimp-manual-1.pdf' className=''>
					Gimp 2
				</a>{' '}
				<br />
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>Inkscape </h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://inkscape.org/cs/' className=''>
					Inkscape.org
				</a>
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>3D grafika </h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://www.tinkercad.com/dashboard' className=''>
					tinkercad.com
				</a>
				,{' '}
				<a href='https://www.thingiverse.com/' className=''>
					thingiverse.com
				</a>
				,{' '}
				<a href='https://www.prusa3d.cz/' className=''>
					prusa3d.cz
				</a>
			</p>

			<h5 className='mt-6 mb-2 font-bold text-3xl'>Video</h5>
			<p className='ml-2 font-semibold text-lg'>
				<a href='https://www.blackmagicdesign.com/products/davinciresolve/' className=''>
					DaVinci Resolve
				</a>
			</p>
		</div>
	);
}
