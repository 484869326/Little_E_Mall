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

 Date: 27/03/2024 12:58:41
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
  `gender` int(11) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `adminPwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin1', 0, '1657447830@qq.com', '广东广州', 'admin', '13410001000', 1, '2024-03-27 10:15:16', '2024-03-27 10:53:11');
INSERT INTO `admin` VALUES (2, 'admin1', 0, '1657447831@qq.com', '广东广州', 'admin1', '13410001001', 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');

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
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`goodId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of good
-- ----------------------------
INSERT INTO `good` VALUES (1, '小米11', 19, '全网通,快速充电,6.6英寸', '官网标配【67W充电套装+晒单红包】', '3799,3999,4399', '红色,白色,黑色', './image/Good/1.png', '4+64,6+128,8+256', './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (2, '小米Mix4', 19, '全网通,快速充电,6.67英寸', '买赠素皮保护壳（黑色）', '4199,4399,4599', '红色,白色,黑色', './image/Good/2.png', '4+64,6+128,8+256', './image/Good/2.1.jpg,./image/Good/2.2.jpg,./image/Good/2.3.jpg,./image/Good/2.4.jpg', './image/Good/2D1.jpg,./image/Good/2D2.jpg,./image/Good/2D3.jpg,./image/Good/2D4.jpg,./image/Good/2D5.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (3, '小米10s', 19, '高通骁龙870,快速充电,6.67英寸', '赠蓝牙耳机Air2 SE', '2699,2899,2999', '红色,白色,黑色', './image/Good/3.png', '4+64,6+128,8+256', './image/Good/3.1.jpg,./image/Good/3.2.jpg,./image/Good/3.3.jpg,./image/Good/3.4.jpg', './image/Good/3D1.jpg,./image/Good/3D2.jpg,./image/Good/3D3.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (4, '小米CIVI', 19, '高通骁龙870,快速充电,6.67英寸', '赠蓝牙耳机Air2 SE', '2599,2899,3199', '红色,白色,黑色', './image/Good/4.png', '4+64,6+128,8+256', './image/Good/4.1.jpg,./image/Good/4.2.jpg,./image/Good/4.3.jpg,./image/Good/4.4.jpg', './image/Good/4D1.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (5, '小米11Pro', 19, '高通骁龙870,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '3999,4299,4699', '红色,白色,黑色', './image/Good/5.png', '4+64,6+128,8+256', './image/Good/5.1.jpg,./image/Good/5.2.jpg,./image/Good/5.3.jpg,./image/Good/5.4.jpg', './image/Good/5D1.jpg,./image/Good/5D2.jpg,./image/Good/5D3.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (6, '小米MIX Alpha', 19, '高通骁龙855+,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '19999,21999,22299', '红色,白色,黑色', './image/Good/6.png', '4+64,6+128,8+256', './image/Good/6.1.jpg,./image/Good/6.2.jpg,./image/Good/6.3.jpg,./image/Good/6.4.jpg', './image/Good/6D1.jpg,./image/Good/6D2.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (7, 'Redmi Note 11 Pro', 20, '天玑920,快速充电,7.92英寸', ' 赠蓝牙耳机Air2 SE', '1599,1899,2199', '红色,白色,黑色', './image/Good/7.png', '4+64,6+128,8+256', './image/Good/7.1.jpg,./image/Good/7.2.jpg,./image/Good/7.3.jpg,./image/Good/7.4.jpg', './image/Good/7D1.jpg,./image/Good/7D2..jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `good` VALUES (8, 'Redmi 9A', 20, 'Helio G25,快速充电,7.92英寸', '赠蓝牙耳机Air2 SE', '1799,1899,2199', '红色,白色,黑色', './image/Good/9.png', '4+64,6+128,8+256', './image/Good/9.1.jpg,./image/Good/9.2.jpg,./image/Good/9.3.jpg,./image/Good/9.4.jpg', './image/Good/9D1.jpg,./image/Good/9D2.jpg,./image/Good/9D3.jpg', '2024-03-27 10:15:16', '2024-03-27 10:15:16');

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
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES (1, '系统总览', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z\"></path></svg>', '', 0, 0, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (2, '核心技术', '', '/main/overview/technology', 1, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (3, '商品统计', '', '/main/overview/statistics', 1, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (4, '系统管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z\"></path></svg>', '', 0, 0, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (5, '用户管理', '', '/main/system/user', 4, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (6, '菜单管理', '', '/main/system/menu', 4, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (7, '管理员管理', '', '/main/system/admin', 4, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (8, '商品管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z\"></path></svg>', '', 0, 0, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (9, '商品类别', '', '/main/goods/category', 8, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (10, '商品信息', '', '/main/goods/message', 8, 1, '2024-03-27 10:15:16', '2024-03-27 10:15:16');
INSERT INTO `menu` VALUES (11, '订单管理', '<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" data-v-ea893728=\"\"><path fill=\"currentColor\" d=\"M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z\"></path></svg>', '/main/orders/arrange', 0, 0, '2024-03-27 10:15:16', '2024-03-27 10:15:16');

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
  `gender` int(11) NULL DEFAULT NULL,
  `avatarUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `defaultId` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `status` int(11) NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of my
-- ----------------------------
INSERT INTO `my` VALUES (1, '吴亦凡1221', 0, './image/other/5a283638123dc1f826c6c63da645e179.jpg', '[{\"addressName\":\"吴彦祖\",\"addressPhone\":\"14710001000\",\"addressRegion\":\"120105\",\"addressRegionText\":\"天津市/天津市/河北区\",\"addressDetail\":\"213\"}]', '0', '13710411285', 'admin', NULL, '2024-03-27 10:15:16', '2024-03-27 11:14:47');

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
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (2, 1, '1', '1', '0', '0', '3799', '吴彦祖', '天津市天津市河北区213', '14710001000', '确认收货', '2024-03-27 12:09:00', '2024-03-27 12:54:42');

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
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`shoppingId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shopping
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
