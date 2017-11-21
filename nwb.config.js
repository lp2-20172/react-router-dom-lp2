module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactRouterDomLp2',
      externals: {
        react: 'React'
      }
    }
  }
}
