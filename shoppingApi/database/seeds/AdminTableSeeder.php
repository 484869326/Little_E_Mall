<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        //
        $data = [
            ['adminName' => 'admin', 'Sex' => '男', 'Email' => '1657447830@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin', 'Tel' => '13410001000', 'Status' => '1'],
            ['adminName' => 'admin1', 'Sex' => '男', 'Email' => '1657447831@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin1', 'Tel' => '13410001001', 'Status' => '1'],
            ['adminName' => 'admin2', 'Sex' => '男', 'Email' => '1657447832@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin2', 'Tel' => '13410001002', 'Status' => '1'],
            ['adminName' => 'admin3', 'Sex' => '男', 'Email' => '1657447833@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin3', 'Tel' => '13410001003', 'Status' => '1'],
            ['adminName' => 'admin4', 'Sex' => '男', 'Email' => '1657447834@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin4', 'Tel' => '13410001004', 'Status' => '1'],
            ['adminName' => 'admin5', 'Sex' => '男', 'Email' => '1657447835@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin5', 'Tel' => '13410001005', 'Status' => '1'],
            ['adminName' => 'admin6', 'Sex' => '男', 'Email' => '1657447836@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin6', 'Tel' => '13410001006', 'Status' => '1'],
            ['adminName' => 'admin7', 'Sex' => '男', 'Email' => '1657447837@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin7', 'Tel' => '13410001007', 'Status' => '1'],
            ['adminName' => 'admin8', 'Sex' => '男', 'Email' => '1657447838@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin8', 'Tel' => '13410001008', 'Status' => '1'],
            ['adminName' => 'admin9', 'Sex' => '男', 'Email' => '1657447839@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin9', 'Tel' => '13410001009', 'Status' => '1'],
            ['adminName' => 'admin10', 'Sex' => '男', 'Email' => '1657447840@qq.com', 'Address' => '广东广州', 'adminPwd' => 'admin10', 'Tel' => '13410001010', 'Status' => '1'],
            ['adminName' => 'John', 'Sex' => '男', 'Email' => 'john@example.com', 'Address' => '北京', 'adminPwd' => 'password1', 'Tel' => '13512345678', 'Status' => 1],
            ['adminName' => 'Emma', 'Sex' => '女', 'Email' => 'emma@example.com', 'Address' => '上海', 'adminPwd' => 'password2', 'Tel' => '13612345678', 'Status' => 0],
            ['adminName' => 'Michael', 'Sex' => '男', 'Email' => 'michael@example.com', 'Address' => '广州', 'adminPwd' => 'password3', 'Tel' => '13712345678', 'Status' => 1],
            ['adminName' => 'Sophia', 'Sex' => '女', 'Email' => 'sophia@example.com', 'Address' => '深圳', 'adminPwd' => 'password4', 'Tel' => '13812345678', 'Status' => 0],
            ['adminName' => 'William', 'Sex' => '男', 'Email' => 'william@example.com', 'Address' => '成都', 'adminPwd' => 'password5', 'Tel' => '13912345678', 'Status' => 1],
            ['adminName' => 'Olivia', 'Sex' => '女', 'Email' => 'olivia@example.com', 'Address' => '重庆', 'adminPwd' => 'password6', 'Tel' => '15012345678', 'Status' => 0],
            ['adminName' => 'James', 'Sex' => '男', 'Email' => 'james@example.com', 'Address' => '武汉', 'adminPwd' => 'password7', 'Tel' => '15112345678', 'Status' => 1],
            ['adminName' => 'Ava', 'Sex' => '女', 'Email' => 'ava@example.com', 'Address' => '南京', 'adminPwd' => 'password8', 'Tel' => '15212345678', 'Status' => 0],
            ['adminName' => 'Oliver', 'Sex' => '男', 'Email' => 'oliver@example.com', 'Address' => '长沙', 'adminPwd' => 'password9', 'Tel' => '15312345678', 'Status' => 1],
            ['adminName' => 'Isabella', 'Sex' => '女', 'Email' => 'isabella@example.com', 'Address' => '杭州', 'adminPwd' => 'password10', 'Tel' => '15412345678', 'Status' => 0],
            ['adminName' => 'Benjamin', 'Sex' => '男', 'Email' => 'benjamin@example.com', 'Address' => '天津', 'adminPwd' => 'password11', 'Tel' => '15512345678', 'Status' => 1],
            ['adminName' => 'Mia', 'Sex' => '女', 'Email' => 'mia@example.com', 'Address' => '西安', 'adminPwd' => 'password12', 'Tel' => '15612345678', 'Status' => 0],
            ['adminName' => 'Henry', 'Sex' => '男', 'Email' => 'henry@example.com', 'Address' => '青岛', 'adminPwd' => 'password13', 'Tel' => '15712345678', 'Status' => 1],
            ['adminName' => 'Charlotte', 'Sex' => '女', 'Email' => 'charlotte@example.com', 'Address' => '济南', 'adminPwd' => 'password14', 'Tel' => '15812345678', 'Status' => 0],
            ['adminName' => 'Alexander', 'Sex' => '男', 'Email' => 'alexander@example.com', 'Address' => '郑州', 'adminPwd' => 'password15', 'Tel' => '15912345678', 'Status' => 1],
            ['adminName' => 'Amelia', 'Sex' => '女', 'Email' => 'amelia@example.com', 'Address' => '苏州', 'adminPwd' => 'password16', 'Tel' => '17012345678', 'Status' => 0],
            ['adminName' => 'Elijah', 'Sex' => '男', 'Email' => 'elijah@example.com', 'Address' => '合肥', 'adminPwd' => 'password97', 'Tel' => '25612345678', 'Status' => 1],
            ['adminName' => 'Grace', 'Sex' => '女', 'Email' => 'grace@example.com', 'Address' => '福州', 'adminPwd' => 'password98', 'Tel' => '25712345678', 'Status' => 0],
            ['adminName' => 'Joseph', 'Sex' => '男', 'Email' => 'joseph@example.com', 'Address' => '大连', 'adminPwd' => 'password99', 'Tel' => '25812345678', 'Status' => 1],
            ['adminName' => 'Scarlett', 'Sex' => '女', 'Email' => 'scarlett@example.com', 'Address' => '厦门', 'adminPwd' => 'password100', 'Tel' => '25912345678', 'Status' => 0],
            ['adminName' => 'Henre', 'Sex' => '男', 'Email' => 'Henre@example.com', 'Address' => '重庆', 'adminPwd' => 'password15', 'Tel' => '14912345678', 'Status' => 1],
            ['adminName' => 'Charlo', 'Sex' => '女', 'Email' => 'Charlo@example.com', 'Address' => '济南', 'adminPwd' => 'password16', 'Tel' => '15012345678', 'Status' => 0]];
        DB::table('admin')->insert($data);
    }
}
