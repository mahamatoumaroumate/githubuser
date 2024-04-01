import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import user from '../mockData.js/mockUser'
import followers from '../mockData.js/mockFollowers'
import repos from '../mockData.js/mockRepos'
import axios from 'axios'
import { useEffect } from 'react'
const rootUrl = 'https://api.github.com'
export const searchUser = createAsyncThunk(
  'searchUser',
  async (user, thunkAPI) => {
    try {
      thunkAPI.dispatch(toggleError({ show: false, msg: '' }))

      const respPromise = axios.get(`${rootUrl}/users/${user}`)
      const [resp] = await Promise.allSettled([respPromise])

      if (resp.status === 'fulfilled') {
        const { login, followers_url } = resp.value.data

        const reposPromise = axios.get(
          `${rootUrl}/users/${login}/repos?per_page=100`
        )
        const followersPromise = axios.get(`${followers_url}?per_page=100`)

        const [reposResult, followersResult] = await Promise.allSettled([
          reposPromise,
          followersPromise,
        ])
        const repos =
          reposResult.status === 'fulfilled' ? reposResult.value.data : []
        const followers =
          followersResult.status === 'fulfilled'
            ? followersResult.value.data
            : []
        const { data } = resp.value

        return { data, repos, followers }
      } else {
        thunkAPI.dispatch(
          toggleError({
            show: true,
            msg: 'There Is No User With That Username',
          })
        )
        return null
      }
    } catch (error) {
      thunkAPI.dispatch(
        toggleError({
          show: true,
          msg: 'There Is No User With That Username',
        })
      )
      return {
        show: true,
        msg: 'There Is No User With That Username',
      }
    }
  }
)

export const checkRequest = createAsyncThunk('request', async (_, thunkAPI) => {
  try {
    const {
      data: { rate },
    } = await axios.get(`${rootUrl}/rate_limit`)
    let { remaining } = rate
    if (remaining === 0) {
      thunkAPI.dispatch(
        toggleError({
          show: true,
          msg: 'sorry,  you have exceeded your hourly rate limit',
        })
      )
    }
    return remaining
  } catch (error) {
    return {
      show: true,
      msg: 'sorry,  you have exceeded your hourly rate limit',
    }
  }
})

const initialState = {
  user,
  repos,
  followers,
  loading: false,
  requests: 0,
  error: { show: false, msg: '' },
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleError: (state, { payload }) => {
      state.error = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkRequest.pending, (state) => {
        state.loading = true
      })
      .addCase(checkRequest.fulfilled, (state, { payload }) => {
        state.loading = false
        state.requests = payload
      })
      .addCase(checkRequest.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
      .addCase(searchUser.pending, (state) => {
        state.loading = true
      })
      .addCase(searchUser.fulfilled, (state, { payload }) => {
        state.loading = false
        const { data, repos, followers } = payload
        state.user = data ? data : state.user
        state.repos = repos ? repos : state.repos
        state.followers = followers ? followers : state.followers
      })
      .addCase(searchUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload
      })
  },
})
export const { toggleError } = userSlice.actions
export default userSlice.reducer
