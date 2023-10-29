import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUserToken } from './authSlice'

const RequireAuth = () => {
   const token = useSelector(selectCurrentUserToken)
   const location = useLocation()
   console.log(token)
   return token ? (
      <Outlet />
   ) : (
      <Navigate to="/profile" state={{ from: location }} replace />
   )
}
export default RequireAuth
