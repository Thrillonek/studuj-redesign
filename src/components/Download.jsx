import { useEffect, useState } from 'react';

export default function Download({ files, state, setState }) {
	const [filter, setFilter] = useState();

	useEffect(() => {
		document.onclick = handleClick;
	}, []);

	function handleClick(e) {
		let clientX = e.clientX || e.touches[0].clientX;
		let clientY = e.clientY || e.touches[0].clientY;
		const rect = document.getElementsByClassName('download')[0].getBoundingClientRect();
		if (!e.target.classList.contains('download-link') && !(clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom)) {
			setState(false);
		}
	}

	return (
		<div className={'top-1/2 left-1/2 z-10 shadow-2xl w-[min(30rem,90%)] duration-300 font-semibold fixed border-2 border-gray-300 bg-[--bg] p-6 rounded-lg -translate-x-1/2 transition-[top] download -translate-y-1/2 ' + (!state && 'top-[150%]')}>
			<i onClick={(e) => setState(false)} className='top-2 right-4 absolute text-xl cursor-pointer fa-solid fa-xmark'></i>
			<h2 className='mb-4 font-bold text-2xl'>Soubory</h2>
			<form className='flex flex-col mb-2 w-[calc(100%-1rem)]'>
				<label className='mb-1 text-sm' htmlFor='findFile'>
					Najít soubor:
				</label>
				<input onChange={(e) => setFilter(e.target.value)} className='shadow ml-1 px-2 py-1 border rounded-lg outline-none' id='findFile' type='text' />
			</form>
			<div className='flex flex-col h-[75vh] md:h-[70vh] overflow-auto'>
				{files.map((file) => {
					if (filter && !file.includes(filter)) return;
					return (
						<a key={file} className='mr-8 mb-1 w-min text-lg' href={'/odkazy/word/' + file}>
							{file}
						</a>
					);
				})}
			</div>
		</div>
	);
}
