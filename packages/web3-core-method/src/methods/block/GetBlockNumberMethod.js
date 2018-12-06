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
 * @file GetBlockNumberMethod.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import AbstractMethod from '../../../lib/methods/AbstractMethod';

export default class GetBlockNumberMethod extends AbstractMethod {
    /**
     * @param {CallMethodCommand} callMethodCommand
     * @param {Object} utils
     * @param {Object} formatters
     *
     * @constructor
     */
    constructor(callMethodCommand, utils, formatters) {
        super('eth_blockNumber', 0, callMethodCommand, utils, formatters);
    }

    /**
     * This method will be executed after the RPC request.
     *
     * @method afterExecution
     *
     * @param {Object} response
     *
     * @returns {Number}
     */
    afterExecution(response) {
        return this.utils.hexToNumber(response);
    }
}