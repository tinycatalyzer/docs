(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{372:function(t,e,a){"use strict";a.r(e);var s=a(24),o=function(t){t.options.__data__block__={mermaid_382ee165:"sequenceDiagram\n    User->>+Tool: Request that will need Consumer details\n    Note right of Tool: Tools need Consumer key or secret\n    Tool->>+MediaWiki: Get the details of my Consumer\n    MediaWiki->>+MediaWiki: Get or create OAuth Consumer\n    MediaWiki->>+Tool: Consumer Details\n    Tool->>+User: Respond to origional request\n"}},r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"magnus-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#magnus-tools"}},[t._v("#")]),t._v(" Magnus Tools")]),t._v(" "),a("p",[t._v("The tools that are currently deployed are\n"),a("a",{attrs:{href:"https://github.com/wbstack/quickstatements",target:"_blank",rel:"noopener noreferrer"}},[t._v("quickstatements"),a("OutboundLink")],1),t._v(",\n"),a("a",{attrs:{href:"https://github.com/wbstack/cradle",target:"_blank",rel:"noopener noreferrer"}},[t._v("cradle"),a("OutboundLink")],1),t._v(" and\n"),a("a",{attrs:{href:"https://github.com/wbstack/widar",target:"_blank",rel:"noopener noreferrer"}},[t._v("widar"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Each of these tools exist as fork of their originals with customizations for wbstack.")]),t._v(" "),a("h2",{attrs:{id:"oauth-consumers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oauth-consumers"}},[t._v("#")]),t._v(" Oauth Consumers")]),t._v(" "),a("p",[t._v("These tools use OAuth authentication for MediaWiki interactions.")]),t._v(" "),a("p",[t._v("OAuth consumer creation is automated using an internal only MediaWiki API action.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/wbstack/magnustools",target:"_blank",rel:"noopener noreferrer"}},[t._v("magnustools"),a("OutboundLink")],1),t._v(" code, which is used by the tools, is overridden to fetch Consumer data from this API instead of an INI file ("),a("a",{attrs:{href:"https://github.com/wbstack/magnustools/blob/429f68414b98fed4800cc010b8813abb8d624eb5/public_html/php/WbstackMagnusOauth.php#L86-L131",target:"_blank",rel:"noopener noreferrer"}},[t._v("code"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee165",graph:t.$dataBlock.mermaid_382ee165}}),a("h2",{attrs:{id:"tools-quickstatements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-quickstatements"}},[t._v("#")]),t._v(" tools-quickstatements")]),t._v(" "),a("p",[t._v("Added to the platform by popular demand as one of the main external tools used with Wikibase.")]),t._v(" "),a("h3",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),a("p",[t._v("Can be tested by using")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CREATE\n")])])]),a("p",[t._v("in the edit box and clicking import and run")]),t._v(" "),a("h2",{attrs:{id:"tools-cradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-cradle"}},[t._v("#")]),t._v(" tools-cradle")]),t._v(" "),a("p",[t._v("Cradle uses widar for authentication.")]),t._v(" "),a("h2",{attrs:{id:"tools-widar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-widar"}},[t._v("#")]),t._v(" tools-widar")]),t._v(" "),a("p",[t._v("Widar is only deployed as cradle uses it for OAuth.")])],1)}),[],!1,null,null,null);"function"==typeof o&&o(r);e.default=r.exports}}]);