import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../../features/authActions'
import Loader from './../../utils/Style/Loader'
import {
   selectCurrentUserToken,
   selectCurrentLoading,
} from '../../features/authSlice'

function SignIn() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const token = useSelector(selectCurrentUserToken)
   // console.log(token)
   const loading = useSelector(selectCurrentLoading)

   const [errMsg, setErrMsg] = useState('')

   function handleSubmit(e) {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const email = formData.get('email')
      const password = formData.get('password')

      if (!email) {
         setErrMsg('Erreur de mail')
      } else if (!password) {
         setErrMsg('Erreur de mot de passe')
      }

      // On envoie le thunk à dispatch
      // C'est Redux-Thunk qui va s'occuper de l'exécuter pour nous
      dispatch(fetchLogin({ email, password }))
   }

   useEffect(() => {
      try {
         if (token) {
            navigate('/profile')
         }
      } catch (e) {
         console.log(e)
      }
   }, [navigate, token])

   return (
      <main className="main bg-dark">
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
               <p
                  className={errMsg ? 'error_msg' : 'offscreen'}
                  aria-live="assertive"
               >
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
      </main>
   )
}

export default SignIn
