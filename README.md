This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## コード分割とプリフェッチ

Next.jsは自動的にコードを分割してくれるので、各ページはそのページに必要なものだけを読み込みます。つまり、ホームページがレンダリングされたときに、他のページのコードは最初には表示されないということです。

これにより、何百ものページを追加しても、ホームページの読み込みが速くなります。

リクエストしたページのコードだけを読み込むということは、ページが分離されるということでもあります。特定のページがエラーを出しても、残りのアプリケーションは動作します。

さらに、Next.jsの製品版では、ブラウザのビューポートにLinkコンポーネントが表示されると、Next.jsは自動的にバックグラウンドでリンク先のページのコードをプリフェッチします。リンクをクリックしたときには、リンク先のページのコードはすでにバックグラウンドで読み込まれており、ページの遷移はほぼ瞬時に行われます。

## assets

Next.jsは画像などのstaticファイルは、トップレベルに`public`フォルダに置くことでサービングすることができる。
`robots.txt`に対しても機能する。

## CSS

すでに`pages/index.js`はスタイリングされていて、[styled-jsx](https://github.com/vercel/styled-jsx)というライブラリを使っている。これはReact Componentの中にCSSを書くことができるというもの。React Componentに書かれたCSSは、他のコンポーネントに影響しません。

Next.jsは[styled-jsx](https://github.com/vercel/styled-jsx)をビルトインでサポートしているが、[styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components)や[emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion)というのも使うことができる。

### CSS Moduleを使う
`.module.css`というsufixをつけたファイルを`components`フォルダに作成

すべてのページであるCSSを読み込ませたい場合も対応

グローバルなCSSファイルを読み込ませるには、`pages/_app.js` ファイルを作成


## SSR（Server-side Rendering）
Server-side Renderingを使うためには、`getStaticProps`の代わりに`getServerSideProps`を使う。


リクエスト時にデータを取得しなければならないページをプリレンダーする必要がある場合にのみ、 `getServerSideProps` を使用してください。