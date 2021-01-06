<template>
  <div class="container">
    <div class="left"></div>
    <div class="login">
      <div class="login-box">
        <a-card :bordered="false">
          <a-form :wrapper-col="{ span: 24 }">
            <a-form-item v-bind="validateInfos.name">
              <a-input v-model:value="modelRef.name" placeholder="用户名">
                <template #prefix
                  ><UserOutlined style="color:rgba(0,0,0,.25)"
                /></template>
              </a-input>
            </a-form-item>
            <a-form-item v-bind="validateInfos.password">
              <a-input
                v-model:value="modelRef.password"
                type="password"
                placeholder="密码"
              >
                <template #prefix
                  ><LockOutlined style="color:rgba(0,0,0,.25)"
                /></template>
              </a-input>
            </a-form-item>
            <a-space>
              <a-button type="primary" @click="onSubmit">
                登录
              </a-button>
              <a-button @click="onRegister">
                注册
              </a-button>
            </a-space>
          </a-form>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, reactive, toRaw } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useForm } from '@ant-design-vue/use';
export default {
  components: { UserOutlined, LockOutlined },
  setup() {
    localStorage.clear();
    const { ctx } = getCurrentInstance();
    const { dispatch } = useStore();
    const { replace, currentRoute } = useRouter();
    const modelRef = reactive({
      name: '',
      password: '',
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: '请输入用户名',
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
        },
      ],
    });
    const { validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = (e) => {
      e.preventDefault();
      validate()
        .then(() => {
          const { name, password } = toRaw(modelRef);
          dispatch('user/login', { name, password, verifycode: '' })
            .then(() => {
              const { redirectedFrom } = currentRoute.value;
              if (
                redirectedFrom &&
                redirectedFrom.matched &&
                redirectedFrom.matched.length > 0 &&
                redirectedFrom.matched[0].path !== '/login'
              ) {
                replace({ path: redirectedFrom.matched[0].path });
              } else {
                replace({ path: '/home' });
              }
            })
            .catch((err) => {
              ctx.$message.error(err);
            });
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    const onRegister = () => {
      ctx.$message.info('onRegister');
    };
    return {
      modelRef,
      validateInfos,
      onSubmit,
      onRegister,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  .left {
    flex: 1;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    // background-color: #dfd7d7;
    background-image: url('http://img.yameet.cn/foocloud/3225234365.jpg');
    background-size: cover;
    .login-box {
      width: 400px;
    }
  }
}
.btn-box {
  display: flex;
}
</style>
