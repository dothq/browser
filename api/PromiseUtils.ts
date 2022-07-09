/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

type PromiseUtilsType = {
	defer: () => any;
	idleDispatch: (callback: any, timeout: number) => any;
};

const { PromiseUtils } = window.ChromeUtils.import<PromiseUtilsType>(
	"resource://gre/modules/PromiseUtils.jsm"
);

export default PromiseUtils;
