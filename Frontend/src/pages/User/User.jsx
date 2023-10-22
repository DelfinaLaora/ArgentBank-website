// import { useSelector } from 'react-redux'
// import { useLocation } from 'react-router-dom'
// import { selectCurrentToken } from '../../features/authSlice'
// import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { fetchProfil } from '../../features/profileSlice'
// import { useState } from 'react'
// import { useSelector } from 'react-redux'
// import { setCredentials } from '../../features/authSlice'
import { useGetUserProfileQuery } from '../../features/authService'
// import Loader from '../../utils/Style/Loader'

// import {
//    useGetAllProfileQuery,
//    useGetUserNameQuery,
// } from '../../features/apiSlice'

function User() {
   // const dispatch = useDispatch()
   // const token = useSelector((state) => state.auth.token)
   // const { userInfo } = useSelector((state) => state.auth)
   // console.log(userInfo?.userName)
   const token = localStorage.getItem('userToken')
      ? localStorage.getItem('userToken')
      : null
   console.log(token) /*uniquement le token */
   // const { userName } = useSelector((state) => state.auth.userInfo)
   // console.log(userName)

   // automatically authenticate user if token is found
   // const { data, error, isLoading, isFetching, isSuccess } =
   const { data } = useGetUserProfileQuery()
   console.log(data)
   console.log(data?.body.userName)
   const userName = data?.body.userName
   // dispatch(fetchProfil({ userName }))
   // console.log(userName)
   // dispatch(useGetUserProfileQuery)

   if (token) {
      return (
         <main className="main bg-dark">
            <div className="header">
               <h1>
                  Welcome back
                  <br />
                  {/* {welcome} */}
                  {/* {location.state.id} */}
                  {userName}
                  Iron
               </h1>
               {/* {isLoading && <h2>...Loading</h2>}
               {isFetching && <h2>...isFetching</h2>}
               {error && <h2>...Error</h2>}
               {isSuccess && (
                  <div>
                     {data?.map((profile) => {
                        return (
                           <div key={ConstantSourceNode.id}>
                              <span>{profile.userName}</span>
                           </div>
                        )
                     })}
                  </div>
               )} */}
               <button className="edit-button">Edit Name</button>
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
                  <h3 className="account-title">Argent Bank Savings (x6712)</h3>
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
                  <p className="account-amount-description">Current Balance</p>
               </div>
               <div className="account-content-wrapper cta">
                  <button className="transaction-button">
                     View transactions
                  </button>
               </div>
            </section>
         </main>
      )
   }
}

export default User
