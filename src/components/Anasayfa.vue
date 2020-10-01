<template>
  <div>
    <intro></intro>
    <whymbe></whymbe>
    <how_clean></how_clean>
    <Footer></Footer>
  </div>
</template>

<script>
import intro from "./intro";
import whymbe from "./why_mbe";
import how_clean from "./how_clean";
import Footer from "./footer";
import Loginn from "./loginn";

export default {
  name: "Anasayfa",
  components: {
    intro,
    whymbe,
    how_clean,
    Footer,
    Loginn,
  },
};
</script>

<style lang="scss" scoped></style>
