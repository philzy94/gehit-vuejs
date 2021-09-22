<template>
  
              <div class=" px-5 sm:px-24 md:px-52">        
          <div class="mt-5 mb-10 w-full flex-grow sm:rounded-sm shadow-custom"> 
              <div class="w-full flex items-center justify-center h-24 border-b border-gray-300">
              
                    <div v-if="Form.tem_URL" class="inline-block h-14 w-14 rounded-full ring-1 ring-yellow-600 overflow-hidden border-b-2 bg-white" id="preview">
                         <img  :src="Form.tem_URL" />
                    </div>
                    <div v-else-if="Form.logo" class="inline-block h-14 w-14 rounded-full ring-1 ring-yellow-600 overflow-hidden border-b-2 bg-white" id="preview">
                         <img  :src="Form.logo" />
                    </div>
                    <span v-else class="inline-block h-14 w-14 rounded-full ring-1 ring-yellow-600 overflow-hidden border-b-2 bg-white">
                                          
                        <svg class="h-full text-yellow-600 w-full" fill="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </span>
              
                
              </div>

              <div class="w-full flex pt-2 justify-center">
                <h1 class=" text-2xl font-bold text-yellow-600">Business Profile</h1>       
                
              </div>

              <div class="">
                <div class="px-4 bg-white space-y-5 sm:p-6">
                                  
                      <div>                
                            <label for="business_name" class="block text-sm font-medium text-gray-400">
                            Business/Organization Name <span class="errors">*</span>
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </span>
                            <input v-model="Form.organization_name" type="text" name="business_name" id="company_website" class="input-field" placeholder="Dnice Clothing">
                          </div>
                            <span class="errors" v-if="errors.organization_name">
                              {{ errors.organization_name[0]}}
                            </span>
                      </div>
                      
                      <div class="">
                        <label for="category" class="block text-sm font-medium text-gray-400">
                        Select Skill Category <span class="errors">*</span>
                        </label> 
                        
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                              </svg>
                            </span>
                            
                            <select id="category" v-model="Form.category"  @change="getSubCategory(true)" name="state" autocomplete="country" class="input-field">
                              <option value="" selected disabled class="text-grey-darker">--Select--</option>
                              <option  v-for="cat in getCat" :key="cat.id" :value="cat.id">{{ cat.skill_category }}</option>
                                
                            </select>

                            </div>

                            <span class="errors" v-if="errors.category">
                              {{ errors.category[0]}}
                            </span>
                      </div>

                      <div class="">
                        <label for="sub_category" class="block text-sm font-medium text-gray-400">
                        Select Skill Subcategory <span class="errors">*</span>
                        </label> 
                        
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                              </svg>
                            </span>
                            <select v-model="Form.sub_category" id="sub_category" name="country" autocomplete="country" class="input-field">
                              <option value="" selected disabled class="text-grey-darker">--Select--</option>
                              <option v-for="subcat in getSubCat" :key="subcat.id" :value="subcat.id">{{ subcat.sub_category }}</option>
                               
                            </select>
                            </div>
                            <span class="errors" v-if="errors.sub_category">
                              {{ errors.sub_category[0]}}
                            </span>
                      </div>
                      
                      <div class="">
                        <label for="state" class="block text-sm font-medium text-gray-400">
                        Select State <span class="errors">*</span>
                        </label> 
                        
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            </span>
                            
                          <select id="state" v-model="Form.state"  @change="getLocation(true)" name="state" autocomplete="country" class="input-field">
                              <option value="" selected disabled class="text-grey-darker">--Select--</option>
                              <option v-for="stet in getStet" :key="stet.id" :value="stet.id">{{ stet.state }}</option>
                               
                        </select>
                            </div>
                            <span class="errors" v-if="errors.state">
                              {{ errors.state[0]}}
                            </span>
                      </div>


                      <div class="">
                        <label for="area" class="block text-sm font-medium text-gray-400">
                        Select Area/Location <span class="errors">*</span>
                        </label> 
                        
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                            <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            </span>
                           
                            <select v-model="Form.location" id="area" name="country" autocomplete="country" class="input-field">
                              <option value="" selected disabled class="text-grey-darker">--Select--</option>
                              <option v-for="loc in getLoc" :key="loc.id" :value="loc.id">{{ loc.location }}</option>
                               
                            </select>
                            </div>
                            <span class="errors" v-if="errors.location">
                              {{ errors.location[0]}}
                            </span>
                      </div>

                      <div>
                    <label for="file-upload" class="block text-sm font-medium text-gray-400">
                      Business/Organization Logo <span class="errors">*</span>
                    </label>
                    <label for="file-upload" class="cursor-pointer" >
                          <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-yellow-600 border-dashed rounded-md">
                            <div class="space-y-1 text-center">
                              <div v-if="Form.tem_URL" class="mx-auto h-12 w-12 text-yellow-600" id="preview">
                                      <img  :src="Form.tem_URL" />
                                  </div>
                              <svg v-else class="mx-auto h-12 w-12 text-yellow-600" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <div class="flex text-sm text-gray-600">
                                <label for="file-upload" class="relative text-yellow-600 cursor-pointer bg-none rounded-md font-medium border  hover:border-yellow-600 ">
                                  <span class=" text-yellow-600">Upload a file</span>
                                  <input @change="uploadLogo" id="file-upload" name="file-upload" type="file" class="sr-only">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                              </div>
                              <p class="text-xs text-gray-500">
                                PNG, JPG, GIF not more than 2MB
                              </p>
                            </div>
                            
                          </div>
                    </label>
                      <span class="errors" v-if="errors.logo">
                                {{ errors.logo[0]}}
                      </span><div></div>
                      <span class="errors" v-if="fileError">
                                {{ fileError.file}}
                      </span>
                  </div>

                      <div>
                          <label for="about" class="block text-sm font-medium text-gray-400">
                            About Your Skill/Organization <span class="errors">*</span>
                          </label>
                          <div class="mt-1">
                            <textarea v-model="Form.about_organization" id="about" name="about" rows="6" class="textarea-field" placeholder="What do you what customers to know about your Skill or Organization"></textarea>
                          </div>

                      </div>

                      <div>
                          <label for="address" class="block text-sm font-medium text-gray-400">
                            Contact Address <span class="errors">*</span>
                          </label>
                          <div class="mt-1">
                            <textarea v-model="Form.contact_address" id="address" name="about" rows="6" class="textarea-field" placeholder="Contact address that customers can reach you"></textarea>
                          </div>

                      </div>
                  
                  
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  
                  <button class="reg-log" @click="saveOrganizationDetail()"
                        v-bind:class="{ cursordisable: isLoading }"
                        :disabled="isLoading" v-if="!activeBtn"
                        >


                      <span v-if="!isLoading">Save</span>          
                      <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      
                      </svg>
                      <span v-if="isLoading">Processing</span>
                  </button> 

                  <button class="reg-log" @click="updateOrganizationDetail()"
                        v-bind:class="{ cursordisable: isLoading }"
                        :disabled="isLoading" v-else
                        >

                      <span v-if="!isLoading">Update</span>          
                      <svg v-else class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      
                      </svg>
                      <span v-if="isLoading">Processing</span>
                  </button> 
                    

                </div>
              </div>
          
          </div>
          
      </div>

</template>

<script>

import Toast from "../apis/sweetAlert";
import Http from "../apis/Http";
import Swal from 'sweetalert2';

export default {
  name: 'OrganizationDetail',
  components: {
    
  },

  mounted() {

    if(this.getOrganizationDetail() == null){
      this.$store.commit("loadSpinner", true);
       this.getCategory()
       this.getState()
       this.$store.commit("loadSpinner", false);
    }
    else{
      this.getOrganizationDetail();      
      
    }
    
      
      },
      
   data(){
     return{
                   getCat: '',
                   getSubCat: '',
                   getStet: '',
                   getLoc:'',

                   activeBtn: false,
                  isLoading: false,
                  errors: {},
                  fileError: {},

              Form: {
                organization_name: "",
                about_organization: "",
                contact_address: "",
                logo: '',
                tem_URL: '',
                category: "",
                sub_category: "",
                state: "",
                location: "",
              },


            }
        },

computed: {
  
  },
  methods: {
    
    getCategory(){

      Http.getCategory()
          .then(response => {
            this.getCat = response.data
          this.getSubCategory();
          
            
          })
          .catch(() => { 
            
          });
    },

    getState(){

      Http.getState()
          .then(response => {
            this.getStet = response.data
          this.getLocation();
          
            
          })
          .catch(() => { 
            
      });
    },


    getSubCategory(change=false){
      
      let id = this.Form.category
      if(change){
        this.Form.sub_category = '';
      }
      
      let subCat = this.getCat.filter(function(subcat){
        
        return subcat.id == id;
      });

      this.getSubCat = '';
      this.getSubCat = subCat[0].sub_category;
      
      },
      
      getLocation(change = false){ 

      let id = this.Form.state
      if(change){
        this.Form.location = '';
      }
      let Loc = this.getStet.filter(function(loc){
        return loc.id == id;
      });

      this.getLoc = '';
      this.getLoc = Loc[0].location;
      
      },


      uploadLogo(e){
          let file = e.target.files[0]
          if ((file['size'] < 200000)){
            this.fileError ={}
              if((file['type'].toLowerCase()==='image/jpeg') || (file['type'].toLowerCase()==='image/png')){
            this.fileError ={}
                
                this.Form.tem_URL = URL.createObjectURL(file); // URL for preview
                this.Form.logo = file // file to be uploaded to the server
                
                  
              }
              else{
              this.fileError = {file: 'Only jpeg and png filetype is allowed'}
          }
              
          }
          else{
            this.fileError = {file: 'You can only upload maximum of 2MB'}
          }
          
      },

      saveOrganizationDetail(){

         this.isLoading = true;
          this.fileError ={}          

          const formData = new FormData()
                formData.append('organization_name', this.Form.organization_name)
                formData.append('about_organization', this.Form.about_organization)
                formData.append('contact_address', this.Form.contact_address)
                formData.append('logo', this.Form.logo)
                formData.append('category', this.Form.category)
                formData.append('sub_category', this.Form.sub_category)
                formData.append('state', this.Form.state)
                formData.append('location', this.Form.location) 

                

         Http.saveOrganizationDetail(formData)
        .then(() => {  
          this.getOrganizationDetail();
          this.isLoading = false;
          this.errors= {}
          Toast.fire({
            icon: 'success',
            title: 'Successful'
        })
                    
        })
        .catch(error => { 
          
          this.isLoading = false;
        if (error.response.status === 422) {
          
          this.isLoading = false;
          this.errors = error.response.data.errors;
          
         } 
         else {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: ''
              })
           }  
           
          
        });



      }, 
      
      getOrganizationDetail(){
        this.$store.commit("loadSpinner", true);
        //Http.getOrganizationDetail(42) // the arguement that is passed is the user profile_id which is a foreign key.
        Http.getOrganizationDetail() // getting all the existing businesses added by the auth user
        .then(response => {
          if((response.data != null) || (response.data != "")){
            
                this.Form.organization_name = response.data[0].organization_name;
                this.Form.about_organization = response.data[0].about_organization;
                this.Form.contact_address = response.data[0].contact_address;
                this.Form.logo = response.data[0].logo;
                
                this.Form.category = response.data[0].category_id;
                this.Form.sub_category = response.data[0].sub_category_id;
                this.Form.state = response.data[0].state_id;
                this.Form.location = response.data[0].location_id;
            this.getCategory()
            this.getState()
          this.activeBtn = true
          }
          if(Object.keys(this.Form).length > 9){
            this.activeBtn = true
          }
          else{
            this.activeBtn = true
          }

          this.$store.commit("loadSpinner", false);
          
        })
        .catch(() => { 
          this.$store.commit("loadSpinner", false);
          if(Object.keys(this.Form).length > 9){
            this.activeBtn = true
          }
          else{
            this.activeBtn = false
          }
        });
        },



    updateOrganizationDetail() {
      this.fileError ={}
      this.isLoading = true;


      const formData = new FormData()
        formData.append('organization_name', this.Form.organization_name)
        formData.append('about_organization', this.Form.about_organization)
        formData.append('contact_address', this.Form.contact_address)
        formData.append('logo', this.Form.logo)
        formData.append('category', this.Form.category)
        formData.append('sub_category', this.Form.sub_category)
        formData.append('state', this.Form.state)
        formData.append('location', this.Form.location) 
        formData.append('_method', 'PUT')
        
       Http.updateOrganizationDetail(formData)
        .then(() => {  
          this.isLoading = false;

          Toast.fire({
            icon: 'success',
            title: 'Successful'
        })
        })
        .catch(error => { 
          this.isLoading = false;
         if (error.response.status === 422) {          
          this.isLoading = false;
          this.errors = error.response.data.errors;
          
         } 
         else {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: ''
              })
           }      
                  
          
        });

      
     },


  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>