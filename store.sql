/*
 Navicat Premium Data Transfer

 Source Server         : phpMysql
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : store

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 25/07/2024 11:38:05
*/



SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `roleId` int(10) NULL DEFAULT NULL,
  `adminName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT 0,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `adminPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 1, 'admin', 0, '1657447830@qq.com', '广东广州', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001000', 1, '2024-03-27 10:15:16', '2024-03-27 10:53:11');
INSERT INTO `admin` VALUES (2, 1, 'admin1', 1, '1657447831@qq.com', '广东广州', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001001', 1, '2024-03-27 10:15:16', '2024-07-25 00:35:18');
INSERT INTO `admin` VALUES (3, 1, 'baiyun', 0, '1657447832@qq.com', '广东广州白云', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001002', 1, '2024-04-26 10:15:16', '2024-07-24 13:21:35');
INSERT INTO `admin` VALUES (4, 1, 'tianhe', 0, '1657447833@qq.com', '广东广州天河', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001003', 1, '2024-04-26 10:15:16', '2024-07-24 13:21:38');
INSERT INTO `admin` VALUES (5, 1, 'liwan', 0, '1657447834@qq.com', '广东广州荔湾', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001004', 1, '2024-04-26 10:15:16', '2024-07-24 13:21:42');
INSERT INTO `admin` VALUES (6, 1, 'huangpu', 0, '1657447835@qq.com', '广东广州黄埔', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001005', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (7, 1, 'huadu', 0, '1657447836@qq.com', '广东广州花都', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001006', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (8, 1, 'conghua', 0, '1657447837@qq.com', '广东广州从化', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001007', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (9, 1, 'zengcheng', 0, '1657447838@qq.com', '广东广州增城', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001008', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (10, 1, 'haizhu', 0, '1657447839@qq.com', '广东广州海珠', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001009', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (11, 1, 'yuexiu', 0, '1657447840@qq.com', '广东广州越秀', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001010', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (12, 1, 'nansha', 0, '1657447841@qq.com', '广东广州南沙', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001011', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');
INSERT INTO `admin` VALUES (13, 1, 'panyu', 0, '1657447842@qq.com', '广东广州番禺', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', '13410001012', 1, '2024-04-26 10:15:16', '2024-04-26 10:15:16');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `cid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `parentId` int(11) NULL DEFAULT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `cImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, '手机', 0, 0, './image/category/level0/01.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (2, '电脑平板', 0, 0, './image/category/level0/02.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (3, '电视', 0, 0, './image/category/level0/03.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (4, '智能穿戴', 0, 0, './image/category/level0/04.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (5, '大家电', 0, 0, './image/category/level0/05.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (6, '小家电', 0, 0, './image/category/level0/06.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (7, '智能家居', 0, 0, './image/category/level0/07.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (8, '户外出行', 0, 0, './image/category/level0/08.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (9, '日用百货', 0, 0, './image/category/level0/09.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (10, '儿童用品', 0, 0, './image/category/level0/10.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (11, '有品精选', 0, 0, './image/category/level0/11.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (12, '宠物鲜花', 0, 0, './image/category/level0/12.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (13, '图书文娱', 0, 0, './image/category/level0/13.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (14, '生鲜', 0, 0, './image/category/level0/14.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (15, '二手商品', 0, 0, './image/category/level0/15.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (16, '钟表珠宝', 0, 0, './image/category/level0/16.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (17, '小E服务', 0, 0, './image/category/level0/17.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (18, '小米手机', 1, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (19, '小米数字系列', 18, 2, './image/category/level2/小米数字.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (20, '红米数字系列', 18, 2, './image/category/level2/红米手机.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (21, '华为手机', 1, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (22, '华为Mate手机', 21, 2, './image/category/level2/华为mate.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (23, '华为荣耀手机', 21, 2, './image/category/level2/荣耀手机.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (24, '华为畅享手机', 21, 2, './image/category/level2/华为畅享.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (25, 'oppo手机', 1, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (26, 'realme手机', 25, 2, './image/category/level2/realme手机.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (27, '一加手机', 25, 2, './image/category/level2/一加手机.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (28, '苹果手机', 1, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (29, '苹果数字系列', 28, 2, './image/category/level2/苹果13.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (30, '苹果SE手机', 28, 2, './image/category/level2/苹果SE.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (31, '小米', 2, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (32, '小米平板', 31, 2, './image/category/level2/小米平板.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (33, '小米笔记本', 31, 2, './image/category/level2/小米笔记本.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (34, '华为', 2, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (35, '华为平板', 34, 2, './image/category/level2/华为平板.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (36, '华为笔记本', 34, 2, './image/category/level2/华为笔记本.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (37, '联想', 2, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (38, '小新平板', 37, 2, './image/category/level2/小新平板.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (39, '联想笔记本', 37, 2, './image/category/level2/联想笔记本.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (40, '苹果', 2, 1, '', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (41, '苹果平板', 40, 2, './image/category/level2/苹果平板.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `category` VALUES (42, '苹果笔记本', 40, 2, './image/category/level2/苹果笔记本.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');

-- ----------------------------
-- Table structure for good
-- ----------------------------
DROP TABLE IF EXISTS `good`;
CREATE TABLE `good`  (
  `goodId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `goodName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cid` int(11) NULL DEFAULT NULL,
  `explain` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `advertise` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `goodImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `swiper` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`goodId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good
-- ----------------------------
INSERT INTO `good` VALUES (1, '小米14', 19, '徕卡影像,能效飞跃,一手可握', '第三代骁龙8平台', '4999,5499,5999', '黑色,白色,岩石青', './image/Good/13127f1383d0f8fc33e3e78775f35c1c.png', '12+256,12+512,16+512', './image/Good/ff524cbfc32d881018caaacea6b70cbb.jpg,./image/Good/521ffdf69ebcbf5ac24a79bfdb732453.jpg,./image/Good/e2d531fb5ae7d9cbdffdf0d225541d87.jpg', './image/Good/e6fb0b25ee8ecc358a368ec33d62f7b4.jpg,./image/Good/41afe29b2569654f96d854e9b4107300.jpg', '2024-04-26 11:57:25', '2024-07-24 22:51:01');
INSERT INTO `good` VALUES (2, 'Redmi K70', 20, '旗舰性能,旗舰屏幕,旗舰质感', '第二代骁龙8平台', '2399,2699,2899', '墨羽,晴雪,竹月蓝', './image/Good/1d2e2b6357c3dd5bcb6face230dc5c9d.png', '12+256,12+512,16+512', './image/Good/75a95eb7e0ca8bb25ad73f30b919f8bd.jpg,./image/Good/cc7489e3d2fdb99503c2e2a6f8d38eb2.jpg,./image/Good/e8651de3b9ed10f241b2dc7ba900d962.jpg', './image/Good/54a8b8d4b66393ff85d12ccaeda8eec6.jpg,./image/Good/c8365c9b0f590c6bc6b63453121c170c.jpg', '2024-04-26 11:57:25', '2024-04-26 11:57:39');
INSERT INTO `good` VALUES (3, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (4, '小米Mix4', 19, '全网通,快速充电,6.67英寸', '买赠素皮保护壳（黑色）', '4199,4399,4599', '红色,白色,黑色', './image/Good/2.png', '4+64,6+128,8+256', './image/Good/2.1.jpg,./image/Good/2.2.jpg,./image/Good/2.3.jpg,./image/Good/2.4.jpg', './image/Good/2D1.jpg,./image/Good/2D2.jpg,./image/Good/2D3.jpg,./image/Good/2D4.jpg,./image/Good/2D5.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (5, '小米10s', 19, '高通骁龙870,快速充电,6.67英寸', '赠蓝牙耳机Air2 SE', '2699,2899,2999', '红色,白色,黑色', './image/Good/3.png', '4+64,6+128,8+256', './image/Good/3.1.jpg,./image/Good/3.2.jpg,./image/Good/3.3.jpg,./image/Good/3.4.jpg', './image/Good/3D1.jpg,./image/Good/3D2.jpg,./image/Good/3D3.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (6, '小米CIVI', 19, '高通骁龙870,快速充电,6.67英寸', '赠蓝牙耳机Air2 SE', '2599,2899,3199', '红色,白色,黑色', './image/Good/4.png', '4+64,6+128,8+256', './image/Good/4.1.jpg,./image/Good/4.2.jpg,./image/Good/4.3.jpg,./image/Good/4.4.jpg', './image/Good/4D1.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (7, '小米11Pro', 19, '高通骁龙870,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '3999,4299,4699', '红色,白色,黑色', './image/Good/5.png', '4+64,6+128,8+256', './image/Good/5.1.jpg,./image/Good/5.2.jpg,./image/Good/5.3.jpg,./image/Good/5.4.jpg', './image/Good/5D1.jpg,./image/Good/5D2.jpg,./image/Good/5D3.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (8, '小米MIX Alpha', 19, '高通骁龙855+,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '19999,21999,22299', '红色,白色,黑色', './image/Good/6.png', '4+64,6+128,8+256', './image/Good/6.1.jpg,./image/Good/6.2.jpg,./image/Good/6.3.jpg,./image/Good/6.4.jpg', './image/Good/6D1.jpg,./image/Good/6D2.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (9, 'Redmi Note 11 Pro', 20, '天玑920,快速充电,7.92英寸', ' 赠蓝牙耳机Air2 SE', '1599,1899,2199', '红色,白色,黑色', './image/Good/7.png', '4+64,6+128,8+256', './image/Good/7.1.jpg,./image/Good/7.2.jpg,./image/Good/7.3.jpg,./image/Good/7.4.jpg', './image/Good/7D1.jpg,./image/Good/7D2..jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (10, 'Redmi 9A', 20, 'Helio G25,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '1799,1899,2199', '红色,白色,黑色', './image/Good/9.png', '4+64,6+128,8+256', './image/Good/9.1.jpg,./image/Good/9.2.jpg,./image/Good/9.3.jpg,./image/Good/9.4.jpg', './image/Good/9D1.jpg,./image/Good/9D2.jpg,./image/Good/9D3.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `text` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `icon` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `path` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `parentId` int(10) NULL DEFAULT 0,
  `permission` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, '系统总览', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z\"></path></svg>', '', 0, NULL, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (2, '核心技术', '', '/main/overview/technology', 1, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (3, '商品统计', '', '/main/overview/statistics', 1, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (4, '系统管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z\"></path></svg>', '', 0, NULL, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (5, '用户管理', '', '/main/system/user', 4, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (6, '新建用户', '', '', 5, 'system:user:create', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (7, '查找用户', '', '', 5, 'system:user:query', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (8, '修改用户', '', '', 5, 'system:user:edit', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (9, '删除用户', '', '', 5, 'system:user:delete', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (10, '菜单管理', '', '/main/system/menu', 4, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (11, '新建菜单', '', '', 10, 'system:menu:create', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (12, '查找菜单', '', '', 10, 'system:menu:query', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (13, '修改菜单', '', '', 10, 'system:menu:edit', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (14, '删除菜单', '', '', 10, 'system:menu:delete', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (15, '管理员管理', '', '/main/system/admin', 4, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (16, '新建管理员', '', '', 15, 'system:admin:create', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (17, '查找管理员', '', '', 15, 'system:admin:query', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (18, '修改管理员', '', '', 15, 'system:admin:edit', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (19, '删除管理员', '', '', 15, 'system:admin:delete', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (20, '角色管理', '', '/main/system/role', 4, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (21, '新建角色', '', '', 20, 'system:role:create', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (22, '查找角色', '', '', 20, 'system:role:query', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (23, '修改角色', '', '', 20, 'system:role:edit', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (24, '删除角色', '', '', 20, 'system:role:delete', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (25, '商品管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z\"></path></svg>', '', 0, NULL, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (26, '商品类别', '', '/main/goods/category', 25, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (27, '新建商品类别', '', '', 26, 'system:category:create', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (28, '查找商品类别', '', '', 26, 'system:category:query', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (29, '修改商品类别', '', '', 26, 'system:category:edit', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (30, '删除商品类别', '', '', 26, 'system:category:delete', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (31, '商品信息', '', '/main/goods/message', 25, NULL, 2, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (32, '新建商品', '', '', 31, 'system:good:create', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (33, '查找商品', '', '', 31, 'system:good:query', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (34, '修改商品', '', '', 31, 'system:good:edit', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (35, '删除商品', '', '', 31, 'system:good:delete', 3, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (36, '订单管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z\"></path></svg>', '/main/orders/arrange', 0, NULL, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

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
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT 0,
  `avatarUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `city` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT '',
  `defaultId` int(11) NOT NULL DEFAULT 0,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `status` int(11) NULL DEFAULT 1,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of my
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userId` int(11) NULL DEFAULT NULL,
  `goodId` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `num` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `totalPrice` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `condition` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`orderId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `intro` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '超级管理员', '所有权限', '2024-07-23 14:34:17', '2024-07-23 14:34:17');
INSERT INTO `role` VALUES (2, '总裁', '部分权限', '2024-07-23 14:34:17', '2024-07-23 14:34:17');

-- ----------------------------
-- Table structure for rolemenu
-- ----------------------------
DROP TABLE IF EXISTS `rolemenu`;
CREATE TABLE `rolemenu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleId` int(11) NOT NULL,
  `menuId` int(11) NOT NULL,
  `createdAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `roleId`(`roleId`) USING BTREE,
  INDEX `menuId`(`menuId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 37 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of rolemenu
-- ----------------------------
INSERT INTO `rolemenu` VALUES (1, 1, 1, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (2, 1, 2, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (3, 1, 3, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (4, 1, 4, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (5, 1, 5, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (6, 1, 6, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (7, 1, 7, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (8, 1, 8, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (9, 1, 9, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (10, 1, 10, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (11, 1, 11, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (12, 1, 12, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (13, 1, 13, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (14, 1, 14, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (15, 1, 15, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (16, 1, 16, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (17, 1, 17, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (18, 1, 18, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (19, 1, 19, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (20, 1, 20, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (21, 1, 21, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (22, 1, 22, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (23, 1, 23, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (24, 1, 24, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (25, 1, 25, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (26, 1, 26, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (27, 1, 27, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (28, 1, 28, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (29, 1, 29, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (30, 1, 30, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (31, 1, 31, '2024-07-23 17:12:23', '2024-07-23 17:12:23');
INSERT INTO `rolemenu` VALUES (32, 1, 32, '2024-07-24 10:12:12', '2024-07-24 13:32:14');
INSERT INTO `rolemenu` VALUES (33, 1, 33, '2024-07-24 10:13:09', '2024-07-24 13:32:18');
INSERT INTO `rolemenu` VALUES (34, 1, 34, '2024-07-24 10:13:15', '2024-07-24 13:32:23');
INSERT INTO `rolemenu` VALUES (35, 1, 35, '2024-07-24 13:32:27', '2024-07-24 13:32:27');
INSERT INTO `rolemenu` VALUES (36, 1, 36, '2024-07-24 13:32:34', '2024-07-24 13:32:34');

-- ----------------------------
-- Table structure for shopping
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping`  (
  `shoppingId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `goodId` int(11) NULL DEFAULT NULL,
  `userId` int(11) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `num` int(11) NULL DEFAULT NULL,
  `isChecked` int(11) NULL DEFAULT NULL,
  `isBuy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createdAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updatedAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`shoppingId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shopping
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
