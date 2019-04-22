import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Contacts from '@/pages/contacts'
import Products from '@/pages/products'
import Movie from '@/pages/movie'

Vue.use(Router)

export default new Router({
  mode: "history",
  // linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout
    },
    {
      path: "/company",
      name: "company",
      component: Products,
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/movie",
      name: "movie",
      component: Movie
    }
  ]
});
