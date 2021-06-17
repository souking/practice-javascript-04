'use strict';


// {
//   ①const d = [2019, 11, 14];
//   console.log(d.join('/'));
//   console.log(d.join(''));
//   ②const t = '17:08:24';
//   console.log(t.split(':'))
//   ③const [hour, minute, second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }
// #18、join()、split()を使う
// ①配列の要素を文字列として結合する方法
// 定数名.join()とし、引数に結合する時の文字列を書く
// 何も入れたくない場合は空白
// ②また、文字列を区切り文字のところで分割し、それを配列にする時はsplit()を使う
// あるデータが '17:08:24' と:で区切られていた場合、tに対してsplit()とし、引数には区切り文字の : を渡す
// ③また、分割代入を使って、hourに17、minuteに08、secondに24を代入して表示





// {
//   const scores = [10, 3, 9];
//   let sum = 0;
//   scores.forEach(score => {
//     sum += score;
//   });
//   const avg = sum / scores.length;
//   console.log(sum);
//   console.log(avg); // 7.333333333333
//   console.log(Math.floor(avg)); // 7
//   console.log(Math.ceil(avg)); // 8
//   console.log(Math.round(avg)); // 7
//   console.log(avg.toFixed(3)); // 7.333
//   console.log(Math.random());
// }
// #19、数値の操作
// sumはscoresを合計したもの
// avgはsumをscoresの数で割った平均値
// Math.floor()は小数点以下を切り捨て
// Math.ceil()は小数点以下を切り上げ
// Math.round()は四捨五入
// avg.toFixed()は指定した桁数の四捨五入をする、avg.toFixed(3)は四捨五入して小数点以下３桁を表示
// Math.random()は0以上1未満のランダムの数値を生成する





// {
  // console.log(Math.random());
  // ①0,1,2
  // Math.floor(Math.random() * 3)
  // ②0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // ③min, ..., max 
  // Math.floor(Math.random() * (max + 1 - min)) + min
  // ④console.log(Math.floor(Math.random() * 6) + 1); // サイコロの目
// }
// #20、ランダムな整数値
// ①０〜３のランダムな整数値
// ②０〜nまでのランダムな整数値
// ③最小値〜最大値のランダムな整数値
// ④ランダムなサイコロの目（１〜６）




// {
//   const d = new Date();
//   console.log(d);
//   console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
// }
// #21、現在時刻を扱う
// 現在日時を表すには new Date()を使う
// 年月日を数値として得る場合は
// const d = new Date(); を最初に書いておいて
// 年は、d.getFullYear()
// 月は、d.getMonthで（1月は0, 2月は1, ...）
// 日は、d.getDate
// 曜日は、d.getDayで(Sun:0, Mon:1, ...)
// 時間は、d.getHours() 
// 分は、d.getMinutes()
// 秒は、d.getSeconds()
// ミリ秒は、d.getMilliseconds()
// また、月などは0から始まってしまうので表示するときは +1 する





// {
//   const d = new Date(2019, 10); // 2019/11/01 00:00:00
//   d.setHours(10, 20, 30); // 2019/11/01 10:20:30
//   d.setDate(31); // 2019/12/01 10:20:30
//   d.setDate(d.getDay() + 3); // 2019/12/04 10:20:30
//   console.log(d);
// }
// #22、特定の日時
// new Date()を使い引数には年と月は必須で日付は1、時刻は0としてデータを作る
// 月が10の場合は0から始まるので11月になる
// 後から日付を操作したい場合はsetの命令文を使う
// また、日時を設定するとき範囲を超える（３２日など）時は自動的に修正してくれる
// dの値を更新して3日後にしたかった場合d.setDate()を使い、d.getDay() + 3 でdの日付を取得し3日後としてあげる





// {
//   ①alert('hello');
//   ②const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }
// #23、alert()とconfirm()
// ①警告
// helloと出てきて、OKを押すとダイアログが消える
// ②ユーザーに確認を求めるconfirm
// こちらのダイアログにはOKとキャンセルがある
// どちらが押されたかはconfirm()の返り値で取得しその返り値をanswerで受け取る
// OKの場合はtrueキャンセルはfalseとなる




// {
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }
//   const intervalId = setInterval(showTime, 1000);
// }
// #24、setinterval()、タイマー機能
// setInterval()という命令を使い、中には関数名とミリ秒単位の数値を書く（1000で1秒）とミリ秒感覚で繰り返す
// ＊関数の後ろに()をつけない（関数を引数にする場合は関数名だけを書く）
// また、タイマーを止めるにはsetIntervalを実行したときに返ってくる値が必要になるのでintervalIdという定数に代入
// clearInterval()にintervalIdを入れれば処理が止まる
// 今回は３回実行されたら処理終了





// {
//   ①function showTime() {
//     console.log(new Date());
//   }
//   setTimeout(showTime, 1000);

//   ②let i = 0;
//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1000);
//     i++
//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }
//   showTime();
// }
// #25、setTimeout()
// ①setTimeoutは指定した時間の後に1回だけ処理を実行する命令
// ②前回と同じように3回だけ表示する
// console.log()が実行された後にsetTimeout()で1秒後にまたshowTimeが呼ばれるので繰り返しになる
// setTimeoutを止めるにはclearTimeout()にsetTimeout()の返り値である定数を入れる
// #26、タイマー処理（setTimeout()とsetInterval()）の違い
// setInterval()は一定時間ごとの処理なので例えば、1000ミリ秒間隔で300ミリ秒かかる処理をした時は1000ミリ秒キッカリの間隔で実行されていく
// しかし1200ミリ秒かかるとしたら二つの処理が重なってしまいシステムに負荷がかかる
// 一方、setTimeout()は指定したミリ秒の後に処理されていくので重なることはない




// {
//   ①const name = 'taguchi';
//   ②const name = 5;
//   try {
//     console.log(name.toUpperCase());
//   } catch (e) {
//     console.log(e);
//   }
//   console.log('Finish!');
// }
// #27、例外処理の使い方
// ユーザーの名前を大文字にするという処理の場合
// ①関数名.toUpperCase()で受け取った値が文字列だったら大文字にしてくれる
// ②しかし、5という値を間違えて入れてしまった場合、赤いエラーが出て処理が止まり、Finish!を表示してくれない
// 想定していなかったエラーが出ても処理を止めたくない場合に例外処理を行う
// 例外が起きそうな場所をtry{}で囲い、catchで例外が起きたときの処理を書く
// また、catchに引数を渡すとその例外の情報を引数の名前で扱えるようになる




// {
//   const posts = [
//     {
//       text: 'JavaScriptの勉強中...',
//       likeCount: 0,
//     },
//     {
//       text: 'プログラミング楽しい！',
//       likeCount: 0,
//     },
//   ];
//   function show(post) {
//     console.log(`${post.text} - ${post.likeCount}いいね`);
//   }
//   show(posts[0]);
// }
// #28、オブジェクトが複数ある場合、クラスの仕組み
// 匿名で投稿できるSNSを作成
// 配列の中に文章といいね数を管理するオブジェクトを複数作る
// 関数を使って、postを受け取ったらそのpostのtextとlikeCountプロパティを表示
// 最初の投稿を表示するにはshow(posts[0])とする





// {
//   const posts = [
//     {
//       text: 'JavaScriptの勉強中...',
//       likeCount: 0,
//       ①show: function () {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//       ②show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       }
//     },
//     {
//       text: 'プログラミング楽しい！',
//       likeCount: 0,
//       show() {
//         console.log(`${this.text} - ${this.likeCount}いいね`);
//       },
//     },
//   ];
//   show(posts[0]);
//   posts[0].show();
//   posts[1].show();
// }
// #29、メソッドを使う
// ①関数をオブジェクトの中に入れる
// オブジェクトではプロパティの値として関数を持たせることができる
// 今回のキーはshowでshow: function () とすればshowというキーでアクセスできる
// 同じオブジェクト内のプロパティのアクセスするにはthisというキーワードを使う
// 今回は前回で言うpost
// このように関数をプロパティの値にした場合その関数をメソッド(function () {
//   console.log(`${this.text} - ${this.likeCount}いいね`);
// },この部分)という
// ②このメソッドはfunction()と書くのを省略できる

// showメソッドはオブジェクトから呼び出すことができる
// posts[0].show();とする





// {
//   class Post{
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//   }
//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//   ];
//   posts[0].show();
//   posts[1].show();
// }
// #30,31、クラスを作る
// まずclassの後に適当なクラス名をつける、クラス名の最初は大文字
// プロパティはconstructor()という特殊なメソッドで初期化する
// クラス内のインスタンスをthisで表現する、thisのtextプロパティは...
// インスタンスごとに違う文章にしたいのでconstructor()に引数を渡す
// インスタンスの作り方はnewというキーワードの後にクラス名を書き、()のなかに埋め込みたい値を書く
// 表示するときはposts[]を書くのだが、textをJavaScriptの勉強中...としたいときは0,プログラミング楽しい！としたい時は1にする






// {
//   class Post{
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }
//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//   ];
//   posts[0].like();
// }
// #32、カプセル化
// likeのメソッドを増やした
// その中でlikeCountを増やしたposts[0].likeCount++でも増やせるがそれが増えてきたときにそれらを全部書き換えるのが面倒だから新しいメソッドを追加する
// また、同じクラス内のメソッドはthisをつけて呼び出せるのでlikeのなかにshowを入れることもできる
// そうすればlike()だけで呼び出すことができる





// {
//   class Post{
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//     like() {
//       this.likeCount++;
//       this.show();
//     }
//     static shoeInfo() {
//       console.log(`Post class version 1.0`);
//     }
//   }
//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//   ];
//   Post.shoeInfo();
// }
// #33、静的メソッド
// 今まではメソッドはインスタンスから呼び出していたが、インスタンスを介さずに直接クラスから呼び出せる
// 今回はshowInfoというメソッドを作り、クラスから直接呼び出せるようにするにはstaticというキーワードを使う
// 呼び出すときはクラス名.メソッド名としてあげれば良い
// また、静的メソッドはthisを使えない




// {
//   class Post{
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }
//   class SponsoredPost {
//     constructor(text, sponsor) {
//       this.text = text;
//       this.likeCount = 0;
//       this.sponsor = sponsor;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//       console.log(`...sponsored by ${this.sponsor}`);
//     }
//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }
//   const posts = [
//     new Post('JavaScriptの勉強中...'),
//     new Post('プログラミング楽しい！'),
//     new SponsoredPost('3分動画でマスターしよう','dotinstall'),
//   ];
//   posts[2].show();
//   posts[2].like();
// }
// #34、クラスを拡張
// 新しいクラスSponsoredPostを作る
// スポンサーの情報はプロパティに持たせるのでconstructorの引数に渡す
// showメソッドにもスポンサーの情報を表示するようにする
// SponsoredPostクラスのインスタンスも作る、new SponsoredPost('3分動画でマスターしよう','dotinstall')
// SponsoredPostはposts[2]で呼び出す






{
  class Post{
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
    like() {
      this.likeCount++;
      this.show();
    }
  }
  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }
    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }
  const posts = [
    new Post('JavaScriptの勉強中...'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう','dotinstall'),
  ];
  posts[2].show();
  posts[2].like();
}
// #35、クラスの継承
// クラスの中のプロパティやメソッドが一緒の場合は引き継ぐ（省略）ことができる
// 省略する方のクラス名の後に extends 引き継ぐクラスの名前 とする
// ここでは Postを親クラス SponsoredPostを子クラスと呼ぶ
// 子クラス独自の処理以外は消せる
// また、子クラスの constructor()の最初でsuper()とする必要があり、引数も入れてあげる
// 親クラスのshow()メソッドをそのまま使う場合はsuper.show()としてあげる