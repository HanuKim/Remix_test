var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LJPPIO7G.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("link", { rel: "icon", href: "data:image/x-icon;base64,AA" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("links", {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/news._index.jsx
var news_index_exports = {};
__export(news_index_exports, {
  default: () => News
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function News() {
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "news" }, void 0, !1, {
      fileName: "app/routes/news._index.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { className: "mt-2", children: "This is the news page." }, void 0, !1, {
      fileName: "app/routes/news._index.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/news._index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/news.$id.jsx
var news_id_exports = {};
__export(news_id_exports, {
  default: () => Article
});
import { useParams } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Article() {
  let params = useParams();
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    "\uAC8C\uC2DC\uAE00 ID: ",
    params.id
  ] }, void 0, !0, {
    fileName: "app/routes/news.$id.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV5("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: [
    /* @__PURE__ */ jsxDEV5("h2", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("ul", { children: /* @__PURE__ */ jsxDEV5("li", { className: "mt-1 flex flex-col", children: [
      /* @__PURE__ */ jsxDEV5(Link, { to: "/about", className: "text-lg", children: "about" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(Link, { to: "/news", children: "news" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function About() {
  return /* @__PURE__ */ jsxDEV6("div", { children: [
    /* @__PURE__ */ jsxDEV6("h1", { children: "About" }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { className: "text-3xl", children: "This is the about page." }, void 0, !1, {
      fileName: "app/routes/about.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IOXQ2EF3.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-5VAZ7XSC.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-Z5J5ISET.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-M5C6YUDE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-H7WZXIVO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-DHTWWTN6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/news.$id": { id: "routes/news.$id", parentId: "root", path: "news/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/news.$id-AQ6NAHBL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/news._index": { id: "routes/news._index", parentId: "root", path: "news", index: !0, caseSensitive: void 0, module: "/build/routes/news._index-23ESLRI2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "32886128", hmr: { runtime: "/build/_shared\\chunk-Z5J5ISET.js", timestamp: 1718182491277 }, url: "/build/manifest-32886128.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/news._index": {
    id: "routes/news._index",
    parentId: "root",
    path: "news",
    index: !0,
    caseSensitive: void 0,
    module: news_index_exports
  },
  "routes/news.$id": {
    id: "routes/news.$id",
    parentId: "root",
    path: "news/:id",
    index: void 0,
    caseSensitive: void 0,
    module: news_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
