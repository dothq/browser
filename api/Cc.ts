/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { CiInterface } from "./Ci";

interface CcClass {
	name: string;
	number: string;
	createInstance: () => any;
	getService: (i: CiInterface) => any;
}

type CcType = {
	[key: string]: CcClass;
};

const Cc = window.Cc as CcType;

export default Cc;
