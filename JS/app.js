// 객체로 환율 저장
let currencyRatio = {
  USD: {
    KRW: 1379.5,
    USD: 1,
    VND: 23540.96,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.4,
    uit: "원",
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
};

// from-currency 값 가져오기
const fromItem = document.querySelectorAll("#from-currency-list a");
const fromBtn = document.getElementById("from-button");

let fromCurrency = "USD";

fromItem.forEach(function (item) {
  item.addEventListener("click", changeFromItemName);
});

function changeFromItemName(item) {
  fromBtn.textContent = item.currentTarget.textContent;
  fromCurrency = item.currentTarget.textContent;
  convert();
}

// to-currency 값 가져오기
const toItem = document.querySelectorAll("#to-currency-list a");
const toBtn = document.getElementById("to-button");

let toCurrency = "KRW";

toItem.forEach(function (item) {
  item.addEventListener("click", changeToItemName);
});

function changeToItemName(item) {
  toBtn.textContent = item.currentTarget.textContent;
  toCurrency = item.currentTarget.textContent;
  convert();
}

// 환전시스템 적용
function convert() {
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  document.getElementById("to-input").value = convertedAmount;
}

// to-input박스값 입력해도 환전작동
function convertRe() {
  let amount = document.getElementById("to-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  document.getElementById("from-input").value = convertedAmount;
}
