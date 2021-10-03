require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe story repeat pitch proud include enroll army gather'; 
let testAccounts = [
"0x0b84e263992f05704013275623387c0549658da21d37923d4ebfaacbbf002b5b",
"0xb4a2c9afcf0ecf15b3de1d4138bf271dc98200cf8ac250461e07fa03d5a4c663",
"0xb1cac0508efd13ccd92619821b83020586e9c82874d065f882f909caa293144b",
"0x87a9391d345453e4194280b03ea791e244f1296d7656d5d9847f76a307c7d382",
"0x4f063e2a3616c7756045ce4194e630638789d0e6df43709f3011c2cd6dd6dc45",
"0x93d651f196675e372ed5a6134cd7ffc5b3859334c72b3f24f0b1bcc27b79fce7",
"0x54cb5780ee408b4abb8bbe188a105b05f829c63709decb54960ad3b341e57ebf",
"0xbb95d554a53ac14abc8f424b30977545bd9654496374d2f9acd87655debc336a",
"0x0ebb6167931d51df9de431b59c2a156af57ef1fc3f7ad7e4c37b7820d4c03bdf",
"0x766368914168493b505d0ab062348bc3c43b453672fe48281512a64f23f58f62"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

