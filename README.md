# arex-trace


## 前置
需要一个mongo数据库

## 部署


方式一：
建一个数据库配置目录，可参考\
https://github.com/arextest/arex-trace/blob/main/packages/app-backend/conf/application.yml

```shell
docker run -it -v 这是个目录/application.yml:/app/packages/app-backend/conf/application.yml -p 8080:8080 zhangtao25/arex-trace
```

方式二：
修改docker-compose.yml中-v的映射文件，可参考\
https://github.com/arextest/arex-trace/blob/main/packages/app-backend/conf/application.yml

```shell
docker-compose up -d
```
