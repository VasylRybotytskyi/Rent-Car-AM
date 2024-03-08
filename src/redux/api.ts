// import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { RootState } from './store'
// import { toastError } from '@/utils/lib/toastify'

// const headers = {
// 	'Accept-Encoding': 'gzip, deflate, br'
// }

// const baseQuery = fetchBaseQuery({
// 	baseUrl: 'СИЛКА НА ТВОЄ АРІ",
// 	credentials: 'include',
// 	headers
// })

// const baseQueryWithReauth = async (args: FetchArgs, api: BaseQueryApi, extraOptions: object) => {
// 	const result = await baseQuery(args, api, extraOptions)
// 	const state = api.getState() as RootState

// 	// Якщо бекенд повертаж код 401 то юзер не авторизований, в твому випадку ця перевырка не потрыбна так як ти юзаэш фаэрбейс
// 	if (result?.error?.status === 401) {
// 		const isAuthenticate = state.userStore.isAuthenticate

// 		if (isAuthenticate) {
// 			api.dispatch({
// 				type: 'user/logout'
// 			})

// 			toastError({
// 				content: 'Session timed out! Please, log in again.'
// 			})

// 			document.location = '/'
// 		}
// 	}

// 	return result
// }

// export const apiSlice = createApi({
// 	baseQuery: baseQueryWithReauth,
// 	endpoints: () => ({}),
// 	tagTypes: ['Me']
// })
