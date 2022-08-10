import Layout from '@/layout/index.vue';
import NotFound from '@/layout/404.vue';
import Login from '@/views/login/index.vue';

export const initRoutes = () => {
  return [
    {
      path: '/',
      redirect: '/login',
      hideInMenu: true
    },
    {
      path: '/login',
      name: 'sys.login',
      hideInMenu: true,
      component: Login,
      meta: {
        title: 'sys.login'
      }
    },
    {
      path: '/level_1',
      name: 'level_1',
      component: Layout,
      redirect: '/level_1/level_1_content',
      meta: {
        title: 'level-1'
      },
      children: [
        {
          path: 'level_1_content',
          name: '',
          component: () => import('@/views/level-1/level-1.vue'),
          hideInMenu: true,
          meta: {
            title: 'level-1'
          },
        }
      ]
    },
    {
      path: '/level_2',
      name: 'level_2',
      component: Layout,
      redirect: '/level_2/level_2_1',
      meta: {
        title: 'level-2'
      },
      children: [
        {
          path: 'level_2_1',
          name: 'level_2_1',
          component: () => import('@/views/level-2/level-2-1/index.vue'),
          meta: {
            title: 'level-2-1'
          },
        },
        {
          path: 'level_2_2',
          name: 'level_2_2',
          component: () => import('@/views/level-2/level-2-2/index.vue'),
          meta: {
            title: 'level-2-2'
          },
        }
      ]
    },
    // {
    //   path: '/bs_config',
    //   name: 'business.config',
    //   component: Layout,
    //   meta: {
    //     title: 'business.config'
    //   },
    //   redirect: '/bs_config/list',
    //   children: [
    //     {
    //       path: 'list',
    //       name: 'business.list',
    //       component: () => import('@/views/business-config/index.vue'),
    //       meta: {
    //         title: 'business.config'
    //       }
    //     },
    //     {
    //       path: 'detail/:id',
    //       name: 'business.detail',
    //       hideInMenu: true,
    //       component: () => import('@/views/business-config/detail.vue'),
    //       meta: {
    //         title: 'business.detail'
    //       }
    //     },
    //     {
    //       path: 'draft/:id',
    //       name: 'business.draft',
    //       hideInMenu: true,
    //       component: () => import('@/views/business-config/draft.vue'),
    //       meta: {
    //         title: 'business.draft'
    //       }
    //     }
    //   ]
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      hideInMenu: true
    }
  ];
};
