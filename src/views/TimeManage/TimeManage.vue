<template>
  <div>
    <div class="time-manage">
         <!-- 标题 -->
         <div class="item-title">
             <div class="item-arrow" 
             @click="changeMonth('pre')"
             > ❮ </div>
             <div class="year-month">
                 <span>{{currentYear}}年{{currentMonth}}月</span>
             </div>
             <div class="item-arrow"
              @click="changeMonth('next')"
              > ❯ </div>
         </div>
         <!-- 星期行 -->
         <ul class="weekdays">
             <li v-for='(val,key) in weeks' :key="key">
             <span :style='chooseStyle(key)'>
                 {{val}}
             </span>
             </li>
 
         </ul>
         <!-- 日期 -->
         <ul class="days">
             <li v-for='(val,key) in days' :key="key" :class='chooseClass(val.day)'>
                 <div 
                 class="item-num"
                 >{{val.day.getDate()}}</div>
                 <div class="item-dec">
                   班
                   <!-- 休 -->
                  </div>
             </li>
         </ul>
     </div>
    <div class="btns">
      <div class="btn">保存</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "timemanage",
  data() {
    return {
      currentDay: 1,
     currentMonth: 1,
     currentYear: 1970,
     currentWeek: 1,
     weeks: ["日","一", "二", "三", "四", "五", "六"],
     days: []
    };
  },
  computed: {
  },
  created() {
    this.init();
  },
  methods: {
    init(data) {
       let day;
 
       if (data) {
         day = new Date(data);
       } else {
         let now = new Date();
         day = new Date(this.formDate(now.getFullYear(), now.getMonth() + 1, 1));
       }
 
       this.currentDay = day.getDate();
       this.currentYear = day.getFullYear();
       this.currentMonth = day.getMonth() + 1;
 
       this.currentWeek = day.getDay();
 
       if (!this.currentWeek) {
         this.currentWeek = 7;
       }
 
       this.days.length = 0;
       let str = this.formDate(
         this.currentYear,
         this.currentMonth,
         this.currentDay
       );
 
       for (let i = 2 - this.currentWeek ; i < 37 - this.currentWeek; i++) {
         let d = new Date(str);
         d.setDate(i);
         this.days.push({
           day: d
         });
       }
 
       // //获取上月末至本月第一天的日期
       //   for (let i = this.currentWeek - 1; i >= 0; i--) {
       //     let d = new Date(str);
       //     d.setDate(d.getDate() - i);
       //     this.days.push({
       //       day: d
       //     });
       //   }
 
       // //获取剩余的日期
       //   for (let i = 1; i <= 35 - this.currentWeek; i++) {
       //     let d = new Date(str);
       //     d.setDate(d.getDate() + i);
       //     this.days.push({
       //       day: d
       //     });
       //   }
     },
 
     //其他月加class名'other'，今天加class名'active'
     chooseClass(day) {
       if (day.getMonth() + 1 != this.currentMonth) return "other";
 
       let a = new Date() - day;
       if (a > 0 && a < 86400000) return "active";
     },
     //改变周六日显示颜色
     chooseStyle(key) {
       if (key === 0 || key === 6) return "color:#F55A52";
     },
     //切换月份
     changeMonth(a) {
       let d = new Date(this.formDate(this.currentYear, this.currentMonth, 1));
 
       // setDate(0); 上月最后一天
       // setDate(-1); 上月倒数第二天
       // setDate(n) 参数n为 上月最后一天的前后n天
       a === "pre" ? d.setDate(0) : d.setDate(35);
 
       this.init(this.formDate(d.getFullYear(), d.getMonth() + 1, 1));
     },
     //返回字符串个格式的日期
     formDate(year, month, day) {
       return year + "-" + month + "-" + day;
     }
   },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
 
 .time-manage{
    padding-top: 12px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px 0px rgba(217, 217, 217, 0.35);
    margin-bottom: 50px;
    .item-title {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      font-weight: bold;   
      font-size: 17px;
      color: #333333;
      line-height: 24px;
      .item-arrow {
        width: 30px;
        height: 30px;
        border: 1px solid #ECECEC;
        border-radius: 50%;
        text-align: center;
        line-height: 28px;
        font-size: 15px;
        color: #D627FA;
        font-weight: normal;
      }
    }
    .year-month {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    
    .weekdays {
      margin: 0;
      padding: 18px 0 22px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        display: inline-block;
        width: 13.6%;
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
      }
    }
    
    .days {
      padding: 0;
      background: #ffffff;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        &.other {
          visibility: hidden;
        }
        &.active .item-num{
          background: #D627FA;
          border-radius: 50%;
          color: #fff;
          width: 22px;
          height: 22px;
        }
        &:hover {
          background: #e1e1e1;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 14.2%;
        text-align: center;
        margin-bottom: 5px;
        .item-num{
          font-size: 14px;
          color: #333333;
          line-height: 22px;
        }
        .item-dec{
          font-size: 12px;
          color: #F53838;
          line-height: 17px;
        }
      }
    }
  }
</style>
