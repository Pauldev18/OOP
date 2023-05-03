let data = [];

fetch('http://localhost:8080/luotgui')
  .then(response => response.json())
  .then(json => {
    data = json;
  });

const input = document.querySelector('.search0');
const button = document.querySelector('.done');
const maThe = document.querySelector('.search1');
const bienKS = document.querySelector('.search2');
const thoiGian = document.querySelector('.search3');
const khuVuc = document.querySelector('.search4');
const giaTien = document.querySelector('.search5');

button.addEventListener('click', () => {
  const id = input.value;
  const item = data.find(item => item.id == id);
  if (item) {
    maThe.value = item.maVe;
    bienKS.value = item.bienSo;
    thoiGian.value = `${item.thoiGianGui} - ${item.thoiGianTra}`;
    khuVuc.value = item.khu;
    giaTien.value = item.tien;
  } else {
    maThe.value = '';
    bienKS.value = '';
    thoiGian.value = '';
    khuVuc.value = '';
    giaTien.value = '';
  }
});