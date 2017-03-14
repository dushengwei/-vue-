import Vue from 'vue'
import Router from 'vue-router'


import story from '@/components/storyComponent/Whole'

import musicIndex from '@/components/music/index'
import newMusic from '@/components/music/newMusic'
import rankList from '@/components/music/rankList'
import rankInfo from '@/components/music/rankInfo'
import plist from '@/components/music/plist'
import plistInfo from '@/components/music/plistInfo'
import singer from '@/components/music/singer'
import singerList from '@/components/music/singerList'
import singerInfo from '@/components/music/singerInfo'
import search from '@/components/music/search'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/story',
    name: 'story',
    component: story
  },
  {
      path: '/musicIndex/newMusic',
      name: 'newMusic',
      component: newMusic
    },{
      path: '/musicIndex/rankList',
      name: 'rankList',
      component: rankList
    },{
      path: '/musicIndex/rank/info/:post_id',
      name: 'rankInfo',
      component: rankInfo
    },{
      path: '/musicIndex/plist',
      name: 'plist',
      component: plist
    },{
      path: '/musicIndex/plist/info/:post_id',
      name: 'plistInfo',
      component: plistInfo
    },{
      path: '/musicIndex/singer',
      name: 'singer',
      component: singer
    },{
      path: '/musicIndex/singer/list/:post_id',
      name: 'singerList',
      component: singerList
    },{
      path: '/musicIndex/singer/info/:post_id',
      name: 'singerInfo',
      component: singerInfo
    },{
      path: '/musicIndex/search',
      name: 'search',
      component: search
    }]
  });
