<template>
     <div class="px-6 space-y-5">
        <div class="relative flex items-start" v-for="(standard, index) in standards" :key="index">
            <div class="flex items-center h-6">
                <input
                    :id="index"
                    :value="standard.code"
                    v-model="selectedStandardsCodes"
                    name="comments"
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                    @change="addStandard($event, standard)"
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
    export default {
        props: ['standards'],
        data() {
            return {
                selectedStandardsCodes: []
            };
        },
        mounted() {
            this.$store.subscribeAction((action, state) => {
                if (action.type === 'standards/clearAll')
                    this.selectedStandardsCodes = [];
                
                if (action.type === 'standards/removeItemFromStandards')
                    this.selectedStandardsCodes = this.selectedStandardsCodes.filter(s => s.code != action.payload.code);

            });
        },
        methods: {
            addStandard (event, standard) {
                if(event.target.checked)
                    this.$store.dispatch('standards/addItemToStandards', standard)
                else
                    this.$store.dispatch('standards/removeItemFromStandards', standard)
            }
        }
    }
</script>
