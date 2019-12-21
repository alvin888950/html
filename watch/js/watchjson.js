//手表
var list = [{
	id: 1,
	img: "img/dw/1.png",
	name: "",
	pid:1,
	gender:1,
}];


//品牌类型
var watchtype = [{
	id: 1,
	img: "img/dw/logo.jpg",
	name: "dw",
	mancount:55,
	womancount:122,
} , {
	id:2,
	img: "img/rolex/logo.png",
	name: "rolex",
	mancount:6,
	womancount:5,
},  {
	id:3,
	img: "img/longines/logo.jpg",
	name: "longines",
	mancount:5,
	womancount:2,
},{
	id: 4,
	img: "img/armani/logo.png",
	name: "armani",
	mancount:23,
	womancount:7,
}, {
	id: 5,
	img: "img/casio/logo.png",
	name: "casio",
	mancount:3,
	womancount:0,
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
	for(var i=1;i<=producttype.mancount;i++){
		data.push({id: i,img: "img/"+producttype.name+"/"+i+".png",name: "",pid:pid,gender:1,});
	}
	//女表
	for(var i=1;i<=producttype.womancount;i++){
		data.push({id: i,img: "img/"+producttype.name+"/0-"+i+".png",name: "",pid:pid,gender:0,});
	}
	return data;
}

