import { useEffect, useState } from 'react';

export default function Download({ name, state, setState }) {
	const [filter, setFilter] = useState();

	const files = __FILES__[name];

	useEffect(() => {
		document.onclick = handleClick;
	}, []);

	function handleClick(e) {
		let clientX = e.clientX || e.touches[0].clientX;
		let clientY = e.clientY || e.touches[0].clientY;
		const el = document.getElementsByClassName('download')[0];
		if (!el) return;
		const rect = el.getBoundingClientRect();
		if (!e.target.classList.contains('download-link') && !(clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom)) {
			setState(false);
		}
	}

	return (
		<div className={'top-1/2 left-1/2 z-10 shadow-xl w-[min(30rem,90%)] visible duration-300 font-semibold fixed border-2 border-gray-300 bg-[--bg] p-6 rounded-lg -translate-x-1/2 transition-[top,visibility] download -translate-y-1/2 ' + (!state && 'top-[150%] invisible')}>
			<i onClick={(e) => setState(false)} className='top-2 right-4 absolute text-xl cursor-pointer fa-solid fa-xmark'></i>
			<h2 className='mb-4 font-bold text-2xl'>Soubory</h2>
			<form className='flex flex-col mb-2 w-[calc(100%-1rem)]'>
				<label className='mb-1 text-sm' htmlFor='findFile'>
					Najít soubor:
				</label>
				<input onChange={(e) => setFilter(e.target.value)} className='bg-[--hover] ml-1 px-2 py-1 rounded-lg outline-none' id='findFile' type='text' />
			</form>
			<div className='flex flex-col h-[60vh] overflow-auto'>
				{files.map((file) => {
					if (filter && !file.includes(filter)) return;
					return (
						<a key={file} className='mr-8 mb-1 w-min text-lg' href={`/assets/${name}/${file}`}>
							{file}
						</a>
					);
				})}
			</div>
		</div>
	);
}
