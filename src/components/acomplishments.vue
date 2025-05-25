<template>
  <v-container>
    <div
      class="flex-column d-sm-flex flex-sm-row offset-md-1 mt-9"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="1"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <v-col cols="12" md="11" sm="12">
        <h1 class="pb-15">Education & Experience</h1>
        <div class="pb-5">
          <div class="d-flex">
            <!-- <a href="https://creditro.com" target="_blank" >--><h2 id="links">Fettan Pay</h2>
              <!-- </a> --> 
            <h2 class="ml-auto">Payment Application Development</h2>
          </div>
          <span>08.2021 - 11.2021 / Addiss Abeba, Ethiopia</span>
        </div>
        <div class="pb-5">
          <div class="d-flex">
            <a href="https://www.available.soon/en" target="_blank"
              ><h2 id="links">Software Engineering</h2></a
            >
            <h2 class="ml-auto">Bachelor: At University of Debremarkos</h2>
          </div>
          <span>08.2020 - 11.2021 / Debremarkos, Ethiopia</span>
        </div>
        <div class="pb-5">
          <div class="d-flex">
            <a href="https://available.soon" target="_blank"
              >
              <h2 id="links">ATP</h2>
              </a>
            <h2 class="ml-auto">Final Exam Project</h2>
          </div>
          <span>04.2020 - 06.2020 / Debremarkos, Ethiopia</span>
        </div>

      </v-col>
    </div>
    <v-col cols="12" md="11" sm="12">
      <v-divider
        id="feelsGoodMan"
        class="mt-15 offset-md-1"
        color="#ffffff"
      ></v-divider>
    </v-col>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: #fff;
  font-weight: 400;
  letter-spacing: 2px;
}
h2,
h1,
span {
  cursor: context-menu;
}
h2 {
  font-size: 19px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 2px;
  font-family: "PT Sans", sans-serif;
}
span {
  color: #fff;
  opacity: 0.5;
  font-size: 13px;
  letter-spacing: 2px;
}

a {
  text-decoration: none;
  color: #fff !important;
  border-bottom: #536dfe solid 1px;
  padding-bottom: 3px;
  padding-top: 1px;
  box-shadow: inset 0 -1px 0 #536dfe;
  padding-left: 3px;
  padding-right: 3px;
  -webkit-transition: 0.9s ease-in-out;
  transition: 0.4s ease-in-out;
}
a:hover {
  opacity: 0.9;
  transition: all 400ms ease-in-out;
  box-shadow: inset 0 -55px 0 0 #536dfe;
}
#links {
  cursor: pointer;
}
</style>
