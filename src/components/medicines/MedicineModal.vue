<script lang="ts">
import type { Medicine } from '../../backend/interfaces/medicine'
import { computed, defineComponent, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core';
import { minValue, required } from '@vuelidate/validators';

export default defineComponent({
  name: 'MedicineModal',
  props: {
    isOpen: { type: Boolean, required: true }
  },
  //   emits: ['save', 'hide'],
  emits: ['hide'],
  setup(props, { emit }) {
    let isLoading = ref(false)
    const medicine = ref<Medicine>({
      name: '',
      description: '',
      qty: 0,
      provider: '',
      doctorSignature: ''
    })

    const isModalOpen = computed(() => props.isOpen)
    const rules = computed(() => ({
      name: { required },
      description: { required },
      qty: { required, minValue: minValue(1) },
      provider: { required },
      doctorSignature: { required }
    }))

    const v$ = useVuelidate(rules, medicine)

    const handleSaveMedicine = async () => {
      const isFormValid = await v$.value.$validate()

      if (!isFormValid) {
        return
      }

      isLoading.value = true

      const medicineObj: Medicine = {

        name: medicine.value.name,
        description: medicine.value.description,
        qty: medicine.value.qty,
        provider: medicine.value.provider,
        doctorSignature: medicine.value.doctorSignature
      }

      
      //console.log(medicinejson)
      fetch("http://localhost:3000/api/v1/Medicines", {
        method: "post",
        headers: {
    "Content-Type": "application/json"
  },
        body: JSON.stringify(medicineObj)
      })

      isLoading.value = false
    }

    return {
      v$,
      emit,
      medicine,
      isLoading,
      isModalOpen,
      handleSaveMedicine
    }
  }
})
</script>

<template>
  <div v-show="isModalOpen" class="custom-modal-overlay">
    <div class="custom-modal">
      <div class="columns is-multiline px-5">
        <div class="column is-12">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Nombre<span class="has-text-danger">*</span></label>
            <div class="control">
              <input v-model="v$.name.$model" class="input" type="text" />
            </div>
            <p v-if="v$.name.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-12">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Descripción<span class="has-text-danger">*</span></label>
            <div class="control">
              <textarea v-model="v$.description.$model" class="textarea" />
            </div>
            <p v-if="v$.description.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Cantidad<span class="has-text-danger">*</span></label>
            <div class="control">
              <input v-model="v$.qty.$model" class="input" type="text" />
            </div>
            <p v-if="v$.qty.minValue.$invalid" class="has-text-danger">La cantidad mínima es 1</p>
            <p v-if="v$.qty.required.$invalid" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Proveedor<span class="has-text-danger">*</span></label>
            <div class="control">
              <input v-model="v$.provider.$model" class="input" type="text" />
            </div>
            <p v-if="v$.provider.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-12">
          <div class="field">
            <label class="has-text-grey has-text-weight-light">Firma del encargado<span
                class="has-text-danger">*</span></label>
            <div class="control">
              <input v-model="v$.doctorSignature.$model" class="input" type="text" />
            </div>
            <p v-if="v$.doctorSignature.$error" class="has-text-danger">Campo obligatorio</p>
          </div>
        </div>
        <div class="column is-12 mt-2">
          <button class="button is-primary is-fullwidth" :class="{ 'is-loading': isLoading }" @click="handleSaveMedicine">
            Guardar
          </button>
        </div>
      </div>
    </div>
    <div class="close" @click="() => emit('hide')">
      <i class="fa fa-times"></i>
    </div>
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
  height: 700px;
  width: 700px;
  margin-top: 10%;
  padding: 40px 0;
  border-radius: 10px;
}

.close {
  margin: 10.5% 0 0 -25px;
  cursor: pointer;
}
</style>
