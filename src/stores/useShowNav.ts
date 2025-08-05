import { create } from "zustand";

interface UseShowNavProps {
  show: boolean;
  setShow: (val: boolean) => void;
}

export const useShowNav = create<UseShowNavProps>((set) => ({
  show: false,

  setShow: (val) =>
    set({
      show: val
    })
}));
