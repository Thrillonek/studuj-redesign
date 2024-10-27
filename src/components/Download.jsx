import { useEffect } from 'react';

export default function Download({ files, state, setState }) {
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
		<div className={'top-1/2 left-1/2 z-10 duration-300 fixed border-2 border-gray-400 bg-[--bg] p-6 rounded -translate-x-1/2 transition-transform download -translate-y-1/2 ' + (!state && 'translate-y-[100%]')}>
			<i onClick={(e) => setState(false)} className='top-2 right-4 absolute text-xl cursor-pointer fa-solid fa-xmark'></i>
			<h2 className='mb-4 font-bold text-2xl'>Soubory</h2>
			<div className='flex flex-col flex-wrap max-h-[70vh]'>
				{files.map((file) => {
					return (
						<a key={file} className='mr-8 w-min' href={'/odkazy/word/' + file}>
							{file}
						</a>
					);
				})}
			</div>
		</div>
	);
}
