<template>
    <div class="sticky-top">
      <nav
        class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row"
        style="margin-bottom: 2rem"
      >
        <div class="container">
          <router-link to="/" class="navbar-brand float-left"
            >Vuex Course</router-link
          >
          <ul class="nav navbar-nav d-flex flex-row bd-highlight">
            <li class="nav-item me-5">
              <router-link
                data-testid="nav-heroes"
                to="/heroes"
                exact
                class="nav-link"
                >{{
                  heroes.length > 0 ? `(${heroes.length})` : ""
                }}
                Heroes</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                data-testid="nav-anti-heroes"
                to="/anti-heroes"
                exact
                class="nav-link"
                >{{
                  antiHeroes.length > 0 ? `(${antiHeroes.length})` : ""
                }}
                Anti-Heroes</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { mapGetters } from "vuex";
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "NavBar",
    computed: {
      ...mapGetters("heroModule", {
        heroes: "heroes",
      }),
      ...mapGetters("antiHeroModule", {
        antiHeroes: "antiHeroes",
      }),
    },
  });
  </script>
  
  <style scoped></style>
  