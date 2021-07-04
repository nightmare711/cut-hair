import Banner from 'assets/banner.jpeg'
import { Header } from 'components'
import './App.css'

function App() {
	return (
		<div className='App'>
			<img className='banner-img' src={Banner} alt='Banner' />
			<Header />
		</div>
	)
}

export default App
