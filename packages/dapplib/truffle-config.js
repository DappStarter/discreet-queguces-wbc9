require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind concert grace desert flee slab'; 
let testAccounts = [
"0x66df6e676db0a12bdd0d51b28144e0a3ac5fe8818ec7b5425664c4fd4b47a079",
"0x684b32843207541bf9848e60a696b9ddb4f794d24a66b31c89ab046e483350e1",
"0x0025a3289d58d305bbcc4e979a3402d61256e1e05f32e932b7a3d627b51d2415",
"0xd8a209ba057eaf19342e700ee1eda5ae1d4a5ad71494c8425b4119a4a583c732",
"0xd5870c7c47d9b37d0ba93b665526eeeb87f3c5ceaee8ed98d4100ba536229984",
"0xdd4b5e85b7379732910ac17d41e5048d220490de6e9781ab8dfea3aab7659aff",
"0x0f5af0d371e6d7bee3bd58c3ce594c2598a135269141d79675c2adf98764af55",
"0x6758705bd97f4cb5cbbaf9730e14783974cd503f03d8065f4142abbeed994a53",
"0x9871944052e7bbdaf438c10e6a04248fdfe84cf2ac59811df48e8e4f901fd2ed",
"0xf8ff20326d429596d8e7e19681eb296e38beee113b7b0b579d43d2dbf383fd31"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

