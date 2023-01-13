<script setup>
    import LoadingProduct from './components/LoadingProduct.vue'
</script>
<template lang="">
    <div>
        <div class="container">

            <template v-if="loading != true" >
                <LoadingProduct></LoadingProduct>
            </template>
            <template v-else>
                
                <div class="grid-container">
                    <template v-for="item in product">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h6 class="card-title title-product">{{item.name}}</h6>
                                <template v-if="item.rating != '0'" >
                                    <span class="fa fa-star checked icon-rating-product"></span>
                                    <h5 class="card-subtitle mb-2 text-muted rating-product">{{item.rating}}</h5>
                                </template>
                                <template v-else>
                                    <span class="fa fa-star checked" style="visibility: hidden;"></span>
                                    <h5 class="card-subtitle rating-product mb-2 text-muted" style="visibility: hidden;">{{item.rating}}</h5>
                                </template>
                                <router-link :to="'viewproduct/'+item.id">
                                    <div class="bingkai-img-product">
                                        <img class="card-img-top img-product" :src="getlinkimg(item.id)">
                                    </div>
                                </router-link>                                
                                <p class="card-text harga-product">
                                     {{FormatNilai(item.harga)}}
                                </p>
                                <template v-if="item.stok == '0'" >
                                    <p class="card-text soldout-product">
                                        Sold Out
                                    </p>
                                </template>                            
                            </div>
                        </div>
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
            id: 2,
            path: '/img/',
            extensioncode: '-putih.png',
            product: DataJson.product,
            loading: false,
        }
    },
    methods: {
        getlinkimg: function (params) {
            let linkimg = this.path + params + this.extensioncode
            return linkimg
        },
        FormatNilai: function(params){
            const nilai = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
            }).format(params);
            return nilai
        },
        Loading: function () {
            console.log(this.loading);
            setTimeout(() => {  
                this.loading = true
                console.log(this.loading)
            }, 3000);
        }
    },
    mounted() {
        this.Loading()
    },
}

</script>

<style >


    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 10px;
        /* background-color: #2196F3; */
        padding: 0px;
    }

    .bingkai-img-product{
        width: 200px;
        height: 280px;
    }

    .img-product{
        width: 250px;
        position: absolute;
        top: 70px;
        left: 10px;
        transition: ease-in-out 0.4s;
        cursor: pointer;
    }
    .img-product:hover{
        width: 280px;
    }

    .title-product{
        margin-left: -30px;
    }

    .icon-rating-product{
        margin-left: -30px;
    }

    .harga-product{
        margin-left: -30px;
    }
    .rating-product{
        margin-top: -20px;
        margin-left: 0px;
    }

    .soldout-product{
        text-align: center;
        border-radius: 10px;
        width: 80px;
        background: red;
        color:white;
        margin-left: -30px;
    }

    html::-webkit-scrollbar {
        display: none;
    }


    /* responsive macbook air screen 1280px */
    @media (max-width: 1280px){
        .grid-container {
            margin-left: -30px;
            display: grid;
            grid-template-columns: auto auto auto auto;
            gap: 10px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }

    /* responsive smartphone screen 884px */
    @media (max-width: 884px){
        .grid-container {
            margin-left: -90px;
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 5px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }
    
    /* responsive smartphone screen 800px */
    @media (max-width: 800px){
        .grid-container {
            margin-left: 50px;
            display: grid;
            grid-template-columns: auto auto;
            gap: 50px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }

    /* responsive smartphone screen 428px */
    @media (max-width: 428px){
        .grid-container {
            margin-left: 50px;
            display: grid;
            grid-template-columns: auto;
            gap: 20px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }
    
    /* responsive smartphone screen 390px */
    @media (max-width: 390px){
        .grid-container {
            margin-left: 40px;
            display: grid;
            grid-template-columns: auto;
            gap: 30px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }

    /* responsive smartphone screen 360px */
    @media (max-width: 360px){
        .grid-container {
            margin-left: 20px;
            display: grid;
            grid-template-columns: auto;
            gap: 30px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }

    /* responsive smartphone screen 320px */
    @media (max-width: 320px){
        .grid-container {
            margin-left: 5px;
            display: grid;
            grid-template-columns: auto;
            gap: 30px;
            /* background-color: #2196F3; */
            padding: 0px;
        }
    }

</style>


<!-- <div v-for="item in product">
    <div class="positionframefoto">
        <div class="frameproduct">
            <template v-if="item.rating != '0'" >
                
                <div class="skeleton skeleton-star"></div>

                <span class="fa fa-star checked"></span>
                <p class="rating">{{item.rating}}</p>
            </template>
            <template v-else>
                
                <div class="skeleton skeleton-star"></div>
                
                <span class="fa fa-star checked" style="visibility: hidden;"></span>
                <p class="rating" style="visibility: hidden;">{{item.rating}}</p>
            </template>
            <router-link :to="'viewproduct/'+item.id">
                <img class="fotoproduct" :src="getlinkimg(item.id)" width="190">
            </router-link>
        </div>
        <div class="skeleton skeleton-namaproduct"></div>
        <div class="skeleton skeleton-hargaproduct"></div>
        <span class="namaproduct"><div class="namaproductchild">{{item.name}}</div></span><br>
        <span class="hargaproduct"><b>Rp {{item.harga}}</b></span>
        <template v-if="item.stok == '0'" >
            <img id="imgsoldout" :src="'/img/soldout.png'" width="100">
        </template>                            
    </div>
</div> -->