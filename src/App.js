import { Header, Navbar, IncomingCall, StickyCall, Footer, Contact, PostTitle } from 'components'
import { Switch, Route } from 'react-router-dom'
import { Home, Post } from 'page'
import { listPost } from 'constants/list-post'
import { listContentServices } from 'constants/list-service'
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
					{listContentServices.map((list, index) => {
						return (
							<Route key={index} exact path={`/post/${list.href}`}>
								<Post list={list} />
							</Route>
						)
					})}
					{listPost.map((list, index) => {
						return (
							<Route key={index} exact path={`/services/${list.href}`}>
								<Post list={list} />
							</Route>
						)
					})}
					<div className='container-right flex flex-col'>
						<PostTitle />
						<div className='post-bottom'>
							<PostTitle type='post' />
						</div>
					</div>
				</div>
			</Switch>
			<IncomingCall />
			<StickyCall />
			<Footer />
		</div>
	)
}

export default App
