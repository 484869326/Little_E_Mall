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
	$.ajax({
		url: 'http://shoppingapi.net:3333/admin/good/selectCategory',
		method: 'get',
		async: "false",
		dataType: "json",
		success: function(res) {
			console.log(res.message);
			res.message.map(item => {
				$("#selectOptions").append("<option>" + item.Cname + "</option>");
				$(".layui-anim-upbit").append("<dd lay-value=" + item.Cname + " class=''>" +
					item.Cname + "</dd>")
			})
			form.render();
		}
	})
	form.on('submit(sreach)', function(data) {
		// let name=$("#selectOptions option").eq(0).val();
		// if(data.field.sex==name){
		// 	layer.msg(name,{
		// 		icon:1
		// 	})
		// 	return false;
		// }
		setTimeout(() => {
			tableRender(data.field);
		}, 500)
		return false;
	});
	function tableRender(whereData="") {
		table.render({
			elem: '#memberList',
			url: 'http://shoppingapi.net:3333/admin/good/likeSelect',
			cellMinWidth: 80,
			method: 'get',
			where: whereData,
			cols: [
				[{
						type: 'checkbox'
					}, {
						field: 'Goodid',
						title: 'ID',
						sort: true
					}, {
						field: 'Goodname',
						title: '商品名',
						sort: true
					}, {
						field: 'Cname',
						title: '类别',
						sort: true
					}, {
						field: 'Explain',
						title: '描述',
					}, {
						field: 'advertise',
						title: '广告词',
						sort: true
					}, {
						field: 'price',
						title: '价格',
						sort: true
					}, {
						field: 'color',
						title: '颜色',
					},
					{
						field: 'Goodimg',
						title: '商品图',
						minWidth: 120,
						align: 'center',
						templet: '#Goodimg',
					},
					{
						field: 'Type',
						title: '类型',
						sort: true
					},
					{
						field: 'Swiper',
						title: '轮播图',
						minWidth: 120,
						align: 'center',
						templet: function(d) {
							var Swiper = ""
							d.Swiper.map(item => {
								item="http://shoppingapi.net:3333"+item.slice(1);
								Swiper += "<img src=" + item +
									" style='width:100px;height:100px'/>";
							})
							return Swiper;
						}
					},
					// {
					// 	field: 'Detail',
					// 	title: '详细图',
					// 	minWidth: 120,
					// 	align: 'center',
					// 	templet: function(d) {
					// 		var Detail = ""
					// 		d.Detail.map(item => {
					// 			Detail += "<img src=" + item +
					// 				" style='width:100px;height:auto'/>";
					// 		})
					// 		return Detail;
					// 	}
					// },
					{
						field: 'operate',
						title: '操作',
						templet: '#operateTpl',
						unresize: true
					}
				]
			],
			event: true,
			page: true,
			limits: [5, 10, 20],
			limit: 10,
			done: function(res, curr, count) {
				console.log(res);
				$('.layui-table-cell').css({
					'height': 'auto',
					'text-align': 'center'
				});
				$("#totalNum").html(res.data.length);
			},
		});
	};
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
			if (data.length > 0) {
				let showid = [];
				data.map(item => {
					showid.push(item.Goodid)
				})
				layer.confirm('确认要删除id为' + showid.toString() + '的数据吗？', function(index) {
					data.map(item => {
						ajaxDelete(item.Goodid);
					})
					layer.msg('删除成功', {
						icon: 1
					});
					setTimeout(() => {
						tableRender();
					}, 1000)
				});
			} else {
				layer.msg("请先选择需要删除的文章！");
			}
		},
	};

	function ajaxDelete(id) {
		let data = {};
		data.id = parseInt(id);
		$.ajax({
			url: 'http://shoppingapi.net:3333/admin/good/Delete',
			data,
			dataType: "json",
			method: "post",
			async: false,
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
		layer.confirm('确认要删除吗？', function(index) {
			//发异步删除数据
			$.ajax({
				url: 'http://shoppingapi.net:3333/admin/good/Delete',
				data,
				dataType: "json",
				method: "post",
				async: false,
				success: function() {}
			})
			layer.msg('已删除!', {
				icon: 1,
				time: 1000
			});
		});
		setTimeout(() => {
			location.replace(location.href);
		}, 1000)
	}

});

function delAll(argument) {
	var data = tableCheck.getData();
	layer.confirm('确认要删除吗？' + data, function(index) {
		//捉到所有被选中的，发异步进行删除
		layer.msg('删除成功', {
			icon: 1
		});
		$(".layui-form-checked").not('.header').parents('tr').remove();
	});
}
