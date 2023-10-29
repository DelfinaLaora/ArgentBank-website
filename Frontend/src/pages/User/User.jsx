import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
   selectCurrentLoading,
   selectCurrentError,
   selectCurrentUserToken,
} from '../../features/authSlice'
import Loader from '../../utils/Style/Loader'
import Error from '../../pages/Error/Error'
import { useEffect } from 'react'
import { fetchProfil } from '../../features/authActions'

function User() {
   const dispatch = useDispatch()

   const token = useSelector(selectCurrentUserToken)
   // console.log(token) /*uniquement le token */
   const loading = useSelector(selectCurrentLoading)
   const error = useSelector(selectCurrentError)

   const data = useSelector((state) => state.auth.userInfo)
   console.log(data) /*info user */

   useEffect(() => {
      if (token) dispatch(fetchProfil())
   }, [dispatch, token])
   const userName = data?.userName

   return (
      <>
         {error && <Error>{error}</Error>}
         {loading ? (
            <Loader />
         ) : (
            <>
               <main className="main bg-dark">
                  <div className="header">
                     <h1>
                        Welcome back
                        <br />
                        {data !== null ? `${userName} ` : ' welcome'}
                     </h1>
                     <Link className="edit-button" to="/edit-user">
                        Edit Name
                     </Link>
                  </div>

                  <h2 className="sr-only">Accounts</h2>
                  <section className="account">
                     <div className="account-content-wrapper">
                        <h3 className="account-title">
                           Argent Bank Checking (x8349)
                        </h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">
                           Available Balance
                        </p>
                     </div>
                     <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                           View transactions
                        </button>
                     </div>
                  </section>
                  <section className="account">
                     <div className="account-content-wrapper">
                        <h3 className="account-title">
                           Argent Bank Savings (x6712)
                        </h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">
                           Available Balance
                        </p>
                     </div>
                     <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                           View transactions
                        </button>
                     </div>
                  </section>
                  <section className="account">
                     <div className="account-content-wrapper">
                        <h3 className="account-title">
                           Argent Bank Credit Card (x8349)
                        </h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">
                           Current Balance
                        </p>
                     </div>
                     <div className="account-content-wrapper cta">
                        <button className="transaction-button">
                           View transactions
                        </button>
                     </div>
                  </section>
               </main>
            </>
         )}
      </>
   )
}

export default User
