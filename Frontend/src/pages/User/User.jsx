import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { fetchProfil } from '../../features/authActions'
import {
   selectCurrentLoading,
   selectCurrentError,
   selectCurrentUserToken,
   selectCurrentUserInfo,
} from '../../features/authSlice'
import Loader from '../../utils/Loader/Loader'
import Error from '../../pages/Error/Error'
import AccountTransaction from '../../components/Account/Account'

import Modal from '../../components/Modal/Modal'
import { openModal } from '../../features/modalSlice'

const account = [
   {
      id: 1,
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
   },
   {
      id: 2,
      title: 'Argent Bank Checking (x8349)',
      amount: '$10,928.42',
      description: 'Available Balance',
   },
   {
      id: 3,
      title: 'Argent Bank Checking (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
   },
]

function User() {
   const dispatch = useDispatch()

   const token = useSelector(selectCurrentUserToken)
   const loading = useSelector(selectCurrentLoading)
   const error = useSelector(selectCurrentError)
   const user = useSelector(selectCurrentUserInfo)

   const { isOpen } = useSelector((state) => state.modal)

   useEffect(() => {
      if (token) dispatch(fetchProfil())
   }, [dispatch, token])

   return (
      <>
         {error && <Error>{error}</Error>}
         {loading ? (
            <Loader />
         ) : (
            <>
               {isOpen && <Modal />}
               <main className="main bg-dark">
                  <div className="header">
                     {token !== null ? (
                        <h1>
                           Welcome back
                           <br />
                           {user.firstName} {user.lastName}
                        </h1>
                     ) : (
                        <h1>welcome</h1>
                     )}

                     <button
                        className="edit-button"
                        onClick={() => dispatch(openModal())}
                     >
                        Edit Name
                     </button>
                  </div>

                  <div className="contener-account">
                     <h2 className="sr-only">Accounts</h2>
                     {account.map((account, index) => (
                        <AccountTransaction
                           key={`${account}-${index}`}
                           title={account.title}
                           amount={account.amount}
                           description={account.description}
                           id={account.id}
                        />
                     ))}
                  </div>
               </main>
            </>
         )}
      </>
   )
}

export default User
