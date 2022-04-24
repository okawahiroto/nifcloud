// ncmbモジュールの読み込み
var NCMB = require("ncmb");

// mobile backendアプリとの連携
var ncmb = new NCMB("87e7c4ad47869e91efe1ea3b992c56fdf49634367e91bcf8717ca6b7e340a484","8031516da93d3eff9ac91ade42977fa6c78a2fa1db7829a8ea284b3e67878c68");

// クラスのTestClassを作成
var TestClass = ncmb.DataStore("TestClass");

// データストアへの登録
var testClass = new TestClass();
testClass.set("message", "Hello, NCMB!");
testClass.save()
         .then(function(){
            // 保存に成功した場合の処理
            console.log("保存に成功しました");
          })
         .catch(function(err){
            // 保存に失敗した場合の処理
            console.log("保存に失敗しました");
          });
