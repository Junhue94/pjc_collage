import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import jQuery from 'jquery';

const SERVER_URL = process.env.NODE_ENV === 'production'
    ? 'https://api.pjccollage.com'
    : 'http://localhost:8400/api';

/**
 * Feathers Client
 */
const feathersClient = feathers()
    .configure(hooks())
    .configure(rest(SERVER_URL).jquery(jQuery))
    .configure(auth({ storage: window.localStorage }));

export default feathersClient;
