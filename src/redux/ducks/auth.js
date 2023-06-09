import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    isSignedUp: false,
    action: {
      isFetching: false,
      success: false,
      error: false,
      data: null,
    },
  },
  reducers: {
    signin(state, action) {
      return {
        ...state,
        action: {
          ...state.action,
          isFetching: true,
          data: action.payload,
        },
      };
    },
    signinSuccess(state, action) {
      return {
        ...state,
        isLoggedIn: true,
        action: {
          ...state.action,
          success: true,
        },
      };
    },
    signinError(state, action) {
      return {
        ...state,
        action: {
          ...state.action,
          error: action.payload,
        },
      };
    },
    signinInit(state, action) {
      return {
        ...state,
        action: {
          isFetching: false,
          success: null,
          error: null,
          data: null,
        },
      };
    },

    session(state, action) {
      return {
        ...state,
        action: {
          ...state.action,
          isFetching: true,
        },
      };
    },
    sessionSuccess(state, action) {
      return {
        ...state,
        isLoggedIn: true,
        action: {
          ...state.action,
          success: true,
        },
      };
    },
    sessionError(state, action) {
      return {
        ...state,
        action: {
          ...state.action,
          error: action.payload,
        },
      };
    },
    sessionInit(state, action) {
      return {
        ...state,
        action: {
          isFetching: false,
          success: null,
          error: null,
          data: null,
        },
      };
    },

    signup(state, action) {
      return {
        ...state,
        action: {
          ...state.action,
          isFetching: true,
          data: action.payload,
        },
      };
    },
    signupSuccess(state, action) {
      return {
        ...state,
        isSignedUp: true,
        action: {
          ...state.action,
          success: true,
        },
      };
    },
    signupError(state, action) {
      return {
        ...state,
        action: {
          ...state.action,
          error: action.payload,
        },
      };
    },
    signupInit(state, action) {
      return {
        ...state,
        action: {
          isFetching: false,
          success: null,
          error: null,
          data: null,
        },
      };
    },
    signOut(state, action) {
      return {
        isLoggedIn: false,
        isSignedUp: false,
        action: {
          isFetching: false,
          success: false,
          error: false,
          data: null,
        },
      };
    },
    getDashboardStats(state, action) {
      return state;
    },
  },
});

export const {
  signOut,
  signin,
  signinError,
  signinInit,
  signinSuccess,
  signup,
  signupSuccess,
  signupError,
  signupInit,
  getDashboardStats,
  session,
  sessionSuccess,
  sessionError,
  sessionInit,
} = authSlice.actions;

export default authSlice.reducer;
