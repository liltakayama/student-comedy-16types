# 学生お笑い16タイプ診断 v2

## 変更内容

Googleフォームで作成した質問・診断ロジックに合わせて更新した版です。

## 診断軸

- B/T：Boke / Tsukkomi
- W/A：Writer / Actor
- C/F：Craftsman / Field
- L/S：Logic / Sense

## 判定ロジック

各軸7問ずつ、1〜5の回答平均で判定します。

- B/T平均 > 3 → B
- B/T平均 < 3 → T
- W/A平均 > 3 → A
- W/A平均 < 3 → W
- C/F平均 > 3 → F
- C/F平均 < 3 → C
- L/S平均 > 3 → S
- L/S平均 < 3 → L

※平均がちょうど3の場合は、現在のコードでは左側に寄せています。
例：B/T = 3.00 の場合は T になります。

## ファイル構成

- `index.html`：画面
- `style.css`：見た目
- `script.js`：質問・ロジック・結果タイプ

## 起動方法

1. VS Codeでこのフォルダを開く
2. `index.html` を右クリック
3. `Open with Live Server`

## 次にやること

結果を本格的に集める場合は、Google Apps ScriptまたはGoogleフォーム送信への連携を追加します。


## flyer版

ライブフライヤー風のUIに変更した版です。主な変更対象は `style.css` と一部 `index.html` です。


## result_detail版

結果画面を詳細化しました。タイプ名、英語名、キャッチコピー、4軸バッジ、強み、注意点、向いている役割を表示します。
