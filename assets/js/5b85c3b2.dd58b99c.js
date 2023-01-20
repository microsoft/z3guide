"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5223],{1106:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=o(7462),n=(o(7294),o(3905)),r=o(7634),i=o.n(r);const a={title:"IEEE Floats",sidebar_position:3},d=void 0,l={unversionedId:"theories/IEEE Floats",id:"theories/IEEE Floats",title:"IEEE Floats",description:"SMTLIB2 standard IEEE Floating Point Numbers",source:"@site/docs-smtlib/02 - theories/03 - IEEE Floats.md",sourceDirName:"02 - theories",slug:"/theories/IEEE Floats",permalink:"/z3guide/docs/theories/IEEE Floats",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/03 - IEEE Floats.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"IEEE Floats",sidebar_position:3},sidebar:"smtlibSidebar",previous:{title:"Bitvectors",permalink:"/z3guide/docs/theories/Bitvectors"},next:{title:"Arrays",permalink:"/z3guide/docs/theories/Arrays"}},u={},c=[],p={toc:c};function b(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"SMTLIB2 standard")," ",(0,n.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-FloatingPoint.shtml"},"IEEE Floating Point Numbers"))),(0,n.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-fun X () (_ FloatingPoint 11 53))\n\n(assert (fp.isNormal X))\n(assert (not (fp.isSubnormal X)))\n(assert (not (fp.isZero X)))\n(assert (not (fp.isInfinite X)))\n(assert (not (fp.isNaN X)))\n(assert (not (fp.isNegative X)))\n(assert (fp.isPositive X))\n\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun X () (_ FloatingPoint 11 53)\n    (fp #b0 #b00000000001 #x0000000000000))\n)\n",error:"",status:"z3-ran",hash:"57e88d6f21f644bccb61d1b853fc5be43bb75d07"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,n.kt)("p",null,"Floating point operations are defined modulo rounding modes.\nMany algebraic properties of bit-vectors, integers and reals don't carry over to floating points.\nFor example, addition is not associative."),(0,n.kt)(i(),{input:{lang:"z3",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Float32)\n(declare-const b Float32)\n(declare-const c Float32)\n\n(assert (not (= (fp.add roundNearestTiesToEven a (fp.add roundNearestTiesToEven b c))\n\t        (fp.add roundNearestTiesToEven (fp.add roundNearestTiesToEven a b) c))))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun a () Float32\n    (fp #b1 #xeb #b01111100101110010110100))\n  (define-fun c () Float32\n    (fp #b0 #xec #b00000000000000000000000))\n  (define-fun b () Float32\n    (fp #b0 #xfa #b11111111111111111010010))\n)\n",error:"",status:"z3-ran",hash:"204fb324ae7e9f36141a9a18276112e82e1954d9"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.11.0",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}b.isMDXComponent=!0}}]);