import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   selectCurrentUserInfo,
   selectCurrentUserToken,
} from '../../features/authSlice'
import { fetchProfil, fetchUserName } from '../../features/authActions'

function EditUser() {
   const form = useRef()
   const token = useSelector(selectCurrentUserToken)
   const user = useSelector(selectCurrentUserInfo)
   console.log(user)
   console.log(user.userName)

   const dispatch = useDispatch()

   useEffect(() => {
      if (token) dispatch(fetchProfil())
   }, [dispatch, token])

   async function handleEdit(e) {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const userName = formData.get('userName')

      await dispatch(fetchUserName({ editUserName: userName }))

      dispatch(fetchProfil())
   }

   return (
      <main className="main bg-dark">
         <div className="header">
            <h1>Edit user info</h1>
         </div>
         <section className="edit-in-content">
            <form ref={form} onSubmit={handleEdit}>
               <div className="input-wrapper-edit">
                  <label htmlFor="userName">User name :</label>
                  <input
                     type="text"
                     name="userName"
                     id="userName"
                     placeholder={user.userName}
                  />
               </div>
               <div className="input-wrapper-edit">
                  <label htmlFor="FirstName">First name :</label>
                  <input
                     type="text"
                     name="FirstName"
                     value={user.firstName}
                     id="FirstName"
                     readOnly
                  />
               </div>
               <div className="input-wrapper-edit">
                  <label htmlFor="LastName">Last name :</label>
                  <input
                     type="text"
                     name="LastName"
                     value={user.lastName}
                     id="LastName"
                     readOnly
                  />
               </div>
               <button type="submit" className="edit-in-button">
                  Save
               </button>
               <button type="button" className="edit-in-button">
                  Cancel
               </button>
            </form>
         </section>
         <h2 className="sr-only">Accounts</h2>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">Argent Bank Checking (x8349)</h3>
               <p className="account-amount">$2,082.79</p>
               <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
         <section className="account">
            <div className="account-content-wrapper">
               <h3 className="account-title">Argent Bank Savings (x6712)</h3>
               <p className="account-amount">$10,928.42</p>
               <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
               <button className="transaction-button">View transactions</button>
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
               <button className="transaction-button">View transactions</button>
            </div>
         </section>
      </main>
   )
}
export default EditUser
