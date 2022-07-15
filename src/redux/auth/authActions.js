import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('users/registerRequest');
export const registerSuccess = createAction('users/registerSuccess');
export const registerError = createAction('users/registerError');


