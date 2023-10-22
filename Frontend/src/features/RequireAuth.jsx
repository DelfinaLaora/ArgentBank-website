import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './userSlice'

const RequireAuth = () => {
   const token = useSelector(selectCurrentToken)
   const location = useLocation()
   console.log(token)
   return token ? (
      <Outlet />
   ) : (
      <Navigate to="/user" state={{ from: location }} replace />
   )
}
export default RequireAuth
