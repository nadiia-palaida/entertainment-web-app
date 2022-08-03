import Vue from 'vue'
import { ValidationProvider } from 'vee-validate';

import { extend } from 'vee-validate';
import { required, email, numeric } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);

extend('email', email);
extend('required', required);
extend('numeric', numeric);
