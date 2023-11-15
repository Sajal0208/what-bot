import { atom } from "recoil";

export interface UserState {
  isLoading: boolean;
  userEmail: string | null;
}

export const userState = atom({
  key: "userState",
  default: {
    isLoading: true,
    userEmail: null,
  } as UserState,
});
