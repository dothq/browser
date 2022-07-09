/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { JSModule } from "mozilla";

interface ProfilerMarkerOptions {
	// Start time
	startTime?: number;

	// Should a profile stack be captured
	captureStack?: boolean;

	// Change profile category
	category?: string;

	innerWindowId?: number;
}

interface Base64URLEncodeOptions {
	/** Should be padded with '=' */
	pad: boolean;
}

enum Base64URLDecodePadding {
	/** Fails if unput is unpadded */
	require = "require",

	/** Doesn't care if there is padding or not */
	ignore = "ignore",

	/** Fails if input is padded */
	reject = "reject",
}

interface Base64URLDecodeOptions {
	/** Padding mode for decoding */
	padding: Base64URLDecodePadding;
}

interface CategoryDispatchDictionary {
	category?: number;
	count?: number;
}

interface CompileScriptOptionsDictionary {
	charset?: string;
	lazilyParse?: boolean;
	hasReturnValue?: boolean;
}

interface HeapSnapshotBoundaries {
	globals?: object[];
	debugger?: object;
	runtime?: boolean;
}

interface IdleRequestOptions {
	timeout: number;
}

interface InteractionData {
	interactionCount?: number;
	interactionTimeInMilliseconds?: number;
	scrollingDistanceInPixels?: number;
}

interface IOActivityDataDictionary {
	location?: string;
	rx?: number;
	tx?: number;
}

interface MemoryInfoDictionary {
	domDom?: number;
	domStyle?: number;
	domOther?: number;
	GCHeapUsage?: number;
	media: {
		audioSize?: number;
		videoSize?: number;
		resourcesSize?: number;
	};
}

interface OriginAttributesDictionary {
	userContextId?: number;
	inIsolatedMozBrowser?: boolean;
	privateBrowsingId?: number;
	firstPartyDomain?: string;
	geckoViewSessionContextId?: string;
	partitionKey?: string;
}

interface OriginAttributesPatternDictionary
	extends OriginAttributesDictionary {
	partitionKeyPattern?: {
		scheme?: string;
		baseDomain?: string;
		port?: number;
	};
}

interface ProcInfoDictionary {
	pid?: number;
	memory?: number;
	cpuTime?: number;
	cpuCycleCount?: number;
	threads?: ThreadInfoDictionary[];
	type?: WebIDLProcType;
}

interface ParentProcInfoDictionary extends ProcInfoDictionary {
	children?: ChildProcInfoDictionary[];
}

enum PopupBlockerState {
	openAllowed = "openAllowed",
	openControlled = "openControlled",
	openBlocked = "openBlocked",
	openAbused = "openAbused",
	openOverridden = "openOverridden",
}

interface ChildProcInfoDictionary extends ProcInfoDictionary {
	childID?: number;
	origin?: string;
	windows?: WindowInfoDictionary[];
}

interface PerformanceInfoDictionary {
	host?: string;
	pid?: number;
	windowId?: number;
	duration?: number;
	counterId?: number;
	isWorker?: boolean;
	isTopLevel?: boolean;
	memoryInfo: MemoryInfoDictionary;
	items: CategoryDispatchDictionary[];
}

interface PrecompiledScript {
	executeInGlobal: (global: object) => any;
	url: string;
	hasReturnValue: boolean;
}

/** @todo Add principal type to ChromeUtils */
interface Principal {}

interface ProcessActorOptions {
	/** An array of allowed remotes */
	remoteTypes?: string[];

	/** Allow the actor to be included in the parent process */
	includeParent?: boolean;

	parent?: ProcessActorSidedOptions;
	child?: ProcessActorChildOptions;
}

interface ProcessActorSidedOptions {
	moduleURI: string;
}

interface ProcessActorChildOptions extends ProcessActorSidedOptions {
	observers: string[];
}

interface ThreadInfoDictionary {
	tid?: number;
	name?: string;
	cpuCycleCount?: number;
	cpuTime?: number;
}

enum WebIDLProcType {
	web = "web",
	webIsolated = "webIsolated",
	file = "file",
	extension = "extension",
	privilegedabout = "privilegedabout",
	privilegedmozilla = "privilegedmozilla",
	webLargeAllocation = "webLargeAllocation",
	withCoopCoep = "withCoopCoep",
	webServiceWorker = "webServiceWorker",
	browser = "browser",
	ipdlUnitTest = "ipdlUnitTest",
	gmpPlugin = "gmpPlugin",
	gpu = "gpu",
	vr = "vr",
	rdd = "rdd",
	socket = "socket",
	remoteSandboxBroker = "remoteSandboxBroker",
	forkServer = "forkServer",
	preallocated = "preallocated",
	unknown = "unknown",
}

interface WindowActorOptions {
	/** Allow this actor to be created in all frames */
	allFrames?: boolean;

	/** Include the actor in Chrome contexts */
	includeChrome?: boolean;

	/** An array of URI matches */
	matches?: string[];

	/** An array of allowed remotes */
	remoteTypes?: string[];

	/** An array of allowed message manager groups  */
	messageManagerGroups?: string[];

	parent?: WindowActorSidedOptions;
	child?: WindowActorChildOptions;
}

interface WindowActorSidedOptions {
	moduleURI: string;
}

interface WindowActorChildOptions extends WindowActorSidedOptions {
	events: Record<string, { createActor?: boolean }>;
	observers: string[];
}

interface WindowInfoDictionary {
	outerWindowId?: number;
	documentURI?: any /** @todo Get a Moz URI type */;
	documentTitle?: string;
	isProcessRoot?: boolean;
	isInProcess?: boolean;
}

/**
 * A shim of ChromeUtils with types
 *
 * See dom/chrome-webidl/ChromeUtils.webidl
 */
@JSModule()
class ChromeUtils {
	private module = Object.freeze(window.ChromeUtils);

	/** @kind Chrome */
	public addProfilerMarker(
		name: string,
		options?: ProfilerMarkerOptions | number,
		text?: string
	): void {
		if (!options) options = {} as ProfilerMarkerOptions;
		if (typeof options == "object") {
			if (!options.startTime) options.startTime = 0;
			if (!options.captureStack) options.captureStack = false;
			if (!options.category) options.category = "JavaScript";
			if (!options.innerWindowId) options.innerWindowId = 0;
		}

		return this.module.addProfilerMarker(name, options, text);
	}

	/** @kind Chrome */
	public base64URLEncode(
		source: Uint8Array,
		options: Base64URLEncodeOptions
	): string {
		return this.module.base64URLEncode(source, options);
	}

	/** @kind Chrome */
	public base64URLDecode(
		str: string,
		options: Base64URLDecodeOptions
	): Uint8Array {
		return this.module.base64URLDecode(str, options);
	}

	public collectPerfStats(): Promise<string> {
		return this.module.collectPerfStats();
	}

	public consumeInteractionData(): Record<string, InteractionData> {
		return this.module.consumeInteractionData();
	}

	public collectScrollingData(): Promise<InteractionData> {
		return this.module.collectScrollingData();
	}

	public compileScript(
		url: string,
		options?: CompileScriptOptionsDictionary
	): Promise<PrecompiledScript> {
		if (!options) options = {} as CompileScriptOptionsDictionary;
		if (typeof options == "object") {
			if (!options.charset) options.charset = "utf-8";
			if (!options.lazilyParse) options.lazilyParse = false;
			if (!options.hasReturnValue)
				options.hasReturnValue = false;
		}

		return this.module.compileScript(url, options);
	}

	public createError(
		message: string,
		stack?: object | null
	): object {
		return this.module.createError(message, stack);
	}

	public createOriginAttributesFromOrigin(
		origin: string
	): OriginAttributesDictionary {
		return this.module.createOriginAttributesFromOrigin(origin);
	}

	/** This method is capitalised */
	public CreateOriginAttributesFromOriginSuffix(
		suffix: string
	): OriginAttributesDictionary {
		return this.module.CreateOriginAttributesFromOriginSuffix(
			suffix
		);
	}

	public registerWindowActor(
		name: string,
		options?: WindowActorOptions
	): void {
		return this.module.registerWindowActor(name, options);
	}

	public unregisterWindowActor(name: string): void {
		return this.module.unregisterWindowActor(name);
	}

	public registerProcessActor(
		name: string,
		options?: ProcessActorOptions
	): void {
		return this.module.registerProcessActor(name, options);
	}

	public unregisterProcessActor(name: string): void {
		return this.module.unregisterProcessActor(name);
	}

	/** @kind Chrome */
	public releaseAssert(
		condition: boolean,
		message: string = "<no message>"
	): void {
		return this.module.releaseAssert(condition, message);
	}

	/** @kind Chrome */
	public readonly recentJSDevError: any;

	public requestIOActivity(): Promise<IOActivityDataDictionary[]> {
		return this.module.requestIOActivity();
	}

	public requestPerformanceMetrics(): Promise<
		PerformanceInfoDictionary[]
	> {
		return this.module.requestPerformanceMetrics();
	}

	public requestProcInfo(): Promise<ParentProcInfoDictionary> {
		return this.module.requestProcInfo();
	}

	/** @kind Chrome */
	public clearRecentJSDevError(): void {
		return this.module.clearRecentJSDevError();
	}

	/** @kind Chrome */
	public clearStyleSheetCacheByBaseDomain(
		baseDomain: string
	): void {
		return this.module.clearStyleSheetCacheByBaseDomain(
			baseDomain
		);
	}

	/** @kind Chrome */
	public clearStyleSheetCacheByPrincipal(
		principal: Principal
	): void {
		return this.module.clearStyleSheetCacheByPrincipal(principal);
	}

	/** @kind Chrome */
	public clearStyleSheetCache(): void {
		return this.module.clearStyleSheetCache();
	}

	public defineModuleGetter(
		target: object,
		id: string,
		resourceURI: string
	): void {
		return this.module.defineModuleGetter(
			target,
			id,
			resourceURI
		);
	}

	public readonly domProcessChild?: any;

	public fillNonDefaultOriginAttributes(
		originAttrs?: OriginAttributesDictionary
	): OriginAttributesDictionary {
		if (!originAttrs)
			originAttrs = {} as OriginAttributesDictionary;

		return this.module.fillNonDefaultOriginAttributes(
			originAttrs
		);
	}

	public generateQI(interfaces: string[]): {} {
		return this.module.generateQI(interfaces);
	}

	public getAllDOMProcesses(): any[] {
		return this.module.getAllDOMProcesses();
	}

	public getBaseDomainFromPartitionKey(
		partitionKey: string
	): string {
		return this.module.getBaseDomainFromPartitionKey(
			partitionKey
		);
	}

	public getCallerLocation(principal: Principal): object | null {
		return this.module.getCallerLocation(principal);
	}

	public getClassName(obj: object, unwrap: boolean = true): string {
		return this.module.getClassName(obj, unwrap);
	}

	/** @kind Chrome */
	public getObjectNodeId(obj: object): any {
		return this.module.getObjectNodeId(obj);
	}

	public getPartitionKeyFromURL(url: string): string {
		return this.module.getPartitionKeyFromURL(url);
	}

	public getPopupControlState(): PopupBlockerState {
		return this.module.getPopupControlState();
	}

	/** @kind Chrome */
	public getXPCOMErrorName(errorCode: number): string {
		return this.module.getXPCOMErrorName(errorCode);
	}

	public hasReportingHeaderForOrigin(origin: string): boolean {
		return this.module.hasReportingHeaderForOrigin(origin);
	}

	public idleDispatch(
		callback: (...args: any[]) => any,
		options?: IdleRequestOptions
	): void {
		return this.module.idleDispatch(callback, options);
	}

	public import<T>(
		resourceURI: string,
		targetObj?: object
	): Record<string, T> {
		return this.module.import(resourceURI, targetObj);
	}

	public isClassifierBlockingErrorCode(error: number): boolean {
		return this.module.isClassifierBlockingErrorCode(error);
	}

	public isOriginAttributesEqual(
		a?: OriginAttributesDictionary,
		b?: OriginAttributesDictionary
	): boolean {
		if (!a) a = {} as OriginAttributesDictionary;
		if (!b) b = {} as OriginAttributesDictionary;

		return this.module.isOriginAttributesEqual(a, b);
	}

	public lastExternalProtocolIframeAllowed(): number {
		return this.module.lastExternalProtocolIframeAllowed();
	}

	/** @kind Chrome */
	public nondeterministicGetWeakMapKeys(map: any): any {
		return this.module.nondeterministicGetWeakMapKeys(map);
	}

	/** @kind Chrome */
	public nondeterministicGetWeakSetKeys(set: any): any {
		return this.module.nondeterministicGetWeakSetKeys(set);
	}

	public originAttributesToSuffix(
		originAttrs?: OriginAttributesDictionary
	): string {
		if (!originAttrs)
			originAttrs = {} as OriginAttributesDictionary;
		if (typeof originAttrs == "object") {
			if (!originAttrs.userContextId)
				originAttrs.userContextId = 0;
			if (!originAttrs.inIsolatedMozBrowser)
				originAttrs.inIsolatedMozBrowser = false;
			if (!originAttrs.privateBrowsingId)
				originAttrs.privateBrowsingId = 0;
			if (!originAttrs.firstPartyDomain)
				originAttrs.firstPartyDomain = "";
			if (!originAttrs.geckoViewSessionContextId)
				originAttrs.geckoViewSessionContextId = "";
			if (!originAttrs.partitionKey)
				originAttrs.partitionKey = "";
		}

		return this.module.originAttributesToSuffix(originAttrs);
	}

	public originAttributesMatchPattern(
		originAttrs?: OriginAttributesDictionary,
		pattern?: OriginAttributesPatternDictionary
	): boolean {
		if (!originAttrs)
			originAttrs = {} as OriginAttributesDictionary;
		if (typeof originAttrs == "object") {
			if (!originAttrs.userContextId)
				originAttrs.userContextId = 0;
			if (!originAttrs.inIsolatedMozBrowser)
				originAttrs.inIsolatedMozBrowser = false;
			if (!originAttrs.privateBrowsingId)
				originAttrs.privateBrowsingId = 0;
			if (!originAttrs.firstPartyDomain)
				originAttrs.firstPartyDomain = "";
			if (!originAttrs.geckoViewSessionContextId)
				originAttrs.geckoViewSessionContextId = "";
			if (!originAttrs.partitionKey)
				originAttrs.partitionKey = "";
		}

		return this.module.originAttributesMatchPattern(
			originAttrs,
			pattern
		);
	}

	public privateNoteIntentionalCrash(): void {
		return this.module.privateNoteIntentionalCrash();
	}

	/** @kind Chrome */
	public saveHeapSnapshot(
		boundaries?: HeapSnapshotBoundaries
	): string {
		return this.module.saveHeapSnapshot(boundaries);
	}

	/** @kind Chrome */
	public saveHeapSnapshotGetId(
		boundaries?: HeapSnapshotBoundaries
	): string {
		return this.module.saveHeapSnapshotGetId(boundaries);
	}

	public setPerfStatsCollectionMask(collectionMask: number): void {
		return this.module.setPerfStatsCollectionMask(collectionMask);
	}

	public shallowClone(obj: object, target?: object): object {
		return this.module.shallowClone(obj, target);
	}

	/** @kind Chrome */
	public readHeapSnapshot(filePath: string): any {
		return this.module.readHeapSnapshot(filePath);
	}

	public resetLastExternalProtocolIframeAllowed(): void {
		return this.module.resetLastExternalProtocolIframeAllowed();
	}

	public vsyncEnabled(): boolean {
		return this.module.vsyncEnabled();
	}

	public waiveXrays(val: any): any {
		return this.module.waiveXrays(val);
	}

	public unwaiveXrays(val: any): any {
		return this.module.unwaiveXrays(val);
	}
}

export default new ChromeUtils();
