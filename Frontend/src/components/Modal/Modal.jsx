// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateUserName } from '../../features/authActions'
import { selectCurrentUserInfo } from '../../features/authSlice'
import { closeModal } from '../../features/modalSlice'

function Modal() {
   const user = useSelector(selectCurrentUserInfo)
   const dispatch = useDispatch()

   function handleEdit(e) {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const userName = formData.get('userName')

      dispatch(updateUserName({ editUserName: userName }))

      dispatch(closeModal())
   }
   return (
      <aside className="modal-container">
         <div className="modal">
            <div className="content-modal">
               <div className="edit">
                  <h2>Edit user info</h2>
                  <form onSubmit={handleEdit}>
                     <div className="input-wrapper-edit">
                        <label htmlFor="userName">User name :</label>
                        <input
                           type="text"
                           name="userName"
                           id="userName"
                           placeholder={user.userName || ''}
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

                     <button
                        type="button"
                        className="edit-in-button"
                        onClick={() => dispatch(closeModal())}
                     >
                        Cancel
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </aside>
   )
}

export default Modal
