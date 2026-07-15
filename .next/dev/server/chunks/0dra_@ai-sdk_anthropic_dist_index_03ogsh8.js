module.exports = [
"[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/anthropic/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "anthropic",
    ()=>anthropic,
    "createAnthropic",
    ()=>createAnthropic,
    "forwardAnthropicContainerIdFromLastStep",
    ()=>forwardAnthropicContainerIdFromLastStep
]);
// src/anthropic-provider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@ai-sdk/provider-utils/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$workflow$2f$serde$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Jimmy/Project/Vibe Hatch Code/node_modules/@workflow/serde/dist/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
var anthropicErrorDataSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("error"),
        error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    })));
var anthropicFailedResponseHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonErrorResponseHandler"])({
    errorSchema: anthropicErrorDataSchema,
    errorToMessage: (data)=>data.error.message
});
// src/anthropic-files.ts
var anthropicUploadFileResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("file"),
        filename: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        mime_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        size_bytes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        created_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        downloadable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullish()
    })));
var AnthropicFiles = class {
    constructor(config){
        this.config = config;
        this.specificationVersion = "v4";
    }
    get provider() {
        return this.config.provider;
    }
    async uploadFile({ data, mediaType, filename }) {
        var _a, _b;
        const fileBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertInlineFileDataToUint8Array"])(data);
        const blob = new Blob([
            fileBytes
        ], {
            type: mediaType
        });
        const formData = new FormData();
        if (filename != null) {
            formData.append("file", blob, filename);
        } else {
            formData.append("file", blob);
        }
        const { value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postFormDataToApi"])({
            url: `${this.config.baseURL}/files`,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(this.config.headers(), {
                "anthropic-beta": "files-api-2025-04-14"
            }),
            formData,
            failedResponseHandler: anthropicFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(anthropicUploadFileResponseSchema),
            fetch: this.config.fetch
        });
        return {
            warnings: [],
            providerReference: {
                anthropic: response.id
            },
            mediaType: (_a = response.mime_type) != null ? _a : mediaType,
            filename: (_b = response.filename) != null ? _b : filename,
            providerMetadata: {
                anthropic: {
                    filename: response.filename,
                    mimeType: response.mime_type,
                    sizeBytes: response.size_bytes,
                    createdAt: response.created_at,
                    ...response.downloadable != null ? {
                        downloadable: response.downloadable
                    } : {}
                }
            }
        };
    }
};
;
;
;
;
var anthropicStopDetailsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    explanation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
    recommended_model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
});
var anthropicResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("message"),
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_result_location"),
                        cited_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        encrypted_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("page_location"),
                        cited_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        document_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        document_title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
                        start_page_number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        end_page_number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("char_location"),
                        cited_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        document_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        document_title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
                        start_char_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        end_char_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    })
                ])).optional()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("thinking"),
                thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                signature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("redacted_thinking"),
                data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compaction"),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_use"),
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown(),
                // Programmatic tool calling: caller info when triggered from code execution
                caller: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20250825"),
                        tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20260120"),
                        tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("direct")
                    })
                ]).optional()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("server_tool_use"),
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullish(),
                caller: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20260120"),
                        tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("direct")
                    })
                ]).optional()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("mcp_tool_use"),
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown(),
                server_name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("mcp_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                is_error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ]))
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_result"),
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        retrieved_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("document"),
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
                            citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
                            }).optional(),
                            source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("base64"),
                                    media_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("application/pdf"),
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                                }),
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                                    media_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text/plain"),
                                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                                })
                            ])
                        })
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ])
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_result"),
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        encrypted_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        page_age: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                    })),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ])
            }),
            // code execution results for code_execution_20250522 tool:
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_result"),
                        stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                            file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })).optional().default([])
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("encrypted_code_execution_result"),
                        encrypted_stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                            file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })).optional().default([])
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ])
            }),
            // bash code execution results for code_execution_20250825 tool:
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_result"),
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_output"),
                            file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })),
                        stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ])
            }),
            // text editor code execution results for code_execution_20250825 tool:
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_view_result"),
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        file_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        num_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                        start_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                        total_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_create_result"),
                        is_file_update: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_str_replace_result"),
                        lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable(),
                        new_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                        new_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                        old_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                        old_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
                    })
                ])
            }),
            // tool search tool results for tool_search_tool_regex_20251119 and tool_search_tool_bm25_20251119:
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_search_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_search_tool_search_result"),
                        tool_references: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_reference"),
                            tool_name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }))
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_search_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ])
            }),
            // advisor results for advisor_20260301:
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_tool_result"),
                tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_result"),
                        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_redacted_result"),
                        encrypted_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_tool_result_error"),
                        error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })
                ])
            }),
            // Server-side fallback marker. Parsed so the response validates, but
            // dropped from the content output (the AI SDK has no model-hop
            // primitive). The hop remains observable via usage.iterations.
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("fallback")
            })
        ])),
        stop_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        stop_sequence: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        stop_details: anthropicStopDetailsSchema.nullish(),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
            input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            output_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            cache_creation_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
            cache_read_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
            iterations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compaction"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("message"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_message"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("fallback_message")
                ]),
                model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                output_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                cache_creation_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                cache_read_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
            })).nullish()
        }),
        container: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            expires_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            skills: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("anthropic"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("custom")
                ]),
                skill_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })).nullish()
        }).nullish(),
        context_management: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            applied_edits: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear_tool_uses_20250919"),
                    cleared_tool_uses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                    cleared_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear_thinking_20251015"),
                    cleared_thinking_turns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                    cleared_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compact_20260112")
                })
            ]))
        }).nullish()
    })));
var anthropicChunkSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("message_start"),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
                    input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                    cache_creation_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                    cache_read_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
                }),
                // Programmatic tool calling: content may be pre-populated for deferred tool calls
                content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_use"),
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown(),
                        caller: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20250825"),
                                tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                            }),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20260120"),
                                tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                            }),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("direct")
                            })
                        ]).optional()
                    })
                ])).nullish(),
                stop_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                container: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    expires_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }).nullish()
            })
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("content_block_start"),
            index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            content_block: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("thinking"),
                    thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_use"),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    // Programmatic tool calling: input may be present directly for deferred tool calls
                    input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional(),
                    // Programmatic tool calling: caller info when triggered from code execution
                    caller: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20250825"),
                            tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20260120"),
                            tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("direct")
                        })
                    ]).optional()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("redacted_thinking"),
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compaction"),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("server_tool_use"),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullish(),
                    caller: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_20260120"),
                            tool_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("direct")
                        })
                    ]).optional()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("mcp_tool_use"),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown(),
                    server_name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("mcp_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    is_error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                            text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ]))
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_result"),
                            url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            retrieved_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("document"),
                                title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
                                citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
                                }).optional(),
                                source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("base64"),
                                        media_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("application/pdf"),
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                                    }),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                                        media_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text/plain"),
                                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                                    })
                                ])
                            })
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ])
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_result"),
                            url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            encrypted_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            page_age: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                        })),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ])
                }),
                // code execution results for code_execution_20250522 tool:
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_result"),
                            stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                            })).optional().default([])
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("encrypted_code_execution_result"),
                            encrypted_stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                            })).optional().default([])
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ])
                }),
                // bash code execution results for code_execution_20250825 tool:
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_result"),
                            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_output"),
                                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                            })),
                            stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ])
                }),
                // text editor code execution results for code_execution_20250825 tool:
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_view_result"),
                            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            file_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            num_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                            start_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                            total_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_create_result"),
                            is_file_update: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_str_replace_result"),
                            lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable(),
                            new_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                            new_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                            old_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
                            old_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
                        })
                    ])
                }),
                // tool search tool results for tool_search_tool_regex_20251119 and tool_search_tool_bm25_20251119:
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_search_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_search_tool_search_result"),
                            tool_references: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_reference"),
                                tool_name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                            }))
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_search_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ])
                }),
                // advisor results for advisor_20260301:
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_tool_result"),
                    tool_use_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_result"),
                            text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_redacted_result"),
                            encrypted_content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_tool_result_error"),
                            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        })
                    ])
                }),
                // Server-side fallback marker; dropped from content output (see the
                // response schema). The hop remains observable via usage.iterations.
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("fallback")
                })
            ])
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("content_block_delta"),
            index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            delta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("input_json_delta"),
                    partial_json: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_delta"),
                    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("thinking_delta"),
                    thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("signature_delta"),
                    signature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compaction_delta"),
                    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("citations_delta"),
                    citation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_result_location"),
                            cited_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            encrypted_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("page_location"),
                            cited_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            document_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                            document_title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
                            start_page_number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                            end_page_number: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("char_location"),
                            cited_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                            document_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                            document_title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
                            start_char_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                            end_char_index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                        })
                    ])
                })
            ])
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("content_block_stop"),
            index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("error"),
            error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("message_delta"),
            delta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                stop_reason: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                stop_sequence: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                stop_details: anthropicStopDetailsSchema.nullish(),
                container: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    expires_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                    skills: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("anthropic"),
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("custom")
                        ]),
                        skill_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                        version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                    })).nullish()
                }).nullish()
            }),
            usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].looseObject({
                input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                output_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                cache_creation_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                cache_read_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                iterations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compaction"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("message"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_message"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("fallback_message")
                    ]),
                    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
                    input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                    output_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                    cache_creation_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish(),
                    cache_read_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullish()
                })).nullish()
            }),
            context_management: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                applied_edits: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear_tool_uses_20250919"),
                        cleared_tool_uses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        cleared_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear_thinking_20251015"),
                        cleared_thinking_turns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                        cleared_input_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compact_20260112")
                    })
                ]))
            }).nullish()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("message_stop")
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("ping")
        })
    ])));
var anthropicReasoningMetadataSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        signature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        redactedData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })));
;
var anthropicFilePartProviderOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Upload this file into the code execution container instead of sending it as
   * a normal document or image content block.
   */ containerUpload: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Citation configuration for this document.
   * When enabled, this document will generate citations in the response.
   */ citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        /**
     * Enable citations for this document
     */ enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    }).optional(),
    /**
   * Custom title for the document.
   * If not provided, the filename will be used.
   */ title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /**
   * Context about the document that will be passed to the model
   * but not used towards cited content.
   * Useful for storing document metadata as text or stringified JSON.
   */ context: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var anthropicLanguageModelOptions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
   * Whether to send reasoning to the model.
   *
   * This allows you to deactivate reasoning inputs for models that do not support them.
   */ sendReasoning: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Determines how structured outputs are generated.
   *
   * - `outputFormat`: Use the `output_config.format` parameter to specify the structured output format.
   * - `jsonTool`: Use a special 'json' tool to specify the structured output format.
   * - `auto`: Use 'outputFormat' when supported, otherwise use 'jsonTool' (default).
   */ structuredOutputMode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "outputFormat",
        "jsonTool",
        "auto"
    ]).optional(),
    /**
   * Configuration for enabling Claude's extended thinking.
   *
   * When enabled, responses include thinking content blocks showing Claude's thinking process before the final answer.
   * Requires a minimum budget of 1,024 tokens and counts towards the `max_tokens` limit.
   */ thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            /** for Sonnet 4.6, Opus 4.6, and newer models */ type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("adaptive"),
            /**
       * Controls whether thinking content is included in the response.
       * - `"omitted"`: Thinking blocks are present but text is empty (default for Opus 4.7+).
       * - `"summarized"`: Thinking content is returned. Required to see reasoning output.
       */ display: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "omitted",
                "summarized"
            ]).optional()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            /** for models before Opus 4.6, except Sonnet 4.6 still supports it */ type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("enabled"),
            budgetTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("disabled")
        })
    ]).optional(),
    /**
   * Whether to disable parallel function calling during tool use. Default is false.
   * When set to true, Claude will use at most one tool per response.
   */ disableParallelToolUse: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * Cache control settings for this message.
   * See https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
   */ cacheControl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("ephemeral"),
        ttl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("5m"),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("1h")
        ]).optional()
    }).optional(),
    /**
   * Metadata to include with the request.
   *
   * See https://platform.claude.com/docs/en/api/messages/create for details.
   */ metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        /**
     * An external identifier for the user associated with the request.
     *
     * Should be a UUID, hash value, or other opaque identifier.
     * Must not contain PII (name, email, phone number, etc.).
     */ userId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    }).optional(),
    /**
   * MCP servers to be utilized in this request.
   */ mcpServers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("url"),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        authorizationToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        toolConfiguration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullish(),
            allowedTools: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullish()
        }).nullish()
    })).optional(),
    /**
   * Agent Skills configuration. Skills enable Claude to perform specialized tasks
   * like document processing (PPTX, DOCX, PDF, XLSX) and data analysis.
   * Requires code execution tool to be enabled.
   */ container: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        skills: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("anthropic"),
                skillId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("custom"),
                providerReference: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
                version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
            })
        ])).optional()
    }).optional(),
    /**
   * Whether to enable fine-grained (eager) streaming of tool call inputs
   * and structured outputs for every function tool in the request. When
   * true (the default), each function tool receives a default of
   * `eager_input_streaming: true` unless it explicitly sets
   * `providerOptions.anthropic.eagerInputStreaming`.
   *
   * @default true
   */ toolStreaming: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    /**
   * @default 'high'
   */ effort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "low",
        "medium",
        "high",
        "xhigh",
        "max"
    ]).optional(),
    /**
   * Task budget for agentic turns. Informs the model of the total token budget
   * available for the current task, allowing it to prioritize work and wind down
   * gracefully as the budget is consumed.
   *
   * Advisory only — does not enforce a hard token limit.
   */ taskBudget: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tokens"),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(2e4),
        remaining: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).optional()
    }).optional(),
    /**
   * Enable fast mode for faster inference (2.5x faster output token speeds).
   * Only supported with claude-opus-4-6.
   */ speed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "fast",
        "standard"
    ]).optional(),
    /**
   * Controls where model inference runs for this request.
   *
   * - `"global"`: Inference may run in any available geography (default).
   * - `"us"`: Inference runs only in US-based infrastructure.
   *
   * See https://platform.claude.com/docs/en/build-with-claude/data-residency
   */ inferenceGeo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "us",
        "global"
    ]).optional(),
    /**
   * Server-side fallback chain.
   *
   * When the primary model's safety classifiers block a turn, the API
   * automatically retries it on the next model in the chain, server-side. A
   * `content-filter` finish reason means the entire chain refused.
   *
   * Each entry is merged into the request as a direct request to that entry's
   * model, so it must be formatted accordingly: `model` is required, and an
   * entry may additionally override `max_tokens`, `thinking`, `output_config`,
   * and `speed` for that attempt only (`speed` additionally requires the speed
   * beta). The value is passed through to the API as-is.
   *
   * The required `server-side-fallback-2026-06-01` beta is added automatically
   * when this option is set.
   */ fallbacks: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        max_tokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional(),
        output_config: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional(),
        speed: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "fast",
            "standard"
        ]).optional()
    })).optional(),
    /**
   * A set of beta features to enable.
   * Allow a provider to receive the full `betas` set if it needs it.
   */ anthropicBeta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    contextManagement: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        edits: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear_tool_uses_20250919"),
                trigger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("input_tokens"),
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_uses"),
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    })
                ]).optional(),
                keep: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_uses"),
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                }).optional(),
                clearAtLeast: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("input_tokens"),
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                }).optional(),
                clearToolInputs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
                excludeTools: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("clear_thinking_20251015"),
                keep: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("all"),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("thinking_turns"),
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                    })
                ]).optional()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("compact_20260112"),
                trigger: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("input_tokens"),
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
                }).optional(),
                pauseAfterCompaction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
                instructions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
            })
        ]))
    }).optional()
});
;
// src/get-cache-control.ts
var MAX_CACHE_BREAKPOINTS = 4;
function getCacheControl(providerMetadata) {
    var _a;
    const anthropic2 = providerMetadata == null ? void 0 : providerMetadata.anthropic;
    const cacheControlValue = (_a = anthropic2 == null ? void 0 : anthropic2.cacheControl) != null ? _a : anthropic2 == null ? void 0 : anthropic2.cache_control;
    return cacheControlValue;
}
var CacheControlValidator = class {
    constructor(){
        this.breakpointCount = 0;
        this.warnings = [];
    }
    getCacheControl(providerMetadata, context) {
        const cacheControlValue = getCacheControl(providerMetadata);
        if (!cacheControlValue) {
            return void 0;
        }
        if (!context.canCache) {
            this.warnings.push({
                type: "unsupported",
                feature: "cache_control on non-cacheable context",
                details: `cache_control cannot be set on ${context.type}. It will be ignored.`
            });
            return void 0;
        }
        this.breakpointCount++;
        if (this.breakpointCount > MAX_CACHE_BREAKPOINTS) {
            this.warnings.push({
                type: "unsupported",
                feature: "cacheControl breakpoint limit",
                details: `Maximum ${MAX_CACHE_BREAKPOINTS} cache breakpoints exceeded (found ${this.breakpointCount}). This breakpoint will be ignored.`
            });
            return void 0;
        }
        return cacheControlValue;
    }
    getWarnings() {
        return this.warnings;
    }
};
;
;
var advisor_20260301ArgsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        maxUses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        caching: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("ephemeral"),
            ttl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("5m"),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("1h")
            ])
        }).optional()
    })));
var advisor_20260301OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_result"),
            text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_redacted_result"),
            encryptedContent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("advisor_tool_result_error"),
            errorCode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ])));
var advisor_20260301InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}).strict()));
var factory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.advisor_20260301",
    inputSchema: advisor_20260301InputSchema,
    outputSchema: advisor_20260301OutputSchema,
    supportsDeferredResults: true
});
var advisor_20260301 = (args)=>{
    return factory(args);
};
;
;
var textEditor_20250728ArgsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        maxCharacters: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })));
var textEditor_20250728InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "view",
            "create",
            "str_replace",
            "insert"
        ]),
        path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        view_range: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).optional()
    })));
var factory2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.text_editor_20250728",
    inputSchema: textEditor_20250728InputSchema
});
var textEditor_20250728 = (args = {})=>{
    return factory2(args);
};
;
;
var webSearch_20260209ArgsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        maxUses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        allowedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        blockedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        userLocation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("approximate"),
            city: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            country: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            timezone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        }).optional()
    })));
var webSearch_20260209OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        pageAge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        encryptedContent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_result")
    }))));
var webSearch_20260209InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var factory3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.web_search_20260209",
    inputSchema: webSearch_20260209InputSchema,
    outputSchema: webSearch_20260209OutputSchema,
    supportsDeferredResults: true
});
var webSearch_20260209 = (args = {})=>{
    return factory3(args);
};
;
;
var webSearch_20250305ArgsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        maxUses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        allowedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        blockedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        userLocation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("approximate"),
            city: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            country: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            timezone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        }).optional()
    })));
var webSearch_20250305OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        pageAge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        encryptedContent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_search_result")
    }))));
var webSearch_20250305InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        query: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var factory4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.web_search_20250305",
    inputSchema: webSearch_20250305InputSchema,
    outputSchema: webSearch_20250305OutputSchema,
    supportsDeferredResults: true
});
var webSearch_20250305 = (args = {})=>{
    return factory4(args);
};
;
;
var webFetch_20260209ArgsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        maxUses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        allowedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        blockedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
        }).optional(),
        maxContentTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })));
var webFetch_20260209OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_result"),
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("document"),
            title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
            citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
            }).optional(),
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("base64"),
                    mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("application/pdf"),
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                    mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text/plain"),
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                })
            ])
        }),
        retrievedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
    })));
var webFetch_20260209InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var factory5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.web_fetch_20260209",
    inputSchema: webFetch_20260209InputSchema,
    outputSchema: webFetch_20260209OutputSchema,
    supportsDeferredResults: true
});
var webFetch_20260209 = (args = {})=>{
    return factory5(args);
};
;
;
var webFetch_20250910ArgsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        maxUses: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        allowedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        blockedDomains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
        citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
        }).optional(),
        maxContentTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })));
var webFetch_20250910OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("web_fetch_result"),
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("document"),
            title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
            citations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
            }).optional(),
            source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("base64"),
                    mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("application/pdf"),
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
                    mediaType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text/plain"),
                    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
                })
            ])
        }),
        retrievedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
    })));
var webFetch_20250910InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var factory6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.web_fetch_20250910",
    inputSchema: webFetch_20250910InputSchema,
    outputSchema: webFetch_20250910OutputSchema,
    supportsDeferredResults: true
});
var webFetch_20250910 = (args = {})=>{
    return factory6(args);
};
;
async function prepareTools({ tools, toolChoice, disableParallelToolUse, cacheControlValidator, supportsStructuredOutput, supportsStrictTools, defaultEagerInputStreaming = false }) {
    var _a, _b;
    tools = (tools == null ? void 0 : tools.length) ? tools : void 0;
    const toolWarnings = [];
    const betas = /* @__PURE__ */ new Set();
    const validator = cacheControlValidator || new CacheControlValidator();
    if (tools == null) {
        return {
            tools: void 0,
            toolChoice: void 0,
            toolWarnings,
            betas
        };
    }
    const anthropicTools2 = [];
    for (const tool of tools){
        switch(tool.type){
            case "function":
                {
                    const cacheControl = validator.getCacheControl(tool.providerOptions, {
                        type: "tool definition",
                        canCache: true
                    });
                    const anthropicOptions = (_a = tool.providerOptions) == null ? void 0 : _a.anthropic;
                    const eagerInputStreaming = (_b = anthropicOptions == null ? void 0 : anthropicOptions.eagerInputStreaming) != null ? _b : defaultEagerInputStreaming;
                    const deferLoading = anthropicOptions == null ? void 0 : anthropicOptions.deferLoading;
                    const allowedCallers = anthropicOptions == null ? void 0 : anthropicOptions.allowedCallers;
                    if (!supportsStrictTools && tool.strict != null) {
                        toolWarnings.push({
                            type: "unsupported",
                            feature: "strict",
                            details: `Tool '${tool.name}' has strict: ${tool.strict}, but strict mode is not supported by this provider. The strict property will be ignored.`
                        });
                    }
                    anthropicTools2.push({
                        name: tool.name,
                        description: tool.description,
                        input_schema: tool.inputSchema,
                        cache_control: cacheControl,
                        ...eagerInputStreaming ? {
                            eager_input_streaming: true
                        } : {},
                        ...supportsStrictTools === true && tool.strict != null ? {
                            strict: tool.strict
                        } : {},
                        ...deferLoading != null ? {
                            defer_loading: deferLoading
                        } : {},
                        ...allowedCallers != null ? {
                            allowed_callers: allowedCallers
                        } : {},
                        ...tool.inputExamples != null ? {
                            input_examples: tool.inputExamples.map((example)=>example.input)
                        } : {}
                    });
                    if (supportsStructuredOutput === true) {
                        betas.add("structured-outputs-2025-11-13");
                    }
                    if (tool.inputExamples != null || allowedCallers != null) {
                        betas.add("advanced-tool-use-2025-11-20");
                    }
                    break;
                }
            case "provider":
                {
                    switch(tool.id){
                        case "anthropic.code_execution_20250522":
                            {
                                betas.add("code-execution-2025-05-22");
                                anthropicTools2.push({
                                    type: "code_execution_20250522",
                                    name: "code_execution",
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.code_execution_20250825":
                            {
                                betas.add("code-execution-2025-08-25");
                                anthropicTools2.push({
                                    type: "code_execution_20250825",
                                    name: "code_execution"
                                });
                                break;
                            }
                        case "anthropic.code_execution_20260120":
                            {
                                anthropicTools2.push({
                                    type: "code_execution_20260120",
                                    name: "code_execution"
                                });
                                break;
                            }
                        case "anthropic.computer_20250124":
                            {
                                betas.add("computer-use-2025-01-24");
                                anthropicTools2.push({
                                    name: "computer",
                                    type: "computer_20250124",
                                    display_width_px: tool.args.displayWidthPx,
                                    display_height_px: tool.args.displayHeightPx,
                                    display_number: tool.args.displayNumber,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.computer_20251124":
                            {
                                betas.add("computer-use-2025-11-24");
                                anthropicTools2.push({
                                    name: "computer",
                                    type: "computer_20251124",
                                    display_width_px: tool.args.displayWidthPx,
                                    display_height_px: tool.args.displayHeightPx,
                                    display_number: tool.args.displayNumber,
                                    enable_zoom: tool.args.enableZoom,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.computer_20241022":
                            {
                                betas.add("computer-use-2024-10-22");
                                anthropicTools2.push({
                                    name: "computer",
                                    type: "computer_20241022",
                                    display_width_px: tool.args.displayWidthPx,
                                    display_height_px: tool.args.displayHeightPx,
                                    display_number: tool.args.displayNumber,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.text_editor_20250124":
                            {
                                betas.add("computer-use-2025-01-24");
                                anthropicTools2.push({
                                    name: "str_replace_editor",
                                    type: "text_editor_20250124",
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.text_editor_20241022":
                            {
                                betas.add("computer-use-2024-10-22");
                                anthropicTools2.push({
                                    name: "str_replace_editor",
                                    type: "text_editor_20241022",
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.text_editor_20250429":
                            {
                                betas.add("computer-use-2025-01-24");
                                anthropicTools2.push({
                                    name: "str_replace_based_edit_tool",
                                    type: "text_editor_20250429",
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.text_editor_20250728":
                            {
                                const args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                    value: tool.args,
                                    schema: textEditor_20250728ArgsSchema
                                });
                                anthropicTools2.push({
                                    name: "str_replace_based_edit_tool",
                                    type: "text_editor_20250728",
                                    max_characters: args.maxCharacters,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.bash_20250124":
                            {
                                betas.add("computer-use-2025-01-24");
                                anthropicTools2.push({
                                    name: "bash",
                                    type: "bash_20250124",
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.bash_20241022":
                            {
                                betas.add("computer-use-2024-10-22");
                                anthropicTools2.push({
                                    name: "bash",
                                    type: "bash_20241022",
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.memory_20250818":
                            {
                                betas.add("context-management-2025-06-27");
                                anthropicTools2.push({
                                    name: "memory",
                                    type: "memory_20250818"
                                });
                                break;
                            }
                        case "anthropic.web_fetch_20250910":
                            {
                                betas.add("web-fetch-2025-09-10");
                                const args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                    value: tool.args,
                                    schema: webFetch_20250910ArgsSchema
                                });
                                anthropicTools2.push({
                                    type: "web_fetch_20250910",
                                    name: "web_fetch",
                                    max_uses: args.maxUses,
                                    allowed_domains: args.allowedDomains,
                                    blocked_domains: args.blockedDomains,
                                    citations: args.citations,
                                    max_content_tokens: args.maxContentTokens,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.web_fetch_20260209":
                            {
                                betas.add("code-execution-web-tools-2026-02-09");
                                const args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                    value: tool.args,
                                    schema: webFetch_20260209ArgsSchema
                                });
                                anthropicTools2.push({
                                    type: "web_fetch_20260209",
                                    name: "web_fetch",
                                    max_uses: args.maxUses,
                                    allowed_domains: args.allowedDomains,
                                    blocked_domains: args.blockedDomains,
                                    citations: args.citations,
                                    max_content_tokens: args.maxContentTokens,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.web_search_20250305":
                            {
                                const args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                    value: tool.args,
                                    schema: webSearch_20250305ArgsSchema
                                });
                                anthropicTools2.push({
                                    type: "web_search_20250305",
                                    name: "web_search",
                                    max_uses: args.maxUses,
                                    allowed_domains: args.allowedDomains,
                                    blocked_domains: args.blockedDomains,
                                    user_location: args.userLocation,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.web_search_20260209":
                            {
                                betas.add("code-execution-web-tools-2026-02-09");
                                const args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                    value: tool.args,
                                    schema: webSearch_20260209ArgsSchema
                                });
                                anthropicTools2.push({
                                    type: "web_search_20260209",
                                    name: "web_search",
                                    max_uses: args.maxUses,
                                    allowed_domains: args.allowedDomains,
                                    blocked_domains: args.blockedDomains,
                                    user_location: args.userLocation,
                                    cache_control: void 0
                                });
                                break;
                            }
                        case "anthropic.tool_search_regex_20251119":
                            {
                                anthropicTools2.push({
                                    type: "tool_search_tool_regex_20251119",
                                    name: "tool_search_tool_regex"
                                });
                                break;
                            }
                        case "anthropic.tool_search_bm25_20251119":
                            {
                                anthropicTools2.push({
                                    type: "tool_search_tool_bm25_20251119",
                                    name: "tool_search_tool_bm25"
                                });
                                break;
                            }
                        case "anthropic.advisor_20260301":
                            {
                                betas.add("advisor-tool-2026-03-01");
                                const args = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                    value: tool.args,
                                    schema: advisor_20260301ArgsSchema
                                });
                                anthropicTools2.push({
                                    type: "advisor_20260301",
                                    name: "advisor",
                                    model: args.model,
                                    ...args.maxUses !== void 0 && {
                                        max_uses: args.maxUses
                                    },
                                    ...args.caching !== void 0 && {
                                        caching: args.caching
                                    }
                                });
                                break;
                            }
                        default:
                            {
                                toolWarnings.push({
                                    type: "unsupported",
                                    feature: `provider-defined tool ${tool.id}`
                                });
                                break;
                            }
                    }
                    break;
                }
            default:
                {
                    toolWarnings.push({
                        type: "unsupported",
                        feature: `tool ${tool}`
                    });
                    break;
                }
        }
    }
    if (toolChoice == null) {
        return {
            tools: anthropicTools2,
            toolChoice: disableParallelToolUse ? {
                type: "auto",
                disable_parallel_tool_use: disableParallelToolUse
            } : void 0,
            toolWarnings,
            betas
        };
    }
    const type = toolChoice.type;
    switch(type){
        case "auto":
            return {
                tools: anthropicTools2,
                toolChoice: {
                    type: "auto",
                    disable_parallel_tool_use: disableParallelToolUse
                },
                toolWarnings,
                betas
            };
        case "required":
            return {
                tools: anthropicTools2,
                toolChoice: {
                    type: "any",
                    disable_parallel_tool_use: disableParallelToolUse
                },
                toolWarnings,
                betas
            };
        case "none":
            return {
                tools: void 0,
                toolChoice: void 0,
                toolWarnings,
                betas
            };
        case "tool":
            return {
                tools: anthropicTools2,
                toolChoice: {
                    type: "tool",
                    name: toolChoice.toolName,
                    disable_parallel_tool_use: disableParallelToolUse
                },
                toolWarnings,
                betas
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
// src/convert-anthropic-usage.ts
function convertAnthropicUsage({ usage, rawUsage }) {
    var _a, _b, _c;
    const cacheCreationTokens = (_a = usage.cache_creation_input_tokens) != null ? _a : 0;
    const cacheReadTokens = (_b = usage.cache_read_input_tokens) != null ? _b : 0;
    let inputTokens;
    let outputTokens;
    const servedByFallback = (_c = usage.iterations) == null ? void 0 : _c.some((iter)=>iter.type === "fallback_message");
    if (usage.iterations && usage.iterations.length > 0 && !servedByFallback) {
        const executorIterations = usage.iterations.filter((iter)=>iter.type === "compaction" || iter.type === "message");
        if (executorIterations.length > 0) {
            const totals = executorIterations.reduce((acc, iter)=>({
                    input: acc.input + iter.input_tokens,
                    output: acc.output + iter.output_tokens
                }), {
                input: 0,
                output: 0
            });
            inputTokens = totals.input;
            outputTokens = totals.output;
        } else {
            inputTokens = usage.input_tokens;
            outputTokens = usage.output_tokens;
        }
    } else {
        inputTokens = usage.input_tokens;
        outputTokens = usage.output_tokens;
    }
    return {
        inputTokens: {
            total: inputTokens + cacheCreationTokens + cacheReadTokens,
            noCache: inputTokens,
            cacheRead: cacheReadTokens,
            cacheWrite: cacheCreationTokens
        },
        outputTokens: {
            total: outputTokens,
            text: void 0,
            reasoning: void 0
        },
        raw: rawUsage != null ? rawUsage : usage
    };
}
;
;
;
;
var codeExecution_20250522OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_result"),
        stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
            file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })).optional().default([])
    })));
var codeExecution_20250522InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var factory7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.code_execution_20250522",
    inputSchema: codeExecution_20250522InputSchema,
    outputSchema: codeExecution_20250522OutputSchema
});
var codeExecution_20250522 = (args = {})=>{
    return factory7(args);
};
;
;
var codeExecution_20250825OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_result"),
            stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })).optional().default([])
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_result"),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_output"),
                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })),
            stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_tool_result_error"),
            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_tool_result_error"),
            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_view_result"),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            file_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            num_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            start_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            total_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_create_result"),
            is_file_update: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_str_replace_result"),
            lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable(),
            new_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            new_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            old_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            old_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
        })
    ])));
var codeExecution_20250825InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        // Programmatic tool calling format (mapped from { code } by AI SDK)
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("programmatic-tool-call"),
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution"),
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("command", [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution"),
                command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("view"),
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution"),
                command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("create"),
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution"),
                command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("str_replace"),
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })
        ])
    ])));
var factory8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.code_execution_20250825",
    inputSchema: codeExecution_20250825InputSchema,
    outputSchema: codeExecution_20250825OutputSchema,
    // Programmatic tool calling: tool results may be deferred to a later turn
    // when code execution triggers a client-executed tool that needs to be
    // resolved before the code execution result can be returned.
    supportsDeferredResults: true
});
var codeExecution_20250825 = (args = {})=>{
    return factory8(args);
};
;
;
var codeExecution_20260120OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_result"),
            stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })).optional().default([])
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("encrypted_code_execution_result"),
            encrypted_stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("code_execution_output"),
                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })).optional().default([])
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_result"),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_output"),
                file_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })),
            stdout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            stderr: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            return_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution_tool_result_error"),
            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_tool_result_error"),
            error_code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_view_result"),
            content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            file_type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            num_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            start_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            total_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_create_result"),
            is_file_update: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution_str_replace_result"),
            lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable(),
            new_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            new_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            old_lines: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            old_start: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable()
        })
    ])));
var codeExecution_20260120InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("programmatic-tool-call"),
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("bash_code_execution"),
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("command", [
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution"),
                command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("view"),
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution"),
                command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("create"),
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text_editor_code_execution"),
                command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("str_replace"),
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
            })
        ])
    ])));
var factory9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.code_execution_20260120",
    inputSchema: codeExecution_20260120InputSchema,
    outputSchema: codeExecution_20260120OutputSchema,
    supportsDeferredResults: true
});
var codeExecution_20260120 = (args = {})=>{
    return factory9(args);
};
;
;
var toolSearchRegex_20251119OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_reference"),
        toolName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }))));
var toolSearchRegex_20251119InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        /**
       * A regex pattern to search for tools.
       * Uses Python re.search() syntax. Maximum 200 characters.
       *
       * Examples:
       * - "weather" - matches tool names/descriptions containing "weather"
       * - "get_.*_data" - matches tools like get_user_data, get_weather_data
       * - "database.*query|query.*database" - OR patterns for flexibility
       * - "(?i)slack" - case-insensitive search
       */ pattern: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        /**
       * Maximum number of tools to return. Optional.
       */ limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })));
var factory10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.tool_search_regex_20251119",
    inputSchema: toolSearchRegex_20251119InputSchema,
    outputSchema: toolSearchRegex_20251119OutputSchema,
    supportsDeferredResults: true
});
var toolSearchRegex_20251119 = (args = {})=>{
    return factory10(args);
};
// src/convert-to-anthropic-prompt.ts
function convertBytesDataToString(data) {
    if (typeof data === "string") {
        return new TextDecoder().decode((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertBase64ToUint8Array"])(data));
    }
    return new TextDecoder().decode(data);
}
function extractErrorValue(value) {
    try {
        if (typeof value === "string") {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["secureJsonParse"])(value);
        } else if (typeof value === "object" && value !== null) {
            return value;
        }
    } catch (e) {
        const extractedErrorCode = value == null ? void 0 : value.errorCode;
        return {
            errorCode: typeof extractedErrorCode === "string" ? extractedErrorCode : "unavailable"
        };
    }
    return {};
}
async function convertToAnthropicPrompt({ prompt, sendReasoning, warnings, cacheControlValidator, toolNameMapping }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    const betas = /* @__PURE__ */ new Set();
    const blocks = groupIntoBlocks(prompt);
    const validator = cacheControlValidator || new CacheControlValidator();
    let system = void 0;
    const messages = [];
    async function shouldEnableCitations(providerMetadata) {
        var _a2, _b2;
        const anthropicOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "anthropic",
            providerOptions: providerMetadata,
            schema: anthropicFilePartProviderOptions
        });
        return (_b2 = (_a2 = anthropicOptions == null ? void 0 : anthropicOptions.citations) == null ? void 0 : _a2.enabled) != null ? _b2 : false;
    }
    async function shouldUseContainerUpload(providerMetadata) {
        var _a2;
        const anthropicOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "anthropic",
            providerOptions: providerMetadata,
            schema: anthropicFilePartProviderOptions
        });
        return (_a2 = anthropicOptions == null ? void 0 : anthropicOptions.containerUpload) != null ? _a2 : false;
    }
    async function getDocumentMetadata(providerMetadata) {
        const anthropicOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "anthropic",
            providerOptions: providerMetadata,
            schema: anthropicFilePartProviderOptions
        });
        return {
            title: anthropicOptions == null ? void 0 : anthropicOptions.title,
            context: anthropicOptions == null ? void 0 : anthropicOptions.context
        };
    }
    for(let i = 0; i < blocks.length; i++){
        const block = blocks[i];
        const isLastBlock = i === blocks.length - 1;
        const type = block.type;
        switch(type){
            case "system":
                {
                    const content = block.messages.map(({ content: content2, providerOptions })=>({
                            type: "text",
                            text: content2,
                            cache_control: validator.getCacheControl(providerOptions, {
                                type: "system message",
                                canCache: true
                            })
                        }));
                    if (system == null) {
                        system = content;
                    } else {
                        messages.push({
                            role: "system",
                            content
                        });
                        betas.add("mid-conversation-system-2026-04-07");
                    }
                    break;
                }
            case "user":
                {
                    const anthropicContent = [];
                    for (const message of block.messages){
                        const { role, content } = message;
                        switch(role){
                            case "user":
                                {
                                    for(let j = 0; j < content.length; j++){
                                        const part = content[j];
                                        const isLastPart = j === content.length - 1;
                                        const cacheControl = (_a = validator.getCacheControl(part.providerOptions, {
                                            type: "user message part",
                                            canCache: true
                                        })) != null ? _a : isLastPart ? validator.getCacheControl(message.providerOptions, {
                                            type: "user message",
                                            canCache: true
                                        }) : void 0;
                                        switch(part.type){
                                            case "text":
                                                {
                                                    anthropicContent.push({
                                                        type: "text",
                                                        text: part.text,
                                                        cache_control: cacheControl
                                                    });
                                                    break;
                                                }
                                            case "file":
                                                {
                                                    switch(part.data.type){
                                                        case "reference":
                                                            {
                                                                const fileId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveProviderReference"])({
                                                                    reference: part.data.reference,
                                                                    provider: "anthropic"
                                                                });
                                                                betas.add("files-api-2025-04-14");
                                                                if (await shouldUseContainerUpload(part.providerOptions)) {
                                                                    anthropicContent.push({
                                                                        type: "container_upload",
                                                                        file_id: fileId
                                                                    });
                                                                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTopLevelMediaType"])(part.mediaType) === "image") {
                                                                    anthropicContent.push({
                                                                        type: "image",
                                                                        source: {
                                                                            type: "file",
                                                                            file_id: fileId
                                                                        },
                                                                        cache_control: cacheControl
                                                                    });
                                                                } else {
                                                                    anthropicContent.push({
                                                                        type: "document",
                                                                        source: {
                                                                            type: "file",
                                                                            file_id: fileId
                                                                        },
                                                                        cache_control: cacheControl
                                                                    });
                                                                }
                                                                break;
                                                            }
                                                        case "text":
                                                            {
                                                                const enableCitations = await shouldEnableCitations(part.providerOptions);
                                                                const metadata = await getDocumentMetadata(part.providerOptions);
                                                                anthropicContent.push({
                                                                    type: "document",
                                                                    source: {
                                                                        type: "text",
                                                                        media_type: "text/plain",
                                                                        data: part.data.text
                                                                    },
                                                                    title: (_b = metadata.title) != null ? _b : part.filename,
                                                                    ...metadata.context && {
                                                                        context: metadata.context
                                                                    },
                                                                    ...enableCitations && {
                                                                        citations: {
                                                                            enabled: true
                                                                        }
                                                                    },
                                                                    cache_control: cacheControl
                                                                });
                                                                break;
                                                            }
                                                        case "url":
                                                        case "data":
                                                            {
                                                                const topLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTopLevelMediaType"])(part.mediaType);
                                                                if (topLevel === "image") {
                                                                    anthropicContent.push({
                                                                        type: "image",
                                                                        source: part.data.type === "url" ? {
                                                                            type: "url",
                                                                            url: part.data.url.toString()
                                                                        } : {
                                                                            type: "base64",
                                                                            media_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                                part
                                                                            }),
                                                                            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data)
                                                                        },
                                                                        cache_control: cacheControl
                                                                    });
                                                                } else if (topLevel === "application" && (part.data.type === "url" ? part.mediaType === "application/pdf" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                    part
                                                                }) === "application/pdf")) {
                                                                    betas.add("pdfs-2024-09-25");
                                                                    const enableCitations = await shouldEnableCitations(part.providerOptions);
                                                                    const metadata = await getDocumentMetadata(part.providerOptions);
                                                                    anthropicContent.push({
                                                                        type: "document",
                                                                        source: part.data.type === "url" ? {
                                                                            type: "url",
                                                                            url: part.data.url.toString()
                                                                        } : {
                                                                            type: "base64",
                                                                            media_type: "application/pdf",
                                                                            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(part.data.data)
                                                                        },
                                                                        title: (_c = metadata.title) != null ? _c : part.filename,
                                                                        ...metadata.context && {
                                                                            context: metadata.context
                                                                        },
                                                                        ...enableCitations && {
                                                                            citations: {
                                                                                enabled: true
                                                                            }
                                                                        },
                                                                        cache_control: cacheControl
                                                                    });
                                                                } else if (part.mediaType === "text/plain") {
                                                                    const enableCitations = await shouldEnableCitations(part.providerOptions);
                                                                    const metadata = await getDocumentMetadata(part.providerOptions);
                                                                    anthropicContent.push({
                                                                        type: "document",
                                                                        source: part.data.type === "url" ? {
                                                                            type: "url",
                                                                            url: part.data.url.toString()
                                                                        } : {
                                                                            type: "text",
                                                                            media_type: "text/plain",
                                                                            data: convertBytesDataToString(part.data.data)
                                                                        },
                                                                        title: (_d = metadata.title) != null ? _d : part.filename,
                                                                        ...metadata.context && {
                                                                            context: metadata.context
                                                                        },
                                                                        ...enableCitations && {
                                                                            citations: {
                                                                                enabled: true
                                                                            }
                                                                        },
                                                                        cache_control: cacheControl
                                                                    });
                                                                } else {
                                                                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnsupportedFunctionalityError"]({
                                                                        functionality: `media type: ${part.mediaType}`
                                                                    });
                                                                }
                                                                break;
                                                            }
                                                    }
                                                    break;
                                                }
                                        }
                                    }
                                    break;
                                }
                            case "tool":
                                {
                                    for(let i2 = 0; i2 < content.length; i2++){
                                        const part = content[i2];
                                        if (part.type === "tool-approval-response") {
                                            continue;
                                        }
                                        const output = part.output;
                                        const outputProviderOptions = "providerOptions" in output ? output.providerOptions : output.type === "content" ? (_e = output.value.find((contentPart)=>contentPart.providerOptions != null)) == null ? void 0 : _e.providerOptions : void 0;
                                        const isLastPart = i2 === content.length - 1;
                                        const cacheControl = (_g = (_f = validator.getCacheControl(part.providerOptions, {
                                            type: "tool result part",
                                            canCache: true
                                        })) != null ? _f : validator.getCacheControl(outputProviderOptions, {
                                            type: "tool result output",
                                            canCache: true
                                        })) != null ? _g : isLastPart ? validator.getCacheControl(message.providerOptions, {
                                            type: "tool result message",
                                            canCache: true
                                        }) : void 0;
                                        let contentValue;
                                        switch(output.type){
                                            case "content":
                                                contentValue = output.value.map((contentPart)=>{
                                                    var _a2;
                                                    switch(contentPart.type){
                                                        case "text":
                                                            return {
                                                                type: "text",
                                                                text: contentPart.text
                                                            };
                                                        case "file":
                                                            {
                                                                const topLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTopLevelMediaType"])(contentPart.mediaType);
                                                                if (contentPart.data.type === "url") {
                                                                    if (topLevel === "image") {
                                                                        return {
                                                                            type: "image",
                                                                            source: {
                                                                                type: "url",
                                                                                url: contentPart.data.url.toString()
                                                                            }
                                                                        };
                                                                    }
                                                                    return {
                                                                        type: "document",
                                                                        source: {
                                                                            type: "url",
                                                                            url: contentPart.data.url.toString()
                                                                        }
                                                                    };
                                                                }
                                                                if (contentPart.data.type === "data") {
                                                                    if (topLevel === "image") {
                                                                        return {
                                                                            type: "image",
                                                                            source: {
                                                                                type: "base64",
                                                                                media_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                                    part: contentPart
                                                                                }),
                                                                                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(contentPart.data.data)
                                                                            }
                                                                        };
                                                                    }
                                                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveFullMediaType"])({
                                                                        part: contentPart
                                                                    }) === "application/pdf") {
                                                                        betas.add("pdfs-2024-09-25");
                                                                        return {
                                                                            type: "document",
                                                                            source: {
                                                                                type: "base64",
                                                                                media_type: "application/pdf",
                                                                                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToBase64"])(contentPart.data.data)
                                                                            }
                                                                        };
                                                                    }
                                                                    warnings.push({
                                                                        type: "other",
                                                                        message: `unsupported tool content part type: ${contentPart.type} with media type: ${contentPart.mediaType}`
                                                                    });
                                                                    return void 0;
                                                                }
                                                                warnings.push({
                                                                    type: "other",
                                                                    message: `unsupported tool content part type: ${contentPart.type} with data type: ${contentPart.data.type}`
                                                                });
                                                                return void 0;
                                                            }
                                                        case "custom":
                                                            {
                                                                const anthropicOptions = (_a2 = contentPart.providerOptions) == null ? void 0 : _a2.anthropic;
                                                                if ((anthropicOptions == null ? void 0 : anthropicOptions.type) === "tool-reference") {
                                                                    return {
                                                                        type: "tool_reference",
                                                                        tool_name: anthropicOptions.toolName
                                                                    };
                                                                }
                                                                warnings.push({
                                                                    type: "other",
                                                                    message: `unsupported custom tool content part`
                                                                });
                                                                return void 0;
                                                            }
                                                        default:
                                                            {
                                                                warnings.push({
                                                                    type: "other",
                                                                    message: `unsupported tool content part type: ${contentPart.type}`
                                                                });
                                                                return void 0;
                                                            }
                                                    }
                                                }).filter(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isNonNullable"]);
                                                break;
                                            case "text":
                                            case "error-text":
                                                contentValue = output.value;
                                                break;
                                            case "execution-denied":
                                                contentValue = (_h = output.reason) != null ? _h : "Tool call execution denied.";
                                                break;
                                            case "json":
                                            case "error-json":
                                            default:
                                                contentValue = JSON.stringify(output.value);
                                                break;
                                        }
                                        anthropicContent.push({
                                            type: "tool_result",
                                            tool_use_id: part.toolCallId,
                                            content: contentValue,
                                            is_error: output.type === "error-text" || output.type === "error-json" ? true : void 0,
                                            cache_control: cacheControl
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
                    messages.push({
                        role: "user",
                        content: anthropicContent
                    });
                    break;
                }
            case "assistant":
                {
                    const anthropicContent = [];
                    const mcpToolUseIds = /* @__PURE__ */ new Set();
                    for(let j = 0; j < block.messages.length; j++){
                        const message = block.messages[j];
                        const isLastMessage = j === block.messages.length - 1;
                        const { content } = message;
                        for(let k = 0; k < content.length; k++){
                            const part = content[k];
                            const isLastContentPart = k === content.length - 1;
                            const cacheControl = (_i = validator.getCacheControl(part.providerOptions, {
                                type: "assistant message part",
                                canCache: true
                            })) != null ? _i : isLastContentPart ? validator.getCacheControl(message.providerOptions, {
                                type: "assistant message",
                                canCache: true
                            }) : void 0;
                            switch(part.type){
                                case "text":
                                    {
                                        const textMetadata = (_j = part.providerOptions) == null ? void 0 : _j.anthropic;
                                        if ((textMetadata == null ? void 0 : textMetadata.type) === "compaction") {
                                            anthropicContent.push({
                                                type: "compaction",
                                                content: part.text,
                                                cache_control: cacheControl
                                            });
                                        } else {
                                            anthropicContent.push({
                                                type: "text",
                                                text: // trim the last text part if it's the last message in the block
                                                // because Anthropic does not allow trailing whitespace
                                                // in pre-filled assistant responses
                                                isLastBlock && isLastMessage && isLastContentPart ? part.text.trim() : part.text,
                                                cache_control: cacheControl
                                            });
                                        }
                                        break;
                                    }
                                case "reasoning":
                                    {
                                        if (sendReasoning) {
                                            const reasoningMetadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
                                                provider: "anthropic",
                                                providerOptions: part.providerOptions,
                                                schema: anthropicReasoningMetadataSchema
                                            });
                                            if (reasoningMetadata != null) {
                                                if (reasoningMetadata.signature != null) {
                                                    validator.getCacheControl(part.providerOptions, {
                                                        type: "thinking block",
                                                        canCache: false
                                                    });
                                                    anthropicContent.push({
                                                        type: "thinking",
                                                        thinking: part.text,
                                                        signature: reasoningMetadata.signature
                                                    });
                                                } else if (reasoningMetadata.redactedData != null) {
                                                    validator.getCacheControl(part.providerOptions, {
                                                        type: "redacted thinking block",
                                                        canCache: false
                                                    });
                                                    anthropicContent.push({
                                                        type: "redacted_thinking",
                                                        data: reasoningMetadata.redactedData
                                                    });
                                                } else {
                                                    warnings.push({
                                                        type: "other",
                                                        message: "unsupported reasoning metadata"
                                                    });
                                                }
                                            } else {
                                                warnings.push({
                                                    type: "other",
                                                    message: "unsupported reasoning metadata"
                                                });
                                            }
                                        } else {
                                            warnings.push({
                                                type: "other",
                                                message: "sending reasoning content is disabled for this model"
                                            });
                                        }
                                        break;
                                    }
                                case "tool-call":
                                    {
                                        if (part.providerExecuted) {
                                            const providerToolName = toolNameMapping.toProviderToolName(part.toolName);
                                            const isMcpToolUse = ((_l = (_k = part.providerOptions) == null ? void 0 : _k.anthropic) == null ? void 0 : _l.type) === "mcp-tool-use";
                                            if (isMcpToolUse) {
                                                mcpToolUseIds.add(part.toolCallId);
                                                const serverName = (_n = (_m = part.providerOptions) == null ? void 0 : _m.anthropic) == null ? void 0 : _n.serverName;
                                                if (serverName == null || typeof serverName !== "string") {
                                                    warnings.push({
                                                        type: "other",
                                                        message: "mcp tool use server name is required and must be a string"
                                                    });
                                                    break;
                                                }
                                                anthropicContent.push({
                                                    type: "mcp_tool_use",
                                                    id: part.toolCallId,
                                                    name: part.toolName,
                                                    input: part.input,
                                                    server_name: serverName,
                                                    cache_control: cacheControl
                                                });
                                            } else if (// code execution 20250825:
                                            providerToolName === "code_execution" && part.input != null && typeof part.input === "object" && "type" in part.input && typeof part.input.type === "string" && (part.input.type === "bash_code_execution" || part.input.type === "text_editor_code_execution")) {
                                                anthropicContent.push({
                                                    type: "server_tool_use",
                                                    id: part.toolCallId,
                                                    name: part.input.type,
                                                    // map back to subtool name
                                                    input: part.input,
                                                    cache_control: cacheControl
                                                });
                                            } else if (// code execution 20250825 programmatic tool calling:
                                            // Strip the fake 'programmatic-tool-call' type before sending to Anthropic
                                            providerToolName === "code_execution" && part.input != null && typeof part.input === "object" && "type" in part.input && part.input.type === "programmatic-tool-call") {
                                                const { type: _, ...inputWithoutType } = part.input;
                                                anthropicContent.push({
                                                    type: "server_tool_use",
                                                    id: part.toolCallId,
                                                    name: "code_execution",
                                                    input: inputWithoutType,
                                                    cache_control: cacheControl
                                                });
                                            } else {
                                                if (providerToolName === "code_execution" || // code execution 20250522
                                                providerToolName === "web_fetch" || providerToolName === "web_search") {
                                                    anthropicContent.push({
                                                        type: "server_tool_use",
                                                        id: part.toolCallId,
                                                        name: providerToolName,
                                                        input: part.input,
                                                        cache_control: cacheControl
                                                    });
                                                } else if (providerToolName === "tool_search_tool_regex" || providerToolName === "tool_search_tool_bm25") {
                                                    anthropicContent.push({
                                                        type: "server_tool_use",
                                                        id: part.toolCallId,
                                                        name: providerToolName,
                                                        input: part.input,
                                                        cache_control: cacheControl
                                                    });
                                                } else if (providerToolName === "advisor") {
                                                    anthropicContent.push({
                                                        type: "server_tool_use",
                                                        id: part.toolCallId,
                                                        name: "advisor",
                                                        input: {},
                                                        cache_control: cacheControl
                                                    });
                                                } else {
                                                    warnings.push({
                                                        type: "other",
                                                        message: `provider executed tool call for tool ${part.toolName} is not supported`
                                                    });
                                                }
                                            }
                                            break;
                                        }
                                        const callerOptions = (_o = part.providerOptions) == null ? void 0 : _o.anthropic;
                                        const caller = (callerOptions == null ? void 0 : callerOptions.caller) ? (callerOptions.caller.type === "code_execution_20250825" || callerOptions.caller.type === "code_execution_20260120") && callerOptions.caller.toolId ? {
                                            type: callerOptions.caller.type,
                                            tool_id: callerOptions.caller.toolId
                                        } : callerOptions.caller.type === "direct" ? {
                                            type: "direct"
                                        } : void 0 : void 0;
                                        anthropicContent.push({
                                            type: "tool_use",
                                            id: part.toolCallId,
                                            name: part.toolName,
                                            input: toAnthropicToolInput(part.input),
                                            ...caller && {
                                                caller
                                            },
                                            cache_control: cacheControl
                                        });
                                        break;
                                    }
                                case "tool-result":
                                    {
                                        const providerToolName = toolNameMapping.toProviderToolName(part.toolName);
                                        if (mcpToolUseIds.has(part.toolCallId)) {
                                            const output = part.output;
                                            if (output.type !== "json" && output.type !== "error-json") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output type ${output.type} for tool ${part.toolName} is not supported`
                                                });
                                                break;
                                            }
                                            anthropicContent.push({
                                                type: "mcp_tool_result",
                                                tool_use_id: part.toolCallId,
                                                is_error: output.type === "error-json",
                                                content: output.value,
                                                cache_control: cacheControl
                                            });
                                        } else if (providerToolName === "code_execution") {
                                            const output = part.output;
                                            if (output.type === "error-text" || output.type === "error-json") {
                                                let errorInfo = {};
                                                try {
                                                    if (typeof output.value === "string") {
                                                        errorInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["secureJsonParse"])(output.value);
                                                    } else if (typeof output.value === "object" && output.value !== null) {
                                                        errorInfo = output.value;
                                                    }
                                                } catch (e) {}
                                                if (errorInfo.type === "code_execution_tool_result_error") {
                                                    anthropicContent.push({
                                                        type: "code_execution_tool_result",
                                                        tool_use_id: part.toolCallId,
                                                        content: {
                                                            type: "code_execution_tool_result_error",
                                                            error_code: (_p = errorInfo.errorCode) != null ? _p : "unknown"
                                                        },
                                                        cache_control: cacheControl
                                                    });
                                                } else {
                                                    anthropicContent.push({
                                                        type: "bash_code_execution_tool_result",
                                                        tool_use_id: part.toolCallId,
                                                        cache_control: cacheControl,
                                                        content: {
                                                            type: "bash_code_execution_tool_result_error",
                                                            error_code: (_q = errorInfo.errorCode) != null ? _q : "unknown"
                                                        }
                                                    });
                                                }
                                                break;
                                            }
                                            if (output.type !== "json") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output type ${output.type} for tool ${part.toolName} is not supported`
                                                });
                                                break;
                                            }
                                            if (output.value == null || typeof output.value !== "object" || !("type" in output.value) || typeof output.value.type !== "string") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output value is not a valid code execution result for tool ${part.toolName}`
                                                });
                                                break;
                                            }
                                            if (output.value.type === "code_execution_result") {
                                                const codeExecutionOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                    value: output.value,
                                                    schema: codeExecution_20250522OutputSchema
                                                });
                                                anthropicContent.push({
                                                    type: "code_execution_tool_result",
                                                    tool_use_id: part.toolCallId,
                                                    content: {
                                                        type: codeExecutionOutput.type,
                                                        stdout: codeExecutionOutput.stdout,
                                                        stderr: codeExecutionOutput.stderr,
                                                        return_code: codeExecutionOutput.return_code,
                                                        content: (_r = codeExecutionOutput.content) != null ? _r : []
                                                    },
                                                    cache_control: cacheControl
                                                });
                                            } else if (output.value.type === "encrypted_code_execution_result") {
                                                const codeExecutionOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                    value: output.value,
                                                    schema: codeExecution_20260120OutputSchema
                                                });
                                                if (codeExecutionOutput.type === "encrypted_code_execution_result") {
                                                    anthropicContent.push({
                                                        type: "code_execution_tool_result",
                                                        tool_use_id: part.toolCallId,
                                                        content: {
                                                            type: codeExecutionOutput.type,
                                                            encrypted_stdout: codeExecutionOutput.encrypted_stdout,
                                                            stderr: codeExecutionOutput.stderr,
                                                            return_code: codeExecutionOutput.return_code,
                                                            content: (_s = codeExecutionOutput.content) != null ? _s : []
                                                        },
                                                        cache_control: cacheControl
                                                    });
                                                }
                                            } else {
                                                const codeExecutionOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                    value: output.value,
                                                    schema: codeExecution_20250825OutputSchema
                                                });
                                                if (codeExecutionOutput.type === "code_execution_result") {
                                                    anthropicContent.push({
                                                        type: "code_execution_tool_result",
                                                        tool_use_id: part.toolCallId,
                                                        content: {
                                                            type: codeExecutionOutput.type,
                                                            stdout: codeExecutionOutput.stdout,
                                                            stderr: codeExecutionOutput.stderr,
                                                            return_code: codeExecutionOutput.return_code,
                                                            content: (_t = codeExecutionOutput.content) != null ? _t : []
                                                        },
                                                        cache_control: cacheControl
                                                    });
                                                } else if (codeExecutionOutput.type === "bash_code_execution_result" || codeExecutionOutput.type === "bash_code_execution_tool_result_error") {
                                                    anthropicContent.push({
                                                        type: "bash_code_execution_tool_result",
                                                        tool_use_id: part.toolCallId,
                                                        cache_control: cacheControl,
                                                        content: codeExecutionOutput
                                                    });
                                                } else {
                                                    anthropicContent.push({
                                                        type: "text_editor_code_execution_tool_result",
                                                        tool_use_id: part.toolCallId,
                                                        cache_control: cacheControl,
                                                        content: codeExecutionOutput
                                                    });
                                                }
                                            }
                                            break;
                                        }
                                        if (providerToolName === "web_fetch") {
                                            const output = part.output;
                                            if (output.type === "error-json") {
                                                anthropicContent.push({
                                                    type: "web_fetch_tool_result",
                                                    tool_use_id: part.toolCallId,
                                                    content: {
                                                        type: "web_fetch_tool_result_error",
                                                        error_code: (_u = extractErrorValue(output.value).errorCode) != null ? _u : "unavailable"
                                                    },
                                                    cache_control: cacheControl
                                                });
                                                break;
                                            }
                                            if (output.type !== "json") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output type ${output.type} for tool ${part.toolName} is not supported`
                                                });
                                                break;
                                            }
                                            const webFetchOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                value: output.value,
                                                schema: webFetch_20250910OutputSchema
                                            });
                                            anthropicContent.push({
                                                type: "web_fetch_tool_result",
                                                tool_use_id: part.toolCallId,
                                                content: {
                                                    type: "web_fetch_result",
                                                    url: webFetchOutput.url,
                                                    retrieved_at: webFetchOutput.retrievedAt,
                                                    content: {
                                                        type: "document",
                                                        title: webFetchOutput.content.title,
                                                        citations: webFetchOutput.content.citations,
                                                        source: {
                                                            type: webFetchOutput.content.source.type,
                                                            media_type: webFetchOutput.content.source.mediaType,
                                                            data: webFetchOutput.content.source.data
                                                        }
                                                    }
                                                },
                                                cache_control: cacheControl
                                            });
                                            break;
                                        }
                                        if (providerToolName === "web_search") {
                                            const output = part.output;
                                            if (output.type === "error-json") {
                                                anthropicContent.push({
                                                    type: "web_search_tool_result",
                                                    tool_use_id: part.toolCallId,
                                                    content: {
                                                        type: "web_search_tool_result_error",
                                                        error_code: (_v = extractErrorValue(output.value).errorCode) != null ? _v : "unavailable"
                                                    },
                                                    cache_control: cacheControl
                                                });
                                                break;
                                            }
                                            if (output.type !== "json") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output type ${output.type} for tool ${part.toolName} is not supported`
                                                });
                                                break;
                                            }
                                            const webSearchOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                value: output.value,
                                                schema: webSearch_20250305OutputSchema
                                            });
                                            anthropicContent.push({
                                                type: "web_search_tool_result",
                                                tool_use_id: part.toolCallId,
                                                content: webSearchOutput.map((result)=>({
                                                        url: result.url,
                                                        title: result.title,
                                                        page_age: result.pageAge,
                                                        encrypted_content: result.encryptedContent,
                                                        type: result.type
                                                    })),
                                                cache_control: cacheControl
                                            });
                                            break;
                                        }
                                        if (providerToolName === "tool_search_tool_regex" || providerToolName === "tool_search_tool_bm25") {
                                            const output = part.output;
                                            if (output.type !== "json") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output type ${output.type} for tool ${part.toolName} is not supported`
                                                });
                                                break;
                                            }
                                            const toolSearchOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                value: output.value,
                                                schema: toolSearchRegex_20251119OutputSchema
                                            });
                                            const toolReferences = toolSearchOutput.map((ref)=>({
                                                    type: "tool_reference",
                                                    tool_name: ref.toolName
                                                }));
                                            anthropicContent.push({
                                                type: "tool_search_tool_result",
                                                tool_use_id: part.toolCallId,
                                                content: {
                                                    type: "tool_search_tool_search_result",
                                                    tool_references: toolReferences
                                                },
                                                cache_control: cacheControl
                                            });
                                            break;
                                        }
                                        if (providerToolName === "advisor") {
                                            const output = part.output;
                                            if (output.type !== "json" && output.type !== "error-json") {
                                                warnings.push({
                                                    type: "other",
                                                    message: `provider executed tool result output type ${output.type} for tool ${part.toolName} is not supported`
                                                });
                                                break;
                                            }
                                            const advisorOutput = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateTypes"])({
                                                value: output.value,
                                                schema: advisor_20260301OutputSchema
                                            });
                                            if (advisorOutput.type === "advisor_result") {
                                                anthropicContent.push({
                                                    type: "advisor_tool_result",
                                                    tool_use_id: part.toolCallId,
                                                    content: {
                                                        type: "advisor_result",
                                                        text: advisorOutput.text
                                                    },
                                                    cache_control: cacheControl
                                                });
                                            } else if (advisorOutput.type === "advisor_redacted_result") {
                                                anthropicContent.push({
                                                    type: "advisor_tool_result",
                                                    tool_use_id: part.toolCallId,
                                                    content: {
                                                        type: "advisor_redacted_result",
                                                        encrypted_content: advisorOutput.encryptedContent
                                                    },
                                                    cache_control: cacheControl
                                                });
                                            } else {
                                                anthropicContent.push({
                                                    type: "advisor_tool_result",
                                                    tool_use_id: part.toolCallId,
                                                    content: {
                                                        type: "advisor_tool_result_error",
                                                        error_code: advisorOutput.errorCode
                                                    },
                                                    cache_control: cacheControl
                                                });
                                            }
                                            break;
                                        }
                                        warnings.push({
                                            type: "other",
                                            message: `provider executed tool result for tool ${part.toolName} is not supported`
                                        });
                                        break;
                                    }
                            }
                        }
                    }
                    messages.push({
                        role: "assistant",
                        content: moveToolUseBlocksToEnd(anthropicContent)
                    });
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = type;
                    throw new Error(`content type: ${_exhaustiveCheck}`);
                }
        }
    }
    return {
        prompt: {
            system,
            messages
        },
        betas
    };
}
function groupIntoBlocks(prompt) {
    const blocks = [];
    let currentBlock = void 0;
    for (const message of prompt){
        const { role } = message;
        switch(role){
            case "system":
                {
                    if ((currentBlock == null ? void 0 : currentBlock.type) !== "system") {
                        currentBlock = {
                            type: "system",
                            messages: []
                        };
                        blocks.push(currentBlock);
                    }
                    currentBlock.messages.push(message);
                    break;
                }
            case "assistant":
                {
                    if ((currentBlock == null ? void 0 : currentBlock.type) !== "assistant") {
                        currentBlock = {
                            type: "assistant",
                            messages: []
                        };
                        blocks.push(currentBlock);
                    }
                    currentBlock.messages.push(message);
                    break;
                }
            case "user":
                {
                    if ((currentBlock == null ? void 0 : currentBlock.type) !== "user") {
                        currentBlock = {
                            type: "user",
                            messages: []
                        };
                        blocks.push(currentBlock);
                    }
                    currentBlock.messages.push(message);
                    break;
                }
            case "tool":
                {
                    if ((currentBlock == null ? void 0 : currentBlock.type) !== "user") {
                        currentBlock = {
                            type: "user",
                            messages: []
                        };
                        blocks.push(currentBlock);
                    }
                    currentBlock.messages.push(message);
                    break;
                }
            default:
                {
                    const _exhaustiveCheck = role;
                    throw new Error(`Unsupported role: ${_exhaustiveCheck}`);
                }
        }
    }
    return blocks;
}
function moveToolUseBlocksToEnd(content) {
    const result = [];
    let segment = [];
    function flushSegment() {
        result.push(...segment.filter((part)=>part.type !== "tool_use"), ...segment.filter((part)=>part.type === "tool_use"));
        segment = [];
    }
    for (const part of content){
        if (part.type === "thinking" || part.type === "redacted_thinking") {
            flushSegment();
            result.push(part);
        } else {
            segment.push(part);
        }
    }
    flushSegment();
    return result;
}
function toAnthropicToolInput(input) {
    return typeof input === "object" && input !== null && !Array.isArray(input) ? input : {
        rawInvalidInput: input
    };
}
// src/map-anthropic-stop-reason.ts
function mapAnthropicStopReason({ finishReason, isJsonResponseFromTool }) {
    switch(finishReason){
        case "pause_turn":
        case "end_turn":
        case "stop_sequence":
            return "stop";
        case "refusal":
            return "content-filter";
        case "tool_use":
            return isJsonResponseFromTool ? "stop" : "tool-calls";
        case "max_tokens":
        case "model_context_window_exceeded":
            return "length";
        case "compaction":
            return "other";
        default:
            return "other";
    }
}
// src/sanitize-json-schema.ts
var SUPPORTED_STRING_FORMATS = /* @__PURE__ */ new Set([
    "date-time",
    "time",
    "date",
    "duration",
    "email",
    "hostname",
    "uri",
    "ipv4",
    "ipv6",
    "uuid"
]);
var DESCRIPTION_CONSTRAINT_KEYS = [
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "minLength",
    "maxLength",
    "pattern",
    "minItems",
    "maxItems",
    "uniqueItems",
    "minProperties",
    "maxProperties",
    "not"
];
function sanitizeJsonSchema(schema) {
    return sanitizeSchema(schema);
}
function sanitizeDefinition(definition) {
    if (typeof definition === "boolean" || !isPlainObject(definition)) {
        return definition;
    }
    return sanitizeSchema(definition);
}
function sanitizeSchema(schema) {
    const result = {};
    const schemaWithDefs = schema;
    if (schema.$ref != null) {
        return {
            $ref: schema.$ref
        };
    }
    if (schema.$schema != null) {
        result.$schema = schema.$schema;
    }
    if (schema.$id != null) {
        result.$id = schema.$id;
    }
    if (schema.title != null) {
        result.title = schema.title;
    }
    if (schema.description != null) {
        result.description = schema.description;
    }
    if (schema.default !== void 0) {
        result.default = schema.default;
    }
    if (schema.const !== void 0) {
        result.const = schema.const;
    }
    if (schema.enum != null) {
        result.enum = schema.enum;
    }
    if (schema.type != null) {
        result.type = schema.type;
    }
    if (schema.anyOf != null) {
        result.anyOf = schema.anyOf.map(sanitizeDefinition);
    } else if (schema.oneOf != null) {
        result.anyOf = schema.oneOf.map(sanitizeDefinition);
    }
    if (schema.allOf != null) {
        result.allOf = schema.allOf.map(sanitizeDefinition);
    }
    if (schema.definitions != null) {
        result.definitions = Object.fromEntries(Object.entries(schema.definitions).map(([name, definition])=>[
                name,
                sanitizeDefinition(definition)
            ]));
    }
    if (schemaWithDefs.$defs != null) {
        const resultWithDefs = result;
        resultWithDefs.$defs = Object.fromEntries(Object.entries(schemaWithDefs.$defs).map(([name, definition])=>[
                name,
                sanitizeDefinition(definition)
            ]));
    }
    if (schema.type === "object" || schema.properties != null) {
        if (schema.properties != null) {
            result.properties = Object.fromEntries(Object.entries(schema.properties).map(([name, definition])=>[
                    name,
                    sanitizeDefinition(definition)
                ]));
        }
        result.additionalProperties = false;
        if (schema.required != null) {
            result.required = schema.required;
        }
    }
    if (schema.items != null) {
        result.items = Array.isArray(schema.items) ? schema.items.map(sanitizeDefinition) : sanitizeDefinition(schema.items);
    }
    if (typeof schema.format === "string" && SUPPORTED_STRING_FORMATS.has(schema.format)) {
        result.format = schema.format;
    }
    const constraintDescription = getConstraintDescription(schema);
    if (constraintDescription != null) {
        result.description = result.description == null ? constraintDescription : `${result.description}
${constraintDescription}`;
    }
    return result;
}
function getConstraintDescription(schema) {
    const descriptions = DESCRIPTION_CONSTRAINT_KEYS.flatMap((key)=>{
        const value = schema[key];
        if (value == null || value === false) {
            return [];
        }
        return `${formatConstraintName(key)}: ${formatConstraintValue(value)}`;
    });
    if (typeof schema.format === "string" && !SUPPORTED_STRING_FORMATS.has(schema.format)) {
        descriptions.push(`format: ${schema.format}`);
    }
    return descriptions.length === 0 ? void 0 : `${descriptions.join("; ")}.`;
}
function formatConstraintName(key) {
    return key.replace(/[A-Z]/g, (match)=>` ${match.toLowerCase()}`);
}
function formatConstraintValue(value) {
    if (typeof value === "string") {
        return value;
    }
    return JSON.stringify(value);
}
function isPlainObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
// src/anthropic-language-model.ts
function createCitationSource(citation, citationDocuments, generateId3) {
    var _a;
    if (citation.type === "web_search_result_location") {
        return {
            type: "source",
            sourceType: "url",
            id: generateId3(),
            url: citation.url,
            title: citation.title,
            providerMetadata: {
                anthropic: {
                    citedText: citation.cited_text,
                    encryptedIndex: citation.encrypted_index
                }
            }
        };
    }
    if (citation.type !== "page_location" && citation.type !== "char_location") {
        return;
    }
    const documentInfo = citationDocuments[citation.document_index];
    if (!documentInfo) {
        return;
    }
    return {
        type: "source",
        sourceType: "document",
        id: generateId3(),
        mediaType: documentInfo.mediaType,
        title: (_a = citation.document_title) != null ? _a : documentInfo.title,
        filename: documentInfo.filename,
        providerMetadata: {
            anthropic: citation.type === "page_location" ? {
                citedText: citation.cited_text,
                startPageNumber: citation.start_page_number,
                endPageNumber: citation.end_page_number
            } : {
                citedText: citation.cited_text,
                startCharIndex: citation.start_char_index,
                endCharIndex: citation.end_char_index
            }
        }
    };
}
var AnthropicLanguageModel = class _AnthropicLanguageModel {
    constructor(modelId, config){
        this.specificationVersion = "v4";
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
        return new _AnthropicLanguageModel(options.modelId, options.config);
    }
    supportsUrl(url) {
        return url.protocol === "https:";
    }
    get provider() {
        return this.config.provider;
    }
    /**
   * Extracts the dynamic provider name from the config.provider string.
   * e.g., 'my-custom-anthropic.messages' -> 'my-custom-anthropic'
   */ get providerOptionsName() {
        const provider = this.config.provider;
        const dotIndex = provider.indexOf(".");
        return dotIndex === -1 ? provider : provider.substring(0, dotIndex);
    }
    get supportedUrls() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).supportedUrls) == null ? void 0 : _b.call(_a)) != null ? _c : {};
    }
    async getArgs({ userSuppliedBetas, prompt, maxOutputTokens, temperature, topP, topK, frequencyPenalty, presencePenalty, stopSequences, responseFormat, seed, tools, toolChoice, reasoning, providerOptions, stream }) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
        const warnings = [];
        if (frequencyPenalty != null) {
            warnings.push({
                type: "unsupported",
                feature: "frequencyPenalty"
            });
        }
        if (presencePenalty != null) {
            warnings.push({
                type: "unsupported",
                feature: "presencePenalty"
            });
        }
        if (seed != null) {
            warnings.push({
                type: "unsupported",
                feature: "seed"
            });
        }
        if (temperature != null && temperature > 1) {
            warnings.push({
                type: "unsupported",
                feature: "temperature",
                details: `${temperature} exceeds anthropic maximum of 1.0. clamped to 1.0`
            });
            temperature = 1;
        } else if (temperature != null && temperature < 0) {
            warnings.push({
                type: "unsupported",
                feature: "temperature",
                details: `${temperature} is below anthropic minimum of 0. clamped to 0`
            });
            temperature = 0;
        }
        if ((responseFormat == null ? void 0 : responseFormat.type) === "json") {
            if (responseFormat.schema == null) {
                warnings.push({
                    type: "unsupported",
                    feature: "responseFormat",
                    details: "JSON response format requires a schema. The response format is ignored."
                });
            }
        }
        const providerOptionsName = this.providerOptionsName;
        const canonicalOptions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: "anthropic",
            providerOptions,
            schema: anthropicLanguageModelOptions
        });
        const customProviderOptions = providerOptionsName !== "anthropic" ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseProviderOptions"])({
            provider: providerOptionsName,
            providerOptions,
            schema: anthropicLanguageModelOptions
        }) : null;
        const usedCustomProviderKey = customProviderOptions != null;
        const anthropicOptions = Object.assign({}, canonicalOptions != null ? canonicalOptions : {}, customProviderOptions != null ? customProviderOptions : {});
        const { maxOutputTokens: maxOutputTokensForModel, supportsStructuredOutput: modelSupportsStructuredOutput, supportsAdaptiveThinking, rejectsSamplingParameters, supportsXhighEffort, isKnownModel } = getModelCapabilities(this.modelId);
        if (rejectsSamplingParameters) {
            if (temperature != null) {
                warnings.push({
                    type: "unsupported",
                    feature: "temperature",
                    details: `temperature is not supported by ${this.modelId} and will be ignored`
                });
                temperature = void 0;
            }
            if (topK != null) {
                warnings.push({
                    type: "unsupported",
                    feature: "topK",
                    details: `topK is not supported by ${this.modelId} and will be ignored`
                });
                topK = void 0;
            }
            if (topP != null) {
                warnings.push({
                    type: "unsupported",
                    feature: "topP",
                    details: `topP is not supported by ${this.modelId} and will be ignored`
                });
                topP = void 0;
            }
        }
        const isAnthropicModel = isKnownModel || this.modelId.startsWith("claude-");
        const supportsStructuredOutput = ((_a = this.config.supportsNativeStructuredOutput) != null ? _a : true) && modelSupportsStructuredOutput;
        const supportsStrictTools = ((_b = this.config.supportsStrictTools) != null ? _b : true) && modelSupportsStructuredOutput;
        const structureOutputMode = (_c = anthropicOptions == null ? void 0 : anthropicOptions.structuredOutputMode) != null ? _c : "auto";
        const useStructuredOutput = structureOutputMode === "outputFormat" || structureOutputMode === "auto" && supportsStructuredOutput;
        const jsonResponseTool = (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && !useStructuredOutput ? {
            type: "function",
            name: "json",
            description: "Respond with a JSON object.",
            inputSchema: responseFormat.schema
        } : void 0;
        const contextManagement = anthropicOptions == null ? void 0 : anthropicOptions.contextManagement;
        const cacheControlValidator = new CacheControlValidator();
        const toolNameMapping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createToolNameMapping"])({
            tools,
            providerToolNames: {
                "anthropic.code_execution_20250522": "code_execution",
                "anthropic.code_execution_20250825": "code_execution",
                "anthropic.code_execution_20260120": "code_execution",
                "anthropic.computer_20241022": "computer",
                "anthropic.computer_20250124": "computer",
                "anthropic.text_editor_20241022": "str_replace_editor",
                "anthropic.text_editor_20250124": "str_replace_editor",
                "anthropic.text_editor_20250429": "str_replace_based_edit_tool",
                "anthropic.text_editor_20250728": "str_replace_based_edit_tool",
                "anthropic.bash_20241022": "bash",
                "anthropic.bash_20250124": "bash",
                "anthropic.memory_20250818": "memory",
                "anthropic.web_search_20250305": "web_search",
                "anthropic.web_search_20260209": "web_search",
                "anthropic.web_fetch_20250910": "web_fetch",
                "anthropic.web_fetch_20260209": "web_fetch",
                "anthropic.tool_search_regex_20251119": "tool_search_tool_regex",
                "anthropic.tool_search_bm25_20251119": "tool_search_tool_bm25",
                "anthropic.advisor_20260301": "advisor"
            }
        });
        const { prompt: messagesPrompt, betas } = await convertToAnthropicPrompt({
            prompt,
            sendReasoning: (_d = anthropicOptions == null ? void 0 : anthropicOptions.sendReasoning) != null ? _d : true,
            warnings,
            cacheControlValidator,
            toolNameMapping
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCustomReasoning"])(reasoning) && (anthropicOptions == null ? void 0 : anthropicOptions.effort) == null) {
            const reasoningConfig = resolveAnthropicReasoningConfig({
                reasoning,
                supportsAdaptiveThinking,
                supportsXhighEffort,
                maxOutputTokensForModel,
                warnings
            });
            if (reasoningConfig != null) {
                if (anthropicOptions.thinking == null) {
                    anthropicOptions.thinking = reasoningConfig.thinking;
                }
                if (reasoningConfig.effort != null && ((_e = anthropicOptions.thinking) == null ? void 0 : _e.type) !== "disabled") {
                    anthropicOptions.effort = reasoningConfig.effort;
                }
            }
        }
        const thinkingType = (_f = anthropicOptions == null ? void 0 : anthropicOptions.thinking) == null ? void 0 : _f.type;
        const isThinking = thinkingType === "enabled" || thinkingType === "adaptive";
        const sendThinking = isThinking || thinkingType === "disabled";
        let thinkingBudget = thinkingType === "enabled" ? (_g = anthropicOptions == null ? void 0 : anthropicOptions.thinking) == null ? void 0 : _g.budgetTokens : void 0;
        const thinkingDisplay = thinkingType === "adaptive" ? (_h = anthropicOptions == null ? void 0 : anthropicOptions.thinking) == null ? void 0 : _h.display : void 0;
        const maxTokens = maxOutputTokens != null ? maxOutputTokens : maxOutputTokensForModel;
        const baseArgs = {
            // model id:
            model: this.modelId,
            // standardized settings:
            max_tokens: maxTokens,
            temperature,
            top_k: topK,
            top_p: topP,
            stop_sequences: stopSequences,
            // provider specific settings:
            ...sendThinking && {
                thinking: {
                    type: thinkingType,
                    ...thinkingBudget != null && {
                        budget_tokens: thinkingBudget
                    },
                    ...thinkingDisplay != null && {
                        display: thinkingDisplay
                    }
                }
            },
            ...((anthropicOptions == null ? void 0 : anthropicOptions.effort) || (anthropicOptions == null ? void 0 : anthropicOptions.taskBudget) || useStructuredOutput && (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null) && {
                output_config: {
                    ...(anthropicOptions == null ? void 0 : anthropicOptions.effort) && {
                        effort: anthropicOptions.effort
                    },
                    ...(anthropicOptions == null ? void 0 : anthropicOptions.taskBudget) && {
                        task_budget: {
                            type: anthropicOptions.taskBudget.type,
                            total: anthropicOptions.taskBudget.total,
                            ...anthropicOptions.taskBudget.remaining != null && {
                                remaining: anthropicOptions.taskBudget.remaining
                            }
                        }
                    },
                    ...useStructuredOutput && (responseFormat == null ? void 0 : responseFormat.type) === "json" && responseFormat.schema != null && {
                        format: {
                            type: "json_schema",
                            schema: sanitizeJsonSchema(responseFormat.schema)
                        }
                    }
                }
            },
            ...(anthropicOptions == null ? void 0 : anthropicOptions.speed) && {
                speed: anthropicOptions.speed
            },
            ...(anthropicOptions == null ? void 0 : anthropicOptions.inferenceGeo) && {
                inference_geo: anthropicOptions.inferenceGeo
            },
            ...(anthropicOptions == null ? void 0 : anthropicOptions.fallbacks) && anthropicOptions.fallbacks.length > 0 && {
                fallbacks: anthropicOptions.fallbacks
            },
            ...(anthropicOptions == null ? void 0 : anthropicOptions.cacheControl) && {
                cache_control: anthropicOptions.cacheControl
            },
            ...((_i = anthropicOptions == null ? void 0 : anthropicOptions.metadata) == null ? void 0 : _i.userId) != null && {
                metadata: {
                    user_id: anthropicOptions.metadata.userId
                }
            },
            // mcp servers:
            ...(anthropicOptions == null ? void 0 : anthropicOptions.mcpServers) && anthropicOptions.mcpServers.length > 0 && {
                mcp_servers: anthropicOptions.mcpServers.map((server)=>({
                        type: server.type,
                        name: server.name,
                        url: server.url,
                        authorization_token: server.authorizationToken,
                        tool_configuration: server.toolConfiguration ? {
                            allowed_tools: server.toolConfiguration.allowedTools,
                            enabled: server.toolConfiguration.enabled
                        } : void 0
                    }))
            },
            // container: For programmatic tool calling (just an ID string) or agent skills (object with id and skills)
            ...(anthropicOptions == null ? void 0 : anthropicOptions.container) && {
                container: anthropicOptions.container.skills && anthropicOptions.container.skills.length > 0 ? // Object format when skills are provided (agent skills feature)
                {
                    id: anthropicOptions.container.id,
                    skills: anthropicOptions.container.skills.map((skill)=>({
                            type: skill.type,
                            skill_id: skill.type === "custom" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveProviderReference"])({
                                reference: skill.providerReference,
                                provider: "anthropic"
                            }) : skill.skillId,
                            version: skill.version
                        }))
                } : // String format for container ID only (programmatic tool calling)
                anthropicOptions.container.id
            },
            // prompt:
            system: messagesPrompt.system,
            messages: messagesPrompt.messages,
            ...contextManagement && {
                context_management: {
                    edits: contextManagement.edits.map((edit)=>{
                        const strategy = edit.type;
                        switch(strategy){
                            case "clear_tool_uses_20250919":
                                return {
                                    type: edit.type,
                                    ...edit.trigger !== void 0 && {
                                        trigger: edit.trigger
                                    },
                                    ...edit.keep !== void 0 && {
                                        keep: edit.keep
                                    },
                                    ...edit.clearAtLeast !== void 0 && {
                                        clear_at_least: edit.clearAtLeast
                                    },
                                    ...edit.clearToolInputs !== void 0 && {
                                        clear_tool_inputs: edit.clearToolInputs
                                    },
                                    ...edit.excludeTools !== void 0 && {
                                        exclude_tools: edit.excludeTools
                                    }
                                };
                            case "clear_thinking_20251015":
                                return {
                                    type: edit.type,
                                    ...edit.keep !== void 0 && {
                                        keep: edit.keep
                                    }
                                };
                            case "compact_20260112":
                                return {
                                    type: edit.type,
                                    ...edit.trigger !== void 0 && {
                                        trigger: edit.trigger
                                    },
                                    ...edit.pauseAfterCompaction !== void 0 && {
                                        pause_after_compaction: edit.pauseAfterCompaction
                                    },
                                    ...edit.instructions !== void 0 && {
                                        instructions: edit.instructions
                                    }
                                };
                            default:
                                warnings.push({
                                    type: "other",
                                    message: `Unknown context management strategy: ${strategy}`
                                });
                                return void 0;
                        }
                    }).filter((edit)=>edit !== void 0)
                }
            }
        };
        if (isThinking) {
            if (thinkingType === "enabled" && thinkingBudget == null) {
                warnings.push({
                    type: "compatibility",
                    feature: "extended thinking",
                    details: "thinking budget is required when thinking is enabled. using default budget of 1024 tokens."
                });
                baseArgs.thinking = {
                    type: "enabled",
                    budget_tokens: 1024
                };
                thinkingBudget = 1024;
            }
            if (baseArgs.temperature != null) {
                baseArgs.temperature = void 0;
                warnings.push({
                    type: "unsupported",
                    feature: "temperature",
                    details: "temperature is not supported when thinking is enabled"
                });
            }
            if (topK != null) {
                baseArgs.top_k = void 0;
                warnings.push({
                    type: "unsupported",
                    feature: "topK",
                    details: "topK is not supported when thinking is enabled"
                });
            }
            if (topP != null) {
                baseArgs.top_p = void 0;
                warnings.push({
                    type: "unsupported",
                    feature: "topP",
                    details: "topP is not supported when thinking is enabled"
                });
            }
            baseArgs.max_tokens = maxTokens + (thinkingBudget != null ? thinkingBudget : 0);
        } else {
            if (isAnthropicModel && topP != null && temperature != null) {
                warnings.push({
                    type: "unsupported",
                    feature: "topP",
                    details: `topP is not supported when temperature is set. topP is ignored.`
                });
                baseArgs.top_p = void 0;
            }
        }
        if (isKnownModel && baseArgs.max_tokens > maxOutputTokensForModel) {
            if (maxOutputTokens != null) {
                warnings.push({
                    type: "unsupported",
                    feature: "maxOutputTokens",
                    details: `${baseArgs.max_tokens} (maxOutputTokens + thinkingBudget) is greater than ${this.modelId} ${maxOutputTokensForModel} max output tokens. The max output tokens have been limited to ${maxOutputTokensForModel}.`
                });
            }
            baseArgs.max_tokens = maxOutputTokensForModel;
        }
        if ((anthropicOptions == null ? void 0 : anthropicOptions.mcpServers) && anthropicOptions.mcpServers.length > 0) {
            betas.add("mcp-client-2025-04-04");
        }
        if (contextManagement) {
            betas.add("context-management-2025-06-27");
            if (contextManagement.edits.some((e)=>e.type === "compact_20260112")) {
                betas.add("compact-2026-01-12");
            }
        }
        if ((anthropicOptions == null ? void 0 : anthropicOptions.container) && anthropicOptions.container.skills && anthropicOptions.container.skills.length > 0) {
            betas.add("code-execution-2025-08-25");
            betas.add("skills-2025-10-02");
            betas.add("files-api-2025-04-14");
            if (!(tools == null ? void 0 : tools.some((tool)=>tool.type === "provider" && (tool.id === "anthropic.code_execution_20250825" || tool.id === "anthropic.code_execution_20260120")))) {
                warnings.push({
                    type: "other",
                    message: "code execution tool is required when using skills"
                });
            }
        }
        if (anthropicOptions == null ? void 0 : anthropicOptions.taskBudget) {
            betas.add("task-budgets-2026-03-13");
        }
        if ((anthropicOptions == null ? void 0 : anthropicOptions.speed) === "fast") {
            betas.add("fast-mode-2026-02-01");
        }
        if ((anthropicOptions == null ? void 0 : anthropicOptions.fallbacks) && anthropicOptions.fallbacks.length > 0) {
            betas.add("server-side-fallback-2026-06-01");
        }
        const defaultEagerInputStreaming = stream && ((_j = anthropicOptions == null ? void 0 : anthropicOptions.toolStreaming) != null ? _j : true);
        const { tools: anthropicTools2, toolChoice: anthropicToolChoice, toolWarnings, betas: toolsBetas } = await prepareTools(jsonResponseTool != null ? {
            tools: [
                ...tools != null ? tools : [],
                jsonResponseTool
            ],
            toolChoice: {
                type: "required"
            },
            disableParallelToolUse: true,
            cacheControlValidator,
            supportsStructuredOutput: false,
            supportsStrictTools,
            defaultEagerInputStreaming
        } : {
            tools: tools != null ? tools : [],
            toolChoice,
            disableParallelToolUse: anthropicOptions == null ? void 0 : anthropicOptions.disableParallelToolUse,
            cacheControlValidator,
            supportsStructuredOutput,
            supportsStrictTools,
            defaultEagerInputStreaming
        });
        const cacheWarnings = cacheControlValidator.getWarnings();
        return {
            args: {
                ...baseArgs,
                tools: anthropicTools2,
                tool_choice: anthropicToolChoice,
                stream: stream === true ? true : void 0
            },
            warnings: [
                ...warnings,
                ...toolWarnings,
                ...cacheWarnings
            ],
            betas: /* @__PURE__ */ new Set([
                ...betas,
                ...toolsBetas,
                ...userSuppliedBetas,
                ...(_k = anthropicOptions == null ? void 0 : anthropicOptions.anthropicBeta) != null ? _k : []
            ]),
            usesJsonResponseTool: jsonResponseTool != null,
            toolNameMapping,
            providerOptionsName,
            usedCustomProviderKey
        };
    }
    async getHeaders({ betas, headers }) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(this.config.headers ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers) : void 0, headers, betas.size > 0 ? {
            "anthropic-beta": Array.from(betas).join(",")
        } : {});
    }
    async getBetasFromHeaders(requestHeaders) {
        var _a, _b;
        const configHeaders = this.config.headers ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers) : void 0;
        const configBetaHeader = (_a = configHeaders == null ? void 0 : configHeaders["anthropic-beta"]) != null ? _a : "";
        const requestBetaHeader = (_b = requestHeaders == null ? void 0 : requestHeaders["anthropic-beta"]) != null ? _b : "";
        return new Set([
            ...configBetaHeader.toLowerCase().split(","),
            ...requestBetaHeader.toLowerCase().split(",")
        ].map((beta)=>beta.trim()).filter((beta)=>beta !== ""));
    }
    buildRequestUrl(isStreaming) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).buildRequestUrl) == null ? void 0 : _b.call(_a, this.config.baseURL, isStreaming)) != null ? _c : `${this.config.baseURL}/messages`;
    }
    transformRequestBody(args, betas) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.config).transformRequestBody) == null ? void 0 : _b.call(_a, args, betas)) != null ? _c : args;
    }
    extractCitationDocuments(prompt) {
        const isCitationPart = (part)=>{
            var _a, _b;
            if (part.type !== "file") {
                return false;
            }
            if (part.mediaType !== "application/pdf" && part.mediaType !== "text/plain") {
                return false;
            }
            const anthropic2 = (_a = part.providerOptions) == null ? void 0 : _a.anthropic;
            const citationsConfig = anthropic2 == null ? void 0 : anthropic2.citations;
            return (_b = citationsConfig == null ? void 0 : citationsConfig.enabled) != null ? _b : false;
        };
        return prompt.filter((message)=>message.role === "user").flatMap((message)=>message.content).filter(isCitationPart).map((part)=>{
            var _a;
            const filePart = part;
            return {
                title: (_a = filePart.filename) != null ? _a : "Untitled Document",
                filename: filePart.filename,
                mediaType: filePart.mediaType
            };
        });
    }
    async doGenerate(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        const { args, warnings, betas, usesJsonResponseTool, toolNameMapping, providerOptionsName, usedCustomProviderKey } = await this.getArgs({
            ...options,
            stream: false,
            userSuppliedBetas: await this.getBetasFromHeaders(options.headers)
        });
        const citationDocuments = [
            ...this.extractCitationDocuments(options.prompt)
        ];
        const markCodeExecutionDynamic = hasWebTool20260209WithoutCodeExecution(args.tools);
        const { responseHeaders, value: response, rawValue: rawResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url: this.buildRequestUrl(false),
            headers: await this.getHeaders({
                betas,
                headers: options.headers
            }),
            body: this.transformRequestBody(args, betas),
            failedResponseHandler: anthropicFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(anthropicResponseSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        const content = [];
        const mcpToolCalls = {};
        const serverToolCalls = {};
        let isJsonResponseFromTool = false;
        for (const part of response.content){
            switch(part.type){
                case "text":
                    {
                        if (!usesJsonResponseTool) {
                            content.push({
                                type: "text",
                                text: part.text
                            });
                            if (part.citations) {
                                for (const citation of part.citations){
                                    const source = createCitationSource(citation, citationDocuments, this.generateId);
                                    if (source) {
                                        content.push(source);
                                    }
                                }
                            }
                        }
                        break;
                    }
                case "thinking":
                    {
                        content.push({
                            type: "reasoning",
                            text: part.thinking,
                            providerMetadata: {
                                anthropic: {
                                    signature: part.signature
                                }
                            }
                        });
                        break;
                    }
                case "redacted_thinking":
                    {
                        content.push({
                            type: "reasoning",
                            text: "",
                            providerMetadata: {
                                anthropic: {
                                    redactedData: part.data
                                }
                            }
                        });
                        break;
                    }
                case "compaction":
                    {
                        content.push({
                            type: "text",
                            text: part.content,
                            providerMetadata: {
                                anthropic: {
                                    type: "compaction"
                                }
                            }
                        });
                        break;
                    }
                case "tool_use":
                    {
                        const isJsonResponseTool = usesJsonResponseTool && part.name === "json";
                        if (isJsonResponseTool) {
                            isJsonResponseFromTool = true;
                            content.push({
                                type: "text",
                                text: JSON.stringify(part.input)
                            });
                        } else {
                            const caller = part.caller;
                            const callerInfo = caller ? {
                                type: caller.type,
                                toolId: "tool_id" in caller ? caller.tool_id : void 0
                            } : void 0;
                            content.push({
                                type: "tool-call",
                                toolCallId: part.id,
                                toolName: part.name,
                                input: JSON.stringify(part.input),
                                ...callerInfo && {
                                    providerMetadata: {
                                        anthropic: {
                                            caller: callerInfo
                                        }
                                    }
                                }
                            });
                        }
                        break;
                    }
                case "server_tool_use":
                    {
                        if (part.name === "text_editor_code_execution" || part.name === "bash_code_execution") {
                            const providerToolName = "code_execution";
                            content.push({
                                type: "tool-call",
                                toolCallId: part.id,
                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                input: JSON.stringify({
                                    type: part.name,
                                    ...part.input
                                }),
                                providerExecuted: true,
                                // Specific 'web_fetch' or 'web_search' tools may need code execution, which the Anthropic API
                                // implicitly allows. In this scenario, we need to allow 'code_execution' tool calls even if the
                                // tool was not explicitly provided. We therefore bypass the general validation by marking the
                                // tool as dynamic.
                                ...markCodeExecutionDynamic && providerToolName === "code_execution" ? {
                                    dynamic: true
                                } : {}
                            });
                        } else if (part.name === "web_search" || part.name === "code_execution" || part.name === "web_fetch") {
                            const inputToSerialize = part.name === "code_execution" && part.input != null && typeof part.input === "object" && "code" in part.input && !("type" in part.input) ? {
                                type: "programmatic-tool-call",
                                ...part.input
                            } : part.input;
                            content.push({
                                type: "tool-call",
                                toolCallId: part.id,
                                toolName: toolNameMapping.toCustomToolName(part.name),
                                input: JSON.stringify(inputToSerialize),
                                providerExecuted: true,
                                // Specific 'web_fetch' or 'web_search' tools may need code execution, which the Anthropic API
                                // implicitly allows. In this scenario, we need to allow 'code_execution' tool calls even if the
                                // tool was not explicitly provided. We therefore bypass the general validation by marking the
                                // tool as dynamic.
                                ...markCodeExecutionDynamic && part.name === "code_execution" ? {
                                    dynamic: true
                                } : {}
                            });
                        } else if (part.name === "tool_search_tool_regex" || part.name === "tool_search_tool_bm25") {
                            serverToolCalls[part.id] = part.name;
                            content.push({
                                type: "tool-call",
                                toolCallId: part.id,
                                toolName: toolNameMapping.toCustomToolName(part.name),
                                input: JSON.stringify(part.input),
                                providerExecuted: true
                            });
                        } else if (part.name === "advisor") {
                            content.push({
                                type: "tool-call",
                                toolCallId: part.id,
                                toolName: toolNameMapping.toCustomToolName("advisor"),
                                input: JSON.stringify(part.input),
                                providerExecuted: true
                            });
                        }
                        break;
                    }
                case "mcp_tool_use":
                    {
                        mcpToolCalls[part.id] = {
                            type: "tool-call",
                            toolCallId: part.id,
                            toolName: part.name,
                            input: JSON.stringify(part.input),
                            providerExecuted: true,
                            dynamic: true,
                            providerMetadata: {
                                anthropic: {
                                    type: "mcp-tool-use",
                                    serverName: part.server_name
                                }
                            }
                        };
                        content.push(mcpToolCalls[part.id]);
                        break;
                    }
                case "mcp_tool_result":
                    {
                        content.push({
                            type: "tool-result",
                            toolCallId: part.tool_use_id,
                            toolName: mcpToolCalls[part.tool_use_id].toolName,
                            isError: part.is_error,
                            result: part.content,
                            dynamic: true,
                            providerMetadata: mcpToolCalls[part.tool_use_id].providerMetadata
                        });
                        break;
                    }
                case "web_fetch_tool_result":
                    {
                        if (part.content.type === "web_fetch_result") {
                            citationDocuments.push({
                                title: (_a = part.content.content.title) != null ? _a : part.content.url,
                                mediaType: part.content.content.source.media_type
                            });
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("web_fetch"),
                                result: {
                                    type: "web_fetch_result",
                                    url: part.content.url,
                                    retrievedAt: part.content.retrieved_at,
                                    content: {
                                        type: part.content.content.type,
                                        title: part.content.content.title,
                                        citations: part.content.content.citations,
                                        source: {
                                            type: part.content.content.source.type,
                                            mediaType: part.content.content.source.media_type,
                                            data: part.content.content.source.data
                                        }
                                    }
                                }
                            });
                        } else if (part.content.type === "web_fetch_tool_result_error") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("web_fetch"),
                                isError: true,
                                result: {
                                    type: "web_fetch_tool_result_error",
                                    errorCode: part.content.error_code
                                }
                            });
                        }
                        break;
                    }
                case "web_search_tool_result":
                    {
                        if (Array.isArray(part.content)) {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("web_search"),
                                result: part.content.map((result)=>{
                                    var _a2;
                                    return {
                                        url: result.url,
                                        title: result.title,
                                        pageAge: (_a2 = result.page_age) != null ? _a2 : null,
                                        encryptedContent: result.encrypted_content,
                                        type: result.type
                                    };
                                })
                            });
                            for (const result of part.content){
                                content.push({
                                    type: "source",
                                    sourceType: "url",
                                    id: this.generateId(),
                                    url: result.url,
                                    title: result.title,
                                    providerMetadata: {
                                        anthropic: {
                                            pageAge: (_b = result.page_age) != null ? _b : null
                                        }
                                    }
                                });
                            }
                        } else {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("web_search"),
                                isError: true,
                                result: {
                                    type: "web_search_tool_result_error",
                                    errorCode: part.content.error_code
                                }
                            });
                        }
                        break;
                    }
                // code execution 20250522:
                case "code_execution_tool_result":
                    {
                        if (part.content.type === "code_execution_result") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                result: {
                                    type: part.content.type,
                                    stdout: part.content.stdout,
                                    stderr: part.content.stderr,
                                    return_code: part.content.return_code,
                                    content: (_c = part.content.content) != null ? _c : []
                                }
                            });
                        } else if (part.content.type === "encrypted_code_execution_result") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                result: {
                                    type: part.content.type,
                                    encrypted_stdout: part.content.encrypted_stdout,
                                    stderr: part.content.stderr,
                                    return_code: part.content.return_code,
                                    content: (_d = part.content.content) != null ? _d : []
                                }
                            });
                        } else if (part.content.type === "code_execution_tool_result_error") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                isError: true,
                                result: {
                                    type: "code_execution_tool_result_error",
                                    errorCode: part.content.error_code
                                }
                            });
                        }
                        break;
                    }
                // code execution 20250825:
                case "bash_code_execution_tool_result":
                case "text_editor_code_execution_tool_result":
                    {
                        content.push({
                            type: "tool-result",
                            toolCallId: part.tool_use_id,
                            toolName: toolNameMapping.toCustomToolName("code_execution"),
                            result: part.content
                        });
                        break;
                    }
                // tool search tool results:
                case "tool_search_tool_result":
                    {
                        let providerToolName = serverToolCalls[part.tool_use_id];
                        if (providerToolName == null) {
                            const bm25CustomName = toolNameMapping.toCustomToolName("tool_search_tool_bm25");
                            const regexCustomName = toolNameMapping.toCustomToolName("tool_search_tool_regex");
                            if (bm25CustomName !== "tool_search_tool_bm25") {
                                providerToolName = "tool_search_tool_bm25";
                            } else if (regexCustomName !== "tool_search_tool_regex") {
                                providerToolName = "tool_search_tool_regex";
                            } else {
                                providerToolName = "tool_search_tool_regex";
                            }
                        }
                        if (part.content.type === "tool_search_tool_search_result") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName(providerToolName),
                                result: part.content.tool_references.map((ref)=>({
                                        type: ref.type,
                                        toolName: ref.tool_name
                                    }))
                            });
                        } else {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: toolNameMapping.toCustomToolName(providerToolName),
                                isError: true,
                                result: {
                                    type: "tool_search_tool_result_error",
                                    errorCode: part.content.error_code
                                }
                            });
                        }
                        break;
                    }
                // advisor results for advisor_20260301:
                case "advisor_tool_result":
                    {
                        const advisorToolName = toolNameMapping.toCustomToolName("advisor");
                        if (part.content.type === "advisor_result") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: advisorToolName,
                                result: {
                                    type: "advisor_result",
                                    text: part.content.text
                                }
                            });
                        } else if (part.content.type === "advisor_redacted_result") {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: advisorToolName,
                                result: {
                                    type: "advisor_redacted_result",
                                    encryptedContent: part.content.encrypted_content
                                }
                            });
                        } else {
                            content.push({
                                type: "tool-result",
                                toolCallId: part.tool_use_id,
                                toolName: advisorToolName,
                                isError: true,
                                result: {
                                    type: "advisor_tool_result_error",
                                    errorCode: part.content.error_code
                                }
                            });
                        }
                        break;
                    }
                // Server-side fallback marker: the AI SDK has no content primitive for
                // a model hop, so drop it. The hop is still observable via
                // usage.iterations.
                case "fallback":
                    {
                        break;
                    }
            }
        }
        return {
            content,
            finishReason: {
                unified: mapAnthropicStopReason({
                    finishReason: response.stop_reason,
                    isJsonResponseFromTool
                }),
                raw: (_e = response.stop_reason) != null ? _e : void 0
            },
            usage: convertAnthropicUsage({
                usage: response.usage
            }),
            request: {
                body: args
            },
            response: {
                id: (_f = response.id) != null ? _f : void 0,
                modelId: (_g = response.model) != null ? _g : void 0,
                headers: responseHeaders,
                body: rawResponse
            },
            warnings,
            providerMetadata: (()=>{
                var _a2, _b2, _c2, _d2;
                const stopDetails = mapAnthropicStopDetails(response.stop_details);
                const anthropicMetadata = {
                    usage: response.usage,
                    stopSequence: (_a2 = response.stop_sequence) != null ? _a2 : null,
                    ...stopDetails != null ? {
                        stopDetails
                    } : {},
                    iterations: response.usage.iterations ? response.usage.iterations.map((iter)=>({
                            type: iter.type,
                            ...iter.model != null ? {
                                model: iter.model
                            } : {},
                            inputTokens: iter.input_tokens,
                            outputTokens: iter.output_tokens,
                            ...iter.cache_creation_input_tokens ? {
                                cacheCreationInputTokens: iter.cache_creation_input_tokens
                            } : {},
                            ...iter.cache_read_input_tokens ? {
                                cacheReadInputTokens: iter.cache_read_input_tokens
                            } : {}
                        })) : null,
                    container: response.container ? {
                        expiresAt: response.container.expires_at,
                        id: response.container.id,
                        skills: (_c2 = (_b2 = response.container.skills) == null ? void 0 : _b2.map((skill)=>({
                                type: skill.type,
                                skillId: skill.skill_id,
                                version: skill.version
                            }))) != null ? _c2 : null
                    } : null,
                    contextManagement: (_d2 = mapAnthropicResponseContextManagement(response.context_management)) != null ? _d2 : null
                };
                const providerMetadata = {
                    anthropic: anthropicMetadata
                };
                if (usedCustomProviderKey && providerOptionsName !== "anthropic") {
                    providerMetadata[providerOptionsName] = anthropicMetadata;
                }
                return providerMetadata;
            })()
        };
    }
    async doStream(options) {
        "use step";
        var _a, _b;
        const { args: body, warnings, betas, usesJsonResponseTool, toolNameMapping, providerOptionsName, usedCustomProviderKey } = await this.getArgs({
            ...options,
            stream: true,
            userSuppliedBetas: await this.getBetasFromHeaders(options.headers)
        });
        const citationDocuments = [
            ...this.extractCitationDocuments(options.prompt)
        ];
        const markCodeExecutionDynamic = hasWebTool20260209WithoutCodeExecution(body.tools);
        const url = this.buildRequestUrl(true);
        const { responseHeaders, value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postJsonToApi"])({
            url,
            headers: await this.getHeaders({
                betas,
                headers: options.headers
            }),
            body: this.transformRequestBody(body, betas),
            failedResponseHandler: anthropicFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createEventSourceResponseHandler"])(anthropicChunkSchema),
            abortSignal: options.abortSignal,
            fetch: this.config.fetch
        });
        let finishReason = {
            unified: "other",
            raw: void 0
        };
        const usage = {
            input_tokens: 0,
            output_tokens: 0,
            cache_creation_input_tokens: 0,
            cache_read_input_tokens: 0,
            iterations: null
        };
        const contentBlocks = {};
        const mcpToolCalls = {};
        const serverToolCalls = {};
        let contextManagement = null;
        let rawUsage = void 0;
        let stopSequence = null;
        let stopDetails = void 0;
        let container = null;
        let isJsonResponseFromTool = false;
        let blockType = void 0;
        const generateId3 = this.generateId;
        const transformedStream = response.pipeThrough(new TransformStream({
            start (controller) {
                controller.enqueue({
                    type: "stream-start",
                    warnings
                });
            },
            transform (chunk, controller) {
                var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
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
                switch(value.type){
                    case "ping":
                        {
                            return;
                        }
                    case "content_block_start":
                        {
                            const part = value.content_block;
                            const contentBlockType = part.type;
                            if (contentBlockType === "fallback") {
                                return;
                            }
                            blockType = contentBlockType;
                            switch(contentBlockType){
                                case "text":
                                    {
                                        if (usesJsonResponseTool) {
                                            return;
                                        }
                                        contentBlocks[value.index] = {
                                            type: "text"
                                        };
                                        controller.enqueue({
                                            type: "text-start",
                                            id: String(value.index)
                                        });
                                        return;
                                    }
                                case "thinking":
                                    {
                                        contentBlocks[value.index] = {
                                            type: "reasoning"
                                        };
                                        controller.enqueue({
                                            type: "reasoning-start",
                                            id: String(value.index)
                                        });
                                        return;
                                    }
                                case "redacted_thinking":
                                    {
                                        contentBlocks[value.index] = {
                                            type: "reasoning"
                                        };
                                        controller.enqueue({
                                            type: "reasoning-start",
                                            id: String(value.index),
                                            providerMetadata: {
                                                anthropic: {
                                                    redactedData: part.data
                                                }
                                            }
                                        });
                                        return;
                                    }
                                case "compaction":
                                    {
                                        contentBlocks[value.index] = {
                                            type: "text"
                                        };
                                        controller.enqueue({
                                            type: "text-start",
                                            id: String(value.index),
                                            providerMetadata: {
                                                anthropic: {
                                                    type: "compaction"
                                                }
                                            }
                                        });
                                        return;
                                    }
                                case "tool_use":
                                    {
                                        const isJsonResponseTool = usesJsonResponseTool && part.name === "json";
                                        if (isJsonResponseTool) {
                                            isJsonResponseFromTool = true;
                                            contentBlocks[value.index] = {
                                                type: "text"
                                            };
                                            controller.enqueue({
                                                type: "text-start",
                                                id: String(value.index)
                                            });
                                        } else {
                                            const caller = part.caller;
                                            const callerInfo = caller ? {
                                                type: caller.type,
                                                toolId: "tool_id" in caller ? caller.tool_id : void 0
                                            } : void 0;
                                            const hasNonEmptyInput = part.input && Object.keys(part.input).length > 0;
                                            const initialInput = hasNonEmptyInput ? JSON.stringify(part.input) : "";
                                            contentBlocks[value.index] = {
                                                type: "tool-call",
                                                toolCallId: part.id,
                                                toolName: part.name,
                                                input: initialInput,
                                                firstDelta: initialInput.length === 0,
                                                ...callerInfo && {
                                                    caller: callerInfo
                                                }
                                            };
                                            controller.enqueue({
                                                type: "tool-input-start",
                                                id: part.id,
                                                toolName: part.name
                                            });
                                        }
                                        return;
                                    }
                                case "server_tool_use":
                                    {
                                        if ([
                                            "web_fetch",
                                            "web_search",
                                            // code execution 20250825:
                                            "code_execution",
                                            // code execution 20250825 text editor:
                                            "text_editor_code_execution",
                                            // code execution 20250825 bash:
                                            "bash_code_execution"
                                        ].includes(part.name)) {
                                            const providerToolName = part.name === "text_editor_code_execution" || part.name === "bash_code_execution" ? "code_execution" : part.name;
                                            const providerToolInputType = part.name === "text_editor_code_execution" || part.name === "bash_code_execution" ? part.name : part.name === "code_execution" ? "programmatic-tool-call" : void 0;
                                            const customToolName = toolNameMapping.toCustomToolName(providerToolName);
                                            const finalInput = part.input != null && typeof part.input === "object" && Object.keys(part.input).length > 0 ? JSON.stringify(part.input) : "";
                                            contentBlocks[value.index] = {
                                                type: "tool-call",
                                                toolCallId: part.id,
                                                toolName: customToolName,
                                                input: finalInput,
                                                providerExecuted: true,
                                                // Specific 'web_fetch' or 'web_search' tools may need code execution, which the Anthropic API
                                                // implicitly allows. In this scenario, we need to allow 'code_execution' tool calls even if the
                                                // tool was not explicitly provided. We therefore bypass the general validation by marking the
                                                // tool as dynamic.
                                                ...markCodeExecutionDynamic && providerToolName === "code_execution" ? {
                                                    dynamic: true
                                                } : {},
                                                firstDelta: finalInput.length === 0,
                                                providerToolName,
                                                providerToolInputType
                                            };
                                            controller.enqueue({
                                                type: "tool-input-start",
                                                id: part.id,
                                                toolName: customToolName,
                                                providerExecuted: true,
                                                // Specific 'web_fetch' or 'web_search' tools may need code execution, which the Anthropic API
                                                // implicitly allows. In this scenario, we need to allow 'code_execution' tool calls even if the
                                                // tool was not explicitly provided. We therefore bypass the general validation by marking the
                                                // tool as dynamic.
                                                ...markCodeExecutionDynamic && providerToolName === "code_execution" ? {
                                                    dynamic: true
                                                } : {}
                                            });
                                        } else if (part.name === "tool_search_tool_regex" || part.name === "tool_search_tool_bm25") {
                                            serverToolCalls[part.id] = part.name;
                                            const customToolName = toolNameMapping.toCustomToolName(part.name);
                                            contentBlocks[value.index] = {
                                                type: "tool-call",
                                                toolCallId: part.id,
                                                toolName: customToolName,
                                                input: "",
                                                providerExecuted: true,
                                                firstDelta: true,
                                                providerToolName: part.name
                                            };
                                            controller.enqueue({
                                                type: "tool-input-start",
                                                id: part.id,
                                                toolName: customToolName,
                                                providerExecuted: true
                                            });
                                        } else if (part.name === "advisor") {
                                            const customToolName = toolNameMapping.toCustomToolName("advisor");
                                            contentBlocks[value.index] = {
                                                type: "tool-call",
                                                toolCallId: part.id,
                                                toolName: customToolName,
                                                input: "{}",
                                                providerExecuted: true,
                                                firstDelta: true,
                                                providerToolName: part.name
                                            };
                                            controller.enqueue({
                                                type: "tool-input-start",
                                                id: part.id,
                                                toolName: customToolName,
                                                providerExecuted: true
                                            });
                                        }
                                        return;
                                    }
                                case "web_fetch_tool_result":
                                    {
                                        if (part.content.type === "web_fetch_result") {
                                            citationDocuments.push({
                                                title: (_a2 = part.content.content.title) != null ? _a2 : part.content.url,
                                                mediaType: part.content.content.source.media_type
                                            });
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("web_fetch"),
                                                result: {
                                                    type: "web_fetch_result",
                                                    url: part.content.url,
                                                    retrievedAt: part.content.retrieved_at,
                                                    content: {
                                                        type: part.content.content.type,
                                                        title: part.content.content.title,
                                                        citations: part.content.content.citations,
                                                        source: {
                                                            type: part.content.content.source.type,
                                                            mediaType: part.content.content.source.media_type,
                                                            data: part.content.content.source.data
                                                        }
                                                    }
                                                }
                                            });
                                        } else if (part.content.type === "web_fetch_tool_result_error") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("web_fetch"),
                                                isError: true,
                                                result: {
                                                    type: "web_fetch_tool_result_error",
                                                    errorCode: part.content.error_code
                                                }
                                            });
                                        }
                                        return;
                                    }
                                case "web_search_tool_result":
                                    {
                                        if (Array.isArray(part.content)) {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("web_search"),
                                                result: part.content.map((result)=>{
                                                    var _a3;
                                                    return {
                                                        url: result.url,
                                                        title: result.title,
                                                        pageAge: (_a3 = result.page_age) != null ? _a3 : null,
                                                        encryptedContent: result.encrypted_content,
                                                        type: result.type
                                                    };
                                                })
                                            });
                                            for (const result of part.content){
                                                controller.enqueue({
                                                    type: "source",
                                                    sourceType: "url",
                                                    id: generateId3(),
                                                    url: result.url,
                                                    title: result.title,
                                                    providerMetadata: {
                                                        anthropic: {
                                                            pageAge: (_b2 = result.page_age) != null ? _b2 : null
                                                        }
                                                    }
                                                });
                                            }
                                        } else {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("web_search"),
                                                isError: true,
                                                result: {
                                                    type: "web_search_tool_result_error",
                                                    errorCode: part.content.error_code
                                                }
                                            });
                                        }
                                        return;
                                    }
                                // code execution 20250522:
                                case "code_execution_tool_result":
                                    {
                                        if (part.content.type === "code_execution_result") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                                result: {
                                                    type: part.content.type,
                                                    stdout: part.content.stdout,
                                                    stderr: part.content.stderr,
                                                    return_code: part.content.return_code,
                                                    content: (_c = part.content.content) != null ? _c : []
                                                }
                                            });
                                        } else if (part.content.type === "encrypted_code_execution_result") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                                result: {
                                                    type: part.content.type,
                                                    encrypted_stdout: part.content.encrypted_stdout,
                                                    stderr: part.content.stderr,
                                                    return_code: part.content.return_code,
                                                    content: (_d = part.content.content) != null ? _d : []
                                                }
                                            });
                                        } else if (part.content.type === "code_execution_tool_result_error") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName("code_execution"),
                                                isError: true,
                                                result: {
                                                    type: "code_execution_tool_result_error",
                                                    errorCode: part.content.error_code
                                                }
                                            });
                                        }
                                        return;
                                    }
                                // code execution 20250825:
                                case "bash_code_execution_tool_result":
                                case "text_editor_code_execution_tool_result":
                                    {
                                        controller.enqueue({
                                            type: "tool-result",
                                            toolCallId: part.tool_use_id,
                                            toolName: toolNameMapping.toCustomToolName("code_execution"),
                                            result: part.content
                                        });
                                        return;
                                    }
                                // tool search tool results:
                                case "tool_search_tool_result":
                                    {
                                        let providerToolName = serverToolCalls[part.tool_use_id];
                                        if (providerToolName == null) {
                                            const bm25CustomName = toolNameMapping.toCustomToolName("tool_search_tool_bm25");
                                            const regexCustomName = toolNameMapping.toCustomToolName("tool_search_tool_regex");
                                            if (bm25CustomName !== "tool_search_tool_bm25") {
                                                providerToolName = "tool_search_tool_bm25";
                                            } else if (regexCustomName !== "tool_search_tool_regex") {
                                                providerToolName = "tool_search_tool_regex";
                                            } else {
                                                providerToolName = "tool_search_tool_regex";
                                            }
                                        }
                                        if (part.content.type === "tool_search_tool_search_result") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName(providerToolName),
                                                result: part.content.tool_references.map((ref)=>({
                                                        type: ref.type,
                                                        toolName: ref.tool_name
                                                    }))
                                            });
                                        } else {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: toolNameMapping.toCustomToolName(providerToolName),
                                                isError: true,
                                                result: {
                                                    type: "tool_search_tool_result_error",
                                                    errorCode: part.content.error_code
                                                }
                                            });
                                        }
                                        return;
                                    }
                                // advisor results for advisor_20260301:
                                // arrives fully formed in a single content_block_start (no deltas).
                                case "advisor_tool_result":
                                    {
                                        const advisorToolName = toolNameMapping.toCustomToolName("advisor");
                                        if (part.content.type === "advisor_result") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: advisorToolName,
                                                result: {
                                                    type: "advisor_result",
                                                    text: part.content.text
                                                }
                                            });
                                        } else if (part.content.type === "advisor_redacted_result") {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: advisorToolName,
                                                result: {
                                                    type: "advisor_redacted_result",
                                                    encryptedContent: part.content.encrypted_content
                                                }
                                            });
                                        } else {
                                            controller.enqueue({
                                                type: "tool-result",
                                                toolCallId: part.tool_use_id,
                                                toolName: advisorToolName,
                                                isError: true,
                                                result: {
                                                    type: "advisor_tool_result_error",
                                                    errorCode: part.content.error_code
                                                }
                                            });
                                        }
                                        return;
                                    }
                                case "mcp_tool_use":
                                    {
                                        mcpToolCalls[part.id] = {
                                            type: "tool-call",
                                            toolCallId: part.id,
                                            toolName: part.name,
                                            input: JSON.stringify(part.input),
                                            providerExecuted: true,
                                            dynamic: true,
                                            providerMetadata: {
                                                anthropic: {
                                                    type: "mcp-tool-use",
                                                    serverName: part.server_name
                                                }
                                            }
                                        };
                                        controller.enqueue(mcpToolCalls[part.id]);
                                        return;
                                    }
                                case "mcp_tool_result":
                                    {
                                        controller.enqueue({
                                            type: "tool-result",
                                            toolCallId: part.tool_use_id,
                                            toolName: mcpToolCalls[part.tool_use_id].toolName,
                                            isError: part.is_error,
                                            result: part.content,
                                            dynamic: true,
                                            providerMetadata: mcpToolCalls[part.tool_use_id].providerMetadata
                                        });
                                        return;
                                    }
                                default:
                                    {
                                        const _exhaustiveCheck = contentBlockType;
                                        throw new Error(`Unsupported content block type: ${_exhaustiveCheck}`);
                                    }
                            }
                        }
                    case "content_block_stop":
                        {
                            if (contentBlocks[value.index] != null) {
                                const contentBlock = contentBlocks[value.index];
                                switch(contentBlock.type){
                                    case "text":
                                        {
                                            controller.enqueue({
                                                type: "text-end",
                                                id: String(value.index)
                                            });
                                            break;
                                        }
                                    case "reasoning":
                                        {
                                            controller.enqueue({
                                                type: "reasoning-end",
                                                id: String(value.index)
                                            });
                                            break;
                                        }
                                    case "tool-call":
                                        const isJsonResponseTool = usesJsonResponseTool && contentBlock.toolName === "json";
                                        if (!isJsonResponseTool) {
                                            controller.enqueue({
                                                type: "tool-input-end",
                                                id: contentBlock.toolCallId
                                            });
                                            let finalInput = contentBlock.input === "" ? "{}" : contentBlock.input;
                                            if (contentBlock.providerToolName === "code_execution") {
                                                try {
                                                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["secureJsonParse"])(finalInput);
                                                    if (parsed != null && typeof parsed === "object" && "code" in parsed && !("type" in parsed)) {
                                                        finalInput = JSON.stringify({
                                                            type: "programmatic-tool-call",
                                                            ...parsed
                                                        });
                                                    }
                                                } catch (e) {}
                                            }
                                            controller.enqueue({
                                                type: "tool-call",
                                                toolCallId: contentBlock.toolCallId,
                                                toolName: contentBlock.toolName,
                                                input: finalInput,
                                                providerExecuted: contentBlock.providerExecuted,
                                                // Specific 'web_fetch' or 'web_search' tools may need code execution, which the Anthropic API
                                                // implicitly allows. In this scenario, we need to allow 'code_execution' tool calls even if the
                                                // tool was not explicitly provided. We therefore bypass the general validation by marking the
                                                // tool as dynamic.
                                                ...markCodeExecutionDynamic && contentBlock.providerToolName === "code_execution" ? {
                                                    dynamic: true
                                                } : {},
                                                ...contentBlock.caller && {
                                                    providerMetadata: {
                                                        anthropic: {
                                                            caller: contentBlock.caller
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                        break;
                                }
                                delete contentBlocks[value.index];
                            }
                            blockType = void 0;
                            return;
                        }
                    case "content_block_delta":
                        {
                            const deltaType = value.delta.type;
                            switch(deltaType){
                                case "text_delta":
                                    {
                                        if (usesJsonResponseTool) {
                                            return;
                                        }
                                        controller.enqueue({
                                            type: "text-delta",
                                            id: String(value.index),
                                            delta: value.delta.text
                                        });
                                        return;
                                    }
                                case "thinking_delta":
                                    {
                                        controller.enqueue({
                                            type: "reasoning-delta",
                                            id: String(value.index),
                                            delta: value.delta.thinking
                                        });
                                        return;
                                    }
                                case "signature_delta":
                                    {
                                        if (blockType === "thinking") {
                                            controller.enqueue({
                                                type: "reasoning-delta",
                                                id: String(value.index),
                                                delta: "",
                                                providerMetadata: {
                                                    anthropic: {
                                                        signature: value.delta.signature
                                                    }
                                                }
                                            });
                                        }
                                        return;
                                    }
                                case "compaction_delta":
                                    {
                                        if (value.delta.content != null) {
                                            controller.enqueue({
                                                type: "text-delta",
                                                id: String(value.index),
                                                delta: value.delta.content
                                            });
                                        }
                                        return;
                                    }
                                case "input_json_delta":
                                    {
                                        const contentBlock = contentBlocks[value.index];
                                        let delta = value.delta.partial_json;
                                        if (delta.length === 0) {
                                            return;
                                        }
                                        if (isJsonResponseFromTool) {
                                            if ((contentBlock == null ? void 0 : contentBlock.type) !== "text") {
                                                return;
                                            }
                                            controller.enqueue({
                                                type: "text-delta",
                                                id: String(value.index),
                                                delta
                                            });
                                        } else {
                                            if ((contentBlock == null ? void 0 : contentBlock.type) !== "tool-call") {
                                                return;
                                            }
                                            if (contentBlock.firstDelta && contentBlock.providerToolInputType != null) {
                                                delta = `{"type": "${contentBlock.providerToolInputType}",${delta.substring(1)}`;
                                            }
                                            controller.enqueue({
                                                type: "tool-input-delta",
                                                id: contentBlock.toolCallId,
                                                delta
                                            });
                                            contentBlock.input += delta;
                                            contentBlock.firstDelta = false;
                                        }
                                        return;
                                    }
                                case "citations_delta":
                                    {
                                        const citation = value.delta.citation;
                                        const source = createCitationSource(citation, citationDocuments, generateId3);
                                        if (source) {
                                            controller.enqueue(source);
                                        }
                                        return;
                                    }
                                default:
                                    {
                                        const _exhaustiveCheck = deltaType;
                                        throw new Error(`Unsupported delta type: ${_exhaustiveCheck}`);
                                    }
                            }
                        }
                    case "message_start":
                        {
                            usage.input_tokens = value.message.usage.input_tokens;
                            usage.cache_read_input_tokens = (_e = value.message.usage.cache_read_input_tokens) != null ? _e : 0;
                            usage.cache_creation_input_tokens = (_f = value.message.usage.cache_creation_input_tokens) != null ? _f : 0;
                            rawUsage = {
                                ...value.message.usage
                            };
                            if (value.message.container != null) {
                                container = {
                                    expiresAt: value.message.container.expires_at,
                                    id: value.message.container.id,
                                    skills: null
                                };
                            }
                            if (value.message.stop_reason != null) {
                                finishReason = {
                                    unified: mapAnthropicStopReason({
                                        finishReason: value.message.stop_reason,
                                        isJsonResponseFromTool
                                    }),
                                    raw: value.message.stop_reason
                                };
                            }
                            controller.enqueue({
                                type: "response-metadata",
                                id: (_g = value.message.id) != null ? _g : void 0,
                                modelId: (_h = value.message.model) != null ? _h : void 0
                            });
                            if (value.message.content != null) {
                                for(let contentIndex = 0; contentIndex < value.message.content.length; contentIndex++){
                                    const part = value.message.content[contentIndex];
                                    if (part.type === "tool_use") {
                                        const caller = part.caller;
                                        const callerInfo = caller ? {
                                            type: caller.type,
                                            toolId: "tool_id" in caller ? caller.tool_id : void 0
                                        } : void 0;
                                        controller.enqueue({
                                            type: "tool-input-start",
                                            id: part.id,
                                            toolName: part.name
                                        });
                                        const inputStr = JSON.stringify((_i = part.input) != null ? _i : {});
                                        controller.enqueue({
                                            type: "tool-input-delta",
                                            id: part.id,
                                            delta: inputStr
                                        });
                                        controller.enqueue({
                                            type: "tool-input-end",
                                            id: part.id
                                        });
                                        controller.enqueue({
                                            type: "tool-call",
                                            toolCallId: part.id,
                                            toolName: part.name,
                                            input: inputStr,
                                            ...callerInfo && {
                                                providerMetadata: {
                                                    anthropic: {
                                                        caller: callerInfo
                                                    }
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                            return;
                        }
                    case "message_delta":
                        {
                            if (value.usage.input_tokens != null && usage.input_tokens !== value.usage.input_tokens) {
                                usage.input_tokens = value.usage.input_tokens;
                            }
                            usage.output_tokens = value.usage.output_tokens;
                            if (value.usage.cache_read_input_tokens != null) {
                                usage.cache_read_input_tokens = value.usage.cache_read_input_tokens;
                            }
                            if (value.usage.cache_creation_input_tokens != null) {
                                usage.cache_creation_input_tokens = value.usage.cache_creation_input_tokens;
                            }
                            if (value.usage.iterations != null) {
                                usage.iterations = value.usage.iterations;
                            }
                            finishReason = {
                                unified: mapAnthropicStopReason({
                                    finishReason: value.delta.stop_reason,
                                    isJsonResponseFromTool
                                }),
                                raw: (_j = value.delta.stop_reason) != null ? _j : void 0
                            };
                            stopSequence = (_k = value.delta.stop_sequence) != null ? _k : null;
                            stopDetails = mapAnthropicStopDetails(value.delta.stop_details);
                            container = value.delta.container != null ? {
                                expiresAt: value.delta.container.expires_at,
                                id: value.delta.container.id,
                                skills: (_m = (_l = value.delta.container.skills) == null ? void 0 : _l.map((skill)=>({
                                        type: skill.type,
                                        skillId: skill.skill_id,
                                        version: skill.version
                                    }))) != null ? _m : null
                            } : null;
                            if (value.context_management) {
                                contextManagement = mapAnthropicResponseContextManagement(value.context_management);
                            }
                            rawUsage = {
                                ...rawUsage,
                                ...value.usage
                            };
                            return;
                        }
                    case "message_stop":
                        {
                            const anthropicMetadata = {
                                usage: rawUsage != null ? rawUsage : null,
                                stopSequence,
                                ...stopDetails != null ? {
                                    stopDetails
                                } : {},
                                iterations: usage.iterations ? usage.iterations.map((iter)=>({
                                        type: iter.type,
                                        ...iter.model != null ? {
                                            model: iter.model
                                        } : {},
                                        inputTokens: iter.input_tokens,
                                        outputTokens: iter.output_tokens,
                                        ...iter.cache_creation_input_tokens ? {
                                            cacheCreationInputTokens: iter.cache_creation_input_tokens
                                        } : {},
                                        ...iter.cache_read_input_tokens ? {
                                            cacheReadInputTokens: iter.cache_read_input_tokens
                                        } : {}
                                    })) : null,
                                container,
                                contextManagement
                            };
                            const providerMetadata = {
                                anthropic: anthropicMetadata
                            };
                            if (usedCustomProviderKey && providerOptionsName !== "anthropic") {
                                providerMetadata[providerOptionsName] = anthropicMetadata;
                            }
                            controller.enqueue({
                                type: "finish",
                                finishReason,
                                usage: convertAnthropicUsage({
                                    usage,
                                    rawUsage
                                }),
                                providerMetadata
                            });
                            return;
                        }
                    case "error":
                        {
                            controller.enqueue({
                                type: "error",
                                error: value.error
                            });
                            return;
                        }
                    default:
                        {
                            const _exhaustiveCheck = value;
                            throw new Error(`Unsupported chunk type: ${_exhaustiveCheck}`);
                        }
                }
            }
        }));
        const [streamForFirstChunk, streamForConsumer] = transformedStream.tee();
        const firstChunkReader = streamForFirstChunk.getReader();
        try {
            await firstChunkReader.read();
            let result = await firstChunkReader.read();
            if (((_a = result.value) == null ? void 0 : _a.type) === "raw") {
                result = await firstChunkReader.read();
            }
            if (((_b = result.value) == null ? void 0 : _b.type) === "error") {
                const error = result.value.error;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: error.message,
                    url,
                    requestBodyValues: body,
                    statusCode: error.type === "overloaded_error" ? 529 : 500,
                    responseHeaders,
                    responseBody: JSON.stringify(error),
                    isRetryable: error.type === "overloaded_error"
                });
            }
        } finally{
            firstChunkReader.cancel().catch(()=>{});
            firstChunkReader.releaseLock();
        }
        return {
            stream: streamForConsumer,
            request: {
                body
            },
            response: {
                headers: responseHeaders
            }
        };
    }
};
function getModelCapabilities(modelId) {
    if (modelId.includes("claude-opus-4-8") || modelId.includes("claude-opus-4-7") || modelId.includes("claude-fable-5") || modelId.includes("claude-sonnet-5")) {
        return {
            maxOutputTokens: 128e3,
            supportsStructuredOutput: true,
            supportsAdaptiveThinking: true,
            rejectsSamplingParameters: true,
            supportsXhighEffort: true,
            isKnownModel: true
        };
    } else if (modelId.includes("claude-sonnet-4-6") || modelId.includes("claude-opus-4-6")) {
        return {
            maxOutputTokens: 128e3,
            supportsStructuredOutput: true,
            supportsAdaptiveThinking: true,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: true
        };
    } else if (modelId.includes("claude-sonnet-4-5") || modelId.includes("claude-opus-4-5") || modelId.includes("claude-haiku-4-5")) {
        return {
            maxOutputTokens: 64e3,
            supportsStructuredOutput: true,
            supportsAdaptiveThinking: false,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: true
        };
    } else if (modelId.includes("claude-opus-4-1")) {
        return {
            maxOutputTokens: 32e3,
            supportsStructuredOutput: true,
            supportsAdaptiveThinking: false,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: true
        };
    } else if (modelId.includes("claude-sonnet-4-")) {
        return {
            maxOutputTokens: 64e3,
            supportsStructuredOutput: false,
            supportsAdaptiveThinking: false,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: true
        };
    } else if (modelId.includes("claude-opus-4-")) {
        return {
            maxOutputTokens: 32e3,
            supportsStructuredOutput: false,
            supportsAdaptiveThinking: false,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: true
        };
    } else if (modelId.includes("claude-3-haiku")) {
        return {
            maxOutputTokens: 4096,
            supportsStructuredOutput: false,
            supportsAdaptiveThinking: false,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: true
        };
    } else {
        return {
            maxOutputTokens: 4096,
            supportsStructuredOutput: false,
            supportsAdaptiveThinking: false,
            rejectsSamplingParameters: false,
            supportsXhighEffort: false,
            isKnownModel: false
        };
    }
}
function hasWebTool20260209WithoutCodeExecution(tools) {
    if (!tools) {
        return false;
    }
    let hasWebTool20260209 = false;
    let hasCodeExecutionTool = false;
    for (const tool of tools){
        if ("type" in tool && (tool.type === "web_fetch_20260209" || tool.type === "web_search_20260209")) {
            hasWebTool20260209 = true;
            continue;
        }
        if (tool.name === "code_execution") {
            hasCodeExecutionTool = true;
            break;
        }
    }
    return hasWebTool20260209 && !hasCodeExecutionTool;
}
function resolveAnthropicReasoningConfig({ reasoning, supportsAdaptiveThinking, supportsXhighEffort, maxOutputTokensForModel, warnings }) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCustomReasoning"])(reasoning)) {
        return void 0;
    }
    if (reasoning === "none") {
        return {
            thinking: {
                type: "disabled"
            }
        };
    }
    if (supportsAdaptiveThinking) {
        const effort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapReasoningToProviderEffort"])({
            reasoning,
            effortMap: {
                minimal: "low",
                low: "low",
                medium: "medium",
                high: "high",
                xhigh: supportsXhighEffort ? "xhigh" : "max"
            },
            warnings
        });
        return {
            thinking: {
                type: "adaptive"
            },
            effort
        };
    }
    const budgetTokens = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["mapReasoningToProviderBudget"])({
        reasoning,
        maxOutputTokens: maxOutputTokensForModel,
        maxReasoningBudget: maxOutputTokensForModel,
        warnings
    });
    if (budgetTokens == null) {
        return void 0;
    }
    return {
        thinking: {
            type: "enabled",
            budgetTokens
        }
    };
}
function mapAnthropicResponseContextManagement(contextManagement) {
    return contextManagement ? {
        appliedEdits: contextManagement.applied_edits.map((edit)=>{
            const strategy = edit.type;
            switch(strategy){
                case "clear_tool_uses_20250919":
                    return {
                        type: edit.type,
                        clearedToolUses: edit.cleared_tool_uses,
                        clearedInputTokens: edit.cleared_input_tokens
                    };
                case "clear_thinking_20251015":
                    return {
                        type: edit.type,
                        clearedThinkingTurns: edit.cleared_thinking_turns,
                        clearedInputTokens: edit.cleared_input_tokens
                    };
                case "compact_20260112":
                    return {
                        type: edit.type
                    };
            }
        }).filter((edit)=>edit !== void 0)
    } : null;
}
function mapAnthropicStopDetails(stopDetails) {
    if (stopDetails == null) {
        return void 0;
    }
    return {
        type: stopDetails.type,
        ...stopDetails.category != null ? {
            category: stopDetails.category
        } : {},
        ...stopDetails.explanation != null ? {
            explanation: stopDetails.explanation
        } : {},
        ...stopDetails.recommended_model != null ? {
            recommendedModel: stopDetails.recommended_model
        } : {}
    };
}
;
;
var bash_20241022InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        restart: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
    })));
var bash_20241022_internal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.bash_20241022",
    inputSchema: bash_20241022InputSchema
});
function bash_20241022(options = {}) {
    const { execute, ...rest } = options;
    if (execute === void 0) {
        return bash_20241022_internal({
            ...rest,
            execute: async ({ command }, { abortSignal, experimental_sandbox: sandbox })=>{
                if (!sandbox) {
                    throw new Error("Sandbox session is not available");
                }
                return await sandbox.run({
                    command,
                    abortSignal
                });
            }
        });
    }
    return bash_20241022_internal({
        ...rest,
        ...execute === null ? {} : {
            execute
        }
    });
}
;
;
var bash_20250124InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        restart: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
    })));
var bash_20250124_internal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.bash_20250124",
    inputSchema: bash_20250124InputSchema
});
function bash_20250124(options = {}) {
    const { execute, ...rest } = options;
    if (execute === void 0) {
        return bash_20250124_internal({
            ...rest,
            execute: async ({ command }, { abortSignal, experimental_sandbox: sandbox })=>{
                if (!sandbox) {
                    throw new Error("Sandbox session is not available");
                }
                return await sandbox.run({
                    command,
                    abortSignal
                });
            }
        });
    }
    return bash_20250124_internal({
        ...rest,
        ...execute === null ? {} : {
            execute
        }
    });
}
;
;
var computer_20241022InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "key",
            "type",
            "mouse_move",
            "left_click",
            "left_click_drag",
            "right_click",
            "middle_click",
            "double_click",
            "screenshot",
            "cursor_position"
        ]),
        coordinate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).optional(),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })));
var computer_20241022 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.computer_20241022",
    inputSchema: computer_20241022InputSchema
});
;
;
var computer_20250124InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "key",
            "hold_key",
            "type",
            "cursor_position",
            "mouse_move",
            "left_mouse_down",
            "left_mouse_up",
            "left_click",
            "left_click_drag",
            "right_click",
            "middle_click",
            "double_click",
            "triple_click",
            "scroll",
            "wait",
            "screenshot"
        ]),
        coordinate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
        ]).optional(),
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        scroll_amount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        scroll_direction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "up",
            "down",
            "left",
            "right"
        ]).optional(),
        start_coordinate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
        ]).optional(),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })));
var computer_20250124 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.computer_20250124",
    inputSchema: computer_20250124InputSchema
});
;
;
var computer_20251124InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "key",
            "hold_key",
            "type",
            "cursor_position",
            "mouse_move",
            "left_mouse_down",
            "left_mouse_up",
            "left_click",
            "left_click_drag",
            "right_click",
            "middle_click",
            "double_click",
            "triple_click",
            "scroll",
            "wait",
            "screenshot",
            "zoom"
        ]),
        coordinate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
        ]).optional(),
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
        ]).optional(),
        scroll_amount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        scroll_direction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "up",
            "down",
            "left",
            "right"
        ]).optional(),
        start_coordinate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()
        ]).optional(),
        text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })));
var computer_20251124 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.computer_20251124",
    inputSchema: computer_20251124InputSchema
});
;
;
var memory_20250818InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("command", [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("view"),
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            view_range: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].tuple([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
            ]).optional()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("create"),
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("str_replace"),
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("insert"),
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            insert_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
            insert_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("delete"),
            path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("rename"),
            old_path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            new_path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    ])));
var memory_20250818 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.memory_20250818",
    inputSchema: memory_20250818InputSchema
});
;
;
var textEditor_20241022InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "view",
            "create",
            "str_replace",
            "insert",
            "undo_edit"
        ]),
        path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        view_range: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).optional()
    })));
var textEditor_20241022 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.text_editor_20241022",
    inputSchema: textEditor_20241022InputSchema
});
;
;
var textEditor_20250124InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "view",
            "create",
            "str_replace",
            "insert",
            "undo_edit"
        ]),
        path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        view_range: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).optional()
    })));
var textEditor_20250124 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.text_editor_20250124",
    inputSchema: textEditor_20250124InputSchema
});
;
;
var textEditor_20250429InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "view",
            "create",
            "str_replace",
            "insert"
        ]),
        path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        file_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_line: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
        new_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        insert_text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        old_str: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        view_range: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).optional()
    })));
var textEditor_20250429 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderDefinedToolFactory"])({
    id: "anthropic.text_editor_20250429",
    inputSchema: textEditor_20250429InputSchema
});
;
;
var toolSearchBm25_20251119OutputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool_reference"),
        toolName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }))));
var toolSearchBm25_20251119InputSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        /**
       * A natural language query to search for tools.
       * Claude will use BM25 text search to find relevant tools.
       */ query: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        /**
       * Maximum number of tools to return. Optional.
       */ limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })));
var factory11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createProviderExecutedToolFactory"])({
    id: "anthropic.tool_search_bm25_20251119",
    inputSchema: toolSearchBm25_20251119InputSchema,
    outputSchema: toolSearchBm25_20251119OutputSchema,
    supportsDeferredResults: true
});
var toolSearchBm25_20251119 = (args = {})=>{
    return factory11(args);
};
// src/anthropic-tools.ts
var anthropicTools = {
    /**
   * Pairs a faster executor model with a higher-intelligence advisor model
   * that provides strategic guidance mid-generation.
   *
   * The advisor lets a faster, lower-cost executor model consult a
   * higher-intelligence advisor model server-side. The advisor reads the
   * executor's full transcript and produces a plan or course correction;
   * the executor continues with the task, informed by the advice. All of
   * this happens inside a single `/v1/messages` request.
   *
   * Beta header `advisor-tool-2026-03-01` is added automatically when this
   * tool is included.
   *
   * Multi-turn conversations: pass the full assistant content (including
   * `advisor_tool_result` blocks) back to the API on subsequent turns. If
   * you omit the advisor tool from `tools` on a follow-up turn while the
   * message history still contains `advisor_tool_result` blocks, the API
   * returns a `400 invalid_request_error`.
   *
   * Supported executor models: Claude Haiku 4.5, Sonnet 4.6, Opus 4.6,
   * Opus 4.7. The advisor must be at least as capable as the executor.
   *
   * @param model - The advisor model ID (required), e.g. `"claude-opus-4-8"`.
   * @param maxUses - Maximum advisor calls per request (per-request cap).
   * @param caching - Enables prompt caching for the advisor's transcript
   * across calls within a conversation. Worthwhile from ~3 advisor calls
   * per conversation.
   */ advisor_20260301,
    /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   */ bash_20241022,
    /**
   * The bash tool enables Claude to execute shell commands in a persistent bash session,
   * allowing system operations, script execution, and command-line automation.
   *
   * Image results are supported.
   */ bash_20250124,
    /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   */ codeExecution_20250522,
    /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run both Python and Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   *
   * This is the latest version with enhanced Bash support and file operations.
   */ codeExecution_20250825,
    /**
   * Claude can analyze data, create visualizations, perform complex calculations,
   * run system commands, create and edit files, and process uploaded files directly within
   * the API conversation.
   *
   * The code execution tool allows Claude to run both Python and Bash commands and manipulate files,
   * including writing code, in a secure, sandboxed environment.
   *
   * This is the recommended version. Does not require a beta header.
   *
   * Supported models: Claude Opus 4.6, Sonnet 4.6, Sonnet 4.5, Opus 4.5
   */ codeExecution_20260120,
    /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * Image results are supported.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */ computer_20241022,
    /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * Image results are supported.
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   */ computer_20250124,
    /**
   * Claude can interact with computer environments through the computer use tool, which
   * provides screenshot capabilities and mouse/keyboard control for autonomous desktop interaction.
   *
   * This version adds the zoom action for detailed screen region inspection.
   *
   * Image results are supported.
   *
   * Supported models: Claude Opus 4.5
   *
   * @param displayWidthPx - The width of the display being controlled by the model in pixels.
   * @param displayHeightPx - The height of the display being controlled by the model in pixels.
   * @param displayNumber - The display number to control (only relevant for X11 environments). If specified, the tool will be provided a display number in the tool definition.
   * @param enableZoom - Enable zoom action. Set to true to allow Claude to zoom into specific screen regions. Default: false.
   */ computer_20251124,
    /**
   * The memory tool enables Claude to store and retrieve information across conversations through a memory file directory.
   * Claude can create, read, update, and delete files that persist between sessions,
   * allowing it to build knowledge over time without keeping everything in the context window.
   * The memory tool operates client-side—you control where and how the data is stored through your own infrastructure.
   *
   * Supported models: Claude Sonnet 4.5, Claude Sonnet 4, Claude Opus 4.1, Claude Opus 4.
   */ memory_20250818,
    /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.5
   */ textEditor_20241022,
    /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Supported models: Claude Sonnet 3.7
   */ textEditor_20250124,
    /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Note: This version does not support the "undo_edit" command.
   *
   * @deprecated Use textEditor_20250728 instead
   */ textEditor_20250429,
    /**
   * Claude can use an Anthropic-defined text editor tool to view and modify text files,
   * helping you debug, fix, and improve your code or other text documents. This allows Claude
   * to directly interact with your files, providing hands-on assistance rather than just suggesting changes.
   *
   * Note: This version does not support the "undo_edit" command and adds optional max_characters parameter.
   *
   * Supported models: Claude Sonnet 4, Opus 4, and Opus 4.1
   *
   * @param maxCharacters - Optional maximum number of characters to view in the file
   */ textEditor_20250728,
    /**
   * Creates a web fetch tool that gives Claude direct access to real-time web content.
   *
   * @param maxUses - The max_uses parameter limits the number of web fetches performed
   * @param allowedDomains - Only fetch from these domains
   * @param blockedDomains - Never fetch from these domains
   * @param citations - Unlike web search where citations are always enabled, citations are optional for web fetch. Set "citations": {"enabled": true} to enable Claude to cite specific passages from fetched documents.
   * @param maxContentTokens - The max_content_tokens parameter limits the amount of content that will be included in the context.
   */ webFetch_20250910,
    /**
   * Creates a web fetch tool that gives Claude direct access to real-time web content.
   *
   * @param maxUses - The max_uses parameter limits the number of web fetches performed
   * @param allowedDomains - Only fetch from these domains
   * @param blockedDomains - Never fetch from these domains
   * @param citations - Unlike web search where citations are always enabled, citations are optional for web fetch. Set "citations": {"enabled": true} to enable Claude to cite specific passages from fetched documents.
   * @param maxContentTokens - The max_content_tokens parameter limits the amount of content that will be included in the context.
   */ webFetch_20260209,
    /**
   * Creates a web search tool that gives Claude direct access to real-time web content.
   *
   * @param maxUses - Maximum number of web searches Claude can perform during the conversation.
   * @param allowedDomains - Optional list of domains that Claude is allowed to search.
   * @param blockedDomains - Optional list of domains that Claude should avoid when searching.
   * @param userLocation - Optional user location information to provide geographically relevant search results.
   */ webSearch_20250305,
    /**
   * Creates a web search tool that gives Claude direct access to real-time web content.
   *
   * @param maxUses - Maximum number of web searches Claude can perform during the conversation.
   * @param allowedDomains - Optional list of domains that Claude is allowed to search.
   * @param blockedDomains - Optional list of domains that Claude should avoid when searching.
   * @param userLocation - Optional user location information to provide geographically relevant search results.
   */ webSearch_20260209,
    /**
   * Creates a tool search tool that uses regex patterns to find tools.
   *
   * The tool search tool enables Claude to work with hundreds or thousands of tools
   * by dynamically discovering and loading them on-demand. Instead of loading all
   * tool definitions into the context window upfront, Claude searches your tool
   * catalog and loads only the tools it needs.
   *
   * Use `providerOptions: { anthropic: { deferLoading: true } }` on other tools
   * to mark them for deferred loading.
   *
   * Supported models: Claude Opus 4.5, Claude Sonnet 4.5
   */ toolSearchRegex_20251119,
    /**
   * Creates a tool search tool that uses BM25 (natural language) to find tools.
   *
   * The tool search tool enables Claude to work with hundreds or thousands of tools
   * by dynamically discovering and loading them on-demand. Instead of loading all
   * tool definitions into the context window upfront, Claude searches your tool
   * catalog and loads only the tools it needs.
   *
   * Use `providerOptions: { anthropic: { deferLoading: true } }` on other tools
   * to mark them for deferred loading.
   *
   * Supported models: Claude Opus 4.5, Claude Sonnet 4.5
   */ toolSearchBm25_20251119
};
;
;
;
var anthropicSkillResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        display_title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        latest_version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        created_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        updated_at: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })));
var anthropicSkillVersionListResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    })));
var anthropicSkillVersionResponseSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["lazySchema"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["zodSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        skill_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish(),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullish()
    })));
// src/skills/anthropic-skills.ts
var AnthropicSkills = class {
    constructor(config){
        this.config = config;
        this.specificationVersion = "v4";
    }
    get provider() {
        return this.config.provider;
    }
    async getHeaders() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineHeaders"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolve"])(this.config.headers), {
            "anthropic-beta": "skills-2025-10-02"
        });
    }
    async fetchVersionMetadata({ skillId, version, headers }) {
        const { value: versionResponse } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFromApi"])({
            url: `${this.config.baseURL}/skills/${skillId}/versions/${version}`,
            validateUrl: false,
            headers,
            failedResponseHandler: anthropicFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(anthropicSkillVersionResponseSchema),
            fetch: this.config.fetch
        });
        return {
            ...versionResponse.name != null ? {
                name: versionResponse.name
            } : {},
            ...versionResponse.description != null ? {
                description: versionResponse.description
            } : {}
        };
    }
    async uploadSkill(params) {
        var _a, _b;
        const warnings = [];
        const formData = new FormData();
        if (params.displayTitle != null) {
            formData.append("display_title", params.displayTitle);
        }
        for (const file of params.files){
            const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertInlineFileDataToUint8Array"])(file.data);
            formData.append("files[]", new Blob([
                content
            ]), file.path);
        }
        const headers = await this.getHeaders();
        const { value: response } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["postFormDataToApi"])({
            url: `${this.config.baseURL}/skills`,
            headers,
            formData,
            failedResponseHandler: anthropicFailedResponseHandler,
            successfulResponseHandler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createJsonResponseHandler"])(anthropicSkillResponseSchema),
            fetch: this.config.fetch
        });
        const versionMetadata = response.latest_version != null ? await this.fetchVersionMetadata({
            skillId: response.id,
            version: response.latest_version,
            headers
        }) : {};
        const name = (_a = versionMetadata.name) != null ? _a : response.name;
        const description = (_b = versionMetadata.description) != null ? _b : response.description;
        return {
            providerReference: {
                anthropic: response.id
            },
            ...response.display_title != null ? {
                displayTitle: response.display_title
            } : {},
            ...name != null ? {
                name
            } : {},
            ...description != null ? {
                description
            } : {},
            ...response.latest_version != null ? {
                latestVersion: response.latest_version
            } : {},
            providerMetadata: {
                anthropic: {
                    ...response.source != null ? {
                        source: response.source
                    } : {},
                    ...response.created_at != null ? {
                        createdAt: response.created_at
                    } : {},
                    ...response.updated_at != null ? {
                        updatedAt: response.updated_at
                    } : {}
                }
            },
            warnings
        };
    }
};
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "4.0.15" : "TURBOPACK unreachable";
// src/anthropic-provider.ts
var ANTHROPIC_API_URL = "https://api.anthropic.com";
var ANTHROPIC_API_VERSIONED_URL = `${ANTHROPIC_API_URL}/v1`;
function normalizeBaseURL(baseURL) {
    const baseURLWithoutTrailingSlash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withoutTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["validateBaseURL"])(baseURL));
    return baseURLWithoutTrailingSlash === ANTHROPIC_API_URL ? ANTHROPIC_API_VERSIONED_URL : baseURLWithoutTrailingSlash;
}
function createAnthropic(options = {}) {
    var _a, _b;
    const baseURL = (_a = normalizeBaseURL((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadOptionalSetting"])({
        settingValue: options.baseURL,
        environmentVariableName: "ANTHROPIC_BASE_URL"
    }))) != null ? _a : ANTHROPIC_API_VERSIONED_URL;
    const providerName = (_b = options.name) != null ? _b : "anthropic.messages";
    if (options.apiKey && options.authToken) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "apiKey/authToken",
            message: "Both apiKey and authToken were provided. Please use only one authentication method."
        });
    }
    const getHeaders = ()=>{
        const authHeaders = options.authToken ? {
            Authorization: `Bearer ${options.authToken}`
        } : {
            "x-api-key": (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadApiKey"])({
                apiKey: options.apiKey,
                environmentVariableName: "ANTHROPIC_API_KEY",
                description: "Anthropic"
            })
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withUserAgentSuffix"])({
            "anthropic-version": "2023-06-01",
            ...authHeaders,
            ...options.headers
        }, `ai-sdk/anthropic/${VERSION}`);
    };
    const createChatModel = (modelId)=>{
        var _a2;
        return new AnthropicLanguageModel(modelId, {
            provider: providerName,
            baseURL,
            headers: getHeaders,
            fetch: options.fetch,
            generateId: (_a2 = options.generateId) != null ? _a2 : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Jimmy$2f$Project$2f$Vibe__Hatch__Code$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"],
            supportedUrls: ()=>({
                    "image/*": [
                        /^https?:\/\/.*$/
                    ],
                    "application/pdf": [
                        /^https?:\/\/.*$/
                    ]
                })
        });
    };
    const createSkills = ()=>new AnthropicSkills({
            provider: `${providerName.replace(".messages", "")}.skills`,
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        });
    const provider = function(modelId) {
        if (new.target) {
            throw new Error("The Anthropic model function cannot be called with the new keyword.");
        }
        return createChatModel(modelId);
    };
    provider.specificationVersion = "v4";
    provider.languageModel = createChatModel;
    provider.chat = createChatModel;
    provider.messages = createChatModel;
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
    provider.files = ()=>new AnthropicFiles({
            provider: providerName,
            baseURL,
            headers: getHeaders,
            fetch: options.fetch
        });
    provider.skills = createSkills;
    provider.tools = anthropicTools;
    return provider;
}
var anthropic = createAnthropic();
// src/forward-anthropic-container-id-from-last-step.ts
function forwardAnthropicContainerIdFromLastStep({ steps }) {
    var _a, _b, _c;
    for(let i = steps.length - 1; i >= 0; i--){
        const containerId = (_c = (_b = (_a = steps[i].providerMetadata) == null ? void 0 : _a.anthropic) == null ? void 0 : _b.container) == null ? void 0 : _c.id;
        if (containerId) {
            return {
                providerOptions: {
                    anthropic: {
                        container: {
                            id: containerId
                        }
                    }
                }
            };
        }
    }
    return void 0;
}
;
}),
];

//# sourceMappingURL=0dra_%40ai-sdk_anthropic_dist_index_03ogsh8.js.map