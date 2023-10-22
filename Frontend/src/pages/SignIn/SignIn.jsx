// import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
// import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { userLogin } from '../../features/authActions'
import { fetchLogin } from '../../features/authActions'
import Loader from './../../utils/Style/Loader'
// import { setCredentials } from '../../features/authSlice'
// import {
//    selectCurrentUserToken,
//    selectCurrentLoading,
//    selectCurrentError,
// } from '../../features/authSlice'

function SignIn() {
   // const userRef = useRef()
   const errRef = useRef()
   const dispatch = useDispatch()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errMsg, setErrMsg] = useState('')
   const navigate = useNavigate()
   const { token, loading, error } = useSelector((state) => state.auth)
   // const token = useSelector(selectCurrentUserToken)
   // const loading = useSelector(selectCurrentLoading)
   // const error = useSelector(selectCurrentError)
   // const token = localStorage.getItem('userToken')
   //    ? localStorage.getItem('userToken')
   //    : null
   console.log(token)
   // const tokenStatus = useSelector(state => state.token.status)
   // lorsque le composant se charge
   // mets le focus sur cette entrée utilisateur
   // rempli avec les reference useur
   // useEffect(() => {
   //    userRef.current.focus()
   // }, [])
   // va vider tout message d'erreur que nous pourrions avoir
   // si l'utilisateur change l'état du mail ou du mot de passe
   // ou change quelque chose dans l'une de ces entrées
   useEffect(() => {
      setErrMsg('')
   }, [email, password])

   function Login() {
      try {
         if (token) {
            navigate('/profile')
         } else if (!email) {
            // alert('User have not sign up')
            setErrMsg('Erreur de mail')
         } else if (!password) {
            // alert('User have not sign up')
            setErrMsg('Erreur de mot de passe')
            // alert(error.response.data.message)
         } else {
            setErrMsg('Erreur de mail ou de mot de passe')
         }

         errRef.current.focus()
      } catch (e) {
         console.log(e)
      }
   }

   // useEffect(() => {
   //    if (tokenStatus === 'pending') {
   //      dispatch(fetchLogin())
   //    }
   //  }, [tokenStatus, dispatch])

   function handleSubmit(e) {
      e.preventDefault()
      Login()
      // On envoie le thunk à dispatch
      // C'est Redux-Thunk qui va s'occuper de l'exécuter pour nous
      // dispatch(fetchLogin({ email, password }))
      dispatch(fetchLogin({ email, password }))
   }

   const handleEmailInput = (e) => setEmail(e.target.value)
   const handlePasswordInput = (e) => setPassword(e.target.value)

   return (
      <main className="main bg-dark">
         <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
               <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                     type="text"
                     id="email"
                     name="email"
                     // ref={userRef}
                     value={email}
                     onChange={handleEmailInput}
                     // required
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     value={password}
                     onChange={handlePasswordInput}
                     autoComplete="on"
                  />
               </div>
               <div className="input-remember">
                  <label htmlFor="remember-me">Remember me</label>
                  <input type="checkbox" id="remember-me" />
               </div>
               {/* PLACEHOLDER DUE TO STATIC SITE  */}

               {/* <a href="./user.html" className="sign-in-button">
                  Sign In
               </a> */}
               {/* SHOULD BE THE BUTTON BELOW */}
               {error && <div className="error_msg">{error}</div>}
               <p
                  ref={errRef}
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
                  {/* Sign-in */}
                  {loading ? <Loader /> : 'Sign In'}
               </button>
            </form>
         </section>
      </main>
   )
}

export default SignIn
