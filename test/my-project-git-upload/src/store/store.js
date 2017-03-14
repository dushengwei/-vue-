import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

//状态库的存在是为了组件间同步数据而存在的

const state={
	notes:[],
  currentActiveNoteId:-1,
  currentActiveObj:{},
  getSong:{
    img:'/static/logo_kugou.png',
    title:'',
    author:'',
    url:'',
    singerId:0,
    timeLength:0,
    toggle:true 
  }
}

const getters={
   currentActiveNoteId:0
}

const mutations={
   CREATE_NOTE (state){
    console.info(state);
      var len=state.notes.length;
      var note={id:len,title:'新文档',content:'                     开始写作'};
	    state.notes.push(note);
      state.currentActiveNoteId=len;
      state.currentActiveObj=note;
	},
  UPDATE_TITLE(state,{id,title}){
  //console.info(id);
  //console.info(title);
  state.notes[id].title=title;
  },
  updateActiveEle(state,id){
  state.currentActiveNoteId=id;
  console.info(id);
  console.info(state.notes[id].title);
  state.currentActiveObj=state.notes[id];
  },
  deleteNote(state){
   var id=state.currentActiveNoteId;
   var notes=state.notes;
   var len=notes.length;
   console.info(id);
   if(len==1){
    notes.pop();
    state.currentActiveNoteId=-1;
     state.currentActiveObj=null;
     return;
   }else if(len>1){
   //console.info(len);
    var notes1=[];
    for(var key in notes){
        if(key==id){
         continue;
        }
        notes1.push(notes[key]);
  }
     state.notes=notes1;
     state.currentActiveNoteId=notes1[0].id;
     state.currentActiveObj=notes1[0];
     }
  },//音乐
  toggleMusic(state,obj){
      state.getSong.img=obj.imgUrl;
      state.getSong.title=obj.fileName;
      state.getSong.author=obj.choricSinger;
      state.getSong.url=obj.url;  
      state.getSong.singerId=obj.singerId;
      state.getSong.timeLength=obj.timeLength;
      state.getSong.toggle=obj.toggle;
  }

}

export default new Vuex.Store({
	state,
	mutations,
  getters
});