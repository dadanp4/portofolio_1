<template>
<div class="grid-container">
    <template v-for="item in product">
            <template v-if="item.id == $route.params.id">
                <div class="card foto-view-product-loading skeleton-viewproduct">
                    <img :src="getlinkimg(item.id, color)" class="card-img-top" alt="..." style="visibility: hidden;">
                    <div class="card-body btncolor-view-product-loading">
                        <button class="whitebtn" v-on:click="color = 'putih'" style="visibility: hidden;"></button>
                        <button class="redbtn" v-on:click="color = 'merah'" style="visibility: hidden;"></button>
                        <button class="greenbtn" v-on:click="color = 'hijau'" style="visibility: hidden;"></button> 
                    </div>
                    <div class="card-boyd soldout-view-product-loading">
                        <template v-if="item.stok == '0'" >
                            <p class="card-text text-soldout-view-product-loading" style="visibility: hidden;">Sold Out</p>
                        </template>
                    </div>
                </div>
                <div class="card deskripsi-view-product-loading">
                    <h5 class="card-title title-view-product-loading skeleton-viewproduct"></h5>
                    <template v-if="item.rating != '0'" >
                        <div class="kerangkai-rating-view-product-loading skeleton-viewproduct">
                            <span class="fa fa-star checked icon-rating-view-product" style="visibility: hidden;"></span>
                            <p class="card-subtitle mb-2 text-muted rating-view-product" style="visibility: hidden;">{{item.rating}}</p>
                        </div>
                    </template>
                    <template v-else>
                        <div class="kerangkai-rating-view-product-loading skeleton-viewproduct">
                            <span class="fa fa-star checked icon-rating-view-product" style="visibility: hidden;"></span>
                            <p class="card-subtitle mb-2 text-muted rating-view-product" style="visibility: hidden;">{{item.rating}}</p>
                        </div>
                    </template>
                    <p class="card-subtitle mb-2 text-muted harga-view-product-loading skeleton-viewproduct"></p>
                    <button style="visibility: hidden;" class="btn btn-outline-secondary btn-minus-view-product" type="button" id="button-addon1" v-on:click="kurangNilai">-</button>
                    <input style="visibility: hidden;" type="text" class="form-control form-view-product" v-bind:value="count" disabled>
                    <button style="visibility: hidden;" class="btn btn-outline-secondary btn-plus-view-product" type="button" id="button-addon2" v-on:click="tambahNilai(item.stok)">+</button>
                    <p class="card-subtitle mb-2 text-muted count-view-product skeleton-viewproduct"> </p>

                    <template v-if="item.stok > 0">
                        <template v-if="isLogin == false">
                            <div class="kerangkai-btn-view-product-loading skeleton-viewproduct">
                                <router-link :to="'/login'">
                                    <button type="button" class="btn btn-success btn-keranjang-view-product" style="visibility: hidden;">+ Keranjang</button>
                                    <button type="button" class="btn btn-outline-success btn-beli-view-product" style="visibility: hidden;">Beli</button>
                                </router-link>
                            </div>
                        </template>
                        <template v-else>
                            <div class="kerangkai-btn-view-product-loading skeleton-viewproduct">
                                <button type="button" class="btn btn-success btn-keranjang-view-product" style="visibility: hidden;" v-on:click="keranjang">+ Keranjang</button>
                                <button type="button" class="btn btn-outline-success btn-beli-view-product" style="visibility: hidden;">Beli</button>
                            </div>
                        </template>
                    </template>
                    <template v-else>
                        <div class="kerangkai-btn-view-product-loading skeleton-viewproduct">
                            <button type="button" class="btn btn-success btn-keranjang-view-product" style="visibility: hidden;" v-on:click="keranjang" disabled>+ Keranjang</button>
                            <button type="button" class="btn btn-outline-success btn-beli-view-product" style="visibility: hidden;" disabled>Beli</button>
                        </div>
                    </template>
                    <p class="card-subtitle mb-2 text-muted title-deskripsi-view-product-loading skeleton-viewproduct"></p>
                    <p class="card-text isi-deskripsi-view-product-loading skeleton-viewproduct">
                        
                    </p>
                    <p class="card-text isi-deskripsi-view-product-loading skeleton-viewproduct">
                        
                    </p>
                    <p class="card-text isi-deskripsi-view-product-loading skeleton-viewproduct">
                        
                    </p>
                    <p class="card-text isi-deskripsi-view-product-loading skeleton-viewproduct">
                        
                    </p>
                    <p class="card-text isi-deskripsi-view-product-loading skeleton-viewproduct">
                        
                    </p>
                </div>
            </template>
    </template>
</div>

</template>

<script>

import DataJson from '@/data.json'
export default {
    data() {
        return {
            path: '/img/',
            extensioncode: '.png',
            color: 'putih',
            colorketerangan:'putih',
            count: 1,
            countkeranjang: 0,
            product: DataJson.product,
            catatan: '',
            loading: false,
            isLogin: false,
        }
    },
    methods: {
        tambahNilai: function (stok) {
            if (this.count != stok) {
                return this.count++
            }
        },
        kurangNilai: function () {
            if (this.count != 1) {
                return this.count--
            }
        },
        getlinkimg: function (id, color) {
            let linkimg = this.path + id +'-'+ color + this.extensioncode
            this.colorketerangan = this.color
            return linkimg
        },
        keranjang: function () {
            this.countkeranjang++
            this.count = 1
            this.catatan = ''
        },
        FormatNilai: function(params){
            const nilai = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
            }).format(params);
            return nilai
        }

    },
}
</script>

<style>

    .foto-view-product-loading{
        border: none;
        width: 350px;
        height: 410px;
    }

    .btncolor-view-product-loading > button{
        margin-left: 200px;
        margin: 5px;
    }

    .text-soldout-view-product-loading{
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 10px;
        padding: 5px;
        background: red;
        color: white;
    }

    .deskripsi-view-product-loading{
        border: none;
        width: 800px;
        height: 700px;
    }

    .title-view-product-loading{
        width: 700px;
        height: 10px;
        
        font-size: 45px;
        margin-top: 15px;
        margin-left: -50px;
    }

    .kerangkai-rating-view-product-loading{
        margin-left: -450px;
        width: 300px;
        height: 10px;
        
    }

    .rating-view-product-loading{
        margin-top: -14px;
        margin-left: 30px;        
    }

    .icon-rating-view-product-loading{
        margin-top: -5px;
        margin-left: 0px;        
    }

    .harga-view-product-loading{
        width: 500px;
        height: 10px;
        
        font-size: 25px;
        margin-top: 10px;
        margin-left: -250px;        
    }

    .form-view-product-loading{
        margin-top: -38px;
        margin-left: -600px;
        width: 50px;
    }

    .btn-minus-view-product-loading{
        margin-top: 0px;
        margin-left: -710px;
    }

    .btn-plus-view-product-loading{
        margin-top: -37px;
        margin-left: -490px;
    }

    .count-view-product-loading{
        height: 10px;
        width: 500px;
        
        font-size: 20px;
        margin-top: 30px;
        margin-left: -240px;
    }

    .kerangkai-btn-view-product-loading{
        height: 10px;
        width: 400px;
        
        margin-top: 10px;
        margin-left: -340px;
    }

    .btn-beli-view-product-loading{
        margin-left: 20px;
        width: 120px;
    }

    .title-deskripsi-view-product-loading{
        height: 10px;
        margin-top: 10px;
        margin-left: -640px;
        width: 100px;
        
    }

    .isi-deskripsi-view-product-loading{
        height: 10px;
        margin-top: 10px;
        margin-left: -10px;
        width: 730px;
        
    }

        /* responsive macbook air screen 1280px */
    @media (max-width: 1280px){
        
    }

    /* responsive smartphone screen 884px */
    @media (max-width: 884px){

        .foto-view-product-loading{
            border: none;
            height: 410px;
        }

        .deskripsi-view-product-loading{
            border: none;
            width: 525px;
            height: 700px;
        }

        .title-view-product-loading{
            width: 480px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product-loading{
            margin-left: -230px;
            width: 300px;
            
        }

        .rating-view-product-loading{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product-loading{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product-loading{
            width: 500px;
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product-loading{
            margin-top: -38px;
            margin-left: -390px;
            width: 50px;
        }

        .btn-minus-view-product-loading{
            margin-top: 0px;
            margin-left: -500px;
        }

        .btn-plus-view-product-loading{
            margin-top: -37px;
            margin-left: -270px;
        }

        .count-view-product-loading{
            width: 500px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product-loading{
            width: 400px;
            
            margin-top: 10px;
            margin-left: -140px;
        }

        .btn-beli-view-product-loading{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -440px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -10px;
            width: 530px;
            
        }
    }
    
    /* responsive smartphone screen 800px */
    @media (max-width: 800px){

        .foto-view-product-loading{
            border: none;
            margin-left: -90px;
            height: 350px;
        }

        .deskripsi-view-product-loading{
            border: none;
            margin-left: -50px;
            width: 435px;
            height: 700px;
        }

        .title-view-product-loading{
            width: 400px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product-loading{
            margin-left: -230px;
            width: 220px;
            
        }

        .rating-view-product-loading{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product-loading{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product-loading{
            width: 415px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product-loading{
            margin-top: -38px;
            margin-left: -300px;
            width: 50px;
        }

        .btn-minus-view-product-loading{
            margin-top: 0px;
            margin-left: -415px;
        }

        .btn-plus-view-product-loading{
            margin-top: -37px;
            margin-left: -170px;
        }

        .count-view-product-loading{
            width: 410px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product-loading{
            width: 310px;
            
            margin-top: 10px;
            margin-left: -140px;
        }

        .btn-beli-view-product-loading{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -350px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -10px;
            width: 440px;
            
        }        
    }

    /* responsive smartphone screen 428px */
    @media (max-width: 428px){

        .grid-container {
            display: grid;
            grid-template-columns: auto;
            gap: 2px;
            
            padding: 0px;
            width: 0px;
        }
        .foto-view-product-loading{
            border: none;
            margin-left: -30px;
            height: 400px;
        }

        .deskripsi-view-product-loading{
            border: none;
            margin-left: -50px;
            width: 400px;
            height: 700px;
        }

        .title-view-product-loading{
            width: 345px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product-loading{
            margin-left: -230px;
            width: 165px;
            
        }

        .rating-view-product-loading{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product-loading{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product-loading{
            width: 365px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product-loading{
            margin-top: -38px;
            margin-left: -250px;
            width: 50px;
        }

        .btn-minus-view-product-loading{
            margin-top: 0px;
            margin-left: -360px;
        }

        .btn-plus-view-product-loading{
            margin-top: -37px;
            margin-left: -130px;
        }

        .count-view-product-loading{
            width: 350px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product-loading{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -140px;
        }

        .btn-beli-view-product-loading{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -290px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -10px;
            width: 380px;
            
        }        
    }
    
    /* responsive smartphone screen 390px */
    @media (max-width: 390px){
        
        .grid-container {
            display: grid;
            grid-template-columns: auto;
            gap: 2px;
            
            padding: 0px;
            width: 0px;
        }
        .foto-view-product-loading{
            border: none;
            margin-top: 25px;
            margin-left: -40px;
            height: 460px;
        }

        .deskripsi-view-product-loading{
            border: none;
            margin-top: 30px;
            margin-left: -50px;
            width: 385px;
            height: 900px;
        }

        .title-view-product-loading{
            width: 325px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product-loading{
            margin-left: -210px;
            width: 165px;
            
        }

        .rating-view-product-loading{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product-loading{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product-loading{
            width: 345px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product-loading{
            margin-top: -38px;
            margin-left: -235px;
            width: 50px;
        }

        .btn-minus-view-product-loading{
            margin-top: 0px;
            margin-left: -340px;
        }

        .btn-plus-view-product-loading{
            margin-top: -37px;
            margin-left: -130px;
        }

        .count-view-product-loading{
            width: 335px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product-loading{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -120px;
        }

        .btn-beli-view-product-loading{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -275px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product-loading{
            height: 10px;
            margin-top: 10px;
            margin-left: -10px;
            width: 365px;
            
        }

    }

    /* responsive smartphone screen 360px */
    @media (max-width: 360px){

        .grid-container {
            display: grid;
            grid-template-columns: auto;
            gap: 2px;
            
            padding: 0px;
            width: 0px;
        }
        .foto-view-product-loading{
            border: none;
            margin-top: 25px;
            margin-left: -27px;
            width: 350px;
            height: 460px;
        }

        .btncolor-view-product-loading >  button{
            margin-right: 200px;
            margin: 5px;
        }

        .deskripsi-view-product-loading{
            border: none;
            margin-top: 30px;
            margin-left: -30px;
            width: 355px;
            height: 900px;
        }

        .title-view-product-loading{
            width: 300px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product-loading{
            margin-left: -210px;
            width: 140px;
            
        }

        .rating-view-product-loading{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product-loading{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product-loading{
            width: 320px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product-loading{
            margin-top: -38px;
            margin-left: -225px;
            width: 50px;
        }

        .btn-minus-view-product-loading{
            margin-top: 0px;
            margin-left: -320px;
        }

        .btn-plus-view-product-loading{
            margin-top: -37px;
            margin-left: -125px;
        }

        .count-view-product-loading{
            width: 340px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -10px;
        }

        .kerangkai-btn-view-product-loading{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -100px;
        }

        .btn-beli-view-product-loading{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -250px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -10px;
            width: 340px;
            
        }

    }

    /* responsive smartphone screen 320px */
    @media (max-width: 320px){
        
        .grid-container {
            display: grid;
            grid-template-columns: auto;
            gap: 2px;
            
            padding: 0px;
            width: 0px;
        }
        .foto-view-product-loading{
            border: none;
            margin-top: -10px;
            margin-left: -13px;
            width: 310px;
            height: 410px;
        }

        .btncolor-view-product-loading >  button{
            margin-right: 200px;
            margin: 5px;
        }

        .deskripsi-view-product-loading{
            border: none;
            margin-top: 30px;
            margin-left: -25px;
            width: 325px;
            height: 900px;
        }

        .title-view-product-loading{
            width: 300px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: 0px;
        }

        .kerangkai-rating-view-product-loading{
            margin-left: -160px;
            width: 140px;
            
        }

        .rating-view-product-loading{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product-loading{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product-loading{
            width: 280px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -20px;        
        }

        .form-view-product-loading{
            margin-top: -38px;
            margin-left: -160px;
            width: 50px;
        }

        .btn-minus-view-product-loading{
            margin-top: 0px;
            margin-left: -260px;
        }

        .btn-plus-view-product-loading{
            margin-top: -37px;
            margin-left: -50px;
        }

        .count-view-product-loading{
            width: 290px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -10px;
        }

        .kerangkai-btn-view-product-loading{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -50px;
        }

        .btn-beli-view-product-loading{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: -200px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product-loading{
            margin-top: 10px;
            margin-left: 5px;
            width: 305px;
            
        }

    }

    .skeleton-viewproduct{
        animation: skeleton-loading 1s linear infinite alternate;
    }

    @keyframes skeleton-loading{
        0%{
            background-color: hsl(200, 20%, 70%);
        }
        100%{
            background-color: hsl(200, 20%, 95%);
        }
    } 

</style>








<!-- <script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template> -->
