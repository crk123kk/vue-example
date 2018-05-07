# Vue Render Performance Comparisons

> Very simple project to benchmark Vue's render performance in comparison to other libraries - currently only React, though other contributions are welcome.

## Usage

```
npm install
npm start
使用的时候，需要先执行：npm run install-all 下载关于项目的所有依赖包
					再执行npm run build-all 将所有项目打包，这样才可以运行
```

Then run the benchmarks for:

- Vue at `http://localhost:8080`
- React at `http://localhost:9090`

## Rules / Constraints

- Use one component per element to establish a nested hierarchy.
- Where libraries offer multiple component types, use the most performant type possible. Since state updates are not part of this benchmark, these components can be stateless and instanceless.
