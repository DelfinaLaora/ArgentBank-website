import { createSlice } from '@reduxjs/toolkit'
import { fetchLogin } from './authActions'

const token = localStorage.getItem('userToken')
   ? localStorage.getItem('userToken')
   : null

const initialState = {
   token,
   loading: false,
   error: null,
}

// on gère les actions dans le reducer
const authSlice = createSlice({
   // le nom du slice
   name: 'auth',
   // le state initial
   initialState: initialState,
   // reducers permet de définir les actions et le reducer
   reducers: {
      // Logique de réducteur standard, avec des types
      // d’action générés automatiquement par réducteur
      // l'action logOut
      logOut: (state) => {
         state.loading = false
         state.error = null
         state.token = null
         localStorage.removeItem('userToken')
      },
   },

   extraReducers: (builder) => {
      //  Ajout des réducteurs pour des types d’action supplémentaires,
      // et gère l’état de chargement si nécessaire
      // builder.addCase(actionCreator, reducer)
      builder.addCase(fetchLogin.pending, (state, action) => {
         state.loading = true
      })
      builder.addCase(fetchLogin.fulfilled, (state, action) => {
         state.loading = false
         state.error = null
         state.token = action.payload
      })
      builder.addCase(fetchLogin.rejected, (state, action) => {
         state.loading = false
         state.error = action.payload
         state.token = null
      })
   },
})

// on export chaque action individuellement
export const { logOut } = authSlice.actions
// on export le reducer comme default export
export default authSlice.reducer
