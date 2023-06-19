<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $data=[
            ['Cname' =>'手机','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/01.jpg','Cimg'=>''],
            ['Cname' =>'电脑平板','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/02.png','Cimg'=>''],
            ['Cname' =>'电视','parentID' =>'0','Clevel'=>'0', 'parentimg'=>'./image/category/level0/03.png','Cimg'=>'' ],
            ['Cname' =>'智能穿戴','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/04.png','Cimg'=>''],
            ['Cname' =>'大家电','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/05.png','Cimg'=>'' ],
            ['Cname' =>'小家电','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/06.png','Cimg'=>''],
            ['Cname' =>'智能家居','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/07.png','Cimg'=>''],
            ['Cname' =>'户外出行','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/08.png','Cimg'=>''],
            ['Cname' =>'日用百货','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/09.png','Cimg'=>''],
            ['Cname' =>'儿童用品','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/10.png','Cimg'=>''],
            ['Cname' =>'有品精选','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/11.png','Cimg'=>''],
            ['Cname' =>'宠物鲜花','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/12.png','Cimg'=>''],
            ['Cname' =>'图书文娱','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/13.png','Cimg'=>''],
            ['Cname' =>'生鲜','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/14.png','Cimg'=>''],
            ['Cname' =>'二手商品','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/15.png','Cimg'=>''],
            ['Cname' =>'钟表珠宝','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/16.png','Cimg'=>''],
            ['Cname' =>'小E服务','parentID' =>'0','Clevel'=>'0','parentimg'=>'./image/category/level0/17.png','Cimg'=>''],
            // 17
            ['Cname' =>'小米手机','parentID' =>'1','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'小米数字系列','parentID' =>'18','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/小米数字.jpg'],
            ['Cname' =>'红米数字系列','parentID' =>'18','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/红米手机.jpg'],
            //20
            ['Cname' =>'华为手机','parentID' =>'1','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'华为Mate 手机','parentID' =>'21','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/华为mate.png'],
            ['Cname' =>'华为荣耀手机','parentID' =>'21','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/荣耀手机.png'],
            ['Cname' =>'华为畅享手机','parentID' =>'21','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/华为畅享.png'],
            //24
            ['Cname' =>'oppo手机','parentID' =>'1','Clevel'=>'1','parentimg'=>'','Cimg'=>'./image/category/level2/17.png'],
            ['Cname' =>'realme手机','parentID' =>'25','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/realme手机.png'],
            ['Cname' =>'一加手机','parentID' =>'25','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/一加手机.png'],
            //27
            ['Cname' =>'苹果手机','parentID' =>'1','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'苹果数字系列','parentID' =>'28','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/苹果13.png'],
            ['Cname' =>'苹果SE手机','parentID' =>'28','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/苹果SE.jpg'],
            //30
            ['Cname' =>'小米','parentID' =>'2','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'小米平板','parentID' =>'31','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/小米平板.png'],
            ['Cname' =>'小米笔记本','parentID' =>'31','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/小米笔记本.png'],
            // 33
            ['Cname' =>'华为','parentID' =>'2','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'华为平板','parentID' =>'34','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/华为平板.png'],
            ['Cname' =>'华为笔记本','parentID' =>'34','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/华为笔记本.png'],
            // 36
            ['Cname' =>'联想','parentID' =>'2','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'小新平板','parentID' =>'37','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/小新平板.png'],
            ['Cname' =>'联想笔记本','parentID' =>'37','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/联想笔记本.png'],
            // 39
            ['Cname' =>'苹果','parentID' =>'2','Clevel'=>'1','parentimg'=>'','Cimg'=>''],
            ['Cname' =>'苹果平板','parentID' =>'40','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/苹果平板.png'],
            ['Cname' =>'苹果笔记本','parentID' =>'40','Clevel'=>'2','parentimg'=>'','Cimg'=>'./image/category/level2/苹果笔记本.png'],
             // 42
        ];
        DB::table('category') ->insert($data);
    }
}
