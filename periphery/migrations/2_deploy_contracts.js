const Router = artifacts.require("UniswapV2Router02");
const WETH = artifacts.require("WETH");


module.exports = async function (deployer, newtwork) {
    let weth;
    const FACTORY_ADDRESS = "0xc03deeb0c5db30419180674dc81904f2a44cbac6";

    if (newtwork === 'mainnet') {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    } else {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);

}