<template>
    <div class="dynamic">
      <!--头部-->
      <Myheader>
          <h5 class="dynamic_tit">联系人</h5>
          <a href="##" class="dynamic_right">添加</a>
      </Myheader>
      <Search :searchText="searchText"></Search>
      <Function class="magB_58" :arr="Fnarr"></Function>
      <DynamicList class="magB_58" :arr="DynamicArr"></DynamicList>
      <DynamicList :arr="DynamicArr2"></DynamicList>
    </div>
</template>
<script>
  import Myheader from '../../components/Header/Header.vue'
  import Search from '../../components/Search/Search.vue'
  import Function from '../../components/Function/Function.vue'
  import DynamicList from './DynamicList.vue'
  export default{
      components:{
          Myheader,
          Search,
          Function,
          DynamicList
      },
      data:function () {
          return{
            searchText:'搜索',
            Fnarr:[
              {url:require('../../assets/images/function_03.jpg'),des:'好朋友'},
              {url:require('../../assets/images/function_05.jpg'),des:'群聊'},
              {url:require('../../assets/images/function_07.jpg'),des:'公众号'},
            ],
            DynamicArr:[
              {
                  name:"特别关心",
                  num:1,
                  num2:1,
                  bol:false,
                  userArr:[
                    {
                      avatar:require('../../assets/images/user_avatar_03.jpg'),
                      name:'昂酱',
                      des:"[iPhone在线]",
                      des2:"上传5张照片",
                    }
                  ],
              },
              {
                name:"常用群聊",
                num:3,
                num2:3,
                bol:false,
                userArr:[
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  }
                ],
              }
            ],
            DynamicArr2:[
              {
                name:"我的好友",
                num:6,
                num2:6,
                bol:false,
                userArr:[
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  }
                ],
              },
              {
                name:"我的同学",
                num:6,
                num2:6,
                bol:false,
                userArr:[
                  {
                    avatar:require('../../assets/images/user_avatar_06.jpg'),
                    name:'成都校友鄢培园',
                    des:"[手机在线]",
                    des2:"更新了相册",
                  },
                  {
                    avatar:require('../../assets/images/tel_avatar_13.jpg'),
                    name:'同学 汤波',
                    des:"[iPhone在线]",
                    des2:"更新了相册",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_08.jpg'),
                    name:'CC',
                    des:"[4G在线]",
                    des2:"毕业了 瓜皮",
                  },
                  {
                    avatar:require('../../assets/images/tel_avatar_15.jpg'),
                    name:'VV酱',
                    des:"[iPhone在线]",
                    des2:"更新了说说",
                  },
                  {
                    avatar:require('../../assets/images/tel_avatar_10.jpg'),
                    name:'双风亚索',
                    des:"[iPhone在线]",
                    des2:"更新了说说",
                  },
                ]
              },
              {
                name:"我的家人",
                num:3,
                num2:3,
                bol:false,
                userArr:[
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  }
                ],
              },
              {
                name:"我的朋友",
                num:3,
                num2:3,
                bol:false,
                userArr:[
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  },
                  {
                    avatar:require('../../assets/images/user_avatar_03.jpg'),
                    name:'昂酱',
                    des:"[iPhone在线]",
                    des2:"上传5张照片",
                  }
                ],
              },
            ]
          }
      },
      methods:{
      }
  }
</script>
<style>
  .dynamic{background-color: #f7f7f8;}
  .dynamic_tit{font-size: 0.52rem;color: #fff;letter-spacing: 0.05rem;padding-top: 0.15rem;}
  .dynamic_right{font-size: 0.5rem;color: #fff;padding-top: 0.2rem;}
  .magB_58{margin-bottom: 0.58rem;}
</style>
