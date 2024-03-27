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
			['goodName' => '小米11', 'cid' => '19', 'explain' => '全网通,快速充电,6.6英寸', 'advertise' => '官网标配【67W充电套装+晒单红包】', 'price' => '3799,3999,4399', 'goodImg' => './image/Good/1.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/1.1.png,./image/Good/1.2.png,./image/Good/1.3.png,./image/Good/1.4.png', 'detail' => './image/Good/1D1.png,./image/Good/1D2.png,./image/Good/1D3.png,./image/Good/1D4.png,./image/Good/1D5.png'],
			['goodName' => '小米Mix4', 'cid' => '19', 'explain' => '全网通,快速充电,6.67英寸', 'advertise' => '买赠素皮保护壳（黑色）', 'price' => '4199,4399,4599', 'goodImg' => './image/Good/2.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/2.1.jpg,./image/Good/2.2.jpg,./image/Good/2.3.jpg,./image/Good/2.4.jpg', 'detail' => './image/Good/2D1.jpg,./image/Good/2D2.jpg,./image/Good/2D3.jpg,./image/Good/2D4.jpg,./image/Good/2D5.jpg'],
			['goodName' => '小米10s', 'cid' => '19', 'explain' => '高通骁龙870,快速充电,6.67英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'price' => '2699,2899,2999', 'goodImg' => './image/Good/3.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/3.1.jpg,./image/Good/3.2.jpg,./image/Good/3.3.jpg,./image/Good/3.4.jpg', 'detail' => './image/Good/3D1.jpg,./image/Good/3D2.jpg,./image/Good/3D3.jpg'],
			['goodName' => '小米CIVI', 'cid' => '19', 'explain' => '高通骁龙870,快速充电,6.67英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'price' => '2599,2899,3199', 'goodImg' => './image/Good/4.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/4.1.jpg,./image/Good/4.2.jpg,./image/Good/4.3.jpg,./image/Good/4.4.jpg', 'detail' => './image/Good/4D1.jpg'],
			['goodName' => '小米11Pro', 'cid' => '19', 'explain' => '高通骁龙870,快速充电,7.92英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'price' => '3999,4299,4699', 'goodImg' => './image/Good/5.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/5.1.jpg,./image/Good/5.2.jpg,./image/Good/5.3.jpg,./image/Good/5.4.jpg', 'detail' => './image/Good/5D1.jpg,./image/Good/5D2.jpg,./image/Good/5D3.jpg'],
			['goodName' => '小米MIX Alpha', 'cid' => '19', 'explain' => '高通骁龙855+,快速充电,7.92英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'price' => '19999,21999,22299', 'goodImg' => './image/Good/6.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/6.1.jpg,./image/Good/6.2.jpg,./image/Good/6.3.jpg,./image/Good/6.4.jpg', 'detail' => './image/Good/6D1.jpg,./image/Good/6D2.jpg'],
			['goodName' => 'Redmi Note 11 Pro', 'cid' => '20', 'explain' => '天玑920,快速充电,7.92英寸', 'advertise' => ' 赠蓝牙耳机Air2 SE', 'price' => '1599,1899,2199', 'goodImg' => './image/Good/7.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/7.1.jpg,./image/Good/7.2.jpg,./image/Good/7.3.jpg,./image/Good/7.4.jpg', 'detail' => './image/Good/7D1.jpg,./image/Good/7D2..jpg'],
			['goodName' => 'Redmi 9A', 'cid' => '20', 'explain' => 'Helio G25,快速充电,7.92英寸', 'advertise' => '赠蓝牙耳机Air2 SE', 'price' => '1799,1899,2199', 'goodImg' => './image/Good/9.png', 'type' => '4+64,6+128,8+256', 'color' => '红色,白色,黑色', 'swiper' => './image/Good/9.1.jpg,./image/Good/9.2.jpg,./image/Good/9.3.jpg,./image/Good/9.4.jpg', 'detail' => './image/Good/9D1.jpg,./image/Good/9D2.jpg,./image/Good/9D3.jpg'],
		];
		DB::table('good')->insert($data);
	}
}
