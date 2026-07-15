module.exports = [
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "NoSuchProviderReferenceError",
    ()=>NoSuchProviderReferenceError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
// src/errors/ai-sdk-error.ts
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a, _b;
var AISDKError = class _AISDKError extends (_b = Error, _a = symbol, _b) {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name15, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name15;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker16) {
        const markerSymbol = Symbol.for(marker16);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2, _b2;
var APICallError = class extends (_b2 = AISDKError, _a2 = symbol2, _b2) {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3, _b3;
var EmptyResponseBodyError = class extends (_b3 = AISDKError, _a3 = symbol3, _b3) {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.toString();
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4, _b4;
var InvalidArgumentError = class extends (_b4 = AISDKError, _a4 = symbol4, _b4) {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5, _b5;
var InvalidPromptError = class extends (_b5 = AISDKError, _a5 = symbol5, _b5) {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6, _b6;
var InvalidResponseDataError = class extends (_b6 = AISDKError, _a6 = symbol6, _b6) {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7, _b7;
var JSONParseError = class extends (_b7 = AISDKError, _a7 = symbol7, _b7) {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8, _b8;
var LoadAPIKeyError = class extends (_b8 = AISDKError, _a8 = symbol8, _b8) {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9, _b9;
var LoadSettingError = class extends (_b9 = AISDKError, _a9 = symbol9, _b9) {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10, _b10;
var NoContentGeneratedError = class extends (_b10 = AISDKError, _a10 = symbol10, _b10) {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11, _b11;
var NoSuchModelError = class extends (_b11 = AISDKError, _a11 = symbol11, _b11) {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
// src/errors/no-such-provider-reference-error.ts
var name11 = "AI_NoSuchProviderReferenceError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12, _b12;
var NoSuchProviderReferenceError = class extends (_b12 = AISDKError, _a12 = symbol12, _b12) {
    constructor({ provider, reference, message = `No provider reference found for provider '${provider}'. Available providers: ${Object.keys(reference).join(", ")}` }){
        super({
            name: name11,
            message
        });
        this[_a12] = true;
        this.provider = provider;
        this.reference = reference;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
// src/errors/too-many-embedding-values-for-call-error.ts
var name12 = "AI_TooManyEmbeddingValuesForCallError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13, _b13;
var TooManyEmbeddingValuesForCallError = class extends (_b13 = AISDKError, _a13 = symbol13, _b13) {
    constructor(options){
        super({
            name: name12,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a13] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
};
// src/errors/type-validation-error.ts
var name13 = "AI_TypeValidationError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14, _b14;
var TypeValidationError = class _TypeValidationError extends (_b14 = AISDKError, _a14 = symbol14, _b14) {
    constructor({ value, cause, context }){
        let contextPrefix = "Type validation failed";
        if (context == null ? void 0 : context.field) {
            contextPrefix += ` for ${context.field}`;
        }
        if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
            contextPrefix += " (";
            const parts = [];
            if (context.entityName) {
                parts.push(context.entityName);
            }
            if (context.entityId) {
                parts.push(`id: "${context.entityId}"`);
            }
            contextPrefix += parts.join(", ");
            contextPrefix += ")";
        }
        super({
            name: name13,
            message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a14] = true;
        this.value = value;
        this.context = context;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value and context, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @param {TypeValidationContext} params.context - Optional context about what is being validated.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause, context }) {
        var _a16, _b16, _c;
        if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a16 = cause.context) == null ? void 0 : _a16.field) === (context == null ? void 0 : context.field) && ((_b16 = cause.context) == null ? void 0 : _b16.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) {
            return cause;
        }
        return new _TypeValidationError({
            value,
            cause,
            context
        });
    }
};
// src/errors/unsupported-functionality-error.ts
var name14 = "AI_UnsupportedFunctionalityError";
var marker15 = `vercel.ai.error.${name14}`;
var symbol15 = Symbol.for(marker15);
var _a15, _b15;
var UnsupportedFunctionalityError = class extends (_b15 = AISDKError, _a15 = symbol15, _b15) {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name14,
            message
        });
        this[_a15] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker15);
    }
};
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && (val === void 0 || isJSONValue(val)));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && (val === void 0 || isJSONValue(val)));
}
;
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/eventsource-parser/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseError",
    ()=>ParseError,
    "createParser",
    ()=>createParser
]);
class ParseError extends Error {
    constructor(message, options){
        super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
    }
}
const LF = 10, CR = 13, SPACE = 32;
function noop(_arg) {}
function createParser(config) {
    if (typeof config == "function") throw new TypeError("`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment, maxBufferSize } = config, pendingFragments = [];
    let pendingFragmentsLength = 0, isFirstChunk = !0, id, data = "", dataLines = 0, eventType, terminated = !1;
    function feed(chunk) {
        if (terminated) throw new Error("Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.");
        if (isFirstChunk && (isFirstChunk = !1, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
            const trailing2 = processLines(chunk);
            trailing2 !== "" && (pendingFragments.push(trailing2), pendingFragmentsLength = trailing2.length), checkBufferSize();
            return;
        }
        if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
            pendingFragments.push(chunk), pendingFragmentsLength += chunk.length, checkBufferSize();
            return;
        }
        pendingFragments.push(chunk);
        const input = pendingFragments.join("");
        pendingFragments.length = 0, pendingFragmentsLength = 0;
        const trailing = processLines(input);
        trailing !== "" && (pendingFragments.push(trailing), pendingFragmentsLength = trailing.length), checkBufferSize();
    }
    function checkBufferSize() {
        maxBufferSize !== void 0 && (pendingFragmentsLength + data.length <= maxBufferSize || (terminated = !0, pendingFragments.length = 0, pendingFragmentsLength = 0, id = void 0, data = "", dataLines = 0, eventType = void 0, onError(new ParseError(`Buffered data exceeded max buffer size of ${maxBufferSize} characters`, {
            type: "max-buffer-size-exceeded"
        }))));
    }
    function processLines(chunk) {
        let searchIndex = 0;
        if (chunk.indexOf("\r") === -1) {
            let lfIndex = chunk.indexOf(`
`, searchIndex);
            for(; lfIndex !== -1;){
                if (searchIndex === lfIndex) {
                    dataLines > 0 && onEvent({
                        id,
                        event: eventType,
                        data
                    }), id = void 0, data = "", dataLines = 0, eventType = void 0, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
                    continue;
                }
                const firstCharCode = chunk.charCodeAt(searchIndex);
                if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
                    const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
                    if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
                        onEvent({
                            id,
                            event: eventType,
                            data: value
                        }), id = void 0, data = "", eventType = void 0, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
                        continue;
                    }
                    data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                } else isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || void 0 : parseLine(chunk, searchIndex, lfIndex);
                searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
            }
            return chunk.slice(searchIndex);
        }
        for(; searchIndex < chunk.length;){
            const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
            let lineEnd = -1;
            if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) break;
            parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
        }
        return chunk.slice(searchIndex);
    }
    function parseLine(chunk, start, end) {
        if (start === end) {
            dispatchEvent();
            return;
        }
        const firstCharCode = chunk.charCodeAt(start);
        if (isDataPrefix(chunk, start, firstCharCode)) {
            const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
            data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
            return;
        }
        if (isEventPrefix(chunk, start, firstCharCode)) {
            eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
            return;
        }
        if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
            const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
            id = value2.includes("\0") ? void 0 : value2;
            return;
        }
        if (firstCharCode === 58) {
            if (onComment) {
                const line2 = chunk.slice(start, end);
                onComment(line2.slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
            }
            return;
        }
        const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex === -1) {
            processField(line, "", line);
            return;
        }
        const field = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
        processField(field, value, line);
    }
    function processField(field, value, line) {
        switch(field){
            case "event":
                eventType = value || void 0;
                break;
            case "data":
                data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        dataLines > 0 && onEvent({
            id,
            event: eventType,
            data
        }), id = void 0, data = "", dataLines = 0, eventType = void 0;
    }
    function reset(options = {}) {
        if (options.consume && pendingFragments.length > 0) {
            const incompleteLine = pendingFragments.join("");
            parseLine(incompleteLine, 0, incompleteLine.length);
        }
        isFirstChunk = !0, id = void 0, data = "", dataLines = 0, eventType = void 0, pendingFragments.length = 0, pendingFragmentsLength = 0, terminated = !1;
    }
    return {
        feed,
        reset
    };
}
function isDataPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
    return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}
;
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/eventsource-parser/dist/stream.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventSourceParserStream",
    ()=>EventSourceParserStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/eventsource-parser/dist/index.js [app-route] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment, maxBufferSize } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createParser"])({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error) {
                        typeof onError == "function" && onError(error), (onError === "terminate" || error.type === "max-buffer-size-exceeded") && controller.error(error);
                    },
                    onRetry,
                    onComment,
                    maxBufferSize
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@workflow/serde/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Symbol used to define custom serialization for user-defined class instances.
 * The static method should accept an instance and return serializable data.
 *
 * @example
 * ```ts
 * import { WORKFLOW_SERIALIZE, WORKFLOW_DESERIALIZE } from '@workflow/serde';
 *
 * class MyClass {
 *   constructor(public value: string) {}
 *
 *   static [WORKFLOW_SERIALIZE](instance: MyClass) {
 *     return { value: instance.value };
 *   }
 *
 *   static [WORKFLOW_DESERIALIZE](data: { value: string }) {
 *     return new MyClass(data.value);
 *   }
 * }
 * ```
 */ __turbopack_context__.s([
    "WORKFLOW_DESERIALIZE",
    ()=>WORKFLOW_DESERIALIZE,
    "WORKFLOW_SERIALIZE",
    ()=>WORKFLOW_SERIALIZE
]);
const WORKFLOW_SERIALIZE = Symbol.for('workflow-serialize');
const WORKFLOW_DESERIALIZE = Symbol.for('workflow-deserialize');
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/get-context.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_context_exports = {};
__export(get_context_exports, {
    SYMBOL_FOR_REQ_CONTEXT: ()=>SYMBOL_FOR_REQ_CONTEXT,
    getContext: ()=>getContext
});
module.exports = __toCommonJS(get_context_exports);
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function getContext() {
    const fromSymbol = globalThis;
    return fromSymbol[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    SYMBOL_FOR_REQ_CONTEXT,
    getContext
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-error.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_error_exports = {};
__export(token_error_exports, {
    VercelOidcTokenError: ()=>VercelOidcTokenError
});
module.exports = __toCommonJS(token_error_exports);
class VercelOidcTokenError extends Error {
    constructor(message, cause){
        super(message);
        this.name = "VercelOidcTokenError";
        this.cause = cause;
    }
    toString() {
        if (this.cause) {
            return `${this.name}: ${this.message}: ${this.cause}`;
        }
        return `${this.name}: ${this.message}`;
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    VercelOidcTokenError
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var get_vercel_oidc_token_exports = {};
__export(get_vercel_oidc_token_exports, {
    getVercelOidcToken: ()=>getVercelOidcToken,
    getVercelOidcTokenSync: ()=>getVercelOidcTokenSync
});
module.exports = __toCommonJS(get_vercel_oidc_token_exports);
var import_get_context = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/get-context.js [app-route] (ecmascript)");
var import_token_error = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-error.js [app-route] (ecmascript)");
async function getVercelOidcToken(options) {
    let token = "";
    let err;
    try {
        token = getVercelOidcTokenSync();
    } catch (error) {
        err = error;
    }
    try {
        const [{ getTokenPayload, isExpired }, { refreshToken }] = await Promise.all([
            await __turbopack_context__.A("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-util.js [app-route] (ecmascript, async loader)"),
            await __turbopack_context__.A("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token.js [app-route] (ecmascript, async loader)")
        ]);
        if (!token || isExpired(getTokenPayload(token), options?.expirationBufferMs)) {
            await refreshToken(options);
            token = getVercelOidcTokenSync();
        }
    } catch (error) {
        let message = err instanceof Error ? err.message : "";
        if (error instanceof Error) {
            message = `${message}
${error.message}`;
        }
        if (message) {
            throw new import_token_error.VercelOidcTokenError(message);
        }
        throw error;
    }
    return token;
}
function getVercelOidcTokenSync() {
    const token = (0, import_get_context.getContext)().headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
    if (!token) {
        throw new Error(`The 'x-vercel-oidc-token' header is missing from the request. Do you have the OIDC option enabled in the Vercel project settings?`);
    }
    return token;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getVercelOidcToken,
    getVercelOidcTokenSync
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/auth-errors.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var auth_errors_exports = {};
__export(auth_errors_exports, {
    AccessTokenMissingError: ()=>AccessTokenMissingError,
    RefreshAccessTokenFailedError: ()=>RefreshAccessTokenFailedError
});
module.exports = __toCommonJS(auth_errors_exports);
class AccessTokenMissingError extends Error {
    constructor(){
        super("No authentication found. Please log in with the Vercel CLI (vercel login).");
        this.name = "AccessTokenMissingError";
    }
}
class RefreshAccessTokenFailedError extends Error {
    constructor(cause){
        super("Failed to refresh authentication token.", {
            cause
        });
        this.name = "RefreshAccessTokenFailedError";
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AccessTokenMissingError,
    RefreshAccessTokenFailedError
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-io.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_io_exports = {};
__export(token_io_exports, {
    findRootDir: ()=>findRootDir,
    getUserDataDir: ()=>getUserDataDir
});
module.exports = __toCommonJS(token_io_exports);
var import_path = __toESM(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
var import_fs = __toESM(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
var import_os = __toESM(__turbopack_context__.r("[externals]/os [external] (os, cjs)"));
var import_token_error = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-error.js [app-route] (ecmascript)");
function findRootDir() {
    try {
        let dir = process.cwd();
        while(dir !== import_path.default.dirname(dir)){
            const pkgPath = import_path.default.join(dir, ".vercel");
            if (import_fs.default.existsSync(pkgPath)) {
                return dir;
            }
            dir = import_path.default.dirname(dir);
        }
    } catch (e) {
        throw new import_token_error.VercelOidcTokenError("Token refresh only supported in node server environments");
    }
    return null;
}
function getUserDataDir() {
    if (process.env.XDG_DATA_HOME) {
        return process.env.XDG_DATA_HOME;
    }
    switch(import_os.default.platform()){
        case "darwin":
            return import_path.default.join(import_os.default.homedir(), "Library/Application Support");
        case "linux":
            return import_path.default.join(import_os.default.homedir(), ".local/share");
        case "win32":
            if (process.env.LOCALAPPDATA) {
                return process.env.LOCALAPPDATA;
            }
            return null;
        default:
            return null;
    }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    findRootDir,
    getUserDataDir
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/auth-config.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var auth_config_exports = {};
__export(auth_config_exports, {
    isValidAccessToken: ()=>isValidAccessToken,
    readAuthConfig: ()=>readAuthConfig,
    writeAuthConfig: ()=>writeAuthConfig
});
module.exports = __toCommonJS(auth_config_exports);
var fs = __toESM(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
var path = __toESM(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
var import_token_util = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-util.js [app-route] (ecmascript)");
function getAuthConfigPath() {
    const dataDir = (0, import_token_util.getVercelDataDir)();
    if (!dataDir) {
        throw new Error(`Unable to find Vercel CLI data directory. Your platform: ${process.platform}. Supported: darwin, linux, win32.`);
    }
    return path.join(dataDir, "auth.json");
}
function readAuthConfig() {
    try {
        const authPath = getAuthConfigPath();
        if (!fs.existsSync(authPath)) {
            return null;
        }
        const content = fs.readFileSync(authPath, "utf8");
        if (!content) {
            return null;
        }
        return JSON.parse(content);
    } catch (error) {
        return null;
    }
}
function writeAuthConfig(config) {
    const authPath = getAuthConfigPath();
    const authDir = path.dirname(authPath);
    if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, {
            mode: 504,
            recursive: true
        });
    }
    fs.writeFileSync(authPath, JSON.stringify(config, null, 2), {
        mode: 384
    });
}
function isValidAccessToken(authConfig, expirationBufferMs = 0) {
    if (!authConfig.token) return false;
    if (typeof authConfig.expiresAt !== "number") return true;
    const nowInSeconds = Math.floor(Date.now() / 1e3);
    const bufferInSeconds = expirationBufferMs / 1e3;
    return authConfig.expiresAt >= nowInSeconds + bufferInSeconds;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    isValidAccessToken,
    readAuthConfig,
    writeAuthConfig
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/oauth.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var oauth_exports = {};
__export(oauth_exports, {
    processTokenResponse: ()=>processTokenResponse,
    refreshTokenRequest: ()=>refreshTokenRequest
});
module.exports = __toCommonJS(oauth_exports);
var import_os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const VERCEL_ISSUER = "https://vercel.com";
const VERCEL_CLI_CLIENT_ID = "cl_HYyOPBNtFMfHhaUn9L4QPfTZz6TP47bp";
const userAgent = `@vercel/oidc node-${process.version} ${(0, import_os.platform)()} (${(0, import_os.arch)()}) ${(0, import_os.hostname)()}`;
let _tokenEndpoint = null;
async function getTokenEndpoint() {
    if (_tokenEndpoint) {
        return _tokenEndpoint;
    }
    const discoveryUrl = `${VERCEL_ISSUER}/.well-known/openid-configuration`;
    const response = await fetch(discoveryUrl, {
        headers: {
            "user-agent": userAgent
        }
    });
    if (!response.ok) {
        throw new Error("Failed to discover OAuth endpoints");
    }
    const metadata = await response.json();
    if (!metadata || typeof metadata.token_endpoint !== "string") {
        throw new Error("Invalid OAuth discovery response");
    }
    const endpoint = metadata.token_endpoint;
    _tokenEndpoint = endpoint;
    return endpoint;
}
async function refreshTokenRequest(options) {
    const tokenEndpoint = await getTokenEndpoint();
    return await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "user-agent": userAgent
        },
        body: new URLSearchParams({
            client_id: VERCEL_CLI_CLIENT_ID,
            grant_type: "refresh_token",
            ...options
        })
    });
}
async function processTokenResponse(response) {
    const json = await response.json();
    if (!response.ok) {
        const errorMsg = typeof json === "object" && json && "error" in json ? String(json.error) : "Token refresh failed";
        return [
            new Error(errorMsg)
        ];
    }
    if (typeof json !== "object" || json === null) {
        return [
            new Error("Invalid token response")
        ];
    }
    if (typeof json.access_token !== "string") {
        return [
            new Error("Missing access_token in response")
        ];
    }
    if (json.token_type !== "Bearer") {
        return [
            new Error("Invalid token_type in response")
        ];
    }
    if (typeof json.expires_in !== "number") {
        return [
            new Error("Missing expires_in in response")
        ];
    }
    return [
        null,
        json
    ];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    processTokenResponse,
    refreshTokenRequest
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-util.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var token_util_exports = {};
__export(token_util_exports, {
    assertVercelOidcTokenResponse: ()=>assertVercelOidcTokenResponse,
    findProjectInfo: ()=>findProjectInfo,
    getTokenPayload: ()=>getTokenPayload,
    getVercelDataDir: ()=>getVercelDataDir,
    getVercelOidcToken: ()=>getVercelOidcToken,
    getVercelToken: ()=>getVercelToken,
    isExpired: ()=>isExpired,
    loadToken: ()=>loadToken,
    saveToken: ()=>saveToken
});
module.exports = __toCommonJS(token_util_exports);
var path = __toESM(__turbopack_context__.r("[externals]/path [external] (path, cjs)"));
var fs = __toESM(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
var import_token_error = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-error.js [app-route] (ecmascript)");
var import_token_io = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-io.js [app-route] (ecmascript)");
var import_auth_config = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/auth-config.js [app-route] (ecmascript)");
var import_oauth = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/oauth.js [app-route] (ecmascript)");
var import_auth_errors = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/auth-errors.js [app-route] (ecmascript)");
function getVercelDataDir() {
    const vercelFolder = "com.vercel.cli";
    const dataDir = (0, import_token_io.getUserDataDir)();
    if (!dataDir) {
        return null;
    }
    return path.join(dataDir, vercelFolder);
}
async function getVercelToken(options) {
    const authConfig = (0, import_auth_config.readAuthConfig)();
    if (!authConfig?.token) {
        throw new import_auth_errors.AccessTokenMissingError();
    }
    if ((0, import_auth_config.isValidAccessToken)(authConfig, options?.expirationBufferMs)) {
        return authConfig.token;
    }
    if (!authConfig.refreshToken) {
        (0, import_auth_config.writeAuthConfig)({});
        throw new import_auth_errors.RefreshAccessTokenFailedError("No refresh token available");
    }
    try {
        const tokenResponse = await (0, import_oauth.refreshTokenRequest)({
            refresh_token: authConfig.refreshToken
        });
        const [tokensError, tokens] = await (0, import_oauth.processTokenResponse)(tokenResponse);
        if (tokensError || !tokens) {
            (0, import_auth_config.writeAuthConfig)({});
            throw new import_auth_errors.RefreshAccessTokenFailedError(tokensError);
        }
        const updatedConfig = {
            token: tokens.access_token,
            expiresAt: Math.floor(Date.now() / 1e3) + tokens.expires_in
        };
        if (tokens.refresh_token) {
            updatedConfig.refreshToken = tokens.refresh_token;
        }
        (0, import_auth_config.writeAuthConfig)(updatedConfig);
        return updatedConfig.token;
    } catch (error) {
        (0, import_auth_config.writeAuthConfig)({});
        if (error instanceof import_auth_errors.AccessTokenMissingError || error instanceof import_auth_errors.RefreshAccessTokenFailedError) {
            throw error;
        }
        throw new import_auth_errors.RefreshAccessTokenFailedError(error);
    }
}
async function getVercelOidcToken(authToken, projectId, teamId) {
    const url = `https://api.vercel.com/v1/projects/${projectId}/token?source=vercel-oidc-refresh${teamId ? `&teamId=${teamId}` : ""}`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    if (!res.ok) {
        throw new import_token_error.VercelOidcTokenError(`Failed to refresh OIDC token: ${res.statusText}`);
    }
    const tokenRes = await res.json();
    assertVercelOidcTokenResponse(tokenRes);
    return tokenRes;
}
function assertVercelOidcTokenResponse(res) {
    if (!res || typeof res !== "object") {
        throw new TypeError("Vercel OIDC token is malformed. Expected an object. Please run `vc env pull` and try again");
    }
    if (!("token" in res) || typeof res.token !== "string") {
        throw new TypeError("Vercel OIDC token is malformed. Expected a string-valued token property. Please run `vc env pull` and try again");
    }
}
function findProjectInfo() {
    const dir = (0, import_token_io.findRootDir)();
    if (!dir) {
        throw new import_token_error.VercelOidcTokenError("Unable to find project root directory. Have you linked your project with `vc link?`");
    }
    const prjPath = path.join(dir, ".vercel", "project.json");
    if (!fs.existsSync(prjPath)) {
        throw new import_token_error.VercelOidcTokenError("project.json not found, have you linked your project with `vc link?`");
    }
    const prj = JSON.parse(fs.readFileSync(prjPath, "utf8"));
    if (typeof prj.projectId !== "string" && typeof prj.orgId !== "string") {
        throw new TypeError("Expected a string-valued projectId property. Try running `vc link` to re-link your project.");
    }
    return {
        projectId: prj.projectId,
        teamId: prj.orgId
    };
}
function saveToken(token, projectId) {
    const dir = (0, import_token_io.getUserDataDir)();
    if (!dir) {
        throw new import_token_error.VercelOidcTokenError("Unable to find user data directory. Please reach out to Vercel support.");
    }
    const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
    const tokenJson = JSON.stringify(token);
    fs.mkdirSync(path.dirname(tokenPath), {
        mode: 504,
        recursive: true
    });
    fs.writeFileSync(tokenPath, tokenJson);
    fs.chmodSync(tokenPath, 432);
    return;
}
function loadToken(projectId) {
    const dir = (0, import_token_io.getUserDataDir)();
    if (!dir) {
        throw new import_token_error.VercelOidcTokenError("Unable to find user data directory. Please reach out to Vercel support.");
    }
    const tokenPath = path.join(dir, "com.vercel.token", `${projectId}.json`);
    if (!fs.existsSync(tokenPath)) {
        return null;
    }
    const token = JSON.parse(fs.readFileSync(tokenPath, "utf8"));
    assertVercelOidcTokenResponse(token);
    return token;
}
function getTokenPayload(token) {
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
        throw new import_token_error.VercelOidcTokenError("Invalid token. Please run `vc env pull` and try again");
    }
    const base64 = tokenParts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, "=");
    return JSON.parse(Buffer.from(padded, "base64").toString("utf8"));
}
function isExpired(token, bufferMs = 0) {
    return token.exp * 1e3 < Date.now() + bufferMs;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    assertVercelOidcTokenResponse,
    findProjectInfo,
    getTokenPayload,
    getVercelDataDir,
    getVercelOidcToken,
    getVercelToken,
    isExpired,
    loadToken,
    saveToken
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var src_exports = {};
__export(src_exports, {
    AccessTokenMissingError: ()=>import_auth_errors.AccessTokenMissingError,
    RefreshAccessTokenFailedError: ()=>import_auth_errors.RefreshAccessTokenFailedError,
    getContext: ()=>import_get_context.getContext,
    getVercelOidcToken: ()=>import_get_vercel_oidc_token.getVercelOidcToken,
    getVercelOidcTokenSync: ()=>import_get_vercel_oidc_token.getVercelOidcTokenSync,
    getVercelToken: ()=>import_token_util.getVercelToken
});
module.exports = __toCommonJS(src_exports);
var import_get_vercel_oidc_token = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/get-vercel-oidc-token.js [app-route] (ecmascript)");
var import_get_context = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/get-context.js [app-route] (ecmascript)");
var import_auth_errors = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/auth-errors.js [app-route] (ecmascript)");
var import_token_util = __turbopack_context__.r("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@vercel/oidc/dist/token-util.js [app-route] (ecmascript)");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    AccessTokenMissingError,
    RefreshAccessTokenFailedError,
    getContext,
    getVercelOidcToken,
    getVercelOidcTokenSync,
    getVercelToken
});
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/groq/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "browserSearch",
    ()=>browserSearch,
    "createGroq",
    ()=>createGroq,
    "groq",
    ()=>groq
]);
// src/groq-provider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider-utils/dist/index.js [app-route] (ecmascript) <locals>");
// src/groq-chat-language-model.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@workflow/serde/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
// src/convert-groq-usage.ts
function convertGroqUsage(usage) {
    var _a, _b, _c, _d, _e, _f;
    if (usage == null) {
        return {
            inputTokens: {
                total: void 0,
                noCache: void 0,
                cacheRead: void 0,
                cacheWrite: void 0
            },
            outputTokens: {
                total: void 0,
                text: void 0,
                reasoning: void 0
            },
            raw: void 0
        };
    }
    const promptTokens = (_a = usage.prompt_tokens) != null ? _a : 0;
    const cacheReadTokens = (_c = (_b = usage.prompt_tokens_details) == null ? void 0 : _b.cached_tokens) != null ? _c : void 0;
    const completionTokens = (_d = usage.completion_tokens) != null ? _d : 0;
    const reasoningTokens = (_f = (_e = usage.completion_tokens_details) == null ? void 0 : _e.reasoning_tokens) != null ? _f : void 0;
    const textTokens = reasoningTokens != null ? completionTokens - reasoningTokens : completionTokens;
    return {
        inputTokens: {
            total: promptTokens,
            noCache: cacheReadTokens != null ? promptTokens - cacheReadTokens : promptTokens,
            cacheRead: cacheReadTokens,
            cacheWrite: void 0
        },
        outputTokens: {
            total: completionTokens,
            text: textTokens,
            reasoning: reasoningTokens
        },
        raw: usage
    };
}
;
;
function convertToGroqChatMessages(prompt) {
    var _a;
    const messages = [];
    for (const { role, content } of prompt){
        switch(role){
            case "system":
                {
                    messages.push({
                        role: "system",
                        content
                    });
                    break;
                }
            case "user":
                {
                    if (content.length === 1 && content[0].type === "text") {
                        messages.push({
                            role: "user",
                            content: content[0].text
                        });
                        break;
                    }
                    messages.push({
                        role: "user",
                        content: content.map((part)=>{
                            switch(part.type){
                                case "text":
                                    {
                                        return {
                                            type: "text",
                                            text: part.text
                                        };
                                    }
                                case "file":
                                    {
                                        switch(part.data.type){
                                            case "reference":
                                                {
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: "file parts with provider references"
                                                    });
                                                }
                                            case "text":
                                                {
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: "text file parts"
                                                    });
                                                }
                                            case "url":
                                            case "data":
                                                {
                                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTopLevelMediaType"])(part.mediaType) !== "image") {
                                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                            functionality: "Non-image file content parts"
                                                        });
                                                    }
                                                    return {
                                                        type: "image_url",
                                                        image_url: {
                                                            url: part.data.type === "url" ? part.data.url.toString() : `data:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                part
                                                            })};base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data)}`
                                                        }
                                                    };
                                                }
                                        }
                                    }
                            }
                        })
                    });
                    break;
                }
            case "assistant":
                {
                    let text = "";
                    let reasoning = "";
                    const toolCalls = [];
                    for (const part of content){
                        switch(part.type){
                            // groq supports reasoning for tool-calls in multi-turn conversations
                            // https://github.com/vercel/ai/issues/7860
                            case "reasoning":
                                {
                                    reasoning += part.text;
                                    break;
                                }
                            case "text":
                                {
                                    text += part.text;
                                    break;
                                }
                            case "tool-call":
                                {
                                    toolCalls.push({
                                        id: part.toolCallId,
                                        type: "function",
                                        function: {
                                            name: part.toolName,
                                            arguments: JSON.stringify(part.input)
                                        }
                                    });
                                    break;
                                }
                        }
                    }
                    messages.push({
                        role: "assistant",
                        content: text,
                        ...reasoning.length > 0 ? {
                            reasoning
                        } : null,
                        ...toolCalls.length > 0 ? {
                            tool_calls: toolCalls
                        } : null
                    });
                    break;
                }
            case "tool":
                {
                    for (const toolResponse of content){
                        if (toolResponse.type === "tool-approval-response") {
                            continue;
                        }
                        const output = toolResponse.output;
                        let contentValue;
                        switch(output.type){
                            case "text":
                            case "error-text":
                                contentValue = output.value;
                                break;
                            case "execution-denied":
                                contentValue = (_a = output.reason) != null ? _a : "Tool call execution denied.";
                                break;
                            case "content":
                            case "json":
                            case "error-json":
                                contentValue = JSON.stringify(output.value);
                                break;
                        }
                        messages.push({
                            role: "tool",
                            tool_call_id: toolResponse.toolCallId,
                            content: contentValue
                        });
                    }
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    return messages;
}
// src/get-response-metadata.ts
function getResponseMetadata({ id, model, created }) {
    return {
        id: id != null ? id : void 0,
        modelId: model != null ? model : void 0,
        timestamp: created != null ? new Date(created * 1e3) : void 0
    };
}
;
var groqLanguageModelChatOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    reasoningFormat: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "parsed",
        "raw",
        "hidden"
    ]).optional(),
    /**
   * Specifies the reasoning effort level for model inference.
   * @see https://console.groq.com/docs/reasoning#reasoning-effort
   */ reasoningEffort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "none",
        "default",
        "low",
        "medium",
        "high"
    ]).optional(),
    /**
   * Whether to enable parallel function calling during tool use. Default to true.
   */ parallelToolCalls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * A unique identifier representing your end-user, which can help OpenAI to
   * monitor and detect abuse. Learn more.
   */ user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
   * Whether to use structured outputs.
   *
   * @default true
   */ structuredOutputs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Whether to use strict JSON schema validation.
   * When true, the model uses constrained decoding to guarantee schema compliance.
   * Only used when structured outputs are enabled and a schema is provided.
   *
   * @default true
   */ strictJsonSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Service tier for the request.
   * - 'on_demand': Default tier with consistent performance and fairness
   * - 'performance': Prioritized tier for latency-sensitive workloads
   * - 'flex': Higher throughput tier optimized for workloads that can handle occasional request failures
   * - 'auto': Uses on_demand rate limits, then falls back to flex tier if exceeded
   *
   * @default 'on_demand'
   */ serviceTier: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "on_demand",
        "performance",
        "flex",
        "auto"
    ]).optional()
});
;
;
var groqErrorDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })
});
var groqFailedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
    errorSchema: groqErrorDataSchema,
    errorToMessage: (data)=>data.error.message
});
;
// src/groq-browser-search-models.ts
var BROWSER_SEARCH_SUPPORTED_MODELS = [
    "openai/gpt-oss-20b",
    "openai/gpt-oss-120b"
];
function isBrowserSearchSupportedModel(modelId) {
    return BROWSER_SEARCH_SUPPORTED_MODELS.includes(modelId);
}
function getSupportedModelsString() {
    return BROWSER_SEARCH_SUPPORTED_MODELS.join(", ");
}
// src/groq-prepare-tools.ts
function prepareTools({ tools, toolChoice, modelId }) {
    tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
    const toolWarnings = [];
    if (tools == null) {
        return {
            tools: void 0,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const groqTools2 = [];
    for (const tool of tools){
        if (tool.type === "provider") {
            if (tool.id === "groq.browser_search") {
                if (!isBrowserSearchSupportedModel(modelId)) {
                    toolWarnings.push({
                        type: "unsupported",
                        feature: `provider-defined tool ${tool.id}`,
                        details: `Browser search is only supported on the following models: ${getSupportedModelsString()}. Current model: ${modelId}`
                    });
                } else {
                    groqTools2.push({
                        type: "browser_search"
                    });
                }
            } else {
                toolWarnings.push({
                    type: "unsupported",
                    feature: `provider-defined tool ${tool.id}`
                });
            }
        } else {
            groqTools2.push({
                type: "function",
                function: {
                    name: tool.name,
                    description: tool.description,
                    parameters: tool.inputSchema,
                    ...tool.strict != null ? {
                        strict: tool.strict
                    } : {}
                }
            });
        }
    }
    if (toolChoice == null) {
        return {
            tools: groqTools2,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const type = toolChoice.type;
    switch(type){
        case "auto":
        case "none":
        case "required":
            return {
                tools: groqTools2,
                toolChoice: type,
                toolWarnings
            };
        case "tool":
            return {
                tools: groqTools2,
                toolChoice: {
                    type: "function",
                    function: {
                        name: toolChoice.toolName
                    }
                },
                toolWarnings
            };
        default:
            {
                const _exhaustiveCheck = type;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                    functionality: `tool choice type: ${_exhaustiveCheck}`
                });
            }
    }
}
// src/map-groq-finish-reason.ts
function mapGroqFinishReason(finishReason) {
    switch(finishReason){
        case "stop":
            return "stop";
        case "length":
            return "length";
        case "content_filter":
            return "content-filter";
        case "function_call":
        case "tool_calls":
            return "tool-calls";
        default:
            return "other";
    }
}
// src/groq-chat-language-model.ts
var GroqChatLanguageModel = class _GroqChatLanguageModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
        this.supportedUrls = {
            "image/*": [
                /^https?:\/\/.*$/
            ]
        };
        this.modelId = modelId;
        this.config = config;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _GroqChatLanguageModel(options.modelId, options.config);
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences, responseFormat, seed, reasoning, tools, toolChoice, providerOptions }) {
        var _a, _b, _c, _d;
        const warnings = [];
        const groqOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "groq",
            providerOptions,
            schema: groqLanguageModelChatOptions
        });
        const structuredOutputs = (_a = groqOptions == null ? void 0 : groqOptions.structuredOutputs) != null ? _a : true;
        const strictJsonSchema = (_b = groqOptions == null ? void 0 : groqOptions.strictJsonSchema) != null ? _b : true;
        if (topK != null) {
            warnings.push({
                type: "unsupported",
                feature: "topK"
            });
        }
        if ((responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && !structuredOutputs) {
            warnings.push({
                type: "unsupported",
                feature: "responseFormat",
                details: "JSON response format schema is only supported with structuredOutputs"
            });
        }
        const { tools: groqTools2, toolChoice: groqToolChoice, toolWarnings } = prepareTools({
            tools,
            toolChoice,
            modelId: this.modelId
        });
        return {
            args: {
                // model id:
                model: this.modelId,
                // model specific settings:
                user: groqOptions == null ? void 0 : groqOptions.user,
                parallel_tool_calls: groqOptions == null ? void 0 : groqOptions.parallelToolCalls,
                // standardized settings:
                max_tokens: maxOutputTokens,
                temperature,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
                stop: stopSequences,
                seed,
                // response format:
                response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? structuredOutputs && responseFormat.schema != null ? {
                    type: "json_schema",
                    json_schema: {
                        schema: responseFormat.schema,
                        strict: strictJsonSchema,
                        name: (_c = responseFormat.name) != null ? _c : "response",
                        description: responseFormat.description
                    }
                } : {
                    type: "json_object"
                } : void 0,
                // provider options:
                reasoning_format: groqOptions == null ? void 0 : groqOptions.reasoningFormat,
                reasoning_effort: (_d = groqOptions == null ? void 0 : groqOptions.reasoningEffort) != null ? _d : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCustomReasoning"])(reasoning) && reasoning !== "none" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapReasoningToProviderEffort"])({
                    reasoning,
                    effortMap: {
                        minimal: "low",
                        low: "low",
                        medium: "medium",
                        high: "high",
                        xhigh: "high"
                    },
                    warnings
                }) : void 0,
                service_tier: groqOptions == null ? void 0 : groqOptions.serviceTier,
                // messages:
                messages: convertToGroqChatMessages(prompt),
                // tools:
                tools: groqTools2,
                tool_choice: groqToolChoice
            },
            warnings: [
                ...warnings,
                ...toolWarnings
            ]
        };
    }
    async doGenerate(options) {
        var _a, _b, _c, _d;
        const { args, warnings } = await this.getArgs(options);
        const body = JSON.stringify(args);
        const { responseHeaders, value: response, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body: args,
            failedResponseHandler: groqFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(groqChatResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const choice = response.choices[0];
        const content = [];
        const text = choice.message.content;
        if (text != null && text.length > 0) {
            content.push({
                type: "text",
                text
            });
        }
        const reasoning = choice.message.reasoning;
        if (reasoning != null && reasoning.length > 0) {
            content.push({
                type: "reasoning",
                text: reasoning
            });
        }
        if (choice.message.tool_calls != null) {
            for (const toolCall of choice.message.tool_calls){
                content.push({
                    type: "tool-call",
                    toolCallId: (_c = toolCall.id) != null ? _c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                    toolName: toolCall.function.name,
                    input: toolCall.function.arguments
                });
            }
        }
        return {
            content,
            finishReason: {
                unified: mapGroqFinishReason(choice.finish_reason),
                raw: (_d = choice.finish_reason) != null ? _d : void 0
            },
            usage: convertGroqUsage(response.usage),
            response: {
                ...getResponseMetadata(response),
                headers: responseHeaders,
                body: rawResponse
            },
            warnings,
            request: {
                body
            }
        };
    }
    async doStream(options) {
        var _a, _b;
        const { args, warnings } = await this.getArgs(options);
        const body = {
            ...args,
            stream: true
        };
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body,
            failedResponseHandler: groqFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(groqChatChunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        let toolCallTracker;
        let finishReason = {
            unified: "other",
            raw: void 0
        };
        let usage = void 0;
        let isFirstChunk = true;
        let isActiveText = false;
        let isActiveReasoning = false;
        let providerMetadata;
        return {
            stream: response.pipeThrough(new TransformStream({
                start (controller) {
                    toolCallTracker = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StreamingToolCallTracker"](controller, {
                        generateId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"],
                        typeValidation: "required"
                    });
                    controller.enqueue({
                        type: "stream-start",
                        warnings
                    });
                },
                transform (chunk, controller) {
                    var _a2;
                    if (options.includeRawChunks) {
                        controller.enqueue({
                            type: "raw",
                            rawValue: chunk.rawValue
                        });
                    }
                    if (!chunk.success) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    if ("error" in value) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: value.error
                        });
                        return;
                    }
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata(value)
                        });
                    }
                    if (((_a2 = value.x_groq) == null ? void 0 : _a2.usage) != null) {
                        usage = value.x_groq.usage;
                    }
                    const choice = value.choices[0];
                    if ((choice == null ? void 0 : choice.finish_reason) != null) {
                        finishReason = {
                            unified: mapGroqFinishReason(choice.finish_reason),
                            raw: choice.finish_reason
                        };
                    }
                    if ((choice == null ? void 0 : choice.delta) == null) {
                        return;
                    }
                    const delta = choice.delta;
                    if (delta.reasoning != null && delta.reasoning.length > 0) {
                        if (!isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-start",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = true;
                        }
                        controller.enqueue({
                            type: "reasoning-delta",
                            id: "reasoning-0",
                            delta: delta.reasoning
                        });
                    }
                    if (delta.content != null && delta.content.length > 0) {
                        if (isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-end",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = false;
                        }
                        if (!isActiveText) {
                            controller.enqueue({
                                type: "text-start",
                                id: "txt-0"
                            });
                            isActiveText = true;
                        }
                        controller.enqueue({
                            type: "text-delta",
                            id: "txt-0",
                            delta: delta.content
                        });
                    }
                    if (delta.tool_calls != null) {
                        if (isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-end",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = false;
                        }
                        for (const toolCallDelta of delta.tool_calls){
                            toolCallTracker.processDelta(toolCallDelta);
                        }
                    }
                },
                flush (controller) {
                    if (isActiveReasoning) {
                        controller.enqueue({
                            type: "reasoning-end",
                            id: "reasoning-0"
                        });
                    }
                    if (isActiveText) {
                        controller.enqueue({
                            type: "text-end",
                            id: "txt-0"
                        });
                    }
                    toolCallTracker.flush();
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage: convertGroqUsage(usage),
                        ...providerMetadata != null ? {
                            providerMetadata
                        } : {}
                    });
                }
            })),
            request: {
                body: JSON.stringify(body)
            },
            response: {
                headers: responseHeaders
            }
        };
    }
};
var groqChatResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("function"),
                function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                })
            })).nullish()
        }),
        index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })),
    usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
        completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
        total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
        prompt_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
        }).nullish(),
        completion_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            reasoning_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
        }).nullish()
    }).nullish()
});
var groqChatChunkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            delta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("function").optional(),
                    function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                        arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                    })
                })).nullish()
            }).nullish(),
            finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
            index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        })),
        x_groq: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                prompt_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
                }).nullish(),
                completion_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    reasoning_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
                }).nullish()
            }).nullish()
        }).nullish()
    }),
    groqErrorDataSchema
]);
;
;
;
;
var groqTranscriptionModelOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        language: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        prompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        responseFormat: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        temperature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).nullish(),
        timestampGranularities: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullish()
    })));
// src/groq-transcription-model.ts
var GroqTranscriptionModel = class _GroqTranscriptionModel {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v4";
    }
    get provider() {
        return this.config.provider;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _GroqTranscriptionModel(options.modelId, options.config);
    }
    async getArgs({ audio, mediaType, providerOptions }) {
        var _a, _b, _c, _d, _e;
        const warnings = [];
        const groqOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "groq",
            providerOptions,
            schema: groqTranscriptionModelOptions
        });
        const formData = new FormData();
        const blob = audio instanceof Uint8Array ? new Blob([
            audio
        ]) : new Blob([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertBase64ToUint8Array"])(audio)
        ]);
        formData.append("model", this.modelId);
        const fileExtension = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mediaTypeToExtension"])(mediaType);
        formData.append("file", new File([
            blob
        ], "audio", {
            type: mediaType
        }), `audio.${fileExtension}`);
        if (groqOptions) {
            const transcriptionModelOptions = {
                language: (_a = groqOptions.language) != null ? _a : void 0,
                prompt: (_b = groqOptions.prompt) != null ? _b : void 0,
                response_format: (_c = groqOptions.responseFormat) != null ? _c : void 0,
                temperature: (_d = groqOptions.temperature) != null ? _d : void 0,
                timestamp_granularities: (_e = groqOptions.timestampGranularities) != null ? _e : void 0
            };
            for(const key in transcriptionModelOptions){
                const value = transcriptionModelOptions[key];
                if (value !== void 0) {
                    if (Array.isArray(value)) {
                        for (const item of value){
                            formData.append(`${key}[]`, String(item));
                        }
                    } else {
                        formData.append(key, String(value));
                    }
                }
            }
        }
        return {
            formData,
            warnings
        };
    }
    async doGenerate(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        const currentDate = (_c = (_b = (_a = this.config._internal) == null ? void 0 : _a.currentDate) == null ? void 0 : _b.call(_a)) != null ? _c : /* @__PURE__ */ new Date();
        const { formData, warnings } = await this.getArgs(options);
        const { value: response, responseHeaders, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postFormDataToApi"])({
            url: this.config.url({
                path: "/audio/transcriptions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_e = (_d = this.config).headers) == null ? void 0 : _e.call(_d), options.headers),
            formData,
            failedResponseHandler: groqFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(groqTranscriptionResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        return {
            text: response.text,
            segments: (_g = (_f = response.segments) == null ? void 0 : _f.map((segment)=>({
                    text: segment.text,
                    startSecond: segment.start,
                    endSecond: segment.end
                }))) != null ? _g : [],
            language: (_h = response.language) != null ? _h : void 0,
            durationInSeconds: (_i = response.duration) != null ? _i : void 0,
            warnings,
            response: {
                timestamp: currentDate,
                modelId: this.modelId,
                headers: responseHeaders,
                body: rawResponse
            }
        };
    }
};
var groqTranscriptionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    x_groq: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }),
    // additional properties are returned when `response_format: 'verbose_json'` is
    task: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    language: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    duration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    segments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        seek: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        end: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()),
        temperature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        avg_logprob: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        compression_ratio: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        no_speech_prob: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).nullish()
});
;
;
var browserSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "groq.browser_search",
    inputSchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}))),
    outputSchema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({})))
});
// src/groq-tools.ts
var groqTools = {
    browserSearch
};
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "4.0.11" : "TURBOPACK unreachable";
// src/groq-provider.ts
function createGroq(options = {}) {
    var _a;
    const baseURL = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL)) != null ? _a : "https://api.groq.com/openai/v1";
    const getHeaders = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadApiKey"])({
                apiKey: options.apiKey,
                environmentVariableName: "GROQ_API_KEY",
                description: "Groq"
            })}`,
            ...options.headers
        }, `ai-sdk/groq/${VERSION}`);
    const createChatModel = (modelId)=>new GroqChatLanguageModel(modelId, {
            provider: "groq.chat",
            url: ({ path })=>`${baseURL}${path}`,
            headers: getHeaders,
            fetch: options.fetch
        });
    const createLanguageModel = (modelId)=>{
        if (new.target) {
            throw new Error("The Groq model function cannot be called with the new keyword.");
        }
        return createChatModel(modelId);
    };
    const createTranscriptionModel = (modelId)=>{
        return new GroqTranscriptionModel(modelId, {
            provider: "groq.transcription",
            url: ({ path })=>`${baseURL}${path}`,
            headers: getHeaders,
            fetch: options.fetch
        });
    };
    const provider = function(modelId) {
        return createLanguageModel(modelId);
    };
    provider.specificationVersion = "v4";
    provider.languageModel = createLanguageModel;
    provider.chat = createChatModel;
    provider.embeddingModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "embeddingModel"
        });
    };
    provider.textEmbeddingModel = provider.embeddingModel;
    provider.imageModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "imageModel"
        });
    };
    provider.transcription = createTranscriptionModel;
    provider.transcriptionModel = createTranscriptionModel;
    provider.tools = groqTools;
    return provider;
}
var groq = createGroq();
;
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/mistral/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "createMistral",
    ()=>createMistral,
    "mistral",
    ()=>mistral
]);
// src/mistral-provider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider-utils/dist/index.js [app-route] (ecmascript) <locals>");
// src/mistral-chat-language-model.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@workflow/serde/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
;
;
;
// src/convert-mistral-usage.ts
function convertMistralUsage(usage) {
    var _a, _b, _c, _d, _e;
    if (usage == null) {
        return {
            inputTokens: {
                total: void 0,
                noCache: void 0,
                cacheRead: void 0,
                cacheWrite: void 0
            },
            outputTokens: {
                total: void 0,
                text: void 0,
                reasoning: void 0
            },
            raw: void 0
        };
    }
    const promptTokens = usage.prompt_tokens;
    const completionTokens = usage.completion_tokens;
    const cacheReadTokens = (_e = (_d = (_b = usage.num_cached_tokens) != null ? _b : (_a = usage.prompt_tokens_details) == null ? void 0 : _a.cached_tokens) != null ? _d : (_c = usage.prompt_token_details) == null ? void 0 : _c.cached_tokens) != null ? _e : 0;
    return {
        inputTokens: {
            total: promptTokens,
            noCache: promptTokens - cacheReadTokens,
            cacheRead: cacheReadTokens || void 0,
            cacheWrite: void 0
        },
        outputTokens: {
            total: completionTokens,
            text: completionTokens,
            reasoning: void 0
        },
        raw: usage
    };
}
;
;
function formatFileUrl({ part }) {
    if (part.data.type === "url") {
        return part.data.url.toString();
    }
    if (part.data.type === "data") {
        return `data:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
            part
        })};base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data)}`;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
        functionality: `file part data type ${part.data.type}`
    });
}
function convertToMistralChatMessages(prompt) {
    var _a;
    const messages = [];
    for(let i = 0; i < prompt.length; i++){
        const { role, content } = prompt[i];
        const isLastMessage = i === prompt.length - 1;
        switch(role){
            case "system":
                {
                    messages.push({
                        role: "system",
                        content
                    });
                    break;
                }
            case "user":
                {
                    messages.push({
                        role: "user",
                        content: content.map((part)=>{
                            switch(part.type){
                                case "text":
                                    {
                                        return {
                                            type: "text",
                                            text: part.text
                                        };
                                    }
                                case "file":
                                    {
                                        switch(part.data.type){
                                            case "reference":
                                                {
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: "file parts with provider references"
                                                    });
                                                }
                                            case "text":
                                                {
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: "text file parts"
                                                    });
                                                }
                                            case "url":
                                            case "data":
                                                {
                                                    const topLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTopLevelMediaType"])(part.mediaType);
                                                    if (topLevel === "image") {
                                                        return {
                                                            type: "image_url",
                                                            image_url: formatFileUrl({
                                                                part
                                                            })
                                                        };
                                                    } else {
                                                        if (part.data.type === "data") {
                                                            const fullMediaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                part
                                                            });
                                                            if (fullMediaType !== "application/pdf") {
                                                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                    functionality: "Only images and PDF file parts are supported"
                                                                });
                                                            }
                                                        } else if (part.mediaType !== "application/pdf") {
                                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                functionality: "Only images and PDF file parts are supported"
                                                            });
                                                        }
                                                        return {
                                                            type: "document_url",
                                                            document_url: formatFileUrl({
                                                                part
                                                            })
                                                        };
                                                    }
                                                }
                                        }
                                    }
                            }
                        })
                    });
                    break;
                }
            case "assistant":
                {
                    let text = "";
                    const toolCalls = [];
                    for (const part of content){
                        switch(part.type){
                            case "text":
                                {
                                    text += part.text;
                                    break;
                                }
                            case "tool-call":
                                {
                                    toolCalls.push({
                                        id: part.toolCallId,
                                        type: "function",
                                        function: {
                                            name: part.toolName,
                                            arguments: JSON.stringify(part.input)
                                        }
                                    });
                                    break;
                                }
                            case "reasoning":
                                {
                                    text += part.text;
                                    break;
                                }
                            default:
                                {
                                    throw new Error(`Unsupported content type in assistant message: ${part.type}`);
                                }
                        }
                    }
                    messages.push({
                        role: "assistant",
                        content: text,
                        prefix: isLastMessage ? true : void 0,
                        tool_calls: toolCalls.length > 0 ? toolCalls : void 0
                    });
                    break;
                }
            case "tool":
                {
                    for (const toolResponse of content){
                        if (toolResponse.type === "tool-approval-response") {
                            continue;
                        }
                        const output = toolResponse.output;
                        let contentValue;
                        switch(output.type){
                            case "text":
                            case "error-text":
                                contentValue = output.value;
                                break;
                            case "execution-denied":
                                contentValue = (_a = output.reason) != null ? _a : "Tool call execution denied.";
                                break;
                            case "content":
                            case "json":
                            case "error-json":
                                contentValue = JSON.stringify(output.value);
                                break;
                        }
                        messages.push({
                            role: "tool",
                            name: toolResponse.toolName,
                            tool_call_id: toolResponse.toolCallId,
                            content: contentValue
                        });
                    }
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    return messages;
}
// src/get-response-metadata.ts
function getResponseMetadata({ id, model, created }) {
    return {
        id: id != null ? id : void 0,
        modelId: model != null ? model : void 0,
        timestamp: created != null ? new Date(created * 1e3) : void 0
    };
}
// src/map-mistral-finish-reason.ts
function mapMistralFinishReason(finishReason) {
    switch(finishReason){
        case "stop":
            return "stop";
        case "length":
        case "model_length":
            return "length";
        case "tool_calls":
            return "tool-calls";
        default:
            return "other";
    }
}
;
var mistralLanguageModelChatOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Whether to inject a safety prompt before all conversations.
   *
   * Defaults to `false`.
   */ safePrompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    documentImageLimit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    documentPageLimit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    /**
   * Whether to use structured outputs.
   *
   * @default true
   */ structuredOutputs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Whether to use strict JSON schema validation.
   *
   * @default false
   */ strictJsonSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Whether to enable parallel function calling during tool use.
   * When set to false, the model will use at most one tool per response.
   *
   * @default true
   */ parallelToolCalls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Controls the reasoning effort for models that support adjustable reasoning.
   *
   * - `'high'`: Enable reasoning
   * - `'none'`: Disable reasoning
   */ reasoningEffort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "high",
        "none"
    ]).optional()
});
;
;
var mistralErrorDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    object: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("error"),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    param: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
var mistralFailedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
    errorSchema: mistralErrorDataSchema,
    errorToMessage: (data)=>data.message
});
;
function prepareTools({ tools, toolChoice }) {
    tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
    const toolWarnings = [];
    if (tools == null) {
        return {
            tools: void 0,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const mistralTools = [];
    for (const tool of tools){
        if (tool.type === "provider") {
            toolWarnings.push({
                type: "unsupported",
                feature: `provider-defined tool ${tool.id}`
            });
        } else {
            mistralTools.push({
                type: "function",
                function: {
                    name: tool.name,
                    description: tool.description,
                    parameters: tool.inputSchema,
                    ...tool.strict != null ? {
                        strict: tool.strict
                    } : {}
                }
            });
        }
    }
    if (toolChoice == null) {
        return {
            tools: mistralTools,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const type = toolChoice.type;
    switch(type){
        case "auto":
        case "none":
            return {
                tools: mistralTools,
                toolChoice: type,
                toolWarnings
            };
        case "required":
            return {
                tools: mistralTools,
                toolChoice: "any",
                toolWarnings
            };
        // mistral does not support tool mode directly,
        // so we filter the tools and force the tool choice through 'any'
        case "tool":
            return {
                tools: mistralTools.filter((tool)=>tool.function.name === toolChoice.toolName),
                toolChoice: "any",
                toolWarnings
            };
        default:
            {
                const _exhaustiveCheck = type;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                    functionality: `tool choice type: ${_exhaustiveCheck}`
                });
            }
    }
}
// src/mistral-chat-language-model.ts
var MistralChatLanguageModel = class _MistralChatLanguageModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
        this.supportedUrls = {
            "application/pdf": [
                /^https:\/\/.*$/
            ]
        };
        var _a;
        this.modelId = modelId;
        this.config = config;
        this.generateId = (_a = config.generateId) != null ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"];
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _MistralChatLanguageModel(options.modelId, options.config);
    }
    get provider() {
        return this.config.provider;
    }
    async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, reasoning, stopSequences, responseFormat, seed, providerOptions, tools, toolChoice }) {
        var _a, _b, _c, _d, _e;
        const warnings = [];
        const options = (_a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "mistral",
            providerOptions,
            schema: mistralLanguageModelChatOptions
        })) != null ? _a : {};
        if (topK != null) {
            warnings.push({
                type: "unsupported",
                feature: "topK"
            });
        }
        const supportsReasoningEffort = this.modelId === "mistral-small-latest" || this.modelId === "mistral-small-2603" || this.modelId === "mistral-medium-3" || this.modelId === "mistral-medium-3.5";
        let resolvedReasoningEffort;
        if (supportsReasoningEffort) {
            resolvedReasoningEffort = (_b = options.reasoningEffort) != null ? _b : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCustomReasoning"])(reasoning) ? reasoning === "none" ? "none" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapReasoningToProviderEffort"])({
                reasoning,
                effortMap: {
                    minimal: "high",
                    low: "high",
                    medium: "high",
                    high: "high",
                    xhigh: "high"
                },
                warnings
            }) : void 0;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCustomReasoning"])(reasoning)) {
            warnings.push({
                type: "unsupported",
                feature: "reasoning",
                details: "This model does not support reasoning configuration."
            });
        }
        const structuredOutputs = (_c = options.structuredOutputs) != null ? _c : true;
        const strictJsonSchema = (_d = options.strictJsonSchema) != null ? _d : false;
        if ((responseFormat == null ? void 0 : responseFormat.type) === "json" && !(responseFormat == null ? void 0 : responseFormat.schema)) {
            prompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["injectJsonInstructionIntoMessages"])({
                messages: prompt,
                schema: responseFormat.schema
            });
        }
        const baseArgs = {
            // model id:
            model: this.modelId,
            // model specific settings:
            safe_prompt: options.safePrompt,
            // standardized settings:
            max_tokens: maxOutputTokens,
            temperature,
            top_p: topP,
            ...frequencyPenalty != null ? {
                frequency_penalty: frequencyPenalty
            } : {},
            ...presencePenalty != null ? {
                presence_penalty: presencePenalty
            } : {},
            stop: stopSequences,
            random_seed: seed,
            reasoning_effort: resolvedReasoningEffort,
            // response format:
            response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? structuredOutputs && (responseFormat == null ? void 0 : responseFormat.schema) != null ? {
                type: "json_schema",
                json_schema: {
                    schema: responseFormat.schema,
                    strict: strictJsonSchema,
                    name: (_e = responseFormat.name) != null ? _e : "response",
                    description: responseFormat.description
                }
            } : {
                type: "json_object"
            } : void 0,
            // mistral-specific provider options:
            document_image_limit: options.documentImageLimit,
            document_page_limit: options.documentPageLimit,
            // messages:
            messages: convertToMistralChatMessages(prompt)
        };
        const { tools: mistralTools, toolChoice: mistralToolChoice, toolWarnings } = prepareTools({
            tools,
            toolChoice
        });
        return {
            args: {
                ...baseArgs,
                tools: mistralTools,
                tool_choice: mistralToolChoice,
                ...mistralTools != null && options.parallelToolCalls !== void 0 ? {
                    parallel_tool_calls: options.parallelToolCalls
                } : {}
            },
            warnings: [
                ...warnings,
                ...toolWarnings
            ]
        };
    }
    async doGenerate(options) {
        var _a, _b, _c;
        const { args: body, warnings } = await this.getArgs(options);
        const { responseHeaders, value: response, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: `${this.config.baseURL}/chat/completions`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body,
            failedResponseHandler: mistralFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(mistralChatResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const choice = response.choices[0];
        const content = [];
        if (choice.message.content != null && Array.isArray(choice.message.content)) {
            for (const part of choice.message.content){
                if (part.type === "thinking") {
                    const reasoningText = extractReasoningContent(part.thinking);
                    if (reasoningText.length > 0) {
                        content.push({
                            type: "reasoning",
                            text: reasoningText
                        });
                    }
                } else if (part.type === "text") {
                    if (part.text.length > 0) {
                        content.push({
                            type: "text",
                            text: part.text
                        });
                    }
                }
            }
        } else {
            const text = extractTextContent(choice.message.content);
            if (text != null && text.length > 0) {
                content.push({
                    type: "text",
                    text
                });
            }
        }
        if (choice.message.tool_calls != null) {
            for (const toolCall of choice.message.tool_calls){
                content.push({
                    type: "tool-call",
                    toolCallId: toolCall.id,
                    toolName: toolCall.function.name,
                    input: toolCall.function.arguments
                });
            }
        }
        return {
            content,
            finishReason: {
                unified: mapMistralFinishReason(choice.finish_reason),
                raw: (_c = choice.finish_reason) != null ? _c : void 0
            },
            usage: convertMistralUsage(response.usage),
            request: {
                body
            },
            response: {
                ...getResponseMetadata(response),
                headers: responseHeaders,
                body: rawResponse
            },
            warnings
        };
    }
    async doStream(options) {
        var _a, _b;
        const { args, warnings } = await this.getArgs(options);
        const body = {
            ...args,
            stream: true
        };
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: `${this.config.baseURL}/chat/completions`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body,
            failedResponseHandler: mistralFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(mistralChatChunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        let finishReason = {
            unified: "other",
            raw: void 0
        };
        let usage = void 0;
        let isFirstChunk = true;
        let activeText = false;
        let activeReasoningId = null;
        const generateId2 = this.generateId;
        return {
            stream: response.pipeThrough(new TransformStream({
                start (controller) {
                    controller.enqueue({
                        type: "stream-start",
                        warnings
                    });
                },
                transform (chunk, controller) {
                    if (options.includeRawChunks) {
                        controller.enqueue({
                            type: "raw",
                            rawValue: chunk.rawValue
                        });
                    }
                    if (!chunk.success) {
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata(value)
                        });
                    }
                    if (value.usage != null) {
                        usage = value.usage;
                    }
                    const choice = value.choices[0];
                    const delta = choice.delta;
                    const textContent = extractTextContent(delta.content);
                    if (delta.content != null && Array.isArray(delta.content)) {
                        for (const part of delta.content){
                            if (part.type === "thinking") {
                                const reasoningDelta = extractReasoningContent(part.thinking);
                                if (reasoningDelta.length > 0) {
                                    if (activeReasoningId == null) {
                                        if (activeText) {
                                            controller.enqueue({
                                                type: "text-end",
                                                id: "0"
                                            });
                                            activeText = false;
                                        }
                                        activeReasoningId = generateId2();
                                        controller.enqueue({
                                            type: "reasoning-start",
                                            id: activeReasoningId
                                        });
                                    }
                                    controller.enqueue({
                                        type: "reasoning-delta",
                                        id: activeReasoningId,
                                        delta: reasoningDelta
                                    });
                                }
                            }
                        }
                    }
                    if (textContent != null && textContent.length > 0) {
                        if (!activeText) {
                            if (activeReasoningId != null) {
                                controller.enqueue({
                                    type: "reasoning-end",
                                    id: activeReasoningId
                                });
                                activeReasoningId = null;
                            }
                            controller.enqueue({
                                type: "text-start",
                                id: "0"
                            });
                            activeText = true;
                        }
                        controller.enqueue({
                            type: "text-delta",
                            id: "0",
                            delta: textContent
                        });
                    }
                    if ((delta == null ? void 0 : delta.tool_calls) != null) {
                        for (const toolCall of delta.tool_calls){
                            const toolCallId = toolCall.id;
                            const toolName = toolCall.function.name;
                            const input = toolCall.function.arguments;
                            controller.enqueue({
                                type: "tool-input-start",
                                id: toolCallId,
                                toolName
                            });
                            controller.enqueue({
                                type: "tool-input-delta",
                                id: toolCallId,
                                delta: input
                            });
                            controller.enqueue({
                                type: "tool-input-end",
                                id: toolCallId
                            });
                            controller.enqueue({
                                type: "tool-call",
                                toolCallId,
                                toolName,
                                input
                            });
                        }
                    }
                    if (choice.finish_reason != null) {
                        finishReason = {
                            unified: mapMistralFinishReason(choice.finish_reason),
                            raw: choice.finish_reason
                        };
                    }
                },
                flush (controller) {
                    if (activeReasoningId != null) {
                        controller.enqueue({
                            type: "reasoning-end",
                            id: activeReasoningId
                        });
                    }
                    if (activeText) {
                        controller.enqueue({
                            type: "text-end",
                            id: "0"
                        });
                    }
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage: convertMistralUsage(usage)
                    });
                }
            })),
            request: {
                body
            },
            response: {
                headers: responseHeaders
            }
        };
    }
};
function extractReasoningContent(thinking) {
    return thinking.filter((chunk)=>chunk.type === "text").map((chunk)=>chunk.text).join("");
}
function extractTextContent(content) {
    if (typeof content === "string") {
        return content;
    }
    if (content == null) {
        return void 0;
    }
    const textContent = [];
    for (const chunk of content){
        const { type } = chunk;
        switch(type){
            case "text":
                textContent.push(chunk.text);
                break;
            case "thinking":
            case "image_url":
            case "reference":
                break;
            default:
                {
                    const _exhaustiveCheck = type;
                    throw new Error(`Unsupported type: ${_exhaustiveCheck}`);
                }
        }
    }
    return textContent.length ? textContent.join("") : void 0;
}
var mistralContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
            text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("image_url"),
            image_url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    detail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
                })
            ])
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("reference"),
            reference_ids: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
            ]))
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("thinking"),
            thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }))
        })
    ]))
]).nullish();
var mistralUsageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    num_cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    prompt_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
    }).nullish(),
    prompt_token_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
    }).nullish()
});
var mistralChatResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("assistant"),
            content: mistralContentSchema,
            tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                })
            })).nullish()
        }),
        index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })),
    object: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("chat.completion"),
    usage: mistralUsageSchema
});
var mistralChatChunkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        delta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "assistant"
            ]).optional(),
            content: mistralContentSchema,
            tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                })
            })).nullish()
        }),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })),
    usage: mistralUsageSchema.nullish()
});
;
;
;
;
var mistralEmbeddingModelOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Additional metadata to attach to the embedding request.
   */ metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()).optional(),
    /**
   * The dimension of the output embeddings when supported by the model.
   */ outputDimension: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional(),
    /**
   * The data type of the output embeddings when supported by the model.
   */ outputDtype: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "float",
        "int8",
        "uint8",
        "binary",
        "ubinary"
    ]).optional()
});
// src/mistral-embedding-model.ts
var MistralEmbeddingModel = class _MistralEmbeddingModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
        this.maxEmbeddingsPerCall = 32;
        this.supportsParallelCalls = false;
        this.modelId = modelId;
        this.config = config;
    }
    get provider() {
        return this.config.provider;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _MistralEmbeddingModel(options.modelId, options.config);
    }
    async doEmbed({ values, abortSignal, headers, providerOptions }) {
        var _a, _b, _c;
        if (values.length > this.maxEmbeddingsPerCall) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TooManyEmbeddingValuesForCallError"]({
                provider: this.provider,
                modelId: this.modelId,
                maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                values
            });
        }
        const mistralOptions = (_a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "mistral",
            providerOptions,
            schema: mistralEmbeddingModelOptions
        })) != null ? _a : {};
        const { responseHeaders, value: response, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: `${this.config.baseURL}/embeddings`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_c = (_b = this.config).headers) == null ? void 0 : _c.call(_b), headers),
            body: {
                model: this.modelId,
                input: values,
                metadata: mistralOptions.metadata,
                output_dimension: mistralOptions.outputDimension,
                output_dtype: mistralOptions.outputDtype,
                encoding_format: "float"
            },
            failedResponseHandler: mistralFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(MistralTextEmbeddingResponseSchema),
            abortSignal,
            fetch: this.config.fetch
        });
        return {
            warnings: [],
            embeddings: response.data.map((item)=>item.embedding),
            usage: response.usage ? {
                tokens: response.usage.prompt_tokens
            } : void 0,
            response: {
                headers: responseHeaders,
                body: rawValue
            }
        };
    }
};
var MistralTextEmbeddingResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        embedding: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number())
    })),
    usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }).nullish()
});
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "4.0.11" : "TURBOPACK unreachable";
// src/mistral-provider.ts
function createMistral(options = {}) {
    var _a;
    const baseURL = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL)) != null ? _a : "https://api.mistral.ai/v1";
    const getHeaders = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadApiKey"])({
                apiKey: options.apiKey,
                environmentVariableName: "MISTRAL_API_KEY",
                description: "Mistral"
            })}`,
            ...options.headers
        }, `ai-sdk/mistral/${VERSION}`);
    const createChatModel = (modelId)=>new MistralChatLanguageModel(modelId, {
            provider: "mistral.chat",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            generateId: options.generateId
        });
    const createEmbeddingModel = (modelId)=>new MistralEmbeddingModel(modelId, {
            provider: "mistral.embedding",
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        });
    const provider = function(modelId) {
        if (new.target) {
            throw new Error("The Mistral model function cannot be called with the new keyword.");
        }
        return createChatModel(modelId);
    };
    provider.specificationVersion = "v4";
    provider.languageModel = createChatModel;
    provider.chat = createChatModel;
    provider.embedding = createEmbeddingModel;
    provider.embeddingModel = createEmbeddingModel;
    provider.textEmbedding = createEmbeddingModel;
    provider.textEmbeddingModel = createEmbeddingModel;
    provider.imageModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "imageModel"
        });
    };
    return provider;
}
var mistral = createMistral();
;
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/openai-compatible/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenAICompatibleChatLanguageModel",
    ()=>OpenAICompatibleChatLanguageModel,
    "OpenAICompatibleCompletionLanguageModel",
    ()=>OpenAICompatibleCompletionLanguageModel,
    "OpenAICompatibleEmbeddingModel",
    ()=>OpenAICompatibleEmbeddingModel,
    "OpenAICompatibleImageModel",
    ()=>OpenAICompatibleImageModel,
    "VERSION",
    ()=>VERSION,
    "createOpenAICompatible",
    ()=>createOpenAICompatible
]);
// src/chat/openai-compatible-chat-language-model.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider-utils/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@workflow/serde/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
// src/chat/convert-to-openai-compatible-chat-messages.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider/dist/index.js [app-route] (ecmascript)");
;
;
// src/utils/to-camel-case.ts
function toCamelCase(str) {
    return str.replace(/[_-]([a-z])/g, (g)=>g[1].toUpperCase());
}
function resolveProviderOptionsKey(rawName, providerOptions) {
    const camelName = toCamelCase(rawName);
    if (camelName !== rawName && (providerOptions == null ? void 0 : providerOptions[camelName]) != null) {
        return camelName;
    }
    return rawName;
}
function warnIfDeprecatedProviderOptionsKey({ rawName, providerOptions, warnings }) {
    const camelName = toCamelCase(rawName);
    if (camelName !== rawName && (providerOptions == null ? void 0 : providerOptions[rawName]) != null) {
        warnings.push({
            type: "deprecated",
            setting: `providerOptions key '${rawName}'`,
            message: `Use '${camelName}' instead.`
        });
    }
}
;
var openaiCompatibleErrorDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        // The additional information below is handled loosely to support
        // OpenAI-compatible providers that have slightly different error
        // responses:
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        param: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().nullish(),
        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        ]).nullish()
    })
});
var defaultOpenAICompatibleErrorStructure = {
    errorSchema: openaiCompatibleErrorDataSchema,
    errorToMessage: (data)=>data.error.message
};
// src/chat/convert-openai-compatible-chat-usage.ts
function convertOpenAICompatibleChatUsage(usage) {
    var _a, _b, _c, _d, _e, _f;
    if (usage == null) {
        return {
            inputTokens: {
                total: void 0,
                noCache: void 0,
                cacheRead: void 0,
                cacheWrite: void 0
            },
            outputTokens: {
                total: void 0,
                text: void 0,
                reasoning: void 0
            },
            raw: void 0
        };
    }
    const promptTokens = (_a = usage.prompt_tokens) != null ? _a : 0;
    const completionTokens = (_b = usage.completion_tokens) != null ? _b : 0;
    const cacheReadTokens = (_d = (_c = usage.prompt_tokens_details) == null ? void 0 : _c.cached_tokens) != null ? _d : 0;
    const reasoningTokens = (_f = (_e = usage.completion_tokens_details) == null ? void 0 : _e.reasoning_tokens) != null ? _f : 0;
    return {
        inputTokens: {
            total: promptTokens,
            noCache: promptTokens - cacheReadTokens,
            cacheRead: cacheReadTokens,
            cacheWrite: void 0
        },
        outputTokens: {
            total: completionTokens,
            text: completionTokens - reasoningTokens,
            reasoning: reasoningTokens
        },
        raw: usage
    };
}
;
;
function getOpenAIMetadata(message) {
    var _a, _b;
    return (_b = (_a = message == null ? void 0 : message.providerOptions) == null ? void 0 : _a.openaiCompatible) != null ? _b : {};
}
function getAudioFormat(mediaType) {
    switch(mediaType){
        case "audio/wav":
            return "wav";
        case "audio/mp3":
        case "audio/mpeg":
            return "mp3";
        default:
            return null;
    }
}
function convertToOpenAICompatibleChatMessages(prompt) {
    var _a, _b, _c;
    const messages = [];
    for (const { role, content, ...message } of prompt){
        const metadata = getOpenAIMetadata({
            ...message
        });
        switch(role){
            case "system":
                {
                    messages.push({
                        role: "system",
                        content,
                        ...metadata
                    });
                    break;
                }
            case "user":
                {
                    if (content.length === 1 && content[0].type === "text") {
                        messages.push({
                            role: "user",
                            content: content[0].text,
                            ...getOpenAIMetadata(content[0])
                        });
                        break;
                    }
                    messages.push({
                        role: "user",
                        content: content.map((part)=>{
                            var _a2;
                            const partMetadata = getOpenAIMetadata(part);
                            switch(part.type){
                                case "text":
                                    {
                                        return {
                                            type: "text",
                                            text: part.text,
                                            ...partMetadata
                                        };
                                    }
                                case "file":
                                    {
                                        switch(part.data.type){
                                            case "reference":
                                                {
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: "file parts with provider references"
                                                    });
                                                }
                                            case "text":
                                                {
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: "text file parts"
                                                    });
                                                }
                                            case "url":
                                            case "data":
                                                {
                                                    const topLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTopLevelMediaType"])(part.mediaType);
                                                    if (topLevel === "image") {
                                                        return {
                                                            type: "image_url",
                                                            image_url: {
                                                                url: part.data.type === "url" ? part.data.url.toString() : `data:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                    part
                                                                })};base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data)}`
                                                            },
                                                            ...partMetadata
                                                        };
                                                    }
                                                    if (topLevel === "audio") {
                                                        if (part.data.type === "url") {
                                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                functionality: "audio file parts with URLs"
                                                            });
                                                        }
                                                        const fullMediaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                            part
                                                        });
                                                        const format = getAudioFormat(fullMediaType);
                                                        if (format === null) {
                                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                functionality: `audio media type ${fullMediaType}`
                                                            });
                                                        }
                                                        return {
                                                            type: "input_audio",
                                                            input_audio: {
                                                                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data),
                                                                format
                                                            },
                                                            ...partMetadata
                                                        };
                                                    }
                                                    if (topLevel === "application") {
                                                        if (part.data.type === "url") {
                                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                functionality: "PDF file parts with URLs"
                                                            });
                                                        }
                                                        const fullMediaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                            part
                                                        });
                                                        if (fullMediaType !== "application/pdf") {
                                                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                functionality: `file part media type ${fullMediaType}`
                                                            });
                                                        }
                                                        return {
                                                            type: "file",
                                                            file: {
                                                                filename: (_a2 = part.filename) != null ? _a2 : "document.pdf",
                                                                file_data: `data:application/pdf;base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data)}`
                                                            },
                                                            ...partMetadata
                                                        };
                                                    }
                                                    if (topLevel === "text") {
                                                        const textContent = part.data.type === "url" ? part.data.url.toString() : typeof part.data.data === "string" ? new TextDecoder().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertBase64ToUint8Array"])(part.data.data)) : new TextDecoder().decode(part.data.data);
                                                        return {
                                                            type: "text",
                                                            text: textContent,
                                                            ...partMetadata
                                                        };
                                                    }
                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                        functionality: `file part media type ${part.mediaType}`
                                                    });
                                                }
                                        }
                                    }
                            }
                        }),
                        ...metadata
                    });
                    break;
                }
            case "assistant":
                {
                    let text = "";
                    let reasoning = "";
                    const toolCalls = [];
                    for (const part of content){
                        const partMetadata = getOpenAIMetadata(part);
                        switch(part.type){
                            case "text":
                                {
                                    text += part.text;
                                    break;
                                }
                            case "reasoning":
                                {
                                    reasoning += part.text;
                                    break;
                                }
                            case "tool-call":
                                {
                                    const thoughtSignature = (_b = (_a = part.providerOptions) == null ? void 0 : _a.google) == null ? void 0 : _b.thoughtSignature;
                                    toolCalls.push({
                                        id: part.toolCallId,
                                        type: "function",
                                        function: {
                                            name: part.toolName,
                                            arguments: JSON.stringify(part.input)
                                        },
                                        ...partMetadata,
                                        // Include extra_content for Google Gemini thought signatures
                                        ...thoughtSignature ? {
                                            extra_content: {
                                                google: {
                                                    thought_signature: String(thoughtSignature)
                                                }
                                            }
                                        } : {}
                                    });
                                    break;
                                }
                        }
                    }
                    messages.push({
                        role: "assistant",
                        content: toolCalls.length > 0 ? text || null : text,
                        ...reasoning.length > 0 ? {
                            reasoning_content: reasoning
                        } : {},
                        tool_calls: toolCalls.length > 0 ? toolCalls : void 0,
                        ...metadata
                    });
                    break;
                }
            case "tool":
                {
                    for (const toolResponse of content){
                        if (toolResponse.type === "tool-approval-response") {
                            continue;
                        }
                        const output = toolResponse.output;
                        let contentValue;
                        switch(output.type){
                            case "text":
                            case "error-text":
                                contentValue = output.value;
                                break;
                            case "execution-denied":
                                contentValue = (_c = output.reason) != null ? _c : "Tool call execution denied.";
                                break;
                            case "content":
                            case "json":
                            case "error-json":
                                contentValue = JSON.stringify(output.value);
                                break;
                        }
                        const toolResponseMetadata = getOpenAIMetadata(toolResponse);
                        messages.push({
                            role: "tool",
                            tool_call_id: toolResponse.toolCallId,
                            content: contentValue,
                            ...toolResponseMetadata
                        });
                    }
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    return messages;
}
// src/chat/get-response-metadata.ts
function getResponseMetadata({ id, model, created }) {
    return {
        id: id != null ? id : void 0,
        modelId: model != null ? model : void 0,
        timestamp: created != null ? new Date(created * 1e3) : void 0
    };
}
// src/chat/map-openai-compatible-finish-reason.ts
function mapOpenAICompatibleFinishReason(finishReason) {
    switch(finishReason){
        case "stop":
            return "stop";
        case "length":
            return "length";
        case "content_filter":
            return "content-filter";
        case "function_call":
        case "tool_calls":
            return "tool-calls";
        default:
            return "other";
    }
}
;
var openaiCompatibleLanguageModelChatOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * A unique identifier representing your end-user, which can help the provider to
   * monitor and detect abuse.
   */ user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
   * Reasoning effort for reasoning models. Defaults to `medium`.
   */ reasoningEffort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
   * Controls the verbosity of the generated text. Defaults to `medium`.
   */ textVerbosity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
   * Whether to use strict JSON schema validation.
   * When true, the model uses constrained decoding to guarantee schema compliance.
   * Only used when the provider supports structured outputs and a schema is provided.
   *
   * @default true
   */ strictJsonSchema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
;
function prepareTools({ tools, toolChoice }) {
    tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
    const toolWarnings = [];
    if (tools == null) {
        return {
            tools: void 0,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const openaiCompatTools = [];
    for (const tool of tools){
        if (tool.type === "provider") {
            toolWarnings.push({
                type: "unsupported",
                feature: `provider-defined tool ${tool.id}`
            });
        } else {
            openaiCompatTools.push({
                type: "function",
                function: {
                    name: tool.name,
                    description: tool.description,
                    parameters: tool.inputSchema,
                    ...tool.strict != null ? {
                        strict: tool.strict
                    } : {}
                }
            });
        }
    }
    if (toolChoice == null) {
        return {
            tools: openaiCompatTools,
            toolChoice: void 0,
            toolWarnings
        };
    }
    const type = toolChoice.type;
    switch(type){
        case "auto":
        case "none":
        case "required":
            return {
                tools: openaiCompatTools,
                toolChoice: type,
                toolWarnings
            };
        case "tool":
            return {
                tools: openaiCompatTools,
                toolChoice: {
                    type: "function",
                    function: {
                        name: toolChoice.toolName
                    }
                },
                toolWarnings
            };
        default:
            {
                const _exhaustiveCheck = type;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                    functionality: `tool choice type: ${_exhaustiveCheck}`
                });
            }
    }
}
// src/chat/openai-compatible-chat-language-model.ts
var OpenAICompatibleChatLanguageModel = class _OpenAICompatibleChatLanguageModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
        var _a, _b;
        this.modelId = modelId;
        this.config = config;
        const errorStructure = (_a = config.errorStructure) != null ? _a : defaultOpenAICompatibleErrorStructure;
        this.chunkSchema = createOpenAICompatibleChatChunkSchema(errorStructure.errorSchema);
        this.failedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])(errorStructure);
        this.supportsStructuredOutputs = (_b = config.supportsStructuredOutputs) != null ? _b : false;
    }
    // type inferred via constructor
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _OpenAICompatibleChatLanguageModel(options.modelId, options.config);
    }
    get provider() {
        return this.config.provider;
    }
    get providerOptionsName() {
        return this.config.provider.split(".")[0].trim();
    }
    get supportedUrls() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).supportedUrls) == null ? void 0 : _b.call(_a)) != null ? _c : {};
    }
    transformRequestBody(args) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).transformRequestBody) == null ? void 0 : _b.call(_a, args)) != null ? _c : args;
    }
    convertUsage(usage) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).convertUsage) == null ? void 0 : _b.call(_a, usage)) != null ? _c : convertOpenAICompatibleChatUsage(usage);
    }
    async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, reasoning, providerOptions, stopSequences, responseFormat, seed, toolChoice, tools }) {
        var _a, _b, _c, _d, _e, _f;
        const warnings = [];
        const deprecatedOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "openai-compatible",
            providerOptions,
            schema: openaiCompatibleLanguageModelChatOptions
        });
        if (deprecatedOptions != null) {
            warnings.push({
                type: "deprecated",
                setting: "providerOptions key 'openai-compatible'",
                message: "Use 'openaiCompatible' instead."
            });
        }
        warnIfDeprecatedProviderOptionsKey({
            rawName: this.providerOptionsName,
            providerOptions,
            warnings
        });
        const compatibleOptions = Object.assign(deprecatedOptions != null ? deprecatedOptions : {}, (_a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "openaiCompatible",
            providerOptions,
            schema: openaiCompatibleLanguageModelChatOptions
        })) != null ? _a : {}, (_b = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: this.providerOptionsName,
            providerOptions,
            schema: openaiCompatibleLanguageModelChatOptions
        })) != null ? _b : {}, (_c = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: toCamelCase(this.providerOptionsName),
            providerOptions,
            schema: openaiCompatibleLanguageModelChatOptions
        })) != null ? _c : {});
        const strictJsonSchema = (_d = compatibleOptions == null ? void 0 : compatibleOptions.strictJsonSchema) != null ? _d : true;
        if (topK != null) {
            warnings.push({
                type: "unsupported",
                feature: "topK"
            });
        }
        if ((responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && !this.supportsStructuredOutputs) {
            warnings.push({
                type: "unsupported",
                feature: "responseFormat",
                details: "JSON response format schema is only supported with structuredOutputs"
            });
        }
        const { tools: openaiTools, toolChoice: openaiToolChoice, toolWarnings } = prepareTools({
            tools,
            toolChoice
        });
        const metadataKey = resolveProviderOptionsKey(this.providerOptionsName, providerOptions);
        return {
            metadataKey,
            args: {
                // model id:
                model: this.modelId,
                // model specific settings:
                user: compatibleOptions.user,
                // standardized settings:
                max_tokens: maxOutputTokens,
                temperature,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
                response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? this.supportsStructuredOutputs === true && responseFormat.schema != null ? {
                    type: "json_schema",
                    json_schema: {
                        schema: responseFormat.schema,
                        strict: strictJsonSchema,
                        name: (_e = responseFormat.name) != null ? _e : "response",
                        description: responseFormat.description
                    }
                } : {
                    type: "json_object"
                } : void 0,
                stop: stopSequences,
                seed,
                ...Object.fromEntries(Object.entries({
                    ...providerOptions == null ? void 0 : providerOptions[this.providerOptionsName],
                    ...providerOptions == null ? void 0 : providerOptions[toCamelCase(this.providerOptionsName)]
                }).filter(([key])=>!Object.keys(openaiCompatibleLanguageModelChatOptions.shape).includes(key))),
                reasoning_effort: (_f = compatibleOptions.reasoningEffort) != null ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCustomReasoning"])(reasoning) && reasoning !== "none" ? reasoning : void 0,
                verbosity: compatibleOptions.textVerbosity,
                // messages:
                messages: convertToOpenAICompatibleChatMessages(prompt),
                // tools:
                tools: openaiTools,
                tool_choice: openaiToolChoice
            },
            warnings: [
                ...warnings,
                ...toolWarnings
            ]
        };
    }
    async doGenerate(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        const { args, warnings, metadataKey } = await this.getArgs({
            ...options
        });
        const transformedBody = this.transformRequestBody(args);
        const body = JSON.stringify(transformedBody);
        const { responseHeaders, value: responseBody, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body: transformedBody,
            failedResponseHandler: this.failedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(OpenAICompatibleChatResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const choice = responseBody.choices[0];
        const content = [];
        const text = choice.message.content;
        if (text != null && text.length > 0) {
            content.push({
                type: "text",
                text
            });
        }
        const reasoning = (_c = choice.message.reasoning_content) != null ? _c : choice.message.reasoning;
        if (reasoning != null && reasoning.length > 0) {
            content.push({
                type: "reasoning",
                text: reasoning
            });
        }
        if (choice.message.tool_calls != null) {
            for (const toolCall of choice.message.tool_calls){
                const thoughtSignature = (_e = (_d = toolCall.extra_content) == null ? void 0 : _d.google) == null ? void 0 : _e.thought_signature;
                content.push({
                    type: "tool-call",
                    toolCallId: (_f = toolCall.id) != null ? _f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])(),
                    toolName: toolCall.function.name,
                    input: toolCall.function.arguments,
                    ...thoughtSignature ? {
                        providerMetadata: {
                            [metadataKey]: {
                                thoughtSignature
                            }
                        }
                    } : {}
                });
            }
        }
        const providerMetadata = {
            [metadataKey]: {},
            ...await ((_h = (_g = this.config.metadataExtractor) == null ? void 0 : _g.extractMetadata) == null ? void 0 : _h.call(_g, {
                parsedBody: rawResponse
            }))
        };
        const completionTokenDetails = (_i = responseBody.usage) == null ? void 0 : _i.completion_tokens_details;
        if ((completionTokenDetails == null ? void 0 : completionTokenDetails.accepted_prediction_tokens) != null) {
            providerMetadata[metadataKey].acceptedPredictionTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.accepted_prediction_tokens;
        }
        if ((completionTokenDetails == null ? void 0 : completionTokenDetails.rejected_prediction_tokens) != null) {
            providerMetadata[metadataKey].rejectedPredictionTokens = completionTokenDetails == null ? void 0 : completionTokenDetails.rejected_prediction_tokens;
        }
        return {
            content,
            finishReason: {
                unified: mapOpenAICompatibleFinishReason(choice.finish_reason),
                raw: (_j = choice.finish_reason) != null ? _j : void 0
            },
            usage: this.convertUsage(responseBody.usage),
            providerMetadata,
            request: {
                body
            },
            response: {
                ...getResponseMetadata(responseBody),
                headers: responseHeaders,
                body: rawResponse
            },
            warnings
        };
    }
    async doStream(options) {
        var _a, _b, _c;
        const { args, warnings, metadataKey } = await this.getArgs({
            ...options
        });
        const body = this.transformRequestBody({
            ...args,
            stream: true,
            // only include stream_options when in strict compatibility mode:
            stream_options: this.config.includeUsage ? {
                include_usage: true
            } : void 0
        });
        const metadataExtractor = (_a = this.config.metadataExtractor) == null ? void 0 : _a.createStreamExtractor();
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/chat/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_c = (_b = this.config).headers) == null ? void 0 : _c.call(_b), options.headers),
            body,
            failedResponseHandler: this.failedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(this.chunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const providerOptionsName = metadataKey;
        let toolCallTracker;
        const pendingToolCalls = /* @__PURE__ */ new Map();
        const forwardedToolCallIndices = /* @__PURE__ */ new Set();
        const processToolCallDelta = (toolCallDelta)=>{
            var _a2, _b2, _c2, _d, _e;
            const index = toolCallDelta.index;
            if (index == null || forwardedToolCallIndices.has(index)) {
                toolCallTracker.processDelta(toolCallDelta);
                return;
            }
            let pending = pendingToolCalls.get(index);
            if (pending == null) {
                pending = {
                    id: (_a2 = toolCallDelta.id) != null ? _a2 : null,
                    bufferedArguments: "",
                    extraContent: (_b2 = toolCallDelta.extra_content) != null ? _b2 : null
                };
                pendingToolCalls.set(index, pending);
            } else {
                if (pending.id == null && toolCallDelta.id != null) {
                    pending.id = toolCallDelta.id;
                }
                if (pending.extraContent == null && toolCallDelta.extra_content != null) {
                    pending.extraContent = toolCallDelta.extra_content;
                }
            }
            const argumentsDelta = (_c2 = toolCallDelta.function) == null ? void 0 : _c2.arguments;
            if (argumentsDelta != null) {
                pending.bufferedArguments += argumentsDelta;
            }
            const name = (_d = toolCallDelta.function) == null ? void 0 : _d.name;
            if (name != null) {
                const forwardDelta = {
                    index,
                    id: pending.id,
                    function: {
                        name,
                        arguments: pending.bufferedArguments
                    },
                    extra_content: (_e = pending.extraContent) != null ? _e : void 0
                };
                toolCallTracker.processDelta(forwardDelta);
                pendingToolCalls.delete(index);
                forwardedToolCallIndices.add(index);
            }
        };
        let finishReason = {
            unified: "other",
            raw: void 0
        };
        let usage = void 0;
        let isFirstChunk = true;
        let isActiveReasoning = false;
        let isActiveText = false;
        const convertUsage = (usage2)=>this.convertUsage(usage2);
        return {
            stream: response.pipeThrough(new TransformStream({
                start (controller) {
                    toolCallTracker = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StreamingToolCallTracker"](controller, {
                        generateId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"],
                        extractMetadata: (delta)=>{
                            var _a2, _b2;
                            const thoughtSignature = (_b2 = (_a2 = delta.extra_content) == null ? void 0 : _a2.google) == null ? void 0 : _b2.thought_signature;
                            return thoughtSignature ? {
                                [providerOptionsName]: {
                                    thoughtSignature
                                }
                            } : void 0;
                        },
                        buildToolCallProviderMetadata: (metadata)=>metadata
                    });
                    controller.enqueue({
                        type: "stream-start",
                        warnings
                    });
                },
                transform (chunk, controller) {
                    var _a2, _b2;
                    if (options.includeRawChunks) {
                        controller.enqueue({
                            type: "raw",
                            rawValue: chunk.rawValue
                        });
                    }
                    if (!chunk.success) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    metadataExtractor == null ? void 0 : metadataExtractor.processChunk(chunk.rawValue);
                    if ("error" in chunk.value) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: chunk.value.error.message
                        });
                        return;
                    }
                    const value = chunk.value;
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata(value)
                        });
                    }
                    if (value.usage != null) {
                        usage = value.usage;
                    }
                    const choice = value.choices[0];
                    if ((choice == null ? void 0 : choice.finish_reason) != null) {
                        finishReason = {
                            unified: mapOpenAICompatibleFinishReason(choice.finish_reason),
                            raw: (_a2 = choice.finish_reason) != null ? _a2 : void 0
                        };
                    }
                    if ((choice == null ? void 0 : choice.delta) == null) {
                        return;
                    }
                    const delta = choice.delta;
                    const reasoningContent = (_b2 = delta.reasoning_content) != null ? _b2 : delta.reasoning;
                    if (reasoningContent) {
                        if (!isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-start",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = true;
                        }
                        controller.enqueue({
                            type: "reasoning-delta",
                            id: "reasoning-0",
                            delta: reasoningContent
                        });
                    }
                    if (delta.content) {
                        if (isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-end",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = false;
                        }
                        if (!isActiveText) {
                            controller.enqueue({
                                type: "text-start",
                                id: "txt-0"
                            });
                            isActiveText = true;
                        }
                        controller.enqueue({
                            type: "text-delta",
                            id: "txt-0",
                            delta: delta.content
                        });
                    }
                    if (delta.tool_calls != null) {
                        if (isActiveReasoning) {
                            controller.enqueue({
                                type: "reasoning-end",
                                id: "reasoning-0"
                            });
                            isActiveReasoning = false;
                        }
                        for (const toolCallDelta of delta.tool_calls){
                            processToolCallDelta(toolCallDelta);
                        }
                    }
                },
                flush (controller) {
                    var _a2, _b2, _c2, _d;
                    if (isActiveReasoning) {
                        controller.enqueue({
                            type: "reasoning-end",
                            id: "reasoning-0"
                        });
                    }
                    if (isActiveText) {
                        controller.enqueue({
                            type: "text-end",
                            id: "txt-0"
                        });
                    }
                    for (const [index, pending] of pendingToolCalls){
                        toolCallTracker.processDelta({
                            index,
                            id: pending.id,
                            function: {
                                arguments: pending.bufferedArguments
                            }
                        });
                    }
                    pendingToolCalls.clear();
                    toolCallTracker.flush();
                    const providerMetadata = {
                        [providerOptionsName]: {},
                        ...metadataExtractor == null ? void 0 : metadataExtractor.buildMetadata()
                    };
                    if (((_a2 = usage == null ? void 0 : usage.completion_tokens_details) == null ? void 0 : _a2.accepted_prediction_tokens) != null) {
                        providerMetadata[providerOptionsName].acceptedPredictionTokens = (_b2 = usage == null ? void 0 : usage.completion_tokens_details) == null ? void 0 : _b2.accepted_prediction_tokens;
                    }
                    if (((_c2 = usage == null ? void 0 : usage.completion_tokens_details) == null ? void 0 : _c2.rejected_prediction_tokens) != null) {
                        providerMetadata[providerOptionsName].rejectedPredictionTokens = (_d = usage == null ? void 0 : usage.completion_tokens_details) == null ? void 0 : _d.rejected_prediction_tokens;
                    }
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage: convertUsage(usage),
                        providerMetadata
                    });
                }
            })),
            request: {
                body
            },
            response: {
                headers: responseHeaders
            }
        };
    }
};
var openaiCompatibleTokenUsageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
    prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    prompt_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        cached_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
    }).nullish(),
    completion_tokens_details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        reasoning_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
        accepted_prediction_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
        rejected_prediction_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
    }).nullish()
}).nullish();
var OpenAICompatibleChatResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("assistant").nullish(),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            reasoning_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                // Support for Google Gemini thought signatures via OpenAI compatibility
                extra_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    google: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        thought_signature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                    }).nullish()
                }).nullish()
            })).nullish()
        }),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })),
    usage: openaiCompatibleTokenUsageSchema
});
var chunkBaseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        delta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "assistant",
                ""
            ]).nullish(),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            // Most openai-compatible models set `reasoning_content`, but some
            // providers serving `gpt-oss` set `reasoning`. See #7866
            reasoning_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                //google does not send index
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                }),
                // Support for Google Gemini thought signatures via OpenAI compatibility
                extra_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    google: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        thought_signature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                    }).nullish()
                }).nullish()
            })).nullish()
        }).nullish(),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })),
    usage: openaiCompatibleTokenUsageSchema
});
var createOpenAICompatibleChatChunkSchema = (errorSchema)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        chunkBaseSchema,
        errorSchema
    ]);
;
;
// src/completion/convert-openai-compatible-completion-usage.ts
function convertOpenAICompatibleCompletionUsage(usage) {
    var _a, _b;
    if (usage == null) {
        return {
            inputTokens: {
                total: void 0,
                noCache: void 0,
                cacheRead: void 0,
                cacheWrite: void 0
            },
            outputTokens: {
                total: void 0,
                text: void 0,
                reasoning: void 0
            },
            raw: void 0
        };
    }
    const promptTokens = (_a = usage.prompt_tokens) != null ? _a : 0;
    const completionTokens = (_b = usage.completion_tokens) != null ? _b : 0;
    return {
        inputTokens: {
            total: promptTokens,
            noCache: promptTokens,
            cacheRead: void 0,
            cacheWrite: void 0
        },
        outputTokens: {
            total: completionTokens,
            text: completionTokens,
            reasoning: void 0
        },
        raw: usage
    };
}
;
function convertToOpenAICompatibleCompletionPrompt({ prompt, user = "user", assistant = "assistant" }) {
    let text = "";
    if (prompt[0].role === "system") {
        text += `${prompt[0].content}

`;
        prompt = prompt.slice(1);
    }
    for (const { role, content } of prompt){
        switch(role){
            case "system":
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidPromptError"]({
                        message: "Unexpected system message in prompt: ${content}",
                        prompt
                    });
                }
            case "user":
                {
                    const userMessage = content.map((part)=>{
                        switch(part.type){
                            case "text":
                                {
                                    return part.text;
                                }
                        }
                    }).filter(Boolean).join("");
                    text += `${user}:
${userMessage}

`;
                    break;
                }
            case "assistant":
                {
                    const assistantMessage = content.map((part)=>{
                        switch(part.type){
                            case "text":
                                {
                                    return part.text;
                                }
                            case "tool-call":
                                {
                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                        functionality: "tool-call messages"
                                    });
                                }
                        }
                    }).join("");
                    text += `${assistant}:
${assistantMessage}

`;
                    break;
                }
            case "tool":
                {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                        functionality: "tool messages"
                    });
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    text += `${assistant}:
`;
    return {
        prompt: text,
        stopSequences: [
            `
${user}:`
        ]
    };
}
// src/completion/get-response-metadata.ts
function getResponseMetadata2({ id, model, created }) {
    return {
        id: id != null ? id : void 0,
        modelId: model != null ? model : void 0,
        timestamp: created != null ? new Date(created * 1e3) : void 0
    };
}
// src/completion/map-openai-compatible-finish-reason.ts
function mapOpenAICompatibleFinishReason2(finishReason) {
    switch(finishReason){
        case "stop":
            return "stop";
        case "length":
            return "length";
        case "content_filter":
            return "content-filter";
        case "function_call":
        case "tool_calls":
            return "tool-calls";
        default:
            return "other";
    }
}
;
var openaiCompatibleLanguageModelCompletionOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Echo back the prompt in addition to the completion.
   */ echo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Modify the likelihood of specified tokens appearing in the completion.
   *
   * Accepts a JSON object that maps tokens (specified by their token ID in
   * the GPT tokenizer) to an associated bias value from -100 to 100.
   */ logitBias: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()).optional(),
    /**
   * The suffix that comes after a completion of inserted text.
   */ suffix: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
   * A unique identifier representing your end-user, which can help providers to
   * monitor and detect abuse.
   */ user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
// src/completion/openai-compatible-completion-language-model.ts
var OpenAICompatibleCompletionLanguageModel = class _OpenAICompatibleCompletionLanguageModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
        var _a;
        this.modelId = modelId;
        this.config = config;
        const errorStructure = (_a = config.errorStructure) != null ? _a : defaultOpenAICompatibleErrorStructure;
        this.chunkSchema = createOpenAICompatibleCompletionChunkSchema(errorStructure.errorSchema);
        this.failedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])(errorStructure);
    }
    // type inferred via constructor
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _OpenAICompatibleCompletionLanguageModel(options.modelId, options.config);
    }
    get provider() {
        return this.config.provider;
    }
    get providerOptionsName() {
        return this.config.provider.split(".")[0].trim();
    }
    get supportedUrls() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).supportedUrls) == null ? void 0 : _b.call(_a)) != null ? _c : {};
    }
    async getArgs({ prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences: userStopSequences, responseFormat, seed, providerOptions, tools, toolChoice }) {
        var _a, _b;
        const warnings = [];
        warnIfDeprecatedProviderOptionsKey({
            rawName: this.providerOptionsName,
            providerOptions,
            warnings
        });
        const completionOptions = Object.assign((_a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: this.providerOptionsName,
            providerOptions,
            schema: openaiCompatibleLanguageModelCompletionOptions
        })) != null ? _a : {}, (_b = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: toCamelCase(this.providerOptionsName),
            providerOptions,
            schema: openaiCompatibleLanguageModelCompletionOptions
        })) != null ? _b : {});
        if (topK != null) {
            warnings.push({
                type: "unsupported",
                feature: "topK"
            });
        }
        if (tools == null ? void 0 : tools.length) {
            warnings.push({
                type: "unsupported",
                feature: "tools"
            });
        }
        if (toolChoice != null) {
            warnings.push({
                type: "unsupported",
                feature: "toolChoice"
            });
        }
        if (responseFormat != null && responseFormat.type !== "text") {
            warnings.push({
                type: "unsupported",
                feature: "responseFormat",
                details: "JSON response format is not supported."
            });
        }
        const { prompt: completionPrompt, stopSequences } = convertToOpenAICompatibleCompletionPrompt({
            prompt
        });
        const stop = [
            ...stopSequences != null ? stopSequences : [],
            ...userStopSequences != null ? userStopSequences : []
        ];
        return {
            args: {
                // model id:
                model: this.modelId,
                // model specific settings:
                echo: completionOptions.echo,
                logit_bias: completionOptions.logitBias,
                suffix: completionOptions.suffix,
                user: completionOptions.user,
                // standardized settings:
                max_tokens: maxOutputTokens,
                temperature,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
                seed,
                ...providerOptions == null ? void 0 : providerOptions[this.providerOptionsName],
                ...providerOptions == null ? void 0 : providerOptions[toCamelCase(this.providerOptionsName)],
                // prompt:
                prompt: completionPrompt,
                // stop sequences:
                stop: stop.length > 0 ? stop : void 0
            },
            warnings
        };
    }
    async doGenerate(options) {
        var _a, _b;
        const { args, warnings } = await this.getArgs(options);
        const { responseHeaders, value: response, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body: args,
            failedResponseHandler: this.failedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(openaiCompatibleCompletionResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const choice = response.choices[0];
        const content = [];
        if (choice.text != null && choice.text.length > 0) {
            content.push({
                type: "text",
                text: choice.text
            });
        }
        return {
            content,
            usage: convertOpenAICompatibleCompletionUsage(response.usage),
            finishReason: {
                unified: mapOpenAICompatibleFinishReason2(choice.finish_reason),
                raw: choice.finish_reason
            },
            request: {
                body: args
            },
            response: {
                ...getResponseMetadata2(response),
                headers: responseHeaders,
                body: rawResponse
            },
            warnings
        };
    }
    async doStream(options) {
        var _a, _b;
        const { args, warnings } = await this.getArgs(options);
        const body = {
            ...args,
            stream: true,
            // only include stream_options when in strict compatibility mode:
            stream_options: this.config.includeUsage ? {
                include_usage: true
            } : void 0
        };
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/completions",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_b = (_a = this.config).headers) == null ? void 0 : _b.call(_a), options.headers),
            body,
            failedResponseHandler: this.failedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(this.chunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        let finishReason = {
            unified: "other",
            raw: void 0
        };
        let usage = void 0;
        let isFirstChunk = true;
        return {
            stream: response.pipeThrough(new TransformStream({
                start (controller) {
                    controller.enqueue({
                        type: "stream-start",
                        warnings
                    });
                },
                transform (chunk, controller) {
                    var _a2;
                    if (options.includeRawChunks) {
                        controller.enqueue({
                            type: "raw",
                            rawValue: chunk.rawValue
                        });
                    }
                    if (!chunk.success) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: chunk.error
                        });
                        return;
                    }
                    const value = chunk.value;
                    if ("error" in value) {
                        finishReason = {
                            unified: "error",
                            raw: void 0
                        };
                        controller.enqueue({
                            type: "error",
                            error: value.error
                        });
                        return;
                    }
                    if (isFirstChunk) {
                        isFirstChunk = false;
                        controller.enqueue({
                            type: "response-metadata",
                            ...getResponseMetadata2(value)
                        });
                        controller.enqueue({
                            type: "text-start",
                            id: "0"
                        });
                    }
                    if (value.usage != null) {
                        usage = value.usage;
                    }
                    const choice = value.choices[0];
                    if ((choice == null ? void 0 : choice.finish_reason) != null) {
                        finishReason = {
                            unified: mapOpenAICompatibleFinishReason2(choice.finish_reason),
                            raw: (_a2 = choice.finish_reason) != null ? _a2 : void 0
                        };
                    }
                    if ((choice == null ? void 0 : choice.text) != null) {
                        controller.enqueue({
                            type: "text-delta",
                            id: "0",
                            delta: choice.text
                        });
                    }
                },
                flush (controller) {
                    if (!isFirstChunk) {
                        controller.enqueue({
                            type: "text-end",
                            id: "0"
                        });
                    }
                    controller.enqueue({
                        type: "finish",
                        finishReason,
                        usage: convertOpenAICompatibleCompletionUsage(usage)
                    });
                }
            })),
            request: {
                body
            },
            response: {
                headers: responseHeaders
            }
        };
    }
};
var usageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    completion_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    total_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
var openaiCompatibleCompletionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    usage: usageSchema.nullish()
});
var createOpenAICompatibleCompletionChunkSchema = (errorSchema)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            created: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
            model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
            choices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                finish_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
            })),
            usage: usageSchema.nullish()
        }),
        errorSchema
    ]);
;
;
;
;
var openaiCompatibleEmbeddingModelOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * The number of dimensions the resulting output embeddings should have.
   * Only supported in text-embedding-3 and later models.
   */ dimensions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    /**
   * A unique identifier representing your end-user, which can help providers to
   * monitor and detect abuse.
   */ user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
// src/embedding/openai-compatible-embedding-model.ts
var OpenAICompatibleEmbeddingModel = class _OpenAICompatibleEmbeddingModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
        this.modelId = modelId;
        this.config = config;
    }
    get provider() {
        return this.config.provider;
    }
    get maxEmbeddingsPerCall() {
        var _a;
        return (_a = this.config.maxEmbeddingsPerCall) != null ? _a : 2048;
    }
    get supportsParallelCalls() {
        var _a;
        return (_a = this.config.supportsParallelCalls) != null ? _a : true;
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _OpenAICompatibleEmbeddingModel(options.modelId, options.config);
    }
    get providerOptionsName() {
        return this.config.provider.split(".")[0].trim();
    }
    async doEmbed({ values, headers, abortSignal, providerOptions }) {
        var _a, _b, _c, _d, _e;
        const warnings = [];
        const deprecatedOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "openai-compatible",
            providerOptions,
            schema: openaiCompatibleEmbeddingModelOptions
        });
        if (deprecatedOptions != null) {
            warnings.push({
                type: "deprecated",
                setting: "providerOptions key 'openai-compatible'",
                message: "Use 'openaiCompatible' instead."
            });
        }
        warnIfDeprecatedProviderOptionsKey({
            rawName: this.providerOptionsName,
            providerOptions,
            warnings
        });
        const compatibleOptions = Object.assign(deprecatedOptions != null ? deprecatedOptions : {}, (_a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "openaiCompatible",
            providerOptions,
            schema: openaiCompatibleEmbeddingModelOptions
        })) != null ? _a : {}, (_b = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: this.providerOptionsName,
            providerOptions,
            schema: openaiCompatibleEmbeddingModelOptions
        })) != null ? _b : {});
        if (values.length > this.maxEmbeddingsPerCall) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TooManyEmbeddingValuesForCallError"]({
                provider: this.provider,
                modelId: this.modelId,
                maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,
                values
            });
        }
        const { responseHeaders, value: response, rawValue } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/embeddings",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_d = (_c = this.config).headers) == null ? void 0 : _d.call(_c), headers),
            body: {
                model: this.modelId,
                input: values,
                encoding_format: "float",
                dimensions: compatibleOptions.dimensions,
                user: compatibleOptions.user
            },
            failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])((_e = this.config.errorStructure) != null ? _e : defaultOpenAICompatibleErrorStructure),
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(openaiTextEmbeddingResponseSchema),
            abortSignal,
            fetch: this.config.fetch
        });
        return {
            warnings,
            embeddings: response.data.map((item)=>item.embedding),
            usage: response.usage ? {
                tokens: response.usage.prompt_tokens
            } : void 0,
            providerMetadata: response.providerMetadata,
            response: {
                headers: responseHeaders,
                body: rawValue
            }
        };
    }
};
var openaiTextEmbeddingResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        embedding: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number())
    })),
    usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        prompt_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }).nullish(),
    providerMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())).optional()
});
;
;
var OpenAICompatibleImageModel = class _OpenAICompatibleImageModel {
    constructor(modelId, config){
        this.modelId = modelId;
        this.config = config;
        this.specificationVersion = "v4";
        this.maxImagesPerCall = 10;
    }
    get provider() {
        return this.config.provider;
    }
    /**
   * The provider options key used to extract provider-specific options.
   */ get providerOptionsKey() {
        return this.config.provider.split(".")[0].trim();
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _OpenAICompatibleImageModel(options.modelId, options.config);
    }
    getArgs(providerOptions, warnings) {
        warnIfDeprecatedProviderOptionsKey({
            rawName: this.providerOptionsKey,
            providerOptions,
            warnings
        });
        return {
            ...providerOptions[this.providerOptionsKey],
            ...providerOptions[toCamelCase(this.providerOptionsKey)]
        };
    }
    async doGenerate({ prompt, n, size, aspectRatio, seed, providerOptions, headers, abortSignal, files, mask }) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        const warnings = [];
        if (aspectRatio != null) {
            warnings.push({
                type: "unsupported",
                feature: "aspectRatio",
                details: "This model does not support aspect ratio. Use `size` instead."
            });
        }
        if (seed != null) {
            warnings.push({
                type: "unsupported",
                feature: "seed"
            });
        }
        const currentDate = (_c = (_b = (_a = this.config._internal) == null ? void 0 : _a.currentDate) == null ? void 0 : _b.call(_a)) != null ? _c : /* @__PURE__ */ new Date();
        const args = this.getArgs(providerOptions, warnings);
        if (files != null && files.length > 0) {
            const { value: response2, responseHeaders: responseHeaders2 } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postFormDataToApi"])({
                url: this.config.url({
                    path: "/images/edits",
                    modelId: this.modelId
                }),
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_e = (_d = this.config).headers) == null ? void 0 : _e.call(_d), headers),
                formData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToFormData"])({
                    model: this.modelId,
                    prompt,
                    image: await Promise.all(files.map((file)=>fileToBlob(file))),
                    mask: mask != null ? await fileToBlob(mask) : void 0,
                    n,
                    size,
                    ...args
                }),
                failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])((_f = this.config.errorStructure) != null ? _f : defaultOpenAICompatibleErrorStructure),
                successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(openaiCompatibleImageResponseSchema),
                abortSignal,
                fetch: this.config.fetch
            });
            return {
                images: response2.data.map((item)=>item.b64_json),
                warnings,
                response: {
                    timestamp: currentDate,
                    modelId: this.modelId,
                    headers: responseHeaders2
                }
            };
        }
        const { value: response, responseHeaders } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.config.url({
                path: "/images/generations",
                modelId: this.modelId
            }),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])((_h = (_g = this.config).headers) == null ? void 0 : _h.call(_g), headers),
            body: {
                model: this.modelId,
                prompt,
                n,
                size,
                ...args,
                response_format: "b64_json"
            },
            failedResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])((_i = this.config.errorStructure) != null ? _i : defaultOpenAICompatibleErrorStructure),
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(openaiCompatibleImageResponseSchema),
            abortSignal,
            fetch: this.config.fetch
        });
        return {
            images: response.data.map((item)=>item.b64_json),
            warnings,
            response: {
                timestamp: currentDate,
                modelId: this.modelId,
                headers: responseHeaders
            }
        };
    }
};
var openaiCompatibleImageResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        b64_json: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }))
});
async function fileToBlob(file) {
    if (file.type === "url") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["downloadBlob"])(file.url);
    }
    const data = file.data instanceof Uint8Array ? file.data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertBase64ToUint8Array"])(file.data);
    return new Blob([
        data
    ], {
        type: file.mediaType
    });
}
;
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "3.0.10" : "TURBOPACK unreachable";
// src/openai-compatible-provider.ts
function createOpenAICompatible(options) {
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])(options.baseURL);
    const providerName = options.name;
    const headers = {
        ...options.apiKey && {
            Authorization: `Bearer ${options.apiKey}`
        },
        ...options.headers
    };
    const getHeaders = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])(headers, `ai-sdk/openai-compatible/${VERSION}`);
    const getCommonModelConfig = (modelType)=>({
            provider: `${providerName}.${modelType}`,
            url: ({ path })=>{
                const url = new URL(`${baseURL}${path}`);
                if (options.queryParams) {
                    url.search = new URLSearchParams(options.queryParams).toString();
                }
                return url.toString();
            },
            headers: getHeaders,
            fetch: options.fetch
        });
    const createLanguageModel = (modelId)=>createChatModel(modelId);
    const createChatModel = (modelId)=>new OpenAICompatibleChatLanguageModel(modelId, {
            ...getCommonModelConfig("chat"),
            includeUsage: options.includeUsage,
            supportsStructuredOutputs: options.supportsStructuredOutputs,
            supportedUrls: options.supportedUrls,
            transformRequestBody: options.transformRequestBody,
            metadataExtractor: options.metadataExtractor,
            convertUsage: options.convertUsage
        });
    const createCompletionModel = (modelId)=>new OpenAICompatibleCompletionLanguageModel(modelId, {
            ...getCommonModelConfig("completion"),
            includeUsage: options.includeUsage
        });
    const createEmbeddingModel = (modelId)=>new OpenAICompatibleEmbeddingModel(modelId, {
            ...getCommonModelConfig("embedding")
        });
    const createImageModel = (modelId)=>new OpenAICompatibleImageModel(modelId, getCommonModelConfig("image"));
    const provider = (modelId)=>createLanguageModel(modelId);
    provider.specificationVersion = "v4";
    provider.languageModel = createLanguageModel;
    provider.chatModel = createChatModel;
    provider.completionModel = createCompletionModel;
    provider.embeddingModel = createEmbeddingModel;
    provider.textEmbeddingModel = createEmbeddingModel;
    provider.imageModel = createImageModel;
    return provider;
}
;
}),
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/moonshotai/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "createMoonshotAI",
    ()=>createMoonshotAI,
    "moonshotai",
    ()=>moonshotai
]);
// src/moonshotai-provider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider-utils/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
// src/moonshotai-chat-language-model.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2d$compatible$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/openai-compatible/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@workflow/serde/dist/index.js [app-route] (ecmascript)");
;
;
;
;
;
// src/convert-moonshotai-chat-usage.ts
function convertMoonshotAIChatUsage(usage) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (usage == null) {
        return {
            inputTokens: {
                total: void 0,
                noCache: void 0,
                cacheRead: void 0,
                cacheWrite: void 0
            },
            outputTokens: {
                total: void 0,
                text: void 0,
                reasoning: void 0
            },
            raw: void 0
        };
    }
    const promptTokens = (_a = usage.prompt_tokens) != null ? _a : 0;
    const completionTokens = (_b = usage.completion_tokens) != null ? _b : 0;
    const cacheReadTokens = (_e = (_d = usage.cached_tokens) != null ? _d : (_c = usage.prompt_tokens_details) == null ? void 0 : _c.cached_tokens) != null ? _e : 0;
    const reasoningTokens = (_g = (_f = usage.completion_tokens_details) == null ? void 0 : _f.reasoning_tokens) != null ? _g : 0;
    return {
        inputTokens: {
            total: promptTokens,
            noCache: promptTokens - cacheReadTokens,
            cacheRead: cacheReadTokens,
            cacheWrite: void 0
        },
        outputTokens: {
            total: completionTokens,
            text: completionTokens - reasoningTokens,
            reasoning: reasoningTokens
        },
        raw: usage
    };
}
// src/moonshotai-chat-language-model.ts
var MoonshotAIChatLanguageModel = class _MoonshotAIChatLanguageModel extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2d$compatible$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OpenAICompatibleChatLanguageModel"] {
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_SERIALIZE"]](model) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["serializeModelOptions"])({
            modelId: model.modelId,
            config: model.config
        });
    }
    static [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["WORKFLOW_DESERIALIZE"]](options) {
        return new _MoonshotAIChatLanguageModel(options.modelId, options.config);
    }
    constructor(modelId, config){
        super(modelId, config);
    }
    async doGenerate(options) {
        var _a, _b;
        const result = await super.doGenerate(options);
        const usage = (_b = (_a = result.response) == null ? void 0 : _a.body) == null ? void 0 : _b.usage;
        return {
            ...result,
            usage: convertMoonshotAIChatUsage(usage)
        };
    }
    async doStream(options) {
        const result = await super.doStream(options);
        return {
            ...result,
            stream: result.stream.pipeThrough(new TransformStream({
                transform (chunk, controller) {
                    if (chunk.type === "finish" && chunk.usage) {
                        controller.enqueue({
                            ...chunk,
                            usage: convertMoonshotAIChatUsage(chunk.usage.raw)
                        });
                    } else {
                        controller.enqueue(chunk);
                    }
                }
            }))
        };
    }
};
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "3.0.12" : "TURBOPACK unreachable";
// src/moonshotai-provider.ts
var moonshotaiErrorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })
});
var moonshotaiErrorStructure = {
    errorSchema: moonshotaiErrorSchema,
    errorToMessage: (data)=>data.error.message
};
var defaultBaseURL = "https://api.moonshot.ai/v1";
function getModelStructuredOutputSupport(modelId) {
    if (modelId.startsWith("kimi-k")) return true;
    return false;
}
function createMoonshotAI(options = {}) {
    var _a;
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])((_a = options.baseURL) != null ? _a : defaultBaseURL);
    const getHeaders = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
            Authorization: `Bearer ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadApiKey"])({
                apiKey: options.apiKey,
                environmentVariableName: "MOONSHOT_API_KEY",
                description: "Moonshot API key"
            })}`,
            ...options.headers
        }, `ai-sdk/moonshotai/${VERSION}`);
    const getCommonModelConfig = (modelType)=>({
            provider: `moonshotai.${modelType}`,
            url: ({ path })=>`${baseURL}${path}`,
            headers: getHeaders,
            fetch: options.fetch
        });
    const createChatModel = (modelId)=>{
        return new MoonshotAIChatLanguageModel(modelId, {
            ...getCommonModelConfig("chat"),
            includeUsage: true,
            errorStructure: moonshotaiErrorStructure,
            supportsStructuredOutputs: getModelStructuredOutputSupport(modelId),
            transformRequestBody: (args)=>{
                var _a2, _b;
                const thinking = args.thinking;
                const reasoningHistory = args.reasoningHistory;
                const { thinking: _, reasoningHistory: __, ...rest } = args;
                const schema = (_b = (_a2 = rest.response_format) == null ? void 0 : _a2.json_schema) == null ? void 0 : _b.schema;
                if (schema != null) {
                    const { $schema: _$schema, ...schemaWithoutDollarSchema } = schema;
                    rest.response_format = {
                        ...rest.response_format,
                        json_schema: {
                            ...rest.response_format.json_schema,
                            schema: schemaWithoutDollarSchema
                        }
                    };
                }
                return {
                    ...rest,
                    ...thinking && {
                        thinking: {
                            type: thinking.type,
                            ...thinking.budgetTokens !== void 0 && {
                                budget_tokens: thinking.budgetTokens
                            }
                        }
                    },
                    ...reasoningHistory && {
                        reasoning_history: reasoningHistory
                    }
                };
            }
        });
    };
    const provider = (modelId)=>createChatModel(modelId);
    provider.specificationVersion = "v4";
    provider.chatModel = createChatModel;
    provider.languageModel = createChatModel;
    provider.embeddingModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "embeddingModel"
        });
    };
    provider.imageModel = (modelId)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoSuchModelError"]({
            modelId,
            modelType: "imageModel"
        });
    };
    return provider;
}
var moonshotai = createMoonshotAI();
;
}),
];

//# sourceMappingURL=0dra_1r6jy93._.js.map