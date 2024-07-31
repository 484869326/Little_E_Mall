<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		$data = [
			['cName' => '手机', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/01.jpg'],
			['cName' => '电脑平板', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/02.png'],
			['cName' => '电视', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/03.png'],
			['cName' => '智能穿戴', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/04.png'],
			['cName' => '大家电', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/05.png'],
			['cName' => '小家电', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/06.png'],
			['cName' => '智能家居', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/07.png'],
			['cName' => '户外出行', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/08.png'],
			['cName' => '日用百货', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/09.png'],
			['cName' => '儿童用品', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/10.png'],
			['cName' => '有品精选', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/11.png'],
			['cName' => '宠物鲜花', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/12.png'],
			['cName' => '图书文娱', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/13.png'],
			['cName' => '生鲜', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/14.png'],
			['cName' => '二手商品', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/15.png'],
			['cName' => '钟表珠宝', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/16.png'],
			['cName' => '小E服务', 'parentId' => '0', 'level' => '0', 'cImg' => './image/category/level0/17.png'],
			// 17
			['cName' => '小米手机', 'parentId' => '1', 'level' => '1', 'cImg' => ''],
			['cName' => '小米数字系列', 'parentId' => '18', 'level' => '2', 'cImg' => './image/category/level2/小米数字.jpg'],
			['cName' => '红米数字系列', 'parentId' => '18', 'level' => '2', 'cImg' => './image/category/level2/红米手机.jpg'],
			// 20
			['cName' => '华为手机', 'parentId' => '1', 'level' => '1', 'cImg' => ''],
			['cName' => '华为Mate手机', 'parentId' => '21', 'level' => '2', 'cImg' => './image/category/level2/华为mate.png'],
			['cName' => '华为荣耀手机', 'parentId' => '21', 'level' => '2', 'cImg' => './image/category/level2/荣耀手机.png'],
			['cName' => '华为畅享手机', 'parentId' => '21', 'level' => '2', 'cImg' => './image/category/level2/华为畅享.png'],
			//24
			['cName' => 'oppo手机', 'parentId' => '1', 'level' => '1', 'cImg' => ''],
			['cName' => 'realme手机', 'parentId' => '25', 'level' => '2', 'cImg' => './image/category/level2/realme手机.png'],
			['cName' => '一加手机', 'parentId' => '25', 'level' => '2', 'cImg' => './image/category/level2/一加手机.png'],
			//27
			['cName' => '苹果手机', 'parentId' => '1', 'level' => '1', 'cImg' => ''],
			['cName' => '苹果数字系列', 'parentId' => '28', 'level' => '2', 'cImg' => './image/category/level2/苹果13.png'],
			['cName' => '苹果SE手机', 'parentId' => '28', 'level' => '2', 'cImg' => './image/category/level2/苹果SE.jpg'],
			//30
			['cName' => '小米', 'parentId' => '2', 'level' => '1', 'cImg' => ''],
			['cName' => '小米平板', 'parentId' => '31', 'level' => '2', 'cImg' => './image/category/level2/小米平板.png'],
			['cName' => '小米笔记本', 'parentId' => '31', 'level' => '2', 'cImg' => './image/category/level2/小米笔记本.png'],
			// 33
			['cName' => '华为', 'parentId' => '2', 'level' => '1', 'cImg' => ''],
			['cName' => '华为平板', 'parentId' => '34', 'level' => '2', 'cImg' => './image/category/level2/华为平板.png'],
			['cName' => '华为笔记本', 'parentId' => '34', 'level' => '2', 'cImg' => './image/category/level2/华为笔记本.png'],
			// 36
			['cName' => '联想', 'parentId' => '2', 'level' => '1', 'cImg' => ''],
			['cName' => '小新平板', 'parentId' => '37', 'level' => '2', 'cImg' => './image/category/level2/小新平板.png'],
			['cName' => '联想笔记本', 'parentId' => '37', 'level' => '2', 'cImg' => './image/category/level2/联想笔记本.png'],
			// 39
			['cName' => '苹果', 'parentId' => '2', 'level' => '1', 'cImg' => ''],
			['cName' => '苹果平板', 'parentId' => '40', 'level' => '2', 'cImg' => './image/category/level2/苹果平板.png'],
			['cName' => '苹果笔记本', 'parentId' => '40', 'level' => '2', 'cImg' => './image/category/level2/苹果笔记本.png'],
			// 42
		];
		DB::table('category')->insert($data);
	}
}
