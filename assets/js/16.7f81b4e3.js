(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{405:function(t,e,s){"use strict";s.r(e);var o=s(24),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"private-vs-public-gce-kubernetes-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#private-vs-public-gce-kubernetes-cluster"}},[t._v("#")]),t._v(" Private vs Public GCE kubernetes cluster")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This decision document has not yet been formatted for nice display...")])]),t._v(" "),s("p",[t._v("Date: 15 May 2019\nDecision: Public")]),t._v(" "),s("p",[t._v("It would be a nice idea for the k8s cluster to be private (no node IP addresses), just because..\nHowever, making the k8s cluster private means that the nodes also can not contact the outside world.\nSee: https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#outbound_internet_for_nodes\nCloud NAT would mean we could do this, but there is an added cost...")]),t._v(" "),s("p",[t._v('https://cloud.google.com/nat/pricing\n"an hourly price for the NAT gateway, starting at $0.045 per NAT gateway hour"')]),t._v(" "),s("p",[t._v("0.045 * 24 * 30 = $32.40 per month")]),t._v(" "),s("p",[t._v("This is a cost that is not worth it at this stage...")]),t._v(" "),s("p",[t._v("Later down the line it might be nice to change this.")])])}),[],!1,null,null,null);e.default=n.exports}}]);