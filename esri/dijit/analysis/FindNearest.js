//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindNearest.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\n        \x3ctable class\x3d"esriFormTable" \x3e \n          \x3ctr\x3e\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findClosestFacilityIcon"\x3e\x3c/div\x3e\x3c/td\x3e\n            \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.findNearest}\x3c/td\x3e\n            \x3ctd\x3e\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\n                \x3c/div\x3e\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\n                \x3c/div\x3e              \n              \x3c/div\x3e                 \n            \x3c/td\x3e\n          \x3c/tr\x3e\n        \x3c/table\x3e\n      \x3c/div\x3e\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \n         \x3ctbody\x3e\n          \x3ctr\x3e\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.summarizeDefine}\x3c/td\x3e\n          \x3c/tr\x3e      \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n              \x3clabel class\x3d""\x3e${i18n.findLocationsIn}\x3c/label\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"NearbyLocationsLayer"\x3e\x3c/a\x3e\n              \x3cselect class\x3d"longInput esriLeadingMargin1"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n            \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\n              \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d""\x3e${i18n.measureLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"MeasurementMethod"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd style\x3d"padding:0.25em;width:34%"\x3e\n              \x3cdiv class\x3d"esriLeadingMargin1 bufferSelector selected" data-dojo-attach-point\x3d"_straightLine" \x3e\n                \x3cdiv class\x3d"bufferIcon esriStraightLineDistanceIcon"\x3e\x3c/div\x3e\n                \x3cdiv\x3e\x3clabel class\x3d"esriFloatLeading esriTrailingMargin1 esriSelectLabel"\x3e${i18n.straightLineDistance}\x3c/label\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n            \x3ctd style\x3d"padding:0.25em;width:33%"\x3e\n              \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_drivingDistance"\x3e\n                \x3cdiv class\x3d"bufferIcon esriDrivingDistanceIcon"\x3e\x3c/div\x3e\n                \x3cdiv\x3e\x3clabel data-dojo-attach-point\x3d"_drivingDistanceLabel" class\x3d"esriFloatLeading esriTrailingMargin1 esriSelectLabel"\x3e${i18n.drivingDistance}\x3c/label\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n            \x3ctd style\x3d"esriTrailingMargin2 padding:0.25em;width:33%"\x3e\n              \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_drivingTime" \x3e\n                \x3cdiv class\x3d"bufferIcon esriDrivingTimeIcon"\x3e\x3c/div\x3e\n                \x3cdiv\x3e\x3clabel data-dojo-attach-point\x3d"_drivingTimeLabel" class\x3d"esriFloatLeading esriSelectLabel"\x3e${i18n.drivingTime}\x3c/label\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\n            \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\n              \x3cdiv style\x3d"width:100%;" class\x3d"esriFloatLeading esriTrailingMargin3" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e          \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_addStatsHelpLink" esriHelpTopic\x3d"Cutoffs"\x3e\x3c/a\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput" data-dojo-attach-point\x3d"_forLocationLabel"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n         \x3ctr\x3e\n           \x3ctd colspan\x3d"3" class\x3d"esriLeadingMargin1" style\x3d"padding-bottom:0;"\x3e\n            \x3ctable style\x3d"width:100%"\x3e\n              \x3ctr\x3e\n                \x3ctd style\x3d"width:1%;"\x3e\n                  \x3cdiv class\x3d"esriLeadingMargin1" id\x3d"${id}.findNearestCheck" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"_findNearestCheck" data-dojo-attach-event\x3d"onChange:_handleFindNearestCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\n                \x3c/td\x3e\n                \x3ctd class\x3d"longTextInput"\x3e\n                  \x3clabel for\x3d"${id}.findNearestCheck" data-dojo-attach-point\x3d"_findNearestLabel"\x3e${i18n.findNearestLabel}\x3c/label\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\n            \x3c/table\x3e  \n           \x3c/td\x3e\n         \x3c/tr\x3e\n         \x3ctr\x3e\n           \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;padding-top:0.25;"\x3e\n             \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner"  class\x3d "esriMediumlabel esriLeadingMargin2"  data-dojo-attach-point\x3d"_maxCountInput" data-dojo-props\x3d"style: \'width:25%\',smallDelta:1,constraints: { min:1, max:100, places:0 }"/\x3e\n           \x3c/td\x3e\n         \x3c/tr\x3e\n         \x3ctr\x3e\n           \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;padding-top:0.25;"\x3e\n             \x3ctable style\x3d"width:100%"\x3e\n               \x3ctr\x3e\n                 \x3ctd style\x3d"width:1%;"\x3e\n                   \x3cdiv class\x3d"esriLeadingMargin1" id\x3d"${id}.limitSearchRangeCheck" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"_limitSearchRangeCheck" data-dojo-attach-event\x3d"onChange:_handleLimitSearchCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\n                 \x3c/td\x3e\n                 \x3ctd class\x3d"longTextInput"\x3e\n                   \x3clabel for\x3d"${id}.limitSearchRangeCheck" data-dojo-attach-point\x3d"_limitSearchRangeLabel"\x3e${i18n.limitSearchRangeCheck}\x3c/label\x3e\n                 \x3c/td\x3e\n               \x3c/tr\x3e\n             \x3c/table\x3e\n           \x3c/td\x3e\n         \x3c/tr\x3e\n         \x3ctr data-dojo-attach-point\x3d"_distanceLimitRow"\x3e\n            \x3ctd style\x3d"padding-right:0;padding-top:0;width:20%;"\x3e\n              \x3cinput type\x3d"text" class\x3d"esriLeadingMargin2" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDistValueChange" data-dojo-props\x3d"value:100,intermediateChanges:true,required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_searchCutoffInput" class\x3d"esriLeadingMargin1"  style\x3d"width:50%;"\x3e\n            \x3c/td\x3e\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-top:0;width:60%;"\x3e\n              \x3cselect class\x3d"mediumInput esriMediumlabel esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:65%;table-layout:fixed;"\x3e\n              \x3c/select\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr data-dojo-attach-point\x3d"_timeLimitRow" style\x3d"display:none;"\x3e\n            \x3ctd style\x3d"padding-top:0;width:24%;"\x3e\n              \x3clabel class\x3d"esriLeadingMargin2 esriTrailingMargin025"\x3e\n                \x3cinput type\x3d"text" class\x3d"" style\x3d"width:40%" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleTimeUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'1\',required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_hoursInput"\x3e\x3c/input\x3e\n                ${i18n.hoursSmall}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd style\x3d"padding-top:0;width:24%;"\x3e\n              \x3clabel class\x3d"esriLeadingMargin1 esriTrailingMargin025"\x3e\n                \x3cinput type\x3d"text" class\x3d"" style\x3d"width:40%" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleTimeUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'0\',required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_minutesInput"\x3e\x3c/input\x3e\n                ${i18n.minutesSmall}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd style\x3d"padding-top:0;width:24%;"\x3e\n              \x3clabel class\x3d"esriTrailingMargin025"\x3e\n                \x3cinput type\x3d"text" class\x3d"" style\x3d"width:40%" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleTimeUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'0\',required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_secondsInput"\x3e\x3c/input\x3e\n                ${i18n.secondsSmall}\x3c/label\x3e\n            \x3c/td\x3e                        \n          \x3c/tr\x3e\n                  \n          \x3c!--\x3ctr data-dojo-attach-point\x3d"_useTrafficLabelRow"\x3e\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom: 0"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.fourLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput"\x3e\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom: 0"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"UseTypicalTraffic"\x3e\x3c/a\x3e \n            \x3c/td\x3e             \n          \x3c/tr\x3e          \n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\n            \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\n              \x3cdiv style\x3d"width:100%;" class\x3d"esriFloatLeading esriTrailingMargin3" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e--\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\n              \x3clabel class\x3d"longTextInput"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputNearestLocationsLayer"\x3e\x3c/a\x3e \n            \x3c/td\x3e             \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\n            \x3c/td\x3e                \n          \x3c/tr\x3e \n          \x3c!--\x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_outputLayerInput2" value\x3d""\x3e\x3c/input\x3e\n            \x3c/td\x3e                \n          \x3c/tr\x3e--\x3e           \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\n                 \x3cinput class\x3d"longInput esriFolderSelect" dojoAttachPoint\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true"\x3e\x3c/input\x3e\n               \x3c/div\x3e              \n            \x3c/td\x3e\n          \x3c/tr\x3e                                      \n        \x3c/tbody\x3e         \n       \x3c/table\x3e\n     \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\n           ${i18n.useMapExtent}\n       \x3c/label\x3e\n      \x3c/div\x3e\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\n          ${i18n.runAnalysis}\n      \x3c/button\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\n    \x3c/div\x3e    \n\x3c/div\x3e\n'}});
define("esri/dijit/analysis/FindNearest","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox dijit/form/NumberSpinner dijit/form/NumberTextBox ../../kernel ./AnalysisBase ./CreditEstimator ./utils ./TrafficTime dojo/i18n!../../nls/jsapi dojo/text!./templates/FindNearest.html".split(" "),
function(q,r,b,l,d,e,z,A,f,h,p,B,C,c,D,s,t,u,v,w,E,F,G,H,I,J,K,L,M,N,O,P,x,Q,k,R,m,y){return r([s,t,u,v,w,x],{declaredClass:"esri.dijit.analysis.FindNearest",templateString:y,basePath:q.toUrl("."),widgetsInTemplate:!0,analysisLayer:null,nearLayers:null,summaryFields:null,outputLayerName:null,nearLayer:null,searchCutoff:100,searchCutoffUnits:"Miles",measurementType:"StraightLine",maxCount:1,returnFeatureCollection:!1,showSelectFolder:!1,showChooseExtent:!0,showCredits:!0,enableTravelModes:!0,showHelp:!0,
i18n:null,toolName:"FindNearest",helpFileName:"FindNearest",resultParameter:["nearestLayer","connectingLinesLayer"],_timeObj:null,constructor:function(a){this._pbConnects=[];this._statsRows=[];this._timeObj={hours:1,minutes:0,seconds:0};a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,d.disconnect);delete this._pbConnects;this._driveTimeClickHandles&&0<this._driveTimeClickHandles.length&&(l.forEach(this._driveTimeClickHandles,
d.disconnect),this._driveTimeClickHandles=null)},postMixInProperties:function(){this.inherited(arguments);b.mixin(this.i18n,m.bufferTool);b.mixin(this.i18n,m.driveTimes);b.mixin(this.i18n,m.FindNearestTool)},postCreate:function(){this.inherited(arguments);c.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",b.hitch(this,this.validateServiceName,this._outputLayerInput));this._hoursInput.set("validator",b.hitch(this,this.validateTime,"hours"));this._minutesInput.set("validator",
b.hitch(this,this.validateTime,"minutes"));this._secondsInput.set("validator",b.hitch(this,this.validateTime,"seconds"));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var g;g=this.nearLayers[this._layersSelect.get("value")];a.nearLayer=e.toJson(k.constructAnalysisInputLyrObj(g));a.measurementType=this.get("measurementType");a.analysisLayer=
e.toJson(k.constructAnalysisInputLyrObj(this.analysisLayer));!0===this._searchCutoffInput.get("value")?(a.searchCutoff=this.get("searchCutoff"),"DrivingTime"===this.get("measurementType")?a.searchCutoffUnits="Minutes":a.searchCutoffUnits=this.get("searchCutoffUnits")):a.searchCutoff=null;!0===this._limitSearchRangeCheck.get("value")?a.maxCount=this.get("maxCount"):a.maxCount=null;this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&
(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(b.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",
!0);var a={},g={},b,c;b=this.nearLayers[this._layersSelect.get("value")];a.nearLayer=e.toJson(k.constructAnalysisInputLyrObj(b));a.measurementType=this.get("measurementType");a.analysisLayer=e.toJson(k.constructAnalysisInputLyrObj(this.analysisLayer));this._limitSearchRangeCheck.get("checked")?(a.searchCutoff=this.get("searchCutoff"),"DrivingTime"!==this.get("measurementType")&&(a.searchCutoffUnits=this.get("searchCutoffUnits"))):a.searchCutoff=null;this._findNearestCheck.get("checked")?a.maxCount=
this.get("maxCount"):a.maxCount=null;this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)}));
this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&(c.extent=this.map.extent._normalize(!0)),a.context=e.toJson(c));g.jobParams=a;this._saveBtn.set("disabled",!1);g.itemParams={description:f.substitute(this.i18n.itemDescription,{sumNearbyLayerName:this.analysisLayer.name,summaryLayerName:b.name}),tags:f.substitute(this.i18n.itemTags,{sumNearbyLayerName:this.analysisLayer.name,summaryLayerName:b.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(g.itemParams.folder=
this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");this.execute(g)}},_handleLayerChange:function(a){this.outputLayerName=f.substitute(this.i18n.outputLayerName,{layer:this.nearLayers[a].name,sumNearbyLayerName:this.analysisLayer.name});this._outputLayerInput.set("value",this.outputLayerName)},_handleLimitSearchCheckChange:function(a){"DrivingTime"===this.get("measurementType")?(this._hoursInput.set("disabled",!a),this._minutesInput.set("disabled",!a),this._secondsInput.set("disabled",
!a)):(this._distanceUnitsSelect.set("disabled",!a),this._searchCutoffInput.set("disabled",!a))},_handleFindNearestCheckChange:function(a){this._maxCountInput.set("disabled",!a)},_handleTimeUnitsChange:function(a){},_handleDistValueChange:function(a){this.set("outputLayerName")},_handleDistUnitsChange:function(a){this.set("outputLayerName");this.set("searchCutoffUnits",a)},_handleDistanceTypeChange:function(a){this.set("measurementType",a);c.remove(this._straightLine,"selected");c.remove(this._drivingTime,
"selected");c.remove(this._drivingDistance,"selected");a&&(c.add("DrivingTime"===a?this._drivingTime:"DrivingDistance"===a?this._drivingDistance:this._straightLine,"selected"),h.set(this._useTrafficRow,"display","DrivingTime"===a?"":"none"),h.set(this._distanceLimitRow,"display","DrivingTime"===a?"none":""),h.set(this._timeLimitRow,"display","DrivingTime"===a?"":"none"),this._trafficTimeWidget.set("disabled","DrivingTime"!==a),this._trafficTimeWidget.set("reset","DrivingTime"!==a));"DrivingTime"===
a?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}])):(this.get("searchCutoffUnits")&&this.set("searchCutoffUnits",this.get("searchCutoffUnits")),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},
{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),"StraightLine"===a&&this._distanceUnitsSelect.addOption([{type:"separator"},{value:"NauticalMiles",label:this.i18n.nautMiles}]),this._distanceUnitsSelect.set("value",this.searchCutoffUnits));this.set("outputLayerName")},_save:function(){},_buildUI:function(){k.initHelpLinks(this.domNode,this.showHelp);this.get("enableTravelModes")||
this._updateTravelModes(this.enableTravelModes);this.analysisLayer&&(p.set(this._aggregateToolDescription,"innerHTML",f.substitute(this.i18n.summarizeDefine,{sumNearbyLayerName:this.analysisLayer.name})),p.set(this._forLocationLabel,"innerHTML",f.substitute(this.i18n.forEachLocationLabel,{sumNearbyLayerName:this.analysisLayer.name})),"esriGeometryPoint"!==this.analysisLayer.geometryType&&(this.set("enableTravelModes",!1),this._updateTravelModes(!1)));this.nearLayers&&l.forEach(this.nearLayers,function(a,
b){a!==this.analysisLayer&&(this._layersSelect.addOption({value:b,label:a.name}),this.outputLayerName||(this.outputLayerName=f.substitute(this.i18n.outputLayerName,{layer:a.name,sumNearbyLayerName:this.analysisLayer.name}),this.outputLinesLayerName=f.substitute(this.i18n.outputConnectingLayerName,{layer:a.name,sumNearbyLayerName:this.analysisLayer.name})))},this);this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);this.nearLayer&&this._layersSelect.set();h.set(this._chooseFolderRow,
"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(b.hitch(this,function(a){this.folderStore=a;this._webMapFolderSelect.set("store",a);this._webMapFolderSelect.set("value",this.portalUser.username)}));h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"block":"none");this.measurementType&&"DrivingTime"!==this.measurementType?(this.searchCutoffUnits&&this._distanceUnitsSelect.set("value",this.searchCutoffUnits),this.searchCutoff&&this._searchCutoffInput.set("value",
this.searchCutoff)):this.measurementType&&"DrivingTime"===this.measurementType&&this._timeObj!==this.searchCutoff&&(this._hoursInput.set("value",parseInt(this.searchCutoff.hours,10)),this._minutesInput.set("value",parseInt(this.searchCutoff.minutes,10)),this._secondsInput.set("value",parseInt(this.searchCutoff.seconds,10)),this._timeObj.hours=parseInt(this.searchCutoff.hours,10),this._timeObj.minutes=parseInt(this.searchCutoff.minutes,10),this._timeObj.seconds=parseInt(this.searchCutoff.seconds,10));
this._handleDistanceTypeChange(this.measurementType);this.maxCount&&this._maxCountInput.set("value",this.maxCount);this._loadConnections()},_loadConnections:function(){this.on("start",b.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",b.hitch(this,"_onClose",!1));this.enableTravelModes&&(this._driveTimeClickHandles=[],this._driveTimeClickHandles.push(d.connect(this._drivingDistance,"onclick",b.hitch(this,"_handleDistanceTypeChange","DrivingDistance"))),this._driveTimeClickHandles.push(d.connect(this._drivingTime,
"onclick",b.hitch(this,"_handleDistanceTypeChange","DrivingTime"))),this._driveTimeClickHandles.push(d.connect(this._straightLine,"onclick",b.hitch(this,"_handleDistanceTypeChange","StraightLine"))));this.watch("enableTravelModes",b.hitch(this,function(a,c,n){this._updateTravelModes(n);n&&!this._driveTimeClickHandles?(this._driveTimeClickHandles=[],this._driveTimeClickHandles.push(d.connect(this._drivingDistance,"onclick",b.hitch(this,"_handleDistanceTypeChange","DrivingDistance"))),this._driveTimeClickHandles.push(d.connect(this._drivingTime,
"onclick",b.hitch(this,"_handleDistanceTypeChange","DrivingTime"))),this._driveTimeClickHandles.push(d.connect(this._straightLine,"onclick",b.hitch(this,"_handleDistanceTypeChange","StraightLine")))):!n&&this._driveTimeClickHandles&&(l.forEach(this._driveTimeClickHandles,d.disconnect),this._driveTimeClickHandles=null)}))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setAnalysisLayerAttr:function(a){this.analysisLayer=
a},_getAnalysisLayerAttr:function(a){return this.analysisLayer},_setNearLayersAttr:function(a){this.nearLayers=a},_setLayersAttr:function(a){this.nearLayers=[]},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setShowSelectFolderAttr:function(a){this.showSelectFolder=a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setMapAttr:function(a){this.map=
a},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(a){this.showHelp=a},_getShowHelpAttr:function(){return this.showHelp},_setSearchCutoffUnitsAttr:function(a){this.searchCutoffUnits=a},_getSearchCutoffUnitsAttr:function(){return this.searchCutoffUnits},_setMeasurementTypeAttr:function(a){this.measurementType=a},_getMeasurementTypeAttr:function(){return this.measurementType},_getSearchCutoffAttr:function(){this.measurementType&&"DrivingTime"===this.measurementType?this._timeObj&&
(this.searchCutoff=60*this._timeObj.hours+this._timeObj.minutes+this._timeObj.seconds/60):this.searchCutoff=this._searchCutoffInput.get("value");return this.searchCutoff},_setSearchCutoffAttr:function(a){a&&(this.searchCutoff=a)},_getMaxCountAttr:function(){return this.maxCount=this._maxCountInput.get("value")},_setMaxCountAttr:function(a){this.maxCount=a},_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=
a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setEnableTravelModesAttr:function(a){this._set("enableTravelModes",a)},validateServiceName:function(a,b){var c=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(b);return 0===b.length||0===f.trim(b).length?(this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):c?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName),!1):98<b.length?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),
!1):!0},validateTime:function(a,b){var c=!0,d;d=parseInt(b,10);"hours"===a?this._timeObj.hours=d:"minutes"===a?this._timeObj.minutes=d:"seconds"===a&&(this._timeObj.seconds=d);0===this._timeObj.hours&&0===this._timeObj.minutes&&0===this._timeObj.seconds&&(c=!1);return c},_connect:function(a,b,c){this._pbConnects.push(d.connect(a,b,c))},_updateTravelModes:function(a){a?(c.remove(this._drivingTime,"disabled"),c.remove(this._drivingDistance,"disabled"),c.add(this._drivingDistanceLabel,"esriSelectLabel"),
c.add(this._drivingTimeLabel,"esriSelectLabel")):(c.add(this._drivingTime,"disabled"),c.add(this._drivingDistance,"disabled"),c.remove(this._drivingDistanceLabel,"esriSelectLabel"),c.remove(this._drivingTimeLabel,"esriSelectLabel"),c.contains(this._drivingTime,"selected")&&c.remove(this._drivingTime,"selected"),c.contains(this._drivingDistance,"selected")&&c.remove(this._drivingDistance,"selected"))},onSave:function(){},onClose:function(){}})});
//@ sourceMappingURL=FindNearest.js.map