import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login_start } from '../utils/fetch_api'
export default function LoginStart() {

	const [user, setUser] = useState({
		email: '',
		password: ''
	})

	const [login_end, setLogin_end] = useState(true)

	async function Login() {

		try {
			const result = await login_start(user)
		} catch (error) {
			console.log(error);
		}
	}

	function onsubmit(e) {
		e.preventDefault()

	}




	return (
		<section className="section-conten padding-y" style={{ minHeight: '84vh' }}>
			{login_end ?
				<>
					{/* <!-- ============================ START LOGIN   ================================= --> */}
					<div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
						<div className="card-body">
							<h4 className="card-title mb-4">Sign in</h4>
							<form>
								<div className="form-group">
									<input type="email" className="form-control" placeholder="Email Address" />
								</div>
								{/* <!-- form-group// --> */}
								<div className="form-group">
									<input type="password" className="form-control" placeholder="Password" />
								</div>
								{/* <!-- form-group// --> */}

								<div className="form-group">
									<a href="#" className="float-right">Forgot password?</a>

								</div>
								{/* <!-- form-group form-check .// --> */}
								<div className="form-group">
									<button type="submit" className="btn btn-primary btn-block"> Login  </button>
								</div>
								{/* <!-- form-group// --> */}
							</form>
						</div>
						{/* <!-- card-body.// --> */}
					</div>
					{/* <!-- card .// --> */}

					<p className="text-center mt-4">Don't have account? <Link to={'/register'}>Sign up</Link></p>
					<br /><br />
					{/* <!-- ============================ START LOGIN  END.// ================================= --> */}


				</> :
				<>
					{/* <!-- ============================ END LOGIN   ================================= --> */}
					<div className="card mx-auto" style={{ maxWidth: '380px', marginTop: '100px' }}>
						<div className="card-body">
							<h4 className="card-title mb-4 text-center">Check email box</h4>
							<form>
								<div className="form-group">
									<p className='text-center'>We sent link to your email. </p>
								</div>
								{/* <!-- form-group// --> */}

								<div className="form-group">
									<button type="submit" className="btn btn-primary btn-block"> Send again  </button>
								</div>
								{/* <!-- form-group// --> */}
							</form>
						</div>
						{/* <!-- card-body.// --> */}
					</div>
					{/* <!-- card .// --> */}
					{/* <!-- ============================ END LOGIN  END.// ================================= --> */}


				</>
			}

		</section>


	)
}
