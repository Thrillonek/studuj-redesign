export default function Home() {
	return (
		<>
			<h2 className='mb-10 font-bold text-5xl text-center max-md:text-4xl'>Výukové materiály a soutěže</h2>

			<div className='gap-x-4 grid md:grid-cols-2 font-semibold text-lg leading-loose md:leading-relaxed'>
				<div className='link-list'>
					Znaky psané pomocí klávesy pravý Alt
					<a href='odkazy/pravy_alt.pdf' target='_blank' className='text-decoration-none'>
						(pravy_alt.pdf)
					</a>
					<br />
					Znaky psané pomocí klávesy levý Alt
					<a href='https://www.liteera.cz/slovnik/tabulka-entit' target='_blank' className='text-decoration-none'>
						(www.liteera.cz)
					</a>
					<br />
					Psaní speciálních znaků na klávesnici
					<a href='http://znakynaklavesnici.cz/' target='_blank' className='text-decoration-none'>
						(znakynaklavesnici.cz)
					</a>
					<br />
					Psaní všemi deseti
					<a href='https://www.nedatluj.cz/' target='_blank' className='text-decoration-none'>
						(nedatluj.cz)
					</a>
					<br />
					Office 365 zdarma pro studenty
					<a href='https://products.office.com/cs-cz/academic/compare-office-365-education-plans' target='_blank' className='text-decoration-none'>
						(přihlásit se)
					</a>
					<br />
				</div>
				<div className='link-list'>
					Olomoucký informatický korespondenční seminář
					<a href='https://olinx.inf.upol.cz/' target='_blank' className='text-decoration-none'>
						(Olinx)
					</a>
					<br />
					Korespondenční Seminář z Programování - MFF UK
					<a href='https://ksp.mff.cuni.cz/z/' target='_blank' className='text-decoration-none'>
						(KSP-Z)
					</a>
					<br />
					Logická olympiáda
					<a href='https://www.logickaolympiada.cz/' target='_blank' className='text-decoration-none'>
						(registrace)
					</a>
					<br />
					Korespondenční soutěž matematiky a informatiky ČVUT
					<a href='https://jamalvova.cz/' target='_blank' className='text-decoration-none'>
						(jamalvova.cz)
					</a>
					<br />
					Soutěž v programování Scratch
					<a href='http://www.scratchcup.cz/' target='_blank' className='text-decoration-none'>
						(scratchcup.cz)
					</a>
					<br />
					Bobřík informatiky
					<a href='https://www.ibobr.cz/' target='_blank' className='text-decoration-none'>
						(ibobr.cz)
					</a>
					<br />
				</div>
			</div>
		</>
	);
}
