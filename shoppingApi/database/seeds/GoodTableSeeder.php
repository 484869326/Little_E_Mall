<?php

use Illuminate\Database\Seeder;

class GoodTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//
		$data = [
			['Goodname' => '小米11', 'Cid' => '19', 'Explain' => '全网通,快速充电,6.6英寸', 'advertise' => '官网标配【67W充电套装+晒单红包】', 'Price' => '3799,3999,4399', 'Goodimg' => './image/Good/1.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', 'Detail' => './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png'],
			['Goodname' => '小米Mix4', 'Cid' => '19', 'Explain' => '全网通,快速充电,6.67英寸', 'advertise' => '买赠素皮保护壳（黑色）', 'Price' => '4199,4399,4599', 'Goodimg' => './image/Good/2.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/2.1.jpg,./image/Good/2.2.jpg,./image/Good/2.3.jpg,./image/Good/2.4.jpg', 'Detail' => './image/Good/2D1.jpg,./image/Good/2D2.jpg,./image/Good/2D3.jpg,./image/Good/2D4.jpg,./image/Good/2D5.jpg'],
			['Goodname' => '小米10s', 'Cid' => '19', 'Explain' => '高通骁龙870,快速充电,6.67英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'Price' => '2699,2899,2999', 'Goodimg' => './image/Good/3.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/3.1.jpg,./image/Good/3.2.jpg,./image/Good/3.3.jpg,./image/Good/3.4.jpg', 'Detail' => './image/Good/3D1.jpg,./image/Good/3D2.jpg,./image/Good/3D3.jpg'],
			['Goodname' => '小米CIVI', 'Cid' => '19', 'Explain' => '高通骁龙870,快速充电,6.67英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'Price' => '2599,2899,3199', 'Goodimg' => './image/Good/4.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/4.1.jpg,./image/Good/4.2.jpg,./image/Good/4.3.jpg,./image/Good/4.4.jpg', 'Detail' => './image/Good/4D1.jpg'],
			['Goodname' => '小米11Pro', 'Cid' => '19', 'Explain' => '高通骁龙870,快速充电,7.92英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'Price' => '3999,4299,4699', 'Goodimg' => './image/Good/5.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/5.1.jpg,./image/Good/5.2.jpg,./image/Good/5.3.jpg,./image/Good/5.4.jpg', 'Detail' => './image/Good/5D1.jpg,./image/Good/5D2.jpg,./image/Good/5D3.jpg'],
			['Goodname' => '小米MIX Alpha', 'Cid' => '19', 'Explain' => '高通骁龙855+,快速充电,7.92英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'Price' => '19999,21999,22299', 'Goodimg' => './image/Good/6.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/6.1.jpg,./image/Good/6.2.jpg,./image/Good/6.3.jpg,./image/Good/6.4.jpg', 'Detail' => './image/Good/6D1.jpg,./image/Good/6D2.jpg'],
			['Goodname' => 'Redmi Note 11 Pro', 'Cid' => '20', 'Explain' => '天玑920,快速充电,7.92英寸', 'advertise' => ' 赠蓝牙耳机Air2 SE', 'Price' => '1599,1899,2199', 'Goodimg' => './image/Good/7.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/7.1.jpg,./image/Good/7.2.jpg,./image/Good/7.3.jpg,./image/Good/7.4.jpg', 'Detail' => './image/Good/7D1.jpg,./image/Good/7D2..jpg'],
			['Goodname' => 'Redmi 9A', 'Cid' => '20', 'Explain' => 'Helio G25,快速充电,7.92英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'Price' => '1799,1899,2199', 'Goodimg' => './image/Good/9.png', 'Type' => '4+64,6+128,8+256', 'Color' => '红色,白色,黑色', 'Swiper' => './image/Good/9.1.jpg,./image/Good/9.2.jpg,./image/Good/9.3.jpg,./image/Good/9.4.jpg', 'Detail' => './image/Good/9D1.jpg,./image/Good/9D2.jpg,./image/Good/9D3.jpg'],
		];
		DB::table('good')->insert($data);
	}
}
