// components/nf-components/nf-table/nf-table.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    rooms:{
        type:Array,
        value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(e){
        const id = e.currentTarget.dataset.id;
        console.log(id);
        this.triggerEvent('roomclick',{id:id});
    },
    statusStr(status){
      if(status===0){
        return '空闲'
      }else if(status===1){
        return '已预订'
      }else{
        return '已入住'
      }
    }
  }
})