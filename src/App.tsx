

import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'


export default defineComponent({
  setup(){
    return ()=>(
      <>
        <a-input>123</a-input>
      <RouterView />
      </>
    )
  }
})