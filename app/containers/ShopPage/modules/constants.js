/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';


export const LOAD_SHOP_TYPES = 'App/Shop/LOAD_SHOP_TYPES';
export const LOAD_SHOP_TYPES_SUCCESS = 'App/Shop/LOAD_SHOP_TYPES_SUCCESS';

export const INIT_SHOP_LIST = 'App/Shop/INIT_SHOP_LIST';
export const LOAD_SHOP_LIST = 'App/Shop/LOAD_SHOP_LIST';
export const LOAD_SHOP_LIST_SUCCESS = 'App/Shop/LOAD_SHOP_LIST_SUCCESS';
export const LOAD_SHOP_LIST_ERROR = 'App/Shop/LOAD_SHOP_LIST_ERROR';
