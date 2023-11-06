import { createAsyncThunk } from '@reduxjs/toolkit'

const urlLogin = `http://localhost:3001/api/v1/user/login`

// on crée le Thunk
export const fetchLogin = createAsyncThunk(
   // le nom de l'action
   'user/login',
   async ({ email, password }, { rejectWithValue }) => {
      try {
         const response = await fetch(urlLogin, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               accept: 'application/json',
            },
            body: JSON.stringify({ email, password }),
         })
         if (response.ok) {
            const data = await response.json()
            return data.body.token
         }
         if (response.status === 400)
            throw new Error(
               `Veuillez indiquer un mail ou un mot de passe valide`
            )
      } catch (err) {
         if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
         } else {
            return rejectWithValue(err.message)
         }
      }
   }
)

const urlProfil = `http://localhost:3001/api/v1/user/profile`

export const fetchProfil = createAsyncThunk('user/profile', async () => {
   const token = localStorage.getItem('userToken')
   try {
      const res = await fetch(urlProfil, {
         method: 'POST',
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
      if (res.ok) {
         const data = await res.json()
         return data.body
      }
   } catch (err) {
      console.log(err)
   }
})

export const updateUserName = createAsyncThunk(
   'user/userName',
   async ({ editUserName }, { rejectWithValue }) => {
      const token = localStorage.getItem('userToken')
      try {
         const res = await fetch(urlProfil, {
            method: 'PUT',
            headers: {
               accept: 'application/json',
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName: editUserName }),
         })
         if (res.ok) {
            const data = await res.json()
            return data.body
         }
      } catch (err) {
         if (err.response && err.response.data.message) {
            return rejectWithValue(err.response.data.message)
         } else {
            return rejectWithValue(err.message)
         }
      }
   }
)
