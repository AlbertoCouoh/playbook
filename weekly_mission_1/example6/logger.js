class Logger {
    constructor (name) {
        this.count = 0
        this.name = name
    }

    log (message) {
        this.count++
        console.log('[' + this.name + ']')
    }
}

module.exports = new Logger('DEFAULT')
module.exports.Logger = Logger