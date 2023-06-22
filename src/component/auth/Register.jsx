import React, { useState } from 'react'
import { register } from '../utils/fetch_api';
import { Link } from 'react-router-dom'
export default function Register() {

	const [user, setUser] = useState({
		full_name: '',
		age: '',
		gender: '',
		email: '',
		password: '',
	})
	const [error, setError] = useState()
	async function register_user() {

		console.log('regirster');
		try {
			const result = await register(user)
			console.log(result);
		} catch (error) {
			console.log(error);
		}

	}

	function on_submit(e) {
		e.preventDefault()
		validation()
	}

	function validation() {
		let err = {}, t = true;
 
		if (!user.full_name) { t = false; err = { ...err, full_name: true } }
		if (!user.age) { t = false; err = { ...err, age: true } }
		if (!user.gender) { t = false; err = { ...err, gender: true } }
		if (!user.email) { t = false; err = { ...err, email: true } }
		if (!user.password) { t = false; err = { ...err, password: true } }
		if (t) {
			register_user()
		}
		setError(err)
	}

	return (
		<div className='container'>
			<section className="section-content padding-y">
				{/* <!-- ============================ COMPONENT REGISTER   ================================= --> */}
				<div className="card mx-auto" style={{ maxMidth: '520px', marginTop: '40px' }}>
					<article className="card-body">
						<header className="mb-4">
							<h4 className="card-title text-center">Sign up</h4>
						</header>
						<form onSubmit={on_submit} onChange={validation}>
							{console.log(user)}
							{console.log(error)}
							<div className="form-row">
								<div className="col form-group">
									<label htmlFor='full_name'>Full name</label>
									<input type="text" className="form-control" id='full_name' placeholder=""
										onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })} value={user.full_name} />
									{error?.full_name ? <small className="form-text text-danger">Full name is required</small> : ''}
								</div>
							</div>
							<div className="form-group">
								<label className="custom-control custom-radio custom-control-inline">
									<input className="custom-control-input" type="radio" id='gender' name="gender" value={"M"}
										onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })} />
									<span className="custom-control-label"> Male </span>
								</label>
								<label className="custom-control custom-radio custom-control-inline">
									<input className="custom-control-input" type="radio" id='gender' name="gender" value={"F"}
										onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })} />
									<span className="custom-control-label"> Female </span>
								</label>
								{error?.gender ? <small className="form-text text-danger">Gender is required</small> : ''}
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor='age'>Age</label>
									<input type="text" className="form-control" id='age'
										onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })} value={user.age} />
									{error?.age ? <small className="form-text text-danger">Age is required</small> : ''}
								</div>
								<div className="form-group col-md-6">
									<label htmlFor='email'>Email</label>
									<input type="email" className="form-control" placeholder="" id='email'
										onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })} value={user.email} />
									{error?.email ? <small className="form-text text-danger">Email is required</small> :
										<small className="form-text text-muted">We'll never share your email with anyone else.</small>}
								</div>
							</div>
							{/* <!-- form-row.// --> */}
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor='password'>Create password</label>
									<input className="form-control" type="password" id='password'
										onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })} value={user.password} />
									{error?.password ? <small className="form-text text-danger">Password is required</small> : ''}
								</div>
								{/* <!-- form-group end.// --> */}
								<div className="form-group col-md-6">
									<label>Repeat password</label>
									<input className="form-control" type="password" />
								</div>
								{/* <!-- form-group end.// --> */}
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary btn-block"> Register</button>
							</div>
							{/* <!-- form-group// --> */}
						</form>
					</article>
					{/* <!-- card-body.// --> */}
				</div>
				{/* <!-- card .// --> */}
				<p className="text-center mt-4">Have an account? <Link to={'/login'}>Log In</Link></p>
				<br /><br />
				{/* <!-- ============================ COMPONENT REGISTER  END.// ================================= --> */}
			</section>
		</div>
	)
}
