import { createContext, Dispatch } from 'react';
import { IDevit, ISocial, IUser } from './../interfaces';

interface IContext {
  userState: IUser
  userDispatch: Dispatch<any>
  socialState: ISocial
  socialDispatch: Dispatch<any>
  devitState: IDevit[]
  devitDispatch: Dispatch<any>
  uiState: {
    isCreateDevitFormOpen: boolean,
  }
  uiDispatch: Dispatch<any>
  userInteractions: any
  userInteractionsDispatch: Dispatch<any>
}

export const USER_INIT_STATE = {
  id: '',
  username: '',
  name: '',
  email: '',
  bio: '',
  profile_picture: '/assets/images/profile_picture.png',
  cover_picture: '',
  location: '',
  website : '',
  birth_date: new Date(),
  created_at: new Date(),
  first_edit: true
};

export const DEVIT_INIT_STATE: IDevit[] = [];

export const UI_INIT_STATE = {
  isCreateDevitFormOpen: false,
};

export const SOCIAL_INIT_STATE: any = {
  followins: [],
  followers: []
};

export const USER_INTERACTIONS_INIT_STATE: any  = {
  devits: [],
  revits: [],
  favs: []
};

export const AppContext = createContext<IContext>({ 
  userState: USER_INIT_STATE,
  userDispatch: () => null,
  socialState: SOCIAL_INIT_STATE,
  socialDispatch: () => null,
  devitState: DEVIT_INIT_STATE,
  devitDispatch: () => null,
  uiState: UI_INIT_STATE,
  uiDispatch: () => null,
  userInteractions: USER_INTERACTIONS_INIT_STATE,
  userInteractionsDispatch: () => null,
});
