import { useEffect, useState } from 'react';
import Download from './Download';

export default function PowerPoint() {
	const [download, setDownload] = useState(false);

	let files = __FILES__;

	return (
		<div>
			<h2 className='mb-10 font-bold text-5xl text-center'>PowerPoint</h2>

			<h5 className='mb-4 font-bold text-3xl'>Přehled učiva</h5>

			<ol class='ml-2 font-semibold text-lg'>
				<li>Operace se snímky - přechody, animace, časování</li>
				<li>Vkládání objektů - textová pole, tabulky, grafy, zvuky, videa</li>
			</ol>
		</div>
	);
}
