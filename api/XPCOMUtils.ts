/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { JSModule } from "mozilla";

const XPCOMUtilsModule = window.ChromeUtils.import(
	"resource://gre/modules/XPCOMUtils.jsm"
).XPCOMUtils as XPCOMUtils;

@JSModule()
class XPCOMUtils {
	private module = Object.freeze(XPCOMUtilsModule);

	public defineConstant(obj: any, name: string, value: any): any {
		return this.module.defineConstant(obj, name, value);
	}

	public defineLazyGetter(
		obj: any,
		name: string,
		lambda: () => any
	) {
		return this.module.defineConstant(obj, name, lambda);
	}

	public defineLazyGlobalGetters(obj: any, name: string): any {
		return this.module.defineLazyGlobalGetters(obj, name);
	}

	public defineLazyModuleGetter(
		obj: any,
		name: string,
		resource: string,
		symbol?: any,
		preLambda?: () => any,
		postLambda?: () => any,
		proxy?: any
	): any {
		return this.module.defineLazyModuleGetter(
			obj,
			name,
			resource,
			symbol,
			preLambda,
			postLambda,
			proxy
		);
	}

	public defineLazyModuleGetters(
		obj: any,
		modules: Record<string, string>
	): any {
		return this.module.defineLazyModuleGetters(obj, modules);
	}

	public defineLazyPreferenceGetter(
		obj: any,
		name: string,
		preference: string,
		defaultValue: any,
		onUpdate?: () => any,
		transform?: any
	): any {
		return this.module.defineLazyPreferenceGetter(
			obj,
			name,
			preference,
			defaultValue,
			onUpdate,
			transform
		);
	}

	public defineLazyProxy(
		obj: any,
		name: string,
		initFuncOrResource: any,
		stubProperties: any,
		untrapCallback: any
	): any {
		return this.module.defineLazyProxy(
			obj,
			name,
			initFuncOrResource,
			stubProperties,
			untrapCallback
		);
	}

	public defineLazyScriptGetter(
		obj: any,
		name: string,
		resource: string
	): any {
		return this.module.defineLazyScriptGetter(
			obj,
			name,
			resource
		);
	}

	public defineLazyServiceGetter(
		obj: any,
		name: string,
		contract: string,
		interfaceName: string
	): any {
		return this.module.defineLazyServiceGetter(
			obj,
			name,
			contract,
			interfaceName
		);
	}

	public defineLazyServiceGetters(
		obj: any,
		services: Record<string, string[]>
	): any {
		return this.module.defineLazyServiceGetters(obj, services);
	}

	public overrideScriptLoaderForTests(obj: any): any {
		return this.module.overrideScriptLoaderForTests(obj);
	}
}

export default new XPCOMUtils();
