/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/pet',
  component: Layout,
  redirect: '/table/pet',
  name: 'Table',
  meta: {
    title: 'pet',
    icon: 'table'
  },
  children: [
    
    {
      path: 'user',
      component: () => import('@/views/pet/user'),
      name: 'user',
      meta: { title: '员工管理' }
    },
    {
      path: 'customer',
      component: () => import('@/views/pet/customer'),
      name: 'customer',
      meta: { title: '顾客管理' }
    },
    {
      path: 'dic',
      component: () => import('@/views/pet/dic'),
      name: 'dic',
      meta: { title: '宠物字典管理' }
    },
    {
      path: 'succour_record_history',
      component: () => import('@/views/pet/succour_record_history'),
      name: 'succour_record_history',
      meta: { title: '站点救助宠物管理' }
    },
    {
      path: 'adopt_record_history',
      component: () => import('@/views/pet/adopt_record_history'),
      name: 'adopt_record_history',
      meta: { title: '客户收养宠物管理' }
    },
    {
      path: 'pet_index',
      component: () => import('@/views/pet/pet_index'),
      name: 'pet_index',
      meta: { title: '主页' }
    },
    {
      path: 'detail',
      component: () => import('@/views/pet/detail'),
      name: 'detail',
      meta: { title: '宠物详情页' }
    },
    {
      path: 'personal',
      component: () => import('@/views/pet/personal'),
      name: 'personal',
      meta: { title: '个人中心' }
    }
  ]
}
export default tableRouter
