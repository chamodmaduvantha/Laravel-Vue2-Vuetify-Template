<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Legends</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Map</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Guide</a>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About US</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Admin</a>
              </li>
            </ul>
          </form>
        </div>
      </nav> 
  </div>
</template>
    
    
<script>
  
  export default{
    name: "navBar",

  }
</script>