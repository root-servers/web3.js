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
 * @file AllEventsLogDecoder.js
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2019
 */

import EventLogDecoder from './EventLogDecoder';

export default class AllEventsLogDecoder extends EventLogDecoder {
    /**
     * @param {AbiCoder} abiCoder
     *
     * @constructor
     */
    constructor(abiCoder) {
        super(abiCoder);
    }

    /**
     * Decodes the event subscription response
     *
     * @method decode
     *
     * @param {AbiModel} abiModel
     * @param {Object} response
     *
     * @returns {Object}
     */
    decode(abiModel, response) {
        const abiItemModel = abiModel.getEventBySignature(response.topics[0]);

        if (abiItemModel) {
            return super.decode(abiItemModel, response);
        }

        return {
            raw: {
                data: response.data,
                topics: response.topics
            }
        };
    }
}