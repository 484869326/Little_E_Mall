/*
 Navicat Premium Data Transfer

 Source Server         : php
 Source Server Type    : MySQL
 Source Server Version : 50726 (5.7.26)
 Source Host           : localhost:3306
 Source Schema         : store

 Target Server Type    : MySQL
 Target Server Version : 50726 (5.7.26)
 File Encoding         : 65001

 Date: 26/02/2024 17:22:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `adminName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `adminPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Status` int(11) NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '男', '1657447830@qq.com', '广东广州', 'admin', '13410001000', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (2, 'admin1', '男', '1657447831@qq.com', '广东广州', 'admin1', '13410001001', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (3, 'admin2', '男', '1657447832@qq.com', '广东广州', 'admin2', '13410001002', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (4, 'admin3', '男', '1657447833@qq.com', '广东广州', 'admin3', '13410001003', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (5, 'admin4', '男', '1657447834@qq.com', '广东广州', 'admin4', '13410001004', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (6, 'admin5', '男', '1657447835@qq.com', '广东广州', 'admin5', '13410001005', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (7, 'admin6', '男', '1657447836@qq.com', '广东广州', 'admin6', '13410001006', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (8, 'admin7', '男', '1657447837@qq.com', '广东广州', 'admin7', '13410001007', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (9, 'admin8', '男', '1657447838@qq.com', '广东广州', 'admin8', '13410001008', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (10, 'admin9', '男', '1657447839@qq.com', '广东广州', 'admin9', '13410001009', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (11, 'admin10', '男', '1657447840@qq.com', '广东广州', 'admin10', '13410001010', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (12, 'John', '男', 'john@example.com', '北京', 'password1', '13512345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (13, 'Emma', '女', 'emma@example.com', '上海', 'password2', '13612345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (14, 'Michael', '男', 'michael@example.com', '广州', 'password3', '13712345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (15, 'Sophia', '女', 'sophia@example.com', '深圳', 'password4', '13812345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (16, 'William', '男', 'william@example.com', '成都', 'password5', '13912345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (17, 'Olivia', '女', 'olivia@example.com', '重庆', 'password6', '15012345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (18, 'James', '男', 'james@example.com', '武汉', 'password7', '15112345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (19, 'Ava', '女', 'ava@example.com', '南京', 'password8', '15212345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (20, 'Oliver', '男', 'oliver@example.com', '长沙', 'password9', '15312345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (21, 'Isabella', '女', 'isabella@example.com', '杭州', 'password10', '15412345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (22, 'Benjamin', '男', 'benjamin@example.com', '天津', 'password11', '15512345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (23, 'Mia', '女', 'mia@example.com', '西安', 'password12', '15612345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (24, 'Henry', '男', 'henry@example.com', '青岛', 'password13', '15712345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (25, 'Charlotte', '女', 'charlotte@example.com', '济南', 'password14', '15812345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (26, 'Alexander', '男', 'alexander@example.com', '郑州', 'password15', '15912345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (27, 'Amelia', '女', 'amelia@example.com', '苏州', 'password16', '17012345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (28, 'Elijah', '男', 'elijah@example.com', '合肥', 'password97', '25612345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (29, 'Grace', '女', 'grace@example.com', '福州', 'password98', '25712345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (30, 'Joseph', '男', 'joseph@example.com', '大连', 'password99', '25812345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (31, 'Scarlett', '女', 'scarlett@example.com', '厦门', 'password100', '25912345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (32, 'Henre', '男', 'Henre@example.com', '重庆', 'password15', '14912345678', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `admin` VALUES (33, 'Charlo', '女', 'Charlo@example.com', '济南', 'password16', '15012345678', 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `Cid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Cname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `parentID` int(11) NULL DEFAULT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `Cimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Cid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, '手机', 0, 0, './image/category/level0/01.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (2, '电脑平板', 0, 0, './image/category/level0/02.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (3, '电视', 0, 0, './image/category/level0/03.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (4, '智能穿戴', 0, 0, './image/category/level0/04.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (5, '大家电', 0, 0, './image/category/level0/05.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (6, '小家电', 0, 0, './image/category/level0/06.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (7, '智能家居', 0, 0, './image/category/level0/07.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (8, '户外出行', 0, 0, './image/category/level0/08.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (9, '日用百货', 0, 0, './image/category/level0/09.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (10, '儿童用品', 0, 0, './image/category/level0/10.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (11, '有品精选', 0, 0, './image/category/level0/11.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (12, '宠物鲜花', 0, 0, './image/category/level0/12.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (13, '图书文娱', 0, 0, './image/category/level0/13.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (14, '生鲜', 0, 0, './image/category/level0/14.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (15, '二手商品', 0, 0, './image/category/level0/15.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (16, '钟表珠宝', 0, 0, './image/category/level0/16.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (17, '小E服务', 0, 0, './image/category/level0/17.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (18, '小米手机', 1, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (19, '小米数字系列', 18, 2, './image/category/level2/小米数字.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (20, '红米数字系列', 18, 2, './image/category/level2/红米手机.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (21, '华为手机', 1, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (22, '华为Mate手机', 21, 2, './image/category/level2/华为mate.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (23, '华为荣耀手机', 21, 2, './image/category/level2/荣耀手机.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (24, '华为畅享手机', 21, 2, './image/category/level2/华为畅享.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (25, 'oppo手机', 1, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (26, 'realme手机', 25, 2, './image/category/level2/realme手机.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (27, '一加手机', 25, 2, './image/category/level2/一加手机.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (28, '苹果手机', 1, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (29, '苹果数字系列', 28, 2, './image/category/level2/苹果13.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (30, '苹果SE手机', 28, 2, './image/category/level2/苹果SE.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (31, '小米', 2, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (32, '小米平板', 31, 2, './image/category/level2/小米平板.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (33, '小米笔记本', 31, 2, './image/category/level2/小米笔记本.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (34, '华为', 2, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (35, '华为平板', 34, 2, './image/category/level2/华为平板.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (36, '华为笔记本', 34, 2, './image/category/level2/华为笔记本.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (37, '联想', 2, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (38, '小新平板', 37, 2, './image/category/level2/小新平板.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (39, '联想笔记本', 37, 2, './image/category/level2/联想笔记本.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (40, '苹果', 2, 1, '', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (41, '苹果平板', 40, 2, './image/category/level2/苹果平板.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `category` VALUES (42, '苹果笔记本', 40, 2, './image/category/level2/苹果笔记本.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good`  (
  `Goodid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Goodname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Cid` int(11) NULL DEFAULT NULL,
  `Explain` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `advertise` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Goodimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Swiper` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Goodid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 55 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of good
-- ----------------------------
INSERT INTO `good` VALUES (1, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '1,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (2, '小米Mix4', 19, '全网通,快速充电,6.67英寸', '买赠素皮保护壳（黑色）', '2,4399,4599', '红色,白色,黑色', './image/Good/2.png', '4+64,6+128,8+256', './image/Good/2.1.jpg,./image/Good/2.2.jpg,./image/Good/2.3.jpg,./image/Good/2.4.jpg', './image/Good/2D1.jpg,./image/Good/2D2.jpg,./image/Good/2D3.jpg,./image/Good/2D4.jpg,./image/Good/2D5.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (3, '小米10s', 19, '高通骁龙870,快速充电,6.67英寸', '赠蓝牙耳机Air2 SE', '2699,2899,2999', '红色,白色,黑色', './image/Good/3.png', '4+64,6+128,8+256', './image/Good/3.1.jpg,./image/Good/3.2.jpg,./image/Good/3.3.jpg,./image/Good/3.4.jpg', './image/Good/3D1.jpg,./image/Good/3D2.jpg,./image/Good/3D3.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (4, '小米CIVI', 19, '高通骁龙870,快速充电,6.67英寸', '赠蓝牙耳机Air2 SE', '2599,2899,3199', '红色,白色,黑色', './image/Good/4.png', '4+64,6+128,8+256', './image/Good/4.1.jpg,./image/Good/4.2.jpg,./image/Good/4.3.jpg,./image/Good/4.4.jpg', './image/Good/4D1.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (5, '小米11Pro', 19, '高通骁龙870,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '3999,4299,4699', '红色,白色,黑色', './image/Good/5.png', '4+64,6+128,8+256', './image/Good/5.1.jpg,./image/Good/5.2.jpg,./image/Good/5.3.jpg,./image/Good/5.4.jpg', './image/Good/5D1.jpg,./image/Good/5D2.jpg,./image/Good/5D3.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (6, '小米MIX Alpha', 19, '高通骁龙855+,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '19999,21999,22299', '红色,白色,黑色', './image/Good/6.png', '4+64,6+128,8+256', './image/Good/6.1.jpg,./image/Good/6.2.jpg,./image/Good/6.3.jpg,./image/Good/6.4.jpg', './image/Good/6D1.jpg,./image/Good/6D2.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (7, 'Redmi Note 11 Pro', 20, '天玑920,快速充电,7.92英寸', ' 赠蓝牙耳机Air2 SE', '1599,1899,2199', '红色,白色,黑色', './image/Good/7.png', '4+64,6+128,8+256', './image/Good/7.1.jpg,./image/Good/7.2.jpg,./image/Good/7.3.jpg,./image/Good/7.4.jpg', './image/Good/7D1.jpg,./image/Good/7D2..jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (8, 'Redmi 9A', 20, 'Helio G25,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '1799,1899,2199', '红色,白色,黑色', './image/Good/9.png', '4+64,6+128,8+256', './image/Good/9.1.jpg,./image/Good/9.2.jpg,./image/Good/9.3.jpg,./image/Good/9.4.jpg', './image/Good/9D1.jpg,./image/Good/9D2.jpg,./image/Good/9D3.jpg', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (9, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (10, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (11, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (12, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (13, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (14, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (15, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (16, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (17, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (18, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (19, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (20, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (21, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (22, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (23, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (24, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (25, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (26, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (27, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (28, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (29, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (30, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (31, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (32, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (33, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (34, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (35, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (36, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (37, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (38, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (39, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (40, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (41, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (42, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (43, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (44, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (45, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (46, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (47, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (48, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (49, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (50, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (51, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (52, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (53, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `good` VALUES (54, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2023-09-03 23:38:02', '2023-09-03 23:38:02');

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `icon` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `path` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `parentId` int(11) NULL DEFAULT 0,
  `level` int(11) NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, '系统总览', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z\"></path></svg>', '', 0, 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (2, '核心技术', '', '/main/overview/technology', 1, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (3, '商品统计', '', '/main/overview/statistics', 1, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (4, '系统管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z\"></path></svg>', '', 0, 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (5, '用户管理', '', '/main/system/user', 4, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (6, '菜单管理', '', '/main/system/menu', 4, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (7, '管理员管理', '', '/main/system/admin', 4, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (8, '商品管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z\"></path></svg>', '', 0, 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (9, '商品类别', '', '/main/goods/category', 8, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (10, '商品信息', '', '/main/goods/message', 8, 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `menu` VALUES (11, '订单管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z\"></path></svg>', '/main/orders/arrange', 0, 0, '2023-09-03 23:38:02', '2023-09-03 23:38:02');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2021_10_11_170912_create_category_table', 1);
INSERT INTO `migrations` VALUES (2, '2021_11_26_105056_create_good_table', 1);
INSERT INTO `migrations` VALUES (3, '2021_12_04_122927_create_shopping_table', 1);
INSERT INTO `migrations` VALUES (4, '2021_12_05_154616_create_order_table', 1);
INSERT INTO `migrations` VALUES (5, '2021_12_06_164403_create_my_table', 1);
INSERT INTO `migrations` VALUES (6, '2021_12_12_201459_create_admin_table', 1);
INSERT INTO `migrations` VALUES (7, '2023_08_17_153732_create_menu_table', 1);

-- ----------------------------
-- Table structure for my
-- ----------------------------
DROP TABLE IF EXISTS `my`;
CREATE TABLE `my`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `signature` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `avatarUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `defaultID` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `Status` int(11) NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of my
-- ----------------------------
INSERT INTO `my` VALUES (1, '1', '吴亦凡', '男', NULL, '', '广东广州', NULL, '13710411285', 1, '2023-09-03 23:38:02', '2023-09-03 23:38:02');
INSERT INTO `my` VALUES (2, NULL, NULL, NULL, 'Zz112233..', NULL, '[{\"addressName\":\"123\",\"addressPhone\":\"13415001085\",\"addressRegion\":\"120105\",\"addressRegionText\":\"天津市/天津市/河北区\",\"addressDetail\":\"123\"}]', '0', '13415001085', NULL, '2024-02-18 11:15:31', '2024-02-18 11:16:29');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Userid` int(11) NULL DEFAULT NULL,
  `Goodid` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Num` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `totalPrice` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `OrderDate` datetime NULL DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `condition` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 33 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (7, 2, '9', '1', '0', '0', '3799', '2024-02-26 16:34:05', '123', '天津市天津市河北区123', '13415001085', '确认收货', '2024-02-26 16:34:05', '2024-02-26 17:15:46');
INSERT INTO `order` VALUES (8, 2, '3,9', '1,1', '2,0', '1,0', '6698', '2024-02-26 16:35:24', '123', '天津市天津市河北区123', '13415001085', '购买成功', '2024-02-26 16:35:24', '2024-02-26 16:35:24');
INSERT INTO `order` VALUES (9, 2, '3,9', '1,1', '2,0', '1,0', '6698', '2024-02-26 16:35:24', '123', '天津市天津市河北区123', '13415001085', '购买成功', '2024-02-26 16:35:24', '2024-02-26 16:35:24');

-- ----------------------------
-- Table structure for shopping
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping`  (
  `shoppingid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Goodid` int(11) NULL DEFAULT NULL,
  `Userid` int(11) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `Num` int(11) NULL DEFAULT NULL,
  `isChecked` int(11) NULL DEFAULT NULL,
  `isBuy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`shoppingid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 42 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of shopping
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
