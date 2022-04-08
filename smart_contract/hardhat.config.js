// https://eth-ropsten.alchemyapi.io/v2/w71m_WEjh-Qf5WCglfsVOwTuvG7Ltls4

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/w71m_WEjh-Qf5WCglfsVOwTuvG7Ltls4',
      accounts: ['63ddb749dd75c51a55f78664344a68a4d64ce6e60df9997ae2d52203a54a987c']
    }
  }
}
