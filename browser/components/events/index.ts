/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

type ArrayToTuple<
	T extends ReadonlyArray<string>,
	V = string
> = keyof {
	[K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

export class TypedEventEmitter<T extends string[]> {
	private emitter = new EventTarget();

	public on<K extends ArrayToTuple<T>>(
		event: K,
		fn: (...args: any[]) => void
	) {
		this.emitter.addEventListener(event.toString(), fn);
	}

	public off<K extends ArrayToTuple<T>>(
		event: K,
		fn: (...args: any[]) => void
	) {
		this.emitter.removeEventListener(event.toString(), fn);
	}

	public emit<K extends ArrayToTuple<T>>(event: K, data: any) {
		const ev = new CustomEvent(event.toString(), {
			detail: data,
		});

		this.emitter.dispatchEvent(ev);
	}
}
