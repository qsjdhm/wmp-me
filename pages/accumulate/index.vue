<template name="accumulate">
	<view>
		<scroll-view scroll-y class="page accumulate-page">
			<image src="../../static/BasicsBg.png"
			 mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/repository/brochure?type='+item.type" class="nav-li" navigateTo :class="'bg-'+item.color"
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
	import data from '../data.js'
	export default {
		name: 'accumulate',
		data() {
			return {
				elements: [
                    {
                        type: '1',
						title: '资产库知识体系',
						name: 'Asset Library',
						color: 'cyan'
					},
					{
                        type: '2',
						title: '移动端知识体系',
						name: 'Hybrid APP',
						color: 'blue'
					}
				],
                articles: []
			}
		},
		onReady() {
			this.articles = data.hot;
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
