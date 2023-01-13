<template>
    <div>
        <div id="bg-header" class="container-fluid p-5 text-white text-left">
            <a class="navbar-brand" href="/">
                <img src="/img/img-web/logo.png" alt="" width="100" height="100" id="imglogo" class="d-inline-block align-text-top position-relative end-10">
                <h1 id="title-header">Cigon's Store</h1>
            </a>
        </div>
    </div>
    <div>
        <button style="border: none; top: 20px; right: 20px;" type="button" class="btn position-absolute">
            <img :src="'/img/img-web/buy.png'" width="25">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                + 0
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
    </div>
</template>

<style scope>
    #imglogo{
        position: relative;
        left: -30px;
        top: -40px;
        animation: img-logo 1s linear infinite alternate;
    }
    #title-header{
        color: black;
        position: absolute;
        left: 110px;
        top: 20px;
        font-size: 70px;
    }
    #bg-header{
        height: 150px;
        /* background-image: url('/img/img-web/bg.png'); */
        /* background-repeat: no-repeat; */
        background-position: 0px -130px;
        background-attachment: fixed;  
        background-size: cover;
        width: 100%;        
    }

    @keyframes img-logo{
        0%{
            top: -40px;
        }
        100%{
            opacity: .9;
            transform: rotate(-5deg);
            top: -20px;
        }
    }

    @media (max-width: 590px){
        #title-header{
            position: absolute;
            left: 110px;
            top: 30px;
            font-size: 60px;
        }

    }

    @media (max-width: 450px){
        #title-header{
            position: absolute;
            left: 70px;
            top: 30px;
            font-size: 30px;
        }
        #imglogo{
            position: relative;
            height: 50px;
            width: 50px;
            left: -30px;
            top: -40px;
            animation: img-logo 1s linear infinite alternate;
        }
        #bg-header{
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-attachment: fixed;  
            background-size: 590px 700px;
            width: 100%;        
        }        
    }

    @media (max-width: 390px)  {
        
        #bg-header{
            background-repeat: no-repeat;
            background-position: 0px 0px;
            background-attachment: fixed;  
            background-size: 390px 700px;
            width: 100%;        
        }        
    }

</style>   