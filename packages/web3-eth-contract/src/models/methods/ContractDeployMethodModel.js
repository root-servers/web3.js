/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file ContractDeployMethod.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import {SendTransactionMethod} from 'web3-core-method';

export default class ContractDeployMethod extends SendTransactionMethod {
    /**
     * @param {Contract} contract
     * @param {SendTransactionMethodCommand} sendTransactionMethodCommand
     * @param {Object} utils
     * @param {Object} formatters
     * @param {Accounts} accounts
     *
     * @constructor
     */
    constructor(contract, sendTransactionMethodCommand, utils, formatters, accounts) {
        super(command, utils, formatters, accounts);

        this.contract = contract;
    }

    /**
     * This method will be executed before the RPC request.
     *
     * @method beforeExecution
     *
     * @param {AbstractWeb3Module} moduleInstance - The module where the method is called from for example Eth.
     */
    beforeExecution(moduleInstance) {
        super.beforeExecution(moduleInstance);
        delete this.parameters[0].to;
    }

    /**
     * This method will be executed after the RPC request.
     *
     * @method afterExecution
     *
     * @param {Object} response
     *
     * @returns {*}
     */
    afterExecution(response) {
        const clonedContract = this.contract.clone();
        clonedContract.options.address = response.contractAddress;

        return clonedContract;
    }
}