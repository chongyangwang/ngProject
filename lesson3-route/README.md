# Lesson3Route

> 本章主要学习了如何生成一个带路由的项目 命令为 ng new product --routing
> 配置路由表 approutingmodule
> path component
> 查询参数传递 [queryParams]="{id:1} 用 params 接受
> 路由路径传递 需要路由表配置一下 params 接收
> .snpshot 参数快照 弊端：当当前的组建被创建之后 传递的参数不会深度监听 不会更新 (当组建从自身路由到自身)
> .subscribe 深度监听 处理上述当前路由到当前的情况
> ActivatedRoute navgate()
> 辅助路由 显示一个始终存在的组建
> 重定向路由
> 路由守卫 进入前守卫 离开前守卫 激活时守卫
