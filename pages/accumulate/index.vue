<template name="accumulate">
	<view>
		<scroll-view scroll-y class="page accumulate-page">
			<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" url="/pages/repository/list" class="nav-li" navigateTo :class="'bg-'+item.color"
				v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
				</navigator>
			</view>
			
			<view class="cu-card case">
				<view v-for="(item,index) in articles" :key="index" @tap="goDetail(index)"  class="cu-item shadow">
					<view class="image" v-bind:style="{backgroundImage:'url(' + item.cover + ')'}"></view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://cdn.nlark.com/yuque/0/2019/png/634279/1575884363463-avatar/568dd23a-43e8-423c-b250-ea592cdd597e.png?x-oss-process=image%2Fresize%2Cm_fill%2Cw_48%2Ch_48%2Fformat%2Cpng);"></view>
							<view class="content flex-sub">
								<view class="text-grey">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
            
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'accumulate',
		data() {
			return {
				elements: [
                    {
						title: '资产库知识体系',
						name: 'Asset Library',
						color: 'cyan'
					},
					{
						title: '移动端知识体系',
						name: 'Hybrid APP',
						color: 'blue'
					}
				],
                articles: [
                    {
                        id: 6,
                        cover: 'https://cdn.nlark.com/yuque/0/2020/png/634279/1586497733695-2b2701df-d42f-4deb-9c5f-c978cec9c182.png?x-oss-process=image/resize,w_746',
                        title: '【06】引入成熟的权限整体方案-上（完成）',
                        src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                        href: 'https://www.yuque.com/emu83w/fpm1c8/trsmq1',
                        height: 14176
                    },
                    {
                        id: 5,
                        cover: 'https://cdn.nlark.com/yuque/0/2020/png/634279/1584761224769-4e64c3f7-79f3-43ba-bc17-783610c8dfe2.png?x-oss-process=image/resize,w_746',
                        title: '【05】建立文档化服务（完成）',
                        src: 'https://s1.ax1x.com/2020/04/24/J02EHe.jpg',
                        href: 'https://www.yuque.com/emu83w/fpm1c8/zgx8d6',
                        height: 15424
                    },
                    {
                        id: 4,
                        cover: 'https://cdn.nlark.com/yuque/0/2020/png/634279/1584670791240-a85c0a7c-b1bc-4154-9a16-5cfb59a8fa07.png?x-oss-process=image/resize,w_746',
                        title: '【04】引入VT UI 2.0设计元素（完成）',
                        src: 'https://s1.ax1x.com/2020/04/24/J02u9I.jpg',
                        href: 'https://www.yuque.com/emu83w/fpm1c8/zp6hgs',
                        height: 9030
                    },
                    {
                        id: 3,
                        cover: 'https://cdn.nlark.com/yuque/0/2020/png/634279/1584595362555-d6c0f8af-a445-470e-b99c-9235bd9b1314.png?x-oss-process=image/resize,w_746',
                        title: '【03】图标方案改进（完成）',
                        src: 'https://s1.ax1x.com/2020/04/24/J02m4A.jpg',
                        href: 'https://www.yuque.com/emu83w/fpm1c8/kyqbz7',
                        height: 8862
                    },
                    {
                        id: 2,
                        cover: 'https://cdn.nlark.com/yuque/0/2020/png/634279/1584587188841-71bc570e-6500-4d00-a114-b02b90f10cd4.png?x-oss-process=image/resize,w_746',
                        title: '【02】克隆vue-element-admin源码并去除多余结构（完成）',
                        src: 'https://s1.ax1x.com/2020/04/24/J02ZAH.jpg',
                        href: 'https://www.yuque.com/emu83w/fpm1c8/valaxc',
                        height: 5690
                    },
                    {
                        id: 1,
                        cover: 'https://cdn.nlark.com/yuque/0/2020/png/634279/1587468527868-5fbb0f15-89a9-4b33-9726-b04e7612e550.png?x-oss-process=image/resize,w_746',
                        title: '【01】讲解前端技术向中台代码库概念（完成）',
                        src: 'https://s1.ax1x.com/2020/04/24/J02eNd.jpg',
                        href: 'https://www.yuque.com/emu83w/fpm1c8/gn1g6w',
                        height: 5644
                    }
                ]
			}
		},
		onLoad() {

		},
		methods: {
			goDetail (index) {
                let title = this.articles[index].title;
                let src = this.articles[index].src;
                let href = this.articles[index].href;
                let height = this.articles[index].height;
				uni.navigateTo({
					url: '/pages/accumulate/detail?title='+encodeURIComponent(JSON.stringify(title))+'&src='+encodeURIComponent(JSON.stringify(src))+'&href='+encodeURIComponent(JSON.stringify(href))+'&height='+height
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	
	.accumulate-page .cu-card>.cu-item { 
		background-color: transparent!important;
		margin: 30rpx 40rpx;
		padding: 0 2.5%;
	}
    
    .accumulate-page .image {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 320rpx!important;
        border-top-left-radius: 15rpx;
        border-top-right-radius: 15rpx;
    }
	
    .accumulate-page .cu-card>.cu-item .cu-list {
        border-bottom-left-radius: 15rpx;
        border-bottom-right-radius: 15rpx;
    }
    
    .accumulate-page .cu-card>.cu-item .content {
        display: block!important;
    }
    
    .accumulate-page .cu-list.menu-avatar>.cu-item {
        border-top: 1rpx solid #eee;
    }
	

</style>
