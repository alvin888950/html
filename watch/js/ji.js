//手表
var list = [{
	id: 1,
	img: "img/dw/1.png",
	name: "",
	pid:1,
}];


//品牌类型
var watchtype = [{
	id: 1,
	name: "三黄鸡",
	count:10,
} , {
	id: 2,
	name: "放养鸡",
	count:10,
}, ]



/**
 * 获取手表
 * @param {Object} pid
 * @param {Object} type
 * @param {Object} file
 * @param {Object} mancount
 * @param {Object} womencount
 */
function getList(pid){
	//通过编号获取手表类型信息
	var producttype={};
	$.each(watchtype,function(index,item){
		if(item.id==pid){
			producttype=item;
			return false;
		}
	});
	
	var data=[]
	//男表
	for(var i=1;i<=producttype.count;i++){
		data.push({id: i,img: "img/"+producttype.name+"/"+i+".png",name: "",pid:pid,gender:1,});
	}
	return data;
}

