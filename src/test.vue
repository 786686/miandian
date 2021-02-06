import Goods from "@/api/goods"; export default { name: "changecity", data() {
return { list:[], current: "", pageNo: 1, }; }, computed: { }, created() {
this.getList() }, methods: { async getList(){ let params = { pageNo:
this.pageNo, pageNum: 10 } let {code,data} = await Goods.cityList(params);
if(code == 200){ this.list = data; } } }, mounted() {} }; v-for="(item,index) in
list" :key="index"
