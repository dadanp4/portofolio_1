<template>
    <div>

        <div class="position-relative" style="height: 500px;">
            <div class="position-absolute top-50 start-50 translate-middle">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username / Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn btn-login">Login</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
    .card{
        align-items: center;
    }
    
    .btn-login{
        color: white;
        background: black;
    }
</style>