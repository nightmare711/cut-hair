import { Header, Navbar, IncomingCall, StickyCall, Footer, Contact, PostTitle } from 'components'
import { Switch, Route } from 'react-router-dom'
import { Home, Post } from 'page'
import { listPost } from 'constants/list-post'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Contact />
			<Header />
			<Navbar />
			<Switch>
				<Route component={Home} exact path='/' />
				<div className='container-row'>
					{listPost.map((list, index) => {
						return (
							<Route key={index} exact path={`/services/${list.href}`}>
								<Post list={list} />
							</Route>
						)
					})}
					<PostTitle />
				</div>
			</Switch>
			<IncomingCall />
			<StickyCall />
			<Footer />
		</div>
	)
}

export default App
