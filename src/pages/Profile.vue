<template>
  

      <div class=" px-5 sm:px-24 md:px-52">        
          <div class="mt-5 mb-10 w-full flex-grow sm:rounded-sm shadow-custom"> 
              <div class="w-full flex items-center justify-center h-24 border-b border-gray-300">
                    <div v-if="profileData.tem_URL" class="inline-block h-14 w-14 rounded-full ring-1 ring-yellow-600 overflow-hidden border-b-2 bg-white" id="preview">
                         <img  :src="profileData.tem_URL" />
                    </div>
                    <div v-else-if="profileData.Profile_photo" class="inline-block h-14 w-14 rounded-full ring-1 ring-yellow-600 overflow-hidden border-b-2 bg-white" id="preview">
                         <img  :src="profileData.Profile_photo" />
                    </div>
                    <span v-else class="inline-block h-14 w-14 rounded-full ring-1 ring-yellow-600 overflow-hidden border-b-2 bg-white">
                        <svg class="h-full text-yellow-600 w-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
              
                
              </div>

              <div class="w-full flex pt-2 justify-center">
                <h1 class=" text-2xl font-bold text-yellow-600">Update Profile</h1>       
                
              </div>

              <div class="">
                <div class="px-4 bg-white space-y-5 sm:p-6">                                 
                      
                      <div>                
                            <label for="full_name" class="block text-sm font-medium text-gray-400">
                            Your Full Name <span class="errors">*</span>
                            </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </span>
                            <input required v-model="profileData.Full_name" type="text" name="full_name" id="company_website" class="input-field" placeholder="www.example.com">
                          </div>
                            <span class="errors" v-if="errors.Full_name">
                              {{ errors.Full_name[0]}}
                            </span>
                      </div>

                      <div>                
                            <label for="email" class="block text-sm font-medium text-gray-400">
                            Email <span class="errors.">*</span>
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                              </svg>
                            </span>
                            <input type="email" v-model="email" disabled name="email" id="email" class="input-field cursordisable" placeholder="www.example.com">
                          </div>
                      
                      </div>

                      <div>                
                            <label for="phone_number" class="block text-sm font-medium text-gray-400">
                            Phone Number <span class="errors">*</span>
                          </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="input-icon">
                              <svg class="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              
                            </span>
                            <input v-model="profileData.Phone_number" type="number" name="phone_number" id="phoneNumer
                            " class="input-field" placeholder="08031111111">
                          </div>

                          <span class="errors" v-if="errors.Phone_number">
                              {{ errors.Phone_number[0]}}
                          </span>
                      
                      </div>


                      <div>
                        <label for="file-upload" class="block text-sm font-medium text-gray-400">
                          Your Profile Photo <span class="errors">*</span>
                        </label>
                        <label for="file-upload" class="cursor-pointer" >
                              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-yellow-600 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                  <div v-if="profileData.tem_URL" class="mx-auto h-12 w-12" id="preview">
                                      <img  :src="profileData.tem_URL" />
                                  </div>
                                  <svg v-else class="mx-auto h-12 w-12 text-yellow-600" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  <div class="flex text-sm text-gray-600">
                                    <label for="file-upload" class="relative text-yellow-600 cursor-pointer bg-none rounded-md font-medium border  hover:border-yellow-600 ">
                                      <span class=" text-yellow-600">Upload a file</span>
                                      <input id="file-upload" @change="uploadProfile" name="file-upload" type="file" class="sr-only">
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                  </div>
                                  <p class="text-xs text-gray-500">
                                    PNG, JPG, GIF not more than 2MB
                                  </p>
                                </div>
                              </div>
                        </label>
                        <span class="errors" v-if="errors.Profile_photo">
                              {{ errors.Profile_photo[0]}}
                          </span><div></div>
                          <span class="errors" v-if="fileError">
                              {{ fileError.file}}
                          </span>
                      </div>
                  
                  
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  
                <button class="reg-log" @click="saveProfile()"
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

                <button class="reg-log" @click="updateProfile()"
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

import Http from "../apis/Http";
import Toast from "../apis/sweetAlert";



export default {
  name: 'Profile',
      components: {
        
      },

      mounted() {
        this.getProfile();
      },
      
      data(){
            return{
              activeBtn: false,
              isLoading: false,
                errors: {},
                fileError: {},
                email: JSON.parse(localStorage.getItem("user")).email,

              profileData: {
                Full_name: '',
                Phone_number: '',
                Profile_photo: '',
                tem_URL: '',
              },


              
            }
        },

    
    methods: {
        
        getProfile(){
          Http.getProfile()
        .then(response => {
          if((response.data != null) || (response.data != ""))
          this.profileData = response.data;
          this.activeBtn = true
          if(Object.keys(this.profileData).length > 4){
            this.activeBtn = true
          }
          else{
            this.activeBtn = false
          }
          
        })
        .catch(() => { 
          if(Object.keys(this.profileData).length > 4){
            this.activeBtn = true
          }
          else{
            this.activeBtn = false
          }
        });
        },

        saveProfile(){
          this.isLoading = true;
          this.fileError ={}          

          const formData = new FormData()
                formData.append('Full_name', this.profileData.Full_name)
                formData.append('Phone_number', parseInt(this.profileData.Phone_number))  
                formData.append('Profile_photo', this.profileData.Profile_photo)      

                Http.saveProfile(formData)
        .then(() => {  
          this.getProfile();
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
            this.errors=error.response.data.errors
           }  
           
          
        });
        },


      uploadProfile(e){
          let file = e.target.files[0]
          if ((file['size'] < 200000)){
            this.fileError ={}
              if((file['type'].toLowerCase()==='image/jpeg') || (file['type'].toLowerCase()==='image/png')){
            this.fileError ={}
                
                this.profileData.tem_URL = URL.createObjectURL(file); // URL for preview
                this.profileData.Profile_photo = file // file to be uploaded to the server
                
                  
              }
              else{
              this.fileError = {file: 'Only jpeg and png filetype is allowed'}
          }
              
          }
          else{
            this.fileError = {file: 'You can only upload maximum of 2MB'}
          }
          
      },

      updateProfile() {
        this.isLoading = true;
          this.fileError ={} 
          
          const formData = new FormData()
                formData.append('Full_name', this.profileData.Full_name)
                formData.append('Phone_number', parseInt(this.profileData.Phone_number))  
                formData.append('Profile_photo', this.profileData.Profile_photo) 
                formData.append('_method', 'PUT')
                
                 
              
       Http.updateProfile(formData)
        .then(() => { 
          this.getProfile(); 
        this.isLoading = false;
          this.errors= {}
        Toast.fire({
          icon: 'success',
          title: 'Update Successful'
        })
                    
        })
        .catch(error => { 
          
           this.isLoading = false;
        if (error.response.status === 422) {
          
          this.isLoading = false;
          this.errors = error.response.data.errors;
          
         } 
         else {
            this.errors.error.response.data.errors
           }
          
        });

      
     },
        
    },


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>