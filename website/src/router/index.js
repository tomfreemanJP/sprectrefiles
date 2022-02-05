import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
//import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
    //component: BlogHome
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/podcast",
    name: "Podcast",
    component: () =>
      import(/* webpackChunkName: "podcast" */ "../views/Podcast.vue"),
  },
  {
    path: "/todo",
    name: "TODO",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Todo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;