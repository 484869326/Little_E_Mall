![PHP 7.4 badge](https://img.shields.io/badge/PHP-7.4-blue)  ![MySQL 5.7.26 badge](https://img.shields.io/badge/MySQL-5.7.26-blue)    ![Laravel 8.83.27 badge](https://img.shields.io/badge/Laravel-8.83.27-red)         ![UniApp](https://img.shields.io/badge/UniApp-v4.0.0-brightgreen) ![Vue 3](https://img.shields.io/badge/Vue-3.4.21-brightgreen) ![Element Plus](https://img.shields.io/badge/Element%20Plus-v2.6.1-brightgreen)   ![Pinia](https://img.shields.io/badge/Pinia-v2.1.7-brightgreen)  ![Echarts](https://img.shields.io/badge/Echarts-v5.2.2-brightgreen) ![Vite](https://img.shields.io/badge/Vite-v5.1.5-brightgreen)
![Redis](https://img.shields.io/badge/Redis-brightgreen)

- [在线访问网站](http://20.255.60.222:3333/)
- 服务器系统Ubuntu。用jenkins使用自动化部署，1g1核服务器很容易崩，望见谅

> tips：
> 说明文档如果图片没显示，是因为我把图片弄在GitHub的仓库，得使用科学上网才能正常加载。
> 数据库可以拿现有，也可以laravel命令生成，首先得先创建数据库(create database store;)
> 命令行窗口到shoppingApi目录下,执行 php artisan migrate
> 最后数据填充  php artisan db:seed

<h1 align="center">小E商城</h1>

## 1.系统功能结构图

### 1.1前台系统

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//mallApp.png?raw=true)

### 1.2 后台系统

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/mallBackend.png?raw=true)

## 2.系统架构图

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/structure.png?raw=true)

## 3.系统展示（前台）

### 3.1 登录/注册界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//login_code.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//login_validate.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//login_register.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//login_password.png?raw=true)

### 3.2 首页界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//home.png?raw=true)

### 3.3 搜索页面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//search.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//search_list.png?raw=true)

### 3.4 分类界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//category.png?raw=true)

### 3.5 商品界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//detail.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//order.png?raw=true)

### 3.6 购物车界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//shop_empty.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//shop.png?raw=true)

### 3.7 订单管理界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//order_manage.png?raw=true)

### 3.8 我的界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//my.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//my_login.png?raw=true)

### 3.9 设置页面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//setting.png?raw=true)

### 3.10 地址管理界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//address_null.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//address_insert.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallApp//address_list.png?raw=true)

## 4.系统展示（后台）

### 4.1 登录/注册界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/login.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/register.png?raw=true)

### 4.2 技术总览界面

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/technology.png?raw=true)

### 4.3 系统统计(数据可视化)

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/statistics.png?raw=true)

### 4.4 用户管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/user_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/user_manage_edit.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/user_manage_add.png?raw=true)

### 4.5 菜单管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/menu_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/menu_manage_edit.png?raw=true)

### 4.6 管理员管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/admin_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/admin_manage_edit.png?raw=true)

### 4.7 角色管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/role_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/role_manage_edit.png?raw=true)

### 4.8 商品类别管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/category_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/category_manage_edit.png?raw=true)

### 4.9 商品管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/good_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/good_manage_edit.png?raw=true)

### 4.10 订单管理

![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/order_manage.png?raw=true)
![image](https://github.com/484869326/Little_E_Mall/blob/main/picture/mallBackend/order_manage.png_detail.png?raw=true)
