/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='assets/images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Background',
            type:'image',
            rect:['0px','0px','800px','600px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Game_frontpage.jpg",'0px','0px']
         },
         {
            id:'Logo',
            type:'image',
            rect:['817px','-142px','283px','132px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
         },
         {
            id:'QUIT',
            type:'rect',
            rect:['533px','493px','230px','70px','auto','auto'],
            borderRadius:["8px 8px","8px 8px","8px 8px","8px 8px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'HELP',
            type:'rect',
            rect:['533px','403px','230px','70px','auto','auto'],
            borderRadius:["8px 8px","8px 8px","8px 8px","8px 8px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'START',
            type:'rect',
            rect:['533px','309px','230px','70px','auto','auto'],
            borderRadius:["8px 8px","8px 8px","8px 8px","8px 8px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Logo}": [
            ["style", "top", '-160px'],
            ["style", "opacity", '0'],
            ["style", "left", '741px'],
            ["style", "display", 'block']
         ],
         "${_START}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '533px'],
            ["style", "width", '230px'],
            ["style", "top", '309px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '70px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_HELP}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '533px'],
            ["style", "width", '230px'],
            ["style", "top", '403px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '70px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '800px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_QUIT}": [
            ["style", "border-top-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0'],
            ["style", "left", '533px'],
            ["style", "width", '230px'],
            ["style", "top", '493px'],
            ["style", "border-bottom-left-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '70px'],
            ["style", "border-top-right-radius", [8,8], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Background}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_Logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
            { id: "eid13", tween: [ "style", "${_Logo}", "left", '487px', { fromValue: '741px'}], position: 0, duration: 2000 },
            { id: "eid14", tween: [ "style", "${_Logo}", "top", '32px', { fromValue: '-160px'}], position: 0, duration: 2000 },
            { id: "eid35", tween: [ "style", "${_HELP}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_HELP}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000 },
            { id: "eid7", tween: [ "style", "${_Logo}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_START}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_START}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 1000 },
            { id: "eid36", tween: [ "style", "${_QUIT}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_QUIT}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Frog_game");
