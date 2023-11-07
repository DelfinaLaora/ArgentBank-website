import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchLogin } from '../../features/authActions'
import {
   selectCurrentUserToken,
   selectCurrentLoading,
   selectCurrentError,
   logOut,
} from '../../features/authSlice'
import Loader from '../../utils/Loader/Loader'

function SignIn() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const token = useSelector(selectCurrentUserToken)
   const loading = useSelector(selectCurrentLoading)
   const error = useSelector(selectCurrentError)

   const [errMsg, setErrMsg] = useState('')

   function handleSubmit(e) {
      e.preventDefault()
      const form = e.target
      // formData se base sur les name pour attribuer le nom du get
      const formData = new FormData(form)
      const email = formData.get('email')
      const password = formData.get('password')
      // On envoie le thunk à dispatch
      // C'est Redux-Thunk qui va s'occuper de l'exécuter pour nous
      dispatch(fetchLogin({ email, password }))
   }
   useEffect(() => {
      if (!token) {
         setErrMsg(error)
      } else {
         setErrMsg('')
      }
   }, [setErrMsg, token, error])

   useEffect(() => {
      try {
         if (token) {
            navigate('/profile')
         } else {
            dispatch(logOut())
         }
      } catch (e) {
         console.log(e)
      }
   }, [navigate, dispatch, token])

   return (
      // <main className="main bg-dark">
      <div className="contener-sign-in main bg-dark">
         <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
               <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     autoComplete="on"
                  />
               </div>
               <div className="input-remember">
                  <label htmlFor="remember-me">Remember me</label>
                  <input type="checkbox" id="remember-me" />
               </div>
               <p className={errMsg ? 'error_msg' : ''} aria-live="assertive">
                  {errMsg}
               </p>
               <button
                  type="submit"
                  className="sign-in-button"
                  disabled={loading}
               >
                  {loading ? <Loader /> : 'Sign In'}
               </button>
            </form>
         </section>
      </div>
      // </main>
   )
}

export default SignIn
