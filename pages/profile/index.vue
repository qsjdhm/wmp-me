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
						<view class="margin-top">微前端：目前市面上的微前端概念可落地的是前端容器化（iframe）和应用组件化（Web Components），正在研究它也是为了解决其他公司发展中会遇到的问题。React在这里有天生优势，但我们用的是Vue，只能自己探索</view>
                        <view class="margin-top">低代码开发：为了帮助公司减少开发成本，正在落地低代码开发方式（自动化、模板化、组件化、开发规范），从效果来看确实有显著成效</view>
					</view>
				</view>
                <view class="cu-time">关注的点</view>
                <view class="cu-item">
                	<view class="content">
                		<view class="cu-capsule radius">
                			<view class="cu-tag bg-blue">前端架构</view>
                			<view class="cu-tag line-blue">团队管理</view>
                		</view>
                        <view class="margin-top">前端架构：做技术架构没有捷径，只能多做CodeReview、多听别人分享、多花时间学习</view>
                        <view class="margin-top">团队管理：对下级要技术上有氛围、制度上更透明；对上级要及时发现问题、解决问题；对平级要互通、主动沟通</view>
                        
                	</view>
                </view>
				<view class="cu-time">对前端leader的理解</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-blue">解决问题</view>
							<view class="cu-tag line-blue">拿结果</view>
						</view>
						<view class="margin-top">向上：可以给老板一种我能解决问题、并且有及时反馈的效果，需要主动发现老板头疼的问题并且主动解决问题</view>
						<view class="margin-top">向下：团队建立需达到同舟共济、价值共识、开心工作、目标清晰、使命必达、组员能获取到结果</view>
					</view>
				</view>
				<view class="cu-time">对职业的目标</view>
				<view class="cu-item">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-blue">提高视野</view>
							<view class="cu-tag line-blue">组圈子做事情</view>
						</view>
                        <view class="margin-top">提高视野：需要看透某些业务、技术的终局是什么，未来方向又是什么</view>
                        <view class="margin-top">转变思维：从业务的角度看整个业务线缺少哪块、业务需要技术实现哪些东西、打通技术与业务之间的通道</view>
                        <view class="margin-top">组圈子：希望可以协调和积累更多人力、技术、资源，逐步形成小圈子做事情效果</view>
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
