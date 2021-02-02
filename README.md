製作 React todo List 筆記

PJ 老師 Github 網站
https://github.com/pjchender/learn-react-from-hooks-todo-mvc

vscode 套件有提供一些可以快速打出 class component 和 function component 語法的快捷鍵。
請先安裝 vscode extension 模組：

1.Simple React Snippets(裡面有 function component 的 snippet 語法＂sfc＂)
https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets

2.Reactjs code snippets（裡面有 class component 的 snippet 語法＂rcc＂）
https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets

3.React/Redux/react-router Snippets(裡面有 redux 的 snippet 語法)
https://marketplace.visualstudio.com/items?itemName=discountry.react-redux-react-router-snippets

另外，如果想在 jsx 內也使用點語法產生有 className 的 component，可以做以下設定： 1.到喜好設定>設定 2.打開延伸套件模組->emmet，設定 json 3.輸入：

"settings":{
"emmet.excludeLanguages": {
"javascript":"javascriptreact",
"markdown":"markdown"
}
}

pure function 亦即當我在進行資料面的改動時，盡量不要去更改到 input 的 data，而必須去 output 一個新的記憶體位置，如此才會促使 setState 進行變更，也使整個 function programming 的過程更利於 unit test，所以 PJ 老師才會在父層使用 map 的方法進行資料面的改動。
所有陣列的方法，會改變原陣列的方法均不為 pure function，以原陣列進行運算後得出新陣列 output 才算是 pure function

TodoList 練習項目

1.CRUD 沒連接 Server 版
setTodo 要 return new array，作為一個 pure function 不能更改原陣列。

2.CRUD 連接 Server 版
直接 fetch 就好
