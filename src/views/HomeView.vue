<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import TheNav from '/src/components/TheNav.vue'
import CategoriesSection from '/src/components/CategoriesSection.vue'
import PopularSection from '/src/components/PopularSection.vue'
import CustomSection from '/src/components/CustomSection.vue'
import BandsSection from '/src/components/BandsSection.vue'
import ContactSection from '/src/components/ContactSection.vue'
</script>

<template>
  <TheNav></TheNav>
  <TheHeader></TheHeader>
  <CategoriesSection />
  <PopularSection></PopularSection>
  <CustomSection></CustomSection>
  <BandsSection></BandsSection>
  <ContactSection></ContactSection>
</template>
