<!-- src/components/FloatingNav.vue -->
<template>
  <nav class="floating-nav">
    <a 
      v-for="(item, index) in navItems" 
      :key="index"
      :href="item.href"
      @click.prevent="scrollTo(item.href)"
      :class="{ active: activeSection === item.href }"
    >
      <v-icon small>{{ item.icon }}</v-icon>
      <span class="tooltip">{{ item.text }}</span>
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeSection: '#home',
      navItems: [
        { href: '#home', text: 'Home', icon: 'mdi-home' },
        { href: '#about', text: 'About', icon: 'mdi-account' },
        { href: '#skills', text: 'Skills', icon: 'mdi-code-tags' },
        { href: '#work', text: 'Work', icon: 'mdi-briefcase' },
        { href: '#contact', text: 'Contact', icon: 'mdi-email' }
      ]
    }
  },
  methods: {
    scrollTo(id) {
      this.activeSection = id;
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    handleScroll() {
      const sections = this.navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            this.activeSection = section;
            break;
          }
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.floating-nav {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: rgba(0,0,0,0.7);
  padding: 8px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  z-index: 99;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.floating-nav a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  margin: 0 5px;
  position: relative;
  transition: all 0.3s ease;
}

.floating-nav a:hover {
  background: rgba(83, 109, 254, 0.3);
  transform: translateY(-3px);
}

.floating-nav a.active {
  background: #536DFE;
  color: white;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #536DFE;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
  margin-bottom: 10px;
}

.floating-nav a:hover .tooltip {
  opacity: 1;
  visibility: visible;
  margin-bottom: 15px;
}

@media (max-width: 600px) {
  .floating-nav {
    padding: 6px;
  }
  .floating-nav a {
    width: 36px;
    height: 36px;
    margin: 0 3px;
  }
}
</style>