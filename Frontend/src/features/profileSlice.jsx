// import { createSlice } from '@reduxjs/toolkit'

// // const userInfo = {
// //    email: '',
// //    firstName: '',
// //    lastName: '',
// //    userName: '',
// //    id: '',
// // }

// const initialState = {
//    loading: false,
//    error: null,
//    userInfo: {},
//    //    status: 'idle', //'idle'| 'loading'| 'succeeded' | 'failed'
// }

// // on gère les actions dans le reducer
// const profileSlice = createSlice({
//    // le nom du slice
//    name: 'profile',
//    // le state initial
//    initialState,
//    // reducers permet de définir les actions et le reducer
//    reducers: {
//       // Logique de réducteur standard, avec des types
//       // d’action générés automatiquement par réducteur
//       // l'action logOut
//       logOutProfil: (state, action) => {
//          state.userInfo = null
//       },

//       setCredentials: (state, action) => {
//          state.userInfo = action.payload
//          //  state.status = 'succeeded'
//       },
//    },

//    // extraReducers(builder) {
//    //    //  Ajout des réducteurs pour des types d’action supplémentaires,
//    //    // et gère l’état de chargement si nécessaire
//    //    // builder.addCase(actionCreator, reducer)

//    //    // profil user
//    //    builder
//    //       .addCase(fetchProfil.pending, (state, action) => {
//    //          state.loading = true
//    //       })
//    //       .addCase(fetchProfil.fulfilled, (state, action) => {
//    //          state.loading = false
//    //          state.error = null
//    //          state.userInfo = action.payload
//    //       })
//    //       .addCase(fetchProfil.rejected, (state, action) => {
//    //          state.loading = false
//    //          state.error = action.payload
//    //          state.userInfo = null
//    //       })
//    // },
// })

// // on export chaque action individuellement
// export const { logOutProfil, setCredentials } = profileSlice.actions
// // on export le reducer comme default export
// export default profileSlice.reducer

// // export const selectCurrentProfileError = (state) => state.profile.error
// // export const selectCurrentProfileLoading = (state) => state.profile.loading
// export const selectCurrentUserInfo = (state) => state.profile.userInfo
// export const selectCurrent = (state) => state.profile
