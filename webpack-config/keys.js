const mode = process.env.NODE_ENV || 'development'
const isProduction = mode === 'production'

module.exports = {
  mode,
  isProduction
}
