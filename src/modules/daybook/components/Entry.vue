<template>
  <div class="entry-container mb-3 pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-1 fw-light">2022</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed nihil
      corrupti cum non quaerat. Adipisci illum, iusto perferendis dicta dolorum
      rem nulla. Debitis voluptatibus non repellendus voluptatum, magni culpa?
    </div>
  </div>
</template>

<script>
export default {
  name: "JournalEntry",
};
</script>

<style lang = 'scss' scoped>
.entry-container {
  border-bottom: 1px solid #123e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>