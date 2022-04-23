<template>
  <div class="footer bg-dark text-center py-3">
    <b-container fluid>
      &copy; 2020 Copyright: El Rincón de los virgenes

      <div >
        <b-link class="link" href="https://www.facebook.com/ernestoandres.diazplaza">  <b-icon
          class="icon"
          icon="facebook"
          scale="2"
          animation="throb"
        > </b-icon></b-link>
      
        <b-link class="link" href="https://www.instagram.com/"> <b-icon
          class="icon"
          icon="instagram"
          scale="2"
          animation="throb"
        ></b-icon></b-link>
    
      </div>
    </b-container>
  </div>
  <!-- Footer -->
</template>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  color: white;
  text-align: center;
  text-shadow: 0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
  border-top: 1px solid rgb(78, 78, 78);
 
}

.icon {
  margin: 15px;
  border-radius: 50%;
  
   
}

.link {
 text-decoration: none;
 color: white;
}
</style>
