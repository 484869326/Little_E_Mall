<?php

use Illuminate\Database\Seeder;

class MenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menuData = [
                    [
                        'id' => 1,
                        'text' => '系统总览',
                        'icon' => '',
                        'path' => '',
                        'parent_id' => null,
                    ],
                    [
                        'id' => 2,
                        'text' => '核心技术',
                        'icon' => '',
                        'path' => '/main/overview/technology',
                        'parent_id' => 1,
                    ],
                    [
                        'id' => 3,
                        'text' => '商品统计',
                        'icon' => '',
                        'path' => '/main/overview/statistics',
                        'parent_id' => 1,
                    ],
                    [
                        'id' => 4,
                        'text' => '系统管理',
                        'icon' => '',
                        'path' => '',
                        'parent_id' => null,
                    ],
                    [
                        'id' => 5,
                        'text' => '用户管理',
                        'icon' => '',
                        'path' => '/main/system/user',
                        'parent_id' => 4,
                    ],
                    [
                        'id' => 6,
                        'text' => '菜单管理',
                        'icon' => '',
                        'path' => '/main/system/menu',
                        'parent_id' => 4,
                    ],
                    [
                        'id' => 7,
                        'text' => '管理员管理',
                        'icon' => '',
                        'path' => '/main/system/admin',
                        'parent_id' => 4,
                    ],
                    [
                        'id' => 8,
                        'text' => '商品管理',
                        'icon' => '',
                        'path' => '',
                        'parent_id' => null,
                    ],
                    [
                        'id' => 9,
                        'text' => '商品类别',
                        'icon' => '',
                        'path' => '/main/goods/category',
                        'parent_id' => 8,
                    ],
                    [
                        'id' => 10,
                        'text' => '商品信息',
                        'icon' => '',
                        'path' => '/main/goods/message',
                        'parent_id' => 8,
                    ],
                    [
                        'id' => 11,
                        'text' => '订单管理',
                        'icon' => '',
                        'path' => '/main/orders/arrange',
                        'parent_id' => null,
                    ],
                ];
        
                DB::table('menu')->insert($menuData);
    }
}
