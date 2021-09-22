<template>
  <div class="px-2">
      <!-- component -->
            <div class="my-12 mx-auto px-4 md:px-12">
                <div v-if="artisans == ''||artisans == []|| artisans == null" class=" text-gray-400 mt-28 text-xl font-bold w-full flex justify-center items-center">No Artisan Found</div>

                <div  v-else class="flex flex-wrap -mx-1 lg:-mx-4">

                    <!-- Column -->
                    <div class="my-3 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:w-1/4" v-for="artisan in artisans" :key="artisan.id">
                      
                        <!-- Article -->
                        <article class="overflow-hidden shadow-lg">

                                <img alt="Placeholder" class="block bg-yellow-500 opacity-90 h-auto w-full object-cover" :src= artisan.logo>
                            
                            <div class=" block card-bg text-gray-600 text-sm pb-2 pl-2 pr-2">                                
                                
                                <h1 class=" text-xl font-bold  text-yellow-600"> {{ artisan.category_id }} </h1>
                                <div class=" ">
                                    Name:{{ artisan.organization_name }}
                                </div>

                                <div>
                                    Sub Category: {{ artisan.sub_category_id }}
                                </div>

                                <div>
                                    State: {{ artisan.state_id }}
                                </div>

                                <div>
                                    Area/Location: {{ artisan.location_id }}
                                </div>
                                 
                                <div class="flex w-full justify-end btn-border mt-2 border-yellow-600 pt-1">
                                    <button class=" text-lg  px-3 ml-1 text-white rounded-sm bg-yellow-600"> view </button>
                                     <button class=" text-lg px-3 ml-1 text-white rounded-sm bg-yellow-600"> Hire </button> 
                                </div>                               
                                                                 
                                                                                                  
                            </div>

                        </article>
                        <!-- END Article -->

                        

                    </div>
                    <!-- END Column -->
                    



                </div>
            </div>
  </div>
</template>

<script>

import Http from "../apis/Http";

export default {
  data() {
    return {

        artisans: null,
        artisanId: null,
      
    };
  },

  mounted() {
    this.getArtisans()
    },


  methods: {      
      getArtisans(){
        this.$store.commit("loadSpinner", true);
      
        Http.getArtisanDetail() // getting all the existing businesses added by the auth user
        .then(response => {
            console.log(response.data);
          if((response.data != null) || (response.data != "")){
            this.artisans = response.data;
            this.artisanId = response.data[0].id;
            this.$store.commit("loadSpinner", false); // Close spinner
            

          }
          
        })
        .catch(() => { 
         this.$store.commit("loadSpinner", false); // Close spinner
          
        });
        },
    
  },
  
  beforeUnmount() {
    
  },
};
</script>

<style>
.card-bg{
    background-color: rgb(241, 223, 188);
}

.btn-border{
    border-top: 1px solid rgba(217, 119, 6)
}

</style>