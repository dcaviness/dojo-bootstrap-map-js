//>>built
define("esri/symbols/FillSymbol","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ./Symbol ./SimpleLineSymbol".split(" "),function(b,c,f,g,d,e){return b(d,{declaredClass:"esri.symbol.FillSymbol",constructor:function(a){a&&c.isObject(a)&&a.outline&&(this.outline=new e(a.outline))},setOutline:function(a){this.outline=a;return this},toJson:function(){var a=this.inherited("toJson",arguments);this.outline&&(a.outline=this.outline.toJson());return a}})});
//@ sourceMappingURL=FillSymbol.js.map