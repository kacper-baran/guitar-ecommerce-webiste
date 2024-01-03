<template>
  <footer>
    <div class="wrapper">
      <div>
        <div class="logo">
          <IconMilitaryAward size="50" stroke-width="1"></IconMilitaryAward>Guitar Center
        </div>
        <ul class="flex-row socials">
          <li>
            <a href=""><IconBrandInstagram size="30" stroke-width="1"></IconBrandInstagram></a>
          </li>
          <li>
            <a href=""><IconBrandYoutube size="30" stroke-width="1"></IconBrandYoutube></a>
          </li>
          <li>
            <a href=""><IconBrandLinkedin size="30" stroke-width="1"></IconBrandLinkedin></a>
          </li>
          <li>
            <a href=""><IconBrandTwitter size="30" stroke-width="1"></IconBrandTwitter></a>
          </li>
        </ul>
      </div>
      <ul class="links-list desktop">
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
        <li><a href="">link</a></li>
      </ul>
      <ul class="links-list desktop">
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
        <li><a href="">Link</a></li>
      </ul>
      <ul class="links-list">
        <li class="uppercase">Established 2024</li>
        <li><a href="">hello@gc.com</a></li>
        <li><a href="">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="wrapper">
      <ul class="flex-row">
        <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div class="uppercase">&copy; 2024 guitar center All rights Reserved</div>
    </div>
  </footer>
</template>

<script setup>
import {
  IconMilitaryAward,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-vue'
</script>

<style lang="scss" scoped>
footer {
  display: grid;
  padding-inline: 2rem;
  border-radius: 26px 26px 0 0;
  background-color: #121212;
  padding-block: clamp(2rem, 10vw, 3rem);
}
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  max-width: 1400px;
  margin-inline: auto;
  width: 100%;
}

.wrapper:last-child {
  padding-top: clamp(2rem, 10vw, 3rem);
}

ul {
  list-style: none;
  padding: 0;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  font-size: 1.7rem;
}

.links-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & > *:where(:not(:first-child)) {
    margin-top: 1rem;
  }
}

.flex-row {
  display: flex;
  gap: 2rem;
  padding: 0;
}

.uppercase {
  text-transform: uppercase;
  font-weight: 700;
}

a {
  color: var(--color-text);
  text-decoration: none;
  transition:
    color 0.3s,
    border-color 0.3s;
  &:hover {
    color: white;
  }
}

.socials {
  margin-top: 2rem;
  li {
    a {
      display: grid;
      place-items: center;
      border: 1px solid;
      border-color: var(--color-text);
      height: 50px;
      width: 50px;
      padding: 0.5rem;
      border-radius: 50%;
      aspect-ratio: 1;
      &:hover {
        border-color: white;
      }
    }
  }
}

.desktop {
  display: none;
}

@media (min-width: 880px) {
  .desktop {
    display: block;
  }

  .wrapper {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }

  .logo {
    justify-content: start;
  }
}
</style>
