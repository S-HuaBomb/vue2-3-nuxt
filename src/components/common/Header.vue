<template>
  <!-- 首页头部组件 -->
  <div class="header">
    <div class="index-header">
      <div class="header-content">
        <!-- 头部logo -->
        <div class="content-logo">
          <img src="/image/logo.png" alt="" />
        </div>
        <!-- 头部导航 -->
        <div class="content-nav">
          <ul>
            <li>
              <router-link to="/" style="cursor: pointer" class="actives">
                首 页
              </router-link>
            </li>
            <li>
              <router-link to="/course" style="cursor: pointer" class="">
                课 程
              </router-link>
            </li>
            <li>
              <router-link to="/member" style="cursor: pointer" class="">
                会 员
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 搜索、购物车、登录注册 -->
        <div class="searBuyLogin">
          <!--头部搜索框-->
          <div class="content-search">
            <input type="text" placeholder="请输入要搜索的课程" />
            <i class="el-icon-search" style="cursor: pointer"></i>
          </div>
          <div class="content-Shopping" style="cursor: pointer">
            <el-badge class="item">
              <router-link to="/cart">
                <i class="el-icon-shopping-cart-1"></i>
              </router-link>
            </el-badge>
            <!-- <i class="el-icon-shopping-cart-1"></i> -->
          </div>
          <div class="content-login-success">
            <!-- <div style="cursor: pointer">我的课程</div> -->
            <div>
              <!-- <img
                  class="avator"
                  src=""
                  alt=""
                /> -->
              <!-- <img class="avator" alt="" /> -->
              <!-- 头像信息 -->
            </div>
          </div>
          <div class="content-login">登录 / 注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
</script> 
  
  <style scoped>
.el-form-item__content {
  line-height: 24px !important;
}

.el-input-box {
  border: 1px solid #dcdfe6;
}
::v-deep .el-input-box input {
  border: none !important;
  width: 150px;
}
/*vip开始*/
.vip {
  display: flex;
  flex-direction: row;
  /*flex-wrap: wrap;*/
  width: 100%;
  height: 30px;
  margin-left: -105px;
  margin-top: 18px;
  font-size: 12px;
  line-height: 30px;
}
.vipImg {
  width: 15px;
  height: 15px;
  margin-right: 12px;
}
.vipImg img {
  width: 100% !important;
  height: 100% !important;
}
.vipName {
  color: #93999f;
}
.endTime {
  padding-left: 2px;
  color: #ff0000;
  position: absolute;
  top: 45px;
  left: 73px;
  font-size: 12px;
}
/*vip结束*/
.remember {
  margin-bottom: 10px !important;
}
.el-form-item {
  margin-bottom: 16px;
}
.el-checkbox {
  color: #a2a2a2 !important;
  font-weight: normal !important;
  font-size: 12px !important;
}
.el-checkbox__label {
  font-size: 12px !important;
}
.third-party-login {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 0;
}
.third-party-login i {
  font-size: 20px;
}
.third-party-login div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5ffe1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.third-party-login .login-qq {
  background-color: #edf5ff;
}
.third-party-login .login-weibo {
  background-color: #fff2f5;
}
.third-party-login .fa-qq {
  color: #368afe;
  cursor: pointer;
}
.third-party-login .fa-weixin {
  color: #09bb07;
  cursor: pointer;
}
.third-party-login .fa-weibo {
  color: #d81e06;
  cursor: pointer;
}
.course-color {
  color: #3689ff !important;
}
.container {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #9199a1;
  text-align: center;
  margin-top: 10px;
}
.regiter-success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}
.tip-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tip-img div {
  margin: 20px 0;
}
.regiter-success img {
  width: 250px;
  height: 180px;
}
.start-study {
  line-height: 40px;
  text-align: center;
  width: 200px;
  height: 40px;
  background: #3689ff;
  font-size: 18px;
  border-radius: 31px;
  color: #fff;
  cursor: pointer;
}
.privacy {
  font-size: 12px !important;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 153, 161, 1);
}
/*.privacy a {*/
/*  color: #3689ff;*/
/*  text-decoration: none;*/
/*}*/
.active {
  font-weight: bold;
  color: #3481ff;
  /* color: #3689ff; */
}
* {
  list-style: none;
  text-decoration: none;
}
.header {
  width: 100%;
  height: 100px;
  position: relative;
}
.title-desc {
  cursor: pointer;
}
.index-header {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  /* background: skyblue; */
  background: white;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 0px;
  z-index: 20;
}
.header-content {
  position: relative;
  display: flex;
  width: 1200px;
  justify-content: space-around;
}
.content-logo {
  width: 160px;
  height: 55px;
  margin: 10px 0;
  cursor: pointer;
}
.content-logo img {
  height: 100%;
}
.content-nav {
  width: 300px;
  height: 75px;
}
.content-nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
  margin: 0;
  padding: 0;
  /* height: 100%; */
  color: black;
}

.content-nav ul li a {
  font-size: 18px;
  font-family: MicrosoftYaHei;
  color: #808080;
}

.searBuyLogin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
}
.content-search {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 350px;
  height: 35px;
  border-radius: 8px;
  background: #f0f2f4;
}
.content-search input {
  padding: 0 10px;
  width: 430px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  color: #808080;
  background: #f0f2f4;
  font-size: 16px;
  outline: none;
}
.content-search i {
  color: #808080;
  font-size: 22px;
}
.content-Shopping i {
  color: #808080;
  font-size: 24px;
}
.content-login {
  height: 31px;
  font-size: 18px;
  color: #808080;
  text-align: center;
  cursor: pointer;
}
.content-login-success {
  height: 53px;
  color: #808080;
  text-align: center;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #707070;
}
.avator {
  height: 53px;
  width: 53px;
  cursor: pointer;
  border-radius: 50%;
}
.dialog-title {
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
}
.title-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(120, 125, 130, 1);
}
.title-item span {
  margin-top: 5px;
  width: 15px;
  height: 2px;
  /* background-color: red; */
}

.active span {
  background-color: rgba(54, 137, 255, 1);
}
.dialog-register {
  width: 200px;
  height: 30px;
  color: #3689ff;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  cursor: pointer;
}
.captcha {
  width: 100%;
  background: rgba(245, 245, 245, 1);
  position: relative;
}
.captcha el-input {
  background: rgba(245, 245, 245, 1);
}
.sendcaptcha {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #3689ff;
  cursor: pointer;
}
.send {
  font-size: 12px;
  color: rgba(120, 125, 130, 1);
}
.regiterBtn {
  width: 100%;
  border-radius: 20px;
}
.backLogin {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #3689ff;
  cursor: pointer;
}
.user-info {
  width: 200px;
  height: 194px;
  background-color: #fff;
  border: 1px solid rgba(248, 250, 252, 1);
  box-shadow: 0px 5px 15px 3px #888888;
  position: absolute;
  top: 87px;
  right: -40px;
  z-index: 999;
  display: block;
  border-radius: 10px;
}
.user-info-top {
  display: flex;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(248, 250, 252, 1);
  flex-direction: column;
}
.u-i-t-top {
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
}
.u-i-t-top img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;
}
.avator-info {
  width: 120px;
  height: 60px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}
/*有会员了之后高度微调*/
.avator-info p {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.u-i-i-bottom {
  display: flex;
  height: 100px;
  width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.info-item {
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.info-item img {
  width: 14px;
  height: 16px;
}
.user-info-bottom {
  position: relative;
  width: 100%;
  height: 30px;
}
.logout {
  line-height: 30px;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #93999f;
  cursor: pointer;
}
.shopcar {
  width: 200px;
  height: 220px;
  background: #fff;
  position: absolute;
  top: 87px;
  right: 130px;
  z-index: 999;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 3px #888888;
  border-radius: 10px;
}
.shopcar-top {
  height: 30px;
  line-height: 30px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
}
.s-t-left {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
}
.shopcar-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  font-size: 10px;
  box-sizing: border-box;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #a2a2a2;
  /* opacity: 0.56; */
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.shopcar-center img {
  width: 60px;
  height: 54px;
  margin-bottom: 5px;
}
.car-empy {
  font-size: 14px;
  color: #787d82;
  margin-bottom: 5px;
}
.course-center {
  color: #3481ff;
  cursor: pointer;
}
.shopcar-bottom {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #93999f;
}
.shopcar-bottom .car {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.car img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}
.actives {
  position: relative;
  color: #3689ff !important;
}
.actives::after {
  content: "" !important;
  position: absolute !important;
  bottom: -38px !important;
  left: -15px;
  width: 70px;
  height: 2px;
  background-color: #3689ff;
  border-radius: 5px !important;
}
.gray {
  /*grayscale(val):val值越大灰度就越深*/
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
  
  