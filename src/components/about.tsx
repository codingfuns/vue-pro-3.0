import {ref, defineComponent,reactive, onMounted} from 'vue'
export default defineComponent({
  setup(){
    const count = ref(0)
    const increase = () => { count.value++ }
    onMounted(()=>{
      
    })
    return ()=>(
      <>
        <button onClick = {increase}>add</button>
        <span> {count.value} </span>
      </>
    )
  }
})