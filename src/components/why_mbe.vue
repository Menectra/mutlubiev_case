<template>
  <div>
    <div class="container1">
      <div class="why-mbe">
        <h2>Neden Mutlubiev?</h2>
      </div>
    </div>
    <div>
      <div class="card-deck">
        <div class="card">
          <img
            class="image mx-auto"
            src="https://mutlubiev.com/images/profesyonel-hizmet.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Profesyonel Hizmet</h5>
            <p class="card-text">
              Tüm profesyoneller ile yüz yüze görüşüp düzenli eğitimler
              veriyoruz. Ayrıca mutlubiev sistemine kayıtlı profesyoneller
              evinde bulunduğu sürece tüm yasal gereklilikleri senin adına
              sağlıyoruz.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="image mx-auto"
            src="https://mutlubiev.com/images/guvenli.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Güvenilir Profesyoneller</h5>
            <p class="card-text">
              Profesyonellerin adli kayıtlarını kontrol ediyoruz.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            class="image mx-auto"
            src="https://mutlubiev.com/images/sigorta.svg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Sigorta Güvencesi</h5>
            <p class="card-text">
              Hizmet süresince evinde oluşabilecek hasarlara karşı evini AXA
              sigorta ile 250.000 TL'ye kadar güvence altına alıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whymbe",
  props: ["icon", "title", "text"],
};
</script>

<style scoped>
.card-deck {
  box-shadow: white;
  padding: 40px;
}
.card-title {
  font-weight: bold;
  padding: 40px;
}
.image {
  height: 120px;
  width: 120px;
}
.container1 {
    padding: 40px;
}
.card-body {
  padding: 40px;
}

</style>
