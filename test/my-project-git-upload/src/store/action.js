
//初始化文本列表 必须对状态进行初始化
export const init=({}) => {

}

//创建临时文本
export const createNote=(context) => {	
	context.commit('CREATE_NOTE');
}

//保存文本,持久化到数据库
export const saveNote=({}) => {
	//持久化到数据库 再次初始化状态
}


//修改文本的标题
export const updateTitle=(context,id,title)=> {
  context.commit('UPDATE_TITLE',{id,title});
}

//修改活跃的元素id
export const updateActiveEle=(context,id)=> {
 context.commit('updateActiveEle',id);
}

//删除元素
export const deleteNote=(context,id)=>{
 context.commit('deleteNote',id);
}


//--------------Music
import axios from 'axios'

export const toggleMusic=(context,hash)=>{
    axios.post(`http://cs003.m2828.com/apis/getKugouSong.php?hash=${hash}`).then(function(res){
     var data=res.data;
     var obj={};

      obj.imgUrl=data.imgUrl.replace("/{size}","");
      obj.fileName=data.fileName;
      obj.choricSinger=data.choricSinger;
      obj.url=data.url;
      obj.singerId=data.singerId;
      obj.timeLength=data.timeLength;   
      obj.toggle=true;
      console.info(obj.imgUrl);

      context.commit('toggleMusic',obj);
    }).catch(function(){
    	console.info('歌曲请求错误');
    });
}

