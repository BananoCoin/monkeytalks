// Javascript Modules
//require('jquery');
//require('bootstrap');
//import * as io from 'socket.io-client';

// Fontawesome
import {library, dom} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(far, fas, fab)
dom.watch()

// Expose items to window
//window.jQuery = window.$ = jQuery;