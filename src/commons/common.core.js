export const getReactAppVersion = () => {
  return process.env.npm_package_version
}

export const getEnviroment = () => {
  return process.env.NODE_ENV || 'development'
}
