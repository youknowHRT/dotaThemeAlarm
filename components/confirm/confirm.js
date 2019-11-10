Component({
  properties:{
    placeholder:{
      type:String,
      value:""
    },
    visible:{
      type:Boolean,
      value:false
    },
    value:{
      type:String,
      value:""
    },
    backText:{
      type:String,
      value:""
    }
  },
  data:{
    _value:""
  },
  lifetimes: {
    attached: function () {
      if (this.properties.value){
        this.properties.value = this.data._value
      }
    }
  },
  methods:{
    confirm(){
      this.triggerEvent('confirm',this.data._value)
      
    },
    cancel(){
      this.triggerEvent('cancel','取消')
      console.log(1)
    },
    watchValue(event){
      this.data._value=event.detail.value
    }
  }
})