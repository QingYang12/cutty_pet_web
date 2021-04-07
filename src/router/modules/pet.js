/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/pet',
  component: Layout,
  redirect: '/table/pet',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    
    {
      path: 'user',
      component: () => import('@/views/pet/user'),
      name: 'user',
      meta: { title: 'user' }
    }
  ]
}
export default tableRouter
