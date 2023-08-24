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
		let name=$("#selectOptions option").eq(0).val();
		if(data.field.sex==name){
			layer.msg(name,{
				icon:1
			})
			return false;
		}
		setTimeout(()=>{
		tableRender(data.field);	
		},500)
		return false;
	});

	function tableRender(whereData = "") {
		table.render({
			elem: '#memberList',
			url: 'http://shoppingapi.net:3333/admin/likeSelect',
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
						field: 'adminName',
						title: '管理员名',
						sort: true
					}, {
						field: 'Sex',
						title: '性别',
						sort: true
					}, {
						field: 'Email',
						title: '邮箱',
						sort: true
					}, {
						field: 'Address',
						title: '地址',
						sort: true
					}, {
						field: 'adminPwd',
						title: '密码',
						sort: true
					}, {
						field: 'Tel',
						title: '电话',
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
				url: 'http://shoppingapi.net:3333/admin/Delete',
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
				url: 'http://shoppingapi.net:3333/admin/Delete',
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
			setTimeout(() => {
				location.replace(location.href);
			}, 1000)
		});
		
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
