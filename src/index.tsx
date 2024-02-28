import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./shard/router"

import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
)
