// Point d’entrée spécifique à React pour générer des hooks React
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { createSlice } from '@reduxjs/toolkit'

const baseUrl = `http://localhost:3001/api/v1`

// creatAPI permet de définir un ensemble de « endpoints »
// qui décrivent comment récupérer les données des API backend.
export const userProfile = createApi({
   // reducerPath est une clé unique sur laquelle votre service
   // sera monté dans le store. La valeur par défaut est 'api'.
   reducerPath: 'userProfile',
   // baseQuery est utilisé pour définir chaque endpoint si l’ption queryFn
   // n’est pas spécifiée. RTK Query fournit un utilitaire appelé fetchBaseQuery,
   // qui est un wrapper léger autour de fetch.
   baseQuery: fetchBaseQuery({
      // URL de base de l'api Backend
      baseUrl,
      // prepareHeaders est utilisé pour configurer le header de chaque
      // requête et donne accès à getState que nous utilisons pour inclure
      //  le token dans le store
      prepareHeaders: (headers, { getState }) => {
         const token = getState().auth.token
         console.log(token)
         if (token) {
            // inclure le token dans le header req
            headers.set('authorization', `Bearer ${token}`)
         }
         return headers
      },
   }),
   //  création d'un endpoint de requête
   endpoints: (builder) => ({
      getUserProfile: builder.query({
         query: () => ({
            url: `/user/profile`,
            method: 'POST',
         }),
      }),
   }),
})

export const { useGetUserProfileQuery } = userProfile
