import MapImg from './components/MapImg'
import CountryCards from './components/CountryCard'
import './App.css'

function App() {

	return (
		<div className='app'>
			<div className='map__titles'>
				<h1 className='map__title'>Hello World</h1>
				<p className='map__decription'>Always ready to meet with you.</p>
			</div>
			<div className='map'>
				<MapImg />
				<div className='map__cards'>
					<CountryCards />
				</div>
			</div>
		</div>
	)
}

export default App
