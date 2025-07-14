import { AccessTypes } from "../models";


export const tabs = [
  {
    id: 'auth-tab-login',
    value: AccessTypes.login,
    label: 'Login',
    panelId: 'auth-tab-panel-login',
  },
  {
    id: 'auth-tab-signup',
    value: AccessTypes.signup,
    label: 'Sign Up',
    panelId: 'auth-tab-panel-signup',
  },
];