import { createSlice } from '@reduxjs/toolkit'
import { fetchLogin, fetchProfil, updateUserName } from './authActions'

const token = localStorage.getItem('userToken')
   ? localStorage.getItem('userToken')
   : null

const initialState = {
   token,
   loading: false,
   error: null,
   userInfo: {},
   userName: null,
}

// on gère les actions dans le reducer
const authSlice = createSlice({
   // le nom du slice
   name: 'auth',
   // le state initial
   initialState,
   // reducers permet de définir les actions et le reducer
   reducers: {
      // Logique de réducteur standard, avec des types
      // d’action générés automatiquement par réducteur
      // l'action logOut
      logOut: (state) => {
         localStorage.removeItem('userToken')
         state.loading = false
         state.error = null
         state.token = null
         state.userInfo = null
         state.userName = null
      },
   },

   extraReducers(builder) {
      // Ajout des réducteurs pour des types d’action supplémentaires,
      // et gère l’état de chargement si nécessaire
      // builder.addCase(actionCreator, reducer)
      builder
         // token 'user/login'
         .addCase(fetchLogin.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchLogin.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.token = action.payload
            localStorage.setItem('userToken', state.token)
         })
         .addCase(fetchLogin.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.token = null
         })
         // profil user 'user/profile'
         .addCase(fetchProfil.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchProfil.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.userInfo = action.payload
            state.userName = action.payload?.userName
         })
         .addCase(fetchProfil.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.userInfo = null
         })
         // edit user 'user/userName'
         .addCase(updateUserName.pending, (state, action) => {
            state.loading = false
         })
         .addCase(updateUserName.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            // if (!action.payload) {
            //    console.log('telechargement incomplet')
            //    console.log(action.payload)
            //    return
            // }
            state.userName = action.payload.userName
         })
         .addCase(updateUserName.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

// on export chaque action individuellement et seront destructuré
export const { logOut } = authSlice.actions
// on export le reducer comme default export
export default authSlice.reducer

export const selectCurrentUserToken = (state) => state.auth.token
export const selectCurrentUserInfo = (state) => state.auth.userInfo
export const selectCurrentError = (state) => state.auth.error
export const selectCurrentLoading = (state) => state.auth.loading
export const selectCurrentUserName = (state) => state.auth.userName
