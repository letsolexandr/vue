<template>
  <v-app id="inspire">
   <Navigation/>
    <ToolBar/>
    <template>
  <div>
    <v-breadcrumbs :items="$store.state.menu.items">
      <template v-slot:item="props">
        <a :href="props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text.toUpperCase() }}</a>
      </template>
    </v-breadcrumbs>
  </div>
</template>
    <v-content>
      <v-container fluid>
      <transition name="component-fade" mode="out-in">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
      </transition>
    </v-container>
    </v-content>

    <Dialog/>
  </v-app>
</template>

<script>
import Navigation from './layouts/Navigation';
import ToolBar from './layouts/ToolBar';
import Dialog from './components/Dialog';
  export default {
    components:{
      Dialog,
      Navigation,
      ToolBar
    },

    props: {
      source: String
    }
  }
</script>

<style type="text/css">
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
