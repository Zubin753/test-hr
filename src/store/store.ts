import {create} from 'zustand';

interface IUser{
  id: string | null
  name: string | null;
  avatar: string | null;
}

interface userState{
  isAuth: boolean;
  user: IUser,
  setUser: (name: string, avatar: string, id: string) => void
  logout: () => void
}

const useUserStore = create<userState>((set) => ({
  isAuth: false,
  user: {name: null, avatar: null, id: null},
  setUser: (name, avatar, id) => set((state) => ({...state, isAuth:true, user: {...state.user, avatar: avatar, name: name, id: id}})),
  logout: () => set((state) => ({...state, isAuth:false, user: {...state.user, avatar: null, name: null, id: null}}))
}));

export default useUserStore;