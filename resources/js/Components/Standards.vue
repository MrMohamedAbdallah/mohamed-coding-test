<template>
     <div class="px-6 space-y-5">
        <div class="relative flex items-start" v-for="(standard, index) in standards" :key="index">
            <div class="flex items-center h-6">
                <input
                    :id="index"
                    :value="standard.code"
                    v-model="selectedStandardsCodes"
                    @click="toggleStandard($event, standard)"
                    name="comments"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"  
                />
            </div>
            <div class="ml-3 text-sm leading-6">
                <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                <p class="text-gray-500">{{ standard.description }}</p>
            </div>
        </div>
     </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: ['standards'],
        computed: {
            ...mapGetters({
                selectedStandardsCodes: 'standards/selectedStandardsCodes',
            }),
        },
        methods: {
            toggleStandard (event, standard) {
                this.$store.dispatch('standards/toggleStandard', standard)
            }
        }
    }
</script>
