import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import jQuery from 'jquery';

const SERVER_URL = process.env.NODE_ENV === 'production'
    ? 'http://cms1_5.vaultdragon.com:3040'
    : 'http://localhost:3090';

/**
 * Feathers Client
 */
const feathersClient = feathers()
    .configure(hooks())
    .configure(rest(SERVER_URL).jquery(jQuery))
    .configure(auth({ storage: window.localStorage }));

export default feathersClient;
