// components/nf-components/nf-model/nf-model.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
        type:Boolean,
        value:false
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
    click(){
        this.setData({isShow:false})
    }
  }
})