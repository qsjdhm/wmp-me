<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">来撩我吧</block></cu-custom>
		<view class="profile-pack">
			<view class="basics-pack">
				<view class="cu-avatar xl round" style="background-image:url(https://cdn.nlark.com/yuque/0/2019/png/634279/1575884363463-avatar/568dd23a-43e8-423c-b250-ea592cdd597e.png?x-oss-process=image%2Fresize%2Cm_fill%2Cw_48%2Ch_48%2Fformat%2Cpng);"></view>
				<view class="info-pack">
					<view class="name">不拽注定被甩~</view>
					<view class="position">山东万腾 · 前端leader</view>
				</view>
			</view>
			<view class="cu-timeline">
				<view class="cu-time">目前我在做什么</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
					</view>
				</view>
				<view class="cu-time">对前端leader的理解</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
					</view>
				</view>
				<view class="cu-time">关注的技术点</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
					</view>
				</view>
				<view class="cu-time">对未来的目标</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-cyan">上午</view>
							<view class="cu-tag line-cyan">10:00</view>
						</view>
						<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.profile-pack {
		padding: 30upx;
		width: 100%;
		height: 100%;
		margin-bottom: 60upx;
		background-color: #fff;
	}
	.basics-pack {
		display: -webkit-flex;
		display: flex;
		margin-bottom: 30upx;
	}
	.basics-pack .cu-avatar {
		width: 128upx;
		height: 128upx;
	}
	.basics-pack .info-pack {
		margin-left: 20upx;
		flex: 1;
	}
	.basics-pack .info-pack .name {
		height: 74upx;
		margin-bottom: 10upx;
		display: -webkit-flex;
		display: flex;
		align-items: flex-end;
		font-size: 36upx;
		color: #333;
	}
	.basics-pack .info-pack .position {
		height: 39upx;
		margin-top: 5upx;
		display: -webkit-flex;
		display: flex;
		align-items: flex-start;
		color: #888;
		font-size: 26upx;
	}
	
	
	
	
	
	
	
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
