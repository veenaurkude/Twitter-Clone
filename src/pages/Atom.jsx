import { atom } from "recoil";

export const isLogin = atom({
  key: "isLogin",
  default: false,
});

export const tweetData = atom({
  key: "tweetData",
  default: [],
});
export const userData = atom({
  key: "userData",
  default: [],
});
