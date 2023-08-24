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
			url: 'http://shoppingapi.net:3333/admin/my/likeSelect',
			cellMinWidth: 80,
			method: 'post',
			where: whereData,
			cols: [
				[{
						type: 'checkbox'
					}, {
						field: 'id',
						title: 'ID',
						sort: true
					}, {
						field: 'signature',
						title: '编号',
						sort: true
					}, {
						field: 'nickName',
						title: '用户名',
						sort: true
					}, {
						field: 'gender',
						title: '性别',
						sort: true,
						templet: function(d) {
								if(d.gender){
									return "女";
								}
								else{
									return "男";
								}
						}
					}, {
						field: 'avatarUrl',
						title: '头像',
						sort: true,
						templet: function(d) {
								return "<img src="+d.avatarUrl+" style='width:100px;'/>"
						}
					}, {
						field: 'city',
						title: '城市',
						sort: true					}, {
						field: 'phone',
						title: '手机号',
						sort: true
					},
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
			limits: [5,10,20],
			limit: 10,
			done:function(res,curr,count){
				console.log(res.data);
				$('.layui-table-cell').css({
					'height': 'auto',
					'text-align': 'center'
				});
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
				layer.confirm('确认要删除id为'+showid.toString()+'的数据吗？' , function(index) {
					data.map(item=>{
						ajaxDelete(item.id);
					})
					layer.msg('删除成功', {
						icon: 1
					});
					setTimeout(()=>{
						tableRender();
					},1000)
				});
			}
			else {
				layer.msg("请先选择需要删除的文章！");
			}
		},
		};
		function ajaxDelete(id){
			let data = {};
			data.id = parseInt(id);
			$.ajax({
				url: 'http://shoppingapi.net:3333/admin/my/Delete',
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
		
		layer.confirm('确认要删除吗？', function(index) {
			//发异步删除数据
			$.ajax({
				url: 'http://shoppingapi.net:3333/admin/my/Delete',
				data,
				dataType: "json",
				method: "post",
				async:false,
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
