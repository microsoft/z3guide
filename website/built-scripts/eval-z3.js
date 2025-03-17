var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var eval_z3_exports = {};
__export(eval_z3_exports, {
  compileZ3JS: () => compileZ3JS,
  evalZ3JS: () => evalZ3JS
});
module.exports = __toCommonJS(eval_z3_exports);
var define_TS_LIBS_default = { "lib.decorators.d.ts": '/// <reference no-default-lib="true"/>\ntype ClassMemberDecoratorContext=|ClassMethodDecoratorContext|ClassGetterDecoratorContext|ClassSetterDecoratorContext|ClassFieldDecoratorContext|ClassAccessorDecoratorContext;type DecoratorContext=|ClassDecoratorContext|ClassMemberDecoratorContext;type DecoratorMetadataObject=Record<PropertyKey,unknown>&object;type DecoratorMetadata=typeof globalThis extends{Symbol:{readonly metadata:symbol;};}?DecoratorMetadataObject:DecoratorMetadataObject|undefined;interface ClassDecoratorContext<\nClass extends abstract new(...args:any)=>any=abstract new(...args:any)=>any,>{readonly kind:"class";readonly name:string|undefined;addInitializer(initializer:(this:Class)=>void):void;readonly metadata:DecoratorMetadata;}interface ClassMethodDecoratorContext<\nThis=unknown,Value extends(this:This,...args:any)=>any=(this:This,...args:any)=>any,>{readonly kind:"method";readonly name:string|symbol;readonly static:boolean;readonly private:boolean;readonly access:{has(object:This):boolean;get(object:This):Value;};addInitializer(initializer:(this:This)=>void):void;readonly metadata:DecoratorMetadata;}interface ClassGetterDecoratorContext<\nThis=unknown,Value=unknown,>{readonly kind:"getter";readonly name:string|symbol;readonly static:boolean;readonly private:boolean;readonly access:{has(object:This):boolean;get(object:This):Value;};addInitializer(initializer:(this:This)=>void):void;readonly metadata:DecoratorMetadata;}interface ClassSetterDecoratorContext<\nThis=unknown,Value=unknown,>{readonly kind:"setter";readonly name:string|symbol;readonly static:boolean;readonly private:boolean;readonly access:{has(object:This):boolean;set(object:This,value:Value):void;};addInitializer(initializer:(this:This)=>void):void;readonly metadata:DecoratorMetadata;}interface ClassAccessorDecoratorContext<\nThis=unknown,Value=unknown,>{readonly kind:"accessor";readonly name:string|symbol;readonly static:boolean;readonly private:boolean;readonly access:{has(object:This):boolean;get(object:This):Value;set(object:This,value:Value):void;};addInitializer(initializer:(this:This)=>void):void;readonly metadata:DecoratorMetadata;}interface ClassAccessorDecoratorTarget<This,Value>{get(this:This):Value;set(this:This,value:Value):void;}interface ClassAccessorDecoratorResult<This,Value>{get?(this:This):Value;set?(this:This,value:Value):void;init?(this:This,value:Value):Value;}interface ClassFieldDecoratorContext<\nThis=unknown,Value=unknown,>{readonly kind:"field";readonly name:string|symbol;readonly static:boolean;readonly private:boolean;readonly access:{has(object:This):boolean;get(object:This):Value;set(object:This,value:Value):void;};addInitializer(initializer:(this:This)=>void):void;readonly metadata:DecoratorMetadata;}', "lib.decorators.legacy.d.ts": '/// <reference no-default-lib="true"/>\ndeclare type ClassDecorator=<TFunction extends Function>(target:TFunction)=>TFunction|void;declare type PropertyDecorator=(target:Object,propertyKey:string|symbol)=>void;declare type MethodDecorator=<T>(target:Object,propertyKey:string|symbol,descriptor:TypedPropertyDescriptor<T>)=>TypedPropertyDescriptor<T>|void;declare type ParameterDecorator=(target:Object,propertyKey:string|symbol|undefined,parameterIndex:number)=>void;', "lib.es2015.collection.d.ts": '/// <reference no-default-lib="true"/>\ninterface Map<K,V>{clear():void;delete(key:K):boolean;forEach(callbackfn:(value:V,key:K,map:Map<K,V>)=>void,thisArg?:any):void;get(key:K):V|undefined;has(key:K):boolean;set(key:K,value:V):this;readonly size:number;}interface MapConstructor{new():Map<any,any>;new<K,V>(entries?:readonly(readonly[K,V])[]|null):Map<K,V>;readonly prototype:Map<any,any>;}declare var Map:MapConstructor;interface ReadonlyMap<K,V>{forEach(callbackfn:(value:V,key:K,map:ReadonlyMap<K,V>)=>void,thisArg?:any):void;get(key:K):V|undefined;has(key:K):boolean;readonly size:number;}interface WeakMap<K extends WeakKey,V>{delete(key:K):boolean;get(key:K):V|undefined;has(key:K):boolean;set(key:K,value:V):this;}interface WeakMapConstructor{new<K extends WeakKey=WeakKey,V=any>(entries?:readonly(readonly[K,V])[]|null):WeakMap<K,V>;readonly prototype:WeakMap<WeakKey,any>;}declare var WeakMap:WeakMapConstructor;interface Set<T>{add(value:T):this;clear():void;delete(value:T):boolean;forEach(callbackfn:(value:T,value2:T,set:Set<T>)=>void,thisArg?:any):void;has(value:T):boolean;readonly size:number;}interface SetConstructor{new<T=any>(values?:readonly T[]|null):Set<T>;readonly prototype:Set<any>;}declare var Set:SetConstructor;interface ReadonlySet<T>{forEach(callbackfn:(value:T,value2:T,set:ReadonlySet<T>)=>void,thisArg?:any):void;has(value:T):boolean;readonly size:number;}interface WeakSet<T extends WeakKey>{add(value:T):this;delete(value:T):boolean;has(value:T):boolean;}interface WeakSetConstructor{new<T extends WeakKey=WeakKey>(values?:readonly T[]|null):WeakSet<T>;readonly prototype:WeakSet<WeakKey>;}declare var WeakSet:WeakSetConstructor;', "lib.es2015.core.d.ts": '/// <reference no-default-lib="true"/>\ninterface Array<T>{find<S extends T>(predicate:(value:T,index:number,obj:T[])=>value is S,thisArg?:any):S|undefined;find(predicate:(value:T,index:number,obj:T[])=>unknown,thisArg?:any):T|undefined;findIndex(predicate:(value:T,index:number,obj:T[])=>unknown,thisArg?:any):number;fill(value:T,start?:number,end?:number):this;copyWithin(target:number,start:number,end?:number):this;toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions&Intl.DateTimeFormatOptions):string;}interface ArrayConstructor{from<T>(arrayLike:ArrayLike<T>):T[];from<T,U>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>U,thisArg?:any):U[];of<T>(...items:T[]):T[];}interface DateConstructor{new(value:number|string|Date):Date;}interface Function{readonly name:string;}interface Math{clz32(x:number):number;imul(x:number,y:number):number;sign(x:number):number;log10(x:number):number;log2(x:number):number;log1p(x:number):number;expm1(x:number):number;cosh(x:number):number;sinh(x:number):number;tanh(x:number):number;acosh(x:number):number;asinh(x:number):number;atanh(x:number):number;hypot(...values:number[]):number;trunc(x:number):number;fround(x:number):number;cbrt(x:number):number;}interface NumberConstructor{readonly EPSILON:number;isFinite(number:unknown):boolean;isInteger(number:unknown):boolean;isNaN(number:unknown):boolean;isSafeInteger(number:unknown):boolean;readonly MAX_SAFE_INTEGER:number;readonly MIN_SAFE_INTEGER:number;parseFloat(string:string):number;parseInt(string:string,radix?:number):number;}interface ObjectConstructor{assign<T extends{},U>(target:T,source:U):T&U;assign<T extends{},U,V>(target:T,source1:U,source2:V):T&U&V;assign<T extends{},U,V,W>(target:T,source1:U,source2:V,source3:W):T&U&V&W;assign(target:object,...sources:any[]):any;getOwnPropertySymbols(o:any):symbol[];keys(o:{}):string[];is(value1:any,value2:any):boolean;setPrototypeOf(o:any,proto:object|null):any;}interface ReadonlyArray<T>{find<S extends T>(predicate:(value:T,index:number,obj:readonly T[])=>value is S,thisArg?:any):S|undefined;find(predicate:(value:T,index:number,obj:readonly T[])=>unknown,thisArg?:any):T|undefined;findIndex(predicate:(value:T,index:number,obj:readonly T[])=>unknown,thisArg?:any):number;toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions&Intl.DateTimeFormatOptions):string;}interface RegExp{readonly flags:string;readonly sticky:boolean;readonly unicode:boolean;}interface RegExpConstructor{new(pattern:RegExp|string,flags?:string):RegExp;(pattern:RegExp|string,flags?:string):RegExp;}interface String{codePointAt(pos:number):number|undefined;includes(searchString:string,position?:number):boolean;endsWith(searchString:string,endPosition?:number):boolean;normalize(form:"NFC"|"NFD"|"NFKC"|"NFKD"):string;normalize(form?:string):string;repeat(count:number):string;startsWith(searchString:string,position?:number):boolean;anchor(name:string):string;big():string;blink():string;bold():string;fixed():string;fontcolor(color:string):string;fontsize(size:number):string;fontsize(size:string):string;italics():string;link(url:string):string;small():string;strike():string;sub():string;sup():string;}interface StringConstructor{fromCodePoint(...codePoints:number[]):string;raw(template:{raw:readonly string[]|ArrayLike<string>;},...substitutions:any[]):string;}interface Int8Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Int16Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Uint16Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Int32Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Uint32Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Float32Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}interface Float64Array<TArrayBuffer extends ArrayBufferLike>{toLocaleString(locales:string|string[],options?:Intl.NumberFormatOptions):string;}', "lib.es2015.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es5" />\n/// <reference lib="es2015.core" />\n/// <reference lib="es2015.collection" />\n/// <reference lib="es2015.iterable" />\n/// <reference lib="es2015.generator" />\n/// <reference lib="es2015.promise" />\n/// <reference lib="es2015.proxy" />\n/// <reference lib="es2015.reflect" />\n/// <reference lib="es2015.symbol" />\n/// <reference lib="es2015.symbol.wellknown" />\n', "lib.es2015.generator.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.iterable" />\ninterface Generator<T=unknown,TReturn=any,TNext=any>extends IteratorObject<T,TReturn,TNext>{next(...[value]:[]|[TNext]):IteratorResult<T,TReturn>;return(value:TReturn):IteratorResult<T,TReturn>;throw(e:any):IteratorResult<T,TReturn>;[Symbol.iterator]():Generator<T,TReturn,TNext>;}interface GeneratorFunction{new(...args:any[]):Generator;(...args:any[]):Generator;readonly length:number;readonly name:string;readonly prototype:Generator;}interface GeneratorFunctionConstructor{new(...args:string[]):GeneratorFunction;(...args:string[]):GeneratorFunction;readonly length:number;readonly name:string;readonly prototype:GeneratorFunction;}', "lib.es2015.iterable.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\ninterface SymbolConstructor{readonly iterator:unique symbol;}interface IteratorYieldResult<TYield>{done?:false;value:TYield;}interface IteratorReturnResult<TReturn>{done:true;value:TReturn;}type IteratorResult<T,TReturn=any>=IteratorYieldResult<T>|IteratorReturnResult<TReturn>;interface Iterator<T,TReturn=any,TNext=any>{next(...[value]:[]|[TNext]):IteratorResult<T,TReturn>;return?(value?:TReturn):IteratorResult<T,TReturn>;throw?(e?:any):IteratorResult<T,TReturn>;}interface Iterable<T,TReturn=any,TNext=any>{[Symbol.iterator]():Iterator<T,TReturn,TNext>;}interface IterableIterator<T,TReturn=any,TNext=any>extends Iterator<T,TReturn,TNext>{[Symbol.iterator]():IterableIterator<T,TReturn,TNext>;}interface IteratorObject<T,TReturn=unknown,TNext=unknown>extends Iterator<T,TReturn,TNext>{[Symbol.iterator]():IteratorObject<T,TReturn,TNext>;}type BuiltinIteratorReturn=intrinsic;interface ArrayIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():ArrayIterator<T>;}interface Array<T>{[Symbol.iterator]():ArrayIterator<T>;entries():ArrayIterator<[number,T]>;keys():ArrayIterator<number>;values():ArrayIterator<T>;}interface ArrayConstructor{from<T>(iterable:Iterable<T>|ArrayLike<T>):T[];from<T,U>(iterable:Iterable<T>|ArrayLike<T>,mapfn:(v:T,k:number)=>U,thisArg?:any):U[];}interface ReadonlyArray<T>{[Symbol.iterator]():ArrayIterator<T>;entries():ArrayIterator<[number,T]>;keys():ArrayIterator<number>;values():ArrayIterator<T>;}interface IArguments{[Symbol.iterator]():ArrayIterator<any>;}interface MapIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():MapIterator<T>;}interface Map<K,V>{[Symbol.iterator]():MapIterator<[K,V]>;entries():MapIterator<[K,V]>;keys():MapIterator<K>;values():MapIterator<V>;}interface ReadonlyMap<K,V>{[Symbol.iterator]():MapIterator<[K,V]>;entries():MapIterator<[K,V]>;keys():MapIterator<K>;values():MapIterator<V>;}interface MapConstructor{new():Map<any,any>;new<K,V>(iterable?:Iterable<readonly[K,V]>|null):Map<K,V>;}interface WeakMap<K extends WeakKey,V>{}interface WeakMapConstructor{new<K extends WeakKey,V>(iterable:Iterable<readonly[K,V]>):WeakMap<K,V>;}interface SetIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():SetIterator<T>;}interface Set<T>{[Symbol.iterator]():SetIterator<T>;entries():SetIterator<[T,T]>;keys():SetIterator<T>;values():SetIterator<T>;}interface ReadonlySet<T>{[Symbol.iterator]():SetIterator<T>;entries():SetIterator<[T,T]>;keys():SetIterator<T>;values():SetIterator<T>;}interface SetConstructor{new<T>(iterable?:Iterable<T>|null):Set<T>;}interface WeakSet<T extends WeakKey>{}interface WeakSetConstructor{new<T extends WeakKey=WeakKey>(iterable:Iterable<T>):WeakSet<T>;}interface Promise<T>{}interface PromiseConstructor{all<T>(values:Iterable<T|PromiseLike<T>>):Promise<Awaited<T>[]>;race<T>(values:Iterable<T|PromiseLike<T>>):Promise<Awaited<T>>;}interface StringIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():StringIterator<T>;}interface String{[Symbol.iterator]():StringIterator<string>;}interface Int8Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Int8ArrayConstructor{new(elements:Iterable<number>):Int8Array<ArrayBuffer>;from(elements:Iterable<number>):Int8Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Int8Array<ArrayBuffer>;}interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Uint8ArrayConstructor{new(elements:Iterable<number>):Uint8Array<ArrayBuffer>;from(elements:Iterable<number>):Uint8Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Uint8Array<ArrayBuffer>;}interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Uint8ClampedArrayConstructor{new(elements:Iterable<number>):Uint8ClampedArray<ArrayBuffer>;from(elements:Iterable<number>):Uint8ClampedArray<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Uint8ClampedArray<ArrayBuffer>;}interface Int16Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Int16ArrayConstructor{new(elements:Iterable<number>):Int16Array<ArrayBuffer>;from(elements:Iterable<number>):Int16Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Int16Array<ArrayBuffer>;}interface Uint16Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Uint16ArrayConstructor{new(elements:Iterable<number>):Uint16Array<ArrayBuffer>;from(elements:Iterable<number>):Uint16Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Uint16Array<ArrayBuffer>;}interface Int32Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Int32ArrayConstructor{new(elements:Iterable<number>):Int32Array<ArrayBuffer>;from(elements:Iterable<number>):Int32Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Int32Array<ArrayBuffer>;}interface Uint32Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Uint32ArrayConstructor{new(elements:Iterable<number>):Uint32Array<ArrayBuffer>;from(elements:Iterable<number>):Uint32Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Uint32Array<ArrayBuffer>;}interface Float32Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Float32ArrayConstructor{new(elements:Iterable<number>):Float32Array<ArrayBuffer>;from(elements:Iterable<number>):Float32Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Float32Array<ArrayBuffer>;}interface Float64Array<TArrayBuffer extends ArrayBufferLike>{[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;}interface Float64ArrayConstructor{new(elements:Iterable<number>):Float64Array<ArrayBuffer>;from(elements:Iterable<number>):Float64Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Float64Array<ArrayBuffer>;}', "lib.es2015.promise.d.ts": '/// <reference no-default-lib="true"/>\ninterface PromiseConstructor{readonly prototype:Promise<any>;new<T>(executor:(resolve:(value:T|PromiseLike<T>)=>void,reject:(reason?:any)=>void)=>void):Promise<T>;all<T extends readonly unknown[]|[]>(values:T):Promise<{-readonly[P in keyof T]:Awaited<T[P]>;}>;race<T extends readonly unknown[]|[]>(values:T):Promise<Awaited<T[number]>>;reject<T=never>(reason?:any):Promise<T>;resolve():Promise<void>;resolve<T>(value:T):Promise<Awaited<T>>;resolve<T>(value:T|PromiseLike<T>):Promise<Awaited<T>>;}declare var Promise:PromiseConstructor;', "lib.es2015.proxy.d.ts": '/// <reference no-default-lib="true"/>\ninterface ProxyHandler<T extends object>{apply?(target:T,thisArg:any,argArray:any[]):any;construct?(target:T,argArray:any[],newTarget:Function):object;defineProperty?(target:T,property:string|symbol,attributes:PropertyDescriptor):boolean;deleteProperty?(target:T,p:string|symbol):boolean;get?(target:T,p:string|symbol,receiver:any):any;getOwnPropertyDescriptor?(target:T,p:string|symbol):PropertyDescriptor|undefined;getPrototypeOf?(target:T):object|null;has?(target:T,p:string|symbol):boolean;isExtensible?(target:T):boolean;ownKeys?(target:T):ArrayLike<string|symbol>;preventExtensions?(target:T):boolean;set?(target:T,p:string|symbol,newValue:any,receiver:any):boolean;setPrototypeOf?(target:T,v:object|null):boolean;}interface ProxyConstructor{revocable<T extends object>(target:T,handler:ProxyHandler<T>):{proxy:T;revoke:()=>void;};new<T extends object>(target:T,handler:ProxyHandler<T>):T;}declare var Proxy:ProxyConstructor;', "lib.es2015.reflect.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Reflect{function apply<T,A extends readonly any[],R>(target:(this:T,...args:A)=>R,thisArgument:T,argumentsList:Readonly<A>,):R;function apply(target:Function,thisArgument:any,argumentsList:ArrayLike<any>):any;function construct<A extends readonly any[],R>(target:new(...args:A)=>R,argumentsList:Readonly<A>,newTarget?:new(...args:any)=>any,):R;function construct(target:Function,argumentsList:ArrayLike<any>,newTarget?:Function):any;function defineProperty(target:object,propertyKey:PropertyKey,attributes:PropertyDescriptor&ThisType<any>):boolean;function deleteProperty(target:object,propertyKey:PropertyKey):boolean;function get<T extends object,P extends PropertyKey>(target:T,propertyKey:P,receiver?:unknown,):P extends keyof T?T[P]:any;function getOwnPropertyDescriptor<T extends object,P extends PropertyKey>(target:T,propertyKey:P,):TypedPropertyDescriptor<P extends keyof T?T[P]:any>|undefined;function getPrototypeOf(target:object):object|null;function has(target:object,propertyKey:PropertyKey):boolean;function isExtensible(target:object):boolean;function ownKeys(target:object):(string|symbol)[];function preventExtensions(target:object):boolean;function set<T extends object,P extends PropertyKey>(target:T,propertyKey:P,value:P extends keyof T?T[P]:any,receiver?:any,):boolean;function set(target:object,propertyKey:PropertyKey,value:any,receiver?:any):boolean;function setPrototypeOf(target:object,proto:object|null):boolean;}', "lib.es2015.symbol.d.ts": '/// <reference no-default-lib="true"/>\ninterface SymbolConstructor{readonly prototype:Symbol;(description?:string|number):symbol;for(key:string):symbol;keyFor(sym:symbol):string|undefined;}declare var Symbol:SymbolConstructor;', "lib.es2015.symbol.wellknown.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\ninterface SymbolConstructor{readonly hasInstance:unique symbol;readonly isConcatSpreadable:unique symbol;readonly match:unique symbol;readonly replace:unique symbol;readonly search:unique symbol;readonly species:unique symbol;readonly split:unique symbol;readonly toPrimitive:unique symbol;readonly toStringTag:unique symbol;readonly unscopables:unique symbol;}interface Symbol{[Symbol.toPrimitive](hint:string):symbol;readonly[Symbol.toStringTag]:string;}interface Array<T>{readonly[Symbol.unscopables]:{[K in keyof any[]]?:boolean;};}interface ReadonlyArray<T>{readonly[Symbol.unscopables]:{[K in keyof readonly any[]]?:boolean;};}interface Date{[Symbol.toPrimitive](hint:"default"):string;[Symbol.toPrimitive](hint:"string"):string;[Symbol.toPrimitive](hint:"number"):number;[Symbol.toPrimitive](hint:string):string|number;}interface Map<K,V>{readonly[Symbol.toStringTag]:string;}interface WeakMap<K extends WeakKey,V>{readonly[Symbol.toStringTag]:string;}interface Set<T>{readonly[Symbol.toStringTag]:string;}interface WeakSet<T extends WeakKey>{readonly[Symbol.toStringTag]:string;}interface JSON{readonly[Symbol.toStringTag]:string;}interface Function{[Symbol.hasInstance](value:any):boolean;}interface GeneratorFunction{readonly[Symbol.toStringTag]:string;}interface Math{readonly[Symbol.toStringTag]:string;}interface Promise<T>{readonly[Symbol.toStringTag]:string;}interface PromiseConstructor{readonly[Symbol.species]:PromiseConstructor;}interface RegExp{[Symbol.match](string:string):RegExpMatchArray|null;[Symbol.replace](string:string,replaceValue:string):string;[Symbol.replace](string:string,replacer:(substring:string,...args:any[])=>string):string;[Symbol.search](string:string):number;[Symbol.split](string:string,limit?:number):string[];}interface RegExpConstructor{readonly[Symbol.species]:RegExpConstructor;}interface String{match(matcher:{[Symbol.match](string:string):RegExpMatchArray|null;}):RegExpMatchArray|null;replace(searchValue:{[Symbol.replace](string:string,replaceValue:string):string;},replaceValue:string):string;replace(searchValue:{[Symbol.replace](string:string,replacer:(substring:string,...args:any[])=>string):string;},replacer:(substring:string,...args:any[])=>string):string;search(searcher:{[Symbol.search](string:string):number;}):number;split(splitter:{[Symbol.split](string:string,limit?:number):string[];},limit?:number):string[];}interface ArrayBuffer{readonly[Symbol.toStringTag]:string;}interface DataView<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:string;}interface Int8Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Int8Array";}interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Uint8Array";}interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Uint8ClampedArray";}interface Int16Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Int16Array";}interface Uint16Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Uint16Array";}interface Int32Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Int32Array";}interface Uint32Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Uint32Array";}interface Float32Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Float32Array";}interface Float64Array<TArrayBuffer extends ArrayBufferLike>{readonly[Symbol.toStringTag]:"Float64Array";}interface ArrayConstructor{readonly[Symbol.species]:ArrayConstructor;}interface MapConstructor{readonly[Symbol.species]:MapConstructor;}interface SetConstructor{readonly[Symbol.species]:SetConstructor;}interface ArrayBufferConstructor{readonly[Symbol.species]:ArrayBufferConstructor;}', "lib.es2016.array.include.d.ts": '/// <reference no-default-lib="true"/>\ninterface Array<T>{includes(searchElement:T,fromIndex?:number):boolean;}interface ReadonlyArray<T>{includes(searchElement:T,fromIndex?:number):boolean;}interface Int8Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Int16Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Uint16Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Int32Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Uint32Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Float32Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}interface Float64Array<TArrayBuffer extends ArrayBufferLike>{includes(searchElement:number,fromIndex?:number):boolean;}', "lib.es2016.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015" />\n/// <reference lib="es2016.array.include" />\n/// <reference lib="es2016.intl" />\n', "lib.es2016.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2016" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n', "lib.es2016.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{function getCanonicalLocales(locale?:string|readonly string[]):string[];}', "lib.es2017.arraybuffer.d.ts": '/// <reference no-default-lib="true"/>\ninterface ArrayBufferConstructor{new():ArrayBuffer;}', "lib.es2017.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2016" />\n/// <reference lib="es2017.arraybuffer" />\n/// <reference lib="es2017.date" />\n/// <reference lib="es2017.intl" />\n/// <reference lib="es2017.object" />\n/// <reference lib="es2017.sharedmemory" />\n/// <reference lib="es2017.string" />\n/// <reference lib="es2017.typedarrays" />\n', "lib.es2017.date.d.ts": '/// <reference no-default-lib="true"/>\ninterface DateConstructor{UTC(year:number,monthIndex?:number,date?:number,hours?:number,minutes?:number,seconds?:number,ms?:number):number;}', "lib.es2017.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2017" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n', "lib.es2017.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{interface DateTimeFormatPartTypesRegistry{day:any;dayPeriod:any;era:any;hour:any;literal:any;minute:any;month:any;second:any;timeZoneName:any;weekday:any;year:any;}type DateTimeFormatPartTypes=keyof DateTimeFormatPartTypesRegistry;interface DateTimeFormatPart{type:DateTimeFormatPartTypes;value:string;}interface DateTimeFormat{formatToParts(date?:Date|number):DateTimeFormatPart[];}}', "lib.es2017.object.d.ts": '/// <reference no-default-lib="true"/>\ninterface ObjectConstructor{values<T>(o:{[s:string]:T;}|ArrayLike<T>):T[];values(o:{}):any[];entries<T>(o:{[s:string]:T;}|ArrayLike<T>):[string,T][];entries(o:{}):[string,any][];getOwnPropertyDescriptors<T>(o:T):{[P in keyof T]:TypedPropertyDescriptor<T[P]>;}&{[x:string]:PropertyDescriptor;};}', "lib.es2017.sharedmemory.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\n/// <reference lib="es2015.symbol.wellknown" />\ninterface SharedArrayBuffer{readonly byteLength:number;slice(begin?:number,end?:number):SharedArrayBuffer;readonly[Symbol.species]:SharedArrayBuffer;readonly[Symbol.toStringTag]:"SharedArrayBuffer";}interface SharedArrayBufferConstructor{readonly prototype:SharedArrayBuffer;new(byteLength?:number):SharedArrayBuffer;}declare var SharedArrayBuffer:SharedArrayBufferConstructor;interface ArrayBufferTypes{SharedArrayBuffer:SharedArrayBuffer;}interface Atomics{add(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;and(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;compareExchange(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,expectedValue:number,replacementValue:number):number;exchange(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;isLockFree(size:number):boolean;load(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number):number;or(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;store(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;sub(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;wait(typedArray:Int32Array<ArrayBufferLike>,index:number,value:number,timeout?:number):"ok"|"not-equal"|"timed-out";notify(typedArray:Int32Array<ArrayBufferLike>,index:number,count?:number):number;xor(typedArray:Int8Array<ArrayBufferLike>|Uint8Array<ArrayBufferLike>|Int16Array<ArrayBufferLike>|Uint16Array<ArrayBufferLike>|Int32Array<ArrayBufferLike>|Uint32Array<ArrayBufferLike>,index:number,value:number):number;readonly[Symbol.toStringTag]:"Atomics";}declare var Atomics:Atomics;', "lib.es2017.string.d.ts": '/// <reference no-default-lib="true"/>\ninterface String{padStart(maxLength:number,fillString?:string):string;padEnd(maxLength:number,fillString?:string):string;}', "lib.es2017.typedarrays.d.ts": '/// <reference no-default-lib="true"/>\ninterface Int8ArrayConstructor{new():Int8Array<ArrayBuffer>;}interface Uint8ArrayConstructor{new():Uint8Array<ArrayBuffer>;}interface Uint8ClampedArrayConstructor{new():Uint8ClampedArray<ArrayBuffer>;}interface Int16ArrayConstructor{new():Int16Array<ArrayBuffer>;}interface Uint16ArrayConstructor{new():Uint16Array<ArrayBuffer>;}interface Int32ArrayConstructor{new():Int32Array<ArrayBuffer>;}interface Uint32ArrayConstructor{new():Uint32Array<ArrayBuffer>;}interface Float32ArrayConstructor{new():Float32Array<ArrayBuffer>;}interface Float64ArrayConstructor{new():Float64Array<ArrayBuffer>;}', "lib.es2018.asyncgenerator.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2018.asynciterable" />\ninterface AsyncGenerator<T=unknown,TReturn=any,TNext=any>extends AsyncIteratorObject<T,TReturn,TNext>{next(...[value]:[]|[TNext]):Promise<IteratorResult<T,TReturn>>;return(value:TReturn|PromiseLike<TReturn>):Promise<IteratorResult<T,TReturn>>;throw(e:any):Promise<IteratorResult<T,TReturn>>;[Symbol.asyncIterator]():AsyncGenerator<T,TReturn,TNext>;}interface AsyncGeneratorFunction{new(...args:any[]):AsyncGenerator;(...args:any[]):AsyncGenerator;readonly length:number;readonly name:string;readonly prototype:AsyncGenerator;}interface AsyncGeneratorFunctionConstructor{new(...args:string[]):AsyncGeneratorFunction;(...args:string[]):AsyncGeneratorFunction;readonly length:number;readonly name:string;readonly prototype:AsyncGeneratorFunction;}', "lib.es2018.asynciterable.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\n/// <reference lib="es2015.iterable" />\ninterface SymbolConstructor{readonly asyncIterator:unique symbol;}interface AsyncIterator<T,TReturn=any,TNext=any>{next(...[value]:[]|[TNext]):Promise<IteratorResult<T,TReturn>>;return?(value?:TReturn|PromiseLike<TReturn>):Promise<IteratorResult<T,TReturn>>;throw?(e?:any):Promise<IteratorResult<T,TReturn>>;}interface AsyncIterable<T,TReturn=any,TNext=any>{[Symbol.asyncIterator]():AsyncIterator<T,TReturn,TNext>;}interface AsyncIterableIterator<T,TReturn=any,TNext=any>extends AsyncIterator<T,TReturn,TNext>{[Symbol.asyncIterator]():AsyncIterableIterator<T,TReturn,TNext>;}interface AsyncIteratorObject<T,TReturn=unknown,TNext=unknown>extends AsyncIterator<T,TReturn,TNext>{[Symbol.asyncIterator]():AsyncIteratorObject<T,TReturn,TNext>;}', "lib.es2018.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2017" />\n/// <reference lib="es2018.asynciterable" />\n/// <reference lib="es2018.asyncgenerator" />\n/// <reference lib="es2018.promise" />\n/// <reference lib="es2018.regexp" />\n/// <reference lib="es2018.intl" />\n', "lib.es2018.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2018" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2018.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{type LDMLPluralRule="zero"|"one"|"two"|"few"|"many"|"other";type PluralRuleType="cardinal"|"ordinal";interface PluralRulesOptions{localeMatcher?:"lookup"|"best fit"|undefined;type?:PluralRuleType|undefined;minimumIntegerDigits?:number|undefined;minimumFractionDigits?:number|undefined;maximumFractionDigits?:number|undefined;minimumSignificantDigits?:number|undefined;maximumSignificantDigits?:number|undefined;}interface ResolvedPluralRulesOptions{locale:string;pluralCategories:LDMLPluralRule[];type:PluralRuleType;minimumIntegerDigits:number;minimumFractionDigits:number;maximumFractionDigits:number;minimumSignificantDigits?:number;maximumSignificantDigits?:number;}interface PluralRules{resolvedOptions():ResolvedPluralRulesOptions;select(n:number):LDMLPluralRule;}interface PluralRulesConstructor{new(locales?:string|readonly string[],options?:PluralRulesOptions):PluralRules;(locales?:string|readonly string[],options?:PluralRulesOptions):PluralRules;supportedLocalesOf(locales:string|readonly string[],options?:{localeMatcher?:"lookup"|"best fit";}):string[];}const PluralRules:PluralRulesConstructor;interface NumberFormatPartTypeRegistry{literal:never;nan:never;infinity:never;percent:never;integer:never;group:never;decimal:never;fraction:never;plusSign:never;minusSign:never;percentSign:never;currency:never;}type NumberFormatPartTypes=keyof NumberFormatPartTypeRegistry;interface NumberFormatPart{type:NumberFormatPartTypes;value:string;}interface NumberFormat{formatToParts(number?:number|bigint):NumberFormatPart[];}}', "lib.es2018.promise.d.ts": '/// <reference no-default-lib="true"/>\ninterface Promise<T>{finally(onfinally?:(()=>void)|undefined|null):Promise<T>;}', "lib.es2018.regexp.d.ts": '/// <reference no-default-lib="true"/>\ninterface RegExpMatchArray{groups?:{[key:string]:string;};}interface RegExpExecArray{groups?:{[key:string]:string;};}interface RegExp{readonly dotAll:boolean;}', "lib.es2019.array.d.ts": '/// <reference no-default-lib="true"/>\ntype FlatArray<Arr,Depth extends number>={done:Arr;recur:Arr extends ReadonlyArray<infer InnerArr>?FlatArray<InnerArr,[-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20][Depth]>:Arr;}[Depth extends-1?"done":"recur"];interface ReadonlyArray<T>{flatMap<U,This=undefined>(callback:(this:This,value:T,index:number,array:T[])=>U|ReadonlyArray<U>,thisArg?:This,):U[];flat<A,D extends number=1>(this:A,depth?:D,):FlatArray<A,D>[];}interface Array<T>{flatMap<U,This=undefined>(callback:(this:This,value:T,index:number,array:T[])=>U|ReadonlyArray<U>,thisArg?:This,):U[];flat<A,D extends number=1>(this:A,depth?:D,):FlatArray<A,D>[];}', "lib.es2019.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2018" />\n/// <reference lib="es2019.array" />\n/// <reference lib="es2019.object" />\n/// <reference lib="es2019.string" />\n/// <reference lib="es2019.symbol" />\n/// <reference lib="es2019.intl" />\n', "lib.es2019.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2019" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2019.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{interface DateTimeFormatPartTypesRegistry{unknown:never;}}', "lib.es2019.object.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.iterable" />\ninterface ObjectConstructor{fromEntries<T=any>(entries:Iterable<readonly[PropertyKey,T]>):{[k:string]:T;};fromEntries(entries:Iterable<readonly any[]>):any;}', "lib.es2019.string.d.ts": '/// <reference no-default-lib="true"/>\ninterface String{trimEnd():string;trimStart():string;trimLeft():string;trimRight():string;}', "lib.es2019.symbol.d.ts": '/// <reference no-default-lib="true"/>\ninterface Symbol{readonly description:string|undefined;}', "lib.es2020.bigint.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020.intl" />\ninterface BigIntToLocaleStringOptions{localeMatcher?:string;style?:string;numberingSystem?:string;unit?:string;unitDisplay?:string;currency?:string;currencyDisplay?:string;useGrouping?:boolean;minimumIntegerDigits?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;minimumFractionDigits?:0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;maximumFractionDigits?:0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;minimumSignificantDigits?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;maximumSignificantDigits?:1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;notation?:string;compactDisplay?:string;}interface BigInt{toString(radix?:number):string;toLocaleString(locales?:Intl.LocalesArgument,options?:BigIntToLocaleStringOptions):string;valueOf():bigint;readonly[Symbol.toStringTag]:"BigInt";}interface BigIntConstructor{(value:bigint|boolean|number|string):bigint;readonly prototype:BigInt;asIntN(bits:number,int:bigint):bigint;asUintN(bits:number,int:bigint):bigint;}declare var BigInt:BigIntConstructor;interface BigInt64Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;entries():ArrayIterator<[number,bigint]>;every(predicate:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>boolean,thisArg?:any):boolean;fill(value:bigint,start?:number,end?:number):this;filter(predicate:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>any,thisArg?:any):BigInt64Array<ArrayBuffer>;find(predicate:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>boolean,thisArg?:any):bigint|undefined;findIndex(predicate:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>void,thisArg?:any):void;includes(searchElement:bigint,fromIndex?:number):boolean;indexOf(searchElement:bigint,fromIndex?:number):number;join(separator?:string):string;keys():ArrayIterator<number>;lastIndexOf(searchElement:bigint,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>bigint,thisArg?:any):BigInt64Array<ArrayBuffer>;reduce(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigInt64Array<TArrayBuffer>)=>bigint):bigint;reduce<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigInt64Array<TArrayBuffer>)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigInt64Array<TArrayBuffer>)=>bigint):bigint;reduceRight<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigInt64Array<TArrayBuffer>)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<bigint>,offset?:number):void;slice(start?:number,end?:number):BigInt64Array<ArrayBuffer>;some(predicate:(value:bigint,index:number,array:BigInt64Array<TArrayBuffer>)=>boolean,thisArg?:any):boolean;sort(compareFn?:(a:bigint,b:bigint)=>number|bigint):this;subarray(begin?:number,end?:number):BigInt64Array<TArrayBuffer>;toLocaleString(locales?:string|string[],options?:Intl.NumberFormatOptions):string;toString():string;valueOf():BigInt64Array<TArrayBuffer>;values():ArrayIterator<bigint>;[Symbol.iterator]():ArrayIterator<bigint>;readonly[Symbol.toStringTag]:"BigInt64Array";[index:number]:bigint;}interface BigInt64ArrayConstructor{readonly prototype:BigInt64Array<ArrayBufferLike>;new(length?:number):BigInt64Array<ArrayBuffer>;new(array:ArrayLike<bigint>|Iterable<bigint>):BigInt64Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):BigInt64Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):BigInt64Array<ArrayBuffer>;new(array:ArrayLike<bigint>|ArrayBuffer):BigInt64Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:bigint[]):BigInt64Array<ArrayBuffer>;from(arrayLike:ArrayLike<bigint>):BigInt64Array<ArrayBuffer>;from<U>(arrayLike:ArrayLike<U>,mapfn:(v:U,k:number)=>bigint,thisArg?:any):BigInt64Array<ArrayBuffer>;from(elements:Iterable<bigint>):BigInt64Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>bigint,thisArg?:any):BigInt64Array<ArrayBuffer>;}declare var BigInt64Array:BigInt64ArrayConstructor;interface BigUint64Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;entries():ArrayIterator<[number,bigint]>;every(predicate:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>boolean,thisArg?:any):boolean;fill(value:bigint,start?:number,end?:number):this;filter(predicate:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>any,thisArg?:any):BigUint64Array<ArrayBuffer>;find(predicate:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>boolean,thisArg?:any):bigint|undefined;findIndex(predicate:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>void,thisArg?:any):void;includes(searchElement:bigint,fromIndex?:number):boolean;indexOf(searchElement:bigint,fromIndex?:number):number;join(separator?:string):string;keys():ArrayIterator<number>;lastIndexOf(searchElement:bigint,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>bigint,thisArg?:any):BigUint64Array<ArrayBuffer>;reduce(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigUint64Array<TArrayBuffer>)=>bigint):bigint;reduce<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigUint64Array<TArrayBuffer>)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:bigint,currentValue:bigint,currentIndex:number,array:BigUint64Array<TArrayBuffer>)=>bigint):bigint;reduceRight<U>(callbackfn:(previousValue:U,currentValue:bigint,currentIndex:number,array:BigUint64Array<TArrayBuffer>)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<bigint>,offset?:number):void;slice(start?:number,end?:number):BigUint64Array<ArrayBuffer>;some(predicate:(value:bigint,index:number,array:BigUint64Array<TArrayBuffer>)=>boolean,thisArg?:any):boolean;sort(compareFn?:(a:bigint,b:bigint)=>number|bigint):this;subarray(begin?:number,end?:number):BigUint64Array<TArrayBuffer>;toLocaleString(locales?:string|string[],options?:Intl.NumberFormatOptions):string;toString():string;valueOf():BigUint64Array<TArrayBuffer>;values():ArrayIterator<bigint>;[Symbol.iterator]():ArrayIterator<bigint>;readonly[Symbol.toStringTag]:"BigUint64Array";[index:number]:bigint;}interface BigUint64ArrayConstructor{readonly prototype:BigUint64Array<ArrayBufferLike>;new(length?:number):BigUint64Array<ArrayBuffer>;new(array:ArrayLike<bigint>|Iterable<bigint>):BigUint64Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):BigUint64Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):BigUint64Array<ArrayBuffer>;new(array:ArrayLike<bigint>|ArrayBuffer):BigUint64Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:bigint[]):BigUint64Array<ArrayBuffer>;from(arrayLike:ArrayLike<bigint>):BigUint64Array<ArrayBuffer>;from<U>(arrayLike:ArrayLike<U>,mapfn:(v:U,k:number)=>bigint,thisArg?:any):BigUint64Array<ArrayBuffer>;from(elements:Iterable<bigint>):BigUint64Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>bigint,thisArg?:any):BigUint64Array<ArrayBuffer>;}declare var BigUint64Array:BigUint64ArrayConstructor;interface DataView<TArrayBuffer extends ArrayBufferLike>{getBigInt64(byteOffset:number,littleEndian?:boolean):bigint;getBigUint64(byteOffset:number,littleEndian?:boolean):bigint;setBigInt64(byteOffset:number,value:bigint,littleEndian?:boolean):void;setBigUint64(byteOffset:number,value:bigint,littleEndian?:boolean):void;}declare namespace Intl{interface NumberFormat{format(value:number|bigint):string;}}', "lib.es2020.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2019" />\n/// <reference lib="es2020.bigint" />\n/// <reference lib="es2020.date" />\n/// <reference lib="es2020.number" />\n/// <reference lib="es2020.promise" />\n/// <reference lib="es2020.sharedmemory" />\n/// <reference lib="es2020.string" />\n/// <reference lib="es2020.symbol.wellknown" />\n/// <reference lib="es2020.intl" />\n', "lib.es2020.date.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020.intl" />\ninterface Date{toLocaleString(locales?:Intl.LocalesArgument,options?:Intl.DateTimeFormatOptions):string;toLocaleDateString(locales?:Intl.LocalesArgument,options?:Intl.DateTimeFormatOptions):string;toLocaleTimeString(locales?:Intl.LocalesArgument,options?:Intl.DateTimeFormatOptions):string;}', "lib.es2020.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2020.intl.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2018.intl" />\ndeclare namespace Intl{type UnicodeBCP47LocaleIdentifier=string;type RelativeTimeFormatUnit=|"year"|"years"|"quarter"|"quarters"|"month"|"months"|"week"|"weeks"|"day"|"days"|"hour"|"hours"|"minute"|"minutes"|"second"|"seconds";type RelativeTimeFormatUnitSingular=|"year"|"quarter"|"month"|"week"|"day"|"hour"|"minute"|"second";type RelativeTimeFormatLocaleMatcher="lookup"|"best fit";type RelativeTimeFormatNumeric="always"|"auto";type RelativeTimeFormatStyle="long"|"short"|"narrow";type LocalesArgument=UnicodeBCP47LocaleIdentifier|Locale|readonly(UnicodeBCP47LocaleIdentifier|Locale)[]|undefined;interface RelativeTimeFormatOptions{localeMatcher?:RelativeTimeFormatLocaleMatcher;numeric?:RelativeTimeFormatNumeric;style?:RelativeTimeFormatStyle;}interface ResolvedRelativeTimeFormatOptions{locale:UnicodeBCP47LocaleIdentifier;style:RelativeTimeFormatStyle;numeric:RelativeTimeFormatNumeric;numberingSystem:string;}type RelativeTimeFormatPart=|{type:"literal";value:string;}|{type:Exclude<NumberFormatPartTypes,"literal">;value:string;unit:RelativeTimeFormatUnitSingular;};interface RelativeTimeFormat{format(value:number,unit:RelativeTimeFormatUnit):string;formatToParts(value:number,unit:RelativeTimeFormatUnit):RelativeTimeFormatPart[];resolvedOptions():ResolvedRelativeTimeFormatOptions;}const RelativeTimeFormat:{new(locales?:LocalesArgument,options?:RelativeTimeFormatOptions,):RelativeTimeFormat;supportedLocalesOf(locales?:LocalesArgument,options?:RelativeTimeFormatOptions,):UnicodeBCP47LocaleIdentifier[];};interface NumberFormatOptionsStyleRegistry{unit:never;}interface NumberFormatOptionsCurrencyDisplayRegistry{narrowSymbol:never;}interface NumberFormatOptionsSignDisplayRegistry{auto:never;never:never;always:never;exceptZero:never;}type NumberFormatOptionsSignDisplay=keyof NumberFormatOptionsSignDisplayRegistry;interface NumberFormatOptions{numberingSystem?:string|undefined;compactDisplay?:"short"|"long"|undefined;notation?:"standard"|"scientific"|"engineering"|"compact"|undefined;signDisplay?:NumberFormatOptionsSignDisplay|undefined;unit?:string|undefined;unitDisplay?:"short"|"long"|"narrow"|undefined;currencySign?:"standard"|"accounting"|undefined;}interface ResolvedNumberFormatOptions{compactDisplay?:"short"|"long";notation:"standard"|"scientific"|"engineering"|"compact";signDisplay:NumberFormatOptionsSignDisplay;unit?:string;unitDisplay?:"short"|"long"|"narrow";currencySign?:"standard"|"accounting";}interface NumberFormatPartTypeRegistry{compact:never;exponentInteger:never;exponentMinusSign:never;exponentSeparator:never;unit:never;unknown:never;}interface DateTimeFormatOptions{calendar?:string|undefined;dayPeriod?:"narrow"|"short"|"long"|undefined;numberingSystem?:string|undefined;dateStyle?:"full"|"long"|"medium"|"short"|undefined;timeStyle?:"full"|"long"|"medium"|"short"|undefined;hourCycle?:"h11"|"h12"|"h23"|"h24"|undefined;}type LocaleHourCycleKey="h12"|"h23"|"h11"|"h24";type LocaleCollationCaseFirst="upper"|"lower"|"false";interface LocaleOptions{baseName?:string;calendar?:string;caseFirst?:LocaleCollationCaseFirst;collation?:string;hourCycle?:LocaleHourCycleKey;language?:string;numberingSystem?:string;numeric?:boolean;region?:string;script?:string;}interface Locale extends LocaleOptions{baseName:string;language:string;maximize():Locale;minimize():Locale;toString():UnicodeBCP47LocaleIdentifier;}const Locale:{new(tag:UnicodeBCP47LocaleIdentifier|Locale,options?:LocaleOptions):Locale;};type DisplayNamesFallback=|"code"|"none";type DisplayNamesType=|"language"|"region"|"script"|"calendar"|"dateTimeField"|"currency";type DisplayNamesLanguageDisplay=|"dialect"|"standard";interface DisplayNamesOptions{localeMatcher?:RelativeTimeFormatLocaleMatcher;style?:RelativeTimeFormatStyle;type:DisplayNamesType;languageDisplay?:DisplayNamesLanguageDisplay;fallback?:DisplayNamesFallback;}interface ResolvedDisplayNamesOptions{locale:UnicodeBCP47LocaleIdentifier;style:RelativeTimeFormatStyle;type:DisplayNamesType;fallback:DisplayNamesFallback;languageDisplay?:DisplayNamesLanguageDisplay;}interface DisplayNames{of(code:string):string|undefined;resolvedOptions():ResolvedDisplayNamesOptions;}const DisplayNames:{prototype:DisplayNames;new(locales:LocalesArgument,options:DisplayNamesOptions):DisplayNames;supportedLocalesOf(locales?:LocalesArgument,options?:{localeMatcher?:RelativeTimeFormatLocaleMatcher;}):UnicodeBCP47LocaleIdentifier[];};interface CollatorConstructor{new(locales?:LocalesArgument,options?:CollatorOptions):Collator;(locales?:LocalesArgument,options?:CollatorOptions):Collator;supportedLocalesOf(locales:LocalesArgument,options?:CollatorOptions):string[];}interface DateTimeFormatConstructor{new(locales?:LocalesArgument,options?:DateTimeFormatOptions):DateTimeFormat;(locales?:LocalesArgument,options?:DateTimeFormatOptions):DateTimeFormat;supportedLocalesOf(locales:LocalesArgument,options?:DateTimeFormatOptions):string[];}interface NumberFormatConstructor{new(locales?:LocalesArgument,options?:NumberFormatOptions):NumberFormat;(locales?:LocalesArgument,options?:NumberFormatOptions):NumberFormat;supportedLocalesOf(locales:LocalesArgument,options?:NumberFormatOptions):string[];}interface PluralRulesConstructor{new(locales?:LocalesArgument,options?:PluralRulesOptions):PluralRules;(locales?:LocalesArgument,options?:PluralRulesOptions):PluralRules;supportedLocalesOf(locales:LocalesArgument,options?:{localeMatcher?:"lookup"|"best fit";}):string[];}}', "lib.es2020.number.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020.intl" />\ninterface Number{toLocaleString(locales?:Intl.LocalesArgument,options?:Intl.NumberFormatOptions):string;}', "lib.es2020.promise.d.ts": '/// <reference no-default-lib="true"/>\ninterface PromiseFulfilledResult<T>{status:"fulfilled";value:T;}interface PromiseRejectedResult{status:"rejected";reason:any;}type PromiseSettledResult<T>=PromiseFulfilledResult<T>|PromiseRejectedResult;interface PromiseConstructor{allSettled<T extends readonly unknown[]|[]>(values:T):Promise<{-readonly[P in keyof T]:PromiseSettledResult<Awaited<T[P]>>;}>;allSettled<T>(values:Iterable<T|PromiseLike<T>>):Promise<PromiseSettledResult<Awaited<T>>[]>;}', "lib.es2020.sharedmemory.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020.bigint" />\ninterface Atomics{add(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;and(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;compareExchange(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,expectedValue:bigint,replacementValue:bigint):bigint;exchange(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;load(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number):bigint;or(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;store(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;sub(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;wait(typedArray:BigInt64Array<ArrayBufferLike>,index:number,value:bigint,timeout?:number):"ok"|"not-equal"|"timed-out";notify(typedArray:BigInt64Array<ArrayBufferLike>,index:number,count?:number):number;xor(typedArray:BigInt64Array<ArrayBufferLike>|BigUint64Array<ArrayBufferLike>,index:number,value:bigint):bigint;}', "lib.es2020.string.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.iterable" />\n/// <reference lib="es2020.intl" />\n/// <reference lib="es2020.symbol.wellknown" />\ninterface String{matchAll(regexp:RegExp):RegExpStringIterator<RegExpExecArray>;toLocaleLowerCase(locales?:Intl.LocalesArgument):string;toLocaleUpperCase(locales?:Intl.LocalesArgument):string;localeCompare(that:string,locales?:Intl.LocalesArgument,options?:Intl.CollatorOptions):number;}', "lib.es2020.symbol.wellknown.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.iterable" />\n/// <reference lib="es2015.symbol" />\ninterface SymbolConstructor{readonly matchAll:unique symbol;}interface RegExpStringIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():RegExpStringIterator<T>;}interface RegExp{[Symbol.matchAll](str:string):RegExpStringIterator<RegExpMatchArray>;}', "lib.es2021.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020" />\n/// <reference lib="es2021.promise" />\n/// <reference lib="es2021.string" />\n/// <reference lib="es2021.weakref" />\n/// <reference lib="es2021.intl" />\n', "lib.es2021.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2021" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2021.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{interface DateTimeFormatPartTypesRegistry{fractionalSecond:any;}interface DateTimeFormatOptions{formatMatcher?:"basic"|"best fit"|"best fit"|undefined;dateStyle?:"full"|"long"|"medium"|"short"|undefined;timeStyle?:"full"|"long"|"medium"|"short"|undefined;dayPeriod?:"narrow"|"short"|"long"|undefined;fractionalSecondDigits?:1|2|3|undefined;}interface DateTimeRangeFormatPart extends DateTimeFormatPart{source:"startRange"|"endRange"|"shared";}interface DateTimeFormat{formatRange(startDate:Date|number|bigint,endDate:Date|number|bigint):string;formatRangeToParts(startDate:Date|number|bigint,endDate:Date|number|bigint):DateTimeRangeFormatPart[];}interface ResolvedDateTimeFormatOptions{formatMatcher?:"basic"|"best fit"|"best fit";dateStyle?:"full"|"long"|"medium"|"short";timeStyle?:"full"|"long"|"medium"|"short";hourCycle?:"h11"|"h12"|"h23"|"h24";dayPeriod?:"narrow"|"short"|"long";fractionalSecondDigits?:1|2|3;}type ListFormatLocaleMatcher="lookup"|"best fit";type ListFormatType="conjunction"|"disjunction"|"unit";type ListFormatStyle="long"|"short"|"narrow";interface ListFormatOptions{localeMatcher?:ListFormatLocaleMatcher|undefined;type?:ListFormatType|undefined;style?:ListFormatStyle|undefined;}interface ResolvedListFormatOptions{locale:string;style:ListFormatStyle;type:ListFormatType;}interface ListFormat{format(list:Iterable<string>):string;formatToParts(list:Iterable<string>):{type:"element"|"literal";value:string;}[];resolvedOptions():ResolvedListFormatOptions;}const ListFormat:{prototype:ListFormat;new(locales?:LocalesArgument,options?:ListFormatOptions):ListFormat;supportedLocalesOf(locales:LocalesArgument,options?:Pick<ListFormatOptions,"localeMatcher">):UnicodeBCP47LocaleIdentifier[];};}', "lib.es2021.promise.d.ts": '/// <reference no-default-lib="true"/>\ninterface AggregateError extends Error{errors:any[];}interface AggregateErrorConstructor{new(errors:Iterable<any>,message?:string):AggregateError;(errors:Iterable<any>,message?:string):AggregateError;readonly prototype:AggregateError;}declare var AggregateError:AggregateErrorConstructor;interface PromiseConstructor{any<T extends readonly unknown[]|[]>(values:T):Promise<Awaited<T[number]>>;any<T>(values:Iterable<T|PromiseLike<T>>):Promise<Awaited<T>>;}', "lib.es2021.string.d.ts": '/// <reference no-default-lib="true"/>\ninterface String{replaceAll(searchValue:string|RegExp,replaceValue:string):string;replaceAll(searchValue:string|RegExp,replacer:(substring:string,...args:any[])=>string):string;}', "lib.es2021.weakref.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol.wellknown" />\ninterface WeakRef<T extends WeakKey>{readonly[Symbol.toStringTag]:"WeakRef";deref():T|undefined;}interface WeakRefConstructor{readonly prototype:WeakRef<any>;new<T extends WeakKey>(target:T):WeakRef<T>;}declare var WeakRef:WeakRefConstructor;interface FinalizationRegistry<T>{readonly[Symbol.toStringTag]:"FinalizationRegistry";register(target:WeakKey,heldValue:T,unregisterToken?:WeakKey):void;unregister(unregisterToken:WeakKey):boolean;}interface FinalizationRegistryConstructor{readonly prototype:FinalizationRegistry<any>;new<T>(cleanupCallback:(heldValue:T)=>void):FinalizationRegistry<T>;}declare var FinalizationRegistry:FinalizationRegistryConstructor;', "lib.es2022.array.d.ts": '/// <reference no-default-lib="true"/>\ninterface Array<T>{at(index:number):T|undefined;}interface ReadonlyArray<T>{at(index:number):T|undefined;}interface Int8Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Int16Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Uint16Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Int32Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Uint32Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Float32Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface Float64Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):number|undefined;}interface BigInt64Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):bigint|undefined;}interface BigUint64Array<TArrayBuffer extends ArrayBufferLike>{at(index:number):bigint|undefined;}', "lib.es2022.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2021" />\n/// <reference lib="es2022.array" />\n/// <reference lib="es2022.error" />\n/// <reference lib="es2022.intl" />\n/// <reference lib="es2022.object" />\n/// <reference lib="es2022.regexp" />\n/// <reference lib="es2022.string" />\n', "lib.es2022.error.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2021.promise" />\ninterface ErrorOptions{cause?:unknown;}interface Error{cause?:unknown;}interface ErrorConstructor{new(message?:string,options?:ErrorOptions):Error;(message?:string,options?:ErrorOptions):Error;}interface EvalErrorConstructor{new(message?:string,options?:ErrorOptions):EvalError;(message?:string,options?:ErrorOptions):EvalError;}interface RangeErrorConstructor{new(message?:string,options?:ErrorOptions):RangeError;(message?:string,options?:ErrorOptions):RangeError;}interface ReferenceErrorConstructor{new(message?:string,options?:ErrorOptions):ReferenceError;(message?:string,options?:ErrorOptions):ReferenceError;}interface SyntaxErrorConstructor{new(message?:string,options?:ErrorOptions):SyntaxError;(message?:string,options?:ErrorOptions):SyntaxError;}interface TypeErrorConstructor{new(message?:string,options?:ErrorOptions):TypeError;(message?:string,options?:ErrorOptions):TypeError;}interface URIErrorConstructor{new(message?:string,options?:ErrorOptions):URIError;(message?:string,options?:ErrorOptions):URIError;}interface AggregateErrorConstructor{new(errors:Iterable<any>,message?:string,options?:ErrorOptions,):AggregateError;(errors:Iterable<any>,message?:string,options?:ErrorOptions,):AggregateError;}', "lib.es2022.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2022" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2022.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{interface SegmenterOptions{localeMatcher?:"best fit"|"lookup"|undefined;granularity?:"grapheme"|"word"|"sentence"|undefined;}interface Segmenter{segment(input:string):Segments;resolvedOptions():ResolvedSegmenterOptions;}interface ResolvedSegmenterOptions{locale:string;granularity:"grapheme"|"word"|"sentence";}interface SegmentIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():SegmentIterator<T>;}interface Segments{containing(codeUnitIndex?:number):SegmentData;[Symbol.iterator]():SegmentIterator<SegmentData>;}interface SegmentData{segment:string;index:number;input:string;isWordLike?:boolean;}const Segmenter:{prototype:Segmenter;new(locales?:LocalesArgument,options?:SegmenterOptions):Segmenter;supportedLocalesOf(locales:LocalesArgument,options?:Pick<SegmenterOptions,"localeMatcher">):UnicodeBCP47LocaleIdentifier[];};function supportedValuesOf(key:"calendar"|"collation"|"currency"|"numberingSystem"|"timeZone"|"unit"):string[];}', "lib.es2022.object.d.ts": '/// <reference no-default-lib="true"/>\ninterface ObjectConstructor{hasOwn(o:object,v:PropertyKey):boolean;}', "lib.es2022.regexp.d.ts": '/// <reference no-default-lib="true"/>\ninterface RegExpMatchArray{indices?:RegExpIndicesArray;}interface RegExpExecArray{indices?:RegExpIndicesArray;}interface RegExpIndicesArray extends Array<[number,number]>{groups?:{[key:string]:[number,number];};}interface RegExp{readonly hasIndices:boolean;}', "lib.es2022.string.d.ts": '/// <reference no-default-lib="true"/>\ninterface String{at(index:number):string|undefined;}', "lib.es2023.array.d.ts": '/// <reference no-default-lib="true"/>\ninterface Array<T>{findLast<S extends T>(predicate:(value:T,index:number,array:T[])=>value is S,thisArg?:any):S|undefined;findLast(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):T|undefined;findLastIndex(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):number;toReversed():T[];toSorted(compareFn?:(a:T,b:T)=>number):T[];toSpliced(start:number,deleteCount:number,...items:T[]):T[];toSpliced(start:number,deleteCount?:number):T[];with(index:number,value:T):T[];}interface ReadonlyArray<T>{findLast<S extends T>(predicate:(value:T,index:number,array:readonly T[])=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:T,index:number,array:readonly T[])=>unknown,thisArg?:any,):T|undefined;findLastIndex(predicate:(value:T,index:number,array:readonly T[])=>unknown,thisArg?:any,):number;toReversed():T[];toSorted(compareFn?:(a:T,b:T)=>number):T[];toSpliced(start:number,deleteCount:number,...items:T[]):T[];toSpliced(start:number,deleteCount?:number):T[];with(index:number,value:T):T[];}interface Int8Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number;toReversed():Int8Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Int8Array<ArrayBuffer>;with(index:number,value:number):Int8Array<ArrayBuffer>;}interface Uint8Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number;toReversed():Uint8Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Uint8Array<ArrayBuffer>;with(index:number,value:number):Uint8Array<ArrayBuffer>;}interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():Uint8ClampedArray<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Uint8ClampedArray<ArrayBuffer>;with(index:number,value:number):Uint8ClampedArray<ArrayBuffer>;}interface Int16Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number;toReversed():Int16Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Int16Array<ArrayBuffer>;with(index:number,value:number):Int16Array<ArrayBuffer>;}interface Uint16Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():Uint16Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Uint16Array<ArrayBuffer>;with(index:number,value:number):Uint16Array<ArrayBuffer>;}interface Int32Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any,):number;toReversed():Int32Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Int32Array<ArrayBuffer>;with(index:number,value:number):Int32Array<ArrayBuffer>;}interface Uint32Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():Uint32Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Uint32Array<ArrayBuffer>;with(index:number,value:number):Uint32Array<ArrayBuffer>;}interface Float32Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():Float32Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Float32Array<ArrayBuffer>;with(index:number,value:number):Float32Array<ArrayBuffer>;}interface Float64Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():Float64Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Float64Array<ArrayBuffer>;with(index:number,value:number):Float64Array<ArrayBuffer>;}interface BigInt64Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends bigint>(predicate:(value:bigint,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:bigint,index:number,array:this,)=>unknown,thisArg?:any,):bigint|undefined;findLastIndex(predicate:(value:bigint,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():BigInt64Array<ArrayBuffer>;toSorted(compareFn?:(a:bigint,b:bigint)=>number):BigInt64Array<ArrayBuffer>;with(index:number,value:bigint):BigInt64Array<ArrayBuffer>;}interface BigUint64Array<TArrayBuffer extends ArrayBufferLike>{findLast<S extends bigint>(predicate:(value:bigint,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:bigint,index:number,array:this,)=>unknown,thisArg?:any,):bigint|undefined;findLastIndex(predicate:(value:bigint,index:number,array:this,)=>unknown,thisArg?:any,):number;toReversed():BigUint64Array<ArrayBuffer>;toSorted(compareFn?:(a:bigint,b:bigint)=>number):BigUint64Array<ArrayBuffer>;with(index:number,value:bigint):BigUint64Array<ArrayBuffer>;}', "lib.es2023.collection.d.ts": '/// <reference no-default-lib="true"/>\ninterface WeakKeyTypes{symbol:symbol;}', "lib.es2023.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2022" />\n/// <reference lib="es2023.array" />\n/// <reference lib="es2023.collection" />\n/// <reference lib="es2023.intl" />\n', "lib.es2023.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2023" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2023.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{interface NumberFormatOptionsUseGroupingRegistry{min2:never;auto:never;always:never;}interface NumberFormatOptionsSignDisplayRegistry{negative:never;}interface NumberFormatOptions{roundingPriority?:"auto"|"morePrecision"|"lessPrecision"|undefined;roundingIncrement?:1|2|5|10|20|25|50|100|200|250|500|1000|2000|2500|5000|undefined;roundingMode?:"ceil"|"floor"|"expand"|"trunc"|"halfCeil"|"halfFloor"|"halfExpand"|"halfTrunc"|"halfEven"|undefined;trailingZeroDisplay?:"auto"|"stripIfInteger"|undefined;}interface ResolvedNumberFormatOptions{roundingPriority:"auto"|"morePrecision"|"lessPrecision";roundingMode:"ceil"|"floor"|"expand"|"trunc"|"halfCeil"|"halfFloor"|"halfExpand"|"halfTrunc"|"halfEven";roundingIncrement:1|2|5|10|20|25|50|100|200|250|500|1000|2000|2500|5000;trailingZeroDisplay:"auto"|"stripIfInteger";}interface NumberRangeFormatPart extends NumberFormatPart{source:"startRange"|"endRange"|"shared";}type StringNumericLiteral=`${number}` | "Infinity" | "-Infinity" | "+Infinity";\n\n    interface NumberFormat {\n        format(value: number | bigint | StringNumericLiteral): string;\n        formatToParts(value: number | bigint | StringNumericLiteral): NumberFormatPart[];\n        formatRange(start: number | bigint | StringNumericLiteral, end: number | bigint | StringNumericLiteral): string;\n        formatRangeToParts(start: number | bigint | StringNumericLiteral, end: number | bigint | StringNumericLiteral): NumberRangeFormatPart[];\n    }\n}\n', "lib.es2024.arraybuffer.d.ts": '/// <reference no-default-lib="true"/>\ninterface ArrayBuffer{get maxByteLength():number;get resizable():boolean;resize(newByteLength?:number):void;get detached():boolean;transfer(newByteLength?:number):ArrayBuffer;transferToFixedLength(newByteLength?:number):ArrayBuffer;}interface ArrayBufferConstructor{new(byteLength:number,options?:{maxByteLength?:number;}):ArrayBuffer;}', "lib.es2024.collection.d.ts": '/// <reference no-default-lib="true"/>\ninterface MapConstructor{groupBy<K,T>(items:Iterable<T>,keySelector:(item:T,index:number)=>K,):Map<K,T[]>;}', "lib.es2024.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2023" />\n/// <reference lib="es2024.arraybuffer" />\n/// <reference lib="es2024.collection" />\n/// <reference lib="es2024.object" />\n/// <reference lib="es2024.promise" />\n/// <reference lib="es2024.regexp" />\n/// <reference lib="es2024.sharedmemory" />\n/// <reference lib="es2024.string" />\n', "lib.es2024.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2024" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.es2024.object.d.ts": '/// <reference no-default-lib="true"/>\ninterface ObjectConstructor{groupBy<K extends PropertyKey,T>(items:Iterable<T>,keySelector:(item:T,index:number)=>K,):Partial<Record<K,T[]>>;}', "lib.es2024.promise.d.ts": '/// <reference no-default-lib="true"/>\ninterface PromiseWithResolvers<T>{promise:Promise<T>;resolve:(value:T|PromiseLike<T>)=>void;reject:(reason?:any)=>void;}interface PromiseConstructor{withResolvers<T>():PromiseWithResolvers<T>;}', "lib.es2024.regexp.d.ts": '/// <reference no-default-lib="true"/>\ninterface RegExp{readonly unicodeSets:boolean;}', "lib.es2024.sharedmemory.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2020.bigint" />\ninterface Atomics{waitAsync(typedArray:Int32Array,index:number,value:number,timeout?:number):{async:false;value:"not-equal"|"timed-out";}|{async:true;value:Promise<"ok"|"timed-out">;};waitAsync(typedArray:BigInt64Array,index:number,value:bigint,timeout?:number):{async:false;value:"not-equal"|"timed-out";}|{async:true;value:Promise<"ok"|"timed-out">;};}interface SharedArrayBuffer{get growable():boolean;get maxByteLength():number;grow(newByteLength?:number):void;}interface SharedArrayBufferConstructor{new(byteLength:number,options?:{maxByteLength?:number;}):SharedArrayBuffer;}', "lib.es2024.string.d.ts": '/// <reference no-default-lib="true"/>\ninterface String{isWellFormed():boolean;toWellFormed():string;}', "lib.es5.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="decorators" />\n/// <reference lib="decorators.legacy" />\ndeclare var NaN:number;declare var Infinity:number;declare function eval(x:string):any;declare function parseInt(string:string,radix?:number):number;declare function parseFloat(string:string):number;declare function isNaN(number:number):boolean;declare function isFinite(number:number):boolean;declare function decodeURI(encodedURI:string):string;declare function decodeURIComponent(encodedURIComponent:string):string;declare function encodeURI(uri:string):string;declare function encodeURIComponent(uriComponent:string|number|boolean):string;declare function escape(string:string):string;declare function unescape(string:string):string;interface Symbol{toString():string;valueOf():symbol;}declare type PropertyKey=string|number|symbol;interface PropertyDescriptor{configurable?:boolean;enumerable?:boolean;value?:any;writable?:boolean;get?():any;set?(v:any):void;}interface PropertyDescriptorMap{[key:PropertyKey]:PropertyDescriptor;}interface Object{constructor:Function;toString():string;toLocaleString():string;valueOf():Object;hasOwnProperty(v:PropertyKey):boolean;isPrototypeOf(v:Object):boolean;propertyIsEnumerable(v:PropertyKey):boolean;}interface ObjectConstructor{new(value?:any):Object;():any;(value:any):any;readonly prototype:Object;getPrototypeOf(o:any):any;getOwnPropertyDescriptor(o:any,p:PropertyKey):PropertyDescriptor|undefined;getOwnPropertyNames(o:any):string[];create(o:object|null):any;create(o:object|null,properties:PropertyDescriptorMap&ThisType<any>):any;defineProperty<T>(o:T,p:PropertyKey,attributes:PropertyDescriptor&ThisType<any>):T;defineProperties<T>(o:T,properties:PropertyDescriptorMap&ThisType<any>):T;seal<T>(o:T):T;freeze<T extends Function>(f:T):T;freeze<T extends{[idx:string]:U|null|undefined|object;},U extends string|bigint|number|boolean|symbol>(o:T):Readonly<T>;freeze<T>(o:T):Readonly<T>;preventExtensions<T>(o:T):T;isSealed(o:any):boolean;isFrozen(o:any):boolean;isExtensible(o:any):boolean;keys(o:object):string[];}declare var Object:ObjectConstructor;interface Function{apply(this:Function,thisArg:any,argArray?:any):any;call(this:Function,thisArg:any,...argArray:any[]):any;bind(this:Function,thisArg:any,...argArray:any[]):any;toString():string;prototype:any;readonly length:number;arguments:any;caller:Function;}interface FunctionConstructor{new(...args:string[]):Function;(...args:string[]):Function;readonly prototype:Function;}declare var Function:FunctionConstructor;type ThisParameterType<T>=T extends(this:infer U,...args:never)=>any?U:unknown;type OmitThisParameter<T>=unknown extends ThisParameterType<T>?T:T extends(...args:infer A)=>infer R?(...args:A)=>R:T;interface CallableFunction extends Function{apply<T,R>(this:(this:T)=>R,thisArg:T):R;apply<T,A extends any[],R>(this:(this:T,...args:A)=>R,thisArg:T,args:A):R;call<T,A extends any[],R>(this:(this:T,...args:A)=>R,thisArg:T,...args:A):R;bind<T>(this:T,thisArg:ThisParameterType<T>):OmitThisParameter<T>;bind<T,A extends any[],B extends any[],R>(this:(this:T,...args:[...A,...B])=>R,thisArg:T,...args:A):(...args:B)=>R;}interface NewableFunction extends Function{apply<T>(this:new()=>T,thisArg:T):void;apply<T,A extends any[]>(this:new(...args:A)=>T,thisArg:T,args:A):void;call<T,A extends any[]>(this:new(...args:A)=>T,thisArg:T,...args:A):void;bind<T>(this:T,thisArg:any):T;bind<A extends any[],B extends any[],R>(this:new(...args:[...A,...B])=>R,thisArg:any,...args:A):new(...args:B)=>R;}interface IArguments{[index:number]:any;length:number;callee:Function;}interface String{toString():string;charAt(pos:number):string;charCodeAt(index:number):number;concat(...strings:string[]):string;indexOf(searchString:string,position?:number):number;lastIndexOf(searchString:string,position?:number):number;localeCompare(that:string):number;match(regexp:string|RegExp):RegExpMatchArray|null;replace(searchValue:string|RegExp,replaceValue:string):string;replace(searchValue:string|RegExp,replacer:(substring:string,...args:any[])=>string):string;search(regexp:string|RegExp):number;slice(start?:number,end?:number):string;split(separator:string|RegExp,limit?:number):string[];substring(start:number,end?:number):string;toLowerCase():string;toLocaleLowerCase(locales?:string|string[]):string;toUpperCase():string;toLocaleUpperCase(locales?:string|string[]):string;trim():string;readonly length:number;substr(from:number,length?:number):string;valueOf():string;readonly[index:number]:string;}interface StringConstructor{new(value?:any):String;(value?:any):string;readonly prototype:String;fromCharCode(...codes:number[]):string;}declare var String:StringConstructor;interface Boolean{valueOf():boolean;}interface BooleanConstructor{new(value?:any):Boolean;<T>(value?:T):boolean;readonly prototype:Boolean;}declare var Boolean:BooleanConstructor;interface Number{toString(radix?:number):string;toFixed(fractionDigits?:number):string;toExponential(fractionDigits?:number):string;toPrecision(precision?:number):string;valueOf():number;}interface NumberConstructor{new(value?:any):Number;(value?:any):number;readonly prototype:Number;readonly MAX_VALUE:number;readonly MIN_VALUE:number;readonly NaN:number;readonly NEGATIVE_INFINITY:number;readonly POSITIVE_INFINITY:number;}declare var Number:NumberConstructor;interface TemplateStringsArray extends ReadonlyArray<string>{readonly raw:readonly string[];}interface ImportMeta{}interface ImportCallOptions{assert?:ImportAssertions;with?:ImportAttributes;}interface ImportAssertions{[key:string]:string;}interface ImportAttributes{[key:string]:string;}interface Math{readonly E:number;readonly LN10:number;readonly LN2:number;readonly LOG2E:number;readonly LOG10E:number;readonly PI:number;readonly SQRT1_2:number;readonly SQRT2:number;abs(x:number):number;acos(x:number):number;asin(x:number):number;atan(x:number):number;atan2(y:number,x:number):number;ceil(x:number):number;cos(x:number):number;exp(x:number):number;floor(x:number):number;log(x:number):number;max(...values:number[]):number;min(...values:number[]):number;pow(x:number,y:number):number;random():number;round(x:number):number;sin(x:number):number;sqrt(x:number):number;tan(x:number):number;}declare var Math:Math;interface Date{toString():string;toDateString():string;toTimeString():string;toLocaleString():string;toLocaleDateString():string;toLocaleTimeString():string;valueOf():number;getTime():number;getFullYear():number;getUTCFullYear():number;getMonth():number;getUTCMonth():number;getDate():number;getUTCDate():number;getDay():number;getUTCDay():number;getHours():number;getUTCHours():number;getMinutes():number;getUTCMinutes():number;getSeconds():number;getUTCSeconds():number;getMilliseconds():number;getUTCMilliseconds():number;getTimezoneOffset():number;setTime(time:number):number;setMilliseconds(ms:number):number;setUTCMilliseconds(ms:number):number;setSeconds(sec:number,ms?:number):number;setUTCSeconds(sec:number,ms?:number):number;setMinutes(min:number,sec?:number,ms?:number):number;setUTCMinutes(min:number,sec?:number,ms?:number):number;setHours(hours:number,min?:number,sec?:number,ms?:number):number;setUTCHours(hours:number,min?:number,sec?:number,ms?:number):number;setDate(date:number):number;setUTCDate(date:number):number;setMonth(month:number,date?:number):number;setUTCMonth(month:number,date?:number):number;setFullYear(year:number,month?:number,date?:number):number;setUTCFullYear(year:number,month?:number,date?:number):number;toUTCString():string;toISOString():string;toJSON(key?:any):string;}interface DateConstructor{new():Date;new(value:number|string):Date;new(year:number,monthIndex:number,date?:number,hours?:number,minutes?:number,seconds?:number,ms?:number):Date;():string;readonly prototype:Date;parse(s:string):number;UTC(year:number,monthIndex:number,date?:number,hours?:number,minutes?:number,seconds?:number,ms?:number):number;now():number;}declare var Date:DateConstructor;interface RegExpMatchArray extends Array<string>{index?:number;input?:string;0:string;}interface RegExpExecArray extends Array<string>{index:number;input:string;0:string;}interface RegExp{exec(string:string):RegExpExecArray|null;test(string:string):boolean;readonly source:string;readonly global:boolean;readonly ignoreCase:boolean;readonly multiline:boolean;lastIndex:number;compile(pattern:string,flags?:string):this;}interface RegExpConstructor{new(pattern:RegExp|string):RegExp;new(pattern:string,flags?:string):RegExp;(pattern:RegExp|string):RegExp;(pattern:string,flags?:string):RegExp;readonly"prototype":RegExp;"$1":string;"$2":string;"$3":string;"$4":string;"$5":string;"$6":string;"$7":string;"$8":string;"$9":string;"input":string;"$_":string;"lastMatch":string;"$&":string;"lastParen":string;"$+":string;"leftContext":string;"$`":string;"rightContext":string;"$\'":string;}declare var RegExp:RegExpConstructor;interface Error{name:string;message:string;stack?:string;}interface ErrorConstructor{new(message?:string):Error;(message?:string):Error;readonly prototype:Error;}declare var Error:ErrorConstructor;interface EvalError extends Error{}interface EvalErrorConstructor extends ErrorConstructor{new(message?:string):EvalError;(message?:string):EvalError;readonly prototype:EvalError;}declare var EvalError:EvalErrorConstructor;interface RangeError extends Error{}interface RangeErrorConstructor extends ErrorConstructor{new(message?:string):RangeError;(message?:string):RangeError;readonly prototype:RangeError;}declare var RangeError:RangeErrorConstructor;interface ReferenceError extends Error{}interface ReferenceErrorConstructor extends ErrorConstructor{new(message?:string):ReferenceError;(message?:string):ReferenceError;readonly prototype:ReferenceError;}declare var ReferenceError:ReferenceErrorConstructor;interface SyntaxError extends Error{}interface SyntaxErrorConstructor extends ErrorConstructor{new(message?:string):SyntaxError;(message?:string):SyntaxError;readonly prototype:SyntaxError;}declare var SyntaxError:SyntaxErrorConstructor;interface TypeError extends Error{}interface TypeErrorConstructor extends ErrorConstructor{new(message?:string):TypeError;(message?:string):TypeError;readonly prototype:TypeError;}declare var TypeError:TypeErrorConstructor;interface URIError extends Error{}interface URIErrorConstructor extends ErrorConstructor{new(message?:string):URIError;(message?:string):URIError;readonly prototype:URIError;}declare var URIError:URIErrorConstructor;interface JSON{parse(text:string,reviver?:(this:any,key:string,value:any)=>any):any;stringify(value:any,replacer?:(this:any,key:string,value:any)=>any,space?:string|number):string;stringify(value:any,replacer?:(number|string)[]|null,space?:string|number):string;}declare var JSON:JSON;interface ReadonlyArray<T>{readonly length:number;toString():string;toLocaleString():string;concat(...items:ConcatArray<T>[]):T[];concat(...items:(T|ConcatArray<T>)[]):T[];join(separator?:string):string;slice(start?:number,end?:number):T[];indexOf(searchElement:T,fromIndex?:number):number;lastIndexOf(searchElement:T,fromIndex?:number):number;every<S extends T>(predicate:(value:T,index:number,array:readonly T[])=>value is S,thisArg?:any):this is readonly S[];every(predicate:(value:T,index:number,array:readonly T[])=>unknown,thisArg?:any):boolean;some(predicate:(value:T,index:number,array:readonly T[])=>unknown,thisArg?:any):boolean;forEach(callbackfn:(value:T,index:number,array:readonly T[])=>void,thisArg?:any):void;map<U>(callbackfn:(value:T,index:number,array:readonly T[])=>U,thisArg?:any):U[];filter<S extends T>(predicate:(value:T,index:number,array:readonly T[])=>value is S,thisArg?:any):S[];filter(predicate:(value:T,index:number,array:readonly T[])=>unknown,thisArg?:any):T[];reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:readonly T[])=>T):T;reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:readonly T[])=>T,initialValue:T):T;reduce<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number,array:readonly T[])=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:readonly T[])=>T):T;reduceRight(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:readonly T[])=>T,initialValue:T):T;reduceRight<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number,array:readonly T[])=>U,initialValue:U):U;readonly[n:number]:T;}interface ConcatArray<T>{readonly length:number;readonly[n:number]:T;join(separator?:string):string;slice(start?:number,end?:number):T[];}interface Array<T>{length:number;toString():string;toLocaleString():string;pop():T|undefined;push(...items:T[]):number;concat(...items:ConcatArray<T>[]):T[];concat(...items:(T|ConcatArray<T>)[]):T[];join(separator?:string):string;reverse():T[];shift():T|undefined;slice(start?:number,end?:number):T[];sort(compareFn?:(a:T,b:T)=>number):this;splice(start:number,deleteCount?:number):T[];splice(start:number,deleteCount:number,...items:T[]):T[];unshift(...items:T[]):number;indexOf(searchElement:T,fromIndex?:number):number;lastIndexOf(searchElement:T,fromIndex?:number):number;every<S extends T>(predicate:(value:T,index:number,array:T[])=>value is S,thisArg?:any):this is S[];every(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):boolean;some(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):boolean;forEach(callbackfn:(value:T,index:number,array:T[])=>void,thisArg?:any):void;map<U>(callbackfn:(value:T,index:number,array:T[])=>U,thisArg?:any):U[];filter<S extends T>(predicate:(value:T,index:number,array:T[])=>value is S,thisArg?:any):S[];filter(predicate:(value:T,index:number,array:T[])=>unknown,thisArg?:any):T[];reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T):T;reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T,initialValue:T):T;reduce<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number,array:T[])=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T):T;reduceRight(callbackfn:(previousValue:T,currentValue:T,currentIndex:number,array:T[])=>T,initialValue:T):T;reduceRight<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number,array:T[])=>U,initialValue:U):U;[n:number]:T;}interface ArrayConstructor{new(arrayLength?:number):any[];new<T>(arrayLength:number):T[];new<T>(...items:T[]):T[];(arrayLength?:number):any[];<T>(arrayLength:number):T[];<T>(...items:T[]):T[];isArray(arg:any):arg is any[];readonly prototype:any[];}declare var Array:ArrayConstructor;interface TypedPropertyDescriptor<T>{enumerable?:boolean;configurable?:boolean;writable?:boolean;value?:T;get?:()=>T;set?:(value:T)=>void;}declare type PromiseConstructorLike=new<T>(executor:(resolve:(value:T|PromiseLike<T>)=>void,reject:(reason?:any)=>void)=>void)=>PromiseLike<T>;interface PromiseLike<T>{then<TResult1=T,TResult2=never>(onfulfilled?:((value:T)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((reason:any)=>TResult2|PromiseLike<TResult2>)|undefined|null):PromiseLike<TResult1|TResult2>;}interface Promise<T>{then<TResult1=T,TResult2=never>(onfulfilled?:((value:T)=>TResult1|PromiseLike<TResult1>)|undefined|null,onrejected?:((reason:any)=>TResult2|PromiseLike<TResult2>)|undefined|null):Promise<TResult1|TResult2>;catch<TResult=never>(onrejected?:((reason:any)=>TResult|PromiseLike<TResult>)|undefined|null):Promise<T|TResult>;}type Awaited<T>=T extends null|undefined?T:T extends object&{then(onfulfilled:infer F,...args:infer _):any;}?\nF extends((value:infer V,...args:infer _)=>any)?\nAwaited<V>:never:T;interface ArrayLike<T>{readonly length:number;readonly[n:number]:T;}type Partial<T>={[P in keyof T]?:T[P];};type Required<T>={[P in keyof T]-?:T[P];};type Readonly<T>={readonly[P in keyof T]:T[P];};type Pick<T,K extends keyof T>={[P in K]:T[P];};type Record<K extends keyof any,T>={[P in K]:T;};type Exclude<T,U>=T extends U?never:T;type Extract<T,U>=T extends U?T:never;type Omit<T,K extends keyof any>=Pick<T,Exclude<keyof T,K>>;type NonNullable<T>=T&{};type Parameters<T extends(...args:any)=>any>=T extends(...args:infer P)=>any?P:never;type ConstructorParameters<T extends abstract new(...args:any)=>any>=T extends abstract new(...args:infer P)=>any?P:never;type ReturnType<T extends(...args:any)=>any>=T extends(...args:any)=>infer R?R:any;type InstanceType<T extends abstract new(...args:any)=>any>=T extends abstract new(...args:any)=>infer R?R:any;type Uppercase<S extends string>=intrinsic;type Lowercase<S extends string>=intrinsic;type Capitalize<S extends string>=intrinsic;type Uncapitalize<S extends string>=intrinsic;type NoInfer<T>=intrinsic;interface ThisType<T>{}interface WeakKeyTypes{object:object;}type WeakKey=WeakKeyTypes[keyof WeakKeyTypes];interface ArrayBuffer{readonly byteLength:number;slice(begin?:number,end?:number):ArrayBuffer;}interface ArrayBufferTypes{ArrayBuffer:ArrayBuffer;}type ArrayBufferLike=ArrayBufferTypes[keyof ArrayBufferTypes];interface ArrayBufferConstructor{readonly prototype:ArrayBuffer;new(byteLength:number):ArrayBuffer;isView(arg:any):arg is ArrayBufferView;}declare var ArrayBuffer:ArrayBufferConstructor;interface ArrayBufferView<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;}interface DataView<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;getFloat32(byteOffset:number,littleEndian?:boolean):number;getFloat64(byteOffset:number,littleEndian?:boolean):number;getInt8(byteOffset:number):number;getInt16(byteOffset:number,littleEndian?:boolean):number;getInt32(byteOffset:number,littleEndian?:boolean):number;getUint8(byteOffset:number):number;getUint16(byteOffset:number,littleEndian?:boolean):number;getUint32(byteOffset:number,littleEndian?:boolean):number;setFloat32(byteOffset:number,value:number,littleEndian?:boolean):void;setFloat64(byteOffset:number,value:number,littleEndian?:boolean):void;setInt8(byteOffset:number,value:number):void;setInt16(byteOffset:number,value:number,littleEndian?:boolean):void;setInt32(byteOffset:number,value:number,littleEndian?:boolean):void;setUint8(byteOffset:number,value:number):void;setUint16(byteOffset:number,value:number,littleEndian?:boolean):void;setUint32(byteOffset:number,value:number,littleEndian?:boolean):void;}interface DataViewConstructor{readonly prototype:DataView<ArrayBufferLike>;new<TArrayBuffer extends ArrayBufferLike&{BYTES_PER_ELEMENT?:never;}>(buffer:TArrayBuffer,byteOffset?:number,byteLength?:number):DataView<TArrayBuffer>;}declare var DataView:DataViewConstructor;interface Int8Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Int8Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Int8Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Int8Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Int8Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Int8ArrayConstructor{readonly prototype:Int8Array<ArrayBufferLike>;new(length:number):Int8Array<ArrayBuffer>;new(array:ArrayLike<number>):Int8Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Int8Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Int8Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Int8Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Int8Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Int8Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Int8Array<ArrayBuffer>;}declare var Int8Array:Int8ArrayConstructor;interface Uint8Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Uint8Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Uint8Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Uint8Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Uint8Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Uint8ArrayConstructor{readonly prototype:Uint8Array<ArrayBufferLike>;new(length:number):Uint8Array<ArrayBuffer>;new(array:ArrayLike<number>):Uint8Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Uint8Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Uint8Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Uint8Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Uint8Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Uint8Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Uint8Array<ArrayBuffer>;}declare var Uint8Array:Uint8ArrayConstructor;interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Uint8ClampedArray<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Uint8ClampedArray<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Uint8ClampedArray<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Uint8ClampedArray<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Uint8ClampedArrayConstructor{readonly prototype:Uint8ClampedArray<ArrayBufferLike>;new(length:number):Uint8ClampedArray<ArrayBuffer>;new(array:ArrayLike<number>):Uint8ClampedArray<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Uint8ClampedArray<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Uint8ClampedArray<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Uint8ClampedArray<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Uint8ClampedArray<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Uint8ClampedArray<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Uint8ClampedArray<ArrayBuffer>;}declare var Uint8ClampedArray:Uint8ClampedArrayConstructor;interface Int16Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Int16Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Int16Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Int16Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Int16Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Int16ArrayConstructor{readonly prototype:Int16Array<ArrayBufferLike>;new(length:number):Int16Array<ArrayBuffer>;new(array:ArrayLike<number>):Int16Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Int16Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Int16Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Int16Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Int16Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Int16Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Int16Array<ArrayBuffer>;}declare var Int16Array:Int16ArrayConstructor;interface Uint16Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Uint16Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Uint16Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Uint16Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Uint16Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Uint16ArrayConstructor{readonly prototype:Uint16Array<ArrayBufferLike>;new(length:number):Uint16Array<ArrayBuffer>;new(array:ArrayLike<number>):Uint16Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Uint16Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Uint16Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Uint16Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Uint16Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Uint16Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Uint16Array<ArrayBuffer>;}declare var Uint16Array:Uint16ArrayConstructor;interface Int32Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Int32Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Int32Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Int32Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Int32Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Int32ArrayConstructor{readonly prototype:Int32Array<ArrayBufferLike>;new(length:number):Int32Array<ArrayBuffer>;new(array:ArrayLike<number>):Int32Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Int32Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Int32Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Int32Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Int32Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Int32Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Int32Array<ArrayBuffer>;}declare var Int32Array:Int32ArrayConstructor;interface Uint32Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Uint32Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Uint32Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Uint32Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Uint32Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Uint32ArrayConstructor{readonly prototype:Uint32Array<ArrayBufferLike>;new(length:number):Uint32Array<ArrayBuffer>;new(array:ArrayLike<number>):Uint32Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Uint32Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Uint32Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Uint32Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Uint32Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Uint32Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Uint32Array<ArrayBuffer>;}declare var Uint32Array:Uint32ArrayConstructor;interface Float32Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Float32Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Float32Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Float32Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Float32Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Float32ArrayConstructor{readonly prototype:Float32Array<ArrayBufferLike>;new(length:number):Float32Array<ArrayBuffer>;new(array:ArrayLike<number>):Float32Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Float32Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Float32Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Float32Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Float32Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Float32Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Float32Array<ArrayBuffer>;}declare var Float32Array:Float32ArrayConstructor;interface Float64Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Float64Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Float64Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Float64Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Float64Array<TArrayBuffer>;toLocaleString():string;toString():string;valueOf():this;[index:number]:number;}interface Float64ArrayConstructor{readonly prototype:Float64Array<ArrayBufferLike>;new(length:number):Float64Array<ArrayBuffer>;new(array:ArrayLike<number>):Float64Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Float64Array<TArrayBuffer>;new(buffer:ArrayBuffer,byteOffset?:number,length?:number):Float64Array<ArrayBuffer>;new(array:ArrayLike<number>|ArrayBuffer):Float64Array<ArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Float64Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Float64Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Float64Array<ArrayBuffer>;}declare var Float64Array:Float64ArrayConstructor;declare namespace Intl{interface CollatorOptions{usage?:"sort"|"search"|undefined;localeMatcher?:"lookup"|"best fit"|undefined;numeric?:boolean|undefined;caseFirst?:"upper"|"lower"|"false"|undefined;sensitivity?:"base"|"accent"|"case"|"variant"|undefined;collation?:"big5han"|"compat"|"dict"|"direct"|"ducet"|"emoji"|"eor"|"gb2312"|"phonebk"|"phonetic"|"pinyin"|"reformed"|"searchjl"|"stroke"|"trad"|"unihan"|"zhuyin"|undefined;ignorePunctuation?:boolean|undefined;}interface ResolvedCollatorOptions{locale:string;usage:string;sensitivity:string;ignorePunctuation:boolean;collation:string;caseFirst:string;numeric:boolean;}interface Collator{compare(x:string,y:string):number;resolvedOptions():ResolvedCollatorOptions;}interface CollatorConstructor{new(locales?:string|string[],options?:CollatorOptions):Collator;(locales?:string|string[],options?:CollatorOptions):Collator;supportedLocalesOf(locales:string|string[],options?:CollatorOptions):string[];}var Collator:CollatorConstructor;interface NumberFormatOptionsStyleRegistry{decimal:never;percent:never;currency:never;}type NumberFormatOptionsStyle=keyof NumberFormatOptionsStyleRegistry;interface NumberFormatOptionsCurrencyDisplayRegistry{code:never;symbol:never;name:never;}type NumberFormatOptionsCurrencyDisplay=keyof NumberFormatOptionsCurrencyDisplayRegistry;interface NumberFormatOptionsUseGroupingRegistry{}type NumberFormatOptionsUseGrouping={}extends NumberFormatOptionsUseGroupingRegistry?boolean:keyof NumberFormatOptionsUseGroupingRegistry|"true"|"false"|boolean;type ResolvedNumberFormatOptionsUseGrouping={}extends NumberFormatOptionsUseGroupingRegistry?boolean:keyof NumberFormatOptionsUseGroupingRegistry|false;interface NumberFormatOptions{localeMatcher?:"lookup"|"best fit"|undefined;style?:NumberFormatOptionsStyle|undefined;currency?:string|undefined;currencyDisplay?:NumberFormatOptionsCurrencyDisplay|undefined;useGrouping?:NumberFormatOptionsUseGrouping|undefined;minimumIntegerDigits?:number|undefined;minimumFractionDigits?:number|undefined;maximumFractionDigits?:number|undefined;minimumSignificantDigits?:number|undefined;maximumSignificantDigits?:number|undefined;}interface ResolvedNumberFormatOptions{locale:string;numberingSystem:string;style:NumberFormatOptionsStyle;currency?:string;currencyDisplay?:NumberFormatOptionsCurrencyDisplay;minimumIntegerDigits:number;minimumFractionDigits?:number;maximumFractionDigits?:number;minimumSignificantDigits?:number;maximumSignificantDigits?:number;useGrouping:ResolvedNumberFormatOptionsUseGrouping;}interface NumberFormat{format(value:number):string;resolvedOptions():ResolvedNumberFormatOptions;}interface NumberFormatConstructor{new(locales?:string|string[],options?:NumberFormatOptions):NumberFormat;(locales?:string|string[],options?:NumberFormatOptions):NumberFormat;supportedLocalesOf(locales:string|string[],options?:NumberFormatOptions):string[];readonly prototype:NumberFormat;}var NumberFormat:NumberFormatConstructor;interface DateTimeFormatOptions{localeMatcher?:"best fit"|"lookup"|undefined;weekday?:"long"|"short"|"narrow"|undefined;era?:"long"|"short"|"narrow"|undefined;year?:"numeric"|"2-digit"|undefined;month?:"numeric"|"2-digit"|"long"|"short"|"narrow"|undefined;day?:"numeric"|"2-digit"|undefined;hour?:"numeric"|"2-digit"|undefined;minute?:"numeric"|"2-digit"|undefined;second?:"numeric"|"2-digit"|undefined;timeZoneName?:"short"|"long"|"shortOffset"|"longOffset"|"shortGeneric"|"longGeneric"|undefined;formatMatcher?:"best fit"|"basic"|undefined;hour12?:boolean|undefined;timeZone?:string|undefined;}interface ResolvedDateTimeFormatOptions{locale:string;calendar:string;numberingSystem:string;timeZone:string;hour12?:boolean;weekday?:string;era?:string;year?:string;month?:string;day?:string;hour?:string;minute?:string;second?:string;timeZoneName?:string;}interface DateTimeFormat{format(date?:Date|number):string;resolvedOptions():ResolvedDateTimeFormatOptions;}interface DateTimeFormatConstructor{new(locales?:string|string[],options?:DateTimeFormatOptions):DateTimeFormat;(locales?:string|string[],options?:DateTimeFormatOptions):DateTimeFormat;supportedLocalesOf(locales:string|string[],options?:DateTimeFormatOptions):string[];readonly prototype:DateTimeFormat;}var DateTimeFormat:DateTimeFormatConstructor;}interface String{localeCompare(that:string,locales?:string|string[],options?:Intl.CollatorOptions):number;}interface Number{toLocaleString(locales?:string|string[],options?:Intl.NumberFormatOptions):string;}interface Date{toLocaleString(locales?:string|string[],options?:Intl.DateTimeFormatOptions):string;toLocaleDateString(locales?:string|string[],options?:Intl.DateTimeFormatOptions):string;toLocaleTimeString(locales?:string|string[],options?:Intl.DateTimeFormatOptions):string;}', "lib.es6.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015" />\n/// <reference lib="dom" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n', "lib.esnext.array.d.ts": '/// <reference no-default-lib="true"/>\ninterface ArrayConstructor{fromAsync<T>(iterableOrArrayLike:AsyncIterable<T>|Iterable<T|PromiseLike<T>>|ArrayLike<T|PromiseLike<T>>):Promise<T[]>;fromAsync<T,U>(iterableOrArrayLike:AsyncIterable<T>|Iterable<T>|ArrayLike<T>,mapFn:(value:Awaited<T>,index:number)=>U,thisArg?:any):Promise<Awaited<U>[]>;}', "lib.esnext.collection.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2024.collection" />\ninterface ReadonlySetLike<T>{keys():Iterator<T>;has(value:T):boolean;readonly size:number;}interface Set<T>{union<U>(other:ReadonlySetLike<U>):Set<T|U>;intersection<U>(other:ReadonlySetLike<U>):Set<T&U>;difference<U>(other:ReadonlySetLike<U>):Set<T>;symmetricDifference<U>(other:ReadonlySetLike<U>):Set<T|U>;isSubsetOf(other:ReadonlySetLike<unknown>):boolean;isSupersetOf(other:ReadonlySetLike<unknown>):boolean;isDisjointFrom(other:ReadonlySetLike<unknown>):boolean;}interface ReadonlySet<T>{union<U>(other:ReadonlySetLike<U>):Set<T|U>;intersection<U>(other:ReadonlySetLike<U>):Set<T&U>;difference<U>(other:ReadonlySetLike<U>):Set<T>;symmetricDifference<U>(other:ReadonlySetLike<U>):Set<T|U>;isSubsetOf(other:ReadonlySetLike<unknown>):boolean;isSupersetOf(other:ReadonlySetLike<unknown>):boolean;isDisjointFrom(other:ReadonlySetLike<unknown>):boolean;}', "lib.esnext.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2024" />\n/// <reference lib="esnext.intl" />\n/// <reference lib="esnext.decorators" />\n/// <reference lib="esnext.disposable" />\n/// <reference lib="esnext.collection" />\n/// <reference lib="esnext.array" />\n/// <reference lib="esnext.iterator" />\n/// <reference lib="esnext.promise" />\n/// <reference lib="esnext.float16" />\n', "lib.esnext.decorators.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\n/// <reference lib="decorators" />\ninterface SymbolConstructor{readonly metadata:unique symbol;}interface Function{[Symbol.metadata]:DecoratorMetadata|null;}', "lib.esnext.disposable.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\n/// <reference lib="es2015.iterable" />\n/// <reference lib="es2018.asynciterable" />\ninterface SymbolConstructor{readonly dispose:unique symbol;readonly asyncDispose:unique symbol;}interface Disposable{[Symbol.dispose]():void;}interface AsyncDisposable{[Symbol.asyncDispose]():PromiseLike<void>;}interface SuppressedError extends Error{error:any;suppressed:any;}interface SuppressedErrorConstructor{new(error:any,suppressed:any,message?:string):SuppressedError;(error:any,suppressed:any,message?:string):SuppressedError;readonly prototype:SuppressedError;}declare var SuppressedError:SuppressedErrorConstructor;interface DisposableStack{readonly disposed:boolean;dispose():void;use<T extends Disposable|null|undefined>(value:T):T;adopt<T>(value:T,onDispose:(value:T)=>void):T;defer(onDispose:()=>void):void;move():DisposableStack;[Symbol.dispose]():void;readonly[Symbol.toStringTag]:string;}interface DisposableStackConstructor{new():DisposableStack;readonly prototype:DisposableStack;}declare var DisposableStack:DisposableStackConstructor;interface AsyncDisposableStack{readonly disposed:boolean;disposeAsync():Promise<void>;use<T extends AsyncDisposable|Disposable|null|undefined>(value:T):T;adopt<T>(value:T,onDisposeAsync:(value:T)=>PromiseLike<void>|void):T;defer(onDisposeAsync:()=>PromiseLike<void>|void):void;move():AsyncDisposableStack;[Symbol.asyncDispose]():Promise<void>;readonly[Symbol.toStringTag]:string;}interface AsyncDisposableStackConstructor{new():AsyncDisposableStack;readonly prototype:AsyncDisposableStack;}declare var AsyncDisposableStack:AsyncDisposableStackConstructor;interface IteratorObject<T,TReturn,TNext>extends Disposable{}interface AsyncIteratorObject<T,TReturn,TNext>extends AsyncDisposable{}', "lib.esnext.float16.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.symbol" />\n/// <reference lib="es2015.iterable" />\ninterface Float16Array<TArrayBuffer extends ArrayBufferLike=ArrayBufferLike>{readonly BYTES_PER_ELEMENT:number;readonly buffer:TArrayBuffer;readonly byteLength:number;readonly byteOffset:number;at(index:number):number|undefined;copyWithin(target:number,start:number,end?:number):this;every(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;fill(value:number,start?:number,end?:number):this;filter(predicate:(value:number,index:number,array:this)=>any,thisArg?:any):Float16Array<ArrayBuffer>;find(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number|undefined;findIndex(predicate:(value:number,index:number,obj:this)=>boolean,thisArg?:any):number;findLast<S extends number>(predicate:(value:number,index:number,array:this,)=>value is S,thisArg?:any,):S|undefined;findLast(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number|undefined;findLastIndex(predicate:(value:number,index:number,array:this,)=>unknown,thisArg?:any,):number;forEach(callbackfn:(value:number,index:number,array:this)=>void,thisArg?:any):void;includes(searchElement:number,fromIndex?:number):boolean;indexOf(searchElement:number,fromIndex?:number):number;join(separator?:string):string;lastIndexOf(searchElement:number,fromIndex?:number):number;readonly length:number;map(callbackfn:(value:number,index:number,array:this)=>number,thisArg?:any):Float16Array<ArrayBuffer>;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduce(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduce<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number):number;reduceRight(callbackfn:(previousValue:number,currentValue:number,currentIndex:number,array:this)=>number,initialValue:number):number;reduceRight<U>(callbackfn:(previousValue:U,currentValue:number,currentIndex:number,array:this)=>U,initialValue:U):U;reverse():this;set(array:ArrayLike<number>,offset?:number):void;slice(start?:number,end?:number):Float16Array<ArrayBuffer>;some(predicate:(value:number,index:number,array:this)=>unknown,thisArg?:any):boolean;sort(compareFn?:(a:number,b:number)=>number):this;subarray(begin?:number,end?:number):Float16Array<TArrayBuffer>;toLocaleString(locales?:string|string[],options?:Intl.NumberFormatOptions):string;toReversed():Float16Array<ArrayBuffer>;toSorted(compareFn?:(a:number,b:number)=>number):Float16Array<ArrayBuffer>;toString():string;valueOf():this;with(index:number,value:number):Float16Array<ArrayBuffer>;[index:number]:number;[Symbol.iterator]():ArrayIterator<number>;entries():ArrayIterator<[number,number]>;keys():ArrayIterator<number>;values():ArrayIterator<number>;readonly[Symbol.toStringTag]:"Float16Array";}interface Float16ArrayConstructor{readonly prototype:Float16Array<ArrayBufferLike>;new(length?:number):Float16Array<ArrayBuffer>;new(array:ArrayLike<number>|Iterable<number>):Float16Array<ArrayBuffer>;new<TArrayBuffer extends ArrayBufferLike=ArrayBuffer>(buffer:TArrayBuffer,byteOffset?:number,length?:number):Float16Array<TArrayBuffer>;readonly BYTES_PER_ELEMENT:number;of(...items:number[]):Float16Array<ArrayBuffer>;from(arrayLike:ArrayLike<number>):Float16Array<ArrayBuffer>;from<T>(arrayLike:ArrayLike<T>,mapfn:(v:T,k:number)=>number,thisArg?:any):Float16Array<ArrayBuffer>;from(elements:Iterable<number>):Float16Array<ArrayBuffer>;from<T>(elements:Iterable<T>,mapfn?:(v:T,k:number)=>number,thisArg?:any):Float16Array<ArrayBuffer>;}declare var Float16Array:Float16ArrayConstructor;interface Math{f16round(x:number):number;}interface DataView<TArrayBuffer extends ArrayBufferLike>{getFloat16(byteOffset:number,littleEndian?:boolean):number;setFloat16(byteOffset:number,value:number,littleEndian?:boolean):void;}', "lib.esnext.full.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="esnext" />\n/// <reference lib="dom" />\n/// <reference lib="webworker.importscripts" />\n/// <reference lib="scripthost" />\n/// <reference lib="dom.iterable" />\n/// <reference lib="dom.asynciterable" />\n', "lib.esnext.intl.d.ts": '/// <reference no-default-lib="true"/>\ndeclare namespace Intl{}', "lib.esnext.iterator.d.ts": '/// <reference no-default-lib="true"/>\n/// <reference lib="es2015.iterable" />\nexport{};declare abstract class Iterator<T,TResult=undefined,TNext=unknown>{abstract next(value?:TNext):IteratorResult<T,TResult>;}interface Iterator<T,TResult,TNext>extends globalThis.IteratorObject<T,TResult,TNext>{}type IteratorObjectConstructor=typeof Iterator;declare global{interface IteratorObject<T,TReturn,TNext>{[Symbol.iterator]():IteratorObject<T,TReturn,TNext>;map<U>(callbackfn:(value:T,index:number)=>U):IteratorObject<U,undefined,unknown>;filter<S extends T>(predicate:(value:T,index:number)=>value is S):IteratorObject<S,undefined,unknown>;filter(predicate:(value:T,index:number)=>unknown):IteratorObject<T,undefined,unknown>;take(limit:number):IteratorObject<T,undefined,unknown>;drop(count:number):IteratorObject<T,undefined,unknown>;flatMap<U>(callback:(value:T,index:number)=>Iterator<U,unknown,undefined>|Iterable<U,unknown,undefined>):IteratorObject<U,undefined,unknown>;reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number)=>T):T;reduce(callbackfn:(previousValue:T,currentValue:T,currentIndex:number)=>T,initialValue:T):T;reduce<U>(callbackfn:(previousValue:U,currentValue:T,currentIndex:number)=>U,initialValue:U):U;toArray():T[];forEach(callbackfn:(value:T,index:number)=>void):void;some(predicate:(value:T,index:number)=>unknown):boolean;every(predicate:(value:T,index:number)=>unknown):boolean;find<S extends T>(predicate:(value:T,index:number)=>value is S):S|undefined;find(predicate:(value:T,index:number)=>unknown):T|undefined;readonly[Symbol.toStringTag]:string;}interface IteratorConstructor extends IteratorObjectConstructor{from<T>(value:Iterator<T,unknown,undefined>|Iterable<T,unknown,undefined>):IteratorObject<T,undefined,unknown>;}var Iterator:IteratorConstructor;}', "lib.esnext.promise.d.ts": '/// <reference no-default-lib="true"/>\ninterface PromiseConstructor{try<T,U extends unknown[]>(callbackFn:(...args:U)=>T|PromiseLike<T>,...args:U):Promise<Awaited<T>>;}', "lib.scripthost.d.ts": '/// <reference no-default-lib="true"/>\ninterface ActiveXObject{new(s:string):any;}declare var ActiveXObject:ActiveXObject;interface ITextWriter{Write(s:string):void;WriteLine(s:string):void;Close():void;}interface TextStreamBase{Column:number;Line:number;Close():void;}interface TextStreamWriter extends TextStreamBase{Write(s:string):void;WriteBlankLines(intLines:number):void;WriteLine(s:string):void;}interface TextStreamReader extends TextStreamBase{Read(characters:number):string;ReadAll():string;ReadLine():string;Skip(characters:number):void;SkipLine():void;AtEndOfLine:boolean;AtEndOfStream:boolean;}declare var WScript:{Echo(s:any):void;StdErr:TextStreamWriter;StdOut:TextStreamWriter;Arguments:{length:number;Item(n:number):string;};ScriptFullName:string;Quit(exitCode?:number):number;BuildVersion:number;FullName:string;Interactive:boolean;Name:string;Path:string;ScriptName:string;StdIn:TextStreamReader;Version:string;ConnectObject(objEventSource:any,strPrefix:string):void;CreateObject(strProgID:string,strPrefix?:string):any;DisconnectObject(obj:any):void;GetObject(strPathname:string,strProgID?:string,strPrefix?:string):any;Sleep(intTime:number):void;};declare var WSH:typeof WScript;declare class SafeArray<T=any>{private constructor();private SafeArray_typekey:SafeArray<T>;}interface Enumerator<T=any>{atEnd():boolean;item():T;moveFirst():void;moveNext():void;}interface EnumeratorConstructor{new<T=any>(safearray:SafeArray<T>):Enumerator<T>;new<T=any>(collection:{Item(index:any):T;}):Enumerator<T>;new<T=any>(collection:any):Enumerator<T>;}declare var Enumerator:EnumeratorConstructor;interface VBArray<T=any>{dimensions():number;getItem(dimension1Index:number,...dimensionNIndexes:number[]):T;lbound(dimension?:number):number;ubound(dimension?:number):number;toArray():T[];}interface VBArrayConstructor{new<T=any>(safeArray:SafeArray<T>):VBArray<T>;}declare var VBArray:VBArrayConstructor;declare class VarDate{private constructor();private VarDate_typekey:VarDate;}interface DateConstructor{new(vd:VarDate):Date;}interface Date{getVarDate:()=>VarDate;}', "lib.webworker.asynciterable.d.ts": '/// <reference no-default-lib="true"/>\ninterface FileSystemDirectoryHandleAsyncIterator<T>extends AsyncIteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.asyncIterator]():FileSystemDirectoryHandleAsyncIterator<T>;}interface FileSystemDirectoryHandle{[Symbol.asyncIterator]():FileSystemDirectoryHandleAsyncIterator<[string,FileSystemHandle]>;entries():FileSystemDirectoryHandleAsyncIterator<[string,FileSystemHandle]>;keys():FileSystemDirectoryHandleAsyncIterator<string>;values():FileSystemDirectoryHandleAsyncIterator<FileSystemHandle>;}interface ReadableStreamAsyncIterator<T>extends AsyncIteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.asyncIterator]():ReadableStreamAsyncIterator<T>;}interface ReadableStream<R=any>{[Symbol.asyncIterator](options?:ReadableStreamIteratorOptions):ReadableStreamAsyncIterator<R>;values(options?:ReadableStreamIteratorOptions):ReadableStreamAsyncIterator<R>;}', "lib.webworker.d.ts": `/// <reference no-default-lib="true"/>
interface AddEventListenerOptions extends EventListenerOptions{once?:boolean;passive?:boolean;signal?:AbortSignal;}interface AesCbcParams extends Algorithm{iv:BufferSource;}interface AesCtrParams extends Algorithm{counter:BufferSource;length:number;}interface AesDerivedKeyParams extends Algorithm{length:number;}interface AesGcmParams extends Algorithm{additionalData?:BufferSource;iv:BufferSource;tagLength?:number;}interface AesKeyAlgorithm extends KeyAlgorithm{length:number;}interface AesKeyGenParams extends Algorithm{length:number;}interface Algorithm{name:string;}interface AudioConfiguration{bitrate?:number;channels?:string;contentType:string;samplerate?:number;spatialRendering?:boolean;}interface AudioDataCopyToOptions{format?:AudioSampleFormat;frameCount?:number;frameOffset?:number;planeIndex:number;}interface AudioDataInit{data:BufferSource;format:AudioSampleFormat;numberOfChannels:number;numberOfFrames:number;sampleRate:number;timestamp:number;transfer?:ArrayBuffer[];}interface AudioDecoderConfig{codec:string;description?:BufferSource;numberOfChannels:number;sampleRate:number;}interface AudioDecoderInit{error:WebCodecsErrorCallback;output:AudioDataOutputCallback;}interface AudioDecoderSupport{config?:AudioDecoderConfig;supported?:boolean;}interface AudioEncoderConfig{bitrate?:number;bitrateMode?:BitrateMode;codec:string;numberOfChannels:number;opus?:OpusEncoderConfig;sampleRate:number;}interface AudioEncoderInit{error:WebCodecsErrorCallback;output:EncodedAudioChunkOutputCallback;}interface AudioEncoderSupport{config?:AudioEncoderConfig;supported?:boolean;}interface AvcEncoderConfig{format?:AvcBitstreamFormat;}interface BlobPropertyBag{endings?:EndingType;type?:string;}interface CSSMatrixComponentOptions{is2D?:boolean;}interface CSSNumericType{angle?:number;flex?:number;frequency?:number;length?:number;percent?:number;percentHint?:CSSNumericBaseType;resolution?:number;time?:number;}interface CacheQueryOptions{ignoreMethod?:boolean;ignoreSearch?:boolean;ignoreVary?:boolean;}interface ClientQueryOptions{includeUncontrolled?:boolean;type?:ClientTypes;}interface CloseEventInit extends EventInit{code?:number;reason?:string;wasClean?:boolean;}interface CryptoKeyPair{privateKey:CryptoKey;publicKey:CryptoKey;}interface CustomEventInit<T=any>extends EventInit{detail?:T;}interface DOMMatrix2DInit{a?:number;b?:number;c?:number;d?:number;e?:number;f?:number;m11?:number;m12?:number;m21?:number;m22?:number;m41?:number;m42?:number;}interface DOMMatrixInit extends DOMMatrix2DInit{is2D?:boolean;m13?:number;m14?:number;m23?:number;m24?:number;m31?:number;m32?:number;m33?:number;m34?:number;m43?:number;m44?:number;}interface DOMPointInit{w?:number;x?:number;y?:number;z?:number;}interface DOMQuadInit{p1?:DOMPointInit;p2?:DOMPointInit;p3?:DOMPointInit;p4?:DOMPointInit;}interface DOMRectInit{height?:number;width?:number;x?:number;y?:number;}interface EcKeyGenParams extends Algorithm{namedCurve:NamedCurve;}interface EcKeyImportParams extends Algorithm{namedCurve:NamedCurve;}interface EcdhKeyDeriveParams extends Algorithm{public:CryptoKey;}interface EcdsaParams extends Algorithm{hash:HashAlgorithmIdentifier;}interface EncodedAudioChunkInit{data:AllowSharedBufferSource;duration?:number;timestamp:number;transfer?:ArrayBuffer[];type:EncodedAudioChunkType;}interface EncodedAudioChunkMetadata{decoderConfig?:AudioDecoderConfig;}interface EncodedVideoChunkInit{data:AllowSharedBufferSource;duration?:number;timestamp:number;type:EncodedVideoChunkType;}interface EncodedVideoChunkMetadata{decoderConfig?:VideoDecoderConfig;}interface ErrorEventInit extends EventInit{colno?:number;error?:any;filename?:string;lineno?:number;message?:string;}interface EventInit{bubbles?:boolean;cancelable?:boolean;composed?:boolean;}interface EventListenerOptions{capture?:boolean;}interface EventSourceInit{withCredentials?:boolean;}interface ExtendableEventInit extends EventInit{}interface ExtendableMessageEventInit extends ExtendableEventInit{data?:any;lastEventId?:string;origin?:string;ports?:MessagePort[];source?:Client|ServiceWorker|MessagePort|null;}interface FetchEventInit extends ExtendableEventInit{clientId?:string;handled?:Promise<void>;preloadResponse?:Promise<any>;replacesClientId?:string;request:Request;resultingClientId?:string;}interface FilePropertyBag extends BlobPropertyBag{lastModified?:number;}interface FileSystemCreateWritableOptions{keepExistingData?:boolean;}interface FileSystemGetDirectoryOptions{create?:boolean;}interface FileSystemGetFileOptions{create?:boolean;}interface FileSystemReadWriteOptions{at?:number;}interface FileSystemRemoveOptions{recursive?:boolean;}interface FontFaceDescriptors{ascentOverride?:string;descentOverride?:string;display?:FontDisplay;featureSettings?:string;lineGapOverride?:string;stretch?:string;style?:string;unicodeRange?:string;weight?:string;}interface FontFaceSetLoadEventInit extends EventInit{fontfaces?:FontFace[];}interface GetNotificationOptions{tag?:string;}interface HkdfParams extends Algorithm{hash:HashAlgorithmIdentifier;info:BufferSource;salt:BufferSource;}interface HmacImportParams extends Algorithm{hash:HashAlgorithmIdentifier;length?:number;}interface HmacKeyGenParams extends Algorithm{hash:HashAlgorithmIdentifier;length?:number;}interface IDBDatabaseInfo{name?:string;version?:number;}interface IDBIndexParameters{multiEntry?:boolean;unique?:boolean;}interface IDBObjectStoreParameters{autoIncrement?:boolean;keyPath?:string|string[]|null;}interface IDBTransactionOptions{durability?:IDBTransactionDurability;}interface IDBVersionChangeEventInit extends EventInit{newVersion?:number|null;oldVersion?:number;}interface ImageBitmapOptions{colorSpaceConversion?:ColorSpaceConversion;imageOrientation?:ImageOrientation;premultiplyAlpha?:PremultiplyAlpha;resizeHeight?:number;resizeQuality?:ResizeQuality;resizeWidth?:number;}interface ImageBitmapRenderingContextSettings{alpha?:boolean;}interface ImageDataSettings{colorSpace?:PredefinedColorSpace;}interface ImageDecodeOptions{completeFramesOnly?:boolean;frameIndex?:number;}interface ImageDecodeResult{complete:boolean;image:VideoFrame;}interface ImageDecoderInit{colorSpaceConversion?:ColorSpaceConversion;data:ImageBufferSource;desiredHeight?:number;desiredWidth?:number;preferAnimation?:boolean;transfer?:ArrayBuffer[];type:string;}interface ImageEncodeOptions{quality?:number;type?:string;}interface JsonWebKey{alg?:string;crv?:string;d?:string;dp?:string;dq?:string;e?:string;ext?:boolean;k?:string;key_ops?:string[];kty?:string;n?:string;oth?:RsaOtherPrimesInfo[];p?:string;q?:string;qi?:string;use?:string;x?:string;y?:string;}interface KeyAlgorithm{name:string;}interface LockInfo{clientId?:string;mode?:LockMode;name?:string;}interface LockManagerSnapshot{held?:LockInfo[];pending?:LockInfo[];}interface LockOptions{ifAvailable?:boolean;mode?:LockMode;signal?:AbortSignal;steal?:boolean;}interface MediaCapabilitiesDecodingInfo extends MediaCapabilitiesInfo{configuration?:MediaDecodingConfiguration;}interface MediaCapabilitiesEncodingInfo extends MediaCapabilitiesInfo{configuration?:MediaEncodingConfiguration;}interface MediaCapabilitiesInfo{powerEfficient:boolean;smooth:boolean;supported:boolean;}interface MediaConfiguration{audio?:AudioConfiguration;video?:VideoConfiguration;}interface MediaDecodingConfiguration extends MediaConfiguration{type:MediaDecodingType;}interface MediaEncodingConfiguration extends MediaConfiguration{type:MediaEncodingType;}interface MediaStreamTrackProcessorInit{maxBufferSize?:number;}interface MessageEventInit<T=any>extends EventInit{data?:T;lastEventId?:string;origin?:string;ports?:MessagePort[];source?:MessageEventSource|null;}interface MultiCacheQueryOptions extends CacheQueryOptions{cacheName?:string;}interface NavigationPreloadState{enabled?:boolean;headerValue?:string;}interface NotificationEventInit extends ExtendableEventInit{action?:string;notification:Notification;}interface NotificationOptions{badge?:string;body?:string;data?:any;dir?:NotificationDirection;icon?:string;lang?:string;requireInteraction?:boolean;silent?:boolean|null;tag?:string;}interface OpusEncoderConfig{complexity?:number;format?:OpusBitstreamFormat;frameDuration?:number;packetlossperc?:number;usedtx?:boolean;useinbandfec?:boolean;}interface Pbkdf2Params extends Algorithm{hash:HashAlgorithmIdentifier;iterations:number;salt:BufferSource;}interface PerformanceMarkOptions{detail?:any;startTime?:DOMHighResTimeStamp;}interface PerformanceMeasureOptions{detail?:any;duration?:DOMHighResTimeStamp;end?:string|DOMHighResTimeStamp;start?:string|DOMHighResTimeStamp;}interface PerformanceObserverInit{buffered?:boolean;entryTypes?:string[];type?:string;}interface PermissionDescriptor{name:PermissionName;}interface PlaneLayout{offset:number;stride:number;}interface ProgressEventInit extends EventInit{lengthComputable?:boolean;loaded?:number;total?:number;}interface PromiseRejectionEventInit extends EventInit{promise:Promise<any>;reason?:any;}interface PushEventInit extends ExtendableEventInit{data?:PushMessageDataInit;}interface PushSubscriptionJSON{endpoint?:string;expirationTime?:EpochTimeStamp|null;keys?:Record<string,string>;}interface PushSubscriptionOptionsInit{applicationServerKey?:BufferSource|string|null;userVisibleOnly?:boolean;}interface QueuingStrategy<T=any>{highWaterMark?:number;size?:QueuingStrategySize<T>;}interface QueuingStrategyInit{highWaterMark:number;}interface RTCEncodedAudioFrameMetadata{contributingSources?:number[];payloadType?:number;sequenceNumber?:number;synchronizationSource?:number;}interface RTCEncodedVideoFrameMetadata{contributingSources?:number[];dependencies?:number[];frameId?:number;height?:number;payloadType?:number;spatialIndex?:number;synchronizationSource?:number;temporalIndex?:number;timestamp?:number;width?:number;}interface ReadableStreamGetReaderOptions{mode?:ReadableStreamReaderMode;}interface ReadableStreamIteratorOptions{preventCancel?:boolean;}interface ReadableStreamReadDoneResult<T>{done:true;value?:T;}interface ReadableStreamReadValueResult<T>{done:false;value:T;}interface ReadableWritablePair<R=any,W=any>{readable:ReadableStream<R>;writable:WritableStream<W>;}interface RegistrationOptions{scope?:string;type?:WorkerType;updateViaCache?:ServiceWorkerUpdateViaCache;}interface ReportingObserverOptions{buffered?:boolean;types?:string[];}interface RequestInit{body?:BodyInit|null;cache?:RequestCache;credentials?:RequestCredentials;headers?:HeadersInit;integrity?:string;keepalive?:boolean;method?:string;mode?:RequestMode;priority?:RequestPriority;redirect?:RequestRedirect;referrer?:string;referrerPolicy?:ReferrerPolicy;signal?:AbortSignal|null;window?:null;}interface ResponseInit{headers?:HeadersInit;status?:number;statusText?:string;}interface RsaHashedImportParams extends Algorithm{hash:HashAlgorithmIdentifier;}interface RsaHashedKeyGenParams extends RsaKeyGenParams{hash:HashAlgorithmIdentifier;}interface RsaKeyGenParams extends Algorithm{modulusLength:number;publicExponent:BigInteger;}interface RsaOaepParams extends Algorithm{label?:BufferSource;}interface RsaOtherPrimesInfo{d?:string;r?:string;t?:string;}interface RsaPssParams extends Algorithm{saltLength:number;}interface SecurityPolicyViolationEventInit extends EventInit{blockedURI?:string;columnNumber?:number;disposition?:SecurityPolicyViolationEventDisposition;documentURI?:string;effectiveDirective?:string;lineNumber?:number;originalPolicy?:string;referrer?:string;sample?:string;sourceFile?:string;statusCode?:number;violatedDirective?:string;}interface StorageEstimate{quota?:number;usage?:number;}interface StreamPipeOptions{preventAbort?:boolean;preventCancel?:boolean;preventClose?:boolean;signal?:AbortSignal;}interface StructuredSerializeOptions{transfer?:Transferable[];}interface TextDecodeOptions{stream?:boolean;}interface TextDecoderOptions{fatal?:boolean;ignoreBOM?:boolean;}interface TextEncoderEncodeIntoResult{read:number;written:number;}interface Transformer<I=any,O=any>{flush?:TransformerFlushCallback<O>;readableType?:undefined;start?:TransformerStartCallback<O>;transform?:TransformerTransformCallback<I,O>;writableType?:undefined;}interface UnderlyingByteSource{autoAllocateChunkSize?:number;cancel?:UnderlyingSourceCancelCallback;pull?:(controller:ReadableByteStreamController)=>void|PromiseLike<void>;start?:(controller:ReadableByteStreamController)=>any;type:"bytes";}interface UnderlyingDefaultSource<R=any>{cancel?:UnderlyingSourceCancelCallback;pull?:(controller:ReadableStreamDefaultController<R>)=>void|PromiseLike<void>;start?:(controller:ReadableStreamDefaultController<R>)=>any;type?:undefined;}interface UnderlyingSink<W=any>{abort?:UnderlyingSinkAbortCallback;close?:UnderlyingSinkCloseCallback;start?:UnderlyingSinkStartCallback;type?:undefined;write?:UnderlyingSinkWriteCallback<W>;}interface UnderlyingSource<R=any>{autoAllocateChunkSize?:number;cancel?:UnderlyingSourceCancelCallback;pull?:UnderlyingSourcePullCallback<R>;start?:UnderlyingSourceStartCallback<R>;type?:ReadableStreamType;}interface VideoColorSpaceInit{fullRange?:boolean|null;matrix?:VideoMatrixCoefficients|null;primaries?:VideoColorPrimaries|null;transfer?:VideoTransferCharacteristics|null;}interface VideoConfiguration{bitrate:number;colorGamut?:ColorGamut;contentType:string;framerate:number;hasAlphaChannel?:boolean;hdrMetadataType?:HdrMetadataType;height:number;scalabilityMode?:string;transferFunction?:TransferFunction;width:number;}interface VideoDecoderConfig{codec:string;codedHeight?:number;codedWidth?:number;colorSpace?:VideoColorSpaceInit;description?:AllowSharedBufferSource;displayAspectHeight?:number;displayAspectWidth?:number;hardwareAcceleration?:HardwareAcceleration;optimizeForLatency?:boolean;}interface VideoDecoderInit{error:WebCodecsErrorCallback;output:VideoFrameOutputCallback;}interface VideoDecoderSupport{config?:VideoDecoderConfig;supported?:boolean;}interface VideoEncoderConfig{alpha?:AlphaOption;avc?:AvcEncoderConfig;bitrate?:number;bitrateMode?:VideoEncoderBitrateMode;codec:string;contentHint?:string;displayHeight?:number;displayWidth?:number;framerate?:number;hardwareAcceleration?:HardwareAcceleration;height:number;latencyMode?:LatencyMode;scalabilityMode?:string;width:number;}interface VideoEncoderEncodeOptions{avc?:VideoEncoderEncodeOptionsForAvc;keyFrame?:boolean;}interface VideoEncoderEncodeOptionsForAvc{quantizer?:number|null;}interface VideoEncoderInit{error:WebCodecsErrorCallback;output:EncodedVideoChunkOutputCallback;}interface VideoEncoderSupport{config?:VideoEncoderConfig;supported?:boolean;}interface VideoFrameBufferInit{codedHeight:number;codedWidth:number;colorSpace?:VideoColorSpaceInit;displayHeight?:number;displayWidth?:number;duration?:number;format:VideoPixelFormat;layout?:PlaneLayout[];timestamp:number;visibleRect?:DOMRectInit;}interface VideoFrameCopyToOptions{colorSpace?:PredefinedColorSpace;format?:VideoPixelFormat;layout?:PlaneLayout[];rect?:DOMRectInit;}interface VideoFrameInit{alpha?:AlphaOption;displayHeight?:number;displayWidth?:number;duration?:number;timestamp?:number;visibleRect?:DOMRectInit;}interface WebGLContextAttributes{alpha?:boolean;antialias?:boolean;depth?:boolean;desynchronized?:boolean;failIfMajorPerformanceCaveat?:boolean;powerPreference?:WebGLPowerPreference;premultipliedAlpha?:boolean;preserveDrawingBuffer?:boolean;stencil?:boolean;}interface WebGLContextEventInit extends EventInit{statusMessage?:string;}interface WebTransportCloseInfo{closeCode?:number;reason?:string;}interface WebTransportErrorOptions{source?:WebTransportErrorSource;streamErrorCode?:number|null;}interface WebTransportHash{algorithm?:string;value?:BufferSource;}interface WebTransportOptions{allowPooling?:boolean;congestionControl?:WebTransportCongestionControl;requireUnreliable?:boolean;serverCertificateHashes?:WebTransportHash[];}interface WebTransportSendStreamOptions{sendOrder?:number;}interface WorkerOptions{credentials?:RequestCredentials;name?:string;type?:WorkerType;}interface WriteParams{data?:BufferSource|Blob|string|null;position?:number|null;size?:number|null;type:WriteCommandType;}interface ANGLE_instanced_arrays{drawArraysInstancedANGLE(mode:GLenum,first:GLint,count:GLsizei,primcount:GLsizei):void;drawElementsInstancedANGLE(mode:GLenum,count:GLsizei,type:GLenum,offset:GLintptr,primcount:GLsizei):void;vertexAttribDivisorANGLE(index:GLuint,divisor:GLuint):void;readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:0x88FE;}interface AbortController{readonly signal:AbortSignal;abort(reason?:any):void;}declare var AbortController:{prototype:AbortController;new():AbortController;};interface AbortSignalEventMap{"abort":Event;}interface AbortSignal extends EventTarget{readonly aborted:boolean;onabort:((this:AbortSignal,ev:Event)=>any)|null;readonly reason:any;throwIfAborted():void;addEventListener<K extends keyof AbortSignalEventMap>(type:K,listener:(this:AbortSignal,ev:AbortSignalEventMap[K])=>any,options?:boolean|AddEventListenerOptions):void;addEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|AddEventListenerOptions):void;removeEventListener<K extends keyof AbortSignalEventMap>(type:K,listener:(this:AbortSignal,ev:AbortSignalEventMap[K])=>any,options?:boolean|EventListenerOptions):void;removeEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|EventListenerOptions):void;}declare var AbortSignal:{prototype:AbortSignal;new():AbortSignal;abort(reason?:any):AbortSignal;any(signals:AbortSignal[]):AbortSignal;timeout(milliseconds:number):AbortSignal;};interface AbstractWorkerEventMap{"error":ErrorEvent;}interface AbstractWorker{onerror:((this:AbstractWorker,ev:ErrorEvent)=>any)|null;addEventListener<K extends keyof AbstractWorkerEventMap>(type:K,listener:(this:AbstractWorker,ev:AbstractWorkerEventMap[K])=>any,options?:boolean|AddEventListenerOptions):void;addEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|AddEventListenerOptions):void;removeEventListener<K extends keyof AbstractWorkerEventMap>(type:K,listener:(this:AbstractWorker,ev:AbstractWorkerEventMap[K])=>any,options?:boolean|EventListenerOptions):void;removeEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|EventListenerOptions):void;}interface AnimationFrameProvider{cancelAnimationFrame(handle:number):void;requestAnimationFrame(callback:FrameRequestCallback):number;}interface AudioData{readonly duration:number;readonly format:AudioSampleFormat|null;readonly numberOfChannels:number;readonly numberOfFrames:number;readonly sampleRate:number;readonly timestamp:number;allocationSize(options:AudioDataCopyToOptions):number;clone():AudioData;close():void;copyTo(destination:AllowSharedBufferSource,options:AudioDataCopyToOptions):void;}declare var AudioData:{prototype:AudioData;new(init:AudioDataInit):AudioData;};interface AudioDecoderEventMap{"dequeue":Event;}interface AudioDecoder extends EventTarget{readonly decodeQueueSize:number;ondequeue:((this:AudioDecoder,ev:Event)=>any)|null;readonly state:CodecState;close():void;configure(config:AudioDecoderConfig):void;decode(chunk:EncodedAudioChunk):void;flush():Promise<void>;reset():void;addEventListener<K extends keyof AudioDecoderEventMap>(type:K,listener:(this:AudioDecoder,ev:AudioDecoderEventMap[K])=>any,options?:boolean|AddEventListenerOptions):void;addEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|AddEventListenerOptions):void;removeEventListener<K extends keyof AudioDecoderEventMap>(type:K,listener:(this:AudioDecoder,ev:AudioDecoderEventMap[K])=>any,options?:boolean|EventListenerOptions):void;removeEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|EventListenerOptions):void;}declare var AudioDecoder:{prototype:AudioDecoder;new(init:AudioDecoderInit):AudioDecoder;isConfigSupported(config:AudioDecoderConfig):Promise<AudioDecoderSupport>;};interface AudioEncoderEventMap{"dequeue":Event;}interface AudioEncoder extends EventTarget{readonly encodeQueueSize:number;ondequeue:((this:AudioEncoder,ev:Event)=>any)|null;readonly state:CodecState;close():void;configure(config:AudioEncoderConfig):void;encode(data:AudioData):void;flush():Promise<void>;reset():void;addEventListener<K extends keyof AudioEncoderEventMap>(type:K,listener:(this:AudioEncoder,ev:AudioEncoderEventMap[K])=>any,options?:boolean|AddEventListenerOptions):void;addEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|AddEventListenerOptions):void;removeEventListener<K extends keyof AudioEncoderEventMap>(type:K,listener:(this:AudioEncoder,ev:AudioEncoderEventMap[K])=>any,options?:boolean|EventListenerOptions):void;removeEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|EventListenerOptions):void;}declare var AudioEncoder:{prototype:AudioEncoder;new(init:AudioEncoderInit):AudioEncoder;isConfigSupported(config:AudioEncoderConfig):Promise<AudioEncoderSupport>;};interface Blob{readonly size:number;readonly type:string;arrayBuffer():Promise<ArrayBuffer>;bytes():Promise<Uint8Array>;slice(start?:number,end?:number,contentType?:string):Blob;stream():ReadableStream<Uint8Array>;text():Promise<string>;}declare var Blob:{prototype:Blob;new(blobParts?:BlobPart[],options?:BlobPropertyBag):Blob;};interface Body{readonly body:ReadableStream<Uint8Array>|null;readonly bodyUsed:boolean;arrayBuffer():Promise<ArrayBuffer>;blob():Promise<Blob>;bytes():Promise<Uint8Array>;formData():Promise<FormData>;json():Promise<any>;text():Promise<string>;}interface BroadcastChannelEventMap{"message":MessageEvent;"messageerror":MessageEvent;}interface BroadcastChannel extends EventTarget{readonly name:string;onmessage:((this:BroadcastChannel,ev:MessageEvent)=>any)|null;onmessageerror:((this:BroadcastChannel,ev:MessageEvent)=>any)|null;close():void;postMessage(message:any):void;addEventListener<K extends keyof BroadcastChannelEventMap>(type:K,listener:(this:BroadcastChannel,ev:BroadcastChannelEventMap[K])=>any,options?:boolean|AddEventListenerOptions):void;addEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|AddEventListenerOptions):void;removeEventListener<K extends keyof BroadcastChannelEventMap>(type:K,listener:(this:BroadcastChannel,ev:BroadcastChannelEventMap[K])=>any,options?:boolean|EventListenerOptions):void;removeEventListener(type:string,listener:EventListenerOrEventListenerObject,options?:boolean|EventListenerOptions):void;}declare var BroadcastChannel:{prototype:BroadcastChannel;new(name:string):BroadcastChannel;};interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView>{readonly highWaterMark:number;readonly size:QueuingStrategySize<ArrayBufferView>;}declare var ByteLengthQueuingStrategy:{prototype:ByteLengthQueuingStrategy;new(init:QueuingStrategyInit):ByteLengthQueuingStrategy;};interface CSSImageValue extends CSSStyleValue{}declare var CSSImageValue:{prototype:CSSImageValue;new():CSSImageValue;};interface CSSKeywordValue extends CSSStyleValue{value:string;}declare var CSSKeywordValue:{prototype:CSSKeywordValue;new(value:string):CSSKeywordValue;};interface CSSMathClamp extends CSSMathValue{readonly lower:CSSNumericValue;readonly upper:CSSNumericValue;readonly value:CSSNumericValue;}declare var CSSMathClamp:{prototype:CSSMathClamp;new(lower:CSSNumberish,value:CSSNumberish,upper:CSSNumberish):CSSMathClamp;};interface CSSMathInvert extends CSSMathValue{readonly value:CSSNumericValue;}declare var CSSMathInvert:{prototype:CSSMathInvert;new(arg:CSSNumberish):CSSMathInvert;};interface CSSMathMax extends CSSMathValue{readonly values:CSSNumericArray;}declare var CSSMathMax:{prototype:CSSMathMax;new(...args:CSSNumberish[]):CSSMathMax;};interface CSSMathMin extends CSSMathValue{readonly values:CSSNumericArray;}declare var CSSMathMin:{prototype:CSSMathMin;new(...args:CSSNumberish[]):CSSMathMin;};interface CSSMathNegate extends CSSMathValue{readonly value:CSSNumericValue;}declare var CSSMathNegate:{prototype:CSSMathNegate;new(arg:CSSNumberish):CSSMathNegate;};interface CSSMathProduct extends CSSMathValue{readonly values:CSSNumericArray;}declare var CSSMathProduct:{prototype:CSSMathProduct;new(...args:CSSNumberish[]):CSSMathProduct;};interface CSSMathSum extends CSSMathValue{readonly values:CSSNumericArray;}declare var CSSMathSum:{prototype:CSSMathSum;new(...args:CSSNumberish[]):CSSMathSum;};interface CSSMathValue extends CSSNumericValue{readonly operator:CSSMathOperator;}declare var CSSMathValue:{prototype:CSSMathValue;new():CSSMathValue;};interface CSSMatrixComponent extends CSSTransformComponent{matrix:DOMMatrix;}declare var CSSMatrixComponent:{prototype:CSSMatrixComponent;new(matrix:DOMMatrixReadOnly,options?:CSSMatrixComponentOptions):CSSMatrixComponent;};interface CSSNumericArray{readonly length:number;forEach(callbackfn:(value:CSSNumericValue,key:number,parent:CSSNumericArray)=>void,thisArg?:any):void;[index:number]:CSSNumericValue;}declare var CSSNumericArray:{prototype:CSSNumericArray;new():CSSNumericArray;};interface CSSNumericValue extends CSSStyleValue{add(...values:CSSNumberish[]):CSSNumericValue;div(...values:CSSNumberish[]):CSSNumericValue;equals(...value:CSSNumberish[]):boolean;max(...values:CSSNumberish[]):CSSNumericValue;min(...values:CSSNumberish[]):CSSNumericValue;mul(...values:CSSNumberish[]):CSSNumericValue;sub(...values:CSSNumberish[]):CSSNumericValue;to(unit:string):CSSUnitValue;toSum(...units:string[]):CSSMathSum;type():CSSNumericType;}declare var CSSNumericValue:{prototype:CSSNumericValue;new():CSSNumericValue;};interface CSSPerspective extends CSSTransformComponent{length:CSSPerspectiveValue;}declare var CSSPerspective:{prototype:CSSPerspective;new(length:CSSPerspectiveValue):CSSPerspective;};interface CSSRotate extends CSSTransformComponent{angle:CSSNumericValue;x:CSSNumberish;y:CSSNumberish;z:CSSNumberish;}declare var CSSRotate:{prototype:CSSRotate;new(angle:CSSNumericValue):CSSRotate;new(x:CSSNumberish,y:CSSNumberish,z:CSSNumberish,angle:CSSNumericValue):CSSRotate;};interface CSSScale extends CSSTransformComponent{x:CSSNumberish;y:CSSNumberish;z:CSSNumberish;}declare var CSSScale:{prototype:CSSScale;new(x:CSSNumberish,y:CSSNumberish,z?:CSSNumberish):CSSScale;};interface CSSSkew extends CSSTransformComponent{ax:CSSNumericValue;ay:CSSNumericValue;}declare var CSSSkew:{prototype:CSSSkew;new(ax:CSSNumericValue,ay:CSSNumericValue):CSSSkew;};interface CSSSkewX extends CSSTransformComponent{ax:CSSNumericValue;}declare var CSSSkewX:{prototype:CSSSkewX;new(ax:CSSNumericValue):CSSSkewX;};interface CSSSkewY extends CSSTransformComponent{ay:CSSNumericValue;}declare var CSSSkewY:{prototype:CSSSkewY;new(ay:CSSNumericValue):CSSSkewY;};interface CSSStyleValue{toString():string;}declare var CSSStyleValue:{prototype:CSSStyleValue;new():CSSStyleValue;};interface CSSTransformComponent{is2D:boolean;toMatrix():DOMMatrix;toString():string;}declare var CSSTransformComponent:{prototype:CSSTransformComponent;new():CSSTransformComponent;};interface CSSTransformValue extends CSSStyleValue{readonly is2D:boolean;readonly length:number;toMatrix():DOMMatrix;forEach(callbackfn:(value:CSSTransformComponent,key:number,parent:CSSTransformValue)=>void,thisArg?:any):void;[index:number]:CSSTransformComponent;}declare var CSSTransformValue:{prototype:CSSTransformValue;new(transforms:CSSTransformComponent[]):CSSTransformValue;};interface CSSTranslate extends CSSTransformComponent{x:CSSNumericValue;y:CSSNumericValue;z:CSSNumericValue;}declare var CSSTranslate:{prototype:CSSTranslate;new(x:CSSNumericValue,y:CSSNumericValue,z?:CSSNumericValue):CSSTranslate;};interface CSSUnitValue extends CSSNumericValue{readonly unit:string;value:number;}declare var CSSUnitValue:{prototype:CSSUnitValue;new(value:number,unit:string):CSSUnitValue;};interface CSSUnparsedValue extends CSSStyleValue{readonly length:number;forEach(callbackfn:(value:CSSUnparsedSegment,key:number,parent:CSSUnparsedValue)=>void,thisArg?:any):void;[index:number]:CSSUnparsedSegment;}declare var CSSUnparsedValue:{prototype:CSSUnparsedValue;new(members:CSSUnparsedSegment[]):CSSUnparsedValue;};interface CSSVariableReferenceValue{readonly fallback:CSSUnparsedValue|null;variable:string;}declare var CSSVariableReferenceValue:{prototype:CSSVariableReferenceValue;new(variable:string,fallback?:CSSUnparsedValue|null):CSSVariableReferenceValue;};interface Cache{add(request:RequestInfo|URL):Promise<void>;addAll(requests:RequestInfo[]):Promise<void>;delete(request:RequestInfo|URL,options?:CacheQueryOptions):Promise<boolean>;keys(request?:RequestInfo|URL,options?:CacheQueryOptions):Promise<ReadonlyArray<Request>>;match(request:RequestInfo|URL,options?:CacheQueryOptions):Promise<Response|undefined>;matchAll(request?:RequestInfo|URL,options?:CacheQueryOptions):Promise<ReadonlyArray<Response>>;put(request:RequestInfo|URL,response:Response):Promise<void>;}declare var Cache:{prototype:Cache;new():Cache;};interface CacheStorage{delete(cacheName:string):Promise<boolean>;has(cacheName:string):Promise<boolean>;keys():Promise<string[]>;match(request:RequestInfo|URL,options?:MultiCacheQueryOptions):Promise<Response|undefined>;open(cacheName:string):Promise<Cache>;}declare var CacheStorage:{prototype:CacheStorage;new():CacheStorage;};interface CanvasCompositing{globalAlpha:number;globalCompositeOperation:GlobalCompositeOperation;}interface CanvasDrawImage{drawImage(image:CanvasImageSource,dx:number,dy:number):void;drawImage(image:CanvasImageSource,dx:number,dy:number,dw:number,dh:number):void;drawImage(image:CanvasImageSource,sx:number,sy:number,sw:number,sh:number,dx:number,dy:number,dw:number,dh:number):void;}interface CanvasDrawPath{beginPath():void;clip(fillRule?:CanvasFillRule):void;clip(path:Path2D,fillRule?:CanvasFillRule):void;fill(fillRule?:CanvasFillRule):void;fill(path:Path2D,fillRule?:CanvasFillRule):void;isPointInPath(x:number,y:number,fillRule?:CanvasFillRule):boolean;isPointInPath(path:Path2D,x:number,y:number,fillRule?:CanvasFillRule):boolean;isPointInStroke(x:number,y:number):boolean;isPointInStroke(path:Path2D,x:number,y:number):boolean;stroke():void;stroke(path:Path2D):void;}interface CanvasFillStrokeStyles{fillStyle:string|CanvasGradient|CanvasPattern;strokeStyle:string|CanvasGradient|CanvasPattern;createConicGradient(startAngle:number,x:number,y:number):CanvasGradient;createLinearGradient(x0:number,y0:number,x1:number,y1:number):CanvasGradient;createPattern(image:CanvasImageSource,repetition:string|null):CanvasPattern|null;createRadialGradient(x0:number,y0:number,r0:number,x1:number,y1:number,r1:number):CanvasGradient;}interface CanvasFilters{filter:string;}interface CanvasGradient{addColorStop(offset:number,color:string):void;}declare var CanvasGradient:{prototype:CanvasGradient;new():CanvasGradient;};interface CanvasImageData{createImageData(sw:number,sh:number,settings?:ImageDataSettings):ImageData;createImageData(imagedata:ImageData):ImageData;getImageData(sx:number,sy:number,sw:number,sh:number,settings?:ImageDataSettings):ImageData;putImageData(imagedata:ImageData,dx:number,dy:number):void;putImageData(imagedata:ImageData,dx:number,dy:number,dirtyX:number,dirtyY:number,dirtyWidth:number,dirtyHeight:number):void;}interface CanvasImageSmoothing{imageSmoothingEnabled:boolean;imageSmoothingQuality:ImageSmoothingQuality;}interface CanvasPath{arc(x:number,y:number,radius:number,startAngle:number,endAngle:number,counterclockwise?:boolean):void;arcTo(x1:number,y1:number,x2:number,y2:number,radius:number):void;bezierCurveTo(cp1x:number,cp1y:number,cp2x:number,cp2y:number,x:number,y:number):void;closePath():void;ellipse(x:number,y:number,radiusX:number,radiusY:number,rotation:number,startAngle:number,endAngle:number,counterclockwise?:boolean):void;lineTo(x:number,y:number):void;moveTo(x:number,y:number):void;quadraticCurveTo(cpx:number,cpy:number,x:number,y:number):void;rect(x:number,y:number,w:number,h:number):void;roundRect(x:number,y:number,w:number,h:number,radii?:number|DOMPointInit|(number|DOMPointInit)[]):void;}interface CanvasPathDrawingStyles{lineCap:CanvasLineCap;lineDashOffset:number;lineJoin:CanvasLineJoin;lineWidth:number;miterLimit:number;getLineDash():number[];setLineDash(segments:number[]):void;}interface CanvasPattern{setTransform(transform?:DOMMatrix2DInit):void;}declare var CanvasPattern:{prototype:CanvasPattern;new():CanvasPattern;};interface CanvasRect{clearRect(x:number,y:number,w:number,h:number):void;fillRect(x:number,y:number,w:number,h:number):void;strokeRect(x:number,y:number,w:number,h:number):void;}interface CanvasShadowStyles{shadowBlur:number;shadowColor:string;shadowOffsetX:number;shadowOffsetY:number;}interface CanvasState{isContextLost():boolean;reset():void;restore():void;save():void;}interface CanvasText{fillText(text:string,x:number,y:number,maxWidth?:number):void;measureText(text:string):TextMetrics;strokeText(text:string,x:number,y:number,maxWidth?:number):void;}interface CanvasTextDrawingStyles{direction:CanvasDirection;font:string;fontKerning:CanvasFontKerning;fontStretch:CanvasFontStretch;fontVariantCaps:CanvasFontVariantCaps;letterSpacing:string;textAlign:CanvasTextAlign;textBaseline:CanvasTextBaseline;textRendering:CanvasTextRendering;wordSpacing:string;}interface CanvasTransform{getTransform():DOMMatrix;resetTransform():void;rotate(angle:number):void;scale(x:number,y:number):void;setTransform(a:number,b:number,c:number,d:number,e:number,f:number):void;setTransform(transform?:DOMMatrix2DInit):void;transform(a:number,b:number,c:number,d:number,e:number,f:number):void;translate(x:number,y:number):void;}interface Client{readonly frameType:FrameType;readonly id:string;readonly type:ClientTypes;readonly url:string;postMessage(message:any,transfer:Transferable[]):void;postMessage(message:any,options?:StructuredSerializeOptions):void;}declare var Client:{prototype:Client;new():Client;};interface Clients{claim():Promise<void>;get(id:string):Promise<Client|undefined>;matchAll<T extends ClientQueryOptions>(options?:T):Promise<ReadonlyArray<T["type"]extends"window"?WindowClient:Client>>;openWindow(url:string|URL):Promise<WindowClient|null>;}declare var Clients:{prototype:Clients;new():Clients;};interface CloseEvent extends Event{readonly code:number;readonly reason:string;readonly wasClean:boolean;}declare var CloseEvent:{prototype:CloseEvent;new(type:string,eventInitDict?:CloseEventInit):CloseEvent;};interface CompressionStream extends GenericTransformStream{readonly readable:ReadableStream<Uint8Array>;readonly writable:WritableStream<BufferSource>;}declare var CompressionStream:{prototype:CompressionStream;new(format:CompressionFormat):CompressionStream;};interface CountQueuingStrategy extends QueuingStrategy{readonly highWaterMark:number;readonly size:QueuingStrategySize;}declare var CountQueuingStrategy:{prototype:CountQueuingStrategy;new(init:QueuingStrategyInit):CountQueuingStrategy;};interface Crypto{readonly subtle:SubtleCrypto;getRandomValues<T extends ArrayBufferView|null>(array:T):T;randomUUID():\`\${string}-\${string}-\${string}-\${string}-\${string}\`;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
};

/**
 * The CryptoKey dictionary of the Web Crypto API represents a cryptographic key.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey)
 */
interface CryptoKey {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/algorithm) */
    readonly algorithm: KeyAlgorithm;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/extractable) */
    readonly extractable: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/type) */
    readonly type: KeyType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/usages) */
    readonly usages: KeyUsage[];
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent) */
interface CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with. Typically used for synthetic events.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)
     */
    readonly detail: T;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/initCustomEvent)
     */
    initCustomEvent(type: string, bubbles?: boolean, cancelable?: boolean, detail?: T): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new<T>(type: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};

/**
 * An abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException)
 */
interface DOMException extends Error {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)
     */
    readonly code: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message) */
    readonly message: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name) */
    readonly name: string;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
}

declare var DOMException: {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix) */
interface DOMMatrix extends DOMMatrixReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    a: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    b: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    c: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    d: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    e: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    f: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m11: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m12: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m13: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m14: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m21: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m22: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m23: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m24: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m31: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m32: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m33: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m34: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m41: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m42: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m43: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix#instance_properties) */
    m44: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/invertSelf) */
    invertSelf(): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/multiplySelf) */
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/preMultiplySelf) */
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/rotateSelf) */
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewXSelf) */
    skewXSelf(sx?: number): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/skewYSelf) */
    skewYSelf(sy?: number): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrix/translateSelf) */
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly) */
interface DOMMatrixReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly a: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly b: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly c: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly d: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly e: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly f: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/is2D) */
    readonly is2D: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/isIdentity) */
    readonly isIdentity: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m11: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m12: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m13: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m14: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m21: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m22: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m23: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m24: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m31: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m32: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m33: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m34: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m41: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m42: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m43: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly#instance_properties) */
    readonly m44: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipX) */
    flipX(): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/flipY) */
    flipY(): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/inverse) */
    inverse(): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/multiply) */
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/scale) */
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat32Array) */
    toFloat32Array(): Float32Array;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toFloat64Array) */
    toFloat64Array(): Float64Array;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toJSON) */
    toJSON(): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/transformPoint) */
    transformPoint(point?: DOMPointInit): DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/translate) */
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint) */
interface DOMPoint extends DOMPointReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/w) */
    w: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/x) */
    x: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/y) */
    y: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/z) */
    z: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPoint/fromPoint_static) */
    fromPoint(other?: DOMPointInit): DOMPoint;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly) */
interface DOMPointReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/w) */
    readonly w: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/x) */
    readonly x: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/y) */
    readonly y: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/z) */
    readonly z: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/matrixTransform) */
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/toJSON) */
    toJSON(): any;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMPointReadOnly/fromPoint_static) */
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad) */
interface DOMQuad {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p1) */
    readonly p1: DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p2) */
    readonly p2: DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p3) */
    readonly p3: DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/p4) */
    readonly p4: DOMPoint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/getBounds) */
    getBounds(): DOMRect;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMQuad/toJSON) */
    toJSON(): any;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect) */
interface DOMRect extends DOMRectReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/height) */
    height: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/width) */
    width: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/x) */
    x: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/y) */
    y: number;
}

declare var DOMRect: {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRect/fromRect_static) */
    fromRect(other?: DOMRectInit): DOMRect;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly) */
interface DOMRectReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/bottom) */
    readonly bottom: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/height) */
    readonly height: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left) */
    readonly left: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/right) */
    readonly right: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/top) */
    readonly top: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/width) */
    readonly width: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/x) */
    readonly x: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/y) */
    readonly y: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/toJSON) */
    toJSON(): any;
}

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/fromRect_static) */
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

/**
 * A type returned by some APIs which contains a list of DOMString (strings).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList)
 */
interface DOMStringList {
    /**
     * Returns the number of strings in strings.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/length)
     */
    readonly length: number;
    /**
     * Returns true if strings contains string, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/contains)
     */
    contains(string: string): boolean;
    /**
     * Returns the string with index index from strings.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMStringList/item)
     */
    item(index: number): string | null;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DecompressionStream) */
interface DecompressionStream extends GenericTransformStream {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<BufferSource>;
}

declare var DecompressionStream: {
    prototype: DecompressionStream;
    new(format: CompressionFormat): DecompressionStream;
};

interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap, MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "rtctransform": RTCTransformEvent;
}

/**
 * (the Worker global scope) is accessible through the self keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the JavaScript Reference. See also: Functions available to workers.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope)
 */
interface DedicatedWorkerGlobalScope extends WorkerGlobalScope, AnimationFrameProvider, MessageEventTarget<DedicatedWorkerGlobalScope> {
    /**
     * Returns dedicatedWorkerGlobal's name, i.e. the value given to the Worker constructor. Primarily useful for debugging.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
     */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) */
    onrtctransform: ((this: DedicatedWorkerGlobalScope, ev: RTCTransformEvent) => any) | null;
    /**
     * Aborts dedicatedWorkerGlobal.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
     */
    close(): void;
    /**
     * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal. transfer can be passed as a list of objects that are to be transferred rather than cloned.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var DedicatedWorkerGlobalScope: {
    prototype: DedicatedWorkerGlobalScope;
    new(): DedicatedWorkerGlobalScope;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_blend_minmax) */
interface EXT_blend_minmax {
    readonly MIN_EXT: 0x8007;
    readonly MAX_EXT: 0x8008;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_float) */
interface EXT_color_buffer_float {
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_color_buffer_half_float) */
interface EXT_color_buffer_half_float {
    readonly RGBA16F_EXT: 0x881A;
    readonly RGB16F_EXT: 0x881B;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_float_blend) */
interface EXT_float_blend {
}

/**
 * The EXT_frag_depth extension is part of the WebGL API and enables to set a depth value of a fragment from within the fragment shader.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_frag_depth)
 */
interface EXT_frag_depth {
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_sRGB) */
interface EXT_sRGB {
    readonly SRGB_EXT: 0x8C40;
    readonly SRGB_ALPHA_EXT: 0x8C42;
    readonly SRGB8_ALPHA8_EXT: 0x8C43;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 0x8210;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_shader_texture_lod) */
interface EXT_shader_texture_lod {
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_bptc) */
interface EXT_texture_compression_bptc {
    readonly COMPRESSED_RGBA_BPTC_UNORM_EXT: 0x8E8C;
    readonly COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: 0x8E8D;
    readonly COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: 0x8E8E;
    readonly COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: 0x8E8F;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_compression_rgtc) */
interface EXT_texture_compression_rgtc {
    readonly COMPRESSED_RED_RGTC1_EXT: 0x8DBB;
    readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: 0x8DBC;
    readonly COMPRESSED_RED_GREEN_RGTC2_EXT: 0x8DBD;
    readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: 0x8DBE;
}

/**
 * The EXT_texture_filter_anisotropic extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_filter_anisotropic)
 */
interface EXT_texture_filter_anisotropic {
    readonly TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE;
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EXT_texture_norm16) */
interface EXT_texture_norm16 {
    readonly R16_EXT: 0x822A;
    readonly RG16_EXT: 0x822C;
    readonly RGB16_EXT: 0x8054;
    readonly RGBA16_EXT: 0x805B;
    readonly R16_SNORM_EXT: 0x8F98;
    readonly RG16_SNORM_EXT: 0x8F99;
    readonly RGB16_SNORM_EXT: 0x8F9A;
    readonly RGBA16_SNORM_EXT: 0x8F9B;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk) */
interface EncodedAudioChunk {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/byteLength) */
    readonly byteLength: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/duration) */
    readonly duration: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/timestamp) */
    readonly timestamp: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/type) */
    readonly type: EncodedAudioChunkType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/copyTo) */
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedAudioChunk: {
    prototype: EncodedAudioChunk;
    new(init: EncodedAudioChunkInit): EncodedAudioChunk;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk) */
interface EncodedVideoChunk {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/byteLength) */
    readonly byteLength: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/duration) */
    readonly duration: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/timestamp) */
    readonly timestamp: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/type) */
    readonly type: EncodedVideoChunkType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EncodedVideoChunk/copyTo) */
    copyTo(destination: AllowSharedBufferSource): void;
}

declare var EncodedVideoChunk: {
    prototype: EncodedVideoChunk;
    new(init: EncodedVideoChunkInit): EncodedVideoChunk;
};

/**
 * Events providing information related to errors in scripts or in files.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent)
 */
interface ErrorEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/colno) */
    readonly colno: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/error) */
    readonly error: any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/filename) */
    readonly filename: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/lineno) */
    readonly lineno: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/message) */
    readonly message: string;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};

/**
 * An event which takes place in the DOM.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event)
 */
interface Event {
    /**
     * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)
     */
    readonly bubbles: boolean;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
     */
    cancelBubble: boolean;
    /**
     * Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)
     */
    readonly cancelable: boolean;
    /**
     * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)
     */
    readonly composed: boolean;
    /**
     * Returns the object whose event listener's callback is currently being invoked.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)
     */
    readonly currentTarget: EventTarget | null;
    /**
     * Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)
     */
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)
     */
    readonly eventPhase: number;
    /**
     * Returns true if event was dispatched by the user agent, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
     */
    readonly isTrusted: boolean;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)
     */
    returnValue: boolean;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)
     */
    readonly srcElement: EventTarget | null;
    /**
     * Returns the object to which event is dispatched (its target).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)
     */
    readonly target: EventTarget | null;
    /**
     * Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)
     */
    readonly timeStamp: DOMHighResTimeStamp;
    /**
     * Returns the type of event, e.g. "click", "hashchange", or "submit".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)
     */
    readonly type: string;
    /**
     * Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)
     */
    composedPath(): EventTarget[];
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /**
     * If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)
     */
    preventDefault(): void;
    /**
     * Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)
     */
    stopImmediatePropagation(): void;
    /**
     * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)
     */
    stopPropagation(): void;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    readonly NONE: 0;
    readonly CAPTURING_PHASE: 1;
    readonly AT_TARGET: 2;
    readonly BUBBLING_PHASE: 3;
};

interface EventListener {
    (evt: Event): void;
}

interface EventListenerObject {
    handleEvent(object: Event): void;
}

interface EventSourceEventMap {
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource) */
interface EventSource extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
    onerror: ((this: EventSource, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
    onopen: ((this: EventSource, ev: Event) => any) | null;
    /**
     * Returns the state of this EventSource object's connection. It can have the values described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
     */
    readonly readyState: number;
    /**
     * Returns the URL providing the event stream.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
     */
    readonly url: string;
    /**
     * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
     */
    readonly withCredentials: boolean;
    /**
     * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
     */
    close(): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSED: 2;
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string | URL, eventSourceInitDict?: EventSourceInit): EventSource;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSED: 2;
};

/**
 * EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget)
 */
interface EventTarget {
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     *
     * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     *
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     *
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in \xA7 2.8 Observing event listeners.
     *
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
     *
     * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
     *
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
     */
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    /**
     * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
     */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

/**
 * Extends the lifetime of the install and activate events dispatched on the global scope as part of the service worker lifecycle. This ensures that any functional events (like FetchEvent) are not dispatched until it upgrades database schemas and deletes the outdated cache entries.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent)
 */
interface ExtendableEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) */
    waitUntil(f: Promise<any>): void;
}

declare var ExtendableEvent: {
    prototype: ExtendableEvent;
    new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent;
};

/**
 * This ServiceWorker API interface represents the event object of a message event fired on a service worker (when a channel message is received on the ServiceWorkerGlobalScope from another context) \u2014 extends the lifetime of such events.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent)
 */
interface ExtendableMessageEvent extends ExtendableEvent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/data) */
    readonly data: any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/lastEventId) */
    readonly lastEventId: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/origin) */
    readonly origin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/ports) */
    readonly ports: ReadonlyArray<MessagePort>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/source) */
    readonly source: Client | ServiceWorker | MessagePort | null;
}

declare var ExtendableMessageEvent: {
    prototype: ExtendableMessageEvent;
    new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent;
};

/**
 * This is the event type for fetch\xA0events dispatched on the\xA0service worker global scope. It contains information about the fetch, including the\xA0request and how the receiver will treat the response. It provides the event.respondWith() method, which allows us to provide a response to this fetch.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent)
 */
interface FetchEvent extends ExtendableEvent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/clientId) */
    readonly clientId: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/handled) */
    readonly handled: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/preloadResponse) */
    readonly preloadResponse: Promise<any>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/request) */
    readonly request: Request;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/resultingClientId) */
    readonly resultingClientId: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith) */
    respondWith(r: Response | PromiseLike<Response>): void;
}

declare var FetchEvent: {
    prototype: FetchEvent;
    new(type: string, eventInitDict: FetchEventInit): FetchEvent;
};

/**
 * Provides information about files and allows JavaScript in a web page to access their content.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/File)
 */
interface File extends Blob {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified) */
    readonly lastModified: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/webkitRelativePath) */
    readonly webkitRelativePath: string;
}

declare var File: {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

/**
 * An object of this type is returned by the files property of the HTML <input> element; this lets you access the list of files selected with the <input type="file"> element. It's also used for a list of files dropped into web content when using the drag and drop API; see the DataTransfer object for details on this usage.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList)
 */
interface FileList {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/length) */
    readonly length: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileList/item) */
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent<FileReader>;
    "error": ProgressEvent<FileReader>;
    "load": ProgressEvent<FileReader>;
    "loadend": ProgressEvent<FileReader>;
    "loadstart": ProgressEvent<FileReader>;
    "progress": ProgressEvent<FileReader>;
}

/**
 * Lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader)
 */
interface FileReader extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/error) */
    readonly error: DOMException | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/abort_event) */
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/error_event) */
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/load_event) */
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/loadend_event) */
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/loadstart_event) */
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/progress_event) */
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readyState) */
    readonly readyState: typeof FileReader.EMPTY | typeof FileReader.LOADING | typeof FileReader.DONE;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/result) */
    readonly result: string | ArrayBuffer | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/abort) */
    abort(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsArrayBuffer) */
    readAsArrayBuffer(blob: Blob): void;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsBinaryString)
     */
    readAsBinaryString(blob: Blob): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsDataURL) */
    readAsDataURL(blob: Blob): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReader/readAsText) */
    readAsText(blob: Blob, encoding?: string): void;
    readonly EMPTY: 0;
    readonly LOADING: 1;
    readonly DONE: 2;
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    readonly EMPTY: 0;
    readonly LOADING: 1;
    readonly DONE: 2;
};

/**
 * Allows to read File or Blob objects in a synchronous way.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync)
 */
interface FileReaderSync {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsArrayBuffer) */
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsBinaryString)
     */
    readAsBinaryString(blob: Blob): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsDataURL) */
    readAsDataURL(blob: Blob): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsText) */
    readAsText(blob: Blob, encoding?: string): string;
}

declare var FileReaderSync: {
    prototype: FileReaderSync;
    new(): FileReaderSync;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle)
 */
interface FileSystemDirectoryHandle extends FileSystemHandle {
    readonly kind: "directory";
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getDirectoryHandle) */
    getDirectoryHandle(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/getFileHandle) */
    getFileHandle(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/removeEntry) */
    removeEntry(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryHandle/resolve) */
    resolve(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

declare var FileSystemDirectoryHandle: {
    prototype: FileSystemDirectoryHandle;
    new(): FileSystemDirectoryHandle;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle)
 */
interface FileSystemFileHandle extends FileSystemHandle {
    readonly kind: "file";
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createSyncAccessHandle) */
    createSyncAccessHandle(): Promise<FileSystemSyncAccessHandle>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createWritable) */
    createWritable(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/getFile) */
    getFile(): Promise<File>;
}

declare var FileSystemFileHandle: {
    prototype: FileSystemFileHandle;
    new(): FileSystemFileHandle;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle)
 */
interface FileSystemHandle {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/kind) */
    readonly kind: FileSystemHandleKind;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/isSameEntry) */
    isSameEntry(other: FileSystemHandle): Promise<boolean>;
}

declare var FileSystemHandle: {
    prototype: FileSystemHandle;
    new(): FileSystemHandle;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle)
 */
interface FileSystemSyncAccessHandle {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/flush) */
    flush(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/getSize) */
    getSize(): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/read) */
    read(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/truncate) */
    truncate(newSize: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/write) */
    write(buffer: AllowSharedBufferSource, options?: FileSystemReadWriteOptions): number;
}

declare var FileSystemSyncAccessHandle: {
    prototype: FileSystemSyncAccessHandle;
    new(): FileSystemSyncAccessHandle;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream)
 */
interface FileSystemWritableFileStream extends WritableStream {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/seek) */
    seek(position: number): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/truncate) */
    truncate(size: number): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/write) */
    write(data: FileSystemWriteChunkType): Promise<void>;
}

declare var FileSystemWritableFileStream: {
    prototype: FileSystemWritableFileStream;
    new(): FileSystemWritableFileStream;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace) */
interface FontFace {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/ascentOverride) */
    ascentOverride: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/descentOverride) */
    descentOverride: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/display) */
    display: FontDisplay;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/family) */
    family: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/featureSettings) */
    featureSettings: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/lineGapOverride) */
    lineGapOverride: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/loaded) */
    readonly loaded: Promise<FontFace>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/status) */
    readonly status: FontFaceLoadStatus;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/stretch) */
    stretch: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/style) */
    style: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/unicodeRange) */
    unicodeRange: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/weight) */
    weight: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFace/load) */
    load(): Promise<FontFace>;
}

declare var FontFace: {
    prototype: FontFace;
    new(family: string, source: string | BufferSource, descriptors?: FontFaceDescriptors): FontFace;
};

interface FontFaceSetEventMap {
    "loading": FontFaceSetLoadEvent;
    "loadingdone": FontFaceSetLoadEvent;
    "loadingerror": FontFaceSetLoadEvent;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet) */
interface FontFaceSet extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loading_event) */
    onloading: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loadingdone_event) */
    onloadingdone: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/loadingerror_event) */
    onloadingerror: ((this: FontFaceSet, ev: FontFaceSetLoadEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/ready) */
    readonly ready: Promise<FontFaceSet>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/status) */
    readonly status: FontFaceSetLoadStatus;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/check) */
    check(font: string, text?: string): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSet/load) */
    load(font: string, text?: string): Promise<FontFace[]>;
    forEach(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    addEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FontFaceSet: {
    prototype: FontFaceSet;
    new(): FontFaceSet;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent) */
interface FontFaceSetLoadEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FontFaceSetLoadEvent/fontfaces) */
    readonly fontfaces: ReadonlyArray<FontFace>;
}

declare var FontFaceSetLoadEvent: {
    prototype: FontFaceSetLoadEvent;
    new(type: string, eventInitDict?: FontFaceSetLoadEventInit): FontFaceSetLoadEvent;
};

interface FontFaceSource {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts) */
    readonly fonts: FontFaceSet;
}

/**
 * Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData)
 */
interface FormData {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/append) */
    append(name: string, value: string | Blob): void;
    append(name: string, value: string): void;
    append(name: string, blobValue: Blob, filename?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/delete) */
    delete(name: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/get) */
    get(name: string): FormDataEntryValue | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/getAll) */
    getAll(name: string): FormDataEntryValue[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/has) */
    has(name: string): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FormData/set) */
    set(name: string, value: string | Blob): void;
    set(name: string, value: string): void;
    set(name: string, blobValue: Blob, filename?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
    prototype: FormData;
    new(): FormData;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GPUError)
 */
interface GPUError {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/GPUError/message) */
    readonly message: string;
}

interface GenericTransformStream {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/readable) */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CompressionStream/writable) */
    readonly writable: WritableStream;
}

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing. A Headers object has an associated header list, which is initially empty and consists\xA0of zero or more name and value pairs. \xA0You can add to this using methods like append() (see Examples.)\xA0In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers)
 */
interface Headers {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append) */
    append(name: string, value: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/delete) */
    delete(name: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/get) */
    get(name: string): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/getSetCookie) */
    getSetCookie(): string[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/has) */
    has(name: string): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set) */
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};

/**
 * This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor)
 */
interface IDBCursor {
    /**
     * Returns the direction ("next", "nextunique", "prev" or "prevunique") of the cursor.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/direction)
     */
    readonly direction: IDBCursorDirection;
    /**
     * Returns the key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/key)
     */
    readonly key: IDBValidKey;
    /**
     * Returns the effective key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/primaryKey)
     */
    readonly primaryKey: IDBValidKey;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/request) */
    readonly request: IDBRequest;
    /**
     * Returns the IDBObjectStore or IDBIndex the cursor was opened from.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/source)
     */
    readonly source: IDBObjectStore | IDBIndex;
    /**
     * Advances the cursor through the next count records in range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/advance)
     */
    advance(count: number): void;
    /**
     * Advances the cursor to the next record in range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continue)
     */
    continue(key?: IDBValidKey): void;
    /**
     * Advances the cursor to the next record in range matching or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/continuePrimaryKey)
     */
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void;
    /**
     * Delete the record pointed at by the cursor with a new value.
     *
     * If successful, request's result will be undefined.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/delete)
     */
    delete(): IDBRequest<undefined>;
    /**
     * Updated the record pointed at by the cursor with a new value.
     *
     * Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
     *
     * If successful, request's result will be the record's key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursor/update)
     */
    update(value: any): IDBRequest<IDBValidKey>;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

/**
 * This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. It is the same as the IDBCursor, except that it includes the value property.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursorWithValue)
 */
interface IDBCursorWithValue extends IDBCursor {
    /**
     * Returns the cursor's current value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBCursorWithValue/value)
     */
    readonly value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

/**
 * This IndexedDB API interface provides a connection to a database; you can use an IDBDatabase object to open a transaction on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase)
 */
interface IDBDatabase extends EventTarget {
    /**
     * Returns the name of the database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/name)
     */
    readonly name: string;
    /**
     * Returns a list of the names of object stores in the database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/objectStoreNames)
     */
    readonly objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close_event) */
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/versionchange_event) */
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    /**
     * Returns the version of the database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/version)
     */
    readonly version: number;
    /**
     * Closes the connection once all running transactions have finished.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/close)
     */
    close(): void;
    /**
     * Creates a new object store with the given name and options and returns a new IDBObjectStore.
     *
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/createObjectStore)
     */
    createObjectStore(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    /**
     * Deletes the object store with the given name.
     *
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/deleteObjectStore)
     */
    deleteObjectStore(name: string): void;
    /**
     * Returns a new transaction with the given mode ("readonly" or "readwrite") and scope which can be a single object store name or an array of names.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBDatabase/transaction)
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

/**
 * In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our To-do Notifications app (view example live.)
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory)
 */
interface IDBFactory {
    /**
     * Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if the keys are equal.
     *
     * Throws a "DataError" DOMException if either input is not a valid key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/cmp)
     */
    cmp(first: any, second: any): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/databases) */
    databases(): Promise<IDBDatabaseInfo[]>;
    /**
     * Attempts to delete the named database. If the database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request is successful request's result will be null.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/deleteDatabase)
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * Attempts to open a connection to the named database with the current version, or 1 if it does not already exist. If the request is successful request's result will be the connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBFactory/open)
     */
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

/**
 * IDBIndex interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex)
 */
interface IDBIndex {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/keyPath) */
    readonly keyPath: string | string[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/multiEntry) */
    readonly multiEntry: boolean;
    /**
     * Returns the name of the index.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/name)
     */
    name: string;
    /**
     * Returns the IDBObjectStore the index belongs to.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/objectStore)
     */
    readonly objectStore: IDBObjectStore;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/unique) */
    readonly unique: boolean;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     *
     * If successful, request's result will be the count.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/count)
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the value, or undefined if there was no matching record.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/get)
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the values.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAll)
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the keys.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllKeys)
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the key, or undefined if there was no matching record.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/getKey)
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in index are matched.
     *
     * If successful, request's result will be an IDBCursorWithValue, or null if there were no matching records.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openCursor)
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in index are matched.
     *
     * If successful, request's result will be an IDBCursor, or null if there were no matching records.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBIndex/openKeyCursor)
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

/**
 * A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is bounded; if it has no bounds, it is unbounded. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs:
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange)
 */
interface IDBKeyRange {
    /**
     * Returns lower bound, or undefined if none.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lower)
     */
    readonly lower: any;
    /**
     * Returns true if the lower open flag is set, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerOpen)
     */
    readonly lowerOpen: boolean;
    /**
     * Returns upper bound, or undefined if none.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upper)
     */
    readonly upper: any;
    /**
     * Returns true if the upper open flag is set, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperOpen)
     */
    readonly upperOpen: boolean;
    /**
     * Returns true if key is included in the range, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/includes)
     */
    includes(key: any): boolean;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning from lower to upper. If lowerOpen is true, lower is not included in the range. If upperOpen is true, upper is not included in the range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/bound_static)
     */
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange starting at key with no upper bound. If open is true, key is not included in the range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/lowerBound_static)
     */
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning only key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/only_static)
     */
    only(value: any): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange with no lower bound and ending at key. If open is true, key is not included in the range.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBKeyRange/upperBound_static)
     */
    upperBound(upper: any, open?: boolean): IDBKeyRange;
};

/**
 * This example shows a variety of different uses of object stores, from updating the data structure with IDBObjectStore.createIndex\xA0inside an onupgradeneeded function, to adding a new item to our object store with IDBObjectStore.add. For a full working example, see our\xA0To-do Notifications\xA0app (view example live.)
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore)
 */
interface IDBObjectStore {
    /**
     * Returns true if the store has a key generator, and false otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/autoIncrement)
     */
    readonly autoIncrement: boolean;
    /**
     * Returns a list of the names of indexes in the store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/indexNames)
     */
    readonly indexNames: DOMStringList;
    /**
     * Returns the key path of the store, or null if none.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/keyPath)
     */
    readonly keyPath: string | string[];
    /**
     * Returns the name of the store.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/name)
     */
    name: string;
    /**
     * Returns the associated transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/transaction)
     */
    readonly transaction: IDBTransaction;
    /**
     * Adds or updates a record in store with the given value and key.
     *
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     *
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     *
     * If successful, request's result will be the record's key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/add)
     */
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    /**
     * Deletes all records in store.
     *
     * If successful, request's result will be undefined.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/clear)
     */
    clear(): IDBRequest<undefined>;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     *
     * If successful, request's result will be the count.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/count)
     */
    count(query?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be satisfied with the data already in store the upgrade transaction will abort with a "ConstraintError" DOMException.
     *
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/createIndex)
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * Deletes records in store with the given key or in the given key range in query.
     *
     * If successful, request's result will be undefined.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/delete)
     */
    delete(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    /**
     * Deletes the index in store with the given name.
     *
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/deleteIndex)
     */
    deleteIndex(name: string): void;
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the value, or undefined if there was no matching record.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/get)
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the values.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAll)
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     *
     * If successful, request's result will be an Array of the keys.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAllKeys)
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     *
     * If successful, request's result will be the key, or undefined if there was no matching record.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getKey)
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/index) */
    index(name: string): IDBIndex;
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in store are matched.
     *
     * If successful, request's result will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openCursor)
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in store are matched.
     *
     * If successful, request's result will be an IDBCursor pointing at the first matching record, or null if there were no matching records.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/openKeyCursor)
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    /**
     * Adds or updates a record in store with the given value and key.
     *
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     *
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     *
     * If successful, request's result will be the record's key.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/put)
     */
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": IDBVersionChangeEvent;
    "upgradeneeded": IDBVersionChangeEvent;
}

/**
 * Also inherits methods from its parents IDBRequest and EventTarget.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest)
 */
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/blocked_event) */
    onblocked: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) */
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

/**
 * The request object does not initially contain any information about the result of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the IDBRequest instance.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest)
 */
interface IDBRequest<T = any> extends EventTarget {
    /**
     * When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error)
     */
    readonly error: DOMException | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/error_event) */
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/success_event) */
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
    /**
     * Returns "pending" until a request is complete, then returns "done".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/readyState)
     */
    readonly readyState: IDBRequestReadyState;
    /**
     * When a request is completed, returns the result, or undefined if the request failed. Throws a "InvalidStateError" DOMException if the request is still pending.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/result)
     */
    readonly result: T;
    /**
     * Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/source)
     */
    readonly source: IDBObjectStore | IDBIndex | IDBCursor;
    /**
     * Returns the IDBTransaction the request was made within. If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBRequest/transaction)
     */
    readonly transaction: IDBTransaction | null;
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction) */
interface IDBTransaction extends EventTarget {
    /**
     * Returns the transaction's connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/db)
     */
    readonly db: IDBDatabase;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/durability) */
    readonly durability: IDBTransactionDurability;
    /**
     * If the transaction was aborted, returns the error (a DOMException) providing the reason.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error)
     */
    readonly error: DOMException | null;
    /**
     * Returns the mode the transaction was created with ("readonly" or "readwrite"), or "versionchange" for an upgrade transaction.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/mode)
     */
    readonly mode: IDBTransactionMode;
    /**
     * Returns a list of the names of object stores in the transaction's scope. For an upgrade transaction this is all object stores in the database.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStoreNames)
     */
    readonly objectStoreNames: DOMStringList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort_event) */
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/complete_event) */
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/error_event) */
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
    /**
     * Aborts the transaction. All pending requests will fail with a "AbortError" DOMException and all changes made to the database will be reverted.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/abort)
     */
    abort(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/commit) */
    commit(): void;
    /**
     * Returns an IDBObjectStore in the transaction's scope.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBTransaction/objectStore)
     */
    objectStore(name: string): IDBObjectStore;
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

/**
 * This IndexedDB API interface indicates that the version of the database has changed, as the result of an IDBOpenDBRequest.onupgradeneeded event handler function.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent)
 */
interface IDBVersionChangeEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/newVersion) */
    readonly newVersion: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/IDBVersionChangeEvent/oldVersion) */
    readonly oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap) */
interface ImageBitmap {
    /**
     * Returns the intrinsic height of the image, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/height)
     */
    readonly height: number;
    /**
     * Returns the intrinsic width of the image, in CSS pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/width)
     */
    readonly width: number;
    /**
     * Releases imageBitmap's underlying bitmap data.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmap/close)
     */
    close(): void;
}

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext) */
interface ImageBitmapRenderingContext {
    /**
     * Transfers the underlying bitmap data from imageBitmap to context, and the bitmap becomes the contents of the canvas element to which context is bound.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap)
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};

/**
 * The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData().
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData)
 */
interface ImageData {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/colorSpace) */
    readonly colorSpace: PredefinedColorSpace;
    /**
     * Returns the one-dimensional array containing the data in RGBA order, as integers in the range 0 to 255.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/data)
     */
    readonly data: Uint8ClampedArray;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/height)
     */
    readonly height: number;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in pixels.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageData/width)
     */
    readonly width: number;
}

declare var ImageData: {
    prototype: ImageData;
    new(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    new(data: Uint8ClampedArray, sw: number, sh?: number, settings?: ImageDataSettings): ImageData;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder)
 */
interface ImageDecoder {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/complete) */
    readonly complete: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/completed) */
    readonly completed: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/tracks) */
    readonly tracks: ImageTrackList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/type) */
    readonly type: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/decode) */
    decode(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/reset) */
    reset(): void;
}

declare var ImageDecoder: {
    prototype: ImageDecoder;
    new(init: ImageDecoderInit): ImageDecoder;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageDecoder/isTypeSupported_static) */
    isTypeSupported(type: string): Promise<boolean>;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack) */
interface ImageTrack {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/animated) */
    readonly animated: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/frameCount) */
    readonly frameCount: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/repetitionCount) */
    readonly repetitionCount: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrack/selected) */
    selected: boolean;
}

declare var ImageTrack: {
    prototype: ImageTrack;
    new(): ImageTrack;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList) */
interface ImageTrackList {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/length) */
    readonly length: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/ready) */
    readonly ready: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/selectedIndex) */
    readonly selectedIndex: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ImageTrackList/selectedTrack) */
    readonly selectedTrack: ImageTrack | null;
    [index: number]: ImageTrack;
}

declare var ImageTrackList: {
    prototype: ImageTrackList;
    new(): ImageTrackList;
};

interface ImportMeta {
    url: string;
    resolve(specifier: string): string;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/KHR_parallel_shader_compile) */
interface KHR_parallel_shader_compile {
    readonly COMPLETION_STATUS_KHR: 0x91B1;
}

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock)
 */
interface Lock {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock/mode) */
    readonly mode: LockMode;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Lock/name) */
    readonly name: string;
}

declare var Lock: {
    prototype: Lock;
    new(): Lock;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager)
 */
interface LockManager {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager/query) */
    query(): Promise<LockManagerSnapshot>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/LockManager/request) */
    request(name: string, callback: LockGrantedCallback): Promise<any>;
    request(name: string, options: LockOptions, callback: LockGrantedCallback): Promise<any>;
}

declare var LockManager: {
    prototype: LockManager;
    new(): LockManager;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities) */
interface MediaCapabilities {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/decodingInfo) */
    decodingInfo(configuration: MediaDecodingConfiguration): Promise<MediaCapabilitiesDecodingInfo>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/encodingInfo) */
    encodingInfo(configuration: MediaEncodingConfiguration): Promise<MediaCapabilitiesEncodingInfo>;
}

declare var MediaCapabilities: {
    prototype: MediaCapabilities;
    new(): MediaCapabilities;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaSourceHandle) */
interface MediaSourceHandle {
}

declare var MediaSourceHandle: {
    prototype: MediaSourceHandle;
    new(): MediaSourceHandle;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor) */
interface MediaStreamTrackProcessor {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor/readable) */
    readonly readable: ReadableStream;
}

declare var MediaStreamTrackProcessor: {
    prototype: MediaStreamTrackProcessor;
    new(init: MediaStreamTrackProcessorInit): MediaStreamTrackProcessor;
};

/**
 * This Channel Messaging API interface allows us to create a new message channel and send data through it via its two MessagePort properties.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel)
 */
interface MessageChannel {
    /**
     * Returns the first MessagePort object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel/port1)
     */
    readonly port1: MessagePort;
    /**
     * Returns the second MessagePort object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageChannel/port2)
     */
    readonly port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

/**
 * A message received by a target object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent)
 */
interface MessageEvent<T = any> extends Event {
    /**
     * Returns the data of the message.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/data)
     */
    readonly data: T;
    /**
     * Returns the last event ID string, for server-sent events.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/lastEventId)
     */
    readonly lastEventId: string;
    /**
     * Returns the origin of the message, for server-sent events and cross-document messaging.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/origin)
     */
    readonly origin: string;
    /**
     * Returns the MessagePort array sent with the message, for cross-document messaging and channel messaging.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/ports)
     */
    readonly ports: ReadonlyArray<MessagePort>;
    /**
     * Returns the WindowProxy of the source window, for cross-document messaging, and the MessagePort being attached, in the connect event fired at SharedWorkerGlobalScope objects.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/source)
     */
    readonly source: MessageEventSource | null;
    /** @deprecated */
    initMessageEvent(type: string, bubbles?: boolean, cancelable?: boolean, data?: any, origin?: string, lastEventId?: string, source?: MessageEventSource | null, ports?: MessagePort[]): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new<T>(type: string, eventInitDict?: MessageEventInit<T>): MessageEvent<T>;
};

interface MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

interface MessageEventTarget<T> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event) */
    onmessage: ((this: T, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) */
    onmessageerror: ((this: T, ev: MessageEvent) => any) | null;
    addEventListener<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MessagePortEventMap extends MessageEventTargetEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort)
 */
interface MessagePort extends EventTarget, MessageEventTarget<MessagePort> {
    /**
     * Disconnects the port, so that it is no longer active.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/close)
     */
    close(): void;
    /**
     * Posts a message through the channel. Objects listed in transfer are transferred, not just cloned, meaning that they are no longer usable on the sending side.
     *
     * Throws a "DataCloneError" DOMException if transfer contains duplicate objects or port, or if message could not be cloned.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * Begins dispatching messages received on the port.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/MessagePort/start)
     */
    start(): void;
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager)
 */
interface NavigationPreloadManager {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/disable) */
    disable(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/enable) */
    enable(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/getState) */
    getState(): Promise<NavigationPreloadState>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NavigationPreloadManager/setHeaderValue) */
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

/** Available only in secure contexts. */
interface NavigatorBadge {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/clearAppBadge) */
    clearAppBadge(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/setAppBadge) */
    setAppBadge(contents?: number): Promise<void>;
}

interface NavigatorConcurrentHardware {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/hardwareConcurrency) */
    readonly hardwareConcurrency: number;
}

interface NavigatorID {
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appCodeName)
     */
    readonly appCodeName: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appName)
     */
    readonly appName: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/appVersion)
     */
    readonly appVersion: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/platform)
     */
    readonly platform: string;
    /**
     * @deprecated
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/product)
     */
    readonly product: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/userAgent) */
    readonly userAgent: string;
}

interface NavigatorLanguage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/language) */
    readonly language: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/languages) */
    readonly languages: ReadonlyArray<string>;
}

/** Available only in secure contexts. */
interface NavigatorLocks {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/locks) */
    readonly locks: LockManager;
}

interface NavigatorOnLine {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/onLine) */
    readonly onLine: boolean;
}

/** Available only in secure contexts. */
interface NavigatorStorage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Navigator/storage) */
    readonly storage: StorageManager;
}

interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}

/**
 * This Notifications API interface is used to configure and display desktop notifications to the user.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification)
 */
interface Notification extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/badge) */
    readonly badge: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/body) */
    readonly body: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/data) */
    readonly data: any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/dir) */
    readonly dir: NotificationDirection;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/icon) */
    readonly icon: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/lang) */
    readonly lang: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/click_event) */
    onclick: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/close_event) */
    onclose: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/error_event) */
    onerror: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/show_event) */
    onshow: ((this: Notification, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/requireInteraction) */
    readonly requireInteraction: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/silent) */
    readonly silent: boolean | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/tag) */
    readonly tag: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/title) */
    readonly title: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/close) */
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Notification/permission_static) */
    readonly permission: NotificationPermission;
};

/**
 * The parameter passed into the onnotificationclick handler, the NotificationEvent interface represents a notification click event that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent)
 */
interface NotificationEvent extends ExtendableEvent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/action) */
    readonly action: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/NotificationEvent/notification) */
    readonly notification: Notification;
}

declare var NotificationEvent: {
    prototype: NotificationEvent;
    new(type: string, eventInitDict: NotificationEventInit): NotificationEvent;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed) */
interface OES_draw_buffers_indexed {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendEquationSeparateiOES) */
    blendEquationSeparateiOES(buf: GLuint, modeRGB: GLenum, modeAlpha: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendEquationiOES) */
    blendEquationiOES(buf: GLuint, mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendFuncSeparateiOES) */
    blendFuncSeparateiOES(buf: GLuint, srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/blendFunciOES) */
    blendFunciOES(buf: GLuint, src: GLenum, dst: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/colorMaskiOES) */
    colorMaskiOES(buf: GLuint, r: GLboolean, g: GLboolean, b: GLboolean, a: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/disableiOES) */
    disableiOES(target: GLenum, index: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_draw_buffers_indexed/enableiOES) */
    enableiOES(target: GLenum, index: GLuint): void;
}

/**
 * The OES_element_index_uint extension is part of the WebGL API and adds support for gl.UNSIGNED_INT types to WebGLRenderingContext.drawElements().
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_element_index_uint)
 */
interface OES_element_index_uint {
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_fbo_render_mipmap) */
interface OES_fbo_render_mipmap {
}

/**
 * The OES_standard_derivatives extension is part of the WebGL API and adds the GLSL derivative functions dFdx, dFdy, and fwidth.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_standard_derivatives)
 */
interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 0x8B8B;
}

/**
 * The OES_texture_float extension is part of the WebGL API and exposes floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_float)
 */
interface OES_texture_float {
}

/**
 * The OES_texture_float_linear extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_float_linear)
 */
interface OES_texture_float_linear {
}

/**
 * The OES_texture_half_float extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float)
 */
interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: 0x8D61;
}

/**
 * The OES_texture_half_float_linear extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_texture_half_float_linear)
 */
interface OES_texture_half_float_linear {
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object) */
interface OES_vertex_array_object {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES) */
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/createVertexArrayOES) */
    createVertexArrayOES(): WebGLVertexArrayObjectOES;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/deleteVertexArrayOES) */
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OES_vertex_array_object/isVertexArrayOES) */
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    readonly VERTEX_ARRAY_BINDING_OES: 0x85B5;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2) */
interface OVR_multiview2 {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR) */
    framebufferTextureMultiviewOVR(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, baseViewIndex: GLint, numViews: GLsizei): void;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: 0x9630;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: 0x9632;
    readonly MAX_VIEWS_OVR: 0x9631;
    readonly FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: 0x9633;
}

interface OffscreenCanvasEventMap {
    "contextlost": Event;
    "contextrestored": Event;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas) */
interface OffscreenCanvas extends EventTarget {
    /**
     * These attributes return the dimensions of the OffscreenCanvas object's bitmap.
     *
     * They can be set, to replace the bitmap with a new, transparent black bitmap of the specified dimensions (effectively resizing it).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/height)
     */
    height: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextlost_event) */
    oncontextlost: ((this: OffscreenCanvas, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextrestored_event) */
    oncontextrestored: ((this: OffscreenCanvas, ev: Event) => any) | null;
    /**
     * These attributes return the dimensions of the OffscreenCanvas object's bitmap.
     *
     * They can be set, to replace the bitmap with a new, transparent black bitmap of the specified dimensions (effectively resizing it).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/width)
     */
    width: number;
    /**
     * Returns a promise that will fulfill with a new Blob object representing a file containing the image in the OffscreenCanvas object.
     *
     * The argument, if provided, is a dictionary that controls the encoding options of the image file to be created. The type field specifies the file format and has a default value of "image/png"; that type is also used if the requested type isn't supported. If the image format supports variable quality (such as "image/jpeg"), then the quality field is a number in the range 0.0 to 1.0 inclusive indicating the desired quality level for the resulting image.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/convertToBlob)
     */
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>;
    /**
     * Returns an object that exposes an API for drawing on the OffscreenCanvas object. contextId specifies the desired API: "2d", "bitmaprenderer", "webgl", or "webgl2". options is handled by that API.
     *
     * This specification defines the "2d" context below, which is similar but distinct from the "2d" context that is created from a canvas element. The WebGL specifications define the "webgl" and "webgl2" contexts. [WEBGL]
     *
     * Returns null if the canvas has already been initialized with another context type (e.g., trying to get a "2d" context after getting a "webgl" context).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/getContext)
     */
    getContext(contextId: "2d", options?: any): OffscreenCanvasRenderingContext2D | null;
    getContext(contextId: "bitmaprenderer", options?: any): ImageBitmapRenderingContext | null;
    getContext(contextId: "webgl", options?: any): WebGLRenderingContext | null;
    getContext(contextId: "webgl2", options?: any): WebGL2RenderingContext | null;
    getContext(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null;
    /**
     * Returns a newly created ImageBitmap object with the image in the OffscreenCanvas object. The image in the OffscreenCanvas object is replaced with a new blank image.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
     */
    transferToImageBitmap(): ImageBitmap;
    addEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var OffscreenCanvas: {
    prototype: OffscreenCanvas;
    new(width: number, height: number): OffscreenCanvas;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/OffscreenCanvasRenderingContext2D) */
interface OffscreenCanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/canvas) */
    readonly canvas: OffscreenCanvas;
}

declare var OffscreenCanvasRenderingContext2D: {
    prototype: OffscreenCanvasRenderingContext2D;
    new(): OffscreenCanvasRenderingContext2D;
};

/**
 * This Canvas 2D API interface is used to declare a path that can then be used on a CanvasRenderingContext2D object. The path methods of the CanvasRenderingContext2D interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D)
 */
interface Path2D extends CanvasPath {
    /**
     * Adds to the path the path given by the argument.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Path2D/addPath)
     */
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new(path?: Path2D | string): Path2D;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

/**
 * Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance)
 */
interface Performance extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/resourcetimingbufferfull_event) */
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/timeOrigin) */
    readonly timeOrigin: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMarks) */
    clearMarks(markName?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearMeasures) */
    clearMeasures(measureName?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/clearResourceTimings) */
    clearResourceTimings(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntries) */
    getEntries(): PerformanceEntryList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName) */
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByType) */
    getEntriesByType(type: string): PerformanceEntryList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/mark) */
    mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/measure) */
    measure(measureName: string, startOrMeasureOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/now) */
    now(): DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/setResourceTimingBufferSize) */
    setResourceTimingBufferSize(maxSize: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/toJSON) */
    toJSON(): any;
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

/**
 * Encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)
 */
interface PerformanceEntry {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/duration) */
    readonly duration: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/entryType) */
    readonly entryType: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/startTime) */
    readonly startTime: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceEntry/toJSON) */
    toJSON(): any;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

/**
 * PerformanceMark\xA0is an abstract interface for PerformanceEntry objects with an entryType of "mark". Entries of this type are created by calling performance.mark() to add a named DOMHighResTimeStamp (the mark) to the browser's performance timeline.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMark)
 */
interface PerformanceMark extends PerformanceEntry {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMark/detail) */
    readonly detail: any;
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
};

/**
 * PerformanceMeasure is an abstract interface for PerformanceEntry objects with an entryType of "measure". Entries of this type are created by calling performance.measure() to add a named DOMHighResTimeStamp (the measure) between two marks to the browser's performance timeline.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure)
 */
interface PerformanceMeasure extends PerformanceEntry {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceMeasure/detail) */
    readonly detail: any;
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver) */
interface PerformanceObserver {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/disconnect) */
    disconnect(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/observe) */
    observe(options?: PerformanceObserverInit): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/takeRecords) */
    takeRecords(): PerformanceEntryList;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) */
    readonly supportedEntryTypes: ReadonlyArray<string>;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList) */
interface PerformanceObserverEntryList {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntries) */
    getEntries(): PerformanceEntryList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntriesByName) */
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) */
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

/**
 * Enables retrieval and analysis of detailed network timing data regarding the loading of an application's resources. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource, such as an XMLHttpRequest, <SVG>, image, or script.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming)
 */
interface PerformanceResourceTiming extends PerformanceEntry {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectEnd) */
    readonly connectEnd: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectStart) */
    readonly connectStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/decodedBodySize) */
    readonly decodedBodySize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) */
    readonly domainLookupEnd: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/domainLookupStart) */
    readonly domainLookupStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/encodedBodySize) */
    readonly encodedBodySize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/fetchStart) */
    readonly fetchStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/initiatorType) */
    readonly initiatorType: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) */
    readonly nextHopProtocol: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/redirectEnd) */
    readonly redirectEnd: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/redirectStart) */
    readonly redirectStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/requestStart) */
    readonly requestStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseEnd) */
    readonly responseEnd: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseStart) */
    readonly responseStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/responseStatus) */
    readonly responseStatus: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) */
    readonly secureConnectionStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/serverTiming) */
    readonly serverTiming: ReadonlyArray<PerformanceServerTiming>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/transferSize) */
    readonly transferSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/workerStart) */
    readonly workerStart: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/toJSON) */
    toJSON(): any;
}

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming) */
interface PerformanceServerTiming {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/description) */
    readonly description: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/duration) */
    readonly duration: DOMHighResTimeStamp;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/toJSON) */
    toJSON(): any;
}

declare var PerformanceServerTiming: {
    prototype: PerformanceServerTiming;
    new(): PerformanceServerTiming;
};

interface PermissionStatusEventMap {
    "change": Event;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus) */
interface PermissionStatus extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/change_event) */
    onchange: ((this: PermissionStatus, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PermissionStatus/state) */
    readonly state: PermissionState;
    addEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var PermissionStatus: {
    prototype: PermissionStatus;
    new(): PermissionStatus;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Permissions) */
interface Permissions {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Permissions/query) */
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}

declare var Permissions: {
    prototype: Permissions;
    new(): Permissions;
};

/**
 * Events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent)
 */
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/lengthComputable) */
    readonly lengthComputable: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/loaded) */
    readonly loaded: number;
    readonly target: T | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ProgressEvent/total) */
    readonly total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent) */
interface PromiseRejectionEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/promise) */
    readonly promise: Promise<any>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/reason) */
    readonly reason: any;
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

/**
 * This Push API interface represents a push message that has been received. This event is sent to the global scope of a ServiceWorker. It contains the information sent from an application server to a PushSubscription.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent)
 */
interface PushEvent extends ExtendableEvent {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushEvent/data) */
    readonly data: PushMessageData | null;
}

declare var PushEvent: {
    prototype: PushEvent;
    new(type: string, eventInitDict?: PushEventInit): PushEvent;
};

/**
 * This Push API interface provides a way to receive notifications from third-party servers as well as request URLs for push notifications.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager)
 */
interface PushManager {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/getSubscription) */
    getSubscription(): Promise<PushSubscription | null>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/permissionState) */
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PermissionState>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/subscribe) */
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushManager/supportedContentEncodings_static) */
    readonly supportedContentEncodings: ReadonlyArray<string>;
};

/**
 * This Push API interface provides methods which let you retrieve the push data sent by a server in various formats.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData)
 */
interface PushMessageData {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/arrayBuffer) */
    arrayBuffer(): ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/blob) */
    blob(): Blob;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/bytes) */
    bytes(): Uint8Array;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/json) */
    json(): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushMessageData/text) */
    text(): string;
}

declare var PushMessageData: {
    prototype: PushMessageData;
    new(): PushMessageData;
};

/**
 * This Push API interface provides a subcription's URL endpoint and allows unsubscription from a push service.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription)
 */
interface PushSubscription {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/endpoint) */
    readonly endpoint: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/expirationTime) */
    readonly expirationTime: EpochTimeStamp | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/options) */
    readonly options: PushSubscriptionOptions;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/getKey) */
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/toJSON) */
    toJSON(): PushSubscriptionJSON;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscription/unsubscribe) */
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions)
 */
interface PushSubscriptionOptions {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions/applicationServerKey) */
    readonly applicationServerKey: ArrayBuffer | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PushSubscriptionOptions/userVisibleOnly) */
    readonly userVisibleOnly: boolean;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "closing": Event;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel) */
interface RTCDataChannel extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/binaryType) */
    binaryType: BinaryType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmount) */
    readonly bufferedAmount: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) */
    bufferedAmountLowThreshold: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/id) */
    readonly id: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/label) */
    readonly label: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxPacketLifeTime) */
    readonly maxPacketLifeTime: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/maxRetransmits) */
    readonly maxRetransmits: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/negotiated) */
    readonly negotiated: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/bufferedamountlow_event) */
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close_event) */
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/closing_event) */
    onclosing: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/error_event) */
    onerror: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/message_event) */
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/open_event) */
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/ordered) */
    readonly ordered: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/protocol) */
    readonly protocol: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/readyState) */
    readonly readyState: RTCDataChannelState;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/send) */
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new(): RTCDataChannel;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame) */
interface RTCEncodedAudioFrame {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/data) */
    data: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/timestamp) */
    readonly timestamp: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame/getMetadata) */
    getMetadata(): RTCEncodedAudioFrameMetadata;
}

declare var RTCEncodedAudioFrame: {
    prototype: RTCEncodedAudioFrame;
    new(): RTCEncodedAudioFrame;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame) */
interface RTCEncodedVideoFrame {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/data) */
    data: ArrayBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/timestamp) */
    readonly timestamp: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/type) */
    readonly type: RTCEncodedVideoFrameType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/getMetadata) */
    getMetadata(): RTCEncodedVideoFrameMetadata;
}

declare var RTCEncodedVideoFrame: {
    prototype: RTCEncodedVideoFrame;
    new(): RTCEncodedVideoFrame;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer) */
interface RTCRtpScriptTransformer extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/options) */
    readonly options: any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/readable) */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/writable) */
    readonly writable: WritableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame) */
    generateKeyFrame(rid?: string): Promise<number>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) */
    sendKeyFrameRequest(): Promise<void>;
}

declare var RTCRtpScriptTransformer: {
    prototype: RTCRtpScriptTransformer;
    new(): RTCRtpScriptTransformer;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCTransformEvent) */
interface RTCTransformEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/RTCTransformEvent/transformer) */
    readonly transformer: RTCRtpScriptTransformer;
}

declare var RTCTransformEvent: {
    prototype: RTCTransformEvent;
    new(): RTCTransformEvent;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController) */
interface ReadableByteStreamController {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/byobRequest) */
    readonly byobRequest: ReadableStreamBYOBRequest | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/desiredSize) */
    readonly desiredSize: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/enqueue) */
    enqueue(chunk: ArrayBufferView): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/error) */
    error(e?: any): void;
}

declare var ReadableByteStreamController: {
    prototype: ReadableByteStreamController;
    new(): ReadableByteStreamController;
};

/**
 * This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream)
 */
interface ReadableStream<R = any> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/locked) */
    readonly locked: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/cancel) */
    cancel(reason?: any): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/getReader) */
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeThrough) */
    pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeTo) */
    pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/tee) */
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number }): ReadableStream<Uint8Array>;
    new<R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader) */
interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read) */
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock) */
    releaseLock(): void;
}

declare var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new(stream: ReadableStream<Uint8Array>): ReadableStreamBYOBReader;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest) */
interface ReadableStreamBYOBRequest {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view) */
    readonly view: ArrayBufferView | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respond) */
    respond(bytesWritten: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) */
    respondWithNewView(view: ArrayBufferView): void;
}

declare var ReadableStreamBYOBRequest: {
    prototype: ReadableStreamBYOBRequest;
    new(): ReadableStreamBYOBRequest;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController) */
interface ReadableStreamDefaultController<R = any> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/desiredSize) */
    readonly desiredSize: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/enqueue) */
    enqueue(chunk?: R): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/error) */
    error(e?: any): void;
}

declare var ReadableStreamDefaultController: {
    prototype: ReadableStreamDefaultController;
    new(): ReadableStreamDefaultController;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader) */
interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/read) */
    read(): Promise<ReadableStreamReadResult<R>>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/releaseLock) */
    releaseLock(): void;
}

declare var ReadableStreamDefaultReader: {
    prototype: ReadableStreamDefaultReader;
    new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
};

interface ReadableStreamGenericReader {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/closed) */
    readonly closed: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/cancel) */
    cancel(reason?: any): Promise<void>;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report) */
interface Report {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/body) */
    readonly body: ReportBody | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/type) */
    readonly type: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Report/url) */
    readonly url: string;
    toJSON(): any;
}

declare var Report: {
    prototype: Report;
    new(): Report;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportBody) */
interface ReportBody {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportBody/toJSON) */
    toJSON(): any;
}

declare var ReportBody: {
    prototype: ReportBody;
    new(): ReportBody;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver) */
interface ReportingObserver {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/disconnect) */
    disconnect(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/observe) */
    observe(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReportingObserver/takeRecords) */
    takeRecords(): ReportList;
}

declare var ReportingObserver: {
    prototype: ReportingObserver;
    new(callback: ReportingObserverCallback, options?: ReportingObserverOptions): ReportingObserver;
};

/**
 * This Fetch API interface represents a resource request.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request)
 */
interface Request extends Body {
    /**
     * Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/cache)
     */
    readonly cache: RequestCache;
    /**
     * Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/credentials)
     */
    readonly credentials: RequestCredentials;
    /**
     * Returns the kind of resource requested by request, e.g., "document" or "script".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/destination)
     */
    readonly destination: RequestDestination;
    /**
     * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/headers)
     */
    readonly headers: Headers;
    /**
     * Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/integrity)
     */
    readonly integrity: string;
    /**
     * Returns a boolean indicating whether or not request can outlive the global in which it was created.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/keepalive)
     */
    readonly keepalive: boolean;
    /**
     * Returns request's HTTP method, which is "GET" by default.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/method)
     */
    readonly method: string;
    /**
     * Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/mode)
     */
    readonly mode: RequestMode;
    /**
     * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/redirect)
     */
    readonly redirect: RequestRedirect;
    /**
     * Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the \`Referer\` header of the request being made.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrer)
     */
    readonly referrer: string;
    /**
     * Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/referrerPolicy)
     */
    readonly referrerPolicy: ReferrerPolicy;
    /**
     * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/signal)
     */
    readonly signal: AbortSignal;
    /**
     * Returns the URL of request as a string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/url)
     */
    readonly url: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/clone) */
    clone(): Request;
}

declare var Request: {
    prototype: Request;
    new(input: RequestInfo | URL, init?: RequestInit): Request;
};

/**
 * This Fetch API interface represents the response to a request.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response)
 */
interface Response extends Body {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers) */
    readonly headers: Headers;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok) */
    readonly ok: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected) */
    readonly redirected: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status) */
    readonly status: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText) */
    readonly statusText: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/type) */
    readonly type: ResponseType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url) */
    readonly url: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone) */
    clone(): Response;
}

declare var Response: {
    prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/error_static) */
    error(): Response;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static) */
    json(data: any, init?: ResponseInit): Response;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static) */
    redirect(url: string | URL, status?: number): Response;
};

/**
 * Inherits from Event, and represents the event object of an event sent on a document or worker when its content security policy is violated.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)
 */
interface SecurityPolicyViolationEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) */
    readonly blockedURI: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) */
    readonly columnNumber: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/disposition) */
    readonly disposition: SecurityPolicyViolationEventDisposition;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/documentURI) */
    readonly documentURI: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) */
    readonly effectiveDirective: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) */
    readonly lineNumber: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) */
    readonly originalPolicy: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/referrer) */
    readonly referrer: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sample) */
    readonly sample: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) */
    readonly sourceFile: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/statusCode) */
    readonly statusCode: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) */
    readonly violatedDirective: string;
}

declare var SecurityPolicyViolationEvent: {
    prototype: SecurityPolicyViolationEvent;
    new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

/**
 * This ServiceWorker API interface provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker)
 */
interface ServiceWorker extends EventTarget, AbstractWorker {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/statechange_event) */
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/scriptURL) */
    readonly scriptURL: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/state) */
    readonly state: ServiceWorkerState;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorker/postMessage) */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

/**
 * The\xA0ServiceWorkerContainer\xA0interface of the\xA0ServiceWorker API\xA0provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer)
 */
interface ServiceWorkerContainer extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controller) */
    readonly controller: ServiceWorker | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controllerchange_event) */
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/message_event) */
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/messageerror_event) */
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/ready) */
    readonly ready: Promise<ServiceWorkerRegistration>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistration) */
    getRegistration(clientURL?: string | URL): Promise<ServiceWorkerRegistration | undefined>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistrations) */
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/register) */
    register(scriptURL: string | URL, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/startMessages) */
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": ExtendableEvent;
    "message": ExtendableMessageEvent;
    "messageerror": MessageEvent;
    "notificationclick": NotificationEvent;
    "notificationclose": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchange": Event;
}

/**
 * This ServiceWorker API interface represents the global execution context of a service worker.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope)
 */
interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/clients) */
    readonly clients: Clients;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/activate_event) */
    onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) */
    onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/install_event) */
    oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/message_event) */
    onmessage: ((this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) */
    onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) */
    onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) */
    onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/push_event) */
    onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event) */
    onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/registration) */
    readonly registration: ServiceWorkerRegistration;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker) */
    readonly serviceWorker: ServiceWorker;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting) */
    skipWaiting(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerGlobalScope: {
    prototype: ServiceWorkerGlobalScope;
    new(): ServiceWorkerGlobalScope;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

/**
 * This ServiceWorker API interface represents the service worker registration. You register a service worker to control one or more pages that share the same origin.
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration)
 */
interface ServiceWorkerRegistration extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/active) */
    readonly active: ServiceWorker | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/installing) */
    readonly installing: ServiceWorker | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/navigationPreload) */
    readonly navigationPreload: NavigationPreloadManager;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updatefound_event) */
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/pushManager) */
    readonly pushManager: PushManager;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/scope) */
    readonly scope: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updateViaCache) */
    readonly updateViaCache: ServiceWorkerUpdateViaCache;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/waiting) */
    readonly waiting: ServiceWorker | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/getNotifications) */
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification) */
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/unregister) */
    unregister(): Promise<boolean>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/update) */
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "connect": MessageEvent;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope) */
interface SharedWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * Returns sharedWorkerGlobal's name, i.e. the value given to the SharedWorker constructor. Multiple SharedWorker objects can correspond to the same shared worker (and SharedWorkerGlobalScope), by reusing the same name.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/name)
     */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/connect_event) */
    onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null;
    /**
     * Aborts sharedWorkerGlobal.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/close)
     */
    close(): void;
    addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SharedWorkerGlobalScope: {
    prototype: SharedWorkerGlobalScope;
    new(): SharedWorkerGlobalScope;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager)
 */
interface StorageManager {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/estimate) */
    estimate(): Promise<StorageEstimate>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/getDirectory) */
    getDirectory(): Promise<FileSystemDirectoryHandle>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StorageManager/persisted) */
    persisted(): Promise<boolean>;
}

declare var StorageManager: {
    prototype: StorageManager;
    new(): StorageManager;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly) */
interface StylePropertyMapReadOnly {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/size) */
    readonly size: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/get) */
    get(property: string): undefined | CSSStyleValue;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/getAll) */
    getAll(property: string): CSSStyleValue[];
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/StylePropertyMapReadOnly/has) */
    has(property: string): boolean;
    forEach(callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void, thisArg?: any): void;
}

declare var StylePropertyMapReadOnly: {
    prototype: StylePropertyMapReadOnly;
    new(): StylePropertyMapReadOnly;
};

/**
 * This Web Crypto API interface provides a number of low-level cryptographic functions. It is accessed via the Crypto.subtle properties available in a window context (via Window.crypto).
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto)
 */
interface SubtleCrypto {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/decrypt) */
    decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveBits) */
    deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length?: number | null): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey) */
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest) */
    digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/encrypt) */
    encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/exportKey) */
    exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
    exportKey(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey) */
    generateKey(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey) */
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/sign) */
    sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/unwrapKey) */
    unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/verify) */
    verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/wrapKey) */
    wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

/**
 * A decoder for a specific method, that is a specific character encoding, like utf-8, iso-8859-2, koi8, cp1261, gbk, etc.\xA0A decoder takes a stream of bytes as input and emits a stream of code points. For a more scalable, non-native library, see StringView \u2013 a C-like representation of strings based on typed arrays.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder)
 */
interface TextDecoder extends TextDecoderCommon {
    /**
     * Returns the result of running encoding's decoder. The method can be invoked zero or more times with options's stream set to true, and then once without options's stream (or set to false), to process a fragmented input. If the invocation without options's stream (or set to false) has no input, it's clearest to omit both arguments.
     *
     * \`\`\`*var string="",decoder=new TextDecoder(encoding),buffer;*while(buffer=next_chunk()){*string+=decoder.decode(buffer,{stream:true});*}*string+=decoder.decode();*\`\`\`
     *
     * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/decode)
     */
    decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

declare var TextDecoder: {
    prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};

interface TextDecoderCommon {
    /**
     * Returns encoding's name, lowercased.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/encoding)
     */
    readonly encoding: string;
    /**
     * Returns true if error mode is "fatal", otherwise false.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/fatal)
     */
    readonly fatal: boolean;
    /**
     * Returns the value of ignore BOM.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/ignoreBOM)
     */
    readonly ignoreBOM: boolean;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoderStream) */
interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
    readonly readable: ReadableStream<string>;
    readonly writable: WritableStream<BufferSource>;
}

declare var TextDecoderStream: {
    prototype: TextDecoderStream;
    new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
};

/**
 * TextEncoder takes a stream of code points as input and emits a stream of bytes. For a more scalable, non-native library, see StringView \u2013 a C-like representation of strings based on typed arrays.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder)
 */
interface TextEncoder extends TextEncoderCommon {
    /**
     * Returns the result of running UTF-8's encoder.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encode)
     */
    encode(input?: string): Uint8Array;
    /**
     * Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as an object wherein read is the number of converted code units of source and written is the number of bytes modified in destination.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto)
     */
    encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
    prototype: TextEncoder;
    new(): TextEncoder;
};

interface TextEncoderCommon {
    /**
     * Returns "utf-8".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encoding)
     */
    readonly encoding: string;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoderStream) */
interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<string>;
}

declare var TextEncoderStream: {
    prototype: TextEncoderStream;
    new(): TextEncoderStream;
};

/**
 * The dimensions of a piece of text in the canvas, as created by the CanvasRenderingContext2D.measureText() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics)
 */
interface TextMetrics {
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxAscent)
     */
    readonly actualBoundingBoxAscent: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxDescent)
     */
    readonly actualBoundingBoxDescent: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxLeft)
     */
    readonly actualBoundingBoxLeft: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxRight)
     */
    readonly actualBoundingBoxRight: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/alphabeticBaseline)
     */
    readonly alphabeticBaseline: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightAscent)
     */
    readonly emHeightAscent: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/emHeightDescent)
     */
    readonly emHeightDescent: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxAscent)
     */
    readonly fontBoundingBoxAscent: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxDescent)
     */
    readonly fontBoundingBoxDescent: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/hangingBaseline)
     */
    readonly hangingBaseline: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/ideographicBaseline)
     */
    readonly ideographicBaseline: number;
    /**
     * Returns the measurement described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextMetrics/width)
     */
    readonly width: number;
}

declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream) */
interface TransformStream<I = any, O = any> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable) */
    readonly readable: ReadableStream<O>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/writable) */
    readonly writable: WritableStream<I>;
}

declare var TransformStream: {
    prototype: TransformStream;
    new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController) */
interface TransformStreamDefaultController<O = any> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/desiredSize) */
    readonly desiredSize: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/enqueue) */
    enqueue(chunk?: O): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error) */
    error(reason?: any): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/terminate) */
    terminate(): void;
}

declare var TransformStreamDefaultController: {
    prototype: TransformStreamDefaultController;
    new(): TransformStreamDefaultController;
};

/**
 * The URL\xA0interface represents an object providing static methods used for creating object URLs.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL)
 */
interface URL {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash) */
    hash: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host) */
    host: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname) */
    hostname: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href) */
    href: string;
    toString(): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin) */
    readonly origin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password) */
    password: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname) */
    pathname: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port) */
    port: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol) */
    protocol: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search) */
    search: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams) */
    readonly searchParams: URLSearchParams;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username) */
    username: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON) */
    toJSON(): string;
}

declare var URL: {
    prototype: URL;
    new(url: string | URL, base?: string | URL): URL;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/canParse_static) */
    canParse(url: string | URL, base?: string | URL): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/createObjectURL_static) */
    createObjectURL(obj: Blob): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/parse_static) */
    parse(url: string | URL, base?: string | URL): URL | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/revokeObjectURL_static) */
    revokeObjectURL(url: string): void;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams) */
interface URLSearchParams {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size) */
    readonly size: number;
    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/append)
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/delete)
     */
    delete(name: string, value?: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/get)
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/getAll)
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/has)
     */
    has(name: string, value?: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
     */
    set(name: string, value: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URLSearchParams/sort) */
    sort(): void;
    /** Returns a string containing a query string suitable for use in a URL. Does not include the question mark. */
    toString(): string;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace) */
interface VideoColorSpace {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/fullRange) */
    readonly fullRange: boolean | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/matrix) */
    readonly matrix: VideoMatrixCoefficients | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/primaries) */
    readonly primaries: VideoColorPrimaries | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/transfer) */
    readonly transfer: VideoTransferCharacteristics | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoColorSpace/toJSON) */
    toJSON(): VideoColorSpaceInit;
}

declare var VideoColorSpace: {
    prototype: VideoColorSpace;
    new(init?: VideoColorSpaceInit): VideoColorSpace;
};

interface VideoDecoderEventMap {
    "dequeue": Event;
}

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder)
 */
interface VideoDecoder extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/decodeQueueSize) */
    readonly decodeQueueSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/dequeue_event) */
    ondequeue: ((this: VideoDecoder, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/state) */
    readonly state: CodecState;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/configure) */
    configure(config: VideoDecoderConfig): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/decode) */
    decode(chunk: EncodedVideoChunk): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/flush) */
    flush(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/reset) */
    reset(): void;
    addEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VideoDecoder: {
    prototype: VideoDecoder;
    new(init: VideoDecoderInit): VideoDecoder;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoDecoder/isConfigSupported_static) */
    isConfigSupported(config: VideoDecoderConfig): Promise<VideoDecoderSupport>;
};

interface VideoEncoderEventMap {
    "dequeue": Event;
}

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder)
 */
interface VideoEncoder extends EventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/encodeQueueSize) */
    readonly encodeQueueSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/dequeue_event) */
    ondequeue: ((this: VideoEncoder, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/state) */
    readonly state: CodecState;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/configure) */
    configure(config: VideoEncoderConfig): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/encode) */
    encode(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/flush) */
    flush(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/reset) */
    reset(): void;
    addEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VideoEncoder: {
    prototype: VideoEncoder;
    new(init: VideoEncoderInit): VideoEncoder;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoEncoder/isConfigSupported_static) */
    isConfigSupported(config: VideoEncoderConfig): Promise<VideoEncoderSupport>;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame) */
interface VideoFrame {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedHeight) */
    readonly codedHeight: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedRect) */
    readonly codedRect: DOMRectReadOnly | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedWidth) */
    readonly codedWidth: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/colorSpace) */
    readonly colorSpace: VideoColorSpace;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayHeight) */
    readonly displayHeight: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/displayWidth) */
    readonly displayWidth: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/duration) */
    readonly duration: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/format) */
    readonly format: VideoPixelFormat | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/timestamp) */
    readonly timestamp: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/visibleRect) */
    readonly visibleRect: DOMRectReadOnly | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/allocationSize) */
    allocationSize(options?: VideoFrameCopyToOptions): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/clone) */
    clone(): VideoFrame;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/close) */
    close(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/VideoFrame/copyTo) */
    copyTo(destination: AllowSharedBufferSource, options?: VideoFrameCopyToOptions): Promise<PlaneLayout[]>;
}

declare var VideoFrame: {
    prototype: VideoFrame;
    new(image: CanvasImageSource, init?: VideoFrameInit): VideoFrame;
    new(data: AllowSharedBufferSource, init: VideoFrameBufferInit): VideoFrame;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_color_buffer_float) */
interface WEBGL_color_buffer_float {
    readonly RGBA32F_EXT: 0x8814;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 0x8211;
    readonly UNSIGNED_NORMALIZED_EXT: 0x8C17;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc) */
interface WEBGL_compressed_texture_astc {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles) */
    getSupportedProfiles(): string[];
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0;
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1;
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2;
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3;
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4;
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5;
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6;
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7;
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8;
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9;
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA;
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB;
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC;
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC;
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc) */
interface WEBGL_compressed_texture_etc {
    readonly COMPRESSED_R11_EAC: 0x9270;
    readonly COMPRESSED_SIGNED_R11_EAC: 0x9271;
    readonly COMPRESSED_RG11_EAC: 0x9272;
    readonly COMPRESSED_SIGNED_RG11_EAC: 0x9273;
    readonly COMPRESSED_RGB8_ETC2: 0x9274;
    readonly COMPRESSED_SRGB8_ETC2: 0x9275;
    readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276;
    readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277;
    readonly COMPRESSED_RGBA8_ETC2_EAC: 0x9278;
    readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_etc1) */
interface WEBGL_compressed_texture_etc1 {
    readonly COMPRESSED_RGB_ETC1_WEBGL: 0x8D64;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_pvrtc) */
interface WEBGL_compressed_texture_pvrtc {
    readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00;
    readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01;
    readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02;
    readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03;
}

/**
 * The WEBGL_compressed_texture_s3tc extension is part of the WebGL API and exposes four S3TC compressed texture formats.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc)
 */
interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0;
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1;
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2;
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb) */
interface WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E;
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F;
}

/**
 * The WEBGL_debug_renderer_info extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info)
 */
interface WEBGL_debug_renderer_info {
    readonly UNMASKED_VENDOR_WEBGL: 0x9245;
    readonly UNMASKED_RENDERER_WEBGL: 0x9246;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders) */
interface WEBGL_debug_shaders {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource) */
    getTranslatedShaderSource(shader: WebGLShader): string;
}

/**
 * The WEBGL_depth_texture extension is part of the WebGL API and defines 2D depth and depth-stencil textures.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_depth_texture)
 */
interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: 0x84FA;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers) */
interface WEBGL_draw_buffers {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL) */
    drawBuffersWEBGL(buffers: GLenum[]): void;
    readonly COLOR_ATTACHMENT0_WEBGL: 0x8CE0;
    readonly COLOR_ATTACHMENT1_WEBGL: 0x8CE1;
    readonly COLOR_ATTACHMENT2_WEBGL: 0x8CE2;
    readonly COLOR_ATTACHMENT3_WEBGL: 0x8CE3;
    readonly COLOR_ATTACHMENT4_WEBGL: 0x8CE4;
    readonly COLOR_ATTACHMENT5_WEBGL: 0x8CE5;
    readonly COLOR_ATTACHMENT6_WEBGL: 0x8CE6;
    readonly COLOR_ATTACHMENT7_WEBGL: 0x8CE7;
    readonly COLOR_ATTACHMENT8_WEBGL: 0x8CE8;
    readonly COLOR_ATTACHMENT9_WEBGL: 0x8CE9;
    readonly COLOR_ATTACHMENT10_WEBGL: 0x8CEA;
    readonly COLOR_ATTACHMENT11_WEBGL: 0x8CEB;
    readonly COLOR_ATTACHMENT12_WEBGL: 0x8CEC;
    readonly COLOR_ATTACHMENT13_WEBGL: 0x8CED;
    readonly COLOR_ATTACHMENT14_WEBGL: 0x8CEE;
    readonly COLOR_ATTACHMENT15_WEBGL: 0x8CEF;
    readonly DRAW_BUFFER0_WEBGL: 0x8825;
    readonly DRAW_BUFFER1_WEBGL: 0x8826;
    readonly DRAW_BUFFER2_WEBGL: 0x8827;
    readonly DRAW_BUFFER3_WEBGL: 0x8828;
    readonly DRAW_BUFFER4_WEBGL: 0x8829;
    readonly DRAW_BUFFER5_WEBGL: 0x882A;
    readonly DRAW_BUFFER6_WEBGL: 0x882B;
    readonly DRAW_BUFFER7_WEBGL: 0x882C;
    readonly DRAW_BUFFER8_WEBGL: 0x882D;
    readonly DRAW_BUFFER9_WEBGL: 0x882E;
    readonly DRAW_BUFFER10_WEBGL: 0x882F;
    readonly DRAW_BUFFER11_WEBGL: 0x8830;
    readonly DRAW_BUFFER12_WEBGL: 0x8831;
    readonly DRAW_BUFFER13_WEBGL: 0x8832;
    readonly DRAW_BUFFER14_WEBGL: 0x8833;
    readonly DRAW_BUFFER15_WEBGL: 0x8834;
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: 0x8CDF;
    readonly MAX_DRAW_BUFFERS_WEBGL: 0x8824;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context) */
interface WEBGL_lose_context {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context/loseContext) */
    loseContext(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_lose_context/restoreContext) */
    restoreContext(): void;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw) */
interface WEBGL_multi_draw {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysInstancedWEBGL) */
    multiDrawArraysInstancedWEBGL(mode: GLenum, firstsList: Int32Array | GLint[], firstsOffset: number, countsList: Int32Array | GLsizei[], countsOffset: number, instanceCountsList: Int32Array | GLsizei[], instanceCountsOffset: number, drawcount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawArraysWEBGL) */
    multiDrawArraysWEBGL(mode: GLenum, firstsList: Int32Array | GLint[], firstsOffset: number, countsList: Int32Array | GLsizei[], countsOffset: number, drawcount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsInstancedWEBGL) */
    multiDrawElementsInstancedWEBGL(mode: GLenum, countsList: Int32Array | GLsizei[], countsOffset: number, type: GLenum, offsetsList: Int32Array | GLsizei[], offsetsOffset: number, instanceCountsList: Int32Array | GLsizei[], instanceCountsOffset: number, drawcount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WEBGL_multi_draw/multiDrawElementsWEBGL) */
    multiDrawElementsWEBGL(mode: GLenum, countsList: Int32Array | GLsizei[], countsOffset: number, type: GLenum, offsetsList: Int32Array | GLsizei[], offsetsOffset: number, drawcount: GLsizei): void;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext) */
interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads, WebGLRenderingContextBase {
}

declare var WebGL2RenderingContext: {
    prototype: WebGL2RenderingContext;
    new(): WebGL2RenderingContext;
    readonly READ_BUFFER: 0x0C02;
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    readonly PACK_ROW_LENGTH: 0x0D02;
    readonly PACK_SKIP_ROWS: 0x0D03;
    readonly PACK_SKIP_PIXELS: 0x0D04;
    readonly COLOR: 0x1800;
    readonly DEPTH: 0x1801;
    readonly STENCIL: 0x1802;
    readonly RED: 0x1903;
    readonly RGB8: 0x8051;
    readonly RGB10_A2: 0x8059;
    readonly TEXTURE_BINDING_3D: 0x806A;
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    readonly TEXTURE_3D: 0x806F;
    readonly TEXTURE_WRAP_R: 0x8072;
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    readonly TEXTURE_MIN_LOD: 0x813A;
    readonly TEXTURE_MAX_LOD: 0x813B;
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    readonly MIN: 0x8007;
    readonly MAX: 0x8008;
    readonly DEPTH_COMPONENT24: 0x81A6;
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    readonly CURRENT_QUERY: 0x8865;
    readonly QUERY_RESULT: 0x8866;
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    readonly STREAM_READ: 0x88E1;
    readonly STREAM_COPY: 0x88E2;
    readonly STATIC_READ: 0x88E5;
    readonly STATIC_COPY: 0x88E6;
    readonly DYNAMIC_READ: 0x88E9;
    readonly DYNAMIC_COPY: 0x88EA;
    readonly MAX_DRAW_BUFFERS: 0x8824;
    readonly DRAW_BUFFER0: 0x8825;
    readonly DRAW_BUFFER1: 0x8826;
    readonly DRAW_BUFFER2: 0x8827;
    readonly DRAW_BUFFER3: 0x8828;
    readonly DRAW_BUFFER4: 0x8829;
    readonly DRAW_BUFFER5: 0x882A;
    readonly DRAW_BUFFER6: 0x882B;
    readonly DRAW_BUFFER7: 0x882C;
    readonly DRAW_BUFFER8: 0x882D;
    readonly DRAW_BUFFER9: 0x882E;
    readonly DRAW_BUFFER10: 0x882F;
    readonly DRAW_BUFFER11: 0x8830;
    readonly DRAW_BUFFER12: 0x8831;
    readonly DRAW_BUFFER13: 0x8832;
    readonly DRAW_BUFFER14: 0x8833;
    readonly DRAW_BUFFER15: 0x8834;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    readonly SAMPLER_3D: 0x8B5F;
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    readonly FLOAT_MAT2x3: 0x8B65;
    readonly FLOAT_MAT2x4: 0x8B66;
    readonly FLOAT_MAT3x2: 0x8B67;
    readonly FLOAT_MAT3x4: 0x8B68;
    readonly FLOAT_MAT4x2: 0x8B69;
    readonly FLOAT_MAT4x3: 0x8B6A;
    readonly SRGB: 0x8C40;
    readonly SRGB8: 0x8C41;
    readonly SRGB8_ALPHA8: 0x8C43;
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    readonly RGBA32F: 0x8814;
    readonly RGB32F: 0x8815;
    readonly RGBA16F: 0x881A;
    readonly RGB16F: 0x881B;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    readonly R11F_G11F_B10F: 0x8C3A;
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    readonly RGB9_E5: 0x8C3D;
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    readonly RASTERIZER_DISCARD: 0x8C89;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    readonly RGBA32UI: 0x8D70;
    readonly RGB32UI: 0x8D71;
    readonly RGBA16UI: 0x8D76;
    readonly RGB16UI: 0x8D77;
    readonly RGBA8UI: 0x8D7C;
    readonly RGB8UI: 0x8D7D;
    readonly RGBA32I: 0x8D82;
    readonly RGB32I: 0x8D83;
    readonly RGBA16I: 0x8D88;
    readonly RGB16I: 0x8D89;
    readonly RGBA8I: 0x8D8E;
    readonly RGB8I: 0x8D8F;
    readonly RED_INTEGER: 0x8D94;
    readonly RGB_INTEGER: 0x8D98;
    readonly RGBA_INTEGER: 0x8D99;
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    readonly INT_SAMPLER_2D: 0x8DCA;
    readonly INT_SAMPLER_3D: 0x8DCB;
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    readonly UNSIGNED_INT_24_8: 0x84FA;
    readonly DEPTH24_STENCIL8: 0x88F0;
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    readonly READ_FRAMEBUFFER: 0x8CA8;
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    readonly COLOR_ATTACHMENT13: 0x8CED;
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    readonly MAX_SAMPLES: 0x8D57;
    readonly HALF_FLOAT: 0x140B;
    readonly RG: 0x8227;
    readonly RG_INTEGER: 0x8228;
    readonly R8: 0x8229;
    readonly RG8: 0x822B;
    readonly R16F: 0x822D;
    readonly R32F: 0x822E;
    readonly RG16F: 0x822F;
    readonly RG32F: 0x8230;
    readonly R8I: 0x8231;
    readonly R8UI: 0x8232;
    readonly R16I: 0x8233;
    readonly R16UI: 0x8234;
    readonly R32I: 0x8235;
    readonly R32UI: 0x8236;
    readonly RG8I: 0x8237;
    readonly RG8UI: 0x8238;
    readonly RG16I: 0x8239;
    readonly RG16UI: 0x823A;
    readonly RG32I: 0x823B;
    readonly RG32UI: 0x823C;
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    readonly R8_SNORM: 0x8F94;
    readonly RG8_SNORM: 0x8F95;
    readonly RGB8_SNORM: 0x8F96;
    readonly RGBA8_SNORM: 0x8F97;
    readonly SIGNED_NORMALIZED: 0x8F9C;
    readonly COPY_READ_BUFFER: 0x8F36;
    readonly COPY_WRITE_BUFFER: 0x8F37;
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    readonly UNIFORM_BUFFER: 0x8A11;
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    readonly UNIFORM_BUFFER_START: 0x8A29;
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    readonly UNIFORM_TYPE: 0x8A37;
    readonly UNIFORM_SIZE: 0x8A38;
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    readonly UNIFORM_OFFSET: 0x8A3B;
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    readonly INVALID_INDEX: 0xFFFFFFFF;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    readonly OBJECT_TYPE: 0x9112;
    readonly SYNC_CONDITION: 0x9113;
    readonly SYNC_STATUS: 0x9114;
    readonly SYNC_FLAGS: 0x9115;
    readonly SYNC_FENCE: 0x9116;
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    readonly UNSIGNALED: 0x9118;
    readonly SIGNALED: 0x9119;
    readonly ALREADY_SIGNALED: 0x911A;
    readonly TIMEOUT_EXPIRED: 0x911B;
    readonly CONDITION_SATISFIED: 0x911C;
    readonly WAIT_FAILED: 0x911D;
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    readonly SAMPLER_BINDING: 0x8919;
    readonly RGB10_A2UI: 0x906F;
    readonly INT_2_10_10_10_REV: 0x8D9F;
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    readonly TIMEOUT_IGNORED: -1;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGBA8: 0x8058;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};

interface WebGL2RenderingContextBase {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/beginQuery) */
    beginQuery(target: GLenum, query: WebGLQuery): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback) */
    beginTransformFeedback(primitiveMode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindBufferBase) */
    bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindBufferRange) */
    bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindSampler) */
    bindSampler(unit: GLuint, sampler: WebGLSampler | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback) */
    bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bindVertexArray) */
    bindVertexArray(array: WebGLVertexArrayObject | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/blitFramebuffer) */
    blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clearBuffer) */
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/clientWaitSync) */
    clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D) */
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D) */
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/copyBufferSubData) */
    copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D) */
    copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createQuery) */
    createQuery(): WebGLQuery;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createSampler) */
    createSampler(): WebGLSampler;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createTransformFeedback) */
    createTransformFeedback(): WebGLTransformFeedback;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/createVertexArray) */
    createVertexArray(): WebGLVertexArrayObject;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteQuery) */
    deleteQuery(query: WebGLQuery | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteSampler) */
    deleteSampler(sampler: WebGLSampler | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteSync) */
    deleteSync(sync: WebGLSync | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback) */
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/deleteVertexArray) */
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) */
    drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawBuffers) */
    drawBuffers(buffers: GLenum[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced) */
    drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawRangeElements) */
    drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/endQuery) */
    endQuery(target: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/endTransformFeedback) */
    endTransformFeedback(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/fenceSync) */
    fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer) */
    framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName) */
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter) */
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getActiveUniforms) */
    getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getBufferSubData) */
    getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView, dstOffset?: number, length?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getFragDataLocation) */
    getFragDataLocation(program: WebGLProgram, name: string): GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getIndexedParameter) */
    getIndexedParameter(target: GLenum, index: GLuint): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter) */
    getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQuery) */
    getQuery(target: GLenum, pname: GLenum): WebGLQuery | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getQueryParameter) */
    getQueryParameter(query: WebGLQuery, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getSamplerParameter) */
    getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getSyncParameter) */
    getSyncParameter(sync: WebGLSync, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying) */
    getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex) */
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/getUniformIndices) */
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer) */
    invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer) */
    invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isQuery) */
    isQuery(query: WebGLQuery | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isSampler) */
    isSampler(sampler: WebGLSampler | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isSync) */
    isSync(sync: WebGLSync | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isTransformFeedback) */
    isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/isVertexArray) */
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback) */
    pauseTransformFeedback(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/readBuffer) */
    readBuffer(src: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample) */
    renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback) */
    resumeTransformFeedback(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/samplerParameter) */
    samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/samplerParameter) */
    samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texImage3D) */
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView | null): void;
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texStorage2D) */
    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texStorage3D) */
    texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/texSubImage3D) */
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView | null, srcOffset?: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings) */
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniform) */
    uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding) */
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor) */
    vertexAttribDivisor(index: GLuint, divisor: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4iv(index: GLuint, values: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribI) */
    vertexAttribI4uiv(index: GLuint, values: Uint32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) */
    vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/waitSync) */
    waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void;
    readonly READ_BUFFER: 0x0C02;
    readonly UNPACK_ROW_LENGTH: 0x0CF2;
    readonly UNPACK_SKIP_ROWS: 0x0CF3;
    readonly UNPACK_SKIP_PIXELS: 0x0CF4;
    readonly PACK_ROW_LENGTH: 0x0D02;
    readonly PACK_SKIP_ROWS: 0x0D03;
    readonly PACK_SKIP_PIXELS: 0x0D04;
    readonly COLOR: 0x1800;
    readonly DEPTH: 0x1801;
    readonly STENCIL: 0x1802;
    readonly RED: 0x1903;
    readonly RGB8: 0x8051;
    readonly RGB10_A2: 0x8059;
    readonly TEXTURE_BINDING_3D: 0x806A;
    readonly UNPACK_SKIP_IMAGES: 0x806D;
    readonly UNPACK_IMAGE_HEIGHT: 0x806E;
    readonly TEXTURE_3D: 0x806F;
    readonly TEXTURE_WRAP_R: 0x8072;
    readonly MAX_3D_TEXTURE_SIZE: 0x8073;
    readonly UNSIGNED_INT_2_10_10_10_REV: 0x8368;
    readonly MAX_ELEMENTS_VERTICES: 0x80E8;
    readonly MAX_ELEMENTS_INDICES: 0x80E9;
    readonly TEXTURE_MIN_LOD: 0x813A;
    readonly TEXTURE_MAX_LOD: 0x813B;
    readonly TEXTURE_BASE_LEVEL: 0x813C;
    readonly TEXTURE_MAX_LEVEL: 0x813D;
    readonly MIN: 0x8007;
    readonly MAX: 0x8008;
    readonly DEPTH_COMPONENT24: 0x81A6;
    readonly MAX_TEXTURE_LOD_BIAS: 0x84FD;
    readonly TEXTURE_COMPARE_MODE: 0x884C;
    readonly TEXTURE_COMPARE_FUNC: 0x884D;
    readonly CURRENT_QUERY: 0x8865;
    readonly QUERY_RESULT: 0x8866;
    readonly QUERY_RESULT_AVAILABLE: 0x8867;
    readonly STREAM_READ: 0x88E1;
    readonly STREAM_COPY: 0x88E2;
    readonly STATIC_READ: 0x88E5;
    readonly STATIC_COPY: 0x88E6;
    readonly DYNAMIC_READ: 0x88E9;
    readonly DYNAMIC_COPY: 0x88EA;
    readonly MAX_DRAW_BUFFERS: 0x8824;
    readonly DRAW_BUFFER0: 0x8825;
    readonly DRAW_BUFFER1: 0x8826;
    readonly DRAW_BUFFER2: 0x8827;
    readonly DRAW_BUFFER3: 0x8828;
    readonly DRAW_BUFFER4: 0x8829;
    readonly DRAW_BUFFER5: 0x882A;
    readonly DRAW_BUFFER6: 0x882B;
    readonly DRAW_BUFFER7: 0x882C;
    readonly DRAW_BUFFER8: 0x882D;
    readonly DRAW_BUFFER9: 0x882E;
    readonly DRAW_BUFFER10: 0x882F;
    readonly DRAW_BUFFER11: 0x8830;
    readonly DRAW_BUFFER12: 0x8831;
    readonly DRAW_BUFFER13: 0x8832;
    readonly DRAW_BUFFER14: 0x8833;
    readonly DRAW_BUFFER15: 0x8834;
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49;
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A;
    readonly SAMPLER_3D: 0x8B5F;
    readonly SAMPLER_2D_SHADOW: 0x8B62;
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B;
    readonly PIXEL_PACK_BUFFER: 0x88EB;
    readonly PIXEL_UNPACK_BUFFER: 0x88EC;
    readonly PIXEL_PACK_BUFFER_BINDING: 0x88ED;
    readonly PIXEL_UNPACK_BUFFER_BINDING: 0x88EF;
    readonly FLOAT_MAT2x3: 0x8B65;
    readonly FLOAT_MAT2x4: 0x8B66;
    readonly FLOAT_MAT3x2: 0x8B67;
    readonly FLOAT_MAT3x4: 0x8B68;
    readonly FLOAT_MAT4x2: 0x8B69;
    readonly FLOAT_MAT4x3: 0x8B6A;
    readonly SRGB: 0x8C40;
    readonly SRGB8: 0x8C41;
    readonly SRGB8_ALPHA8: 0x8C43;
    readonly COMPARE_REF_TO_TEXTURE: 0x884E;
    readonly RGBA32F: 0x8814;
    readonly RGB32F: 0x8815;
    readonly RGBA16F: 0x881A;
    readonly RGB16F: 0x881B;
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD;
    readonly MAX_ARRAY_TEXTURE_LAYERS: 0x88FF;
    readonly MIN_PROGRAM_TEXEL_OFFSET: 0x8904;
    readonly MAX_PROGRAM_TEXEL_OFFSET: 0x8905;
    readonly MAX_VARYING_COMPONENTS: 0x8B4B;
    readonly TEXTURE_2D_ARRAY: 0x8C1A;
    readonly TEXTURE_BINDING_2D_ARRAY: 0x8C1D;
    readonly R11F_G11F_B10F: 0x8C3A;
    readonly UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B;
    readonly RGB9_E5: 0x8C3D;
    readonly UNSIGNED_INT_5_9_9_9_REV: 0x8C3E;
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80;
    readonly TRANSFORM_FEEDBACK_VARYINGS: 0x8C83;
    readonly TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84;
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85;
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88;
    readonly RASTERIZER_DISCARD: 0x8C89;
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A;
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B;
    readonly INTERLEAVED_ATTRIBS: 0x8C8C;
    readonly SEPARATE_ATTRIBS: 0x8C8D;
    readonly TRANSFORM_FEEDBACK_BUFFER: 0x8C8E;
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F;
    readonly RGBA32UI: 0x8D70;
    readonly RGB32UI: 0x8D71;
    readonly RGBA16UI: 0x8D76;
    readonly RGB16UI: 0x8D77;
    readonly RGBA8UI: 0x8D7C;
    readonly RGB8UI: 0x8D7D;
    readonly RGBA32I: 0x8D82;
    readonly RGB32I: 0x8D83;
    readonly RGBA16I: 0x8D88;
    readonly RGB16I: 0x8D89;
    readonly RGBA8I: 0x8D8E;
    readonly RGB8I: 0x8D8F;
    readonly RED_INTEGER: 0x8D94;
    readonly RGB_INTEGER: 0x8D98;
    readonly RGBA_INTEGER: 0x8D99;
    readonly SAMPLER_2D_ARRAY: 0x8DC1;
    readonly SAMPLER_2D_ARRAY_SHADOW: 0x8DC4;
    readonly SAMPLER_CUBE_SHADOW: 0x8DC5;
    readonly UNSIGNED_INT_VEC2: 0x8DC6;
    readonly UNSIGNED_INT_VEC3: 0x8DC7;
    readonly UNSIGNED_INT_VEC4: 0x8DC8;
    readonly INT_SAMPLER_2D: 0x8DCA;
    readonly INT_SAMPLER_3D: 0x8DCB;
    readonly INT_SAMPLER_CUBE: 0x8DCC;
    readonly INT_SAMPLER_2D_ARRAY: 0x8DCF;
    readonly UNSIGNED_INT_SAMPLER_2D: 0x8DD2;
    readonly UNSIGNED_INT_SAMPLER_3D: 0x8DD3;
    readonly UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4;
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7;
    readonly DEPTH_COMPONENT32F: 0x8CAC;
    readonly DEPTH32F_STENCIL8: 0x8CAD;
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD;
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210;
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211;
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212;
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213;
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214;
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215;
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216;
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217;
    readonly FRAMEBUFFER_DEFAULT: 0x8218;
    readonly UNSIGNED_INT_24_8: 0x84FA;
    readonly DEPTH24_STENCIL8: 0x88F0;
    readonly UNSIGNED_NORMALIZED: 0x8C17;
    readonly DRAW_FRAMEBUFFER_BINDING: 0x8CA6;
    readonly READ_FRAMEBUFFER: 0x8CA8;
    readonly DRAW_FRAMEBUFFER: 0x8CA9;
    readonly READ_FRAMEBUFFER_BINDING: 0x8CAA;
    readonly RENDERBUFFER_SAMPLES: 0x8CAB;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4;
    readonly MAX_COLOR_ATTACHMENTS: 0x8CDF;
    readonly COLOR_ATTACHMENT1: 0x8CE1;
    readonly COLOR_ATTACHMENT2: 0x8CE2;
    readonly COLOR_ATTACHMENT3: 0x8CE3;
    readonly COLOR_ATTACHMENT4: 0x8CE4;
    readonly COLOR_ATTACHMENT5: 0x8CE5;
    readonly COLOR_ATTACHMENT6: 0x8CE6;
    readonly COLOR_ATTACHMENT7: 0x8CE7;
    readonly COLOR_ATTACHMENT8: 0x8CE8;
    readonly COLOR_ATTACHMENT9: 0x8CE9;
    readonly COLOR_ATTACHMENT10: 0x8CEA;
    readonly COLOR_ATTACHMENT11: 0x8CEB;
    readonly COLOR_ATTACHMENT12: 0x8CEC;
    readonly COLOR_ATTACHMENT13: 0x8CED;
    readonly COLOR_ATTACHMENT14: 0x8CEE;
    readonly COLOR_ATTACHMENT15: 0x8CEF;
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56;
    readonly MAX_SAMPLES: 0x8D57;
    readonly HALF_FLOAT: 0x140B;
    readonly RG: 0x8227;
    readonly RG_INTEGER: 0x8228;
    readonly R8: 0x8229;
    readonly RG8: 0x822B;
    readonly R16F: 0x822D;
    readonly R32F: 0x822E;
    readonly RG16F: 0x822F;
    readonly RG32F: 0x8230;
    readonly R8I: 0x8231;
    readonly R8UI: 0x8232;
    readonly R16I: 0x8233;
    readonly R16UI: 0x8234;
    readonly R32I: 0x8235;
    readonly R32UI: 0x8236;
    readonly RG8I: 0x8237;
    readonly RG8UI: 0x8238;
    readonly RG16I: 0x8239;
    readonly RG16UI: 0x823A;
    readonly RG32I: 0x823B;
    readonly RG32UI: 0x823C;
    readonly VERTEX_ARRAY_BINDING: 0x85B5;
    readonly R8_SNORM: 0x8F94;
    readonly RG8_SNORM: 0x8F95;
    readonly RGB8_SNORM: 0x8F96;
    readonly RGBA8_SNORM: 0x8F97;
    readonly SIGNED_NORMALIZED: 0x8F9C;
    readonly COPY_READ_BUFFER: 0x8F36;
    readonly COPY_WRITE_BUFFER: 0x8F37;
    readonly COPY_READ_BUFFER_BINDING: 0x8F36;
    readonly COPY_WRITE_BUFFER_BINDING: 0x8F37;
    readonly UNIFORM_BUFFER: 0x8A11;
    readonly UNIFORM_BUFFER_BINDING: 0x8A28;
    readonly UNIFORM_BUFFER_START: 0x8A29;
    readonly UNIFORM_BUFFER_SIZE: 0x8A2A;
    readonly MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B;
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D;
    readonly MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E;
    readonly MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F;
    readonly MAX_UNIFORM_BLOCK_SIZE: 0x8A30;
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31;
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33;
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34;
    readonly ACTIVE_UNIFORM_BLOCKS: 0x8A36;
    readonly UNIFORM_TYPE: 0x8A37;
    readonly UNIFORM_SIZE: 0x8A38;
    readonly UNIFORM_BLOCK_INDEX: 0x8A3A;
    readonly UNIFORM_OFFSET: 0x8A3B;
    readonly UNIFORM_ARRAY_STRIDE: 0x8A3C;
    readonly UNIFORM_MATRIX_STRIDE: 0x8A3D;
    readonly UNIFORM_IS_ROW_MAJOR: 0x8A3E;
    readonly UNIFORM_BLOCK_BINDING: 0x8A3F;
    readonly UNIFORM_BLOCK_DATA_SIZE: 0x8A40;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42;
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43;
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44;
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46;
    readonly INVALID_INDEX: 0xFFFFFFFF;
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122;
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125;
    readonly MAX_SERVER_WAIT_TIMEOUT: 0x9111;
    readonly OBJECT_TYPE: 0x9112;
    readonly SYNC_CONDITION: 0x9113;
    readonly SYNC_STATUS: 0x9114;
    readonly SYNC_FLAGS: 0x9115;
    readonly SYNC_FENCE: 0x9116;
    readonly SYNC_GPU_COMMANDS_COMPLETE: 0x9117;
    readonly UNSIGNALED: 0x9118;
    readonly SIGNALED: 0x9119;
    readonly ALREADY_SIGNALED: 0x911A;
    readonly TIMEOUT_EXPIRED: 0x911B;
    readonly CONDITION_SATISFIED: 0x911C;
    readonly WAIT_FAILED: 0x911D;
    readonly SYNC_FLUSH_COMMANDS_BIT: 0x00000001;
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE;
    readonly ANY_SAMPLES_PASSED: 0x8C2F;
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A;
    readonly SAMPLER_BINDING: 0x8919;
    readonly RGB10_A2UI: 0x906F;
    readonly INT_2_10_10_10_REV: 0x8D9F;
    readonly TRANSFORM_FEEDBACK: 0x8E22;
    readonly TRANSFORM_FEEDBACK_PAUSED: 0x8E23;
    readonly TRANSFORM_FEEDBACK_ACTIVE: 0x8E24;
    readonly TRANSFORM_FEEDBACK_BINDING: 0x8E25;
    readonly TEXTURE_IMMUTABLE_FORMAT: 0x912F;
    readonly MAX_ELEMENT_INDEX: 0x8D6B;
    readonly TEXTURE_IMMUTABLE_LEVELS: 0x82DF;
    readonly TIMEOUT_IGNORED: -1;
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247;
}

interface WebGL2RenderingContextOverloads {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bufferData) */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, srcData: AllowSharedBufferSource | null, usage: GLenum): void;
    bufferData(target: GLenum, srcData: ArrayBufferView, usage: GLenum, srcOffset: number, length?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/bufferSubData) */
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: AllowSharedBufferSource): void;
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView, srcOffset: number, length?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) */
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) */
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: number, srcLengthOverride?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/readPixels) */
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView | null): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView, dstOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texImage2D) */
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texSubImage2D) */
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: number): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/uniformMatrix) */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: number, srcLength?: GLuint): void;
}

/**
 * Part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getActiveAttrib() and WebGLRenderingContext.getActiveUniform() methods.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo)
 */
interface WebGLActiveInfo {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/name) */
    readonly name: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/size) */
    readonly size: GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLActiveInfo/type) */
    readonly type: GLenum;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};

/**
 * Part of the WebGL API and represents an opaque buffer object storing data such as vertices or colors.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLBuffer)
 */
interface WebGLBuffer {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
};

/**
 * The WebContextEvent interface is part of the WebGL API and is an interface for an event that is generated in response to a status change to the WebGL rendering context.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent)
 */
interface WebGLContextEvent extends Event {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLContextEvent/statusMessage) */
    readonly statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};

/**
 * Part of the WebGL API and represents a collection of buffers that serve as a rendering destination.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLFramebuffer)
 */
interface WebGLFramebuffer {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};

/**
 * The WebGLProgram is part of the WebGL API and is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader (both written in GLSL).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLProgram)
 */
interface WebGLProgram {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLQuery) */
interface WebGLQuery {
}

declare var WebGLQuery: {
    prototype: WebGLQuery;
    new(): WebGLQuery;
};

/**
 * Part of the WebGL API and represents a buffer that can contain an image, or can be source or target of an rendering operation.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderbuffer)
 */
interface WebGLRenderbuffer {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};

/**
 * Provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML <canvas> element.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext)
 */
interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGBA8: 0x8058;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
};

interface WebGLRenderingContextBase {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/drawingBufferColorSpace) */
    drawingBufferColorSpace: PredefinedColorSpace;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferHeight) */
    readonly drawingBufferHeight: GLsizei;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawingBufferWidth) */
    readonly drawingBufferWidth: GLsizei;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGL2RenderingContext/unpackColorSpace) */
    unpackColorSpace: PredefinedColorSpace;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/activeTexture) */
    activeTexture(texture: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/attachShader) */
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindAttribLocation) */
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindBuffer) */
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindFramebuffer) */
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindRenderbuffer) */
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bindTexture) */
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendColor) */
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendEquation) */
    blendEquation(mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendEquationSeparate) */
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendFunc) */
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/blendFuncSeparate) */
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) */
    checkFramebufferStatus(target: GLenum): GLenum;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clear) */
    clear(mask: GLbitfield): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearColor) */
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearDepth) */
    clearDepth(depth: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/clearStencil) */
    clearStencil(s: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/colorMask) */
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compileShader) */
    compileShader(shader: WebGLShader): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/copyTexImage2D) */
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D) */
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createBuffer) */
    createBuffer(): WebGLBuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createFramebuffer) */
    createFramebuffer(): WebGLFramebuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createProgram) */
    createProgram(): WebGLProgram;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createRenderbuffer) */
    createRenderbuffer(): WebGLRenderbuffer;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createShader) */
    createShader(type: GLenum): WebGLShader | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/createTexture) */
    createTexture(): WebGLTexture;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/cullFace) */
    cullFace(mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteBuffer) */
    deleteBuffer(buffer: WebGLBuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteFramebuffer) */
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteProgram) */
    deleteProgram(program: WebGLProgram | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer) */
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteShader) */
    deleteShader(shader: WebGLShader | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/deleteTexture) */
    deleteTexture(texture: WebGLTexture | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthFunc) */
    depthFunc(func: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthMask) */
    depthMask(flag: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/depthRange) */
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/detachShader) */
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/disable) */
    disable(cap: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) */
    disableVertexAttribArray(index: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawArrays) */
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/drawElements) */
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/enable) */
    enable(cap: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) */
    enableVertexAttribArray(index: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/finish) */
    finish(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/flush) */
    flush(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer) */
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/framebufferTexture2D) */
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/frontFace) */
    frontFace(mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/generateMipmap) */
    generateMipmap(target: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getActiveAttrib) */
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getActiveUniform) */
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getAttachedShaders) */
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getAttribLocation) */
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getBufferParameter) */
    getBufferParameter(target: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getContextAttributes) */
    getContextAttributes(): WebGLContextAttributes | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getError) */
    getError(): GLenum;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getExtension) */
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_color_buffer_float"): EXT_color_buffer_float | null;
    getExtension(extensionName: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float | null;
    getExtension(extensionName: "EXT_float_blend"): EXT_float_blend | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_texture_compression_bptc"): EXT_texture_compression_bptc | null;
    getExtension(extensionName: "EXT_texture_compression_rgtc"): EXT_texture_compression_rgtc | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "KHR_parallel_shader_compile"): KHR_parallel_shader_compile | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "OES_fbo_render_mipmap"): OES_fbo_render_mipmap | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "OVR_multiview2"): OVR_multiview2 | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc"): WEBGL_compressed_texture_etc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1 | null;
    getExtension(extensionName: "WEBGL_compressed_texture_pvrtc"): WEBGL_compressed_texture_pvrtc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_multi_draw"): WEBGL_multi_draw | null;
    getExtension(name: string): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) */
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getParameter) */
    getParameter(pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getProgramInfoLog) */
    getProgramInfoLog(program: WebGLProgram): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getProgramParameter) */
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter) */
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderInfoLog) */
    getShaderInfoLog(shader: WebGLShader): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderParameter) */
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat) */
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getShaderSource) */
    getShaderSource(shader: WebGLShader): string | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getSupportedExtensions) */
    getSupportedExtensions(): string[] | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getTexParameter) */
    getTexParameter(target: GLenum, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getUniform) */
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getUniformLocation) */
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getVertexAttrib) */
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) */
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/hint) */
    hint(target: GLenum, mode: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isBuffer) */
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isContextLost) */
    isContextLost(): boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isEnabled) */
    isEnabled(cap: GLenum): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isFramebuffer) */
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isProgram) */
    isProgram(program: WebGLProgram | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isRenderbuffer) */
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isShader) */
    isShader(shader: WebGLShader | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/isTexture) */
    isTexture(texture: WebGLTexture | null): GLboolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/lineWidth) */
    lineWidth(width: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/linkProgram) */
    linkProgram(program: WebGLProgram): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/pixelStorei) */
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/polygonOffset) */
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/renderbufferStorage) */
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/sampleCoverage) */
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/scissor) */
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/shaderSource) */
    shaderSource(shader: WebGLShader, source: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilFunc) */
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate) */
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilMask) */
    stencilMask(mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate) */
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilOp) */
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/stencilOpSeparate) */
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texParameter) */
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texParameter) */
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/useProgram) */
    useProgram(program: WebGLProgram | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/validateProgram) */
    validateProgram(program: WebGLProgram): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttrib) */
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/vertexAttribPointer) */
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/viewport) */
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    readonly DEPTH_BUFFER_BIT: 0x00000100;
    readonly STENCIL_BUFFER_BIT: 0x00000400;
    readonly COLOR_BUFFER_BIT: 0x00004000;
    readonly POINTS: 0x0000;
    readonly LINES: 0x0001;
    readonly LINE_LOOP: 0x0002;
    readonly LINE_STRIP: 0x0003;
    readonly TRIANGLES: 0x0004;
    readonly TRIANGLE_STRIP: 0x0005;
    readonly TRIANGLE_FAN: 0x0006;
    readonly ZERO: 0;
    readonly ONE: 1;
    readonly SRC_COLOR: 0x0300;
    readonly ONE_MINUS_SRC_COLOR: 0x0301;
    readonly SRC_ALPHA: 0x0302;
    readonly ONE_MINUS_SRC_ALPHA: 0x0303;
    readonly DST_ALPHA: 0x0304;
    readonly ONE_MINUS_DST_ALPHA: 0x0305;
    readonly DST_COLOR: 0x0306;
    readonly ONE_MINUS_DST_COLOR: 0x0307;
    readonly SRC_ALPHA_SATURATE: 0x0308;
    readonly FUNC_ADD: 0x8006;
    readonly BLEND_EQUATION: 0x8009;
    readonly BLEND_EQUATION_RGB: 0x8009;
    readonly BLEND_EQUATION_ALPHA: 0x883D;
    readonly FUNC_SUBTRACT: 0x800A;
    readonly FUNC_REVERSE_SUBTRACT: 0x800B;
    readonly BLEND_DST_RGB: 0x80C8;
    readonly BLEND_SRC_RGB: 0x80C9;
    readonly BLEND_DST_ALPHA: 0x80CA;
    readonly BLEND_SRC_ALPHA: 0x80CB;
    readonly CONSTANT_COLOR: 0x8001;
    readonly ONE_MINUS_CONSTANT_COLOR: 0x8002;
    readonly CONSTANT_ALPHA: 0x8003;
    readonly ONE_MINUS_CONSTANT_ALPHA: 0x8004;
    readonly BLEND_COLOR: 0x8005;
    readonly ARRAY_BUFFER: 0x8892;
    readonly ELEMENT_ARRAY_BUFFER: 0x8893;
    readonly ARRAY_BUFFER_BINDING: 0x8894;
    readonly ELEMENT_ARRAY_BUFFER_BINDING: 0x8895;
    readonly STREAM_DRAW: 0x88E0;
    readonly STATIC_DRAW: 0x88E4;
    readonly DYNAMIC_DRAW: 0x88E8;
    readonly BUFFER_SIZE: 0x8764;
    readonly BUFFER_USAGE: 0x8765;
    readonly CURRENT_VERTEX_ATTRIB: 0x8626;
    readonly FRONT: 0x0404;
    readonly BACK: 0x0405;
    readonly FRONT_AND_BACK: 0x0408;
    readonly CULL_FACE: 0x0B44;
    readonly BLEND: 0x0BE2;
    readonly DITHER: 0x0BD0;
    readonly STENCIL_TEST: 0x0B90;
    readonly DEPTH_TEST: 0x0B71;
    readonly SCISSOR_TEST: 0x0C11;
    readonly POLYGON_OFFSET_FILL: 0x8037;
    readonly SAMPLE_ALPHA_TO_COVERAGE: 0x809E;
    readonly SAMPLE_COVERAGE: 0x80A0;
    readonly NO_ERROR: 0;
    readonly INVALID_ENUM: 0x0500;
    readonly INVALID_VALUE: 0x0501;
    readonly INVALID_OPERATION: 0x0502;
    readonly OUT_OF_MEMORY: 0x0505;
    readonly CW: 0x0900;
    readonly CCW: 0x0901;
    readonly LINE_WIDTH: 0x0B21;
    readonly ALIASED_POINT_SIZE_RANGE: 0x846D;
    readonly ALIASED_LINE_WIDTH_RANGE: 0x846E;
    readonly CULL_FACE_MODE: 0x0B45;
    readonly FRONT_FACE: 0x0B46;
    readonly DEPTH_RANGE: 0x0B70;
    readonly DEPTH_WRITEMASK: 0x0B72;
    readonly DEPTH_CLEAR_VALUE: 0x0B73;
    readonly DEPTH_FUNC: 0x0B74;
    readonly STENCIL_CLEAR_VALUE: 0x0B91;
    readonly STENCIL_FUNC: 0x0B92;
    readonly STENCIL_FAIL: 0x0B94;
    readonly STENCIL_PASS_DEPTH_FAIL: 0x0B95;
    readonly STENCIL_PASS_DEPTH_PASS: 0x0B96;
    readonly STENCIL_REF: 0x0B97;
    readonly STENCIL_VALUE_MASK: 0x0B93;
    readonly STENCIL_WRITEMASK: 0x0B98;
    readonly STENCIL_BACK_FUNC: 0x8800;
    readonly STENCIL_BACK_FAIL: 0x8801;
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802;
    readonly STENCIL_BACK_PASS_DEPTH_PASS: 0x8803;
    readonly STENCIL_BACK_REF: 0x8CA3;
    readonly STENCIL_BACK_VALUE_MASK: 0x8CA4;
    readonly STENCIL_BACK_WRITEMASK: 0x8CA5;
    readonly VIEWPORT: 0x0BA2;
    readonly SCISSOR_BOX: 0x0C10;
    readonly COLOR_CLEAR_VALUE: 0x0C22;
    readonly COLOR_WRITEMASK: 0x0C23;
    readonly UNPACK_ALIGNMENT: 0x0CF5;
    readonly PACK_ALIGNMENT: 0x0D05;
    readonly MAX_TEXTURE_SIZE: 0x0D33;
    readonly MAX_VIEWPORT_DIMS: 0x0D3A;
    readonly SUBPIXEL_BITS: 0x0D50;
    readonly RED_BITS: 0x0D52;
    readonly GREEN_BITS: 0x0D53;
    readonly BLUE_BITS: 0x0D54;
    readonly ALPHA_BITS: 0x0D55;
    readonly DEPTH_BITS: 0x0D56;
    readonly STENCIL_BITS: 0x0D57;
    readonly POLYGON_OFFSET_UNITS: 0x2A00;
    readonly POLYGON_OFFSET_FACTOR: 0x8038;
    readonly TEXTURE_BINDING_2D: 0x8069;
    readonly SAMPLE_BUFFERS: 0x80A8;
    readonly SAMPLES: 0x80A9;
    readonly SAMPLE_COVERAGE_VALUE: 0x80AA;
    readonly SAMPLE_COVERAGE_INVERT: 0x80AB;
    readonly COMPRESSED_TEXTURE_FORMATS: 0x86A3;
    readonly DONT_CARE: 0x1100;
    readonly FASTEST: 0x1101;
    readonly NICEST: 0x1102;
    readonly GENERATE_MIPMAP_HINT: 0x8192;
    readonly BYTE: 0x1400;
    readonly UNSIGNED_BYTE: 0x1401;
    readonly SHORT: 0x1402;
    readonly UNSIGNED_SHORT: 0x1403;
    readonly INT: 0x1404;
    readonly UNSIGNED_INT: 0x1405;
    readonly FLOAT: 0x1406;
    readonly DEPTH_COMPONENT: 0x1902;
    readonly ALPHA: 0x1906;
    readonly RGB: 0x1907;
    readonly RGBA: 0x1908;
    readonly LUMINANCE: 0x1909;
    readonly LUMINANCE_ALPHA: 0x190A;
    readonly UNSIGNED_SHORT_4_4_4_4: 0x8033;
    readonly UNSIGNED_SHORT_5_5_5_1: 0x8034;
    readonly UNSIGNED_SHORT_5_6_5: 0x8363;
    readonly FRAGMENT_SHADER: 0x8B30;
    readonly VERTEX_SHADER: 0x8B31;
    readonly MAX_VERTEX_ATTRIBS: 0x8869;
    readonly MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB;
    readonly MAX_VARYING_VECTORS: 0x8DFC;
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D;
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C;
    readonly MAX_TEXTURE_IMAGE_UNITS: 0x8872;
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD;
    readonly SHADER_TYPE: 0x8B4F;
    readonly DELETE_STATUS: 0x8B80;
    readonly LINK_STATUS: 0x8B82;
    readonly VALIDATE_STATUS: 0x8B83;
    readonly ATTACHED_SHADERS: 0x8B85;
    readonly ACTIVE_UNIFORMS: 0x8B86;
    readonly ACTIVE_ATTRIBUTES: 0x8B89;
    readonly SHADING_LANGUAGE_VERSION: 0x8B8C;
    readonly CURRENT_PROGRAM: 0x8B8D;
    readonly NEVER: 0x0200;
    readonly LESS: 0x0201;
    readonly EQUAL: 0x0202;
    readonly LEQUAL: 0x0203;
    readonly GREATER: 0x0204;
    readonly NOTEQUAL: 0x0205;
    readonly GEQUAL: 0x0206;
    readonly ALWAYS: 0x0207;
    readonly KEEP: 0x1E00;
    readonly REPLACE: 0x1E01;
    readonly INCR: 0x1E02;
    readonly DECR: 0x1E03;
    readonly INVERT: 0x150A;
    readonly INCR_WRAP: 0x8507;
    readonly DECR_WRAP: 0x8508;
    readonly VENDOR: 0x1F00;
    readonly RENDERER: 0x1F01;
    readonly VERSION: 0x1F02;
    readonly NEAREST: 0x2600;
    readonly LINEAR: 0x2601;
    readonly NEAREST_MIPMAP_NEAREST: 0x2700;
    readonly LINEAR_MIPMAP_NEAREST: 0x2701;
    readonly NEAREST_MIPMAP_LINEAR: 0x2702;
    readonly LINEAR_MIPMAP_LINEAR: 0x2703;
    readonly TEXTURE_MAG_FILTER: 0x2800;
    readonly TEXTURE_MIN_FILTER: 0x2801;
    readonly TEXTURE_WRAP_S: 0x2802;
    readonly TEXTURE_WRAP_T: 0x2803;
    readonly TEXTURE_2D: 0x0DE1;
    readonly TEXTURE: 0x1702;
    readonly TEXTURE_CUBE_MAP: 0x8513;
    readonly TEXTURE_BINDING_CUBE_MAP: 0x8514;
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518;
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519;
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A;
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C;
    readonly TEXTURE0: 0x84C0;
    readonly TEXTURE1: 0x84C1;
    readonly TEXTURE2: 0x84C2;
    readonly TEXTURE3: 0x84C3;
    readonly TEXTURE4: 0x84C4;
    readonly TEXTURE5: 0x84C5;
    readonly TEXTURE6: 0x84C6;
    readonly TEXTURE7: 0x84C7;
    readonly TEXTURE8: 0x84C8;
    readonly TEXTURE9: 0x84C9;
    readonly TEXTURE10: 0x84CA;
    readonly TEXTURE11: 0x84CB;
    readonly TEXTURE12: 0x84CC;
    readonly TEXTURE13: 0x84CD;
    readonly TEXTURE14: 0x84CE;
    readonly TEXTURE15: 0x84CF;
    readonly TEXTURE16: 0x84D0;
    readonly TEXTURE17: 0x84D1;
    readonly TEXTURE18: 0x84D2;
    readonly TEXTURE19: 0x84D3;
    readonly TEXTURE20: 0x84D4;
    readonly TEXTURE21: 0x84D5;
    readonly TEXTURE22: 0x84D6;
    readonly TEXTURE23: 0x84D7;
    readonly TEXTURE24: 0x84D8;
    readonly TEXTURE25: 0x84D9;
    readonly TEXTURE26: 0x84DA;
    readonly TEXTURE27: 0x84DB;
    readonly TEXTURE28: 0x84DC;
    readonly TEXTURE29: 0x84DD;
    readonly TEXTURE30: 0x84DE;
    readonly TEXTURE31: 0x84DF;
    readonly ACTIVE_TEXTURE: 0x84E0;
    readonly REPEAT: 0x2901;
    readonly CLAMP_TO_EDGE: 0x812F;
    readonly MIRRORED_REPEAT: 0x8370;
    readonly FLOAT_VEC2: 0x8B50;
    readonly FLOAT_VEC3: 0x8B51;
    readonly FLOAT_VEC4: 0x8B52;
    readonly INT_VEC2: 0x8B53;
    readonly INT_VEC3: 0x8B54;
    readonly INT_VEC4: 0x8B55;
    readonly BOOL: 0x8B56;
    readonly BOOL_VEC2: 0x8B57;
    readonly BOOL_VEC3: 0x8B58;
    readonly BOOL_VEC4: 0x8B59;
    readonly FLOAT_MAT2: 0x8B5A;
    readonly FLOAT_MAT3: 0x8B5B;
    readonly FLOAT_MAT4: 0x8B5C;
    readonly SAMPLER_2D: 0x8B5E;
    readonly SAMPLER_CUBE: 0x8B60;
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622;
    readonly VERTEX_ATTRIB_ARRAY_SIZE: 0x8623;
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624;
    readonly VERTEX_ATTRIB_ARRAY_TYPE: 0x8625;
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A;
    readonly VERTEX_ATTRIB_ARRAY_POINTER: 0x8645;
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F;
    readonly IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A;
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B;
    readonly COMPILE_STATUS: 0x8B81;
    readonly LOW_FLOAT: 0x8DF0;
    readonly MEDIUM_FLOAT: 0x8DF1;
    readonly HIGH_FLOAT: 0x8DF2;
    readonly LOW_INT: 0x8DF3;
    readonly MEDIUM_INT: 0x8DF4;
    readonly HIGH_INT: 0x8DF5;
    readonly FRAMEBUFFER: 0x8D40;
    readonly RENDERBUFFER: 0x8D41;
    readonly RGBA4: 0x8056;
    readonly RGB5_A1: 0x8057;
    readonly RGBA8: 0x8058;
    readonly RGB565: 0x8D62;
    readonly DEPTH_COMPONENT16: 0x81A5;
    readonly STENCIL_INDEX8: 0x8D48;
    readonly DEPTH_STENCIL: 0x84F9;
    readonly RENDERBUFFER_WIDTH: 0x8D42;
    readonly RENDERBUFFER_HEIGHT: 0x8D43;
    readonly RENDERBUFFER_INTERNAL_FORMAT: 0x8D44;
    readonly RENDERBUFFER_RED_SIZE: 0x8D50;
    readonly RENDERBUFFER_GREEN_SIZE: 0x8D51;
    readonly RENDERBUFFER_BLUE_SIZE: 0x8D52;
    readonly RENDERBUFFER_ALPHA_SIZE: 0x8D53;
    readonly RENDERBUFFER_DEPTH_SIZE: 0x8D54;
    readonly RENDERBUFFER_STENCIL_SIZE: 0x8D55;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0;
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2;
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3;
    readonly COLOR_ATTACHMENT0: 0x8CE0;
    readonly DEPTH_ATTACHMENT: 0x8D00;
    readonly STENCIL_ATTACHMENT: 0x8D20;
    readonly DEPTH_STENCIL_ATTACHMENT: 0x821A;
    readonly NONE: 0;
    readonly FRAMEBUFFER_COMPLETE: 0x8CD5;
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6;
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7;
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9;
    readonly FRAMEBUFFER_UNSUPPORTED: 0x8CDD;
    readonly FRAMEBUFFER_BINDING: 0x8CA6;
    readonly RENDERBUFFER_BINDING: 0x8CA7;
    readonly MAX_RENDERBUFFER_SIZE: 0x84E8;
    readonly INVALID_FRAMEBUFFER_OPERATION: 0x0506;
    readonly UNPACK_FLIP_Y_WEBGL: 0x9240;
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241;
    readonly CONTEXT_LOST_WEBGL: 0x9242;
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243;
    readonly BROWSER_DEFAULT_WEBGL: 0x9244;
}

interface WebGLRenderingContextOverloads {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bufferData) */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: AllowSharedBufferSource | null, usage: GLenum): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/bufferSubData) */
    bufferSubData(target: GLenum, offset: GLintptr, data: AllowSharedBufferSource): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) */
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) */
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/readPixels) */
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texImage2D) */
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/texSubImage2D) */
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform) */
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniformMatrix) */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLSampler) */
interface WebGLSampler {
}

declare var WebGLSampler: {
    prototype: WebGLSampler;
    new(): WebGLSampler;
};

/**
 * The WebGLShader is part of the WebGL API and can either be a vertex or a fragment shader. A WebGLProgram requires both types of shaders.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShader)
 */
interface WebGLShader {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
};

/**
 * Part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getShaderPrecisionFormat() method.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat)
 */
interface WebGLShaderPrecisionFormat {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/precision) */
    readonly precision: GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax) */
    readonly rangeMax: GLint;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin) */
    readonly rangeMin: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLSync) */
interface WebGLSync {
}

declare var WebGLSync: {
    prototype: WebGLSync;
    new(): WebGLSync;
};

/**
 * Part of the WebGL API and represents an opaque texture object providing storage and state for texturing operations.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLTexture)
 */
interface WebGLTexture {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLTransformFeedback) */
interface WebGLTransformFeedback {
}

declare var WebGLTransformFeedback: {
    prototype: WebGLTransformFeedback;
    new(): WebGLTransformFeedback;
};

/**
 * Part of the WebGL API and represents the location of a uniform variable in a shader program.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLUniformLocation)
 */
interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject) */
interface WebGLVertexArrayObject {
}

declare var WebGLVertexArrayObject: {
    prototype: WebGLVertexArrayObject;
    new(): WebGLVertexArrayObject;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject) */
interface WebGLVertexArrayObjectOES {
}

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

/**
 * Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket)
 */
interface WebSocket extends EventTarget {
    /**
     * Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:
     *
     * Can be set, to change how binary data is returned. The default is "blob".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/binaryType)
     */
    binaryType: BinaryType;
    /**
     * Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.
     *
     * If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/bufferedAmount)
     */
    readonly bufferedAmount: number;
    /**
     * Returns the extensions selected by the server, if any.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/extensions)
     */
    readonly extensions: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close_event) */
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/error_event) */
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/message_event) */
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/open_event) */
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    /**
     * Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/protocol)
     */
    readonly protocol: string;
    /**
     * Returns the state of the WebSocket object's connection. It can have the values described below.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/readyState)
     */
    readonly readyState: number;
    /**
     * Returns the URL that was used to establish the WebSocket connection.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/url)
     */
    readonly url: string;
    /**
     * Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close)
     */
    close(code?: number, reason?: string): void;
    /**
     * Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/send)
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string | URL, protocols?: string | string[]): WebSocket;
    readonly CONNECTING: 0;
    readonly OPEN: 1;
    readonly CLOSING: 2;
    readonly CLOSED: 3;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport)
 */
interface WebTransport {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/closed) */
    readonly closed: Promise<WebTransportCloseInfo>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/datagrams) */
    readonly datagrams: WebTransportDatagramDuplexStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/incomingBidirectionalStreams) */
    readonly incomingBidirectionalStreams: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/incomingUnidirectionalStreams) */
    readonly incomingUnidirectionalStreams: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/ready) */
    readonly ready: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/close) */
    close(closeInfo?: WebTransportCloseInfo): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/createBidirectionalStream) */
    createBidirectionalStream(options?: WebTransportSendStreamOptions): Promise<WebTransportBidirectionalStream>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransport/createUnidirectionalStream) */
    createUnidirectionalStream(options?: WebTransportSendStreamOptions): Promise<WritableStream>;
}

declare var WebTransport: {
    prototype: WebTransport;
    new(url: string | URL, options?: WebTransportOptions): WebTransport;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream)
 */
interface WebTransportBidirectionalStream {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/readable) */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/writable) */
    readonly writable: WritableStream;
}

declare var WebTransportBidirectionalStream: {
    prototype: WebTransportBidirectionalStream;
    new(): WebTransportBidirectionalStream;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream)
 */
interface WebTransportDatagramDuplexStream {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/incomingHighWaterMark) */
    incomingHighWaterMark: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge) */
    incomingMaxAge: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/maxDatagramSize) */
    readonly maxDatagramSize: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/outgoingHighWaterMark) */
    outgoingHighWaterMark: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) */
    outgoingMaxAge: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/readable) */
    readonly readable: ReadableStream;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportDatagramDuplexStream/writable) */
    readonly writable: WritableStream;
}

declare var WebTransportDatagramDuplexStream: {
    prototype: WebTransportDatagramDuplexStream;
    new(): WebTransportDatagramDuplexStream;
};

/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError)
 */
interface WebTransportError extends DOMException {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError/source) */
    readonly source: WebTransportErrorSource;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebTransportError/streamErrorCode) */
    readonly streamErrorCode: number | null;
}

declare var WebTransportError: {
    prototype: WebTransportError;
    new(message?: string, options?: WebTransportErrorOptions): WebTransportError;
};

/**
 * This ServiceWorker API interface represents the scope of a service worker client that is a document in a browser context, controlled by an active worker. The service worker client independently selects and uses a service worker for its own loading and sub-resources.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient)
 */
interface WindowClient extends Client {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focused) */
    readonly focused: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/visibilityState) */
    readonly visibilityState: DocumentVisibilityState;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/focus) */
    focus(): Promise<WindowClient>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WindowClient/navigate) */
    navigate(url: string | URL): Promise<WindowClient | null>;
}

declare var WindowClient: {
    prototype: WindowClient;
    new(): WindowClient;
};

interface WindowOrWorkerGlobalScope {
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)
     */
    readonly caches: CacheStorage;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated) */
    readonly crossOriginIsolated: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto) */
    readonly crypto: Crypto;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB) */
    readonly indexedDB: IDBFactory;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext) */
    readonly isSecureContext: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin) */
    readonly origin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance) */
    readonly performance: Performance;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob) */
    atob(data: string): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa) */
    btoa(data: string): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval) */
    clearInterval(id: number | undefined): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout) */
    clearTimeout(id: number | undefined): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap) */
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch) */
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask) */
    queueMicrotask(callback: VoidFunction): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError) */
    reportError(e: any): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval) */
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout) */
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone) */
    structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;
}

interface WorkerEventMap extends AbstractWorkerEventMap, MessageEventTargetEventMap {
}

/**
 * This Web Workers API interface represents a background task that can be easily created and can send messages back to its creator. Creating a worker is as simple as calling the Worker() constructor and specifying a script to be run in the worker thread.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker)
 */
interface Worker extends EventTarget, AbstractWorker, MessageEventTarget<Worker> {
    /**
     * Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)
     */
    postMessage(message: any, transfer: Transferable[]): void;
    postMessage(message: any, options?: StructuredSerializeOptions): void;
    /**
     * Aborts worker's associated global environment.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Worker/terminate)
     */
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Worker: {
    prototype: Worker;
    new(scriptURL: string | URL, options?: WorkerOptions): Worker;
};

interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent;
    "languagechange": Event;
    "offline": Event;
    "online": Event;
    "rejectionhandled": PromiseRejectionEvent;
    "unhandledrejection": PromiseRejectionEvent;
}

/**
 * This Web Workers API interface is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by Window objects \u2014 in this case event handlers, the console or the associated WorkerNavigator object. Each WorkerGlobalScope has its own event loop.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope)
 */
interface WorkerGlobalScope extends EventTarget, FontFaceSource, WindowOrWorkerGlobalScope {
    /**
     * Returns workerGlobal's WorkerLocation object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
     */
    readonly location: WorkerLocation;
    /**
     * Returns workerGlobal's WorkerNavigator object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
     */
    readonly navigator: WorkerNavigator;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event) */
    onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event) */
    onlanguagechange: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event) */
    onoffline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event) */
    ononline: ((this: WorkerGlobalScope, ev: Event) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) */
    onrejectionhandled: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) */
    onunhandledrejection: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
    /**
     * Returns workerGlobal.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
     */
    readonly self: WorkerGlobalScope & typeof globalThis;
    /**
     * Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss).
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
     */
    importScripts(...urls: (string | URL)[]): void;
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WorkerGlobalScope: {
    prototype: WorkerGlobalScope;
    new(): WorkerGlobalScope;
};

/**
 * The absolute location of the script executed by the Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.location property obtained by calling self.location.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation)
 */
interface WorkerLocation {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hash) */
    readonly hash: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/host) */
    readonly host: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/hostname) */
    readonly hostname: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/href) */
    readonly href: string;
    toString(): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/origin) */
    readonly origin: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/pathname) */
    readonly pathname: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/port) */
    readonly port: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/protocol) */
    readonly protocol: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerLocation/search) */
    readonly search: string;
}

declare var WorkerLocation: {
    prototype: WorkerLocation;
    new(): WorkerLocation;
};

/**
 * A subset of the Navigator interface allowed to be accessed from a Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.navigator property obtained by calling window.self.navigator.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator)
 */
interface WorkerNavigator extends NavigatorBadge, NavigatorConcurrentHardware, NavigatorID, NavigatorLanguage, NavigatorLocks, NavigatorOnLine, NavigatorStorage {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/mediaCapabilities) */
    readonly mediaCapabilities: MediaCapabilities;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/permissions) */
    readonly permissions: Permissions;
    /**
     * Available only in secure contexts.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/serviceWorker)
     */
    readonly serviceWorker: ServiceWorkerContainer;
}

declare var WorkerNavigator: {
    prototype: WorkerNavigator;
    new(): WorkerNavigator;
};

/**
 * This Streams API interface provides\xA0a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream)
 */
interface WritableStream<W = any> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/locked) */
    readonly locked: boolean;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/abort) */
    abort(reason?: any): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/close) */
    close(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/getWriter) */
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare var WritableStream: {
    prototype: WritableStream;
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};

/**
 * This Streams API interface represents a controller allowing control of a\xA0WritableStream's state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController)
 */
interface WritableStreamDefaultController {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/signal) */
    readonly signal: AbortSignal;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/error) */
    error(e?: any): void;
}

declare var WritableStreamDefaultController: {
    prototype: WritableStreamDefaultController;
    new(): WritableStreamDefaultController;
};

/**
 * This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter)
 */
interface WritableStreamDefaultWriter<W = any> {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/closed) */
    readonly closed: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/desiredSize) */
    readonly desiredSize: number | null;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/ready) */
    readonly ready: Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/abort) */
    abort(reason?: any): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/close) */
    close(): Promise<void>;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/releaseLock) */
    releaseLock(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/write) */
    write(chunk?: W): Promise<void>;
}

declare var WritableStreamDefaultWriter: {
    prototype: WritableStreamDefaultWriter;
    new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

/**
 * Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest)
 */
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readystatechange_event) */
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
    /**
     * Returns client's state.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/readyState)
     */
    readonly readyState: number;
    /**
     * Returns the response body.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/response)
     */
    readonly response: any;
    /**
     * Returns response as text.
     *
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseText)
     */
    readonly responseText: string;
    /**
     * Returns the response type.
     *
     * Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
     *
     * When set: setting to "document" is ignored if current global object is not a Window object.
     *
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseType)
     */
    responseType: XMLHttpRequestResponseType;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseURL) */
    readonly responseURL: string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/status) */
    readonly status: number;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/statusText) */
    readonly statusText: string;
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the request has not yet completed, and this's synchronous flag is unset, a timeout event will then be dispatched, or a "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     *
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/timeout)
     */
    timeout: number;
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/upload)
     */
    readonly upload: XMLHttpRequestUpload;
    /**
     * True when credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response. Initially false.
     *
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/withCredentials)
     */
    withCredentials: boolean;
    /**
     * Cancels any network activity.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/abort)
     */
    abort(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getAllResponseHeaders) */
    getAllResponseHeaders(): string;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getResponseHeader) */
    getResponseHeader(name: string): string | null;
    /**
     * Sets the request method, request URL, and synchronous flag.
     *
     * Throws a "SyntaxError" DOMException if either method is not a valid method or url cannot be parsed.
     *
     * Throws a "SecurityError" DOMException if method is a case-insensitive match for \`CONNECT\`, \`TRACE\`, or \`TRACK\`.
     *
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/open)
     */
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * Acts as if the \`Content-Type\` header value for a response is mime. (It does not change the header.)
     *
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/overrideMimeType)
     */
    overrideMimeType(mime: string): void;
    /**
     * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/send)
     */
    send(body?: XMLHttpRequestBodyInit | null): void;
    /**
     * Combines a header in author request headers.
     *
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     *
     * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/setRequestHeader)
     */
    setRequestHeader(name: string, value: string): void;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>;
    "error": ProgressEvent<XMLHttpRequestEventTarget>;
    "load": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>;
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>;
    "progress": ProgressEvent<XMLHttpRequestEventTarget>;
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>;
}

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestEventTarget) */
interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/XMLHttpRequestUpload) */
interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console) */
interface Console {
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/assert_static) */
    assert(condition?: boolean, ...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/clear_static) */
    clear(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/count_static) */
    count(label?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/countReset_static) */
    countReset(label?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static) */
    debug(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dir_static) */
    dir(item?: any, options?: any): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dirxml_static) */
    dirxml(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static) */
    error(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/group_static) */
    group(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupCollapsed_static) */
    groupCollapsed(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupEnd_static) */
    groupEnd(): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static) */
    info(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static) */
    log(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static) */
    table(tabularData?: any, properties?: string[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/time_static) */
    time(label?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static) */
    timeEnd(label?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeLog_static) */
    timeLog(label?: string, ...data: any[]): void;
    timeStamp(label?: string): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static) */
    trace(...data: any[]): void;
    /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static) */
    warn(...data: any[]): void;
}

declare var console: Console;

declare namespace WebAssembly {
    interface CompileError extends Error {
    }

    var CompileError: {
        prototype: CompileError;
        new(message?: string): CompileError;
        (message?: string): CompileError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Global) */
    interface Global<T extends ValueType = ValueType> {
        value: ValueTypeMap[T];
        valueOf(): ValueTypeMap[T];
    }

    var Global: {
        prototype: Global;
        new<T extends ValueType = ValueType>(descriptor: GlobalDescriptor<T>, v?: ValueTypeMap[T]): Global<T>;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Instance) */
    interface Instance {
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Instance/exports) */
        readonly exports: Exports;
    }

    var Instance: {
        prototype: Instance;
        new(module: Module, importObject?: Imports): Instance;
    };

    interface LinkError extends Error {
    }

    var LinkError: {
        prototype: LinkError;
        new(message?: string): LinkError;
        (message?: string): LinkError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Memory) */
    interface Memory {
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Memory/buffer) */
        readonly buffer: ArrayBuffer;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Memory/grow) */
        grow(delta: number): number;
    }

    var Memory: {
        prototype: Memory;
        new(descriptor: MemoryDescriptor): Memory;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Module) */
    interface Module {
    }

    var Module: {
        prototype: Module;
        new(bytes: BufferSource): Module;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Module/customSections_static) */
        customSections(moduleObject: Module, sectionName: string): ArrayBuffer[];
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Module/exports_static) */
        exports(moduleObject: Module): ModuleExportDescriptor[];
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Module/imports_static) */
        imports(moduleObject: Module): ModuleImportDescriptor[];
    };

    interface RuntimeError extends Error {
    }

    var RuntimeError: {
        prototype: RuntimeError;
        new(message?: string): RuntimeError;
        (message?: string): RuntimeError;
    };

    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Table) */
    interface Table {
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Table/length) */
        readonly length: number;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Table/get) */
        get(index: number): any;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Table/grow) */
        grow(delta: number, value?: any): number;
        /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/Table/set) */
        set(index: number, value?: any): void;
    }

    var Table: {
        prototype: Table;
        new(descriptor: TableDescriptor, value?: any): Table;
    };

    interface GlobalDescriptor<T extends ValueType = ValueType> {
        mutable?: boolean;
        value: T;
    }

    interface MemoryDescriptor {
        initial: number;
        maximum?: number;
        shared?: boolean;
    }

    interface ModuleExportDescriptor {
        kind: ImportExportKind;
        name: string;
    }

    interface ModuleImportDescriptor {
        kind: ImportExportKind;
        module: string;
        name: string;
    }

    interface TableDescriptor {
        element: TableKind;
        initial: number;
        maximum?: number;
    }

    interface ValueTypeMap {
        anyfunc: Function;
        externref: any;
        f32: number;
        f64: number;
        i32: number;
        i64: bigint;
        v128: never;
    }

    interface WebAssemblyInstantiatedSource {
        instance: Instance;
        module: Module;
    }

    type ImportExportKind = "function" | "global" | "memory" | "table";
    type TableKind = "anyfunc" | "externref";
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    type ImportValue = ExportValue | number;
    type Imports = Record<string, ModuleImports>;
    type ModuleImports = Record<string, ImportValue>;
    type ValueType = keyof ValueTypeMap;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/compile_static) */
    function compile(bytes: BufferSource): Promise<Module>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/compileStreaming_static) */
    function compileStreaming(source: Response | PromiseLike<Response>): Promise<Module>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/instantiate_static) */
    function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) */
    function instantiateStreaming(source: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>;
    /** [MDN Reference](https://developer.mozilla.org/docs/WebAssembly/JavaScript_interface/validate_static) */
    function validate(bytes: BufferSource): boolean;
}

interface AudioDataOutputCallback {
    (output: AudioData): void;
}

interface EncodedAudioChunkOutputCallback {
    (output: EncodedAudioChunk, metadata?: EncodedAudioChunkMetadata): void;
}

interface EncodedVideoChunkOutputCallback {
    (chunk: EncodedVideoChunk, metadata?: EncodedVideoChunkMetadata): void;
}

interface FrameRequestCallback {
    (time: DOMHighResTimeStamp): void;
}

interface LockGrantedCallback {
    (lock: Lock | null): any;
}

interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any;
}

interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

interface QueuingStrategySize<T = any> {
    (chunk: T): number;
}

interface ReportingObserverCallback {
    (reports: Report[], observer: ReportingObserver): void;
}

interface TransformerFlushCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformerStartCallback<O> {
    (controller: TransformStreamDefaultController<O>): any;
}

interface TransformerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface UnderlyingSinkAbortCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSinkCloseCallback {
    (): void | PromiseLike<void>;
}

interface UnderlyingSinkStartCallback {
    (controller: WritableStreamDefaultController): any;
}

interface UnderlyingSinkWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface UnderlyingSourceCancelCallback {
    (reason?: any): void | PromiseLike<void>;
}

interface UnderlyingSourcePullCallback<R> {
    (controller: ReadableStreamController<R>): void | PromiseLike<void>;
}

interface UnderlyingSourceStartCallback<R> {
    (controller: ReadableStreamController<R>): any;
}

interface VideoFrameOutputCallback {
    (output: VideoFrame): void;
}

interface VoidFunction {
    (): void;
}

interface WebCodecsErrorCallback {
    (error: DOMException): void;
}

/**
 * Returns dedicatedWorkerGlobal's name, i.e. the value given to the Worker constructor. Primarily useful for debugging.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/name)
 */
declare var name: string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) */
declare var onrtctransform: ((this: DedicatedWorkerGlobalScope, ev: RTCTransformEvent) => any) | null;
/**
 * Aborts dedicatedWorkerGlobal.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/close)
 */
declare function close(): void;
/**
 * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal. transfer can be passed as a list of objects that are to be transferred rather than cloned.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
 */
declare function postMessage(message: any, transfer: Transferable[]): void;
declare function postMessage(message: any, options?: StructuredSerializeOptions): void;
/**
 * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(event: Event): boolean;
/**
 * Returns workerGlobal's WorkerLocation object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/location)
 */
declare var location: WorkerLocation;
/**
 * Returns workerGlobal's WorkerNavigator object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
 */
declare var navigator: WorkerNavigator;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/error_event) */
declare var onerror: ((this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/languagechange_event) */
declare var onlanguagechange: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event) */
declare var onoffline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/online_event) */
declare var ononline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/rejectionhandled_event) */
declare var onrejectionhandled: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event) */
declare var onunhandledrejection: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null;
/**
 * Returns workerGlobal.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/self)
 */
declare var self: WorkerGlobalScope & typeof globalThis;
/**
 * Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss).
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/importScripts)
 */
declare function importScripts(...urls: (string | URL)[]): void;
/**
 * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(event: Event): boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts) */
declare var fonts: FontFaceSet;
/**
 * Available only in secure contexts.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)
 */
declare var caches: CacheStorage;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated) */
declare var crossOriginIsolated: boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto) */
declare var crypto: Crypto;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB) */
declare var indexedDB: IDBFactory;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext) */
declare var isSecureContext: boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin) */
declare var origin: string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance) */
declare var performance: Performance;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob) */
declare function atob(data: string): string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa) */
declare function btoa(data: string): string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval) */
declare function clearInterval(id: number | undefined): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout) */
declare function clearTimeout(id: number | undefined): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap) */
declare function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch) */
declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask) */
declare function queueMicrotask(callback: VoidFunction): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError) */
declare function reportError(e: any): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval) */
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout) */
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone) */
declare function structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) */
declare function cancelAnimationFrame(handle: number): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) */
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event) */
declare var onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event) */
declare var onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null;
declare function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
type AlgorithmIdentifier = Algorithm | string;
type AllowSharedBufferSource = ArrayBuffer | ArrayBufferView;
type BigInteger = Uint8Array;
type BlobPart = BufferSource | Blob | string;
type BodyInit = ReadableStream | XMLHttpRequestBodyInit;
type BufferSource = ArrayBufferView | ArrayBuffer;
type CSSKeywordish = string | CSSKeywordValue;
type CSSNumberish = number | CSSNumericValue;
type CSSPerspectiveValue = CSSNumericValue | CSSKeywordish;
type CSSUnparsedSegment = string | CSSVariableReferenceValue;
type CanvasImageSource = ImageBitmap | OffscreenCanvas | VideoFrame;
type DOMHighResTimeStamp = number;
type EpochTimeStamp = number;
type EventListenerOrEventListenerObject = EventListener | EventListenerObject;
type FileSystemWriteChunkType = BufferSource | Blob | string | WriteParams;
type Float32List = Float32Array | GLfloat[];
type FormDataEntryValue = File | string;
type GLbitfield = number;
type GLboolean = boolean;
type GLclampf = number;
type GLenum = number;
type GLfloat = number;
type GLint = number;
type GLint64 = number;
type GLintptr = number;
type GLsizei = number;
type GLsizeiptr = number;
type GLuint = number;
type GLuint64 = number;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type HeadersInit = [string, string][] | Record<string, string> | Headers;
type IDBValidKey = number | string | Date | BufferSource | IDBValidKey[];
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type ImageBufferSource = AllowSharedBufferSource | ReadableStream;
type Int32List = Int32Array | GLint[];
type MessageEventSource = MessagePort | ServiceWorker;
type NamedCurve = string;
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext;
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
type PerformanceEntryList = PerformanceEntry[];
type PushMessageDataInit = BufferSource | string;
type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
type ReportList = Report[];
type RequestInfo = Request | string;
type TexImageSource = ImageBitmap | ImageData | OffscreenCanvas | VideoFrame;
type TimerHandler = string | Function;
type Transferable = OffscreenCanvas | ImageBitmap | MessagePort | MediaSourceHandle | ReadableStream | WritableStream | TransformStream | AudioData | VideoFrame | RTCDataChannel | ArrayBuffer;
type Uint32List = Uint32Array | GLuint[];
type XMLHttpRequestBodyInit = Blob | BufferSource | FormData | URLSearchParams | string;
type AlphaOption = "discard" | "keep";
type AudioSampleFormat = "f32" | "f32-planar" | "s16" | "s16-planar" | "s32" | "s32-planar" | "u8" | "u8-planar";
type AvcBitstreamFormat = "annexb" | "avc";
type BinaryType = "arraybuffer" | "blob";
type BitrateMode = "constant" | "variable";
type CSSMathOperator = "clamp" | "invert" | "max" | "min" | "negate" | "product" | "sum";
type CSSNumericBaseType = "angle" | "flex" | "frequency" | "length" | "percent" | "resolution" | "time";
type CanvasDirection = "inherit" | "ltr" | "rtl";
type CanvasFillRule = "evenodd" | "nonzero";
type CanvasFontKerning = "auto" | "none" | "normal";
type CanvasFontStretch = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded";
type CanvasFontVariantCaps = "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "bevel" | "miter" | "round";
type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";
type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";
type CanvasTextRendering = "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
type ClientTypes = "all" | "sharedworker" | "window" | "worker";
type CodecState = "closed" | "configured" | "unconfigured";
type ColorGamut = "p3" | "rec2020" | "srgb";
type ColorSpaceConversion = "default" | "none";
type CompressionFormat = "deflate" | "deflate-raw" | "gzip";
type DocumentVisibilityState = "hidden" | "visible";
type EncodedAudioChunkType = "delta" | "key";
type EncodedVideoChunkType = "delta" | "key";
type EndingType = "native" | "transparent";
type FileSystemHandleKind = "directory" | "file";
type FontDisplay = "auto" | "block" | "fallback" | "optional" | "swap";
type FontFaceLoadStatus = "error" | "loaded" | "loading" | "unloaded";
type FontFaceSetLoadStatus = "loaded" | "loading";
type FrameType = "auxiliary" | "nested" | "none" | "top-level";
type GlobalCompositeOperation = "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
type HardwareAcceleration = "no-preference" | "prefer-hardware" | "prefer-software";
type HdrMetadataType = "smpteSt2086" | "smpteSt2094-10" | "smpteSt2094-40";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "done" | "pending";
type IDBTransactionDurability = "default" | "relaxed" | "strict";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageOrientation = "flipY" | "from-image" | "none";
type ImageSmoothingQuality = "high" | "low" | "medium";
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
type KeyType = "private" | "public" | "secret";
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey";
type LatencyMode = "quality" | "realtime";
type LockMode = "exclusive" | "shared";
type MediaDecodingType = "file" | "media-source" | "webrtc";
type MediaEncodingType = "record" | "webrtc";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OffscreenRenderingContextId = "2d" | "bitmaprenderer" | "webgl" | "webgl2" | "webgpu";
type OpusBitstreamFormat = "ogg" | "opus";
type PermissionName = "camera" | "geolocation" | "microphone" | "midi" | "notifications" | "persistent-storage" | "push" | "screen-wake-lock" | "storage-access";
type PermissionState = "denied" | "granted" | "prompt";
type PredefinedColorSpace = "display-p3" | "srgb";
type PremultiplyAlpha = "default" | "none" | "premultiply";
type PushEncryptionKeyName = "auth" | "p256dh";
type RTCDataChannelState = "closed" | "closing" | "connecting" | "open";
type RTCEncodedVideoFrameType = "delta" | "empty" | "key";
type ReadableStreamReaderMode = "byob";
type ReadableStreamType = "bytes";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestPriority = "auto" | "high" | "low";
type RequestRedirect = "error" | "follow" | "manual";
type ResizeQuality = "high" | "low" | "medium" | "pixelated";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type SecurityPolicyViolationEventDisposition = "enforce" | "report";
type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant";
type ServiceWorkerUpdateViaCache = "all" | "imports" | "none";
type TransferFunction = "hlg" | "pq" | "srgb";
type VideoColorPrimaries = "bt470bg" | "bt709" | "smpte170m";
type VideoEncoderBitrateMode = "constant" | "quantizer" | "variable";
type VideoMatrixCoefficients = "bt470bg" | "bt709" | "rgb" | "smpte170m";
type VideoPixelFormat = "BGRA" | "BGRX" | "I420" | "I420A" | "I422" | "I444" | "NV12" | "RGBA" | "RGBX";
type VideoTransferCharacteristics = "bt709" | "iec61966-2-1" | "smpte170m";
type WebGLPowerPreference = "default" | "high-performance" | "low-power";
type WebTransportCongestionControl = "default" | "low-latency" | "throughput";
type WebTransportErrorSource = "session" | "stream";
type WorkerType = "classic" | "module";
type WriteCommandType = "seek" | "truncate" | "write";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
`, "lib.webworker.importscripts.d.ts": '/// <reference no-default-lib="true"/>\ndeclare function importScripts(...urls:string[]):void;', "lib.webworker.iterable.d.ts": '/// <reference no-default-lib="true"/>\ninterface CSSNumericArray{[Symbol.iterator]():ArrayIterator<CSSNumericValue>;entries():ArrayIterator<[number,CSSNumericValue]>;keys():ArrayIterator<number>;values():ArrayIterator<CSSNumericValue>;}interface CSSTransformValue{[Symbol.iterator]():ArrayIterator<CSSTransformComponent>;entries():ArrayIterator<[number,CSSTransformComponent]>;keys():ArrayIterator<number>;values():ArrayIterator<CSSTransformComponent>;}interface CSSUnparsedValue{[Symbol.iterator]():ArrayIterator<CSSUnparsedSegment>;entries():ArrayIterator<[number,CSSUnparsedSegment]>;keys():ArrayIterator<number>;values():ArrayIterator<CSSUnparsedSegment>;}interface Cache{addAll(requests:Iterable<RequestInfo>):Promise<void>;}interface CanvasPath{roundRect(x:number,y:number,w:number,h:number,radii?:number|DOMPointInit|Iterable<number|DOMPointInit>):void;}interface CanvasPathDrawingStyles{setLineDash(segments:Iterable<number>):void;}interface DOMStringList{[Symbol.iterator]():ArrayIterator<string>;}interface FileList{[Symbol.iterator]():ArrayIterator<File>;}interface FontFaceSet extends Set<FontFace>{}interface FormDataIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():FormDataIterator<T>;}interface FormData{[Symbol.iterator]():FormDataIterator<[string,FormDataEntryValue]>;entries():FormDataIterator<[string,FormDataEntryValue]>;keys():FormDataIterator<string>;values():FormDataIterator<FormDataEntryValue>;}interface HeadersIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():HeadersIterator<T>;}interface Headers{[Symbol.iterator]():HeadersIterator<[string,string]>;entries():HeadersIterator<[string,string]>;keys():HeadersIterator<string>;values():HeadersIterator<string>;}interface IDBDatabase{transaction(storeNames:string|Iterable<string>,mode?:IDBTransactionMode,options?:IDBTransactionOptions):IDBTransaction;}interface IDBObjectStore{createIndex(name:string,keyPath:string|Iterable<string>,options?:IDBIndexParameters):IDBIndex;}interface ImageTrackList{[Symbol.iterator]():ArrayIterator<ImageTrack>;}interface MessageEvent<T=any>{initMessageEvent(type:string,bubbles?:boolean,cancelable?:boolean,data?:any,origin?:string,lastEventId?:string,source?:MessageEventSource|null,ports?:Iterable<MessagePort>):void;}interface StylePropertyMapReadOnlyIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():StylePropertyMapReadOnlyIterator<T>;}interface StylePropertyMapReadOnly{[Symbol.iterator]():StylePropertyMapReadOnlyIterator<[string,Iterable<CSSStyleValue>]>;entries():StylePropertyMapReadOnlyIterator<[string,Iterable<CSSStyleValue>]>;keys():StylePropertyMapReadOnlyIterator<string>;values():StylePropertyMapReadOnlyIterator<Iterable<CSSStyleValue>>;}interface SubtleCrypto{deriveKey(algorithm:AlgorithmIdentifier|EcdhKeyDeriveParams|HkdfParams|Pbkdf2Params,baseKey:CryptoKey,derivedKeyType:AlgorithmIdentifier|AesDerivedKeyParams|HmacImportParams|HkdfParams|Pbkdf2Params,extractable:boolean,keyUsages:Iterable<KeyUsage>):Promise<CryptoKey>;generateKey(algorithm:"Ed25519"|{name:"Ed25519"},extractable:boolean,keyUsages:ReadonlyArray<"sign"|"verify">):Promise<CryptoKeyPair>;generateKey(algorithm:RsaHashedKeyGenParams|EcKeyGenParams,extractable:boolean,keyUsages:ReadonlyArray<KeyUsage>):Promise<CryptoKeyPair>;generateKey(algorithm:AesKeyGenParams|HmacKeyGenParams|Pbkdf2Params,extractable:boolean,keyUsages:ReadonlyArray<KeyUsage>):Promise<CryptoKey>;generateKey(algorithm:AlgorithmIdentifier,extractable:boolean,keyUsages:Iterable<KeyUsage>):Promise<CryptoKeyPair|CryptoKey>;importKey(format:"jwk",keyData:JsonWebKey,algorithm:AlgorithmIdentifier|RsaHashedImportParams|EcKeyImportParams|HmacImportParams|AesKeyAlgorithm,extractable:boolean,keyUsages:ReadonlyArray<KeyUsage>):Promise<CryptoKey>;importKey(format:Exclude<KeyFormat,"jwk">,keyData:BufferSource,algorithm:AlgorithmIdentifier|RsaHashedImportParams|EcKeyImportParams|HmacImportParams|AesKeyAlgorithm,extractable:boolean,keyUsages:Iterable<KeyUsage>):Promise<CryptoKey>;unwrapKey(format:KeyFormat,wrappedKey:BufferSource,unwrappingKey:CryptoKey,unwrapAlgorithm:AlgorithmIdentifier|RsaOaepParams|AesCtrParams|AesCbcParams|AesGcmParams,unwrappedKeyAlgorithm:AlgorithmIdentifier|RsaHashedImportParams|EcKeyImportParams|HmacImportParams|AesKeyAlgorithm,extractable:boolean,keyUsages:Iterable<KeyUsage>):Promise<CryptoKey>;}interface URLSearchParamsIterator<T>extends IteratorObject<T,BuiltinIteratorReturn,unknown>{[Symbol.iterator]():URLSearchParamsIterator<T>;}interface URLSearchParams{[Symbol.iterator]():URLSearchParamsIterator<[string,string]>;entries():URLSearchParamsIterator<[string,string]>;keys():URLSearchParamsIterator<string>;values():URLSearchParamsIterator<string>;}interface WEBGL_draw_buffers{drawBuffersWEBGL(buffers:Iterable<GLenum>):void;}interface WEBGL_multi_draw{multiDrawArraysInstancedWEBGL(mode:GLenum,firstsList:Int32Array|Iterable<GLint>,firstsOffset:number,countsList:Int32Array|Iterable<GLsizei>,countsOffset:number,instanceCountsList:Int32Array|Iterable<GLsizei>,instanceCountsOffset:number,drawcount:GLsizei):void;multiDrawArraysWEBGL(mode:GLenum,firstsList:Int32Array|Iterable<GLint>,firstsOffset:number,countsList:Int32Array|Iterable<GLsizei>,countsOffset:number,drawcount:GLsizei):void;multiDrawElementsInstancedWEBGL(mode:GLenum,countsList:Int32Array|Iterable<GLsizei>,countsOffset:number,type:GLenum,offsetsList:Int32Array|Iterable<GLsizei>,offsetsOffset:number,instanceCountsList:Int32Array|Iterable<GLsizei>,instanceCountsOffset:number,drawcount:GLsizei):void;multiDrawElementsWEBGL(mode:GLenum,countsList:Int32Array|Iterable<GLsizei>,countsOffset:number,type:GLenum,offsetsList:Int32Array|Iterable<GLsizei>,offsetsOffset:number,drawcount:GLsizei):void;}interface WebGL2RenderingContextBase{clearBufferfv(buffer:GLenum,drawbuffer:GLint,values:Iterable<GLfloat>,srcOffset?:number):void;clearBufferiv(buffer:GLenum,drawbuffer:GLint,values:Iterable<GLint>,srcOffset?:number):void;clearBufferuiv(buffer:GLenum,drawbuffer:GLint,values:Iterable<GLuint>,srcOffset?:number):void;drawBuffers(buffers:Iterable<GLenum>):void;getActiveUniforms(program:WebGLProgram,uniformIndices:Iterable<GLuint>,pname:GLenum):any;getUniformIndices(program:WebGLProgram,uniformNames:Iterable<string>):Iterable<GLuint>|null;invalidateFramebuffer(target:GLenum,attachments:Iterable<GLenum>):void;invalidateSubFramebuffer(target:GLenum,attachments:Iterable<GLenum>,x:GLint,y:GLint,width:GLsizei,height:GLsizei):void;transformFeedbackVaryings(program:WebGLProgram,varyings:Iterable<string>,bufferMode:GLenum):void;uniform1uiv(location:WebGLUniformLocation|null,data:Iterable<GLuint>,srcOffset?:number,srcLength?:GLuint):void;uniform2uiv(location:WebGLUniformLocation|null,data:Iterable<GLuint>,srcOffset?:number,srcLength?:GLuint):void;uniform3uiv(location:WebGLUniformLocation|null,data:Iterable<GLuint>,srcOffset?:number,srcLength?:GLuint):void;uniform4uiv(location:WebGLUniformLocation|null,data:Iterable<GLuint>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix2x3fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix2x4fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix3x2fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix3x4fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix4x2fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix4x3fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;vertexAttribI4iv(index:GLuint,values:Iterable<GLint>):void;vertexAttribI4uiv(index:GLuint,values:Iterable<GLuint>):void;}interface WebGL2RenderingContextOverloads{uniform1fv(location:WebGLUniformLocation|null,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniform1iv(location:WebGLUniformLocation|null,data:Iterable<GLint>,srcOffset?:number,srcLength?:GLuint):void;uniform2fv(location:WebGLUniformLocation|null,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniform2iv(location:WebGLUniformLocation|null,data:Iterable<GLint>,srcOffset?:number,srcLength?:GLuint):void;uniform3fv(location:WebGLUniformLocation|null,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniform3iv(location:WebGLUniformLocation|null,data:Iterable<GLint>,srcOffset?:number,srcLength?:GLuint):void;uniform4fv(location:WebGLUniformLocation|null,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniform4iv(location:WebGLUniformLocation|null,data:Iterable<GLint>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix2fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix3fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;uniformMatrix4fv(location:WebGLUniformLocation|null,transpose:GLboolean,data:Iterable<GLfloat>,srcOffset?:number,srcLength?:GLuint):void;}interface WebGLRenderingContextBase{vertexAttrib1fv(index:GLuint,values:Iterable<GLfloat>):void;vertexAttrib2fv(index:GLuint,values:Iterable<GLfloat>):void;vertexAttrib3fv(index:GLuint,values:Iterable<GLfloat>):void;vertexAttrib4fv(index:GLuint,values:Iterable<GLfloat>):void;}interface WebGLRenderingContextOverloads{uniform1fv(location:WebGLUniformLocation|null,v:Iterable<GLfloat>):void;uniform1iv(location:WebGLUniformLocation|null,v:Iterable<GLint>):void;uniform2fv(location:WebGLUniformLocation|null,v:Iterable<GLfloat>):void;uniform2iv(location:WebGLUniformLocation|null,v:Iterable<GLint>):void;uniform3fv(location:WebGLUniformLocation|null,v:Iterable<GLfloat>):void;uniform3iv(location:WebGLUniformLocation|null,v:Iterable<GLint>):void;uniform4fv(location:WebGLUniformLocation|null,v:Iterable<GLfloat>):void;uniform4iv(location:WebGLUniformLocation|null,v:Iterable<GLint>):void;uniformMatrix2fv(location:WebGLUniformLocation|null,transpose:GLboolean,value:Iterable<GLfloat>):void;uniformMatrix3fv(location:WebGLUniformLocation|null,transpose:GLboolean,value:Iterable<GLfloat>):void;uniformMatrix4fv(location:WebGLUniformLocation|null,transpose:GLboolean,value:Iterable<GLfloat>):void;}', "/node_modules/z3-solver/build/browser.d.ts": "import{Z3HighLevel}from'./high-level';import{Z3LowLevel}from'./low-level';export*from'./high-level/types';export{Z3Core,Z3LowLevel}from'./low-level';export*from'./low-level/types.__GENERATED__';export declare function init():Promise<Z3LowLevel&Z3HighLevel>;", "/node_modules/z3-solver/build/high-level/high-level.d.ts": "import{Z3Core}from'../low-level';import{Z3HighLevel}from'./types';export declare function createApi(Z3:Z3Core):Z3HighLevel;", "/node_modules/z3-solver/build/high-level/index.d.ts": "export*from'./high-level';export*from'./types';", "/node_modules/z3-solver/build/high-level/types.d.ts": "import{Z3_ast,Z3_ast_map,Z3_ast_vector,Z3_context,Z3_decl_kind,Z3_func_decl,Z3_func_interp,Z3_model,Z3_probe,Z3_solver,Z3_sort,Z3_sort_kind,Z3_symbol,Z3_tactic}from'../low-level';export declare type AnySort<Name extends string='main'>=Sort<Name>|BoolSort<Name>|ArithSort<Name>|BitVecSort<number,Name>|SMTArraySort<Name,[AnySort<Name>,...AnySort<Name>[]],AnySort<Name>>;export declare type AnyExpr<Name extends string='main'>=Expr<Name>|Bool<Name>|Arith<Name>|IntNum<Name>|RatNum<Name>|BitVec<number,Name>|BitVecNum<number,Name>|SMTArray<Name,[AnySort<Name>,...AnySort<Name>[]],AnySort<Name>>;export declare type AnyAst<Name extends string='main'>=AnyExpr<Name>|AnySort<Name>|FuncDecl<Name>;export declare type SortToExprMap<S extends AnySort<Name>,Name extends string='main'>=S extends BoolSort?Bool<Name>:S extends ArithSort<Name>?Arith<Name>:S extends BitVecSort<infer Size,Name>?BitVec<Size,Name>:S extends SMTArraySort<Name,infer DomainSort,infer RangeSort>?SMTArray<Name,DomainSort,RangeSort>:S extends Sort<Name>?Expr<Name,S,Z3_ast>:never;export declare type CoercibleToExprMap<S extends CoercibleToExpr<Name>,Name extends string='main'>=S extends bigint?ArithSort<Name>:S extends number|CoercibleRational?RatNum<Name>:S extends boolean?Bool<Name>:S extends Expr<Name>?S:never;export declare type CoercibleFromMap<S extends AnyExpr<Name>,Name extends string='main'>=S extends Bool<Name>?(boolean|Bool<Name>):S extends IntNum<Name>?(bigint|number|IntNum<Name>):S extends RatNum<Name>?(bigint|number|CoercibleRational|RatNum<Name>):S extends Arith<Name>?(bigint|number|CoercibleRational|Arith<Name>):S extends BitVec<infer Size,Name>?(number|BitVec<Size,Name>):S extends SMTArray<Name,infer DomainSort,infer RangeSort>?SMTArray<Name,DomainSort,RangeSort>:S extends Expr<Name>?Expr<Name>:never;export declare type CoercibleRational={numerator:bigint|number;denominator:bigint|number;};export declare type CoercibleToExpr<Name extends string='main'>=number|bigint|boolean|CoercibleRational|Expr<Name>;export declare class Z3Error extends Error{}export declare class Z3AssertionError extends Z3Error{}export declare type CheckSatResult='sat'|'unsat'|'unknown';export interface ContextCtor{<Name extends string>(name:Name,options?:Record<string,any>):Context<Name>;}export interface Context<Name extends string='main'>{readonly ptr:Z3_context;readonly name:Name;interrupt():void;isModel(obj:unknown):obj is Model<Name>;isAst(obj:unknown):obj is Ast<Name>;isSort(obj:unknown):obj is Sort<Name>;isFuncDecl(obj:unknown):obj is FuncDecl<Name>;isApp(obj:unknown):boolean;isConst(obj:unknown):boolean;isExpr(obj:unknown):obj is Expr<Name>;isVar(obj:unknown):boolean;isAppOf(obj:unknown,kind:Z3_decl_kind):boolean;isBool(obj:unknown):obj is Bool<Name>;isTrue(obj:unknown):boolean;isFalse(obj:unknown):boolean;isAnd(obj:unknown):boolean;isOr(obj:unknown):boolean;isImplies(obj:unknown):boolean;isNot(obj:unknown):boolean;isEq(obj:unknown):boolean;isDistinct(obj:unknown):boolean;isArith(obj:unknown):obj is Arith<Name>;isArithSort(obj:unknown):obj is ArithSort<Name>;isInt(obj:unknown):boolean;isIntVal(obj:unknown):obj is IntNum<Name>;isIntSort(obj:unknown):boolean;isReal(obj:unknown):boolean;isRealVal(obj:unknown):obj is RatNum<Name>;isRealSort(obj:unknown):boolean;isBitVecSort(obj:unknown):obj is BitVecSort<number,Name>;isBitVec(obj:unknown):obj is BitVec<number,Name>;isBitVecVal(obj:unknown):obj is BitVecNum<number,Name>;isArraySort(obj:unknown):obj is SMTArraySort<Name,[AnySort<Name>,...AnySort<Name>[]],AnySort<Name>>;isArray(obj:unknown):obj is SMTArray<Name,[AnySort<Name>,...AnySort<Name>[]],AnySort<Name>>;isConstArray(obj:unknown):boolean;isProbe(obj:unknown):obj is Probe<Name>;isTactic(obj:unknown):obj is Tactic<Name>;isAstVector(obj:unknown):obj is AstVector<Name,AnyAst<Name>>;eqIdentity(a:Ast<Name>,b:Ast<Name>):boolean;getVarIndex(obj:Expr<Name>):number;from(primitive:boolean):Bool<Name>;from(primitive:number):IntNum<Name>|RatNum<Name>;from(primitive:CoercibleRational):RatNum<Name>;from(primitive:bigint):IntNum<Name>;from<E extends Expr<Name>>(expr:E):E;from(value:CoercibleToExpr<Name>):AnyExpr<Name>;solve(...assertions:Bool<Name>[]):Promise<Model<Name>|'unsat'|'unknown'>;readonly Solver:new(logic?:string)=>Solver<Name>;readonly Model:new()=>Model<Name>;readonly AstVector:new<Item extends Ast<Name>=AnyAst<Name>>()=>AstVector<Name,Item>;readonly AstMap:new<Key extends Ast<Name>=AnyAst<Name>,Value extends Ast<Name>=AnyAst<Name>>()=>AstMap<Name,Key,Value>;readonly Tactic:new(name:string)=>Tactic<Name>;readonly Sort:SortCreation<Name>;readonly Function:FuncDeclCreation<Name>;readonly RecFunc:RecFuncCreation<Name>;readonly Bool:BoolCreation<Name>;readonly Int:IntCreation<Name>;readonly Real:RealCreation<Name>;readonly BitVec:BitVecCreation<Name>;readonly Array:SMTArrayCreation<Name>;Const<S extends Sort<Name>>(name:string,sort:S):SortToExprMap<S,Name>;Consts<S extends Sort<Name>>(name:string|string[],sort:S):SortToExprMap<S,Name>[];FreshConst<S extends Sort<Name>>(sort:S,prefix?:string):SortToExprMap<S,Name>;Var<S extends Sort<Name>>(idx:number,sort:S):SortToExprMap<S,Name>;If(condition:Probe<Name>,onTrue:Tactic<Name>,onFalse:Tactic<Name>):Tactic<Name>;If<OnTrueRef extends CoercibleToExpr<Name>,OnFalseRef extends CoercibleToExpr<Name>>(condition:Bool<Name>|boolean,onTrue:OnTrueRef,onFalse:OnFalseRef):CoercibleToExprMap<OnTrueRef|OnFalseRef,Name>;Distinct(...args:CoercibleToExpr<Name>[]):Bool<Name>;Implies(a:Bool<Name>|boolean,b:Bool<Name>|boolean):Bool<Name>;Eq(a:CoercibleToExpr<Name>,b:CoercibleToExpr<Name>):Bool<Name>;Xor(a:Bool<Name>|boolean,b:Bool<Name>|boolean):Bool<Name>;Not(a:Probe<Name>):Probe<Name>;Not(a:Bool<Name>|boolean):Bool<Name>;And():Bool<Name>;And(vector:AstVector<Name,Bool<Name>>):Bool<Name>;And(...args:(Bool<Name>|boolean)[]):Bool<Name>;And(...args:Probe<Name>[]):Probe<Name>;Or():Bool<Name>;Or(vector:AstVector<Name,Bool<Name>>):Bool<Name>;Or(...args:(Bool<Name>|boolean)[]):Bool<Name>;Or(...args:Probe<Name>[]):Probe<Name>;ToReal(expr:Arith<Name>|bigint):Arith<Name>;ToInt(expr:Arith<Name>|number|CoercibleRational|string):Arith<Name>;IsInt(expr:Arith<Name>|number|CoercibleRational|string):Bool<Name>;Sqrt(a:Arith<Name>|number|bigint|string|CoercibleRational):Arith<Name>;Cbrt(a:Arith<Name>|number|bigint|string|CoercibleRational):Arith<Name>;BV2Int(a:BitVec<number,Name>,isSigned:boolean):Arith<Name>;Int2BV<Bits extends number>(a:Arith<Name>|bigint|number,bits:Bits):BitVec<Bits,Name>;Concat(...bitvecs:BitVec<number,Name>[]):BitVec<number,Name>;Cond(probe:Probe<Name>,onTrue:Tactic<Name>,onFalse:Tactic<Name>):Tactic<Name>;}export interface Ast<Name extends string='main',Ptr=unknown>{readonly __typename:'Ast'|Sort['__typename']|FuncDecl['__typename']|Expr['__typename'];readonly ctx:Context<Name>;readonly ptr:Ptr;get ast():Z3_ast;id():number;eqIdentity(other:Ast<Name>):boolean;neqIdentity(other:Ast<Name>):boolean;sexpr():string;hash():number;}export interface SolverCtor<Name extends string>{new():Solver<Name>;}export interface Solver<Name extends string='main'>{readonly __typename:'Solver';readonly ctx:Context<Name>;readonly ptr:Z3_solver;push():void;pop(num?:number):void;numScopes():number;reset():void;add(...exprs:(Bool<Name>|AstVector<Name,Bool<Name>>)[]):void;addAndTrack(expr:Bool<Name>,constant:Bool<Name>|string):void;assertions():AstVector<Name,Bool<Name>>;fromString(s:string):void;check(...exprs:(Bool<Name>|AstVector<Name,Bool<Name>>)[]):Promise<CheckSatResult>;model():Model<Name>;}export interface ModelCtor<Name extends string>{new():Model<Name>;}export interface Model<Name extends string='main'>extends Iterable<FuncDecl<Name>>{readonly __typename:'Model';readonly ctx:Context<Name>;readonly ptr:Z3_model;length():number;entries():IterableIterator<[number,FuncDecl<Name>]>;keys():IterableIterator<number>;values():IterableIterator<FuncDecl<Name>>;decls():FuncDecl<Name>[];sexpr():string;eval(expr:Bool<Name>,modelCompletion?:boolean):Bool<Name>;eval(expr:Arith<Name>,modelCompletion?:boolean):Arith<Name>;eval<Bits extends number=number>(expr:BitVec<Bits,Name>,modelCompletion?:boolean):BitVecNum<Bits,Name>;eval(expr:Expr<Name>,modelCompletion?:boolean):Expr<Name>;get(i:number):FuncDecl<Name>;get(from:number,to:number):FuncDecl<Name>[];get(declaration:FuncDecl<Name>):FuncInterp<Name>|Expr<Name>;get(constant:Expr<Name>):Expr<Name>;get(sort:Sort<Name>):AstVector<Name,AnyExpr<Name>>;}export interface SortCreation<Name extends string>{declare(name:string):Sort<Name>;}export interface Sort<Name extends string='main'>extends Ast<Name,Z3_sort>{readonly __typename:'Sort'|BoolSort['__typename']|ArithSort['__typename']|BitVecSort['__typename']|SMTArraySort['__typename'];kind():Z3_sort_kind;subsort(other:Sort<Name>):boolean;cast(expr:CoercibleToExpr<Name>):Expr<Name>;name():string|number;}export interface FuncInterp<Name extends string='main'>{readonly __typename:'FuncInterp';readonly ctx:Context<Name>;readonly ptr:Z3_func_interp;}export declare type FuncDeclSignature<Name extends string>=[Sort<Name>,Sort<Name>,...Sort<Name>[]];export interface FuncDeclCreation<Name extends string>{declare(name:string,...signature:FuncDeclSignature<Name>):FuncDecl<Name>;fresh(...signature:FuncDeclSignature<Name>):FuncDecl<Name>;}export interface RecFuncCreation<Name extends string>{declare(name:string,...signature:FuncDeclSignature<Name>):FuncDecl<Name>;addDefinition(f:FuncDecl<Name>,args:Expr<Name>[],body:Expr<Name>):void;}export interface FuncDecl<Name extends string='main'>extends Ast<Name,Z3_func_decl>{readonly __typename:'FuncDecl';name():string|number;arity():number;domain(i:number):Sort<Name>;range():Sort<Name>;kind():Z3_decl_kind;params():(number|string|Z3_symbol|Sort<Name>|Expr<Name>|FuncDecl<Name>)[];call(...args:CoercibleToExpr<Name>[]):AnyExpr<Name>;}export interface Expr<Name extends string='main',S extends Sort<Name>=AnySort<Name>,Ptr=unknown>extends Ast<Name,Ptr>{readonly __typename:'Expr'|Bool['__typename']|Arith['__typename']|BitVec['__typename']|SMTArray['__typename'];get sort():S;eq(other:CoercibleToExpr<Name>):Bool<Name>;neq(other:CoercibleToExpr<Name>):Bool<Name>;params():ReturnType<FuncDecl<Name>['params']>;decl():FuncDecl<Name>;numArgs():number;arg(i:number):AnyExpr<Name>;children():AnyExpr<Name>[];}export interface BoolSort<Name extends string='main'>extends Sort<Name>{readonly __typename:'BoolSort';cast(expr:Bool<Name>|boolean):Bool<Name>;cast(expr:CoercibleToExpr<Name>):never;}export interface BoolCreation<Name extends string='main'>{sort():BoolSort<Name>;const(name:string):Bool<Name>;consts(names:string|string[]):Bool<Name>[];vector(prefix:string,count:number):Bool<Name>[];fresh(prefix?:string):Bool<Name>;val(value:boolean):Bool<Name>;}export interface Bool<Name extends string='main'>extends Expr<Name,BoolSort<Name>,Z3_ast>{readonly __typename:'Bool';not():Bool<Name>;and(other:Bool<Name>|boolean):Bool<Name>;or(other:Bool<Name>|boolean):Bool<Name>;xor(other:Bool<Name>|boolean):Bool<Name>;implies(other:Bool<Name>|boolean):Bool<Name>;}export interface ArithSort<Name extends string='main'>extends Sort<Name>{readonly __typename:'ArithSort';cast(other:bigint|number|string):IntNum<Name>|RatNum<Name>;cast(other:CoercibleRational|RatNum<Name>):RatNum<Name>;cast(other:IntNum<Name>):IntNum<Name>;cast(other:bigint|number|string|Bool<Name>|Arith<Name>|CoercibleRational):Arith<Name>;cast(other:CoercibleToExpr<Name>|string):never;}export interface IntCreation<Name extends string>{sort():ArithSort<Name>;const(name:string):Arith<Name>;consts(names:string|string[]):Arith<Name>[];vector(prefix:string,count:number):Arith<Name>[];fresh(prefix?:string):Arith<Name>;val(value:bigint|number|string):IntNum<Name>;}export interface RealCreation<Name extends string>{sort():ArithSort<Name>;const(name:string):Arith<Name>;consts(names:string|string[]):Arith<Name>[];vector(prefix:string,count:number):Arith<Name>[];fresh(prefix?:string):Arith<Name>;val(value:number|string|bigint|CoercibleRational):RatNum<Name>;}export interface Arith<Name extends string='main'>extends Expr<Name,ArithSort<Name>,Z3_ast>{readonly __typename:'Arith'|IntNum['__typename']|RatNum['__typename'];add(other:Arith<Name>|number|bigint|string):Arith<Name>;mul(other:Arith<Name>|number|bigint|string):Arith<Name>;sub(other:Arith<Name>|number|bigint|string):Arith<Name>;pow(exponent:Arith<Name>|number|bigint|string):Arith<Name>;div(other:Arith<Name>|number|bigint|string):Arith<Name>;mod(other:Arith<Name>|number|bigint|string):Arith<Name>;neg():Arith<Name>;le(other:Arith<Name>|number|bigint|string):Bool<Name>;lt(other:Arith<Name>|number|bigint|string):Bool<Name>;gt(other:Arith<Name>|number|bigint|string):Bool<Name>;ge(other:Arith<Name>|number|bigint|string):Bool<Name>;}export interface IntNum<Name extends string='main'>extends Arith<Name>{readonly __typename:'IntNum';value():bigint;asString():string;asBinary():string;}export interface RatNum<Name extends string='main'>extends Arith<Name>{readonly __typename:'RatNum';value():{numerator:bigint;denominator:bigint;};numerator():IntNum<Name>;denominator():IntNum<Name>;asNumber():number;asDecimal(prec?:number):string;asString():string;}export interface BitVecSort<Bits extends number=number,Name extends string='main'>extends Sort<Name>{readonly __typename:'BitVecSort';size():Bits;cast(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;cast(other:CoercibleToExpr<Name>):Expr<Name>;}export declare type CoercibleToBitVec<Bits extends number=number,Name extends string='main'>=bigint|number|BitVec<Bits,Name>;export interface BitVecCreation<Name extends string>{sort<Bits extends number=number>(bits:Bits):BitVecSort<Bits,Name>;const<Bits extends number=number>(name:string,bits:Bits|BitVecSort<Bits,Name>):BitVec<Bits,Name>;consts<Bits extends number=number>(names:string|string[],bits:Bits|BitVecSort<Bits,Name>):BitVec<Bits,Name>[];val<Bits extends number=number>(value:bigint|number|boolean,bits:Bits|BitVecSort<Bits,Name>):BitVecNum<Bits,Name>;}export interface BitVec<Bits extends number=number,Name extends string='main'>extends Expr<Name,BitVecSort<Bits,Name>,Z3_ast>{readonly __typename:'BitVec'|BitVecNum['__typename'];size():Bits;add(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;mul(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;sub(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;sdiv(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;udiv(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;smod(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;urem(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;srem(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;neg():BitVec<Bits,Name>;or(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;and(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;nand(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;xor(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;xnor(other:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;shr(count:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;lshr(count:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;shl(count:CoercibleToBitVec<Bits,Name>):BitVec<Bits,Name>;rotateRight(count:CoercibleToBitVec<number,Name>):BitVec<Bits,Name>;rotateLeft(count:CoercibleToBitVec<number,Name>):BitVec<Bits,Name>;not():BitVec<Bits,Name>;extract(high:number,low:number):BitVec<number,Name>;signExt(count:number):BitVec<number,Name>;zeroExt(count:number):BitVec<number,Name>;repeat(count:number):BitVec<number,Name>;sle(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;ule(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;slt(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;ult(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;sge(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;uge(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;sgt(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;ugt(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;redAnd():BitVec<number,Name>;redOr():BitVec<number,Name>;addNoOverflow(other:CoercibleToBitVec<Bits,Name>,isSigned:boolean):Bool<Name>;addNoUnderflow(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;subNoOverflow(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;subNoUndeflow(other:CoercibleToBitVec<Bits,Name>,isSigned:boolean):Bool<Name>;sdivNoOverflow(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;mulNoOverflow(other:CoercibleToBitVec<Bits,Name>,isSigned:boolean):Bool<Name>;mulNoUndeflow(other:CoercibleToBitVec<Bits,Name>):Bool<Name>;negNoOverflow():Bool<Name>;}export interface BitVecNum<Bits extends number=number,Name extends string='main'>extends BitVec<Bits,Name>{readonly __typename:'BitVecNum';value():bigint;asSignedValue():bigint;asString():string;asBinaryString():string;}export interface SMTArraySort<Name extends string='main',DomainSort extends[AnySort<Name>,...AnySort<Name>[]]=[Sort<Name>,...Sort<Name>[]],RangeSort extends AnySort<Name>=AnySort<Name>>extends Sort<Name>{readonly __typename:'ArraySort';domain():DomainSort[0];domain_n<T extends number>(i:T):DomainSort[T];range():RangeSort;}export interface SMTArrayCreation<Name extends string>{sort<DomainSort extends[AnySort<Name>,...AnySort<Name>[]],RangeSort extends AnySort<Name>>(...sig:[...DomainSort,RangeSort]):SMTArraySort<Name,DomainSort,RangeSort>;const<DomainSort extends[AnySort<Name>,...AnySort<Name>[]],RangeSort extends AnySort<Name>>(name:string,...sig:[...DomainSort,RangeSort]):SMTArray<Name,DomainSort,RangeSort>;consts<DomainSort extends[AnySort<Name>,...AnySort<Name>[]],RangeSort extends AnySort<Name>>(names:string|string[],...sig:[...DomainSort,RangeSort]):SMTArray<Name,DomainSort,RangeSort>[];K<DomainSort extends AnySort<Name>,RangeSort extends AnySort<Name>>(domain:DomainSort,value:SortToExprMap<RangeSort,Name>):SMTArray<Name,[DomainSort],RangeSort>;}export declare type ArrayIndexType<Name extends string='main',DomainSort extends[AnySort<Name>,...AnySort<Name>[]]=[Sort<Name>,...Sort<Name>[]]>=[...{[Index in keyof DomainSort]:DomainSort[Index]extends AnySort<Name>?CoercibleFromMap<SortToExprMap<DomainSort[Index],Name>,Name>:DomainSort[Index];}];export interface SMTArray<Name extends string='main',DomainSort extends[AnySort<Name>,...AnySort<Name>[]]=[Sort<Name>,...Sort<Name>[]],RangeSort extends AnySort<Name>=AnySort<Name>>extends Expr<Name,SMTArraySort<Name,DomainSort,RangeSort>,Z3_ast>{readonly __typename:'Array';domain():DomainSort[0];domain_n<T extends number>(i:T):DomainSort[T];range():RangeSort;select(...indices:ArrayIndexType<Name,DomainSort>):SortToExprMap<RangeSort,Name>;store(...indicesAndValue:[...ArrayIndexType<Name,DomainSort>,CoercibleFromMap<SortToExprMap<RangeSort,Name>,Name>]):SMTArray<Name,DomainSort,RangeSort>;}export interface Probe<Name extends string='main'>{readonly __typename:'Probe';readonly ctx:Context<Name>;readonly ptr:Z3_probe;}export interface TacticCtor<Name extends string>{new(name:string):Tactic<Name>;}export interface Tactic<Name extends string='main'>{readonly __typename:'Tactic';readonly ctx:Context<Name>;readonly ptr:Z3_tactic;}export interface AstVectorCtor<Name extends string>{new<Item extends Ast<Name>=AnyAst<Name>>():AstVector<Name,Item>;}export interface AstVector<Name extends string='main',Item extends Ast<Name>=AnyAst<Name>>extends Iterable<Item>{readonly __typename:'AstVector';readonly ctx:Context<Name>;readonly ptr:Z3_ast_vector;length():number;entries():IterableIterator<[number,Item]>;keys():IterableIterator<number>;values():IterableIterator<Item>;get(i:number):Item;get(from:number,to:number):Item[];set(i:number,v:Item):void;push(v:Item):void;resize(size:number):void;has(v:Item):boolean;sexpr():string;}export interface AstMapCtor<Name extends string>{new<Key extends Ast<Name>=AnyAst<Name>,Value extends Ast<Name>=AnyAst<Name>>():AstMap<Name,Key,Value>;}export interface AstMap<Name extends string='main',Key extends Ast<Name>=AnyAst<Name>,Value extends Ast<Name>=AnyAst<Name>>extends Iterable<[Key,Value]>{readonly __typename:'AstMap';readonly ctx:Context<Name>;readonly ptr:Z3_ast_map;get size():number;entries():IterableIterator<[Key,Value]>;keys():AstVector<Name,Key>;values():IterableIterator<Value>;get(key:Key):Value|undefined;set(key:Key,value:Value):void;delete(key:Key):void;clear():void;has(key:Key):boolean;sexpr():string;}export interface Z3HighLevel{enableTrace(tag:string):void;disableTrace(tag:string):void;getVersion():{major:number;minor:number;build_number:number;revision_number:number;};getVersionString():string;getFullVersion():string;openLog(filename:string):boolean;appendLog(s:string):void;setParam(key:string,value:any):void;setParam(key:Record<string,any>):void;resetParams():void;getParam(name:string):string|null;readonly Context:ContextCtor;}", "/node_modules/z3-solver/build/high-level/utils.d.ts": "export declare function assertExhaustive(x:never):never;export declare function assert(condition:boolean,reason?:string):asserts condition;export declare function allSatisfy<T>(collection:Iterable<T>,premise:(arg:T)=>boolean):boolean|null;", "/node_modules/z3-solver/build/low-level/index.d.ts": "export*from'./types.__GENERATED__';export*from'./wrapper.__GENERATED__';export declare type Z3Core=Awaited<ReturnType<typeof import('./wrapper.__GENERATED__')['init']>>['Z3'];export declare type Z3LowLevel=Awaited<ReturnType<typeof import('./wrapper.__GENERATED__')['init']>>;", "/node_modules/z3-solver/build/low-level/types.__GENERATED__.d.ts": "interface Pointer<T extends string>extends Number{readonly __typeName:T;}interface Subpointer<T extends string,S extends string>extends Pointer<S>{readonly __typeName2:T;}export declare type Z3_error_handler=Pointer<'Z3_error_handler'>;export declare type Z3_push_eh=Pointer<'Z3_push_eh'>;export declare type Z3_pop_eh=Pointer<'Z3_pop_eh'>;export declare type Z3_fresh_eh=Pointer<'Z3_fresh_eh'>;export declare type Z3_fixed_eh=Pointer<'Z3_fixed_eh'>;export declare type Z3_eq_eh=Pointer<'Z3_eq_eh'>;export declare type Z3_final_eh=Pointer<'Z3_final_eh'>;export declare type Z3_created_eh=Pointer<'Z3_created_eh'>;export declare type Z3_decide_eh=Pointer<'Z3_decide_eh'>;export declare type Z3_on_clause_eh=Pointer<'Z3_on_clause_eh'>;export declare type Z3_symbol=Pointer<'Z3_symbol'>;export declare type Z3_literals=Pointer<'Z3_literals'>;export declare type Z3_config=Pointer<'Z3_config'>;export declare type Z3_context=Pointer<'Z3_context'>;export declare type Z3_sort=Subpointer<'Z3_sort','Z3_ast'>;export declare type Z3_func_decl=Subpointer<'Z3_func_decl','Z3_ast'>;export declare type Z3_ast=Pointer<'Z3_ast'>;export declare type Z3_app=Pointer<'Z3_app'>;export declare type Z3_pattern=Pointer<'Z3_pattern'>;export declare type Z3_model=Pointer<'Z3_model'>;export declare type Z3_constructor=Pointer<'Z3_constructor'>;export declare type Z3_constructor_list=Pointer<'Z3_constructor_list'>;export declare type Z3_params=Pointer<'Z3_params'>;export declare type Z3_param_descrs=Pointer<'Z3_param_descrs'>;export declare type Z3_parser_context=Pointer<'Z3_parser_context'>;export declare type Z3_goal=Pointer<'Z3_goal'>;export declare type Z3_tactic=Pointer<'Z3_tactic'>;export declare type Z3_probe=Pointer<'Z3_probe'>;export declare type Z3_stats=Pointer<'Z3_stats'>;export declare type Z3_solver=Pointer<'Z3_solver'>;export declare type Z3_solver_callback=Pointer<'Z3_solver_callback'>;export declare type Z3_ast_vector=Pointer<'Z3_ast_vector'>;export declare type Z3_ast_map=Pointer<'Z3_ast_map'>;export declare type Z3_apply_result=Pointer<'Z3_apply_result'>;export declare type Z3_func_interp=Pointer<'Z3_func_interp'>;export declare type Z3_func_entry=Pointer<'Z3_func_entry'>;export declare type Z3_fixedpoint=Pointer<'Z3_fixedpoint'>;export declare type Z3_optimize=Pointer<'Z3_optimize'>;export declare type Z3_rcf_num=Pointer<'Z3_rcf_num'>;export declare enum Z3_lbool{Z3_L_FALSE=-1,Z3_L_UNDEF=0,Z3_L_TRUE=1}export declare enum Z3_symbol_kind{Z3_INT_SYMBOL=0,Z3_STRING_SYMBOL=1}export declare enum Z3_parameter_kind{Z3_PARAMETER_INT=0,Z3_PARAMETER_DOUBLE=1,Z3_PARAMETER_RATIONAL=2,Z3_PARAMETER_SYMBOL=3,Z3_PARAMETER_SORT=4,Z3_PARAMETER_AST=5,Z3_PARAMETER_FUNC_DECL=6}export declare enum Z3_sort_kind{Z3_UNINTERPRETED_SORT=0,Z3_BOOL_SORT=1,Z3_INT_SORT=2,Z3_REAL_SORT=3,Z3_BV_SORT=4,Z3_ARRAY_SORT=5,Z3_DATATYPE_SORT=6,Z3_RELATION_SORT=7,Z3_FINITE_DOMAIN_SORT=8,Z3_FLOATING_POINT_SORT=9,Z3_ROUNDING_MODE_SORT=10,Z3_SEQ_SORT=11,Z3_RE_SORT=12,Z3_CHAR_SORT=13,Z3_UNKNOWN_SORT=1000}export declare enum Z3_ast_kind{Z3_NUMERAL_AST=0,Z3_APP_AST=1,Z3_VAR_AST=2,Z3_QUANTIFIER_AST=3,Z3_SORT_AST=4,Z3_FUNC_DECL_AST=5,Z3_UNKNOWN_AST=1000}export declare enum Z3_decl_kind{Z3_OP_TRUE=256,Z3_OP_FALSE=257,Z3_OP_EQ=258,Z3_OP_DISTINCT=259,Z3_OP_ITE=260,Z3_OP_AND=261,Z3_OP_OR=262,Z3_OP_IFF=263,Z3_OP_XOR=264,Z3_OP_NOT=265,Z3_OP_IMPLIES=266,Z3_OP_OEQ=267,Z3_OP_ANUM=512,Z3_OP_AGNUM=513,Z3_OP_LE=514,Z3_OP_GE=515,Z3_OP_LT=516,Z3_OP_GT=517,Z3_OP_ADD=518,Z3_OP_SUB=519,Z3_OP_UMINUS=520,Z3_OP_MUL=521,Z3_OP_DIV=522,Z3_OP_IDIV=523,Z3_OP_REM=524,Z3_OP_MOD=525,Z3_OP_TO_REAL=526,Z3_OP_TO_INT=527,Z3_OP_IS_INT=528,Z3_OP_POWER=529,Z3_OP_STORE=768,Z3_OP_SELECT=769,Z3_OP_CONST_ARRAY=770,Z3_OP_ARRAY_MAP=771,Z3_OP_ARRAY_DEFAULT=772,Z3_OP_SET_UNION=773,Z3_OP_SET_INTERSECT=774,Z3_OP_SET_DIFFERENCE=775,Z3_OP_SET_COMPLEMENT=776,Z3_OP_SET_SUBSET=777,Z3_OP_AS_ARRAY=778,Z3_OP_ARRAY_EXT=779,Z3_OP_SET_HAS_SIZE=780,Z3_OP_SET_CARD=781,Z3_OP_BNUM=1024,Z3_OP_BIT1=1025,Z3_OP_BIT0=1026,Z3_OP_BNEG=1027,Z3_OP_BADD=1028,Z3_OP_BSUB=1029,Z3_OP_BMUL=1030,Z3_OP_BSDIV=1031,Z3_OP_BUDIV=1032,Z3_OP_BSREM=1033,Z3_OP_BUREM=1034,Z3_OP_BSMOD=1035,Z3_OP_BSDIV0=1036,Z3_OP_BUDIV0=1037,Z3_OP_BSREM0=1038,Z3_OP_BUREM0=1039,Z3_OP_BSMOD0=1040,Z3_OP_ULEQ=1041,Z3_OP_SLEQ=1042,Z3_OP_UGEQ=1043,Z3_OP_SGEQ=1044,Z3_OP_ULT=1045,Z3_OP_SLT=1046,Z3_OP_UGT=1047,Z3_OP_SGT=1048,Z3_OP_BAND=1049,Z3_OP_BOR=1050,Z3_OP_BNOT=1051,Z3_OP_BXOR=1052,Z3_OP_BNAND=1053,Z3_OP_BNOR=1054,Z3_OP_BXNOR=1055,Z3_OP_CONCAT=1056,Z3_OP_SIGN_EXT=1057,Z3_OP_ZERO_EXT=1058,Z3_OP_EXTRACT=1059,Z3_OP_REPEAT=1060,Z3_OP_BREDOR=1061,Z3_OP_BREDAND=1062,Z3_OP_BCOMP=1063,Z3_OP_BSHL=1064,Z3_OP_BLSHR=1065,Z3_OP_BASHR=1066,Z3_OP_ROTATE_LEFT=1067,Z3_OP_ROTATE_RIGHT=1068,Z3_OP_EXT_ROTATE_LEFT=1069,Z3_OP_EXT_ROTATE_RIGHT=1070,Z3_OP_BIT2BOOL=1071,Z3_OP_INT2BV=1072,Z3_OP_BV2INT=1073,Z3_OP_CARRY=1074,Z3_OP_XOR3=1075,Z3_OP_BSMUL_NO_OVFL=1076,Z3_OP_BUMUL_NO_OVFL=1077,Z3_OP_BSMUL_NO_UDFL=1078,Z3_OP_BSDIV_I=1079,Z3_OP_BUDIV_I=1080,Z3_OP_BSREM_I=1081,Z3_OP_BUREM_I=1082,Z3_OP_BSMOD_I=1083,Z3_OP_PR_UNDEF=1280,Z3_OP_PR_TRUE=1281,Z3_OP_PR_ASSERTED=1282,Z3_OP_PR_GOAL=1283,Z3_OP_PR_MODUS_PONENS=1284,Z3_OP_PR_REFLEXIVITY=1285,Z3_OP_PR_SYMMETRY=1286,Z3_OP_PR_TRANSITIVITY=1287,Z3_OP_PR_TRANSITIVITY_STAR=1288,Z3_OP_PR_MONOTONICITY=1289,Z3_OP_PR_QUANT_INTRO=1290,Z3_OP_PR_BIND=1291,Z3_OP_PR_DISTRIBUTIVITY=1292,Z3_OP_PR_AND_ELIM=1293,Z3_OP_PR_NOT_OR_ELIM=1294,Z3_OP_PR_REWRITE=1295,Z3_OP_PR_REWRITE_STAR=1296,Z3_OP_PR_PULL_QUANT=1297,Z3_OP_PR_PUSH_QUANT=1298,Z3_OP_PR_ELIM_UNUSED_VARS=1299,Z3_OP_PR_DER=1300,Z3_OP_PR_QUANT_INST=1301,Z3_OP_PR_HYPOTHESIS=1302,Z3_OP_PR_LEMMA=1303,Z3_OP_PR_UNIT_RESOLUTION=1304,Z3_OP_PR_IFF_TRUE=1305,Z3_OP_PR_IFF_FALSE=1306,Z3_OP_PR_COMMUTATIVITY=1307,Z3_OP_PR_DEF_AXIOM=1308,Z3_OP_PR_ASSUMPTION_ADD=1309,Z3_OP_PR_LEMMA_ADD=1310,Z3_OP_PR_REDUNDANT_DEL=1311,Z3_OP_PR_CLAUSE_TRAIL=1312,Z3_OP_PR_DEF_INTRO=1313,Z3_OP_PR_APPLY_DEF=1314,Z3_OP_PR_IFF_OEQ=1315,Z3_OP_PR_NNF_POS=1316,Z3_OP_PR_NNF_NEG=1317,Z3_OP_PR_SKOLEMIZE=1318,Z3_OP_PR_MODUS_PONENS_OEQ=1319,Z3_OP_PR_TH_LEMMA=1320,Z3_OP_PR_HYPER_RESOLVE=1321,Z3_OP_RA_STORE=1536,Z3_OP_RA_EMPTY=1537,Z3_OP_RA_IS_EMPTY=1538,Z3_OP_RA_JOIN=1539,Z3_OP_RA_UNION=1540,Z3_OP_RA_WIDEN=1541,Z3_OP_RA_PROJECT=1542,Z3_OP_RA_FILTER=1543,Z3_OP_RA_NEGATION_FILTER=1544,Z3_OP_RA_RENAME=1545,Z3_OP_RA_COMPLEMENT=1546,Z3_OP_RA_SELECT=1547,Z3_OP_RA_CLONE=1548,Z3_OP_FD_CONSTANT=1549,Z3_OP_FD_LT=1550,Z3_OP_SEQ_UNIT=1551,Z3_OP_SEQ_EMPTY=1552,Z3_OP_SEQ_CONCAT=1553,Z3_OP_SEQ_PREFIX=1554,Z3_OP_SEQ_SUFFIX=1555,Z3_OP_SEQ_CONTAINS=1556,Z3_OP_SEQ_EXTRACT=1557,Z3_OP_SEQ_REPLACE=1558,Z3_OP_SEQ_REPLACE_RE=1559,Z3_OP_SEQ_REPLACE_RE_ALL=1560,Z3_OP_SEQ_REPLACE_ALL=1561,Z3_OP_SEQ_AT=1562,Z3_OP_SEQ_NTH=1563,Z3_OP_SEQ_LENGTH=1564,Z3_OP_SEQ_INDEX=1565,Z3_OP_SEQ_LAST_INDEX=1566,Z3_OP_SEQ_TO_RE=1567,Z3_OP_SEQ_IN_RE=1568,Z3_OP_STR_TO_INT=1569,Z3_OP_INT_TO_STR=1570,Z3_OP_UBV_TO_STR=1571,Z3_OP_SBV_TO_STR=1572,Z3_OP_STR_TO_CODE=1573,Z3_OP_STR_FROM_CODE=1574,Z3_OP_STRING_LT=1575,Z3_OP_STRING_LE=1576,Z3_OP_RE_PLUS=1577,Z3_OP_RE_STAR=1578,Z3_OP_RE_OPTION=1579,Z3_OP_RE_CONCAT=1580,Z3_OP_RE_UNION=1581,Z3_OP_RE_RANGE=1582,Z3_OP_RE_DIFF=1583,Z3_OP_RE_INTERSECT=1584,Z3_OP_RE_LOOP=1585,Z3_OP_RE_POWER=1586,Z3_OP_RE_COMPLEMENT=1587,Z3_OP_RE_EMPTY_SET=1588,Z3_OP_RE_FULL_SET=1589,Z3_OP_RE_FULL_CHAR_SET=1590,Z3_OP_RE_OF_PRED=1591,Z3_OP_RE_REVERSE=1592,Z3_OP_RE_DERIVATIVE=1593,Z3_OP_CHAR_CONST=1594,Z3_OP_CHAR_LE=1595,Z3_OP_CHAR_TO_INT=1596,Z3_OP_CHAR_TO_BV=1597,Z3_OP_CHAR_FROM_BV=1598,Z3_OP_CHAR_IS_DIGIT=1599,Z3_OP_LABEL=1792,Z3_OP_LABEL_LIT=1793,Z3_OP_DT_CONSTRUCTOR=2048,Z3_OP_DT_RECOGNISER=2049,Z3_OP_DT_IS=2050,Z3_OP_DT_ACCESSOR=2051,Z3_OP_DT_UPDATE_FIELD=2052,Z3_OP_PB_AT_MOST=2304,Z3_OP_PB_AT_LEAST=2305,Z3_OP_PB_LE=2306,Z3_OP_PB_GE=2307,Z3_OP_PB_EQ=2308,Z3_OP_SPECIAL_RELATION_LO=40960,Z3_OP_SPECIAL_RELATION_PO=40961,Z3_OP_SPECIAL_RELATION_PLO=40962,Z3_OP_SPECIAL_RELATION_TO=40963,Z3_OP_SPECIAL_RELATION_TC=40964,Z3_OP_SPECIAL_RELATION_TRC=40965,Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN=45056,Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY=45057,Z3_OP_FPA_RM_TOWARD_POSITIVE=45058,Z3_OP_FPA_RM_TOWARD_NEGATIVE=45059,Z3_OP_FPA_RM_TOWARD_ZERO=45060,Z3_OP_FPA_NUM=45061,Z3_OP_FPA_PLUS_INF=45062,Z3_OP_FPA_MINUS_INF=45063,Z3_OP_FPA_NAN=45064,Z3_OP_FPA_PLUS_ZERO=45065,Z3_OP_FPA_MINUS_ZERO=45066,Z3_OP_FPA_ADD=45067,Z3_OP_FPA_SUB=45068,Z3_OP_FPA_NEG=45069,Z3_OP_FPA_MUL=45070,Z3_OP_FPA_DIV=45071,Z3_OP_FPA_REM=45072,Z3_OP_FPA_ABS=45073,Z3_OP_FPA_MIN=45074,Z3_OP_FPA_MAX=45075,Z3_OP_FPA_FMA=45076,Z3_OP_FPA_SQRT=45077,Z3_OP_FPA_ROUND_TO_INTEGRAL=45078,Z3_OP_FPA_EQ=45079,Z3_OP_FPA_LT=45080,Z3_OP_FPA_GT=45081,Z3_OP_FPA_LE=45082,Z3_OP_FPA_GE=45083,Z3_OP_FPA_IS_NAN=45084,Z3_OP_FPA_IS_INF=45085,Z3_OP_FPA_IS_ZERO=45086,Z3_OP_FPA_IS_NORMAL=45087,Z3_OP_FPA_IS_SUBNORMAL=45088,Z3_OP_FPA_IS_NEGATIVE=45089,Z3_OP_FPA_IS_POSITIVE=45090,Z3_OP_FPA_FP=45091,Z3_OP_FPA_TO_FP=45092,Z3_OP_FPA_TO_FP_UNSIGNED=45093,Z3_OP_FPA_TO_UBV=45094,Z3_OP_FPA_TO_SBV=45095,Z3_OP_FPA_TO_REAL=45096,Z3_OP_FPA_TO_IEEE_BV=45097,Z3_OP_FPA_BVWRAP=45098,Z3_OP_FPA_BV2RM=45099,Z3_OP_INTERNAL=45100,Z3_OP_RECURSIVE=45101,Z3_OP_UNINTERPRETED=45102}export declare enum Z3_param_kind{Z3_PK_UINT=0,Z3_PK_BOOL=1,Z3_PK_DOUBLE=2,Z3_PK_SYMBOL=3,Z3_PK_STRING=4,Z3_PK_OTHER=5,Z3_PK_INVALID=6}export declare enum Z3_ast_print_mode{Z3_PRINT_SMTLIB_FULL=0,Z3_PRINT_LOW_LEVEL=1,Z3_PRINT_SMTLIB2_COMPLIANT=2}export declare enum Z3_error_code{Z3_OK=0,Z3_SORT_ERROR=1,Z3_IOB=2,Z3_INVALID_ARG=3,Z3_PARSER_ERROR=4,Z3_NO_PARSER=5,Z3_INVALID_PATTERN=6,Z3_MEMOUT_FAIL=7,Z3_FILE_ACCESS_ERROR=8,Z3_INTERNAL_FATAL=9,Z3_INVALID_USAGE=10,Z3_DEC_REF_ERROR=11,Z3_EXCEPTION=12}export declare enum Z3_goal_prec{Z3_GOAL_PRECISE=0,Z3_GOAL_UNDER=1,Z3_GOAL_OVER=2,Z3_GOAL_UNDER_OVER=3}export{};", "/node_modules/z3-solver/build/low-level/wrapper.__GENERATED__.d.ts": "import{Z3_symbol,Z3_config,Z3_context,Z3_sort,Z3_func_decl,Z3_ast,Z3_app,Z3_pattern,Z3_model,Z3_constructor,Z3_constructor_list,Z3_params,Z3_param_descrs,Z3_parser_context,Z3_goal,Z3_tactic,Z3_probe,Z3_stats,Z3_solver,Z3_solver_callback,Z3_ast_vector,Z3_ast_map,Z3_apply_result,Z3_func_interp,Z3_func_entry,Z3_fixedpoint,Z3_optimize,Z3_rcf_num,Z3_lbool,Z3_symbol_kind,Z3_parameter_kind,Z3_sort_kind,Z3_ast_kind,Z3_decl_kind,Z3_param_kind,Z3_ast_print_mode,Z3_error_code,Z3_goal_prec}from'./types.__GENERATED__';declare type unsigned=number;declare type int=number;declare type uint64_t=bigint;declare type int64_t=bigint;declare type double=number;declare type float=number;export declare function init(initModule:any):Promise<{em:any;Z3:{mk_context:(c:Z3_config)=>Z3_context;mk_context_rc:(c:Z3_config)=>Z3_context;global_param_set:(param_id:string,param_value:string)=>void;global_param_reset_all:()=>void;global_param_get:(param_id:string)=>string|null;mk_config:()=>Z3_config;del_config:(c:Z3_config)=>void;set_param_value:(c:Z3_config,param_id:string,param_value:string)=>void;del_context:(c:Z3_context)=>void;inc_ref:(c:Z3_context,a:Z3_ast)=>void;dec_ref:(c:Z3_context,a:Z3_ast)=>void;update_param_value:(c:Z3_context,param_id:string,param_value:string)=>void;get_global_param_descrs:(c:Z3_context)=>Z3_param_descrs;interrupt:(c:Z3_context)=>void;enable_concurrent_dec_ref:(c:Z3_context)=>void;mk_params:(c:Z3_context)=>Z3_params;params_inc_ref:(c:Z3_context,p:Z3_params)=>void;params_dec_ref:(c:Z3_context,p:Z3_params)=>void;params_set_bool:(c:Z3_context,p:Z3_params,k:Z3_symbol,v:boolean)=>void;params_set_uint:(c:Z3_context,p:Z3_params,k:Z3_symbol,v:unsigned)=>void;params_set_double:(c:Z3_context,p:Z3_params,k:Z3_symbol,v:double)=>void;params_set_symbol:(c:Z3_context,p:Z3_params,k:Z3_symbol,v:Z3_symbol)=>void;params_to_string:(c:Z3_context,p:Z3_params)=>string;params_validate:(c:Z3_context,p:Z3_params,d:Z3_param_descrs)=>void;param_descrs_inc_ref:(c:Z3_context,p:Z3_param_descrs)=>void;param_descrs_dec_ref:(c:Z3_context,p:Z3_param_descrs)=>void;param_descrs_get_kind:(c:Z3_context,p:Z3_param_descrs,n:Z3_symbol)=>Z3_param_kind;param_descrs_size:(c:Z3_context,p:Z3_param_descrs)=>unsigned;param_descrs_get_name:(c:Z3_context,p:Z3_param_descrs,i:unsigned)=>Z3_symbol;param_descrs_get_documentation:(c:Z3_context,p:Z3_param_descrs,s:Z3_symbol)=>string;param_descrs_to_string:(c:Z3_context,p:Z3_param_descrs)=>string;mk_int_symbol:(c:Z3_context,i:int)=>Z3_symbol;mk_string_symbol:(c:Z3_context,s:string)=>Z3_symbol;mk_uninterpreted_sort:(c:Z3_context,s:Z3_symbol)=>Z3_sort;mk_bool_sort:(c:Z3_context)=>Z3_sort;mk_int_sort:(c:Z3_context)=>Z3_sort;mk_real_sort:(c:Z3_context)=>Z3_sort;mk_bv_sort:(c:Z3_context,sz:unsigned)=>Z3_sort;mk_finite_domain_sort:(c:Z3_context,name:Z3_symbol,size:uint64_t)=>Z3_sort;mk_array_sort:(c:Z3_context,domain:Z3_sort,range:Z3_sort)=>Z3_sort;mk_array_sort_n:(c:Z3_context,domain:Z3_sort[],range:Z3_sort)=>Z3_sort;mk_tuple_sort:(c:Z3_context,mk_tuple_name:Z3_symbol,field_names:Z3_symbol[],field_sorts:Z3_sort[])=>{rv:Z3_sort;mk_tuple_decl:Z3_func_decl;proj_decl:Z3_func_decl[];};mk_enumeration_sort:(c:Z3_context,name:Z3_symbol,enum_names:Z3_symbol[])=>{rv:Z3_sort;enum_consts:Z3_func_decl[];enum_testers:Z3_func_decl[];};mk_list_sort:(c:Z3_context,name:Z3_symbol,elem_sort:Z3_sort)=>{rv:Z3_sort;nil_decl:Z3_func_decl;is_nil_decl:Z3_func_decl;cons_decl:Z3_func_decl;is_cons_decl:Z3_func_decl;head_decl:Z3_func_decl;tail_decl:Z3_func_decl;};mk_constructor:(c:Z3_context,name:Z3_symbol,recognizer:Z3_symbol,field_names:Z3_symbol[],sorts:(Z3_sort|null)[],sort_refs:unsigned[])=>Z3_constructor;del_constructor:(c:Z3_context,constr:Z3_constructor)=>void;mk_datatype:(c:Z3_context,name:Z3_symbol,constructors:Z3_constructor[])=>Z3_sort;mk_datatype_sort:(c:Z3_context,name:Z3_symbol)=>Z3_sort;mk_constructor_list:(c:Z3_context,constructors:Z3_constructor[])=>Z3_constructor_list;del_constructor_list:(c:Z3_context,clist:Z3_constructor_list)=>void;mk_datatypes:(c:Z3_context,sort_names:Z3_symbol[],constructor_lists:Z3_constructor_list[])=>Z3_sort[];query_constructor:(c:Z3_context,constr:Z3_constructor,num_fields:unsigned)=>{constructor:Z3_func_decl;tester:Z3_func_decl;accessors:Z3_func_decl[];};mk_func_decl:(c:Z3_context,s:Z3_symbol,domain:Z3_sort[],range:Z3_sort)=>Z3_func_decl;mk_app:(c:Z3_context,d:Z3_func_decl,args:Z3_ast[])=>Z3_ast;mk_const:(c:Z3_context,s:Z3_symbol,ty:Z3_sort)=>Z3_ast;mk_fresh_func_decl:(c:Z3_context,prefix:string,domain:Z3_sort[],range:Z3_sort)=>Z3_func_decl;mk_fresh_const:(c:Z3_context,prefix:string,ty:Z3_sort)=>Z3_ast;mk_rec_func_decl:(c:Z3_context,s:Z3_symbol,domain:Z3_sort[],range:Z3_sort)=>Z3_func_decl;add_rec_def:(c:Z3_context,f:Z3_func_decl,args:Z3_ast[],body:Z3_ast)=>void;mk_true:(c:Z3_context)=>Z3_ast;mk_false:(c:Z3_context)=>Z3_ast;mk_eq:(c:Z3_context,l:Z3_ast,r:Z3_ast)=>Z3_ast;mk_distinct:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_not:(c:Z3_context,a:Z3_ast)=>Z3_ast;mk_ite:(c:Z3_context,t1:Z3_ast,t2:Z3_ast,t3:Z3_ast)=>Z3_ast;mk_iff:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_implies:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_xor:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_and:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_or:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_add:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_mul:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_sub:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_unary_minus:(c:Z3_context,arg:Z3_ast)=>Z3_ast;mk_div:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_mod:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_rem:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_power:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_lt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_le:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_gt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_ge:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_divides:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_int2real:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_real2int:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_is_int:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_bvnot:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_bvredand:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_bvredor:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_bvand:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvor:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvxor:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvnand:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvnor:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvxnor:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvneg:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_bvadd:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsub:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvmul:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvudiv:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsdiv:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvurem:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsrem:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsmod:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvult:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvslt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvule:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsle:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvuge:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsge:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvugt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsgt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_concat:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_extract:(c:Z3_context,high:unsigned,low:unsigned,t1:Z3_ast)=>Z3_ast;mk_sign_ext:(c:Z3_context,i:unsigned,t1:Z3_ast)=>Z3_ast;mk_zero_ext:(c:Z3_context,i:unsigned,t1:Z3_ast)=>Z3_ast;mk_repeat:(c:Z3_context,i:unsigned,t1:Z3_ast)=>Z3_ast;mk_bit2bool:(c:Z3_context,i:unsigned,t1:Z3_ast)=>Z3_ast;mk_bvshl:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvlshr:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvashr:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_rotate_left:(c:Z3_context,i:unsigned,t1:Z3_ast)=>Z3_ast;mk_rotate_right:(c:Z3_context,i:unsigned,t1:Z3_ast)=>Z3_ast;mk_ext_rotate_left:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_ext_rotate_right:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_int2bv:(c:Z3_context,n:unsigned,t1:Z3_ast)=>Z3_ast;mk_bv2int:(c:Z3_context,t1:Z3_ast,is_signed:boolean)=>Z3_ast;mk_bvadd_no_overflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast,is_signed:boolean)=>Z3_ast;mk_bvadd_no_underflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsub_no_overflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvsub_no_underflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast,is_signed:boolean)=>Z3_ast;mk_bvsdiv_no_overflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_bvneg_no_overflow:(c:Z3_context,t1:Z3_ast)=>Z3_ast;mk_bvmul_no_overflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast,is_signed:boolean)=>Z3_ast;mk_bvmul_no_underflow:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_select:(c:Z3_context,a:Z3_ast,i:Z3_ast)=>Z3_ast;mk_select_n:(c:Z3_context,a:Z3_ast,idxs:Z3_ast[])=>Z3_ast;mk_store:(c:Z3_context,a:Z3_ast,i:Z3_ast,v:Z3_ast)=>Z3_ast;mk_store_n:(c:Z3_context,a:Z3_ast,idxs:Z3_ast[],v:Z3_ast)=>Z3_ast;mk_const_array:(c:Z3_context,domain:Z3_sort,v:Z3_ast)=>Z3_ast;mk_map:(c:Z3_context,f:Z3_func_decl,args:Z3_ast[])=>Z3_ast;mk_array_default:(c:Z3_context,array:Z3_ast)=>Z3_ast;mk_as_array:(c:Z3_context,f:Z3_func_decl)=>Z3_ast;mk_set_has_size:(c:Z3_context,set:Z3_ast,k:Z3_ast)=>Z3_ast;mk_set_sort:(c:Z3_context,ty:Z3_sort)=>Z3_sort;mk_empty_set:(c:Z3_context,domain:Z3_sort)=>Z3_ast;mk_full_set:(c:Z3_context,domain:Z3_sort)=>Z3_ast;mk_set_add:(c:Z3_context,set:Z3_ast,elem:Z3_ast)=>Z3_ast;mk_set_del:(c:Z3_context,set:Z3_ast,elem:Z3_ast)=>Z3_ast;mk_set_union:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_set_intersect:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_set_difference:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_set_complement:(c:Z3_context,arg:Z3_ast)=>Z3_ast;mk_set_member:(c:Z3_context,elem:Z3_ast,set:Z3_ast)=>Z3_ast;mk_set_subset:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_array_ext:(c:Z3_context,arg1:Z3_ast,arg2:Z3_ast)=>Z3_ast;mk_numeral:(c:Z3_context,numeral:string,ty:Z3_sort)=>Z3_ast;mk_real:(c:Z3_context,num:int,den:int)=>Z3_ast;mk_int:(c:Z3_context,v:int,ty:Z3_sort)=>Z3_ast;mk_unsigned_int:(c:Z3_context,v:unsigned,ty:Z3_sort)=>Z3_ast;mk_int64:(c:Z3_context,v:int64_t,ty:Z3_sort)=>Z3_ast;mk_unsigned_int64:(c:Z3_context,v:uint64_t,ty:Z3_sort)=>Z3_ast;mk_bv_numeral:(c:Z3_context,bits:boolean[])=>Z3_ast;mk_seq_sort:(c:Z3_context,s:Z3_sort)=>Z3_sort;is_seq_sort:(c:Z3_context,s:Z3_sort)=>boolean;get_seq_sort_basis:(c:Z3_context,s:Z3_sort)=>Z3_sort;mk_re_sort:(c:Z3_context,seq:Z3_sort)=>Z3_sort;is_re_sort:(c:Z3_context,s:Z3_sort)=>boolean;get_re_sort_basis:(c:Z3_context,s:Z3_sort)=>Z3_sort;mk_string_sort:(c:Z3_context)=>Z3_sort;mk_char_sort:(c:Z3_context)=>Z3_sort;is_string_sort:(c:Z3_context,s:Z3_sort)=>boolean;is_char_sort:(c:Z3_context,s:Z3_sort)=>boolean;mk_string:(c:Z3_context,s:string)=>Z3_ast;mk_lstring:(c:Z3_context,len:unsigned,s:string)=>Z3_ast;mk_u32string:(c:Z3_context,chars:unsigned[])=>Z3_ast;is_string:(c:Z3_context,s:Z3_ast)=>boolean;get_string:(c:Z3_context,s:Z3_ast)=>string;get_string_length:(c:Z3_context,s:Z3_ast)=>unsigned;get_string_contents:(c:Z3_context,s:Z3_ast,length:unsigned)=>unsigned[];mk_seq_empty:(c:Z3_context,seq:Z3_sort)=>Z3_ast;mk_seq_unit:(c:Z3_context,a:Z3_ast)=>Z3_ast;mk_seq_concat:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_seq_prefix:(c:Z3_context,prefix:Z3_ast,s:Z3_ast)=>Z3_ast;mk_seq_suffix:(c:Z3_context,suffix:Z3_ast,s:Z3_ast)=>Z3_ast;mk_seq_contains:(c:Z3_context,container:Z3_ast,containee:Z3_ast)=>Z3_ast;mk_str_lt:(c:Z3_context,prefix:Z3_ast,s:Z3_ast)=>Z3_ast;mk_str_le:(c:Z3_context,prefix:Z3_ast,s:Z3_ast)=>Z3_ast;mk_seq_extract:(c:Z3_context,s:Z3_ast,offset:Z3_ast,length:Z3_ast)=>Z3_ast;mk_seq_replace:(c:Z3_context,s:Z3_ast,src:Z3_ast,dst:Z3_ast)=>Z3_ast;mk_seq_at:(c:Z3_context,s:Z3_ast,index:Z3_ast)=>Z3_ast;mk_seq_nth:(c:Z3_context,s:Z3_ast,index:Z3_ast)=>Z3_ast;mk_seq_length:(c:Z3_context,s:Z3_ast)=>Z3_ast;mk_seq_index:(c:Z3_context,s:Z3_ast,substr:Z3_ast,offset:Z3_ast)=>Z3_ast;mk_seq_last_index:(c:Z3_context,s:Z3_ast,substr:Z3_ast)=>Z3_ast;mk_str_to_int:(c:Z3_context,s:Z3_ast)=>Z3_ast;mk_int_to_str:(c:Z3_context,s:Z3_ast)=>Z3_ast;mk_string_to_code:(c:Z3_context,a:Z3_ast)=>Z3_ast;mk_string_from_code:(c:Z3_context,a:Z3_ast)=>Z3_ast;mk_ubv_to_str:(c:Z3_context,s:Z3_ast)=>Z3_ast;mk_sbv_to_str:(c:Z3_context,s:Z3_ast)=>Z3_ast;mk_seq_to_re:(c:Z3_context,seq:Z3_ast)=>Z3_ast;mk_seq_in_re:(c:Z3_context,seq:Z3_ast,re:Z3_ast)=>Z3_ast;mk_re_plus:(c:Z3_context,re:Z3_ast)=>Z3_ast;mk_re_star:(c:Z3_context,re:Z3_ast)=>Z3_ast;mk_re_option:(c:Z3_context,re:Z3_ast)=>Z3_ast;mk_re_union:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_re_concat:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_re_range:(c:Z3_context,lo:Z3_ast,hi:Z3_ast)=>Z3_ast;mk_re_allchar:(c:Z3_context,regex_sort:Z3_sort)=>Z3_ast;mk_re_loop:(c:Z3_context,r:Z3_ast,lo:unsigned,hi:unsigned)=>Z3_ast;mk_re_power:(c:Z3_context,re:Z3_ast,n:unsigned)=>Z3_ast;mk_re_intersect:(c:Z3_context,args:Z3_ast[])=>Z3_ast;mk_re_complement:(c:Z3_context,re:Z3_ast)=>Z3_ast;mk_re_diff:(c:Z3_context,re1:Z3_ast,re2:Z3_ast)=>Z3_ast;mk_re_empty:(c:Z3_context,re:Z3_sort)=>Z3_ast;mk_re_full:(c:Z3_context,re:Z3_sort)=>Z3_ast;mk_char:(c:Z3_context,ch:unsigned)=>Z3_ast;mk_char_le:(c:Z3_context,ch1:Z3_ast,ch2:Z3_ast)=>Z3_ast;mk_char_to_int:(c:Z3_context,ch:Z3_ast)=>Z3_ast;mk_char_to_bv:(c:Z3_context,ch:Z3_ast)=>Z3_ast;mk_char_from_bv:(c:Z3_context,bv:Z3_ast)=>Z3_ast;mk_char_is_digit:(c:Z3_context,ch:Z3_ast)=>Z3_ast;mk_linear_order:(c:Z3_context,a:Z3_sort,id:unsigned)=>Z3_func_decl;mk_partial_order:(c:Z3_context,a:Z3_sort,id:unsigned)=>Z3_func_decl;mk_piecewise_linear_order:(c:Z3_context,a:Z3_sort,id:unsigned)=>Z3_func_decl;mk_tree_order:(c:Z3_context,a:Z3_sort,id:unsigned)=>Z3_func_decl;mk_transitive_closure:(c:Z3_context,f:Z3_func_decl)=>Z3_func_decl;mk_pattern:(c:Z3_context,terms:Z3_ast[])=>Z3_pattern;mk_bound:(c:Z3_context,index:unsigned,ty:Z3_sort)=>Z3_ast;mk_forall:(c:Z3_context,weight:unsigned,patterns:Z3_pattern[],sorts:Z3_sort[],decl_names:Z3_symbol[],body:Z3_ast)=>Z3_ast;mk_exists:(c:Z3_context,weight:unsigned,patterns:Z3_pattern[],sorts:Z3_sort[],decl_names:Z3_symbol[],body:Z3_ast)=>Z3_ast;mk_quantifier:(c:Z3_context,is_forall:boolean,weight:unsigned,patterns:Z3_pattern[],sorts:Z3_sort[],decl_names:Z3_symbol[],body:Z3_ast)=>Z3_ast;mk_quantifier_ex:(c:Z3_context,is_forall:boolean,weight:unsigned,quantifier_id:Z3_symbol,skolem_id:Z3_symbol,patterns:Z3_pattern[],no_patterns:Z3_ast[],sorts:Z3_sort[],decl_names:Z3_symbol[],body:Z3_ast)=>Z3_ast;mk_forall_const:(c:Z3_context,weight:unsigned,bound:Z3_app[],patterns:Z3_pattern[],body:Z3_ast)=>Z3_ast;mk_exists_const:(c:Z3_context,weight:unsigned,bound:Z3_app[],patterns:Z3_pattern[],body:Z3_ast)=>Z3_ast;mk_quantifier_const:(c:Z3_context,is_forall:boolean,weight:unsigned,bound:Z3_app[],patterns:Z3_pattern[],body:Z3_ast)=>Z3_ast;mk_quantifier_const_ex:(c:Z3_context,is_forall:boolean,weight:unsigned,quantifier_id:Z3_symbol,skolem_id:Z3_symbol,bound:Z3_app[],patterns:Z3_pattern[],no_patterns:Z3_ast[],body:Z3_ast)=>Z3_ast;mk_lambda:(c:Z3_context,sorts:Z3_sort[],decl_names:Z3_symbol[],body:Z3_ast)=>Z3_ast;mk_lambda_const:(c:Z3_context,bound:Z3_app[],body:Z3_ast)=>Z3_ast;get_symbol_kind:(c:Z3_context,s:Z3_symbol)=>Z3_symbol_kind;get_symbol_int:(c:Z3_context,s:Z3_symbol)=>int;get_symbol_string:(c:Z3_context,s:Z3_symbol)=>string;get_sort_name:(c:Z3_context,d:Z3_sort)=>Z3_symbol;get_sort_id:(c:Z3_context,s:Z3_sort)=>unsigned;sort_to_ast:(c:Z3_context,s:Z3_sort)=>Z3_ast;is_eq_sort:(c:Z3_context,s1:Z3_sort,s2:Z3_sort)=>boolean;get_sort_kind:(c:Z3_context,t:Z3_sort)=>Z3_sort_kind;get_bv_sort_size:(c:Z3_context,t:Z3_sort)=>unsigned;get_finite_domain_sort_size:(c:Z3_context,s:Z3_sort)=>uint64_t|null;get_array_sort_domain:(c:Z3_context,t:Z3_sort)=>Z3_sort;get_array_sort_domain_n:(c:Z3_context,t:Z3_sort,idx:unsigned)=>Z3_sort;get_array_sort_range:(c:Z3_context,t:Z3_sort)=>Z3_sort;get_tuple_sort_mk_decl:(c:Z3_context,t:Z3_sort)=>Z3_func_decl;get_tuple_sort_num_fields:(c:Z3_context,t:Z3_sort)=>unsigned;get_tuple_sort_field_decl:(c:Z3_context,t:Z3_sort,i:unsigned)=>Z3_func_decl;get_datatype_sort_num_constructors:(c:Z3_context,t:Z3_sort)=>unsigned;get_datatype_sort_constructor:(c:Z3_context,t:Z3_sort,idx:unsigned)=>Z3_func_decl;get_datatype_sort_recognizer:(c:Z3_context,t:Z3_sort,idx:unsigned)=>Z3_func_decl;get_datatype_sort_constructor_accessor:(c:Z3_context,t:Z3_sort,idx_c:unsigned,idx_a:unsigned)=>Z3_func_decl;datatype_update_field:(c:Z3_context,field_access:Z3_func_decl,t:Z3_ast,value:Z3_ast)=>Z3_ast;get_relation_arity:(c:Z3_context,s:Z3_sort)=>unsigned;get_relation_column:(c:Z3_context,s:Z3_sort,col:unsigned)=>Z3_sort;mk_atmost:(c:Z3_context,args:Z3_ast[],k:unsigned)=>Z3_ast;mk_atleast:(c:Z3_context,args:Z3_ast[],k:unsigned)=>Z3_ast;mk_pble:(c:Z3_context,args:Z3_ast[],coeffs:int[],k:int)=>Z3_ast;mk_pbge:(c:Z3_context,args:Z3_ast[],coeffs:int[],k:int)=>Z3_ast;mk_pbeq:(c:Z3_context,args:Z3_ast[],coeffs:int[],k:int)=>Z3_ast;func_decl_to_ast:(c:Z3_context,f:Z3_func_decl)=>Z3_ast;is_eq_func_decl:(c:Z3_context,f1:Z3_func_decl,f2:Z3_func_decl)=>boolean;get_func_decl_id:(c:Z3_context,f:Z3_func_decl)=>unsigned;get_decl_name:(c:Z3_context,d:Z3_func_decl)=>Z3_symbol;get_decl_kind:(c:Z3_context,d:Z3_func_decl)=>Z3_decl_kind;get_domain_size:(c:Z3_context,d:Z3_func_decl)=>unsigned;get_arity:(c:Z3_context,d:Z3_func_decl)=>unsigned;get_domain:(c:Z3_context,d:Z3_func_decl,i:unsigned)=>Z3_sort;get_range:(c:Z3_context,d:Z3_func_decl)=>Z3_sort;get_decl_num_parameters:(c:Z3_context,d:Z3_func_decl)=>unsigned;get_decl_parameter_kind:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>Z3_parameter_kind;get_decl_int_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>int;get_decl_double_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>double;get_decl_symbol_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>Z3_symbol;get_decl_sort_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>Z3_sort;get_decl_ast_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>Z3_ast;get_decl_func_decl_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>Z3_func_decl;get_decl_rational_parameter:(c:Z3_context,d:Z3_func_decl,idx:unsigned)=>string;app_to_ast:(c:Z3_context,a:Z3_app)=>Z3_ast;get_app_decl:(c:Z3_context,a:Z3_app)=>Z3_func_decl;get_app_num_args:(c:Z3_context,a:Z3_app)=>unsigned;get_app_arg:(c:Z3_context,a:Z3_app,i:unsigned)=>Z3_ast;is_eq_ast:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>boolean;get_ast_id:(c:Z3_context,t:Z3_ast)=>unsigned;get_ast_hash:(c:Z3_context,a:Z3_ast)=>unsigned;get_sort:(c:Z3_context,a:Z3_ast)=>Z3_sort;is_well_sorted:(c:Z3_context,t:Z3_ast)=>boolean;get_bool_value:(c:Z3_context,a:Z3_ast)=>Z3_lbool;get_ast_kind:(c:Z3_context,a:Z3_ast)=>Z3_ast_kind;is_app:(c:Z3_context,a:Z3_ast)=>boolean;is_numeral_ast:(c:Z3_context,a:Z3_ast)=>boolean;is_algebraic_number:(c:Z3_context,a:Z3_ast)=>boolean;to_app:(c:Z3_context,a:Z3_ast)=>Z3_app;to_func_decl:(c:Z3_context,a:Z3_ast)=>Z3_func_decl;get_numeral_string:(c:Z3_context,a:Z3_ast)=>string;get_numeral_binary_string:(c:Z3_context,a:Z3_ast)=>string;get_numeral_decimal_string:(c:Z3_context,a:Z3_ast,precision:unsigned)=>string;get_numeral_double:(c:Z3_context,a:Z3_ast)=>double;get_numerator:(c:Z3_context,a:Z3_ast)=>Z3_ast;get_denominator:(c:Z3_context,a:Z3_ast)=>Z3_ast;get_numeral_small:(c:Z3_context,a:Z3_ast)=>{num:int64_t;den:int64_t;}|null;get_numeral_int:(c:Z3_context,v:Z3_ast)=>int|null;get_numeral_uint:(c:Z3_context,v:Z3_ast)=>unsigned|null;get_numeral_uint64:(c:Z3_context,v:Z3_ast)=>uint64_t|null;get_numeral_int64:(c:Z3_context,v:Z3_ast)=>int64_t|null;get_numeral_rational_int64:(c:Z3_context,v:Z3_ast)=>{num:int64_t;den:int64_t;}|null;get_algebraic_number_lower:(c:Z3_context,a:Z3_ast,precision:unsigned)=>Z3_ast;get_algebraic_number_upper:(c:Z3_context,a:Z3_ast,precision:unsigned)=>Z3_ast;pattern_to_ast:(c:Z3_context,p:Z3_pattern)=>Z3_ast;get_pattern_num_terms:(c:Z3_context,p:Z3_pattern)=>unsigned;get_pattern:(c:Z3_context,p:Z3_pattern,idx:unsigned)=>Z3_ast;get_index_value:(c:Z3_context,a:Z3_ast)=>unsigned;is_quantifier_forall:(c:Z3_context,a:Z3_ast)=>boolean;is_quantifier_exists:(c:Z3_context,a:Z3_ast)=>boolean;is_lambda:(c:Z3_context,a:Z3_ast)=>boolean;get_quantifier_weight:(c:Z3_context,a:Z3_ast)=>unsigned;get_quantifier_num_patterns:(c:Z3_context,a:Z3_ast)=>unsigned;get_quantifier_pattern_ast:(c:Z3_context,a:Z3_ast,i:unsigned)=>Z3_pattern;get_quantifier_num_no_patterns:(c:Z3_context,a:Z3_ast)=>unsigned;get_quantifier_no_pattern_ast:(c:Z3_context,a:Z3_ast,i:unsigned)=>Z3_ast;get_quantifier_num_bound:(c:Z3_context,a:Z3_ast)=>unsigned;get_quantifier_bound_name:(c:Z3_context,a:Z3_ast,i:unsigned)=>Z3_symbol;get_quantifier_bound_sort:(c:Z3_context,a:Z3_ast,i:unsigned)=>Z3_sort;get_quantifier_body:(c:Z3_context,a:Z3_ast)=>Z3_ast;simplify:(c:Z3_context,a:Z3_ast)=>Promise<Z3_ast>;simplify_ex:(c:Z3_context,a:Z3_ast,p:Z3_params)=>Promise<Z3_ast>;simplify_get_help:(c:Z3_context)=>string;simplify_get_param_descrs:(c:Z3_context)=>Z3_param_descrs;update_term:(c:Z3_context,a:Z3_ast,args:Z3_ast[])=>Z3_ast;substitute:(c:Z3_context,a:Z3_ast,from:Z3_ast[],to:Z3_ast[])=>Z3_ast;substitute_vars:(c:Z3_context,a:Z3_ast,to:Z3_ast[])=>Z3_ast;substitute_funs:(c:Z3_context,a:Z3_ast,from:Z3_func_decl[],to:Z3_ast[])=>Z3_ast;translate:(source:Z3_context,a:Z3_ast,target:Z3_context)=>Z3_ast;mk_model:(c:Z3_context)=>Z3_model;model_inc_ref:(c:Z3_context,m:Z3_model)=>void;model_dec_ref:(c:Z3_context,m:Z3_model)=>void;model_eval:(c:Z3_context,m:Z3_model,t:Z3_ast,model_completion:boolean)=>Z3_ast|null;model_get_const_interp:(c:Z3_context,m:Z3_model,a:Z3_func_decl)=>Z3_ast|null;model_has_interp:(c:Z3_context,m:Z3_model,a:Z3_func_decl)=>boolean;model_get_func_interp:(c:Z3_context,m:Z3_model,f:Z3_func_decl)=>Z3_func_interp|null;model_get_num_consts:(c:Z3_context,m:Z3_model)=>unsigned;model_get_const_decl:(c:Z3_context,m:Z3_model,i:unsigned)=>Z3_func_decl;model_get_num_funcs:(c:Z3_context,m:Z3_model)=>unsigned;model_get_func_decl:(c:Z3_context,m:Z3_model,i:unsigned)=>Z3_func_decl;model_get_num_sorts:(c:Z3_context,m:Z3_model)=>unsigned;model_get_sort:(c:Z3_context,m:Z3_model,i:unsigned)=>Z3_sort;model_get_sort_universe:(c:Z3_context,m:Z3_model,s:Z3_sort)=>Z3_ast_vector;model_translate:(c:Z3_context,m:Z3_model,dst:Z3_context)=>Z3_model;is_as_array:(c:Z3_context,a:Z3_ast)=>boolean;get_as_array_func_decl:(c:Z3_context,a:Z3_ast)=>Z3_func_decl;add_func_interp:(c:Z3_context,m:Z3_model,f:Z3_func_decl,default_value:Z3_ast)=>Z3_func_interp;add_const_interp:(c:Z3_context,m:Z3_model,f:Z3_func_decl,a:Z3_ast)=>void;func_interp_inc_ref:(c:Z3_context,f:Z3_func_interp)=>void;func_interp_dec_ref:(c:Z3_context,f:Z3_func_interp)=>void;func_interp_get_num_entries:(c:Z3_context,f:Z3_func_interp)=>unsigned;func_interp_get_entry:(c:Z3_context,f:Z3_func_interp,i:unsigned)=>Z3_func_entry;func_interp_get_else:(c:Z3_context,f:Z3_func_interp)=>Z3_ast;func_interp_set_else:(c:Z3_context,f:Z3_func_interp,else_value:Z3_ast)=>void;func_interp_get_arity:(c:Z3_context,f:Z3_func_interp)=>unsigned;func_interp_add_entry:(c:Z3_context,fi:Z3_func_interp,args:Z3_ast_vector,value:Z3_ast)=>void;func_entry_inc_ref:(c:Z3_context,e:Z3_func_entry)=>void;func_entry_dec_ref:(c:Z3_context,e:Z3_func_entry)=>void;func_entry_get_value:(c:Z3_context,e:Z3_func_entry)=>Z3_ast;func_entry_get_num_args:(c:Z3_context,e:Z3_func_entry)=>unsigned;func_entry_get_arg:(c:Z3_context,e:Z3_func_entry,i:unsigned)=>Z3_ast;open_log:(filename:string)=>boolean;append_log:(string:string)=>void;close_log:()=>void;toggle_warning_messages:(enabled:boolean)=>void;set_ast_print_mode:(c:Z3_context,mode:Z3_ast_print_mode)=>void;ast_to_string:(c:Z3_context,a:Z3_ast)=>string;pattern_to_string:(c:Z3_context,p:Z3_pattern)=>string;sort_to_string:(c:Z3_context,s:Z3_sort)=>string;func_decl_to_string:(c:Z3_context,d:Z3_func_decl)=>string;model_to_string:(c:Z3_context,m:Z3_model)=>string;benchmark_to_smtlib_string:(c:Z3_context,name:string,logic:string,status:string,attributes:string,assumptions:Z3_ast[],formula:Z3_ast)=>string;parse_smtlib2_string:(c:Z3_context,str:string,sort_names:Z3_symbol[],sorts:Z3_sort[],decl_names:Z3_symbol[],decls:Z3_func_decl[])=>Z3_ast_vector;parse_smtlib2_file:(c:Z3_context,file_name:string,sort_names:Z3_symbol[],sorts:Z3_sort[],decl_names:Z3_symbol[],decls:Z3_func_decl[])=>Z3_ast_vector;eval_smtlib2_string:(c:Z3_context,str:string)=>Promise<string>;mk_parser_context:(c:Z3_context)=>Z3_parser_context;parser_context_inc_ref:(c:Z3_context,pc:Z3_parser_context)=>void;parser_context_dec_ref:(c:Z3_context,pc:Z3_parser_context)=>void;parser_context_add_sort:(c:Z3_context,pc:Z3_parser_context,s:Z3_sort)=>void;parser_context_add_decl:(c:Z3_context,pc:Z3_parser_context,f:Z3_func_decl)=>void;parser_context_from_string:(c:Z3_context,pc:Z3_parser_context,s:string)=>Z3_ast_vector;get_error_code:(c:Z3_context)=>Z3_error_code;set_error:(c:Z3_context,e:Z3_error_code)=>void;get_error_msg:(c:Z3_context,err:Z3_error_code)=>string;get_version:()=>{major:unsigned;minor:unsigned;build_number:unsigned;revision_number:unsigned;};get_full_version:()=>string;enable_trace:(tag:string)=>void;disable_trace:(tag:string)=>void;reset_memory:()=>void;finalize_memory:()=>void;mk_goal:(c:Z3_context,models:boolean,unsat_cores:boolean,proofs:boolean)=>Z3_goal;goal_inc_ref:(c:Z3_context,g:Z3_goal)=>void;goal_dec_ref:(c:Z3_context,g:Z3_goal)=>void;goal_precision:(c:Z3_context,g:Z3_goal)=>Z3_goal_prec;goal_assert:(c:Z3_context,g:Z3_goal,a:Z3_ast)=>void;goal_inconsistent:(c:Z3_context,g:Z3_goal)=>boolean;goal_depth:(c:Z3_context,g:Z3_goal)=>unsigned;goal_reset:(c:Z3_context,g:Z3_goal)=>void;goal_size:(c:Z3_context,g:Z3_goal)=>unsigned;goal_formula:(c:Z3_context,g:Z3_goal,idx:unsigned)=>Z3_ast;goal_num_exprs:(c:Z3_context,g:Z3_goal)=>unsigned;goal_is_decided_sat:(c:Z3_context,g:Z3_goal)=>boolean;goal_is_decided_unsat:(c:Z3_context,g:Z3_goal)=>boolean;goal_translate:(source:Z3_context,g:Z3_goal,target:Z3_context)=>Z3_goal;goal_convert_model:(c:Z3_context,g:Z3_goal,m:Z3_model)=>Z3_model;goal_to_string:(c:Z3_context,g:Z3_goal)=>string;goal_to_dimacs_string:(c:Z3_context,g:Z3_goal,include_names:boolean)=>string;mk_tactic:(c:Z3_context,name:string)=>Z3_tactic;tactic_inc_ref:(c:Z3_context,t:Z3_tactic)=>void;tactic_dec_ref:(c:Z3_context,g:Z3_tactic)=>void;mk_probe:(c:Z3_context,name:string)=>Z3_probe;probe_inc_ref:(c:Z3_context,p:Z3_probe)=>void;probe_dec_ref:(c:Z3_context,p:Z3_probe)=>void;tactic_and_then:(c:Z3_context,t1:Z3_tactic,t2:Z3_tactic)=>Z3_tactic;tactic_or_else:(c:Z3_context,t1:Z3_tactic,t2:Z3_tactic)=>Z3_tactic;tactic_par_or:(c:Z3_context,ts:Z3_tactic[])=>Z3_tactic;tactic_par_and_then:(c:Z3_context,t1:Z3_tactic,t2:Z3_tactic)=>Z3_tactic;tactic_try_for:(c:Z3_context,t:Z3_tactic,ms:unsigned)=>Z3_tactic;tactic_when:(c:Z3_context,p:Z3_probe,t:Z3_tactic)=>Z3_tactic;tactic_cond:(c:Z3_context,p:Z3_probe,t1:Z3_tactic,t2:Z3_tactic)=>Z3_tactic;tactic_repeat:(c:Z3_context,t:Z3_tactic,max:unsigned)=>Z3_tactic;tactic_skip:(c:Z3_context)=>Z3_tactic;tactic_fail:(c:Z3_context)=>Z3_tactic;tactic_fail_if:(c:Z3_context,p:Z3_probe)=>Z3_tactic;tactic_fail_if_not_decided:(c:Z3_context)=>Z3_tactic;tactic_using_params:(c:Z3_context,t:Z3_tactic,p:Z3_params)=>Z3_tactic;probe_const:(x:Z3_context,val:double)=>Z3_probe;probe_lt:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_gt:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_le:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_ge:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_eq:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_and:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_or:(x:Z3_context,p1:Z3_probe,p2:Z3_probe)=>Z3_probe;probe_not:(x:Z3_context,p:Z3_probe)=>Z3_probe;get_num_tactics:(c:Z3_context)=>unsigned;get_tactic_name:(c:Z3_context,i:unsigned)=>string;get_num_probes:(c:Z3_context)=>unsigned;get_probe_name:(c:Z3_context,i:unsigned)=>string;tactic_get_help:(c:Z3_context,t:Z3_tactic)=>string;tactic_get_param_descrs:(c:Z3_context,t:Z3_tactic)=>Z3_param_descrs;tactic_get_descr:(c:Z3_context,name:string)=>string;probe_get_descr:(c:Z3_context,name:string)=>string;probe_apply:(c:Z3_context,p:Z3_probe,g:Z3_goal)=>double;tactic_apply:(c:Z3_context,t:Z3_tactic,g:Z3_goal)=>Promise<Z3_apply_result>;tactic_apply_ex:(c:Z3_context,t:Z3_tactic,g:Z3_goal,p:Z3_params)=>Promise<Z3_apply_result>;apply_result_inc_ref:(c:Z3_context,r:Z3_apply_result)=>void;apply_result_dec_ref:(c:Z3_context,r:Z3_apply_result)=>void;apply_result_to_string:(c:Z3_context,r:Z3_apply_result)=>string;apply_result_get_num_subgoals:(c:Z3_context,r:Z3_apply_result)=>unsigned;apply_result_get_subgoal:(c:Z3_context,r:Z3_apply_result,i:unsigned)=>Z3_goal;mk_solver:(c:Z3_context)=>Z3_solver;mk_simple_solver:(c:Z3_context)=>Z3_solver;mk_solver_for_logic:(c:Z3_context,logic:Z3_symbol)=>Z3_solver;mk_solver_from_tactic:(c:Z3_context,t:Z3_tactic)=>Z3_solver;solver_translate:(source:Z3_context,s:Z3_solver,target:Z3_context)=>Z3_solver;solver_import_model_converter:(ctx:Z3_context,src:Z3_solver,dst:Z3_solver)=>void;solver_get_help:(c:Z3_context,s:Z3_solver)=>string;solver_get_param_descrs:(c:Z3_context,s:Z3_solver)=>Z3_param_descrs;solver_set_params:(c:Z3_context,s:Z3_solver,p:Z3_params)=>void;solver_inc_ref:(c:Z3_context,s:Z3_solver)=>void;solver_dec_ref:(c:Z3_context,s:Z3_solver)=>void;solver_interrupt:(c:Z3_context,s:Z3_solver)=>void;solver_push:(c:Z3_context,s:Z3_solver)=>void;solver_pop:(c:Z3_context,s:Z3_solver,n:unsigned)=>void;solver_reset:(c:Z3_context,s:Z3_solver)=>void;solver_get_num_scopes:(c:Z3_context,s:Z3_solver)=>unsigned;solver_assert:(c:Z3_context,s:Z3_solver,a:Z3_ast)=>void;solver_assert_and_track:(c:Z3_context,s:Z3_solver,a:Z3_ast,p:Z3_ast)=>void;solver_from_file:(c:Z3_context,s:Z3_solver,file_name:string)=>void;solver_from_string:(c:Z3_context,s:Z3_solver,file_name:string)=>void;solver_get_assertions:(c:Z3_context,s:Z3_solver)=>Z3_ast_vector;solver_get_units:(c:Z3_context,s:Z3_solver)=>Z3_ast_vector;solver_get_trail:(c:Z3_context,s:Z3_solver)=>Z3_ast_vector;solver_get_non_units:(c:Z3_context,s:Z3_solver)=>Z3_ast_vector;solver_get_levels:(c:Z3_context,s:Z3_solver,literals:Z3_ast_vector,levels:unsigned[])=>void;solver_congruence_root:(c:Z3_context,s:Z3_solver,a:Z3_ast)=>Z3_ast;solver_congruence_next:(c:Z3_context,s:Z3_solver,a:Z3_ast)=>Z3_ast;solver_next_split:(c:Z3_context,cb:Z3_solver_callback,t:Z3_ast,idx:unsigned,phase:Z3_lbool)=>void;solver_propagate_declare:(c:Z3_context,name:Z3_symbol,domain:Z3_sort[],range:Z3_sort)=>Z3_func_decl;solver_propagate_register:(c:Z3_context,s:Z3_solver,e:Z3_ast)=>void;solver_propagate_register_cb:(c:Z3_context,cb:Z3_solver_callback,e:Z3_ast)=>void;solver_propagate_consequence:(c:Z3_context,cb:Z3_solver_callback,fixed:Z3_ast[],eq_lhs:Z3_ast[],eq_rhs:Z3_ast[],conseq:Z3_ast)=>void;solver_check:(c:Z3_context,s:Z3_solver)=>Promise<Z3_lbool>;solver_check_assumptions:(c:Z3_context,s:Z3_solver,assumptions:Z3_ast[])=>Promise<Z3_lbool>;get_implied_equalities:(c:Z3_context,s:Z3_solver,terms:Z3_ast[])=>{rv:Z3_lbool;class_ids:unsigned[];};solver_get_consequences:(c:Z3_context,s:Z3_solver,assumptions:Z3_ast_vector,variables:Z3_ast_vector,consequences:Z3_ast_vector)=>Promise<Z3_lbool>;solver_cube:(c:Z3_context,s:Z3_solver,vars:Z3_ast_vector,backtrack_level:unsigned)=>Promise<Z3_ast_vector>;solver_get_model:(c:Z3_context,s:Z3_solver)=>Z3_model;solver_get_proof:(c:Z3_context,s:Z3_solver)=>Z3_ast;solver_get_unsat_core:(c:Z3_context,s:Z3_solver)=>Z3_ast_vector;solver_get_reason_unknown:(c:Z3_context,s:Z3_solver)=>string;solver_get_statistics:(c:Z3_context,s:Z3_solver)=>Z3_stats;solver_to_string:(c:Z3_context,s:Z3_solver)=>string;solver_to_dimacs_string:(c:Z3_context,s:Z3_solver,include_names:boolean)=>string;stats_to_string:(c:Z3_context,s:Z3_stats)=>string;stats_inc_ref:(c:Z3_context,s:Z3_stats)=>void;stats_dec_ref:(c:Z3_context,s:Z3_stats)=>void;stats_size:(c:Z3_context,s:Z3_stats)=>unsigned;stats_get_key:(c:Z3_context,s:Z3_stats,idx:unsigned)=>string;stats_is_uint:(c:Z3_context,s:Z3_stats,idx:unsigned)=>boolean;stats_is_double:(c:Z3_context,s:Z3_stats,idx:unsigned)=>boolean;stats_get_uint_value:(c:Z3_context,s:Z3_stats,idx:unsigned)=>unsigned;stats_get_double_value:(c:Z3_context,s:Z3_stats,idx:unsigned)=>double;get_estimated_alloc_size:()=>uint64_t;algebraic_is_value:(c:Z3_context,a:Z3_ast)=>boolean;algebraic_is_pos:(c:Z3_context,a:Z3_ast)=>boolean;algebraic_is_neg:(c:Z3_context,a:Z3_ast)=>boolean;algebraic_is_zero:(c:Z3_context,a:Z3_ast)=>boolean;algebraic_sign:(c:Z3_context,a:Z3_ast)=>int;algebraic_add:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>Z3_ast;algebraic_sub:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>Z3_ast;algebraic_mul:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>Z3_ast;algebraic_div:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>Z3_ast;algebraic_root:(c:Z3_context,a:Z3_ast,k:unsigned)=>Z3_ast;algebraic_power:(c:Z3_context,a:Z3_ast,k:unsigned)=>Z3_ast;algebraic_lt:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>boolean;algebraic_gt:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>boolean;algebraic_le:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>boolean;algebraic_ge:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>boolean;algebraic_eq:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>boolean;algebraic_neq:(c:Z3_context,a:Z3_ast,b:Z3_ast)=>boolean;algebraic_roots:(c:Z3_context,p:Z3_ast,a:Z3_ast[])=>Promise<Z3_ast_vector>;algebraic_eval:(c:Z3_context,p:Z3_ast,a:Z3_ast[])=>Promise<int>;algebraic_get_poly:(c:Z3_context,a:Z3_ast)=>Z3_ast_vector;algebraic_get_i:(c:Z3_context,a:Z3_ast)=>unsigned;mk_ast_vector:(c:Z3_context)=>Z3_ast_vector;ast_vector_inc_ref:(c:Z3_context,v:Z3_ast_vector)=>void;ast_vector_dec_ref:(c:Z3_context,v:Z3_ast_vector)=>void;ast_vector_size:(c:Z3_context,v:Z3_ast_vector)=>unsigned;ast_vector_get:(c:Z3_context,v:Z3_ast_vector,i:unsigned)=>Z3_ast;ast_vector_set:(c:Z3_context,v:Z3_ast_vector,i:unsigned,a:Z3_ast)=>void;ast_vector_resize:(c:Z3_context,v:Z3_ast_vector,n:unsigned)=>void;ast_vector_push:(c:Z3_context,v:Z3_ast_vector,a:Z3_ast)=>void;ast_vector_translate:(s:Z3_context,v:Z3_ast_vector,t:Z3_context)=>Z3_ast_vector;ast_vector_to_string:(c:Z3_context,v:Z3_ast_vector)=>string;mk_ast_map:(c:Z3_context)=>Z3_ast_map;ast_map_inc_ref:(c:Z3_context,m:Z3_ast_map)=>void;ast_map_dec_ref:(c:Z3_context,m:Z3_ast_map)=>void;ast_map_contains:(c:Z3_context,m:Z3_ast_map,k:Z3_ast)=>boolean;ast_map_find:(c:Z3_context,m:Z3_ast_map,k:Z3_ast)=>Z3_ast;ast_map_insert:(c:Z3_context,m:Z3_ast_map,k:Z3_ast,v:Z3_ast)=>void;ast_map_erase:(c:Z3_context,m:Z3_ast_map,k:Z3_ast)=>void;ast_map_reset:(c:Z3_context,m:Z3_ast_map)=>void;ast_map_size:(c:Z3_context,m:Z3_ast_map)=>unsigned;ast_map_keys:(c:Z3_context,m:Z3_ast_map)=>Z3_ast_vector;ast_map_to_string:(c:Z3_context,m:Z3_ast_map)=>string;mk_fixedpoint:(c:Z3_context)=>Z3_fixedpoint;fixedpoint_inc_ref:(c:Z3_context,d:Z3_fixedpoint)=>void;fixedpoint_dec_ref:(c:Z3_context,d:Z3_fixedpoint)=>void;fixedpoint_add_rule:(c:Z3_context,d:Z3_fixedpoint,rule:Z3_ast,name:Z3_symbol)=>void;fixedpoint_add_fact:(c:Z3_context,d:Z3_fixedpoint,r:Z3_func_decl,args:unsigned[])=>void;fixedpoint_assert:(c:Z3_context,d:Z3_fixedpoint,axiom:Z3_ast)=>void;fixedpoint_query:(c:Z3_context,d:Z3_fixedpoint,query:Z3_ast)=>Promise<Z3_lbool>;fixedpoint_query_relations:(c:Z3_context,d:Z3_fixedpoint,relations:Z3_func_decl[])=>Promise<Z3_lbool>;fixedpoint_get_answer:(c:Z3_context,d:Z3_fixedpoint)=>Z3_ast;fixedpoint_get_reason_unknown:(c:Z3_context,d:Z3_fixedpoint)=>string;fixedpoint_update_rule:(c:Z3_context,d:Z3_fixedpoint,a:Z3_ast,name:Z3_symbol)=>void;fixedpoint_get_num_levels:(c:Z3_context,d:Z3_fixedpoint,pred:Z3_func_decl)=>unsigned;fixedpoint_get_cover_delta:(c:Z3_context,d:Z3_fixedpoint,level:int,pred:Z3_func_decl)=>Z3_ast;fixedpoint_add_cover:(c:Z3_context,d:Z3_fixedpoint,level:int,pred:Z3_func_decl,property:Z3_ast)=>void;fixedpoint_get_statistics:(c:Z3_context,d:Z3_fixedpoint)=>Z3_stats;fixedpoint_register_relation:(c:Z3_context,d:Z3_fixedpoint,f:Z3_func_decl)=>void;fixedpoint_set_predicate_representation:(c:Z3_context,d:Z3_fixedpoint,f:Z3_func_decl,relation_kinds:Z3_symbol[])=>void;fixedpoint_get_rules:(c:Z3_context,f:Z3_fixedpoint)=>Z3_ast_vector;fixedpoint_get_assertions:(c:Z3_context,f:Z3_fixedpoint)=>Z3_ast_vector;fixedpoint_set_params:(c:Z3_context,f:Z3_fixedpoint,p:Z3_params)=>void;fixedpoint_get_help:(c:Z3_context,f:Z3_fixedpoint)=>string;fixedpoint_get_param_descrs:(c:Z3_context,f:Z3_fixedpoint)=>Z3_param_descrs;fixedpoint_to_string:(c:Z3_context,f:Z3_fixedpoint,queries:Z3_ast[])=>string;fixedpoint_from_string:(c:Z3_context,f:Z3_fixedpoint,s:string)=>Z3_ast_vector;fixedpoint_from_file:(c:Z3_context,f:Z3_fixedpoint,s:string)=>Z3_ast_vector;mk_fpa_rounding_mode_sort:(c:Z3_context)=>Z3_sort;mk_fpa_round_nearest_ties_to_even:(c:Z3_context)=>Z3_ast;mk_fpa_rne:(c:Z3_context)=>Z3_ast;mk_fpa_round_nearest_ties_to_away:(c:Z3_context)=>Z3_ast;mk_fpa_rna:(c:Z3_context)=>Z3_ast;mk_fpa_round_toward_positive:(c:Z3_context)=>Z3_ast;mk_fpa_rtp:(c:Z3_context)=>Z3_ast;mk_fpa_round_toward_negative:(c:Z3_context)=>Z3_ast;mk_fpa_rtn:(c:Z3_context)=>Z3_ast;mk_fpa_round_toward_zero:(c:Z3_context)=>Z3_ast;mk_fpa_rtz:(c:Z3_context)=>Z3_ast;mk_fpa_sort:(c:Z3_context,ebits:unsigned,sbits:unsigned)=>Z3_sort;mk_fpa_sort_half:(c:Z3_context)=>Z3_sort;mk_fpa_sort_16:(c:Z3_context)=>Z3_sort;mk_fpa_sort_single:(c:Z3_context)=>Z3_sort;mk_fpa_sort_32:(c:Z3_context)=>Z3_sort;mk_fpa_sort_double:(c:Z3_context)=>Z3_sort;mk_fpa_sort_64:(c:Z3_context)=>Z3_sort;mk_fpa_sort_quadruple:(c:Z3_context)=>Z3_sort;mk_fpa_sort_128:(c:Z3_context)=>Z3_sort;mk_fpa_nan:(c:Z3_context,s:Z3_sort)=>Z3_ast;mk_fpa_inf:(c:Z3_context,s:Z3_sort,negative:boolean)=>Z3_ast;mk_fpa_zero:(c:Z3_context,s:Z3_sort,negative:boolean)=>Z3_ast;mk_fpa_fp:(c:Z3_context,sgn:Z3_ast,exp:Z3_ast,sig:Z3_ast)=>Z3_ast;mk_fpa_numeral_float:(c:Z3_context,v:float,ty:Z3_sort)=>Z3_ast;mk_fpa_numeral_double:(c:Z3_context,v:double,ty:Z3_sort)=>Z3_ast;mk_fpa_numeral_int:(c:Z3_context,v:int,ty:Z3_sort)=>Z3_ast;mk_fpa_numeral_int_uint:(c:Z3_context,sgn:boolean,exp:int,sig:unsigned,ty:Z3_sort)=>Z3_ast;mk_fpa_numeral_int64_uint64:(c:Z3_context,sgn:boolean,exp:int64_t,sig:uint64_t,ty:Z3_sort)=>Z3_ast;mk_fpa_abs:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_neg:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_add:(c:Z3_context,rm:Z3_ast,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_sub:(c:Z3_context,rm:Z3_ast,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_mul:(c:Z3_context,rm:Z3_ast,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_div:(c:Z3_context,rm:Z3_ast,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_fma:(c:Z3_context,rm:Z3_ast,t1:Z3_ast,t2:Z3_ast,t3:Z3_ast)=>Z3_ast;mk_fpa_sqrt:(c:Z3_context,rm:Z3_ast,t:Z3_ast)=>Z3_ast;mk_fpa_rem:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_round_to_integral:(c:Z3_context,rm:Z3_ast,t:Z3_ast)=>Z3_ast;mk_fpa_min:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_max:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_leq:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_lt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_geq:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_gt:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_eq:(c:Z3_context,t1:Z3_ast,t2:Z3_ast)=>Z3_ast;mk_fpa_is_normal:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_is_subnormal:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_is_zero:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_is_infinite:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_is_nan:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_is_negative:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_is_positive:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_to_fp_bv:(c:Z3_context,bv:Z3_ast,s:Z3_sort)=>Z3_ast;mk_fpa_to_fp_float:(c:Z3_context,rm:Z3_ast,t:Z3_ast,s:Z3_sort)=>Z3_ast;mk_fpa_to_fp_real:(c:Z3_context,rm:Z3_ast,t:Z3_ast,s:Z3_sort)=>Z3_ast;mk_fpa_to_fp_signed:(c:Z3_context,rm:Z3_ast,t:Z3_ast,s:Z3_sort)=>Z3_ast;mk_fpa_to_fp_unsigned:(c:Z3_context,rm:Z3_ast,t:Z3_ast,s:Z3_sort)=>Z3_ast;mk_fpa_to_ubv:(c:Z3_context,rm:Z3_ast,t:Z3_ast,sz:unsigned)=>Z3_ast;mk_fpa_to_sbv:(c:Z3_context,rm:Z3_ast,t:Z3_ast,sz:unsigned)=>Z3_ast;mk_fpa_to_real:(c:Z3_context,t:Z3_ast)=>Z3_ast;fpa_get_ebits:(c:Z3_context,s:Z3_sort)=>unsigned;fpa_get_sbits:(c:Z3_context,s:Z3_sort)=>unsigned;fpa_is_numeral_nan:(c:Z3_context,t:Z3_ast)=>boolean;fpa_is_numeral_inf:(c:Z3_context,t:Z3_ast)=>boolean;fpa_is_numeral_zero:(c:Z3_context,t:Z3_ast)=>boolean;fpa_is_numeral_normal:(c:Z3_context,t:Z3_ast)=>boolean;fpa_is_numeral_subnormal:(c:Z3_context,t:Z3_ast)=>boolean;fpa_is_numeral_positive:(c:Z3_context,t:Z3_ast)=>boolean;fpa_is_numeral_negative:(c:Z3_context,t:Z3_ast)=>boolean;fpa_get_numeral_sign_bv:(c:Z3_context,t:Z3_ast)=>Z3_ast;fpa_get_numeral_significand_bv:(c:Z3_context,t:Z3_ast)=>Z3_ast;fpa_get_numeral_sign:(c:Z3_context,t:Z3_ast)=>int|null;fpa_get_numeral_significand_string:(c:Z3_context,t:Z3_ast)=>string;fpa_get_numeral_significand_uint64:(c:Z3_context,t:Z3_ast)=>uint64_t|null;fpa_get_numeral_exponent_string:(c:Z3_context,t:Z3_ast,biased:boolean)=>string;fpa_get_numeral_exponent_int64:(c:Z3_context,t:Z3_ast,biased:boolean)=>int64_t|null;fpa_get_numeral_exponent_bv:(c:Z3_context,t:Z3_ast,biased:boolean)=>Z3_ast;mk_fpa_to_ieee_bv:(c:Z3_context,t:Z3_ast)=>Z3_ast;mk_fpa_to_fp_int_real:(c:Z3_context,rm:Z3_ast,exp:Z3_ast,sig:Z3_ast,s:Z3_sort)=>Z3_ast;mk_optimize:(c:Z3_context)=>Z3_optimize;optimize_inc_ref:(c:Z3_context,d:Z3_optimize)=>void;optimize_dec_ref:(c:Z3_context,d:Z3_optimize)=>void;optimize_assert:(c:Z3_context,o:Z3_optimize,a:Z3_ast)=>void;optimize_assert_and_track:(c:Z3_context,o:Z3_optimize,a:Z3_ast,t:Z3_ast)=>void;optimize_assert_soft:(c:Z3_context,o:Z3_optimize,a:Z3_ast,weight:string,id:Z3_symbol)=>unsigned;optimize_maximize:(c:Z3_context,o:Z3_optimize,t:Z3_ast)=>unsigned;optimize_minimize:(c:Z3_context,o:Z3_optimize,t:Z3_ast)=>unsigned;optimize_push:(c:Z3_context,d:Z3_optimize)=>void;optimize_pop:(c:Z3_context,d:Z3_optimize)=>void;optimize_check:(c:Z3_context,o:Z3_optimize,assumptions:Z3_ast[])=>Promise<Z3_lbool>;optimize_get_reason_unknown:(c:Z3_context,d:Z3_optimize)=>string;optimize_get_model:(c:Z3_context,o:Z3_optimize)=>Z3_model;optimize_get_unsat_core:(c:Z3_context,o:Z3_optimize)=>Z3_ast_vector;optimize_set_params:(c:Z3_context,o:Z3_optimize,p:Z3_params)=>void;optimize_get_param_descrs:(c:Z3_context,o:Z3_optimize)=>Z3_param_descrs;optimize_get_lower:(c:Z3_context,o:Z3_optimize,idx:unsigned)=>Z3_ast;optimize_get_upper:(c:Z3_context,o:Z3_optimize,idx:unsigned)=>Z3_ast;optimize_get_lower_as_vector:(c:Z3_context,o:Z3_optimize,idx:unsigned)=>Z3_ast_vector;optimize_get_upper_as_vector:(c:Z3_context,o:Z3_optimize,idx:unsigned)=>Z3_ast_vector;optimize_to_string:(c:Z3_context,o:Z3_optimize)=>string;optimize_from_string:(c:Z3_context,o:Z3_optimize,s:string)=>void;optimize_from_file:(c:Z3_context,o:Z3_optimize,s:string)=>void;optimize_get_help:(c:Z3_context,t:Z3_optimize)=>string;optimize_get_statistics:(c:Z3_context,d:Z3_optimize)=>Z3_stats;optimize_get_assertions:(c:Z3_context,o:Z3_optimize)=>Z3_ast_vector;optimize_get_objectives:(c:Z3_context,o:Z3_optimize)=>Z3_ast_vector;polynomial_subresultants:(c:Z3_context,p:Z3_ast,q:Z3_ast,x:Z3_ast)=>Promise<Z3_ast_vector>;rcf_del:(c:Z3_context,a:Z3_rcf_num)=>void;rcf_mk_rational:(c:Z3_context,val:string)=>Z3_rcf_num;rcf_mk_small_int:(c:Z3_context,val:int)=>Z3_rcf_num;rcf_mk_pi:(c:Z3_context)=>Z3_rcf_num;rcf_mk_e:(c:Z3_context)=>Z3_rcf_num;rcf_mk_infinitesimal:(c:Z3_context)=>Z3_rcf_num;rcf_mk_roots:(c:Z3_context,a:Z3_rcf_num[])=>{rv:unsigned;roots:Z3_rcf_num[];};rcf_add:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>Z3_rcf_num;rcf_sub:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>Z3_rcf_num;rcf_mul:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>Z3_rcf_num;rcf_div:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>Z3_rcf_num;rcf_neg:(c:Z3_context,a:Z3_rcf_num)=>Z3_rcf_num;rcf_inv:(c:Z3_context,a:Z3_rcf_num)=>Z3_rcf_num;rcf_power:(c:Z3_context,a:Z3_rcf_num,k:unsigned)=>Z3_rcf_num;rcf_lt:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>boolean;rcf_gt:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>boolean;rcf_le:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>boolean;rcf_ge:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>boolean;rcf_eq:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>boolean;rcf_neq:(c:Z3_context,a:Z3_rcf_num,b:Z3_rcf_num)=>boolean;rcf_num_to_string:(c:Z3_context,a:Z3_rcf_num,compact:boolean,html:boolean)=>string;rcf_num_to_decimal_string:(c:Z3_context,a:Z3_rcf_num,prec:unsigned)=>string;rcf_get_numerator_denominator:(c:Z3_context,a:Z3_rcf_num)=>{n:Z3_rcf_num;d:Z3_rcf_num;};fixedpoint_query_from_lvl:(c:Z3_context,d:Z3_fixedpoint,query:Z3_ast,lvl:unsigned)=>Promise<Z3_lbool>;fixedpoint_get_ground_sat_answer:(c:Z3_context,d:Z3_fixedpoint)=>Z3_ast;fixedpoint_get_rules_along_trace:(c:Z3_context,d:Z3_fixedpoint)=>Z3_ast_vector;fixedpoint_get_rule_names_along_trace:(c:Z3_context,d:Z3_fixedpoint)=>Z3_symbol;fixedpoint_add_invariant:(c:Z3_context,d:Z3_fixedpoint,pred:Z3_func_decl,property:Z3_ast)=>void;fixedpoint_get_reachable:(c:Z3_context,d:Z3_fixedpoint,pred:Z3_func_decl)=>Z3_ast;qe_model_project:(c:Z3_context,m:Z3_model,bound:Z3_app[],body:Z3_ast)=>Z3_ast;qe_model_project_skolem:(c:Z3_context,m:Z3_model,bound:Z3_app[],body:Z3_ast,map:Z3_ast_map)=>Z3_ast;model_extrapolate:(c:Z3_context,m:Z3_model,fml:Z3_ast)=>Z3_ast;qe_lite:(c:Z3_context,vars:Z3_ast_vector,body:Z3_ast)=>Z3_ast;};}>;export{};", "/node_modules/z3-solver/build/node.d.ts": "import{Z3HighLevel}from'./high-level';import{Z3LowLevel}from'./low-level';export*from'./high-level/types';export{Z3Core,Z3LowLevel}from'./low-level';export*from'./low-level/types.__GENERATED__';export declare function init():Promise<Z3HighLevel&Z3LowLevel>;" };
var ts = __toESM(require("typescript"));
const MAIN = "main.ts";
function compile(source, fixupErrorLocations) {
  let libs = define_TS_LIBS_default;
  let options = {
    module: ts.ModuleKind.None,
    // comments interfere with codegen when mutating the AST `//a\nb` gets transformed to `return\n//a\nb`, instead of `//a\nreturn b\n`.
    removeComments: true,
    lib: ["lib.es2021.d.ts"],
    target: ts.ScriptTarget.ES2021,
    strict: true
  };
  let createdFiles = { __proto__: null };
  let host = {
    readFile: (fileName) => {
      if (fileName in libs) {
        return libs[fileName];
      }
      return void 0;
    },
    writeFile: (fileName, content) => {
      createdFiles[fileName] = content;
    },
    getSourceFile: (fileName, languageVersion) => {
      if (fileName === MAIN) {
        return source;
      }
      let sourceText = host.readFile(fileName);
      let result = sourceText !== void 0 ? ts.createSourceFile(fileName, sourceText, languageVersion) : void 0;
      if (fileName.includes("main")) debugger;
      return result;
    },
    getDefaultLibFileName: () => "lib.d.ts",
    getCurrentDirectory: () => "/",
    getDirectories: () => [],
    getCanonicalFileName: (fileName) => fileName,
    getNewLine: () => "\n",
    useCaseSensitiveFileNames: () => true,
    fileExists: (fileName) => {
      return false;
    },
    resolveModuleNames
  };
  function resolveModuleNames(moduleNames, containingFile) {
    return moduleNames.map((name) => {
      if (name === "z3-solver") {
        return {
          resolvedFileName: "/node_modules/z3-solver/build/browser.d.ts",
          isExternalLibraryImport: true
        };
      } else if (containingFile.startsWith("/node_modules/z3-solver/build/")) {
        let root = containingFile.split("/").slice(0, -1).join("/");
        let joined = root + "/" + name;
        joined = joined.replace(/(\/[^/]+\/\.\.\/)|(\/\.\/)/g, "/");
        for (let suffix of ["", ".d.ts", "/index.d.ts"]) {
          let candidate = joined + suffix;
          if (candidate in libs) {
            return {
              resolvedFileName: candidate,
              isExternalLibraryImport: false
            };
          }
        }
        throw new Error(`relative import of z3-solver internal file ${name} for ${containingFile} failed`);
      }
      throw new Error(`could not find module ${name}`);
    });
  }
  let program = ts.createProgram([MAIN], options, host);
  let emitResult = program.emit();
  let diagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics).map((diagnostic) => {
    if (diagnostic.file) {
      let { line, character: column } = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
      ({ line, column } = fixupErrorLocations({ line, column }));
      let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      return `${diagnostic.file.fileName} (${line + 1},${column + 1}): ${message}`;
    } else {
      return ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    }
  });
  if (diagnostics.length > 0) {
    return { success: false, message: diagnostics.join("\n") };
  }
  if (emitResult.emitSkipped || !("main.js" in createdFiles)) {
    return { success: false, message: "typechecking failed with unknown error" };
  }
  return { success: true, result: createdFiles["main.js"] };
}
function compileZ3JS(src) {
  let imports = `
  import type { init as initT, Model, Solver, BitVecNum, AstVector, Arith } from 'z3-solver';
  declare let init: typeof initT;
  declare let { Context, setParam }: Awaited<ReturnType<typeof init>>;
  declare let Z3: ReturnType<typeof Context<'main'>>;
  `;
  let wrapped = `
${imports}
export = (async () => {
${src}
})();
`;
  let offset = imports.split("\n").length + 2;
  function updateLineNums({ line, column }) {
    return { line: line - offset, column };
  }
  let sourceFile = ts.createSourceFile(MAIN, wrapped, ts.ScriptTarget.ES2021);
  if (sourceFile.statements.length !== 5) {
    throw new Error("failed to parse input: wrong number of statements");
  }
  let iife = sourceFile.statements[4];
  if (!ts.isCallExpression(iife.expression) || !ts.isParenthesizedExpression(iife.expression.expression) || !ts.isArrowFunction(iife.expression.expression.expression)) {
    throw new Error("failed to parse input: last line is not call");
  }
  let arrow = iife.expression.expression.expression;
  if (!ts.isBlock(arrow.body)) {
    throw new Error("failed to parse input: arrow body is not block");
  }
  let bodyLen = arrow.body.statements.length;
  if (bodyLen > 0) {
    let last = arrow.body.statements[bodyLen - 1];
    if (ts.isExpressionStatement(last)) {
      arrow.body.statements[bodyLen - 1] = ts.factory.createReturnStatement(last.expression);
    }
  }
  return compile(sourceFile, updateLineNums);
}
async function evalZ3JS(Z3, src) {
  let result = compileZ3JS(src);
  if (!result.success) {
    return Promise.reject(new Error(result.message));
  }
  let wrapped = `
(function (Z3, setParam) {
  'use strict';
  let module = {};
  ${result.result}
  return module.exports;
})
  `;
  return await (0, eval)(wrapped)(Z3.Context("main"), Z3.setParam);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compileZ3JS,
  evalZ3JS
});
