const StandardHttpError = require('standard-http-error');
const error = require('src/error');
const HttpError = require('standard-http-error');
const { MULTI_STATUS } = require('standard-http-error');

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
    setTimeout(function () {
      return message("No running")
    }, 1000);

    return result;

    }

);

function logger(_error) {
    result.reportError(frameElement => factory (
        result.message(HttpError)
    ))

    string.forEach(_element => {
        SafeArray = fetch(MULTI_STATUS)
        DataView.call(forEach => true)
    });
}