<script setup>
import PackageItem from '@/components/items/PackageItem.vue'
import PaginationC from '@/components/common/PaginationC.vue'
</script>

<template>
  <section>
    <!-- Container -->
    <div class="w-full px-5 mx-auto md:px-10 ">
      <!-- Component -->
      <div class="flex flex-col gap-12">
        <!-- Title -->
        <div class="flex flex-col gap-5">
          <h3 class="text-2xl font-bold md:text-5xl">Filter packages</h3>
        </div>
        <!-- Content -->
        <div class="grid gap-10 md:gap-12 lg:grid-cols-[max-content_1fr]">
          <!-- Filters -->
          <div class="mb-4 max-w-none lg:max-w-sm">
            <form name="wf-form-Filter-2" method="get" class="flex-col gap-6">
              <!-- Filters title -->
              <div class="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
                <h5 class="text-xl font-bold">Filters</h5>
                <a href="#" class="text-sm">
                  <p>Clear all</p>
                </a>
              </div>
              <!-- Search input -->
              <input type="text"
                class="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]"
                placeholder="Search"
                style="background-image: url('https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg');" />
              <!-- Categories -->
              <div class="flex flex-col gap-6">
                <p class="font-semibold">Categories</p>
                <div class="flex flex-wrap items-center gap-2">
                  <a href="#" class="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daab_design.svg"
                      alt="" class="inline-block" />
                    <p>Design</p>
                  </a>
                  <a href="#" class="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daae_illustration.svg"
                      alt="" class="inline-block" />
                    <p>Illustrations</p>
                  </a>
                  <a href="#" class="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daad_icons.svg"
                      alt="" class="inline-block" />
                    <p>Icons</p>
                  </a>
                  <a href="#" class="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaf_plugins.svg"
                      alt="" class="inline-block" />
                    <p>Plugins</p>
                  </a>
                  <a href="#" class="flex gap-3 rounded-md bg-[#f2f2f7] p-3 font-semibold">
                    <img
                      src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daac_color%20palette.svg"
                      alt="" class="inline-block" />
                    <p>Color Palette</p>
                  </a>
                </div>
              </div>
              <!-- Divider -->
              <div class="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
              <!-- FIlter One -->
              <div class="flex flex-col gap-6">
                <div
                  class="flex cursor-pointer items-center justify-between py-4 [border-top:1px_solid_rgba(0,_0,_0,_0)] md:py-0">
                  <p class="font-semibold">FIlter One</p>
                  <a href="#" class="inline-block text-sm text-black">
                    <p>Clear</p>
                  </a>
                </div>
                <div class="flex flex-col gap-3">
                  <label class="flex items-center text-sm font-medium">
                    <div class="mr-3 h-5 w-5 cursor-pointer rounded-sm border border-solid bg-[#f2f2f7]"></div>
                    <span class="inline-block cursor-pointer" for="Filter-One-Option-1">Option One</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <!-- Decor -->
          <div class="w-full [border-left:1px_solid_rgb(217,_217,_217)]">
            <div class="flex flex-wrap gap-2 ">
            <PackageItem />
            <PackageItem />
            <PackageItem />
            <PackageItem />
            </div>
            <PaginationC/>

          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>
