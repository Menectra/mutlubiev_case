<template>
  <div>
    <div class="container2">
      <div class="inner mx-auto">
        <div class="temiz">
          Nasıl Temizliyoruz?
        </div>
        <div class="text1">
          <p>
            Mutlubiev olarak alıştığın temizlik hizmetine hızlı ve modern bir
            dokunuş yaptık. Salon, mutfak, banyo ve yatak odalarını pırıl pırıl
            yapıyor, uygun fiyatlı ekstra hizmetlerimizle ihtiyacına en uygun
            temizlik hizmetini gerçekleştiriyoruz. Evinin temizliği bitmeden
            hizmetimizi sonlandırmıyoruz. Adli sicil kayıtları ve referansları
            kontrol edilmiş, düzenli eğitimleri verilmiş ve sisteme kaydedilmiş
            temizlik profesyonellerini istediğin saatte ve tarihte çağırabilir,
            temizlik sonunda onları puanlayabilir ve beğendiğin temizlik
            profesyonelini daha sonra tekrar talep edebilirsin.
          </p>
        </div>
        <button type="button" class="btn  btn-lg">Detaylar İçin</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "how_clean",
};
</script>

<style scoped>
.container2 {
  background-color: #f5f5f5;
  padding: 20px;
}
.inner {
  max-width: 700px;
  align-items: center;
}
.temiz {
  font-size: 44px;
  padding: 20;
}
.text1 {
  display: flex;
  justify-content: center;
  padding: 40px;
}
.btn {
  background-color: #f9423a;
  color: white;
  width: 300px;
}
</style>
