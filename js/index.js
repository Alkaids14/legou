/**
 * 乐购商城首页js
 *
 */
//当页面加载完毕
$(function() {
	/* 首页大图轮播*/
	$('#banner').tyslide({
		boxh: 460, //盒子的高度
		w: 1000, //盒子的宽度
		h: 390, //图片的高度
		isShow: true, //是否显示控制器
		isShowBtn: true, //是否显示左右按钮
		controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20, //控制按钮宽度
		controlsH: 20, //控制按钮高度
		radius: 10, //控制按钮圆角度数
		controlsColor: "#d7d7d7", //普通控制按钮的颜色
		controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
		isShowNum: true //是否显示数字
	});
	/*图书 电子书小轮播*/
	$('#ebooks-banner').tyslide({
		boxh: 223, //盒子的高度
		w: 332, //盒子的宽度
		h: 223, //图片的高度
		isShow: true, //是否显示控制器
		isShowBtn: true, //是否显示左右按钮
		controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20, //控制按钮宽度
		controlsH: 2, //控制按钮高度
		//控制按钮圆角度数
		controlsColor: "#d7d7d7", //普通控制按钮的颜色
		controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
		//是否显示数字
	});
	$('#ebooks1-banner').tyslide({
					boxh:340,//盒子的高度
					w:380,//盒子的宽度
					h:340,//图片的高度
					isShow:true,//是否显示控制器
					isShowBtn:true,//是否显示左右按钮
					controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
					controlsW:20,//控制按钮宽度
					controlsH:2,//控制按钮高度
					controlsColor:"#d7d7d7",//普通控制按钮的颜色
					controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
					
				});
				$('#ebooks2-banner').tyslide({
					boxh:340,//盒子的高度
					w:380,//盒子的宽度
					h:340,//图片的高度
					isShow:true,//是否显示控制器
					isShowBtn:true,//是否显示左右按钮
					controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
					controlsW:20,//控制按钮宽度
					controlsH:2,//控制按钮高度
					controlsColor:"#d7d7d7",//普通控制按钮的颜色
					controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
					
				});
				$('#ebooks3-banner').tyslide({
					boxh:340,//盒子的高度
					w:380,//盒子的宽度
					h:340,//图片的高度
					isShow:true,//是否显示控制器
					isShowBtn:true,//是否显示左右按钮
					controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
					controlsW:20,//控制按钮宽度
					controlsH:2,//控制按钮高度
					controlsColor:"#d7d7d7",//普通控制按钮的颜色
					controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
					
				});

	/*新书列表手风琴效果*/
	$('.ebooks .right-box ul > li').mouseenter(function() {
		//所有兄弟：隐藏详情 显示标题
		$(this).siblings().find('.desc').hide();
		$(this).siblings().find('.ebooks-title').show();


		//当前：隐藏标题 显示详情
		$(this).find('.ebooks-title').hide();
		$(this).find('.desc').show();
	})


	/*推广商品切换*/
	$('.promotion .promotion-title ul li').mouseenter(function() {
		//导航激活类的切换
		$(this).addClass('active').siblings().removeClass('active') //返回被选元素的所有同级元素  //删除所有匹配元素
		//内容切换
		//获取对应的索引
		var index = $(this).index();

		console.log(index)
		console.log($('.promotion .promotion-content .inner-box'))
		//左右移动
		$('.promotion .promotion-content .inner-box').animate({
			'left': -index * 1170
		})
	})

	/*返回顶部*/
	//绑定滚动事件
	$(document).scroll(function() {
		//获取距离顶部的位置
		var topDistance = $('html,body').scrollTop();
		//判断
		if (topDistance > 500) { //距顶部距离
			$('.backToTop').fadeIn(); //出现
		} else {
			$('.backToTop').fadeOut(); //默认隐藏
		}
	})
	//返回顶部功能
	$('.backToTop').click(function() { //点击事件
		$('html,body')
			.animate({ //animate() 方法执行 CSS 属性集的自定义动画。该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
				scrollTop: 0 //滚动到顶部
			})
	})
	/*二维码滑出效果*/
	$('.qr-code .ticket').hover(function() {
		//让二维码滑出来
		$('.qr-code div').stop(true).animate({
			left: '-100px'
		})
		//让二维码收回去
	}, function() {
		$('.qr-code div').stop(true).animate({
			left: 0
		})
	})
	//顶部搜索框交互
	$(document).scroll(function() {
		//获取到顶部距离
		var topDistance = $('html,body').scrollTop();
		//判断
		if (topDistance > 500) {
			//如果滚动距离大于500 滑下来
			$('.top-search-box').slideDown(300)
		} else {
			//否则 收回去
			$('.top-search-box').slideUp(300)
		}
	})
	//楼梯跳转
	$('.floor li').click(function(){
		//获取索引
		var index=$(this).index();
		//选中每一个板块到顶部的偏移
		var topOffset=$('.floorBox').eq(index).offset().top;
		//让滚动条滚到这个位置
		$('html,body').animate({
			scrollTop:topOffset - 50
		})
	})
})
