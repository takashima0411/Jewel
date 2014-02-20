var jewel = {};

//メインドキュメントがロードされるのを待つ
window.addEventListener("load",function(){

  //ダイナミックロードを開始
  Modernizr.load([
    {
        //これらのファイルは必ずロードされる
        load : [
          "scripts/sizzle.js",
          "scripts/dom.js",
          "scripts/game.js"
        ],
        // すべてのファイルがロード、実行を終えた時に呼び出される
        complete : function() {
          jewel.game.showScreen("splash-screen");
        }
    }
  ]);

}, false);