/**
 * A simple hello action.
 */
function main(params) {
    if (params.name) {
       return Promise.resolve({payload:  'Hello, ' + params.name + '!'});
    } else {
       return Promise.reject('name is undefined');
    }
}

module.exports.hello = main;
