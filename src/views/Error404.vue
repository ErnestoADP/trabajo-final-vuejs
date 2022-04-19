<template>
  <div class="container">
    <h1 class="neonText">404</h1>
    <h2 class="neonText">Page Not Found</h2>
  </div>
</template>

<style>
.neonText {
  animation: flicker 1.5s infinite alternate;
  color: #fff;
  font-size: 4.2rem;
}
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe,
      0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
  }
}
.container {
  margin-top: 20vh;
}
</style>
