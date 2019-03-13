const M = module.exports = {}

Object.assign(M, 
  require('./browser'),
  require('./desktop'),
  require('./mobile'),
  require('./server'),
)

