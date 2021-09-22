<template>
  
    <div class="">



    <div v-if="ShowModal">
        <!-- modal -->
           
    </div>


        
        <div class="px-2 sm:px-4 lg:px-10 xl:px-16 mx-auto py-10">

            <!-- gallery -->
            <div class="">            

                <section id="photos" class="flex flex-wrap">
                    <div v-if="galleryData == ''||galleryData == []|| galleryData == null" class=" text-gray-400 mt-28 text-xl font-bold w-full flex justify-center items-center">No Gallery Found</div>
                    <div v-else class="my-3 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-4 lg:w-1/4" v-for="gallery_detail in galleryData" :key="gallery_detail.id">
                      
                        <!-- Image -->
                       
                        <div @mouseover="mouse_Over(gallery_detail)" 
                            @click="mouse_Over(gallery_detail)"
                            class="overflow-hidden relative shadow-lg">
                                
                                <img 
                                alt="Placeholder" class="block object-cover  opacity-90 h-44 w-full"
                                :src="gallery_detail.photos" >
                            
                                

                                <div v-if="mouseOver==gallery_detail" class="bg-opacity-70 flex bg-black items-center absolute justify-center p-1 top-0 h-full w-full">
                                    
                                     <span>
                                        <svg class="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </span>
                                    <svg v-if="user_type == 'Artisan'" @click="openModal('Edit Image', gallery_detail.id)" class="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />                                            
                                    </svg>
                                    <svg v-if="user_type == 'Artisan'" @click="deleteGallery(gallery_detail.id)" class="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>

                                     
                                </div>                               
                                                                 
                           
                           

                        </div>
                        <!-- END Image -->

                        

                    </div>
                    
                </section>

            </div>

        </div>
    </div>

</template>

<script>

//import GalleryPhoto from '../components/GalleryPhoto.vue'
import Http from "../apis/Http";
//import {emitter} from '../main.js'
import Swal from 'sweetalert2';


export default {
  name: 'Gallery',
  components: {
    //GalleryPhoto
  },



    data(){
            return{
                modalData:null,
                mouseOver: null,
                isLoading: false,

                businesses: null,
                galleryData: '',

                user_type: JSON.parse(localStorage.getItem("user")).user_type
            }
        },

    computed: {
        ShowModal () {
            return this.$store.getters.isShowModal
        },
        
    },

    methods: {
        mouse_Over(gallery_detail= null) {
        this.mouseOver = gallery_detail
        },
        

        openModal(modal_data, id=null){
            if(id==null){

                this.modalData  = {type:modal_data}
            }
            else{
                this.modalData  = {type:modal_data, id:id}
            }
            
            this.$store.commit("ModalShow", true);
        },

        getGallery(id = 0){
        
        this.$store.commit("loadSpinner", true); //show spinner

          Http.getGallery(id) // Id is the organisation_detail_id which is a foreign key
        .then(response => {
          if((response.data != null) || (response.data != ""))
          
            this.galleryData = response.data;

            this.$store.commit("loadSpinner", false); // Close spinner
          
        })
        .catch(() => { 
            this.$store.commit("loadSpinner", false);
            this.galleryData = '';
        });
        },


      deleteGallery(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {

            if (result.isConfirmed) {
                //this.$store.commit("loadSpinner", true);
                this.getGallery(5)
                Http.deleteGallery(id)
                .then(() => {  
                    this.getGallery(5)
                    //this.$store.commit("loadSpinner", false);
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                })
                .catch(() => { 
                       // this.$store.commit("loadSpinner", false);
                      
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Image not deleted',
                        footer: ''
                        })
                          
                        
                });
            }
        })

      },

        
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>