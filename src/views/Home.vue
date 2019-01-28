<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content class="layout-content">
                <Carousel
                        style="height: 50vh;"
                        autoplay
                >
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel">构</div>
                    </CarouselItem>
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel">建</div>
                    </CarouselItem>
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel">中</div>
                    </CarouselItem>
                    <CarouselItem style="height: 50vh; background: #506b9e; line-height: 50vh; text-align: center; color: #fff; font-size: 30px;">
                        <div class="demo-carousel">。。。</div>
                    </CarouselItem>
                </Carousel>
            </Content>
            <Footer class="layout-footer-center">2015-2019 &copy; znZheng.com</Footer>
        </Layout>
    </div>
</template>

<script lang="ts">
    import iView from 'iview'
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
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
        &-logo {
            width: 100px;
            height: 30px;
            background: #5b6270;
            border-radius: 3px;
            float: left;
            position: relative;
            top: 15px;
            left: 20px;
        }
        &-nav {
            width: 420px;
            margin: 0 auto;
            margin-right: 20px;
        }
        &-content {
            min-height: calc(100vh - 133px);
        }
        &-footer-center {
            background: #515a6e;
            color: #fff;
            text-align: center;
        }
    }
</style>