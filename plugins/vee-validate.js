import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import { extend } from 'vee-validate';
import { required, email, numeric, is } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('email', email);
extend('required', required);
extend('numeric', numeric);

extend('is', {
  ...is,
  message: 'Field is not same'
});

