<script setup lang="ts">
import { ref } from 'vue'
import MedicalOrderModal from "../components/medical-orders/MedicalOrderModal.vue";

const isModalOpen = ref(false)

</script>

<template>
  <div class="columns is-multiline">
    <!-- Welcome message (This will be a component) -->
    <div class="column is-12 mt-5 mb-6">
      <div class="notification title is-size-5 is-primary">Bienvenid@ David P. Avila</div>
    </div>

    <!-- Buttons -->
    <div class="column is-5">
      <VDatePicker v-model="range" is-range :masks="{ input: 'DD/MM/YYYY' }">
        <template #default="{ inputValue, inputEvents }">
          <div class="field has-addons">
            <div class="control">
              <input class="input" :value="inputValue.start" v-on="inputEvents.start" />
            </div>
            <div class="control">
              <button class="button is-primary">
                <span class="icon"> <i class="fa fa-arrow-right"></i> </span>
              </button>
            </div>
            <div class="control">
              <input class="input" :value="inputValue.end" v-on="inputEvents.end" />
            </div>
            <div class="control">
              <button class="button is-primary">
                <span class="icon mr-2"> <i class="fa fa-search"></i> </span> Consultar
              </button>
            </div>
          </div>
        </template>
      </VDatePicker>
    </div>
    <div class="column is-7 has-text-right">
      <button class="button is-primary" @click="isModalOpen = true">
        <span class="icon mr-1"> <i class="fa fa-plus"></i> </span> Agregar
      </button>
    </div>

    <!-- Table (This will be a component) -->
    <!-- TODO: add a button to download the pdf -->
    <div class="column is-12">
      <vue-good-table
        :columns="[]"
        :rows="[]"
        :sort-options="{
          enabled: true
        }"
        :search-options="{
          enabled: true
        }"
        :pagination-options="{
          enabled: true,
          mode: 'records',
          perPage: 5,
          position: 'top',
          perPageDropdown: [10, 20, 50],
          dropdownAllowAll: false,
          setCurrentPage: 1,
          nextLabel: 'Siguiente',
          prevLabel: 'Anterior',
          rowsPerPageLabel: 'Filas por página',
          ofLabel: 'de',
          allLabel: 'Todas'
        }"
      >
        <template #emptystate>No hay datos disponibles para mostrar</template>
      </vue-good-table>
    </div>

    <!-- Modal (This will be a component) -->
    
    <MedicalOrderModal :is-open="isModalOpen" @hide="isModalOpen=false"/>
          
  </div>
</template>

<style scoped>
.custom-modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 9999;
}

.custom-modal {
  background-color: white;
  height: 830px;
  width: 1200px;
  margin-top: 10%;
  padding: 40px 0;
  border-radius: 10px;
}
.close {
  margin: 10.5% 0 0 -25px;
  cursor: pointer;
}

.is-bordered {
  border-bottom: 1px solid black;
}
</style>
