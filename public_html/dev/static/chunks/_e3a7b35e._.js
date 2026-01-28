(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/Input/Input.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "Input-module__Nmke_G__error",
  "input": "Input-module__Nmke_G__input",
  "inputWrapper": "Input-module__Nmke_G__inputWrapper",
});
}),
"[project]/components/ui/Input/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/Input/Input.module.css [app-client] (css module)");
;
;
;
;
function Input(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "0478af66aabc58955598a50c131bdd417ded3cd54fb803fd21bc909541a08f9e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0478af66aabc58955598a50c131bdd417ded3cd54fb803fd21bc909541a08f9e";
    }
    let className;
    let error;
    let props;
    if ($[1] !== t0) {
        ({ className, error, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = error;
        $[4] = props;
    } else {
        className = $[2];
        error = $[3];
        props = $[4];
    }
    let t1;
    if ($[5] !== className || $[6] !== error) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error]: error
        });
        $[5] = className;
        $[6] = error;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/Input/Input.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    let t3;
    if ($[11] !== error) {
        t3 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: error.message
        }, void 0, false, {
            fileName: "[project]/components/ui/Input/Input.tsx",
            lineNumber: 58,
            columnNumber: 19
        }, this);
        $[11] = error;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    let t4;
    if ($[13] !== t2 || $[14] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2f$Input$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Input/Input.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    return t4;
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button/Button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Button-module__LCT47W__button",
  "ghost": "Button-module__LCT47W__ghost",
  "primary": "Button-module__LCT47W__primary",
});
}),
"[project]/components/ui/Button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/Button/Button.module.css [app-client] (css module)");
;
;
;
;
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "f55ef0fe2fbdaeda3061a22bd2f880cef57d614b0d82eb61785c866603583197") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f55ef0fe2fbdaeda3061a22bd2f880cef57d614b0d82eb61785c866603583197";
    }
    let appearance;
    let children;
    let props;
    if ($[1] !== t0) {
        ({ appearance, children, ...props } = t0);
        $[1] = t0;
        $[2] = appearance;
        $[3] = children;
        $[4] = props;
    } else {
        appearance = $[2];
        children = $[3];
        props = $[4];
    }
    const t1 = appearance === "primary";
    const t2 = appearance === "ghost";
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary]: t1,
            [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ghost]: t2
        });
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== children || $[9] !== props || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t3,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Button/Button.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = props;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Search/search-icon.svg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _path;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgSearchIcon = function SvgSearchIcon(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 15 15"
    }, props), _path || (_path = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "#fff",
        d: "M14.772 13.663 11.074 9.95a5.9 5.9 0 0 0 1.472-3.894C12.546 2.716 9.732 0 6.273 0S0 2.717 0 6.056s2.814 6.057 6.273 6.057a6.36 6.36 0 0 0 3.594-1.096l3.726 3.74a.83.83 0 0 0 .59.243.83.83 0 0 0 .566-.22.77.77 0 0 0 .023-1.117M6.272 1.58c2.558 0 4.637 2.008 4.637 4.476s-2.08 4.477-4.636 4.477-4.637-2.008-4.637-4.477c0-2.468 2.08-4.476 4.637-4.476"
    })));
};
_c = SvgSearchIcon;
const __TURBOPACK__default__export__ = SvgSearchIcon;
var _c;
__turbopack_context__.k.register(_c, "SvgSearchIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Search/Search.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Search-module__BMCBDq__button",
  "input": "Search-module__BMCBDq__input",
  "search": "Search-module__BMCBDq__search",
});
}),
"[project]/components/ui/Search/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Search$2f$search$2d$icon$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Search/search-icon.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Search$2f$Search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/Search/Search.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Search(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "07e168e5ab0330700870d44581c2a8f3d90e8c9fb8c5d030cc99ed452d406a5b") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "07e168e5ab0330700870d44581c2a8f3d90e8c9fb8c5d030cc99ed452d406a5b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[4] !== router || $[5] !== search) {
        t1 = ({
            "Search[goToSearch]": ()=>{
                router.push(`/search?q=${search}`);
            }
        })["Search[goToSearch]"];
        $[4] = router;
        $[5] = search;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    const goToSearch = t1;
    let t2;
    if ($[7] !== goToSearch) {
        t2 = ({
            "Search[handleKewDown]": (e)=>{
                if (e.key === "Enter") {
                    goToSearch();
                }
            }
        })["Search[handleKewDown]"];
        $[7] = goToSearch;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const handleKewDown = t2;
    let t3;
    if ($[9] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Search$2f$Search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search);
        $[9] = className;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Search[<Input>.onChange]": (e_0)=>setSearch(e_0.target.value)
        })["Search[<Input>.onChange]"];
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== handleKewDown || $[13] !== search) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            placeholder: "\u041F\u043E\u0438\u0441\u043A...",
            value: search,
            onChange: t4,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Search$2f$Search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
            onKeyDown: handleKewDown
        }, void 0, false, {
            fileName: "[project]/components/ui/Search/Search.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[12] = handleKewDown;
        $[13] = search;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Search$2f$search$2d$icon$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/ui/Search/Search.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== goToSearch) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            appearance: "primary",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Search$2f$Search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            onClick: goToSearch,
            children: t6
        }, void 0, false, {
            fileName: "[project]/components/ui/Search/Search.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[16] = goToSearch;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== props || $[19] !== t3 || $[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            ...props,
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Search/Search.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        $[18] = props;
        $[19] = t3;
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    return t8;
}
_s(Search, "N9tP0MPL4qItVfAzW5Hg4coRsTs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/usePathname.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useAppPathname
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useAppPathname() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "74df480fdc9f38e447d8363b3b0da9aa84b45c71a6c741ddf316576d950d9784") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "74df480fdc9f38e447d8363b3b0da9aa84b45c71a6c741ddf316576d950d9784";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
}
_s(useAppPathname, "wVXOWZKWdId76kQQO0KX6Oz3JDA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "thirdLevelItemActive": "ThirdLevelMenu-module__EI5KIG__thirdLevelItemActive",
  "thirdLevelWrapper": "ThirdLevelMenu-module__EI5KIG__thirdLevelWrapper",
  "thirdMenuItem": "ThirdLevelMenu-module__EI5KIG__thirdMenuItem",
});
}),
"[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThirdLevelMenu",
    ()=>ThirdLevelMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePathname$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePathname.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThirdLevelMenu$2f$ThirdLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ThirdLevelMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "4d61876092939f655dd926a5aed7834b44505d3be99039bd25d84ce57e1004e9") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d61876092939f655dd926a5aed7834b44505d3be99039bd25d84ce57e1004e9";
    }
    const { isSecondOpened, pages, route } = t0;
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePathname$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            visible: {
                opacity: 1,
                height: 29
            },
            hidden: {
                opacity: 0,
                height: 0
            }
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const variants = t1;
    let t2;
    if ($[2] !== isSecondOpened || $[3] !== pages || $[4] !== path || $[5] !== route) {
        let t3;
        if ($[7] !== isSecondOpened || $[8] !== path || $[9] !== route) {
            t3 = ({
                "ThirdLevelMenu[pages.map()]": (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: variants,
                        animate: isSecondOpened ? "visible" : "hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${route}/${p.alias}`,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThirdLevelMenu$2f$ThirdLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thirdMenuItem, {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThirdLevelMenu$2f$ThirdLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thirdLevelItemActive]: `/${route}/${p.alias}` === path
                            }),
                            children: p.category
                        }, void 0, false, {
                            fileName: "[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.tsx",
                            lineNumber: 51,
                            columnNumber: 137
                        }, this)
                    }, p._id, false, {
                        fileName: "[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.tsx",
                        lineNumber: 51,
                        columnNumber: 45
                    }, this)
            })["ThirdLevelMenu[pages.map()]"];
            $[7] = isSecondOpened;
            $[8] = path;
            $[9] = route;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        t2 = pages.map(t3);
        $[2] = isSecondOpened;
        $[3] = pages;
        $[4] = path;
        $[5] = route;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[11] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThirdLevelMenu$2f$ThirdLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thirdLevelWrapper,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[11] = t2;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    return t3;
}
_s(ThirdLevelMenu, "k3WhuB4CG3uq9jQibw+p6kwzEYA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePathname$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ThirdLevelMenu;
var _c;
__turbopack_context__.k.register(_c, "ThirdLevelMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/SecondLevelMenu/SecondLevelMenu.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "secondLevelBlock": "SecondLevelMenu-module__cu1oAq__secondLevelBlock",
  "secondLevelBlockOpened": "SecondLevelMenu-module__cu1oAq__secondLevelBlockOpened",
  "secondLevelModule": "SecondLevelMenu-module__cu1oAq__secondLevelModule",
  "secondLevelWrapper": "SecondLevelMenu-module__cu1oAq__secondLevelWrapper",
  "secondMenuItem": "SecondLevelMenu-module__cu1oAq__secondMenuItem",
});
}),
"[project]/components/layout/SecondLevelMenu/SecondLevelMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecondLevelMenu",
    ()=>SecondLevelMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePathname$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/usePathname.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThirdLevelMenu$2f$ThirdLevelMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThirdLevelMenu/ThirdLevelMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SecondLevelMenu$2f$SecondLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/layout/SecondLevelMenu/SecondLevelMenu.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SecondLevelMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "3377d2c8293012ad2b3919ea54332802b3666e04db2d1ed13f3e82a742da11b5") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3377d2c8293012ad2b3919ea54332802b3666e04db2d1ed13f3e82a742da11b5";
    }
    const { menu, menuItem } = t0;
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePathname$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    let t1;
    if ($[1] !== path) {
        t1 = path.split("/");
        $[1] = path;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const activeAlias = t1[2];
    let t2;
    if ($[3] !== activeAlias || $[4] !== menu) {
        t2 = ({
            "SecondLevelMenu[useState()]": ()=>menu.map({
                    "SecondLevelMenu[useState() > menu.map()]": (m)=>({
                            ...m,
                            isOpened: m.pages.some({
                                "SecondLevelMenu[useState() > menu.map() > m.pages.some()]": (p)=>p.alias === activeAlias
                            }["SecondLevelMenu[useState() > menu.map() > m.pages.some()]"])
                        })
                }["SecondLevelMenu[useState() > menu.map()]"])
        })["SecondLevelMenu[useState()]"];
        $[3] = activeAlias;
        $[4] = menu;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "SecondLevelMenu[openSecondLevel]": (secondCategory)=>{
                setItems({
                    "SecondLevelMenu[openSecondLevel > setItems()]": (prev)=>{
                        const current = prev.find({
                            "SecondLevelMenu[openSecondLevel > setItems() > prev.find()]": (m_0)=>m_0._id.secondCategory === secondCategory
                        }["SecondLevelMenu[openSecondLevel > setItems() > prev.find()]"]);
                        const willOpen = !(current?.isOpened ?? false);
                        return prev.map({
                            "SecondLevelMenu[openSecondLevel > setItems() > prev.map()]": (m_1)=>m_1._id.secondCategory === secondCategory ? {
                                    ...m_1,
                                    isOpened: willOpen
                                } : {
                                    ...m_1,
                                    isOpened: false
                                }
                        }["SecondLevelMenu[openSecondLevel > setItems() > prev.map()]"]);
                    }
                }["SecondLevelMenu[openSecondLevel > setItems()]"]);
            }
        })["SecondLevelMenu[openSecondLevel]"];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const openSecondLevel = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            visible: {
                marginBottom: 20,
                height: "auto",
                transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.01
                }
            },
            hidden: {
                marginBottom: 0,
                height: 0
            }
        };
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const variants = t4;
    let t5;
    if ($[8] !== items || $[9] !== menuItem) {
        let t6;
        if ($[11] !== menuItem) {
            t6 = ({
                "SecondLevelMenu[items.map()]": (menuItemSecond)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SecondLevelMenu$2f$SecondLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondLevelModule,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: {
                                    "SecondLevelMenu[items.map() > <div>.onClick]": ()=>openSecondLevel(menuItemSecond._id.secondCategory)
                                }["SecondLevelMenu[items.map() > <div>.onClick]"],
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SecondLevelMenu$2f$SecondLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondMenuItem,
                                children: menuItemSecond._id.secondCategory
                            }, void 0, false, {
                                fileName: "[project]/components/layout/SecondLevelMenu/SecondLevelMenu.tsx",
                                lineNumber: 110,
                                columnNumber: 141
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                variants: variants,
                                initial: "hidden",
                                animate: menuItemSecond.isOpened ? "visible" : "hidden",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SecondLevelMenu$2f$SecondLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondLevelBlock, {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SecondLevelMenu$2f$SecondLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondLevelBlockOpened]: menuItemSecond.isOpened
                                }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThirdLevelMenu$2f$ThirdLevelMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThirdLevelMenu"], {
                                    isSecondOpened: menuItemSecond.isOpened,
                                    pages: menuItemSecond.pages,
                                    route: menuItem.route
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/SecondLevelMenu/SecondLevelMenu.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/SecondLevelMenu/SecondLevelMenu.tsx",
                                lineNumber: 112,
                                columnNumber: 137
                            }, this)
                        ]
                    }, menuItemSecond._id.secondCategory, true, {
                        fileName: "[project]/components/layout/SecondLevelMenu/SecondLevelMenu.tsx",
                        lineNumber: 110,
                        columnNumber: 59
                    }, this)
            })["SecondLevelMenu[items.map()]"];
            $[11] = menuItem;
            $[12] = t6;
        } else {
            t6 = $[12];
        }
        t5 = items.map(t6);
        $[8] = items;
        $[9] = menuItem;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SecondLevelMenu$2f$SecondLevelMenu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondLevelWrapper,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/layout/SecondLevelMenu/SecondLevelMenu.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_s(SecondLevelMenu, "HPamjKElnTaPhYOWvU8BLGBfHgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$usePathname$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SecondLevelMenu;
var _c;
__turbopack_context__.k.register(_c, "SecondLevelMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useScrollY.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollY",
    ()=>useScrollY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useScrollY = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "7ebbd45c609a37a5741cfe2381124375368c8d616d74c29a69fa759ef041f86b") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ebbd45c609a37a5741cfe2381124375368c8d616d74c29a69fa759ef041f86b";
    }
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleScroll = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ()=>window.removeEventListener("scroll", handleScroll);
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return scrollY;
};
_s(useScrollY, "eTR5W6wH45bVtWbD0ho0jkNrbDM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ButtonIcon/ButtonIcon.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "ButtonIcon-module__rJVAtW__button",
  "primary": "ButtonIcon-module__rJVAtW__primary",
  "white": "ButtonIcon-module__rJVAtW__white",
});
}),
"[project]/components/ui/ButtonIcon/up.svg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _rect, _path;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgUp = function SvgUp(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 21 13"
    }, props), _rect || (_rect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 14,
        height: 3,
        y: 9.9,
        fill: "#fff",
        rx: 1.5,
        transform: "rotate(-45 0 9.9)"
    })), _path || (_path = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("path", {
        fill: "#fff",
        d: "M9.06 1.232a1.5 1.5 0 0 1 2.122 0L18.96 9.01a1.5 1.5 0 1 1-2.121 2.122L9.06 3.354a1.5 1.5 0 0 1 0-2.122"
    })));
};
_c = SvgUp;
const __TURBOPACK__default__export__ = SvgUp;
var _c;
__turbopack_context__.k.register(_c, "SvgUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ButtonIcon/close.svg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _rect, _rect2;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgClose = function SvgClose(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 19 19"
    }, props), _rect || (_rect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 23,
        height: 3,
        y: 16.51,
        fill: "#7653FC",
        rx: 1.5,
        transform: "rotate(-45 0 16.51)"
    })), _rect2 || (_rect2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 23,
        height: 3,
        x: 2.253,
        fill: "#7653FC",
        rx: 1.5,
        transform: "rotate(45 2.253 0)"
    })));
};
_c = SvgClose;
const __TURBOPACK__default__export__ = SvgClose;
var _c;
__turbopack_context__.k.register(_c, "SvgClose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ButtonIcon/burger.svg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _rect, _rect2, _rect3;
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
var SvgBurger = function SvgBurger(props) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        fill: "none",
        viewBox: "0 0 20 17"
    }, props), _rect || (_rect = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 20,
        height: 3,
        fill: "#7653FC",
        rx: 1.5
    })), _rect2 || (_rect2 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 20,
        height: 3,
        y: 7,
        fill: "#7653FC",
        rx: 1.5
    })), _rect3 || (_rect3 = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        width: 20,
        height: 3,
        y: 14,
        fill: "#7653FC",
        rx: 1.5
    })));
};
_c = SvgBurger;
const __TURBOPACK__default__export__ = SvgBurger;
var _c;
__turbopack_context__.k.register(_c, "SvgBurger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ButtonIcon/ButtonIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonIcon",
    ()=>ButtonIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$ButtonIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/ButtonIcon/ButtonIcon.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$up$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ButtonIcon/up.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$close$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ButtonIcon/close.svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$burger$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ButtonIcon/burger.svg.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const icons = {
    upIcon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$up$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    closeIcon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$close$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    burgerIcon: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$burger$2e$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function ButtonIcon(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "45888d1f3db2c1eee06c843703eecdeee216578655e8cc82bb59dc76cd4b142d") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "45888d1f3db2c1eee06c843703eecdeee216578655e8cc82bb59dc76cd4b142d";
    }
    let appearance;
    let icon;
    let props;
    if ($[1] !== t0) {
        ({ appearance, icon, ...props } = t0);
        $[1] = t0;
        $[2] = appearance;
        $[3] = icon;
        $[4] = props;
    } else {
        appearance = $[2];
        icon = $[3];
        props = $[4];
    }
    const IconComponent = icons[icon];
    const t1 = appearance === "primary";
    const t2 = appearance === "white";
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$ButtonIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$ButtonIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primary]: t1,
            [__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$ButtonIcon$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].white]: t2
        });
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== IconComponent) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
            fileName: "[project]/components/ui/ButtonIcon/ButtonIcon.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = IconComponent;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== props || $[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t3,
            ...props,
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/ui/ButtonIcon/ButtonIcon.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[10] = props;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_c = ButtonIcon;
var _c;
__turbopack_context__.k.register(_c, "ButtonIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/UpButton/UpButton.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "up": "UpButton-module__74EjpG__up",
});
}),
"[project]/components/ui/UpButton/UpButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Up",
    ()=>Up
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollY.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$ButtonIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ButtonIcon/ButtonIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UpButton$2f$UpButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui/UpButton/UpButton.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Up() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "04bab4b08de7261ad2a5baa6954e9562c15abcc37b8722cbb43b0527e3bd5762") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "04bab4b08de7261ad2a5baa6954e9562c15abcc37b8722cbb43b0527e3bd5762";
    }
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollY"])();
    let t0;
    let t1;
    if ($[1] !== controls || $[2] !== y) {
        t0 = ({
            "Up[useEffect()]": ()=>{
                controls.start({
                    opacity: y / document.body.scrollHeight
                });
            }
        })["Up[useEffect()]"];
        t1 = [
            y,
            controls
        ];
        $[1] = controls;
        $[2] = y;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const scrollToTop = _UpScrollToTop;
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ButtonIcon$2f$ButtonIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonIcon"], {
            appearance: "primary",
            icon: "upIcon",
            onClick: scrollToTop
        }, void 0, false, {
            fileName: "[project]/components/ui/UpButton/UpButton.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    if ($[7] !== controls) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$UpButton$2f$UpButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].up,
            animate: controls,
            initial: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/ui/UpButton/UpButton.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = controls;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s(Up, "QNDHWQoeoLkXpEQT//5iUgs6JRc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollY$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollY"]
    ];
});
_c = Up;
function _UpScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var _c;
__turbopack_context__.k.register(_c, "Up");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e3a7b35e._.js.map