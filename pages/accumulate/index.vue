<template name="accumulate">
	<view>
		<scroll-view scroll-y class="page accumulate-page">
			<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
				</navigator>
			</view>
			
			<view class="cu-card case" :class="isCard?'no-card':''">
				<view class="cu-item shadow">
					<view class="image">
						<image src="https://cdn.nlark.com/yuque/0/2020/jpeg/634279/1584537870665-e024d91b-793f-4983-a042-f2eba3ee7613.jpeg?x-oss-process=image/resize,w_1232"
						 mode="widthFix"></image>
						<view class="cu-bar bg-shadeBottom"> <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text></view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-grey">正义天使 凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									十天前
								</view>
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
				elements: [{
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
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	
	.accumulate-page .cu-card>.cu-item {
		background-color: #ffffff00!important;
		margin: 20rpx 40rpx;
		padding: 2.5%;
	}
	
	.accumulate-page .cu-card>.cu-item image {
		border-radius: 15rpx;
	}
	

</style>
