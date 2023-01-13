<template lang="">
        <div class="grid-container">
        <template v-for="item in product">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h6 class="card-title title-product-loading skeleton-product"></h6>
                    <template v-if="item.rating != '0'" >
                        <span class="fa fa-star checked icon-rating-product-loading"></span>
                        <h5 class="card-subtitle mb-2 text-muted rating-product-loading skeleton-product"></h5>
                    </template>
                    <template v-else>
                        <span class="fa fa-star checked" style="visibility: hidden;"></span>
                        <h5 class="card-subtitle mb-2 text-muted rating-product-loading skeleton-product"></h5>
                    </template>
                        <div class="bingkai-img-product-loading skeleton-product">

                        </div>
                    <p class="card-text harga-product-loading skeleton-product">
                        
                    </p>
                    <template v-if="item.stok == '0'" >
                        <p class="card-text soldout-product-loading skeleton-product">
                            
                        </p>
                    </template>                            
                    <template v-else>
                        <p class="card-text soldout-product-loading skeleton-product">
                            
                        </p>
                    </template>                            
                </div>
            </div>
        </template>
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
          // loading: false,
      }
  },
  methods: {
      getlinkimg: function (params) {
          let linkimg = this.path + params + this.extensioncode
          return linkimg
      },
      // Loading: function () {
      //     console.log(this.loading);
      //     setTimeout(() => {  
      //         this.loading = true
      //         console.log(this.loading)
      //     }, 5000);
      // }
  },
}

</script>

<style >

    .bingkai-img-product-loading{
        border-radius: 10px;        
        width: 200px;
        height: 280px;
    }

    .title-product-loading{
        width: 110px;
        height: 15px;
        border-radius: 10px;
        margin-left: -30px;
    }

    .icon-rating-product-loading{
        visibility: hidden;
        margin-left: -30px;
    }

    .harga-product-loading{
        width: 100px;
        height: 15px;
        border-radius: 10px;
        margin-top: 30px;
        margin-left: -30px;
    }
    .rating-product-loading{
        width: 70px;
        height: 15px;
        border-radius: 10px;
        margin-top: -20px;
        margin-left: -30px;
    }

    .soldout-product-loading{
        width: 70px;
        height: 15px;
        border-radius: 10px;
        color: red;
        margin-left: -30px;
    }

    html::-webkit-scrollbar {
        display: none;
    }

  .skeleton-product{
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

  defineProps({
    msg: {
    type: String,
    required: true
  }

})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style> -->
