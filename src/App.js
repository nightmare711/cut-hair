import Banner from 'assets/banner.jpeg'
import { Header, Navbar, IncomingCall } from 'components'
import './App.css'

function App() {
	return (
		<div className='App'>
			<img className='banner-img' src={Banner} alt='Banner' />
			<Header />
			<Navbar />
			<IncomingCall />
		</div>
	)
}

export default App
