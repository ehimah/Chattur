'use strict';

var MongoClient = require('mongodb');
function usage() {
    console.log('Usage:');
    console.log('node', __filename, '<option>');
    console.log('Where option is one of:');
    console.log(' callbacks Use the callbacks paradigm');
    console.log(' promises Use the Promises paradigm');
    console.log(' generator Use the Generator paradigm');
    console.log(' async Use the async module');
}
if (process.argv.length < 3) {
    console.log("Incorrect number of arguments");
    usage();
} else {
    if (process.argv[2] === 'callbacks') {
        testWithCallbacks();
    } else if (process.argv[2] === 'promises') {
        testWithPromises();
    } else if (process.argv[2] === 'generator') {
        testWithGenerator();
    } else if (process.argv[2] === 'async') {
        testWithAsync();
    } else {
        console.log("Invalid option:", process.argv[2]);
        usage();
    }
}

function testWithCallbacks() {
    MongoClient.connect('mongodb://localhost/playground', function (err, db) {
        db.collection('employees').insertOne({ id: 1, name: 'A. Callback' }, function (err, result) {
            console.log("Result of insert:", result.insertedId);
            db.collection('employees').find({ id: 1 }).toArray(function (err, docs) {
                console.log('Result of find:', docs);
                db.close();
            });
        });
    });
}

function testWithPromises() {
    var db = void 0;
    MongoClient.connect('mongodb://localhost/playground').then(function (connection) {
        db = connection;
        return db.collection('employees').insertOne({ id: 1, name: 'B. Promises' });
    }).then(function (result) {
        console.log("Result of insert:", result.insertedId);
        return db.collection('employees').find({ id: 1 }).toArray();
    }).then(function (docs) {
        console.log('Result of find:', docs);
        db.close();
    }).catch(function (err) {
        console.log('ERROR', err);
    });
}

function testWithGenerator() {
    var co = require('co');
    co( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var db, result, docs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return MongoClient.connect('mongodb://localhost/playground');

                    case 2:
                        db = _context.sent;
                        _context.next = 5;
                        return db.collection('employees').insertOne({
                            id: 1,
                            name: 'C. Generator'
                        });

                    case 5:
                        result = _context.sent;

                        console.log('Result of insert:', result.insertedId);
                        _context.next = 9;
                        return db.collection('employees').find({ id: 1 }).toArray();

                    case 9:
                        docs = _context.sent;

                        console.log('Result of find:', docs);
                        db.close();

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    })).catch(function (err) {
        console.log('ERROR', err);
    });
}

function testWithAsync() {
    var async = require('async');
    var db = void 0;
    async.waterfall([function (next) {
        MongoClient.connect('mongodb://localhost/playground', next);
    }, function (connection, next) {
        db = connection;
        db.collection('employees').insertOne({ id: 1, name: 'D. Async' }, next);
    }, function (insertResult, next) {
        console.log('Insert result:', insertResult.insertedId);
        db.collection('employees').find({ id: 1 }).toArray(next);
    }, function (docs, next) {
        console.log('Result of find:', docs);
        db.close();
        next(null, 'All done');
    }], function (err, result) {
        if (err) console.log('ERROR', err);else console.log(result);
    });
}