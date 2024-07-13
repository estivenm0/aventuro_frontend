<script setup>
import PaginationC from '@/components/common/PaginationC.vue';
import PackageItem from '@/components/items/PackageItem.vue'
import FilterP from '@/components/layouts/FilterP.vue';
import client from '@/utils/client';
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

const packages = reactive({
  list: {},
  links: [],
  meta: {},
})

const route = useRoute()


watch(() => route.query, async (query) => {
  console.log(query)
  let res = await client.get('/api/v1/packages', {
    params: {
      page: query.page ? query.page : 1,
      'title[eq]': query.q,
      'categoryId[eq]': query.categoryId,
    }
  });
  Object.assign(packages, res.data);
  console.log(packages)

}, { immediate: true })


</script>

<template>
  <FilterP>
    <div class="w-full [border-left:1px_solid_rgb(217,_217,_217)]" v-if="packages.list.length > 0">
      <div class="flex flex-wrap gap-2 " >
        <template v-for="pack, index in packages.list" v-bind:key="index">
        <PackageItem :pack />
        </template>
      </div>
      <PaginationC name="packages" :meta="packages.meta" />
    </div>
  </FilterP>
</template>
