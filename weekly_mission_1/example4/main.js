const Logger = require('./logger')

const dbLogger = new Logger('DB')

dbLogger.info('This is an informational message')

const accessLoguer = new Logger('ACCESS')
accessLoguer.verbose('This is a verbose message')