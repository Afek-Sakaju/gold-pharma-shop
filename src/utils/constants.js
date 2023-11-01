export const SERVER_URL = process.env.REACT_APP_DB_URL;
export const REMOVE_BG_API_URL = process.env.REACT_APP_REMOVE_BG_API_URL;
export const REMOVE_BG_API_KEY = process.env.REACT_APP_REMOVE_BG_API_KEY;

export const LOGO_SRC = '/Afek-Sakaju/gold-pharma-shop/shop-logo.png';
export const PLACEHOLDER_PRODUCT_IMAGE =
  '/Afek-Sakaju/gold-pharma-shop/placeholder-product-image.png';

export const CURRENCY_SIGN = '$';
export const MIN_PRODUCT_PRICE = 0;
export const MAX_PRODUCT_PRICE = 999;

export const MAX_PRODUCT_NAME_LENGTH = 25;
export const MIN_PRODUCT_NAME_LENGTH = 3;

export const BUTTONS_LABELS = {
  CREATE_PAGE_SUBMIT: 'Create',
  EDIT_PAGE_SUBMIT: 'Update',
};

export const NAV_PATHS = {
  CREATE_NEW_PRODUCT_PAGE: '/product/new',
  HOME_PAGE: '/',
  PRODUCT_PATH: '/product',
  PRODUCT_LIST_PAGE: '/shop',
};

export const TEXT_CONTENT = {
  CHANGE_PRODUCT_IMAGE_BUTTON: 'Change Product Image',
  CREATE_NEW_PRODUCT_BUTTON: 'Create A New Product',
  CREATE_PAGE_TITLE: 'Create a New \nProduct',
  EDIT_PAGE_TITLE: 'Edit Product \nData',
  LOADER_TEXT: 'Loading Data...',
  PRODUCT_NAME_INPUT: 'Enter Product Name',
  PRODUCTS_LIST_PAGE_ADMIN_TITLE: 'Admin mode',
  UPLOAD_PRODUCT_IMAGE_BUTTON: 'Upload Product Image',
  SHOP_ENTRANCE_OPTIONS_GUIDE: `This online pharma shop web application features two main modes:

		- Admin mode designed for product data management.
		- Customer mode providing a seamless shopping experience.

		Feel free to explore the app in these two modes to gain a better understanding of the shop's features and the experience it offers.`,
  SHOP_ENTRANCE_OPTIONS_BUTTONS_TITLE: 'Visit the shop as:',
  SHOP_ENTRANCE_MAIN_TITLE: 'Entry Options',
  SHOP_ENTRANCE_CUSTOMER_BUTTON: 'Customer',
  SHOP_ENTRANCE_ADMIN_BUTTON: 'Admin',
};

export const COMPONENTS_CLASSES = {
  PRODUCT_IMAGE: 'product-image',
  PRODUCT_NAME: 'product-name',
};

export const IMAGES_ALTS = {
  PRODUCT_IMAGE: 'Product-Image',
  SHOP_LOGO: 'Shop-Logo',
};

export const COMPONENTS_IDS = {
  UPLOAD_IMAGE_BUTTON: 'upload-image',
};
