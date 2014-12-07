/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         $(sym.lookupSelector("START")).css('background-image', 'url(assets/images/start.png)');
         $(sym.lookupSelector("HELP")).css('background-image', 'url(assets/images/help.png)');
         $(sym.lookupSelector("QUIT")).css('background-image', 'url(assets/images/quit.png)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_START}", "mouseover", function(sym, e) {
         $(sym.lookupSelector("START")).css('background-image', 'url(assets/images/start_hover.png)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_START}", "mouseout", function(sym, e) {
         $(sym.lookupSelector("START")).css('background-image', 'url(assets/images/start.png)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HELP}", "mouseover", function(sym, e) {
         $(sym.lookupSelector("HELP")).css('background-image', 'url(assets/images/help_hover.png)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_QUIT}", "mouseover", function(sym, e) {
         $(sym.lookupSelector("QUIT")).css('background-image', 'url(assets/images/quit_hover.png)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HELP}", "mouseout", function(sym, e) {
         $(sym.lookupSelector("HELP")).css('background-image', 'url(assets/images/help.png)');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_QUIT}", "mouseout", function(sym, e) {
         $(sym.lookupSelector("QUIT")).css('background-image', 'url(assets/images/quit.png)');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "Frog_game");