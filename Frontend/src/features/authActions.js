import { createAsyncThunk } from '@reduxjs/toolkit'

const urlLogin = `http://localhost:3001/api/v1/user/login`
// on crée le Thunk

export const fetchLogin = createAsyncThunk(
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
            console.log(data)
            const token = data.body.token
            console.log(token) /*uniquement le token */
            localStorage.setItem('userToken', token)

            return data
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
