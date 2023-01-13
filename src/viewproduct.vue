<script setup>
    import LoadingViewProduct from './components/LoadingViewProduct.vue'
</script>

<template>
    <div>
        <div class="container">
            
            <template v-if="loading == false">
                <LoadingViewProduct></LoadingViewProduct>
            </template>

            <template v-else>
                <div class="grid-container">
                    <template v-for="item in product">
                            <template v-if="item.id == $route.params.id">
                                <div class="card foto-view-product">
                                    <img :src="getlinkimg(item.id, color)" class="card-img-top" alt="...">
                                    <div class="card-body btncolor-view-product">
                                        <button class="whitebtn" v-on:click="color = 'putih'"></button>
                                        <button class="redbtn" v-on:click="color = 'merah'"></button>
                                        <button class="greenbtn" v-on:click="color = 'hijau'"></button> 
                                    </div>
                                    <div class="card-boyd soldout-view-product">
                                        <template v-if="item.stok == '0'" >
                                            <p class="card-text text-soldout-view-product">Sold Out</p>
                                        </template>
                                    </div>
                                </div>
                                <div class="card deskripsi-view-product">
                                    <h5 class="card-title title-view-product">{{item.name}}</h5>
                                    <template v-if="item.rating != '0'" >
                                        <div class="kerangkai-rating-view-product">
                                            <span class="fa fa-star checked icon-rating-view-product"></span>
                                            <p class="card-subtitle mb-2 text-muted rating-view-product">{{item.rating}}</p>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="kerangkai-rating-view-product">
                                            <span class="fa fa-star checked icon-rating-view-product" style="visibility: hidden;"></span>
                                            <p class="card-subtitle mb-2 text-muted rating-view-product" style="visibility: hidden;">{{item.rating}}</p>
                                        </div>
                                    </template>
                                    <p class="card-subtitle mb-2 text-muted harga-view-product">{{FormatNilai(item.harga)}}</p>
                                    <button class="btn btn-outline-secondary btn-minus-view-product" type="button" id="button-addon1" v-on:click="kurangNilai">-</button>
                                    <input type="text" class="form-control form-view-product" v-bind:value="count" disabled>
                                    <button class="btn btn-outline-secondary btn-plus-view-product" type="button" id="button-addon2" v-on:click="tambahNilai(item.stok)">+</button>
                                    <p class="card-subtitle mb-2 text-muted count-view-product">Stok {{item.stok - count}} | Total Harga : {{FormatNilai(item.harga*count)}} </p>

                                    <template v-if="item.stok > 0">
                                        <template v-if="isLogin == false">
                                            <div class="kerangkai-btn-view-product">
                                                <router-link :to="'/login'">
                                                    <button type="button" class="btn btn-success btn-keranjang-view-product">+ Keranjang</button>
                                                    <button type="button" class="btn btn-outline-success btn-beli-view-product">Beli</button>
                                                </router-link>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="kerangkai-btn-view-product">
                                                <button type="button" class="btn btn-success btn-keranjang-view-product" v-on:click="keranjang">+ Keranjang</button>
                                                <button type="button" class="btn btn-outline-success btn-beli-view-product">Beli</button>
                                            </div>
                                        </template>
                                    </template>
                                    <template v-else>
                                        <div class="kerangkai-btn-view-product">
                                            <button type="button" class="btn btn-success btn-keranjang-view-product" v-on:click="keranjang" disabled>+ Keranjang</button>
                                            <button type="button" class="btn btn-outline-success btn-beli-view-product" disabled>Beli</button>
                                        </div>
                                    </template>
                                    <p class="card-subtitle mb-2 text-muted title-deskripsi-view-product">Deskripsi</p>
                                    <p class="card-text isi-deskripsi-view-product">
                                        {{ item.deskripsi }}
                                    </p>
                                </div>
                            </template>
                    </template>
                </div>

            </template>

        </div>
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
        ,Loading: function () {
            console.log(this.loading);
            setTimeout(() => {  
                this.loading = true
                console.log(this.loading)
            }, 4000);
        }

    },
    mounted() {
        this.Loading()
    },
}
</script>

<style>

    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 2px;
        padding: 0px;
        width: 0px;
    }

    .foto-view-product{
        border: none;
        width: 350px;
        height: 410px;
    }

    .btncolor-view-product > button{
        margin-left: 200px;
        margin: 5px;
    }

    .text-soldout-view-product{
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 10px;
        padding: 5px;
        background: red;
        color: white;
    }

    .deskripsi-view-product{
        border: none;
        width: 800px;
        height: 700px;
    }

    .title-view-product{
        width: 700px;
        
        font-size: 45px;
        margin-top: 15px;
        margin-left: -50px;
    }

    .kerangkai-rating-view-product{
        margin-left: -450px;
        width: 300px;
        
    }

    .rating-view-product{
        margin-top: -14px;
        margin-left: 30px;        
    }

    .icon-rating-view-product{
        margin-top: -5px;
        margin-left: 0px;        
    }

    .harga-view-product{
        width: 500px;
        
        font-size: 25px;
        margin-top: 10px;
        margin-left: -250px;        
    }

    .form-view-product{
        margin-top: -38px;
        margin-left: -600px;
        width: 50px;
    }

    .btn-minus-view-product{
        margin-top: 0px;
        margin-left: -710px;
    }

    .btn-plus-view-product{
        margin-top: -37px;
        margin-left: -490px;
    }

    .count-view-product{
        width: 500px;
        
        font-size: 20px;
        margin-top: 30px;
        margin-left: -240px;
    }

    .kerangkai-btn-view-product{
        width: 400px;
        
        margin-top: 10px;
        margin-left: -340px;
    }

    .btn-beli-view-product{
        margin-left: 20px;
        width: 120px;
    }

    .title-deskripsi-view-product{
        margin-top: 10px;
        margin-left: -640px;
        width: 100px;
        
    }

    .isi-deskripsi-view-product{
        margin-top: 10px;
        margin-left: -10px;
        width: 730px;
        
    }

        /* responsive macbook air screen 1280px */
    @media (max-width: 1280px){
        
    }

    /* responsive smartphone screen 884px */
    @media (max-width: 884px){
        .deskripsi-view-product{
            width: 525px;
            height: 700px;
        }

        .title-view-product{
            width: 480px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product{
            margin-left: -230px;
            width: 300px;
            
        }

        .rating-view-product{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product{
            width: 500px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product{
            margin-top: -38px;
            margin-left: -390px;
            width: 50px;
        }

        .btn-minus-view-product{
            margin-top: 0px;
            margin-left: -500px;
        }

        .btn-plus-view-product{
            margin-top: -37px;
            margin-left: -270px;
        }

        .count-view-product{
            width: 500px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product{
            width: 400px;
            
            margin-top: 10px;
            margin-left: -140px;
        }

        .btn-beli-view-product{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -440px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -10px;
            width: 530px;
            
        }
    }
    
    /* responsive smartphone screen 800px */
    @media (max-width: 800px){

        .foto-view-product{
            margin-left: -90px;
            height: 350px;
        }

        .deskripsi-view-product{
            margin-left: -50px;
            width: 435px;
            height: 700px;
        }

        .title-view-product{
            width: 400px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product{
            margin-left: -230px;
            width: 220px;
            
        }

        .rating-view-product{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product{
            width: 415px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product{
            margin-top: -38px;
            margin-left: -300px;
            width: 50px;
        }

        .btn-minus-view-product{
            margin-top: 0px;
            margin-left: -415px;
        }

        .btn-plus-view-product{
            margin-top: -37px;
            margin-left: -170px;
        }

        .count-view-product{
            width: 410px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product{
            width: 310px;
            
            margin-top: 10px;
            margin-left: -140px;
        }

        .btn-beli-view-product{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -350px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product{
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
        .foto-view-product{
            margin-left: -30px;
            height: 400px;
        }

        .deskripsi-view-product{
            margin-left: -50px;
            width: 400px;
            height: 700px;
        }

        .title-view-product{
            width: 345px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product{
            margin-left: -230px;
            width: 165px;
            
        }

        .rating-view-product{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product{
            width: 365px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product{
            margin-top: -38px;
            margin-left: -250px;
            width: 50px;
        }

        .btn-minus-view-product{
            margin-top: 0px;
            margin-left: -360px;
        }

        .btn-plus-view-product{
            margin-top: -37px;
            margin-left: -130px;
        }

        .count-view-product{
            width: 350px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -140px;
        }

        .btn-beli-view-product{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -290px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product{
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
        .foto-view-product{
            margin-top: 25px;
            margin-left: -40px;
            height: 460px;
        }

        .deskripsi-view-product{
            margin-top: 30px;
            margin-left: -50px;
            width: 385px;
            height: 900px;
        }

        .title-view-product{
            width: 325px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product{
            margin-left: -210px;
            width: 165px;
            
        }

        .rating-view-product{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product{
            width: 345px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product{
            margin-top: -38px;
            margin-left: -235px;
            width: 50px;
        }

        .btn-minus-view-product{
            margin-top: 0px;
            margin-left: -340px;
        }

        .btn-plus-view-product{
            margin-top: -37px;
            margin-left: -130px;
        }

        .count-view-product{
            width: 335px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -40px;
        }

        .kerangkai-btn-view-product{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -120px;
        }

        .btn-beli-view-product{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -275px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product{
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
        .foto-view-product{
            margin-top: 25px;
            margin-left: -27px;
            width: 350px;
            height: 460px;
        }

        .btncolor-view-product >  button{
            margin-right: 200px;
            margin: 5px;
        }

        .deskripsi-view-product{
            margin-top: 30px;
            margin-left: -30px;
            width: 355px;
            height: 900px;
        }

        .title-view-product{
            width: 300px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: -50px;
        }

        .kerangkai-rating-view-product{
            margin-left: -210px;
            width: 140px;
            
        }

        .rating-view-product{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product{
            width: 320px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -30px;        
        }

        .form-view-product{
            margin-top: -38px;
            margin-left: -225px;
            width: 50px;
        }

        .btn-minus-view-product{
            margin-top: 0px;
            margin-left: -320px;
        }

        .btn-plus-view-product{
            margin-top: -37px;
            margin-left: -125px;
        }

        .count-view-product{
            width: 340px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -10px;
        }

        .kerangkai-btn-view-product{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -100px;
        }

        .btn-beli-view-product{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -250px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product{
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
        .foto-view-product{
            margin-top: -10px;
            margin-left: -13px;
            width: 310px;
            height: 410px;
        }

        .btncolor-view-product >  button{
            margin-right: 200px;
            margin: 5px;
        }

        .deskripsi-view-product{
            margin-top: 30px;
            margin-left: -25px;
            width: 325px;
            height: 900px;
        }

        .title-view-product{
            width: 300px;
            
            font-size: 45px;
            margin-top: 15px;
            margin-left: 0px;
        }

        .kerangkai-rating-view-product{
            margin-left: -160px;
            width: 140px;
            
        }

        .rating-view-product{
            margin-top: -14px;
            margin-left: 30px;        
        }

        .icon-rating-view-product{
            margin-top: -5px;
            margin-left: 0px;        
        }

        .harga-view-product{
            width: 280px;
            
            font-size: 25px;
            margin-top: 10px;
            margin-left: -20px;        
        }

        .form-view-product{
            margin-top: -38px;
            margin-left: -160px;
            width: 50px;
        }

        .btn-minus-view-product{
            margin-top: 0px;
            margin-left: -260px;
        }

        .btn-plus-view-product{
            margin-top: -37px;
            margin-left: -50px;
        }

        .count-view-product{
            width: 290px;
            
            font-size: 20px;
            margin-top: 30px;
            margin-left: -10px;
        }

        .kerangkai-btn-view-product{
            width: 250px;
            
            margin-top: 10px;
            margin-left: -50px;
        }

        .btn-beli-view-product{
            margin-left: 20px;
            width: 120px;
        }

        .title-deskripsi-view-product{
            margin-top: 10px;
            margin-left: -200px;
            width: 100px;
            
        }

        .isi-deskripsi-view-product{
            margin-top: 10px;
            margin-left: 5px;
            width: 305px;
            
        }

    }


</style>