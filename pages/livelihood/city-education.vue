<style lang="less" scoped>
  .main {
    width: 750rpx;
    float: left;
    background-color: #fff;
    padding-bottom: 80rpx;
  }
  .unit {
    width: 750rpx;
    float: left;
    background-color: #fff;
  }
  .section {
    width: 100%;
    float: left;
  }
  .part {
    width: 100%;
    float: left;
  }
  .block {
    width: 100%;
    float: left;
  }
  // 小节标题
  .title {
    width: 100%;
    height: 115rpx;
    .title-icon-bar-left {
      margin: 49rpx 0 0 25rpx;
      float: left;
      width: 6rpx;
      height: 34rpx;
      background: #277ecf;
      border-radius: 3rpx;
    }
    .title-icon-bar-right {
      margin: 56rpx 0 0 4rpx;
      float: left;
      width: 6rpx;
      height: 21rpx;
      background: #7db2e2;
      border-radius: 3rpx;
    }
    .title-text {
      float: left;
      margin: 41rpx 0 0 13rpx;
      font-family: 'PingFang-SC-Bold';
      font-size: 36rpx;
    }
  }
  // 副标题-包头市
  .blue-bar {
    width: 95rpx;
    height: 30rpx;
    background-color: #1a79c8;
    border-radius: 18rpx;
    float: left;
    font-size: 22rpx;
    margin: 64rpx 0 0 23rpx;
    color: white;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  // 副标题-文本
  .subtitle {
    float: left;
    color: #909090;
    font-size: 26rpx;
    margin: 60rpx 0 0 5rpx;
    text-align: center;
    font-family: 'PingFang-SC-Medium';
  }
  // 底部页脚文字
  .bottom-text {
    width:750rpx;
    font-size: 22rpx;
    float: left;
    font-family: "PingFang-SC-Medium";
    text-align: center;
    color: #909090;
  }

  .text-center {
    text-align: center;
  }
  .text24 {
    font-size: 24rpx;
    font-family: "PingFang-SC-Medium";
    color: #353535;
  }

  .number44 {
    font-size: 44rpx;
    font-family: 'DIN-Medium';
  }
  .number50 {
    font-size: 50rpx;
    font-family: 'DIN-Medium';
  }
  // 总体概况
  .unit-abstract {
    float: left;
  }
  // 学前教育
  .unit-preschool {
    float: left;
    margin-bottom: -30rpx;
  }
  // 初中教育
  .unit-junior {
    float: left;
    .enrollment {
      .tab-adj {
        margin-top: 20rpx;
      }
    }
  }
  // 高中教育
  .unit-senior {
    float: left;
    .teacher {
      .chart-adj {
        margin-top: -50rpx;
        /*margin-bottom: -40rpx;*/
      }
    }
    .student {
      .chart-adj {
        margin-top: -30rpx;
        /*margin-bottom: -40rpx;*/
      }
      .chart-green {
        margin-top: 20rpx;
        margin-bottom: 15rpx;
      }
    }
    .enrollment {
      .tab-adj {
        margin-top: 20rpx;
      }
      .chart-adj {
        margin-top: -40rpx;
        /*margin-bottom: -40rpx;*/
      }
    }
  }
  // 特殊教育
  .unit-special {
    float: left;
    .school {
      .tab-box-line {
        width: 692rpx;
        height: 115rpx;
        box-shadow: 0 0 12rpx rgba(129, 129, 129, 0.25);
        border-radius: 8rpx;
        margin: 0 auto;
        line-height: 115rpx;
        text-align: left;
        .name {
          font-family: 'PingFang-SC-Medium';
          font-size: 24rpx;
          color: #1c1c1c;
          width: 500rpx;
          text-align: left;
          float: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:before {
            content: '';
            /*background: url("../../static/assets/images/h5/education-special-icon.png") no-repeat;*/
            background: url(data:image/png;base64,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) no-repeat;
            background-size: 64rpx;
            width: 64rpx;
            height: 64rpx;
            margin: 25rpx 22rpx;
            display: block;
            float: left;
          }
        }
        .number {
          width: max-content;
          height: 115rpx;
          font-size: 50rpx;
          font-family: 'DIN-Medium';
          margin: 0;
          line-height: 115rpx;
          text-align: left;
        }
        .unit {
          font-size: 24rpx;
          font-family: 'PingFang-SC-Regular';
          margin-left: -10rpx;
          text-align: left;
        }
      }
    }
    .admission {
      .label-adj {
        padding-top: 3rpx !important;
        .text24 {
          white-space: pre-line;
        }
      }
      .chart-adj {
        margin-top: -30rpx;
      }
    }
  }
  // 高等教育
  .unit-high {
    float: left;
    margin-top: -50rpx;
    .teacher {
      .chart-adj {
        margin-top: -50rpx;
        /*margin-bottom: -40rpx;*/
      }
    }
    .student {
      .chart-adj {
        margin-top: -40rpx;
        /*margin-bottom: -40rpx;*/
      }
    }
    .enrollment {
      .tab-adj {
        margin-top: 20rpx;
      }
      .chart-adj {
        margin-top: -40rpx;
        /*margin-bottom: -40rpx;*/
      }
    }
  }
  // 人力资源开发
  .unit-human {
    float: left;
    margin-top: -40rpx;
    .subtitle-adj {
      margin-top: -60rpx;
    }
    .time {
      margin-top: 25rpx;
    }
    .ratio {
      .label-adj {
        padding-top: 3rpx !important;
        .text24 {
          white-space: pre-line;
        }
      }
      .chart-adj {
        margin-top: -30rpx;
      }
    }
  }
  // 三等分tab
  .tab-box-three-color {
    width: 750rpx;
    float: left;
    .tab {
      float: left;
      height: 144rpx;
      width: 210rpx;
      margin-left: 34rpx;
      .label-adj {
        margin-top: 22rpx;
      }
      &:first-child {
        margin-left: 24rpx;
      }
    }
    .select-box {
      float: left;
      width: 210rpx;
      height: 30rpx;
      margin-bottom: -23rpx;
      margin-left: 34rpx;
      &:first-child {
        margin-left: 24rpx;
      }
      .select {
        float: left;
        margin-top: 7rpx;
        width: 210rpx;
        height: 23rpx;
        /*background: url("../../static/assets/images/h5/tab-selected.png") no-repeat;*/
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAAXCAYAAABzomECAAABYElEQVR4nO3bMUoDQRjF8f+GXMAzbO89RESxs7X3DKJ4htwgFwjYpk+dehWxDCxskyIQ1mInIijE3f1mv2HzfpBy33wpHllmJllZlufABSLS1+sUqIEz70lERiDLyrL0HkJkNLK6rr1nEBmNifcAImOiQokYmnoPcEqKohh8zTzPB1/zlOkXSsSQCuVjRnNcEfMzG+zbyDcVyscDsIiYvwhryMBUKB974A5YRchehex9hGw5QoXyswWugA/DzM+QuTXMlBZUKF8bmgJUBlkVcBkyxYkK5W8N3AK7Hhm7kLE2mUg6U6HSsATuaXbn2qrDs0vTiaQTFSodc+C5w3Mv4VlJgAqVlifalWMOPEaaRTpQodLS5vWtz2uiRKJCpec/GwwWGxkSgQqVpgq45u8t8A1wg81WuxhTodL1zu9D2sNh8JvLRHKUCpW2n9eIYl5XEiP6P1T6DhddJ8S9UCsGvgAm8lpnf997zgAAAABJRU5ErkJggg==) no-repeat;
        background-size: 210px 23rpx;
      }
    }
  }
  .tab-box-three {
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    float: left;
    &:nth-child(2) {
      margin-top: 15rpx;
    }
    .tab {
      width: 231rpx;
      height:110rpx;
      padding-top: 40rpx;
      float:left;
      text-align: center;
      &:last-child {
        .splitLine {
          background-color: #fff;
        }
      }
      .splitLine {
        float: right;
        width: 1rpx;
        height: 80rpx;
        margin-top: 0rpx;
        background-color: #e1e1e1;
      }
      .tab-with-line {
        width: 230rpx;
        /*flex: 1;*/
        height:110rpx;
        float:left;
      }
    }
    .tabThreeActive {
      border-top:solid #1a79c8 4rpx;
      width: 231rpx;
      padding-top: 36rpx;
      background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
      .text24 {
        color: #1a79c8;
      }
      .number44 {
        color: #1a79c8;
      }
    }
  }
  .tab-box-three-arrow {
    width: 693rpx;
    height: 150rpx;
    margin-left: 29rpx;
    float: left;
    &:nth-child(2) {
      margin-top: 15rpx;
    }
    .tab {
      width: 226rpx;
      height:117rpx;
      padding-top: 33rpx;
      float:left;
      text-align: center;
      &:first-child {
        width: 241rpx;
      }
      &:last-child {
        .splitLine {
          background-color: #fff;
        }
      }
      .splitLine {
        float: right;
        width: 1rpx;
        height: 80rpx;
        margin-top: 3rpx;
        background-color: #e1e1e1;
      }
      .tabWithLine {
        width: 225rpx;
        /*flex: 1;*/
        height:110rpx;
        float:left;
      }
      .tabWithArray {
        width: 229rpx;
        height: 110rpx;
      }
      .includeArray {
        float: right;
        height:121rpx;
        width: 12rpx;
        margin-top: -127rpx;
        /*background: url("../../static/assets/images/h5/include-array.png") no-repeat;*/
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAB5CAYAAAANmsCVAAAB+0lEQVRYhd3YPWsUURTG8d9k44Kg2IiFYmuhrY1gY2fUj6BiEAUrBUGwkCBY+FZpIwjBRhRsxBf0C0hAsLKxsRMtLEQCCpusazEzKtl17pxJxgxOM8Pe85/zMs+557LZvoU5Na8eTNe1RoYsAoQ9/Fsgw6gOUCadNP718khI0xi1CoSr1CiHdoENGlQp7CGcQ6gfwh7WHxjrkRQw1iONqhQC+omQJnpoF+hroNaOJd3IQyjp9Zf36oFwldZg10gMrnEgMbjaF19HB0ptYHNpO1XDeCPuFMD7FNDDbezHZ5xMAVcwg284gU9VwFnMYoCjeMffc5jFpeL5DN6UC5OqNIMbRfwX8PLPxZUe9uKeXDfXMJ//nE0E9uAxNhWGV38vjcaAHXiCrXiB85MSK4EteIqdWMBxDKuA8t5T4/A3ha84go84gAcFXOnhAw7hSwHfSgHwFgexiNO4mALgtVwGA8wVYCUAz3BOXqmbOJwC4C4uF8/zcgVUAnC9APt4hN0pgFx8z+VyeYjtKWCIU3iFbbhfp6e/41gB76q7ayximdi+1FEgNNjDwFLrIQ2aeAgB4Rw6CLRf1nBIA8HDSZMPl0XVOgpXqWNl7SAQ/tJLUaCjPR1Oul0Py02A9velVYWU/K9vJZA87q3R2K0IbDJQEdgwGtL/AoSk8QN+AvjtgUL4FYdcAAAAAElFTkSuQmCC) no-repeat;
        background-size: 100% 100%;
      }
    }
    .tabThreeActive {
      border-top:solid #1a79c8 4rpx;
      width: 231rpx;
      padding-top: 36rpx;
      background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
      .text24 {
        color: #1a79c8;
      }
      .number44 {
        color: #1a79c8;
      }
    }
  }
  // 两等分tab
  .tab-box-two {
    width: 692rpx;
    height: 150rpx;
    margin-left: 29rpx;
    /*display: flex;*/
    float: left;
    .two-tab {
      width: 346rpx;
      /*flex: 1;*/
      height:110rpx;
      float:left;
      padding-top: 33rpx;
    }
    .tabTwoActive {
      border-top:solid #1a79c8 4rpx;
      padding-top: 29rpx;
      background-image: linear-gradient(rgba(231, 242, 255, 1), rgba(231, 242, 255, 0));
      .text24 {
        color: #1a79c8;
      }
      .number44 {
        color: #1a79c8;
      }
    }
  }
  // 两等分tab
  .tab-box-two-color {
    /*display: flex;*/
    float: left;
    .tab {
      float: left;
      width: 334rpx;
      height: 144rpx;
      margin-left: 24rpx;
      &:first-child {
        margin-left: 26rpx;
      }
      .label-adj {
        float: left;
        margin: 26rpx 0 0 33rpx
      }
      .number50 {
        margin-left: 32rpx
      }
    }
  }
  // 左侧单tab
  .tab-box-one-left {
    width: 250rpx;
    height: 125rpx;
    margin-left: 29rpx;
    float: left;
    .label-adj {
      padding-top: 20rpx;
    }
  }

  // 右侧绿色百分比bar框
  .text-box-green {
    /*background: url("../../static/assets/images/h5/textbox-green.png") no-repeat;*/
    background: url(data:image/png;base64,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) no-repeat;
    background-size: 422rpx 123rpx;
    width: 422rpx;
    height: 123rpx;
    margin-left: 10rpx;
    float: left;
    .chart {
      width: 422rpx;
      height: 123rpx;
    }
  }
  .tabGreen {
    background-color: #edf9f5;
    border-top: solid #09ab80 4rpx;
  }
  .tabBlue {
    background-color: #f1f6fb;
    border-top: solid #1a79c8 4rpx;
  }
  .tabYellow {
    background-color: #fcf7f2;
    border-top: solid #f0993c 4rpx;
  }
  .shadow {
    box-shadow: 0rpx 0rpx 12rpx rgba(129, 129, 129, 0.25);
  }

  // 图表容器
  .hotmap {
    width: 100%;
    height: 700rpx;
    float: left;
    margin-top: -50rpx;
    margin-bottom: 10rpx;
  }
  .chart {
    width: 100%;
    height: 500rpx;
    float: left;
  }
  .chart-green {
    width: 100%;
    margin-top: 10rpx;
    height: 200rpx;
    float: left;
  }
</style>

<template>
  <div v-if="tabData.data" class="main">
    <!--总体概况-->
    <div class="unit unit-abstract" id="1stTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[0].name}}</span>
      </div>
      <div class="section">
        <div class="tab-box-three-color">
          <div
            v-for="(item,index) in abstractObjDetail"
            @click="switchAbstractTab(index)"
            :class="{tabGreen: index===0, tabBlue: index===1, tabYellow: index===2}"
            class="tab">
            <div
              class="block text-center label-adj">
              <span class="text24">{{item.label}}</span>
            </div>
            <div
              class="block text-center">
              <span class="number50">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
          <div class="part">
            <div v-for="(item,index) in abstractObjDetail" class="select-box">
              <div v-if="abstractActive===index" class="select"></div>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in abstractObjDetail"
          v-if="abstractActive === index"
          class="part">
          <span class="blue-bar margin-top25">包头市</span>
          <span class="subtitle margin-top22">{{item.label}}</span>
          <div class="hotmap" id="abstract"></div>
        </div>
      </div>
      <div class="section bottom-text">该板块数据为2019年数据</div>
    </div>
    <!--学前教育-->
    <div class="unit unit-preschool" id="2ndTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[1].name}}</span>
      </div>
      <div class="section kindergarten">
        <div class="shadow tab-box-two">
          <div
            v-for="(item,index) in preschoolObj.schoolNumber.detail"
            :class="{tabTwoActive: index === kindergartenActive}"
            class="two-tab"
            @click="switchKindergartenTab(index)">
            <div class="block text-center">
              <span class="text24">{{item.label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in preschoolObj.schoolNumber.detail"
          v-if="kindergartenActive === index"
          class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}</span>
          <div class="hotmap" id="kindergarten"></div>
        </div>
      </div>
      <div class="section teacher">
        <div class="part tab-box-two-color">
          <div
            v-for="(item,index) in preschoolObj.teacher.detail"
            :class="{tabGreen: index===0, tabBlue: index===1}"
            class="tab"
          >
            <div class="block">
              <span class="text24 label-adj">{{item.label}}</span>
            </div>
            <div class="block">
              <span class="number50">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part chart" id="kindergartenTeacher"></div>
      </div>
      <div class="section children">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{preschoolObj.students.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{preschoolObj.students.detail[0].value}}</span>
              <span class="text24">{{preschoolObj.students.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="kindergartenChildrenPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="kindergartenChildren"></div>
      </div>
      <div class="section admission">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{preschoolObj.admissionRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{preschoolObj.admissionRate.detail[0].value}}</span>
              <span class="text24">{{preschoolObj.admissionRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="kindergartenAdmissionPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="kindergartenAdmission"></div>
      </div>
    </div>
    <!--小学教育-->
    <div class="unit unit-primary" id="3rdTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[2].name}}</span>
      </div>
      <div class="section school">
        <div class="shadow tab-box-two">
          <div
            v-for="(item,index) in primaryObj.schoolNumber.detail"
            :class="{tabTwoActive: index === primarySchoolActive}"
            class="two-tab"
            @click="switchPrimarySchoolTab(index)">
            <div class="block text-center">
              <span class="text24">{{item.label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in primaryObj.schoolNumber.detail"
          v-if="primarySchoolActive === index"
          class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}</span>
          <div class="hotmap" id="primarySchool"></div>
        </div>
      </div>
      <div class="section teacher">
        <div class="part tab-box-two-color">
          <div
            v-for="(item,index) in primaryObj.teacher.detail"
            :class="{tabGreen: index===0, tabBlue: index===1}"
            class="tab"
          >
            <div class="block">
              <span class="text24 label-adj">{{item.label}}</span>
            </div>
            <div class="block">
              <span class="number50">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part chart" id="primaryTeacher"></div>
      </div>
      <div class="section student">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{primaryObj.students.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{primaryObj.students.detail[0].value}}</span>
              <span class="text24">{{primaryObj.students.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="primaryStudentPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="primaryStudent"></div>
      </div>
      <div class="section admission">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{primaryObj.admissionRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{primaryObj.admissionRate.detail[0].value}}</span>
              <span class="text24">{{primaryObj.admissionRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="primaryAdmissionPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="primaryAdmission"></div>
      </div>
    </div>
    <!--初中教育-->
    <div class="unit unit-junior" id="4thTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[3].name}}</span>
      </div>
      <div class="section school">
        <div class="shadow tab-box-two">
          <div
            v-for="(item,index) in juniorObj.schoolNumber.detail"
            :class="{tabTwoActive: index === juniorSchoolActive}"
            class="two-tab"
            @click="switchJuniorSchoolTab(index)">
            <div class="block text-center">
              <span class="text24">{{item.label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in juniorObj.schoolNumber.detail"
          v-if="juniorSchoolActive === index"
          class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}</span>
          <div class="hotmap" id="juniorSchool"></div>
        </div>
      </div>
      <div class="section teacher">
        <div class="part tab-box-two-color">
          <div
            v-for="(item,index) in juniorObj.teacher.detail"
            :class="{tabGreen: index===0, tabBlue: index===1}"
            class="tab"
          >
            <div class="block">
              <span class="text24 label-adj">{{item.label}}</span>
            </div>
            <div class="block">
              <span class="number50">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part chart" id="juniorTeacher"></div>
      </div>
      <div class="section student">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{juniorObj.students.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{juniorObj.students.detail[0].value}}</span>
              <span class="text24">{{juniorObj.students.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="juniorStudentPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="juniorStudent"></div>
      </div>
      <div class="section admission">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{juniorObj.admissionRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{juniorObj.admissionRate.detail[0].value}}</span>
              <span class="text24">{{juniorObj.admissionRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="juniorAdmissionPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="juniorAdmission"></div>
      </div>
      <div class="section enrollment">
        <div class="part tab-adj">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{juniorObj.EnrollmentRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{juniorObj.EnrollmentRate.detail[0].value}}</span>
              <span class="text24">{{juniorObj.EnrollmentRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="juniorEnrollmentPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="juniorEnrollment"></div>
      </div>
    </div>
    <!--高中教育-->
    <div class="unit unit-senior" id="5thTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[4].name}}</span>
      </div>
      <div class="section school">
        <div class="shadow tab-box-three">
          <div
            v-for="(item,index) in seniorObj.schoolNumber.detail"
            :class="{tabThreeActive: seniorSchoolActive===index}"
            class="tab"
            @click="switchSeniorSchoolTab(index)">
            <div class="tab-with-line">
              <div class="block text-center">
                <span class="text24">{{seniorSchoolNumberList[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>
            </div>
            <div
              :class="{splitLine: (seniorSchoolActive===2 && index===0) || (seniorSchoolActive===0 && index===1)}"
              class="no-split-line">
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in seniorObj.schoolNumber.detail"
          v-if="seniorSchoolActive === index"
          class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}</span>
          <div class="hotmap" id="seniorSchool"></div>
        </div>
      </div>
      <div class="section teacher">
        <div class="shadow tab-box-three-arrow">
          <div
            v-for="(item, index) in seniorObj.teacher.detail.slice(0,3)"
            class="tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, block: index===2}">
              <div class="block text-center">
                <span class="text24">{{seniorTeacherListUp[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>
            </div>
            <div :class="{includeArray: index===0, splitLine: index===1, block: index===2}"></div>
          </div>
        </div>
        <div class="shadow tab-box-three-arrow">
          <div
            v-for="(item, index) in seniorObj.teacher.detail.slice(3,6)"
            class="tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, block: index===2}">
              <div class="block text-center">
                <span class="text24">{{seniorTeacherListDown[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>
            </div>
            <div :class="{includeArray: index===0, splitLine: index===1, block: index===2}"></div>
          </div>
        </div>
        <div class="part chart" id="seniorTeacherUp"></div>
        <div class="part chart chart-adj" id="seniorTeacherDown"></div>
      </div>
      <div class="section student">
        <div class="shadow tab-box-three-arrow">
          <div
            v-for="(item, index) in seniorObj.students.detail.slice(0,3)"
            class="tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, block: index===2}">
              <div class="block text-center">
                <span class="text24">{{seniorStudentList[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>

            </div>
            <div :class="{includeArray: index===0, splitLine: index===1, tab: index===2}"></div>
          </div>
        </div>
        <div class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">2020年目标完成情况</span>
        </div>
        <div class="part chart-green" id="seniorStudentUp"></div>
        <div class="part chart chart-adj" id="seniorStudentDown"></div>
      </div>
      <div class="section admission">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{seniorObj.admissionRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{seniorObj.admissionRate.detail[0].value}}</span>
              <span class="text24">{{seniorObj.admissionRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="seniorAdmissionPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="seniorAdmission"></div>
      </div>
      <div class="section enrollment">
        <div class="part tab-adj">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{seniorObj.enrollmentRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{seniorObj.enrollmentRate.detail[0].value}}</span>
              <span class="text24">{{seniorObj.enrollmentRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="seniorEnrollmentPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="seniorEnrollment"></div>
      </div>
    </div>
    <!--特殊教育-->
    <div class="unit unit-special" id="6thTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[5].name}}</span>
      </div>
      <div class="section school">
        <div class="tab-box-line">
          <span class="name">
            {{specialObj.schoolNumber.detail[0].label}}</span>
          <span class="number">{{specialObj.schoolNumber.detail[0].value}}</span>
          <span class="text24">{{specialObj.schoolNumber.detail[0].unit}}</span>
        </div>
        <div class="part hotmap" id="specialSchool"></div>
      </div>
      <div class="section teacher">
        <div class="part tab-box-two-color">
          <div
            v-for="(item,index) in specialObj.teacher.detail"
            :class="{tabGreen: index===0, tabBlue: index===1}"
            class="tab"
          >
            <div class="block">
              <span class="text24 label-adj">{{item.label}}</span>
            </div>
            <div class="block">
              <span class="number50">{{item.value}}</span>
              <span class="text24">{{item.unit}}</span>
            </div>
          </div>
        </div>
        <div class="part chart" id="specialTeacher"></div>
      </div>
      <div class="section student">
        <div class="part tab-adj">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{specialObj.students.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{specialObj.students.detail[0].value}}</span>
              <span class="text24">{{specialObj.students.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="specialStudentPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="specialStudent"></div>
      </div>
      <div class="section admission">
        <div class="part tab-adj">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{specialObj.admissionRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{specialObj.admissionRate.detail[0].value}}</span>
              <span class="text24">{{specialObj.admissionRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="specialAdmissionPercentBar"></div>
          </div>
        </div>
        <div class="part chart chart-adj" id="specialAdmission"></div>
      </div>
    </div>
    <!--高等教育-->
    <div class="unit unit-high" id="7thTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[6].name}}</span>
      </div>
      <div class="section school">
        <div class="shadow tab-box-three">
          <div
            v-for="(item,index) in highObj.schoolNumber.detail"
            :class="{tabThreeActive: highSchoolActive===index}"
            class="tab"
            @click="switchHighSchoolTab(index)">
            <div class="tab-with-line">
              <div class="block text-center">
                <span class="text24">{{item.label}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>
            </div>
            <div
              :class="{splitLine: (highSchoolActive===2 && index===0) || (highSchoolActive===0 && index===1)}"
              class="no-split-line">
            </div>
          </div>
        </div>
        <div
          v-for="(item,index) in highObj.schoolNumber.detail"
          v-if="highSchoolActive === index"
          class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">{{item.label}}</span>
          <div class="hotmap" id="highSchool"></div>
        </div>
      </div>
      <div class="section teacher">
        <div class="shadow tab-box-three-arrow">
          <div
            v-for="(item, index) in highObj.teacher.detail.slice(0,3)"
            class="tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, block: index===2}">
              <div class="block text-center">
                <span class="text24">{{highTeacherListUp[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>
            </div>
            <div :class="{includeArray: index===0, splitLine: index===1, block: index===2}"></div>
          </div>
        </div>
        <div class="shadow tab-box-three-arrow">
          <div
            v-for="(item, index) in highObj.teacher.detail.slice(3,6)"
            class="tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, block: index===2}">
              <div class="block text-center">
                <span class="text24">{{highTeacherListDown[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>
            </div>
            <div :class="{includeArray: index===0, splitLine: index===1, block: index===2}"></div>
          </div>
        </div>
        <div class="part chart" id="highTeacherUp"></div>
        <div class="part chart chart-adj" id="highTeacherDown"></div>
      </div>
      <div class="section student">
        <div class="shadow tab-box-three-arrow">
          <div
            v-for="(item, index) in highObj.students.detail.slice(0,3)"
            class="tab">
            <div :class="{tabWithArray: index===0, tabWithLine: index===1, block: index===2}">
              <div class="block text-center">
                <span class="text24">{{seniorStudentList[index]}}</span>
              </div>
              <div class="block text-center">
                <span class="number44">{{item.value}}</span>
                <span class="text24">{{item.unit}}</span>
              </div>

            </div>
            <div :class="{includeArray: index===0, splitLine: index===1, tab: index===2}"></div>
          </div>
        </div>
        <div class="part">
          <span class="blue-bar">包头市</span>
          <span class="subtitle">2020年目标完成情况</span>
        </div>
        <div class="part chart-green" id="highStudentUp"></div>
        <div class="part chart chart-adj" id="highStudentDown"></div>
      </div>
      <div class="section admission">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{highObj.admissionRate.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{highObj.admissionRate.detail[0].value}}</span>
              <span class="text24">{{highObj.admissionRate.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="highAdmissionPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="highAdmission"></div>
      </div>
    </div>
    <!--人力资源开发-->
    <div class="unit unit-human" id="8thTab">
      <div class="section title">
        <span class="title-icon-bar-left"></span>
        <span class="title-icon-bar-right"></span>
        <span class="title-text">{{tabData.data[7].name}}</span>
      </div>
      <div class="section subtitle-adj">
        <span class="blue-bar">包头市</span>
        <span class="subtitle">新增劳动力</span>
      </div>
      <div class="section time">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{humanObj.newLabourTime.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{humanObj.newLabourTime.detail[0].value}}</span>
              <span class="text24">{{humanObj.newLabourTime.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="newLabourTimePercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="newLabourTime"></div>
      </div>
      <div class="section ratio">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{humanObj.newLabourRatio.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{humanObj.newLabourRatio.detail[0].value}}</span>
              <span class="text24">{{humanObj.newLabourRatio.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="newLabourRatioPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="newLabourRatio"></div>
      </div>
      <div class="section subtitle-adj">
        <span class="blue-bar">包头市</span>
        <span class="subtitle">主要劳动年龄人口</span>
      </div>
      <div class="section time">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{humanObj.mainLabourTime.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{humanObj.mainLabourTime.detail[0].value}}</span>
              <span class="text24">{{humanObj.mainLabourTime.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="mainLabourTimePercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="mainLabourTime"></div>
      </div>
      <div class="section">
        <div class="part">
          <div class="shadow tab-box-one-left">
            <div class="block text-center label-adj">
              <span class="text24">{{humanObj.mainLabourRatio.detail[0].label}}</span>
            </div>
            <div class="block text-center">
              <span class="number44">{{humanObj.mainLabourRatio.detail[0].value}}</span>
              <span class="text24">{{humanObj.mainLabourRatio.detail[0].unit}}</span>
            </div>
          </div>
          <div class="text-box-green">
            <div class="chart" id="mainLabourRatioPercentBar"></div>
          </div>
        </div>
        <div class="part chart" id="mainLabourRatio"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {remToPx} from '../../libs/util'
  import {
    drawJmHotMap,
    ecologicalLineChart,
    horizontalBar,
    barChart,
    horizontalBars,
    barStackChart,
    horizontalGreenBars,

  } from "../../charts/h5-chart"
  export default {
    name: "city-education",
    props: ['tabData'],
    data() {
      return {
        // tabData: {},
        // 整体概况
        abstractObj: {},
        abstractActive: '',
        abstractObjDetail: [],
        // 学前教育
        preschoolObj: {},
        kindergartenActive: '',
        // 小学教育
        primaryObj: {},
        primarySchoolActive: '',
        // 初中教育
        juniorObj: {},
        juniorSchoolActive: '',
        // 高中教育
        seniorObj: {},
        seniorSchoolActive: '',
        seniorSchoolNumberList: ['高中学校数','普通高中','中等职业教育学校'],
        seniorTeacherListUp: ['高中教职工人数','普通高中','中等职业教育学校'],
        seniorTeacherListDown: ['高中专任教师数','普通高中','中等职业教育学校'],
        seniorStudentList: ['高中在校生数','普通高中','中等职业教育学校'],
        // 特殊教育
        specialObj: {},
        // 高等教育
        highObj: {},
        highSchoolActive: '',
        highTeacherListUp: ['高等院校教职工人数','普通高校','成人高校'],
        highTeacherListDown: ['高等院校专任教师数','普通高校','成人高校'],
        // 人力资源开发
        humanObj: {},



      }
    },
    watch: {
      'tabData.data': function (newValue, oldValue) {
        this.initWin();
      }
    },
    methods: {
      initWin() {
        // 整体概况
        this.abstractObj = this.tabData.data[0].data.education;
        this.abstractObjDetail = this.abstractObj.detail.slice(0,3);
        // 学前教育
        this.preschoolObj = this.tabData.data[1].data;
        this.preschoolObj.teacher.chart.gridContainLabel = true;
        this.preschoolObj.teacher.chart.legendItemGap = remToPx(24/75);
        this.preschoolObj.teacher.chart.legendShow = true;
        this.preschoolObj.students.chart.gridContainLabel = true;
        this.preschoolObj.admissionRate.chart.gridContainLabel = true;
        this.preschoolObj.admissionRate.chart.gridTop = '15%';
        // 小学教育
        this.primaryObj = this.tabData.data[2].data;
        this.primaryObj.teacher.chart.gridContainLabel = true;
        this.primaryObj.teacher.chart.legendItemGap = remToPx(24/75);
        this.primaryObj.teacher.chart.legendShow = true;
        this.primaryObj.students.chart.gridContainLabel = true;
        // 初中教育
        this.juniorObj = this.tabData.data[3].data;
        this.juniorObj.teacher.chart.gridContainLabel = true;
        this.juniorObj.teacher.chart.legendItemGap = remToPx(24/75);
        this.juniorObj.teacher.chart.legendShow = true;
        this.juniorObj.students.chart.gridContainLabel = true;
        this.juniorObj.EnrollmentRate.chart.colorList = ['#f99b37', '#ffbc51'];
        // 高中教育
        this.seniorObj = this.tabData.data[4].data;
        this.seniorObj.enrollmentRate.chart.colorList = ['#f99b37', '#ffbc51'];
        // 特殊教育
        this.specialObj = this.tabData.data[5].data;
        this.specialObj.teacher.chart[0].gridContainLabel = true;
        this.specialObj.teacher.chart[0].legendShow = true;
        this.specialObj.teacher.chart[0].series[1].name = '专任教师数';
        this.specialObj.students.chart.gridContainLabel = true;
        this.specialObj.admissionRate.detail[0].label = this.specialObj.admissionRate.detail[0].label.replace('义务','\n义务');
        // 高等教育
        this.highObj = this.tabData.data[6].data;
        this.highObj.admissionRate.chart.gridContainLabel = true;
        this.highObj.admissionRate.chart.gridTop = '15%';
        // 人力资源开发
        this.humanObj = this.tabData.data[7].data;
        this.humanObj.newLabourTime.detail[0].label = this.humanObj.newLabourTime.detail[0].label.replace('及以上','\n及以上');
        this.humanObj.newLabourRatio.chart.colorList = ['rgb(57, 199, 127)'];
        this.humanObj.newLabourRatio.chart.colorStop = ['rgba(57, 199, 127, 0.2)', 'rgba(57, 199, 127, 0)'];
        this.humanObj.mainLabourRatio.chart.colorList = ['rgb(57, 199, 127)'];
        this.humanObj.mainLabourRatio.chart.colorStop = ['rgba(57, 199, 127, 0.2)', 'rgba(57, 199, 127, 0)'];
        this.$nextTick(() => {
          // 整体概况
          this.switchAbstractTab(0);
          // 学前教育
          this.switchKindergartenTab(0);
          ecologicalLineChart('kindergartenTeacher', this.preschoolObj.teacher.chart);
          horizontalBar('kindergartenChildrenPercentBar',this.preschoolObj.students.detail[1]);
          ecologicalLineChart('kindergartenChildren', this.preschoolObj.students.chart);
          horizontalBar('kindergartenAdmissionPercentBar',this.preschoolObj.admissionRate.detail[1]);
          barChart('kindergartenAdmission', this.preschoolObj.admissionRate.chart);
          // 小学教育
          this.switchPrimarySchoolTab(0);
          ecologicalLineChart('primaryTeacher', this.primaryObj.teacher.chart);
          horizontalBar('primaryStudentPercentBar',this.primaryObj.students.detail[1]);
          ecologicalLineChart('primaryStudent', this.primaryObj.students.chart);
          horizontalBar('primaryAdmissionPercentBar',this.primaryObj.admissionRate.detail[1]);
          horizontalBars('primaryAdmission', this.primaryObj.admissionRate.chart);
          // 初中教育
          this.switchJuniorSchoolTab(0);
          ecologicalLineChart('juniorTeacher', this.juniorObj.teacher.chart);
          horizontalBar('juniorStudentPercentBar',this.juniorObj.students.detail[1]);
          ecologicalLineChart('juniorStudent', this.juniorObj.students.chart);
          horizontalBar('juniorAdmissionPercentBar',this.juniorObj.admissionRate.detail[1]);
          horizontalBars('juniorAdmission', this.juniorObj.admissionRate.chart);
          horizontalBar('juniorEnrollmentPercentBar',this.juniorObj.EnrollmentRate.detail[1]);
          horizontalBars('juniorEnrollment', this.juniorObj.EnrollmentRate.chart);
          // 高中教育
          this.switchSeniorSchoolTab(0);
          barStackChart('seniorTeacherUp', this.seniorObj.teacher.chart[0]);
          barStackChart('seniorTeacherDown', this.seniorObj.teacher.chart[1]);
          horizontalGreenBars('seniorStudentUp',this.seniorObj.students.detail.slice(3,5));
          barStackChart('seniorStudentDown', this.seniorObj.students.chart);
          horizontalBar('seniorAdmissionPercentBar',this.seniorObj.admissionRate.detail[1]);
          horizontalBars('seniorAdmission', this.seniorObj.admissionRate.chart);
          horizontalBar('seniorEnrollmentPercentBar',this.seniorObj.enrollmentRate.detail[1]);
          horizontalBars('seniorEnrollment', this.seniorObj.enrollmentRate.chart);
          // 特殊教育
          drawJmHotMap('specialSchool',this.specialObj.schoolNumber.chart[0])
          ecologicalLineChart('specialTeacher', this.specialObj.teacher.chart[0]);
          horizontalBar('specialStudentPercentBar',this.specialObj.students.detail[1]);
          ecologicalLineChart('specialStudent', this.specialObj.students.chart);
          horizontalBar('specialAdmissionPercentBar',this.specialObj.admissionRate.detail[1]);
          barChart('specialAdmission', this.specialObj.admissionRate.chart);
          // 高等教育
          this.switchHighSchoolTab(0);
          barStackChart('highTeacherUp', this.highObj.teacher.chart[0]);
          barStackChart('highTeacherDown', this.highObj.teacher.chart[1]);
          horizontalGreenBars('highStudentUp',this.highObj.students.detail.slice(3,5));
          barStackChart('highStudentDown', this.highObj.students.chart);
          horizontalBar('highAdmissionPercentBar',this.highObj.admissionRate.detail[1]);
          barChart('highAdmission', this.highObj.admissionRate.chart);
          // 人力资源开发
          horizontalBar('newLabourTimePercentBar',this.humanObj.newLabourTime.detail[1]);
          ecologicalLineChart('newLabourTime', this.humanObj.newLabourTime.chart);
          horizontalBar('newLabourRatioPercentBar',this.humanObj.newLabourRatio.detail[1]);
          ecologicalLineChart('newLabourRatio', this.humanObj.newLabourRatio.chart);
          horizontalBar('mainLabourTimePercentBar',this.humanObj.mainLabourTime.detail[1]);
          ecologicalLineChart('mainLabourTime', this.humanObj.mainLabourTime.chart);
          horizontalBar('mainLabourRatioPercentBar',this.humanObj.mainLabourRatio.detail[1]);
          ecologicalLineChart('mainLabourRatio', this.humanObj.mainLabourRatio.chart);


        })
      },
      // 整体概况
      switchAbstractTab(index) {
        this.abstractActive = index;
        this.$nextTick(() => {
          drawJmHotMap('abstract', this.abstractObj.chart[index])
        });
      },
      // 学前教育
      switchKindergartenTab(index) {
        this.kindergartenActive = index;
        this.$nextTick(() => {
          drawJmHotMap('kindergarten', this.preschoolObj.schoolNumber.chart[index])
        });
      },
      // 小学教育
      switchPrimarySchoolTab(index) {
        this.primarySchoolActive = index;
        this.$nextTick(() => {
          drawJmHotMap('primarySchool', this.primaryObj.schoolNumber.chart[index])
        });
      },
      // 初中教育
      switchJuniorSchoolTab(index) {
        this.juniorSchoolActive = index;
        this.$nextTick(() => {
          drawJmHotMap('juniorSchool', this.juniorObj.schoolNumber.chart[index])
        });
      },
      // 高中教育
      switchSeniorSchoolTab(index) {
        this.seniorSchoolActive = index;
        this.$nextTick(() => {
          drawJmHotMap('seniorSchool', this.seniorObj.schoolNumber.chart[index])
        });
      },
      // 高中教育
      switchHighSchoolTab(index) {
        this.highSchoolActive = index;
        this.$nextTick(() => {
          drawJmHotMap('highSchool', this.highObj.schoolNumber.chart[index])
        });
      }
    }
  }
</script>

