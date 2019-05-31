var assert = require('assert');
var hello = require('./hello.js');
var openwhisk = require('openwhisk');
var ow;

/**
 * Create a function which delegates to openwhisk to run a function f
 */
function makeAdapter(f) {
    return function(params) {
        return ow.actions.invoke({name: f,
                                  blocking: true,
                                  result:true,
                                  params:params});
    };
}

/**
 * For each function in an object, create an openwhisk adapter.
 * return an object with each adapter function.
 */
function adapt(obj) {
    var adapter= {}
    for (var p in obj) {
        adapter[p] =  makeAdapter(p)
    }
    return adapter;
}


describe('hello', function() {
    
    before( function() {
        if (process.env.TEST_OPENWHISK) {
           options = { apihost: process.env.OPENWHISK_HOST,
                       api_key: process.env.OW_AUTH_KEY };
           ow = openwhisk(options);
           hello = adapt(hello,ow);
        }
    });

    describe('hello', function() {
        it('should throw an error when name is not present', function() {
            var params = {}
            return hello.hello(params).then(function(result) {
                assert(false);
            }).catch(function(err) {
                assert(true);
            });
        });
    });

    describe('hello', function() {
        it('should return Hello, jello!', function() {
            var params = { name: 'jello' };

            return hello.hello(params).then(function(result) {
                assert.notEqual(result.payload,undefined);
                assert.equal(result.payload,"Hello, jello!");
            })
        });
    });

});
