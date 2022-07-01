"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[259],{5461:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=i(3117),a=(i(7294),i(3905)),o=i(7689);const s={title:"Arithmetical Optimization",sidebar_position:3},r=void 0,c={unversionedId:"optimization/arithmeticaloptimization",id:"optimization/arithmeticaloptimization",title:"Arithmetical Optimization",description:"The SMT-LIB 2.0 standard is extended with three commands for expressing optimization objectives. The (maximize t) command instructs check-sat to produce a model that maximizes the value of term t. The type of t must be either Int, Real, or BitVec.",source:"@site/docs/optimization/03 - arithmeticaloptimization.md",sourceDirName:"optimization",slug:"/optimization/arithmeticaloptimization",permalink:"/rise4fun/docs/optimization/arithmeticaloptimization",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/optimization/03 - arithmeticaloptimization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Arithmetical Optimization",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Optimization from the API",permalink:"/rise4fun/docs/optimization/apioptimization"},next:{title:"Soft Constraints",permalink:"/rise4fun/docs/optimization/softconstraints"}},d={},m=[{value:"Unbounded Objectives",id:"unbounded-objectives",level:2},{value:"Tight Bounds",id:"tight-bounds",level:2}],u={toc:m};function l(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/"},"SMT-LIB 2.0")," standard is extended with three commands for expressing optimization objectives. The (maximize t) command instructs check-sat to produce a model that maximizes the value of term t. The type of t must be either Int, Real, or BitVec."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 2))\n(assert (< (- y x) 1))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 2)\n)\n",error:"",status:"z3-ran",hash:"c8c353ee584cb1d075cbe92896aabaf869f4fa03"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"The (minimize t) command instructs check-sat to produce a model that minimizes the value of term t."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 4))\n(assert (< (- y x) 1))\n(assert (> y 1))\n(minimize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 4)\n)\n",error:"",status:"z3-ran",hash:"80478a69399aabc258ffede663682ba8e69fa2cd"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("h2",{id:"unbounded-objectives"},"Unbounded Objectives"),(0,a.kt)("p",null,"Not all objective functions are bounded. Z3 indicates that the maxima are at infinity, and the minima are negative infinity."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 2))\n(assert (> (- y x) 1))\n(maximize (+ x y))\n(check-sat)\n",result:{output:"sat\n",error:"",status:"z3-ran",hash:"b3b7e7620e85eea588714cb1c2ca538b7d4b0820"}},mdxType:"Z3CodeBlock"}),(0,a.kt)(o.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (< x 4))\n(assert (< (- y x) 1))\n(assert (< y 1))\n(minimize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) (* (- 1) oo))\n)\n",error:"",status:"z3-ran",hash:"5eb5573c5da84b07997f4af7976f7e0b7e789090"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("h2",{id:"tight-bounds"},"Tight Bounds"),(0,a.kt)("p",null,"Not all finite bounds can be expressed as real numbers. Bounds obtained around strict inequalities are expressed using infinitesimals."),(0,a.kt)(o.Z,{input:{code:"(declare-const x Real)\n(declare-const y Real)\n(assert (< x 4))\n(assert (< y 5))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) (+ 9.0 (* (- 2.0) epsilon)))\n)\n",error:"",status:"z3-ran",hash:"3508d7da603ebd137c04f4f72cf944dc26777e64"}},mdxType:"Z3CodeBlock"}))}l.isMDXComponent=!0}}]);