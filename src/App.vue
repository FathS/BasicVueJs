<template>
  <div>
    <Header />
    
    <!-- Transiton Name kaldırırsak slide geçişli olmaz! -->
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
export default {
  data() {
    return {
      tokenTime: 10,
      token: this.$store.getters.isLoggedIn
    };
  },
  components: {
    Header
  },
  methods: {
    tokenExpire() {
      if (this.token != null) {
        if (this.tokenTime > 0) {
          setTimeout(() => {
            this.tokenTime -= 1;
            this.tokenExpire();
          }, 1000);
        } else {
          window.alert(
            "Oturum süreniz bitmiştir. Lütfen Tekrar Giriş Yapınız."
          );
          this.logout();
        }
      }
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  // created() {
  //   this.tokenExpire();
  // },
  computed: {
    // token() {
    //   return this.$store.getters.isLoggedIn;
    // }
  }
};
</script>

<style>

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
  opacity: 1;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateX(-700px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-700px);
  }
}
</style>
