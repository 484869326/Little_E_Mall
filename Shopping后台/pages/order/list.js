/*
 * @Author: https://github.com/WangEn
 * @Author: https://gitee.com/lovetime/
 * @Date:   2018-01-01
 * @lastModify 2020-08-29 14:51:01
 * +----------------------------------------------------------------------
 * | Weadmin [ 后台管理模板 ]
 * | 基于Layui http://www.layui.com/
 * +----------------------------------------------------------------------
 */
layui.extend({
	admin: '{/}../../static/js/admin'
});
layui.use(['table', 'jquery', 'form', 'admin'], function() {
	var table = layui.table,
		$ = layui.jquery,
		form = layui.form,
		admin = layui.admin;
	form.on('submit(sreach)', function(data) {
		
		setTimeout(()=>{
		tableRender(data.field);	
		},500)
		return false;
	});

	function tableRender(whereData = "") {
		table.render({
			elem: '#memberList',
			url: 'http://shoppingapi.net:3333/admin/order/likeSelect',
			cellMinWidth: 80,
			method: 'post',
			where: whereData,
			cols: [
				[ {
						field: 'orderid',
						title: '订单编号',
						sort: true
					}, {
						field: 'Userid',
						title: '用户ID',
						sort: true
					}, {
						field: 'Goodid',
						title: '商品ID',
						sort: true
					}, {
						field: 'Num',
						title: '数量',
						sort: true
					}, {
						field: 'totalPrice',
						title: '总价格',
						sort: true
					}, {
						field: 'OrderDate',
						title: '下单时间',
						sort: true
					},
					{
						field: 'Name',
						title: '收货人',
						sort: true
					},
					{
						field: 'Address',
						title: '地址',
						sort: true
					},
					{
						field: 'Phone',
						title: '电话',
						sort: true
					},
					{
						field: 'condition',
						title: '状态',
						sort: true
					},
					{
						field: 'operate',
						title: '操作',
						unresize: true,
						templet: function(d) {
							if(d.condition=="购买成功")
							{
								return "<p style='color:blue' onclick='member_del("+d.orderid+")'>发货</p>"
							}
							else{
								return "<p></p>"
							}
							
						}
					}
				]
			],
			event: true,
			page: true,
			limits: [5,10,20],
			limit: 10,
			done:function(res,curr,count){
				$("#totalNum").html(res.data.length);
			},
		});
	}
	tableRender();
	console.log(table.checkStatus('memberList').data)
	/*
	 *数据表格中form表单元素是动态插入,所以需要更新渲染下
	 * http://www.layui.com/doc/modules/form.html#render
	 * */
	// $(function() {
	// 	form.render();
	// });

	var active = {
		getCheckData: function() { //获取选中数据
			var checkStatus = table.checkStatus('memberList'),
				data = checkStatus.data;
			if(data.length>0){
				let showid=[];
				data.map(item=>{
					showid.push(item.id)
				})
				layer.confirm('确认要一键发货id为'+showid.toString()+'的数据吗？' , function(index) {
					data.map(item=>{
						ajaxDelete(item.id);
					})
					layer.msg('发货成功', {
						icon: 1
					});
					setTimeout(()=>{
						tableRender();
					},1000)
				});
			}
			else {
				layer.msg("请先选择需要发货的订单！");
			}
		},
		};
		function ajaxDelete(id){
			let data = {};
			data.id = parseInt(id);
			$.ajax({
				url: 'http://shoppingapi.net:3333/admin/order/Update',
				data,
				dataType: "json",
				method: "post",
				async:false,
				success: function() {}
			})
		}
	$('.demoTable .layui-btn').on('click', function() {
		var type = $(this).data('type');
		active[type] ? active[type].call(this) : '';
	});

	/*用户-删除*/
	window.member_del = function(id) {
		let data = {};
		data.id = parseInt(id);
		layer.confirm('确认要发货吗？', function(index) {
			//发异步删除数据
			$.ajax({
				url: 'http://shoppingapi.net:3333/admin/order/Update',
				data,
				dataType: "json",
				method: "post",
				async:false,
				success: function() {}
			})
			layer.msg('已发货!', {
				icon: 1,
				time: 1000
			});
			setTimeout(() => {
				location.replace(location.href);
			}, 1000)
		});
		
	}

});

function delAll(argument) {
	var data = tableCheck.getData();
	layer.confirm('确认要一键发货吗？' + data, function(index) {
		//捉到所有被选中的，发异步进行删除
		layer.msg('删除成功', {
			icon: 1
		});
		$(".layui-form-checked").not('.header').parents('tr').remove();
	});
}
