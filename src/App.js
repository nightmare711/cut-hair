import { Header, Navbar, IncomingCall, StickyCall, Footer, Contact } from 'components'
import { Switch, Route } from 'react-router-dom'
import { Home, Post } from 'page'
import { listPost } from 'constants/list-post'
import './App.css'

function App() {
	return (
		<div className='App'>
			{/* <Contact />
			<Header />
			<Navbar />
			<Switch>
				<Route component={Home} path='/' />
			</Switch>
			<IncomingCall />
			<StickyCall />
			<Footer /> */}
			<Switch>
				{listPost.map((list, index) => {
					return (
						<Route key={index} exact path={`/services/${list.href}`}>
							<Post list={list} />
						</Route>
					)
				})}
			</Switch>
		</div>
	)
}

export default App
