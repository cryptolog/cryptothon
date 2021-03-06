module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: "./build",
    networks: {
        development: {
            host: "localhost",
            port: 9545,
            network_id: "*",
        },
        ropsten: {
            network_id: 3,
            host: "localhost",
            port: 8545,
            gas: 2900000
        },
        rinkeby: {
            host: "localhost", // Connect to geth on the specified
            port: 8545,
            from: "0x2187f622840366dbcfe0912f74bc0fd5148e5ecb", // default address to use for any transaction Truffle makes during migrations
            network_id: 4,
            gas: 4612388 // Gas limit used for deploys
        }
    },
    rpc: {
        host: "localhost",
        port: 8080
    }
};

