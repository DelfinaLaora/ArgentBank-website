// ProtectedRoute.js
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { selectCurrentUserToken } from '../features/authSlice'

const ProtectedRoute = () => {
   const token = useSelector(selectCurrentUserToken)
   // Afficher non autorisé si aucun utilisateur n’est trouvé dans le magasin redux

   if (!token) {
      return (
         <div className="unauthorized">
            <h1>Unauthorized :(</h1>
            <span>
               <NavLink to="/sign-in">Login</NavLink> to gain access
            </span>
         </div>
      )
   }

   // returns child route elements
   return <Outlet />
}
export default ProtectedRoute
