<template>
    <div class="layout">
        <Drawer title="Basic Menu" :closable="false" v-model="value1" :mask-style="{zIndex: 8}" placement="left" :styles="{padding: 0}">
            <Menu mode="vertical" active-name="1" width="256px">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="index" to="/">
                        <Icon type="ios-keypad"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="blogs" target="_blank" to="http://blog.znzheng.com">
                        <Icon type="ios-paper"></Icon>
                        博客
                    </MenuItem>
                </div>
            </Menu>
        </Drawer>
        <Layout>
            <Header class="layout-headers" :style="{left: value1 ? '260px':'4px'}">
                <Icon type="logo-chrome" class="icon" :class="{showIcon: value1}" size="40" @click="value1 = !value1" />
            </Header>
            <Content class="layout-content">
                <Carousel
                        style="height: 50vh;"
                        autoplay
                >
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel"> 展 </div>
                    </CarouselItem>
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel"> 示 </div>
                    </CarouselItem>
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel"> 中 </div>
                    </CarouselItem>
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel"> 。。。 </div>
                    </CarouselItem>
                </Carousel>
            </Content>
            <Footer class="layout-footer-center">2015-2019 &copy; znZheng.com 冀ICP备16011331号-2 </Footer>
        </Layout>
    </div>
</template>

<script lang="ts">
    import iView from 'iview'
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        private data(): object {
            return {
                value1: false
            }
        }

        private created(): void {
            iView.Spin.show()
        }

        private mounted(): void {
            iView.Spin.hide()
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        &-headers {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: none;
            padding: 0;
            position: fixed;
            left: 4px;
            top: 4px;
            z-index: 9;
            color: #fff;
            transition: .26s linear;
            .icon {
                transform: rotate(0deg);
                transition: .26s linear;
                color: #fff;
            }
            .showIcon {
                transform: rotate(360deg);
                transition: .26s linear;
                color: #2d8cf0;
            }
        }
        &-content {
            min-height: calc(300vh - 133px);
        }
        &-footer-center {
            background: #515a6e;
            color: #fff;
            text-align: center;
        }
    }
</style>