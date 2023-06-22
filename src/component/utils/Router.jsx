import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginStart from '../auth/LoginStart'
import Register from '../auth/Register'
import Navbar from '../layout/Navbar'
import Main from '../pages/Main'
export default function Router() {

	return (
		<>
			<BrowserRouter>
					<Navbar />
				<Routes>
					<Route path='/' element={
						<>
							<Main />
						</>
					} />
					<Route path='/register' element={
						<>
							<Register />
						</>
					} />
					<Route path='/login' element={
						<>
							<LoginStart />
						</>
					} />
				</Routes>

			</BrowserRouter>
		</>
	)
}
