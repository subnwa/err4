const StandardHttpError = require('standard-http-error');
const error = require('src/error');

function factory(options) {
    return class extends StandardHttpError{
        static get err4() {
            return options.err4;
        }
    }
}

let result;
module.exports = error.reduceRight((result, error) => {
    result.message[error.name] = factory(reportError(error));

    return result;

    }

);