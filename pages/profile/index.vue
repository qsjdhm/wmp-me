<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="backText">返回</block><block slot="content">一块讨论未来吧</block></cu-custom>
		<view class="profile-pack">
			<view class="basics-pack">
				<view class="cu-avatar xl round" style="background-image:url(https://cdn.nlark.com/yuque/0/2019/png/634279/1575884363463-avatar/568dd23a-43e8-423c-b250-ea592cdd597e.png?x-oss-process=image%2Fresize%2Cm_fill%2Cw_48%2Ch_48%2Fformat%2Cpng);"></view>
				<view class="info-pack">
					<view class="name">不拽注定被甩~</view>
					<view class="position">前端leader · 13964122832</view>
				</view>
                <view class="code-pack">
                    <img src="../../static/code.png" />
                </view>
			</view>
			<view class="cu-timeline">
				<view class="cu-time">现在我在做什么</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-blue">微前端</view>
                            <view class="cu-tag line-blue">低代码开发</view>
						</view>
						<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
					</view>
				</view>
                <view class="cu-time">关注的点</view>
                <view class="cu-item">
                	<view class="content">
                		<view class="cu-capsule radius">
                			<view class="cu-tag bg-blue">前端架构</view>
                			<view class="cu-tag line-blue">团队管理</view>
                		</view>
                		<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
                	</view>
                </view>
				<view class="cu-time">对前端leader的理解</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-blue">解决问题</view>
							<view class="cu-tag line-blue">拿结果</view>
						</view>
						<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
					</view>
				</view>
				<view class="cu-time">对职业的目标</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-blue">提高视野</view>
							<view class="cu-tag line-blue">组圈子做事情</view>
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
		width: 100%;
		height: 100%;
		margin-bottom: 100upx;
	}
	.basics-pack {
		display: -webkit-flex;
		display: flex;
		margin-bottom: 20upx;
        padding: 30upx;
        background-color: #fff;
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
    
    .basics-pack .code-pack {
        width: 128upx;
        height: 128upx;
    }
    .basics-pack .code-pack image {
        width: 128upx;
        height: 128upx;
    }
    
    .cu-timeline {
        padding: 30upx;
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
