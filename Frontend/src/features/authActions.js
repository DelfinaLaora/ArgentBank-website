import { createAsyncThunk } from '@reduxjs/toolkit'
// import { setCredentials } from './authSlice'
// import { useDispatch } from 'react-redux'
// import { selectCurrentUserToken } from './authSlice'
// import { useSelector } from 'react-redux'

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
            return data.body.token
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

const urlProfil = `http://localhost:3001/api/v1/user/profile`

// on crée le Thunk
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
         console.log(data)
         return data.body
      }
   } catch (err) {
      console.log(err)
   }
})

export const fetchUserName = createAsyncThunk(
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
            // body: JSON.stringify({ userName }),
         })
         if (res.ok) {
            const data = await res.json()
            console.log(data)
            return data.body
            // return data.body
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
