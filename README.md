# vue_goole_login

This template should help get you started developing with Vue 3 in Vite.



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Small Trick

1. 自动打开浏览器

在 Vite 的配置文件中（通常是 `vite.config.js`），你可以通过设置 `server.open` 选项来实现在启动时自动打开浏览器。

下面是一个示例 `vite.config.js` 文件，展示了如何配置自动打开浏览器：

```javascript
export default {
  server: {
    open: true // 设置为 true 将在启动时自动打开浏览器
  },
  // 其他配置...
}
```

将 `server.open` 设置为 `true` 将在启动 Vite 时自动打开默认浏览器。你也可以指定一个特定的浏览器，例如：

```javascript
export default {
  server: {
    open: 'chrome' // 打开 Chrome 浏览器
  },
  // 其他配置...
}
```

这样配置后，在运行 `vite` 命令启动项目时，Vite 将自动在指定的浏览器中打开应用程序。


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


## reference 
1. [vue3 quickstart](https://vuejs.org/guide/quick-start.html)
2. [vue3-google-login](https://github.com/devbaji/vue3-google-login)
3. [Vue 3 Google Login Document](https://devbaji.github.io/vue3-google-login/)