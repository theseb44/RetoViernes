<script lang="ts">
import type { MedicalOrder } from '@/types/medical-orders'
import type { Medicine } from '@/types/medicines'
import type { BaseColumn } from '@/types/shared'
import { computed, type PropType, defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomTable',
  props: {
    cols: { type: Array as PropType<BaseColumn[]>, required: true },
    rows: { type: Array as PropType<MedicalOrder[] | Medicine[]>, required: true },
    hasMedicines: { type: Boolean, required: false },
    emptyMessage: { type: String, required: false }
  },
  setup(props) {
    const colsInfo = computed(() => props.cols)
    const rowsInfo = computed(() => props.rows)
    const emptyState = computed(() => props.emptyMessage)
    const showMedicines = computed(() => props.hasMedicines)

    return {
      colsInfo,
      rowsInfo,
      emptyState,
      showMedicines
    }
  }
})
</script>

<template>
  <vue-good-table
    :columns="colsInfo"
    :rows="rowsInfo"
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
    <!-- <template #table-row="_props">
      <div v-if="showMedicines && _props.column.field == 'medicines'">
        {{ _props.row.medicines.map((e: any) => e.name).join(', ') || "No tiene medicamentos" }}
      </div>
    </template> -->
    <template #emptystate>{{ emptyState ?? 'No hay datos disponibles para mostrar' }}</template>
  </vue-good-table>
</template>
