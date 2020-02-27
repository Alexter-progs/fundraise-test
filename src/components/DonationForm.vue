<template>
    <div class="DonationForm__container">
      <div>
        <ButtonsGrid rows="3" columns="3"/>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ButtonsGrid from "./ButtonsGrid.vue";

@Component({
  components: {
    ButtonsGrid,
  }
})
export default class DonationForm extends Vue {
  @Prop() private readonly msg!: string;
  
  async created() {
    const res = await fetch('/api/donations');
    const donation = await res.text();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.DonationForm {
  &__container {
    border-radius: 5px;
    box-shadow: 0 0 2px #00000040;
    padding: 30px 30px 25px 30px;
    background-color: #f5f5f5;
  }
}
</style>
