
import { Provider } from "react-redux"
import Routs from "./routs.js"
import store from "./store.js"

export default function App() {


  return (
    <Provider store={store}>
      <Routs />
    </Provider>

  )

}

