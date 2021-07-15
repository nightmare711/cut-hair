import { Header, Navbar, IncomingCall, StickyCall, Footer, Contact } from 'components'
import { Switch, Route } from 'react-router-dom'
import { Home } from 'page'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Contact />
			<Header />
			<Navbar />
			<Switch>
				<Route component={Home} path='/' />
			</Switch>
			<IncomingCall />
			<StickyCall />
			<Footer />
		</div>
	)
}

export default App
