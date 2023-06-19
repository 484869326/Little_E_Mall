layui.extend({
  admin: '{/}../../static/js/admin'
});
layui.use(['laydate', 'jquery', 'admin'], function () {
  var laydate = layui.laydate,
    $ = layui.jquery,
    admin = layui.admin;
  //执行一个laydate实例
  laydate.render({
    elem: '#start' //指定元素
  });
  //执行一个laydate实例
  laydate.render({
    elem: '#end' //指定元素
  });
 /*用户-删除*/
 function member_del(id) {
 	layer.confirm('确认要删除吗？', function(index) {
 		//发异步删除数据
 		let data = {};
 		data.id = parseInt(id);
 		$.ajax({
 			url: 'http://shoppingapi.net:3333/admin/Delete',
 			data,
 			dataType: "json",
 			method: "post",
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
  window.delAll = function (argument) {
    var data = admin.tableCheck.getData();
    if (data.length > 0) {
      layer.confirm('确认要删除吗？' + data, function (index) {
        //捉到所有被选中的，发异步进行删除
        layer.msg('删除成功', {
          icon: 1
        });
        $(".layui-form-checked").not('.header').parents('tr').remove();
      });
    } else {
      layer.msg("请先选择");
    }
  }
});