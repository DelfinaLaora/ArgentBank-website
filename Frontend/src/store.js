import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'
import { userProfile } from './features/authService'

export const store = configureStore({
   reducer: {
      auth: authReducer,
      // profile: profileReducer,
      // Un service RTKQ génère un « slice reducer » et
      [userProfile.reducerPath]: userProfile.reducer,
   },
   // un middleware personnalisé qui gère la récupération des données
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userProfile.middleware),
})
// userProfil sera utilisé dans le composant user
// export default store
