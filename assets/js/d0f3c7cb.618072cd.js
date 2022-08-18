"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[538],{3607:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var i=o(3117),r=(o(7294),o(3905)),s=o(504),a=o.n(s);const n={title:"Advanced Topics",sidebar_position:7},l=void 0,u={unversionedId:"optimization/advancedtopics",id:"optimization/advancedtopics",title:"Advanced Topics",description:"Difference Logic",source:"@site/docs-smtlib/04 - optimization/07 - advancedtopics.md",sourceDirName:"04 - optimization",slug:"/optimization/advancedtopics",permalink:"/z3guide/docs/optimization/advancedtopics",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/04 - optimization/07 - advancedtopics.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced Topics",sidebar_position:7},sidebar:"smtlibSidebar",previous:{title:"A Small Case Study",permalink:"/z3guide/docs/optimization/asmallcasestudy"},next:{title:"Introduction",permalink:"/z3guide/docs/fixedpoints/intro"}},d={},c=[{value:"Difference Logic",id:"difference-logic",level:2},{value:"Weighted Max-SAT solvers, a portfolio",id:"weighted-max-sat-solvers-a-portfolio",level:2}],m={toc:c};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"difference-logic"},"Difference Logic"),(0,r.kt)("p",null,"Z3 uses by default an implementation of dual Simplex to solve feasibility and primal Simplex for optimality. For arithmetical constraints that only have differences between variables, known as difference logic, Z3 furthermore contains alternative decision procedures tuned for this domain. These have to be configured explicitly. There is a choice between a solver tuned for sparse constraints (where the ratio of variables is high compared to number of inequalities) and a solver tuned for dense constraints."),(0,r.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(set-option :smt.arith.solver 1) ; enables difference logic solver for sparse constraints\n(set-option :smt.arith.solver 3) ; enables difference logic solver for dense constraints\n(declare-const x Int)\n(declare-const y Int)\n(assert (>= 10 x))\n(assert (>= x (+ y 7)))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 13)\n)\n",error:"",status:"z3-ran",hash:"a5ff92f1fadcf3e0e1be02e352447827f293c243"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.10.2",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"weighted-max-sat-solvers-a-portfolio"},"Weighted Max-SAT solvers, a portfolio"),(0,r.kt)("p",null,"The default solver for MaxSAT problems is the MaxRes algorithm. Several other alternative solvers are available. The default solver\nis chosen based on benchmarking against MaxSAT competition benchmarks, but other solver combinations, such as wmax, may work well for some domains.\nWhen the objectives are weighted by weights such as 1, 2, 4, 8, 16, such that the sum of weights in every prefix is lower than the next weight, the solver\nuses a lexicographic optimization algorithm that attempts to first solve for the highest weight before continuing with lower weights."),(0,r.kt)("p",null,"The other main MaxSAT algorithms available are"),(0,r.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"  (set-option :opt.maxsat_engine rc2)\n  (set-option :opt.maxsat_engine maxresbin)\n  (set-option :opt.maxsat_engine wmax)",result:{output:"",error:"",status:"z3-ran",hash:"cb4294cfa8b1a066151c3af3856feb525880e934"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.10.2",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"Pre-processing within the optimization solver will attempt to eliminate bounded arithmetical variables.\nFor example, the constraints"),(0,r.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-fun x () Int)\n(assert (<= x 1))\n(assert (>= x 0))\n(minimize x)\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"07c091bdd2fa815b8b011e88f3a7c8a41e291952"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.10.2",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"get rewritten internally to a problem of the form"),(0,r.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Bool)\n(assert-soft (not x))\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"e7b4b01756a9b4648eae3c09351bb1357a806a70"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.10.2",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"You can disable this transformation by setting"),(0,r.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"  (set-option :opt.elim_01 false)",result:{output:"",error:"",status:"z3-ran",hash:"889fc8ae13b68187a2d154a7a7af96952a65873f"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.10.2",tool:"z3-solver"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"For problems that are either already bit-vector or Boolean or can be rewritten to this form, the engine uses a core solver based on a tuned SAT solver.\nYou can turn off the use of the SAT solver by setting:"),(0,r.kt)(a(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"  (set-option :opt.enable_sat false)",result:{output:"",error:"",status:"z3-ran",hash:"138cb40b3df8800e779a6913c193bce82641e278"},githubRepo:"Z3Prover/z3",editable:!1,readonly:!1,showLineNumbers:!0,langVersion:"4.10.2",tool:"z3-solver"},mdxType:"CustomCodeBlock"}))}h.isMDXComponent=!0}}]);