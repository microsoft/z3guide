"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1150],{8518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(3117),r=(a(7294),a(3905)),i=a(504),s=a.n(i);const l={title:"Basic Datalog",sidebar_position:2},o=void 0,d={unversionedId:"fixedpoints/basicdatalog",id:"fixedpoints/basicdatalog",title:"Basic Datalog",description:"The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations.",source:"@site/docs-smtlib/05 - fixedpoints/02 - basicdatalog.md",sourceDirName:"05 - fixedpoints",slug:"/fixedpoints/basicdatalog",permalink:"/z3guide/docs/fixedpoints/basicdatalog",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/05 - fixedpoints/02 - basicdatalog.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basic Datalog",sidebar_position:2},sidebar:"smtlibSidebar",previous:{title:"Introduction",permalink:"/z3guide/docs/fixedpoints/intro"},next:{title:"Generalized PDR",permalink:"/z3guide/docs/fixedpoints/engineforpdr"}},u={},p=[{value:"Relations, rules and queries",id:"relations-rules-and-queries",level:2},{value:"Relations with arguments",id:"relations-with-arguments",level:2}],c={toc:p};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations."),(0,r.kt)("h2",{id:"relations-rules-and-queries"},"Relations, rules and queries"),(0,r.kt)("p",null,"The first example illustrates how to declare relations, rules and how to pose queries."),(0,r.kt)(s(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-rel a ())\n(declare-rel b ())\n(declare-rel c ())\n(rule (=> b a))\n(rule (=> c b))\n\n;(set-option :fixedpoint.engine datalog)\n(query a)\n\n(rule c)\n(query a\n :print-answer true)",result:{output:"unsat\nsat\ntrue\n",error:"",status:"z3-ran",hash:"1bd3088483b231d6b379ef824688d6767bc8f855"}},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"The example illustrates some of the basic constructs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (declare-rel a ())\n")),(0,r.kt)("p",null,"declares a 0-ary relation a."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  (rule (=> b a))\n")),(0,r.kt)("p",null,"Create the rule that a follows from b. In general you can create a rule with multiple premises and a name using the format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"   (rule (=> (and b c) a) name)\n")),(0,r.kt)("p",null,"The name is optional. It is used for tracking the rule in derivation proofs. Continuing with the example, a is false unless b is established."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (query r)\n")),(0,r.kt)("p",null,"Asks if relation ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," can be derived. The rules so far say that a follows if ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," is established and that ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," follows if ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," is established. But nothing establishes ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," is also not established, so ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," cannot be derived."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (rule c)\n")),(0,r.kt)("p",null,"Now it is the case that a can be derived."),(0,r.kt)("h2",{id:"relations-with-arguments"},"Relations with arguments"),(0,r.kt)("p",null,"Relations can take arguments. We illustrate relations with arguments using edges and paths in a graph."),(0,r.kt)(s(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:";(set-option :fixedpoint.engine datalog)\n(define-sort s () (_ BitVec 3))\n(declare-rel edge (s s))\n(declare-rel path (s s))\n(declare-var a s)\n(declare-var b s)\n(declare-var c s)\n\n(rule (=> (edge a b) (path a b)))\n(rule (=> (and (path a b) (path b c)) (path a c)))\n\n(rule (edge #b001 #b010))\n(rule (edge #b001 #b011))\n(rule (edge #b010 #b100))\n\n(declare-rel q1 ())\n(declare-rel q2 ())\n(declare-rel q3 (s))\n(rule (=> (path #b001 #b100) q1))\n(rule (=> (path #b011 #b100) q2))\n(rule (=> (path #b001 b) (q3 b)))\n\n(query q1)\n(query q2)\n(query q3 :print-answer true)",result:{output:"sat\nunsat\nsat\n(or (= (:var 0) #b010) (= (:var 0) #b100) (= (:var 0) #b011))\n",error:"",status:"z3-ran",hash:"0ddc1c531f333b432282efbedad715f5e2512616"}},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"The example uses the declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," (declare-var a s)\n")),(0,r.kt)("p",null,"to instrument the fixed-point engine that a should be treated as a variable appearing in rules."))}b.isMDXComponent=!0}}]);