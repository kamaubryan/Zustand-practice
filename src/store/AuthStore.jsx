// create authStore
// initialize user should be null
// setup isloggin status
// save user details
// check if user is authenticated
// handle login and logout functionality
// get user details from local storage
// set the new user details in the local storage

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isUserLoggedIn: false,
      loginUser: () =>
        set((userData) => {
          return { user: userData, isUserLoggedIn: true };
        }),
    }),
    {
      name: "authstate",
      getStorage: () => localStorage,
      partialize: (state) => state.user,
    }
  )
);

export default useAuthStore;
