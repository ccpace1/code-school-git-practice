
// Hold methods for fetching cfg values

const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {

       return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds151602.mlab.com:51602/nodetodocp';

    }


};
